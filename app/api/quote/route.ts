import { NextResponse } from "next/server";

import { isGoHighLevelConfigured, sendLeadToGoHighLevel } from "@/lib/gohighlevel";

type QuotePayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  address?: string;
  zip?: string;
  message?: string;
  language?: string;
  pagePath?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as QuotePayload;

  if (!payload.firstName || !payload.lastName || !payload.email || !payload.phone || !payload.address || !payload.zip) {
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
    });
  } catch (error) {
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
