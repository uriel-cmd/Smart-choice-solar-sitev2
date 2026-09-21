import { createHash, randomUUID } from "node:crypto";

export class LeadSubmissionError extends Error {
  constructor(public code: string, public status: number, message: string) {
    super(message);
  }
}

// Both keys share a Redis cluster slot. Claiming them in one script prevents races
// between server instances, including requests with different browser request IDs.
export const CLAIM_SCRIPT = `
local existing = redis.call('GET', KEYS[1])
if existing then return existing end
existing = redis.call('GET', KEYS[2])
if existing then
  if string.sub(existing, -5) == ':sent' then redis.call('SET', KEYS[1], existing, 'EX', 86400) end
  return existing
end
redis.call('SET', KEYS[1], ARGV[1], 'EX', 86400)
redis.call('SET', KEYS[2], ARGV[1], 'EX', 600)
return 'claimed'
`;
export const FINISH_SCRIPT = `
for i, key in ipairs(KEYS) do
  if redis.call('GET', key) == ARGV[1] then
    redis.call('SET', key, ARGV[2], 'KEEPTTL')
  end
end
return 'OK'
`;

async function redis(command: (string | number)[]) {
  const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
  if (!url || !token) {
    throw new LeadSubmissionError("storage_unavailable", 503, "Lead duplicate protection is not configured.");
  }
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify(command),
      cache: "no-store",
      signal: AbortSignal.timeout(5000)
    });
    const body = await response.json();
    if (!response.ok || body.error || typeof body.result !== "string") throw new Error("Redis request failed");
    return body.result as string;
  } catch {
    throw new LeadSubmissionError("storage_unavailable", 503, "Lead duplicate protection is temporarily unavailable.");
  }
}

function canonical(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(canonical);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).filter(([, v]) => v !== undefined)
      .sort(([a], [b]) => a.localeCompare(b)).map(([k, v]) => [k, canonical(v)]));
  }
  return typeof value === "string" ? value.trim() : value;
}

export async function deliverLeadOnce(
  payload: Record<string, unknown>, submissionId: string | null, deliver: () => Promise<void>
) {
  if (submissionId && !/^[a-zA-Z0-9-]{16,80}$/.test(submissionId)) {
    throw new LeadSubmissionError("invalid_submission_id", 400, "Invalid submission ID.");
  }
  // Exclude page/language/raw metadata so modal/page copies of the same inquiry
  // coalesce. Include inquiry content and form type; never dedupe on email alone.
  const { rawPayload: _raw, pagePath: _path, language: _language, ...content } = payload;
  const fingerprint = createHash("sha256").update(JSON.stringify(canonical(content))).digest("hex");
  const environment = process.env.VERCEL_ENV || "development";
  const prefix = `scs:{lead}:${environment}`;
  const contentKey = `${prefix}:content:${fingerprint}`;
  const idKey = submissionId
    ? `${prefix}:id:${createHash("sha256").update(submissionId).digest("hex")}`
    : contentKey;
  const keys = [idKey, contentKey];
  const pending = `${fingerprint}:pending:${randomUUID()}`;
  const result = await redis(["EVAL", CLAIM_SCRIPT, 2, ...keys, pending]);
  if (result !== "claimed") {
    if (!result.startsWith(`${fingerprint}:`)) {
      throw new LeadSubmissionError("submission_conflict", 409, "Submission ID belongs to a different request.");
    }
    if (result === `${fingerprint}:sent`) {
      console.info("GHL duplicate suppressed", { submissionId, fingerprint });
      return { duplicate: true };
    }
    throw new LeadSubmissionError("delivery_unconfirmed", 409,
      "Your request may already have been received. Please contact us to confirm before submitting again.");
  }
  console.info("GHL delivery claimed", { submissionId, fingerprint });
  try {
    await deliver();
  } catch {
    // Do not release the claim: a timeout or error response can occur AFTER GHL
    // accepts the webhook. Automatic replay could send another welcome message.
    await redis(["EVAL", FINISH_SCRIPT, 2, ...keys, pending, `${fingerprint}:uncertain`]).catch(() => {});
    console.error("GHL delivery requires reconciliation", { submissionId, fingerprint });
    throw new LeadSubmissionError("delivery_unconfirmed", 409,
      "Your request may already have been received. Please contact us to confirm before submitting again.");
  }
  try {
    await redis(["EVAL", FINISH_SCRIPT, 2, ...keys, pending, `${fingerprint}:sent`]);
  } catch {
    // Delivery succeeded. Retain the pending claim and do not invite another POST.
    console.error("GHL delivered but receipt persistence failed", { submissionId, fingerprint });
  }
  return { duplicate: false };
}
