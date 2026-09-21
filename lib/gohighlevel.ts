import { deliverLeadOnce, LeadSubmissionError } from "./lead-idempotency";

type GoHighLevelLeadPayload = {
  formType: "quote" | "estimator" | "out_of_area_waitlist";
  source: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  address?: string;
  zip?: string;
  message?: string;
  language?: string;
  pagePath?: string;
  estimate?: {
    systemSize?: string;
    billOffset?: string;
    recommendation?: string;
  };
  estimatorAnswers?: Record<string, unknown>;
  rawPayload?: unknown;
};

function normalizePhone(phone?: string) {
  if (!phone) {
    return "";
  }

  const digits = phone.replace(/\D/g, "");

  if (!digits) {
    return "";
  }

  return digits.startsWith("1") ? `+${digits}` : `+1${digits}`;
}

export function isGoHighLevelConfigured() {
  return Boolean(process.env.GHL_WEBHOOK_URL);
}

export async function sendLeadToGoHighLevel(payload: GoHighLevelLeadPayload, submissionId: string | null = null) {
  const webhookUrl = process.env.GHL_WEBHOOK_URL;

  if (!webhookUrl) {
    throw new LeadSubmissionError("crm_unavailable", 503, "Lead delivery is not configured.");
  }

  const webhookPayload = {
    siteSource: "smart-choice-solar-site",
    submittedAt: new Date().toISOString(),
    submissionId: submissionId || undefined,
    ...payload,
    phone: normalizePhone(payload.phone),
    tags: [
      "website-lead",
      `form:${payload.formType}`,
      payload.language ? `lang:${payload.language}` : undefined
    ].filter(Boolean)
  };

  const normalizedPayload = { ...payload, email: payload.email?.trim().toLowerCase(), phone: normalizePhone(payload.phone) };
  const result = await deliverLeadOnce(normalizedPayload, submissionId, async () => {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(webhookPayload),
      cache: "no-store",
      signal: AbortSignal.timeout(15000),
      redirect: "error"
    });

    if (!response.ok) {
      throw new Error(`GoHighLevel webhook failed (${response.status})`);
    }

  });

  return { sent: true, configured: true, ...result };
}
