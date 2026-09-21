const { test, beforeEach, after } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const { execFileSync, spawn } = require('node:child_process');
const root = path.resolve(__dirname, '..');
require.extensions['.ts'] = (module, filename) => {
  const source = fs.readFileSync(filename, 'utf8').replace(/"@\//g, `"${root}/`);
  module._compile(ts.transpileModule(source, { compilerOptions: {
    module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true
  }}).outputText, filename);
};
const { createLeadSubmitter } = require('../lib/lead-submission.ts');
const { sendLeadToGoHighLevel } = require('../lib/gohighlevel.ts');
const quote = require('../app/api/quote/route.ts');
const estimate = require('../app/api/estimate/route.ts');
const redisBin = process.env.TEST_REDIS_BIN;
if (!redisBin) throw new Error('Set TEST_REDIS_BIN to a directory containing redis-server and redis-cli. Tests use only a private Unix socket and mocked GHL.');
const tmp = fs.mkdtempSync('/tmp/scs-leads-');
const socket = path.join(tmp, 'redis.sock');
const server = spawn(path.join(redisBin, 'redis-server'), ['--port', '0', '--unixsocket', socket, '--save', '', '--appendonly', 'no'], { stdio: 'ignore' });
const ready = new Promise((resolve, reject) => {
  const timer = setInterval(() => { if (fs.existsSync(socket)) { clearInterval(timer); resolve(); } }, 10);
  server.on('error', e => { clearInterval(timer); reject(e); });
});
const command = args => execFileSync(path.join(redisBin, 'redis-cli'), ['-s', socket, '--raw', ...args.map(String)], { encoding: 'utf8' }).trim();
const originalFetch = global.fetch;
let sends, webhook, storageFailure;
const payload = { formType: 'quote', source: 'website-contact-form', firstName: 'Test', lastName: 'Lead', email: 'test@example.invalid', phone: '6615550100', address: 'Test address', zip: '93534' };
const id = '00000000-0000-4000-8000-000000000001';
beforeEach(async () => {
  await ready;
  delete process.env.VERCEL_ENV;
  command(['FLUSHDB']); sends = 0; storageFailure = false;
  process.env.GHL_WEBHOOK_URL = 'https://ghl.invalid/hook';
  process.env.UPSTASH_REDIS_REST_URL = 'https://redis.invalid';
  process.env.UPSTASH_REDIS_REST_TOKEN = 'test';
  webhook = async () => new Response('{}', { status: 200 });
  const storage = new Map();
  global.sessionStorage = { getItem: key => storage.get(key) || null, setItem: (key, value) => storage.set(key, value) };
  global.fetch = async (url, options) => {
    if (url === 'https://redis.invalid') {
      if (storageFailure) throw new Error('storage offline');
      return Response.json({ result: command(JSON.parse(options.body)) });
    }
    assert.equal(url, 'https://ghl.invalid/hook');
    sends++;
    return webhook(options);
  };
});
after(() => { global.fetch = originalFetch; server.kill(); fs.rmSync(tmp, { recursive: true, force: true }); });

test('three concurrent requests and retries send one webhook, across request IDs', async () => {
  let release; webhook = () => new Promise(resolve => { release = () => resolve(new Response('{}')); });
  const first = sendLeadToGoHighLevel(payload, id);
  while (!release) await new Promise(resolve => setImmediate(resolve));
  await assert.rejects(sendLeadToGoHighLevel(payload, id), { code: 'delivery_unconfirmed' });
  await assert.rejects(sendLeadToGoHighLevel(payload, id + '2'), { code: 'delivery_unconfirmed' });
  release(); await first;
  assert.equal((await sendLeadToGoHighLevel(payload, id)).duplicate, true);
  assert.equal((await sendLeadToGoHighLevel(payload, id + '2')).duplicate, true);
  assert.equal(sends, 1);
});
test('normalizes contact formatting and ignores page metadata; changed inquiry remains legitimate', async () => {
  await sendLeadToGoHighLevel(payload, id);
  await sendLeadToGoHighLevel({ ...payload, phone: '+1 (661) 555-0100', email: ' TEST@example.invalid ', pagePath: '/contact', language: 'es' }, id + '2');
  assert.equal(sends, 1);
  await sendLeadToGoHighLevel({ ...payload, message: 'A different project' }, id + '3');
  assert.equal(sends, 2);
  await assert.rejects(sendLeadToGoHighLevel({ ...payload, message: 'Changed' }, id), { code: 'submission_conflict' });
});
test('legacy clients without IDs deduplicate; content window expires but original ID persists', async () => {
  await sendLeadToGoHighLevel(payload, id);
  await sendLeadToGoHighLevel(payload);
  for (const key of command(['KEYS', 'scs:{lead}:development:content:*']).split('\n')) command(['DEL', key]);
  await sendLeadToGoHighLevel(payload, id);
  assert.equal(sends, 1);
  await sendLeadToGoHighLevel(payload, id + 'new');
  assert.equal(sends, 2);
});
test('legacy requests use only the ten-minute content receipt', async () => {
  await sendLeadToGoHighLevel(payload);
  const keys = command(['KEYS', 'scs:{lead}:*']).split('\n');
  assert.equal(keys.length, 1);
  assert.ok(Number(command(['TTL', keys[0]])) <= 600);
  command(['DEL', keys[0]]);
  await sendLeadToGoHighLevel(payload);
  assert.equal(sends, 2);
});

test('new ID deduplicated against a success gets its own durable receipt', async () => {
  await sendLeadToGoHighLevel(payload, id);
  await sendLeadToGoHighLevel(payload, id + '2');
  for (const key of command(['KEYS', 'scs:{lead}:development:content:*']).split('\n')) command(['DEL', key]);
  await sendLeadToGoHighLevel(payload, id + '2');
  assert.equal(sends, 1);
});
test('timeout after acceptance and non-success response never automatically replay', async () => {
  for (const failure of [() => { throw new Error('timeout'); }, () => new Response('', { status: 502 })]) {
    command(['FLUSHDB']); sends = 0; webhook = failure;
    await assert.rejects(sendLeadToGoHighLevel(payload, id), { code: 'delivery_unconfirmed' });
    await assert.rejects(sendLeadToGoHighLevel(payload, id), { code: 'delivery_unconfirmed' });
    assert.equal(sends, 1);
  }
});
test('storage outage and missing configuration never forward or falsely succeed', async () => {
  storageFailure = true;
  await assert.rejects(sendLeadToGoHighLevel(payload, id), { code: 'storage_unavailable' });
  storageFailure = false;
  delete process.env.GHL_WEBHOOK_URL;
  await assert.rejects(sendLeadToGoHighLevel(payload, id), { code: 'crm_unavailable' });
  assert.equal(sends, 0);
});
test('receipt write failure after success does not cause a replay', async () => {
  webhook = () => { storageFailure = true; return new Response('{}'); };
  await sendLeadToGoHighLevel(payload, id);
  storageFailure = false;
  await assert.rejects(sendLeadToGoHighLevel(payload, id), { code: 'delivery_unconfirmed' });
  assert.equal(sends, 1);
});
test('both API routes preserve successful response, deduplicate and reject invalid bodies', async () => {
  const request = (body, key = id) => new Request('http://localhost/api/test', { method: 'POST', headers: { 'Idempotency-Key': key }, body: JSON.stringify(body) });
  for (const route of [quote, estimate]) {
    command(['FLUSHDB']); sends = 0;
    assert.equal((await route.POST(request(payload))).status, 200);
    assert.equal((await route.POST(request(payload))).status, 200);
    assert.equal(sends, 1);
    assert.equal((await route.POST(request({}))).status, 400);
    assert.equal((await route.POST(request(null))).status, 400);
    assert.equal((await route.POST(new Request('http://localhost', { method: 'POST', body: '{' }))).status, 400);
  }
  command(['FLUSHDB']); sends = 0;
  assert.equal((await estimate.POST(request({ source: 'out_of_area_waitlist', zip: '10001', email: 'waitlist@example.invalid' }))).status, 200);
  assert.equal(sends, 1);
});
test('browser lock catches synchronous double-click and retries/remounts reuse the request ID', async () => {
  const headers = [];
  let release;
  global.fetch = (_url, options) => { headers.push(options.headers); return new Promise(resolve => { release = resolve; }); };
  const submit = createLeadSubmitter();
  const first = submit('/api/quote', payload);
  assert.equal(await submit('/api/quote', payload), false);
  while (!release) await new Promise(resolve => setImmediate(resolve));
  release(Response.json({ error: 'Unavailable' }, { status: 503 }));
  await assert.rejects(first);
  global.fetch = async (_url, options) => { headers.push(options.headers); return Response.json({ success: true }); };
  await submit('/api/quote', payload);
  await createLeadSubmitter()('/api/quote', payload);
  assert.equal(headers.length, 3);
  assert.equal(new Set(headers.map(h => h['Idempotency-Key'])).size, 1);
  await submit('/api/quote', { ...payload, message: 'Another inquiry' });
  assert.notEqual(headers[3]['Idempotency-Key'], headers[0]['Idempotency-Key']);
});

 test('preview and production receipts are isolated', async () => {
  process.env.VERCEL_ENV = 'preview';
  await sendLeadToGoHighLevel(payload, id);
  process.env.VERCEL_ENV = 'production';
  await sendLeadToGoHighLevel(payload, id);
  await sendLeadToGoHighLevel(payload, id);
  assert.equal(sends, 2);
});

test('solar-review form preserves intake and duplicate protection', async () => {
  const route = require('../app/api/solar-review/route.ts');
  const { reviewQuestions } = require('../lib/solar-review.ts');
  const body = { ...Object.fromEntries(reviewQuestions.map(q => [q.key, q.options[0]])), ...payload, consent: true };
  const request = () => new Request('http://localhost/api/solar-review', { method: 'POST', headers: { 'Idempotency-Key': id }, body: JSON.stringify(body) });
  assert.equal((await route.POST(request())).status, 200);
  assert.equal((await route.POST(request())).status, 200);
  assert.equal(sends, 1);
});
