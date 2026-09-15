import { NextResponse } from "next/server";
import { isGoHighLevelConfigured, sendLeadToGoHighLevel } from "@/lib/gohighlevel";
import { reviewQuestions } from "@/lib/solar-review";

export async function POST(request: Request) {
  let raw: unknown;
  try { raw = await request.json(); } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  const data = raw as Record<string, unknown>;
  const value = (key: string) => typeof data[key] === "string" ? (data[key] as string).trim() : "";
  const firstName = value("firstName"), lastName = value("lastName"), email = value("email"), phone = value("phone"), zip = value("zip");
  const answers = Object.fromEntries(reviewQuestions.map(q => [q.key, value(q.key)]));
  const digits = phone.replace(/\D/g, "");
  if (!firstName || firstName.length > 100 || !lastName || lastName.length > 100 || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !/^(?:1)?\d{10}$/.test(digits) || !/^\d{5}$/.test(zip) || data.consent !== true || reviewQuestions.some(q => !(q.options as readonly string[]).includes(answers[q.key]))) {
    return NextResponse.json({ error: "Please check your answers and contact details." }, { status: 400 });
  }
  if (!isGoHighLevelConfigured()) return NextResponse.json({ error: "Online requests are temporarily unavailable. Please call us to arrange your review." }, { status: 503 });
  const attribution: Record<string, string> = {};
  if (data.attribution && typeof data.attribution === "object" && !Array.isArray(data.attribution)) {
    for (const key of ["ad", "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid"]) {
      const entry = (data.attribution as Record<string, unknown>)[key];
      if (typeof entry === "string") attribution[key] = entry.slice(0, 500);
    }
  }
  try {
    await sendLeadToGoHighLevel({
      formType: "quote", source: "website-solar-review", firstName, lastName, email, phone, zip,
      language: "en", pagePath: "/solar-review",
      message: ["Personal solar review requested with Uriel I. Romo.", ...reviewQuestions.map(q => `${q.title} ${answers[q.key]}`), `Ad attribution: ${JSON.stringify(attribution)}`].join("\n"),
      rawPayload: { ...answers, attribution, consent: { text: "I agree to be contacted by Smart Choice Solar by phone or email about my solar review request.", acceptedAt: new Date().toISOString() } }
    });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "We couldn’t send your review request. Please try again or call us." }, { status: 502 });
  }
}
