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

export async function sendLeadToGoHighLevel(payload: GoHighLevelLeadPayload) {
  const webhookUrl = process.env.GHL_WEBHOOK_URL;

  if (!webhookUrl) {
    return { sent: false, configured: false };
  }

  const webhookPayload = {
    siteSource: "smart-choice-solar-site",
    submittedAt: new Date().toISOString(),
    ...payload,
    phone: normalizePhone(payload.phone),
    tags: [
      "website-lead",
      `form:${payload.formType}`,
      payload.language ? `lang:${payload.language}` : undefined
    ].filter(Boolean)
  };

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(webhookPayload),
    cache: "no-store"
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`GoHighLevel webhook failed (${response.status}): ${body}`);
  }

  return { sent: true, configured: true };
}
