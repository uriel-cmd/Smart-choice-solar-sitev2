# GHL duplicate welcome message fix

## Findings

Inspected repository `uriel-cmd/Smart-choice-solar-sitev2`, initially from cached main `3b3cfac`, then refreshed explicitly to live main `f4afc95` before release on September 21, 2026. The latter includes the solar-review funnel and solar-repair pages.

| Visitor entry point | Browser POST | Server delivery |
| --- | --- | --- |
| Contact/assessment form, including popup | `/api/quote` | `sendLeadToGoHighLevel` → `GHL_WEBHOOK_URL` |
| Estimator final contact step | `/api/estimate` | Same server helper |
| Solar-review funnel | `/api/solar-review` | Same server helper |
| Out-of-area email waitlist | `/api/estimate` | Same helper with waitlist form type |

There is one outbound GHL fetch in the repository. There is no browser-to-GHL POST, automatic retry loop, or simultaneous submit/onClick delivery path. The contact and estimator already had rendered disabled/loading buttons, but lacked synchronous handler locks. The waitlist lacked locking, loading feedback, and HTTP error handling. Every incoming server request was forwarded without a duplicate check.

The earlier conversation reports three workflow enrollments 5–8 seconds apart. That establishes repeated enrollments, not which browser/integration sent them. No production access logs or original payloads were available to prove the exact historical initiator. Do not represent this patch as proof that React registered duplicate handlers or that a retry loop existed.

## Changes

- Immediate synchronous locks on all four submission handlers, plus visible disabled/loading states. Waitlist errors keep the form open.
- Each request includes an `Idempotency-Key`, reused on retries and same-tab remounts/reloads for matching request content. Session storage contains only a payload hash, random ID, and timestamp.
- Server atomically claims shared Redis receipts before the only GHL POST. This works across server instances; there is no in-memory production fallback.
- Same ID is protected for 24 hours. Identical normalized inquiry content with different/missing IDs is suppressed for 10 minutes. Different inquiry content with a new ID remains eligible immediately. This is bounded duplicate protection, not permanent contact suppression.
- Fingerprints include form type and inquiry details, normalize email/phone and object ordering, and omit language/page/raw metadata. Quote, estimator, and waitlist remain distinct lead types.
- Successful repeats return the original API success shape without another webhook. Pending/uncertain delivery returns `409 delivery_unconfirmed`, never false success.
- GHL network errors and non-2xx responses retain the claim because acceptance may already have happened. No automatic retry. A crash after claiming but before delivery can also require manual reconciliation; this system does not promise exactly-once delivery across two independent systems.
- Missing CRM/storage configuration and unavailable storage return 503 before delivery. Configure storage before deploying or forms will correctly refuse submissions.
- Existing GHL payload mappings remain; `submissionId` is added for correlation. Logs contain IDs/hashes rather than contact details or webhook URLs. Redirects are not followed and GHL requests have a 15-second timeout.
- Invalid JSON/missing contact fields do not create a lead. Email-only waitlist submissions retain their separate required fields.

## Hosting setup before release

1. Connect a persistent Upstash Redis database in the website hosting account. Preview, production, and development receipts use separate environment prefixes, so the free database can be shared without suppressing leads across environments. Keep eviction disabled.
2. Set server-only `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` (read/write token). Existing `KV_REST_API_URL` and `KV_REST_API_TOKEN` names are supported too. Do not use `NEXT_PUBLIC_` names. Keep the existing `GHL_WEBHOOK_URL`.
3. Deploy the branch only after the credentials are configured. Test in preview against a non-messaging test webhook first: double-click, concurrent POSTs, same-ID replay, and a new inquiry must yield respectively one, one, no extra, and one new delivery.
4. After release, correlate website `GHL delivery claimed` logs, `submissionId` in GHL, and workflow enrollment timestamps. If GHL enrolls multiple times for one recorded outbound request, investigate workflow triggers/other integrations rather than assuming additional website POSTs.

Redis protocol reference: https://upstash.com/docs/redis/features/restapi and https://upstash.com/docs/redis/sdks/ts/commands/scripts/eval

## GHL workflow changes (documented, not applied)

For **Website Form Submitted / initial welcome**, open Workflow → Settings:

- Turn **Allow Re-entry OFF**.
- Turn **Allow Multiple Opportunities OFF**.
- Save/publish the workflow settings.

These control workflow enrollment; the multiple-opportunities toggle does not itself create opportunities. Do not disable opportunities account-wide or change unrelated workflows.

**Preserve lead intake:** keep contact create/update and opportunity handling active. If these actions exist only inside the once-per-contact welcome workflow, separate them into an intake workflow that can accept legitimate future inquiries, with a dedicated once-per-contact welcome workflow downstream. Otherwise switching re-entry off could prevent later inquiries from reaching those intake actions. Confirm the actual workflow arrangement before changing it; its full configuration was not inspected here. Match existing contacts by the configured email/phone rules, and find/update the relevant existing opportunity before creating one when needed. Route email-only out-of-area waitlist leads appropriately rather than requiring a phone or sending an SMS.

Validate with a new contact and a returning contact with a genuinely new inquiry: both inquiries are captured; only the first receives the initial welcome. Appointment/project-specific messages may remain in separate workflows with their own enrollment rules.

Official HighLevel references:
- https://help.gohighlevel.com/support/solutions/articles/48001239875
- https://ideas.gohighlevel.com/changelog/allow-multiple-opportunities-for-a-contact-in-workflows

## Uncertain delivery recovery

Use the logged submission ID/hash and GHL execution logs to establish whether the request arrived. If it did, do not replay it. If absence is verified, an operator can remove only the associated `scs:{lead}:<environment>:id:<SHA256(request-ID)>` and `scs:{lead}:<environment>:content:<fingerprint>` receipts and retry the saved inquiry. Do not clear the whole database. Receipts contain status/hashes, not a lead queue or full contact payload; recover inquiry details from the visitor or existing CRM data. Same-ID protection expires after 24 hours; content protection expires after 10 minutes. Do not automatically replay uncertain requests at expiry.

## Validation

`TEST_REDIS_BIN=/path/to/redis/bin npm run test:leads`

The test harness starts a private local Redis on a Unix socket and executes the actual Lua claims. GHL is mocked; no customer messages or real leads are created. It covers concurrent requests, independent IDs, normalized duplicates, changed inquiries, expiration boundaries, ambiguous failures, storage outages, receipt-write failure, both API routes, waitlist intake, malformed input, synchronous browser locking, and stable retry IDs. Browser storage/fetch are simulated in this test suite.

TypeScript and production build checks are run separately. No live GHL submission was performed.

Local verification result (September 21, 2026): 12/12 regression tests passed, TypeScript passed, and the Next.js production build passed. Changes are prepared locally and have not been deployed. Hosting credentials and live workflow configuration remain to be verified.
