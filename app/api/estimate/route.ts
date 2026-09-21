import { LeadSubmissionError } from "@/lib/lead-idempotency";

import { NextResponse } from "next/server";

import { isGoHighLevelConfigured, sendLeadToGoHighLevel } from "@/lib/gohighlevel";

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }
  const isWaitlist = payload?.source === "out_of_area_waitlist";

  const required = isWaitlist ? ["email", "zip"] : ["firstName", "lastName", "email", "phone", "address", "zip"];
  if (required.some(key => typeof payload[key] !== "string" || !payload[key].trim())) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  try {
    await sendLeadToGoHighLevel({
      formType: isWaitlist ? "out_of_area_waitlist" : "estimator",
      source: isWaitlist ? "out-of-area-waitlist" : "website-estimator",
      firstName: payload?.firstName,
      lastName: payload?.lastName,
      email: payload?.email,
      phone: payload?.phone,
      address: payload?.address,
      zip: payload?.zip,
      message: payload?.message,
      language: payload?.language,
      pagePath: payload?.pagePath,
      estimate: payload?.estimate,
      estimatorAnswers: isWaitlist
        ? undefined
        : {
            homeType: payload?.homeType,
            homeownerStatus: payload?.homeownerStatus,
            billRange: payload?.billRange,
            utilityProvider: payload?.utilityProvider,
            roofCondition: payload?.roofCondition,
            shadeExposure: payload?.shadeExposure,
            batteryInterest: payload?.batteryInterest,
            goal: payload?.goal,
            timeline: payload?.timeline
          },
      rawPayload: payload
    }, request.headers.get("Idempotency-Key"));
  } catch (error) {
    if (error instanceof LeadSubmissionError) {
      return NextResponse.json({ error: error.message, code: error.code }, { status: error.status });
    }
    console.error("GoHighLevel estimator sync failed", error);
    return NextResponse.json({ error: "Unable to sync estimator lead to CRM." }, { status: 502 });
  }

  return NextResponse.json({
    success: true,
    message: "Estimator submission received.",
    payload,
    crmHookReady: isGoHighLevelConfigured()
  });
}
