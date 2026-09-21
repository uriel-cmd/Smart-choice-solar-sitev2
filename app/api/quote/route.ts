import { LeadSubmissionError } from "@/lib/lead-idempotency";

import { NextResponse } from "next/server";

import { isGoHighLevelConfigured, sendLeadToGoHighLevel } from "@/lib/gohighlevel";

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (["firstName", "lastName", "email", "phone", "address", "zip"].some(key => typeof payload[key] !== "string" || !payload[key].trim())) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  try {
    await sendLeadToGoHighLevel({
      formType: "quote",
      source: "website-contact-form",
      firstName: payload.firstName,
      lastName: payload.lastName,
      email: payload.email,
      phone: payload.phone,
      address: payload.address,
      zip: payload.zip,
      message: payload.message,
      language: payload.language,
      pagePath: payload.pagePath,
      rawPayload: payload
    }, request.headers.get("Idempotency-Key"));
  } catch (error) {
    if (error instanceof LeadSubmissionError) {
      return NextResponse.json({ error: error.message, code: error.code }, { status: error.status });
    }
    console.error("GoHighLevel quote sync failed", error);
    return NextResponse.json({ error: "Unable to sync lead to CRM." }, { status: 502 });
  }

  return NextResponse.json({
    success: true,
    message: "Quote request received.",
    data: payload,
    crmHookReady: isGoHighLevelConfigured()
  });
}
