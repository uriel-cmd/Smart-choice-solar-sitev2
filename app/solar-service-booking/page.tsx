"use client";

import { useState } from "react";
import Link from "next/link";

type Intake = {
  address: string; city: string; zip: string; issue: string; brand: string;
  detail: string; firstName: string; lastName: string; email: string; phone: string; consent: boolean;
};
const initial: Intake = { address: "", city: "", zip: "", issue: "", brand: "", detail: "", firstName: "", lastName: "", email: "", phone: "", consent: false };
const problems = [
  ["System not producing", "The system appears to be offline or generating no power."],
  ["Inverter fault or warning", "A fault code, error, or warning is showing."],
  ["Monitoring not working", "My monitoring app or gateway stopped reporting."],
  ["Unexpected electric bill", "My utility costs rose and I want to check production."],
  ["Installer no longer available", "I need support for an existing system."],
  ["Other / not sure", "Help me figure out what is happening."]
];
const brands = ["SolarEdge", "Enphase", "SunPower", "Tesla", "SMA / Fronius / Other", "Not sure"];
const field = "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100";
const label = "mb-1 block text-sm font-semibold text-slate-700";

export default function SolarServiceBookingPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<Intake>(initial);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [complete, setComplete] = useState(false);
  const set = (key: keyof Intake, value: string | boolean) => setForm(old => ({ ...old, [key]: value }));
  const query = typeof window === "undefined" ? "" : window.location.search;
  const safeStep = () => {
    if (step === 1 && (!form.address.trim() || !form.city.trim() || !/^\d{5}$/.test(form.zip))) return "Enter a street address, city, and five-digit ZIP code.";
    if (step === 2 && !form.issue) return "Choose the issue that best describes your system.";
    if (step === 3 && !form.brand) return "Choose a brand or select Not sure.";
    if (step === 5 && (!form.firstName.trim() || !form.lastName.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) || form.phone.replace(/\D/g, "").length < 10 || !form.consent)) return "Please complete your contact information and confirm your service request.";
    return "";
  };
  async function next() {
    const validation = safeStep(); setError(validation); if (validation) return;
    if (step < 5) { setStep(s => s + 1); return; }
    setBusy(true);
    try {
      const parameters = new URLSearchParams(query);
      const source = parameters.get("utm_source") || "website";
      const ad = parameters.get("utm_campaign") || parameters.get("angle") || "solar-service-booking";
      const response = await fetch("/api/quote", {
        method: "POST", headers: { "Content-Type": "application/json", "Idempotency-Key": crypto.randomUUID() },
        body: JSON.stringify({
          firstName: form.firstName.trim(), lastName: form.lastName.trim(), email: form.email.trim(),
          phone: form.phone.trim(), address: [form.address, form.city, "CA"].join(", "), zip: form.zip,
          message: "SOLAR SERVICE INTAKE — $249 onsite diagnostic discussed. Issue: " + form.issue +
            ". Brand: " + form.brand + ". Details: " + (form.detail || "None") +
            ". Requested via: " + source + " / " + ad +
            ". No appointment or payment was collected. Follow up to verify eligibility and schedule.",
          language: "en", pagePath: "/solar-service-booking", source, campaign: ad, serviceType: "solar-diagnostic",
          diagnosticPrice: 249, consent: form.consent
        })
      });
      if (!response.ok) throw new Error("We couldn't submit your request. Please try again or call us.");
      setComplete(true);
    } catch (e) { setError(e instanceof Error ? e.message : "Something went wrong. Please call us."); }
    finally { setBusy(false); }
  }
  return (
    <main className="bg-[#f6f9fd] text-[#18304a]">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6 lg:pt-16">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3 text-sm">
          <span className="font-bold uppercase tracking-[0.2em] text-blue-700">Smart Choice Solar · Service & Repair</span>
          <a className="font-semibold text-blue-800 underline" href="tel:+18447876456">Questions? (844) 787-6456</a>
        </div>
        <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_.95fr]">
          <section className="rounded-[28px] bg-[#102d4b] p-7 text-white shadow-xl sm:p-10">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-sky-300">Existing solar systems · Independent diagnostics</span>
            <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">Your solar system deserves a real diagnosis.</h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-200">Installer disappeared? Inverter showing an error? Electric bill unexpectedly high? We troubleshoot existing residential solar systems and explain the next step before any repairs begin.</p>
            <div className="mt-8 rounded-2xl border border-white/20 bg-white/10 p-5">
              <p className="text-sm font-semibold uppercase tracking-wider text-sky-200">Professional onsite solar diagnostic</p>
              <p className="mt-2 text-5xl font-bold">$249</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-200">Initial equipment inspection, applicable diagnostic checks, and findings with recommended next steps. Repairs, parts, manufacturer fees, and work beyond the diagnostic are quoted separately.</p>
            </div>
            <h2 className="mt-9 text-lg font-bold">What to expect</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              <li>✓ Evaluation of the issue you reported</li>
              <li>✓ Applicable inverter, production, electrical, or monitoring checks</li>
              <li>✓ Explanation of findings and repair options</li>
              <li>✓ Independent service for many common solar platforms</li>
            </ul>
            <p className="mt-8 text-xs leading-relaxed text-slate-300">Diagnostic work depends on safe site access and installed equipment. We verify the service address and system before scheduling. A diagnostic does not guarantee a repair or manufacturer warranty approval.</p>
          </section>
          <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-lg sm:p-8" aria-label="Solar service request">
            {complete ? (
              <div role="status" className="py-12">
                <p className="text-sm font-bold uppercase tracking-widest text-blue-700">Request received</p>
                <h2 className="mt-3 text-3xl font-bold">Thank you, {form.firstName}.</h2>
                <p className="mt-4 leading-relaxed text-slate-600">Your service request has been sent for review. Our team will confirm coverage and discuss scheduling. <strong>No appointment has been booked and no payment has been charged.</strong></p>
                <a className="mt-7 inline-block rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white" href="tel:+18447876456">Call our service team</a>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-700">Request a diagnostic</span>
                  <span className="text-xs text-slate-500">Step {step + 1} of 6</span>
                </div>
                <div className="mt-4 flex gap-1.5" aria-label="Form progress">
                  {Array.from({ length: 6 }, (_, i) => <div key={i} className={`h-1.5 flex-1 rounded-full ${i <= step ? "bg-blue-600" : "bg-slate-200"}`} />)}
                </div>
                {step === 0 && <div className="mt-8">
                  <h2 className="text-3xl font-bold">Let's get your solar system checked.</h2>
                  <p className="mt-4 text-slate-600">Answer a few quick questions so we can review your equipment and location. The standard onsite diagnostic is <strong>$249</strong>. You'll see the service details again before submitting.</p>
                  <p className="mt-5 rounded-xl bg-blue-50 p-4 text-sm text-blue-900">We service existing systems, including many systems installed by companies that are no longer available.</p>
                </div>}
                {step === 1 && <div className="mt-8 space-y-4">
                  <h2 className="text-2xl font-bold">Where is the system located?</h2>
                  <p className="text-sm text-slate-600">We'll review your address to confirm whether we can provide onsite service. Submitting an address does not guarantee service coverage.</p>
                  <div><label className={label} htmlFor="street">Street address</label><input id="street" className={field} autoComplete="street-address" value={form.address} onChange={e => set("address", e.target.value)} placeholder="Street address" /></div>
                  <div className="grid grid-cols-[1fr_120px] gap-3"><div><label className={label} htmlFor="city">City</label><input id="city" className={field} value={form.city} onChange={e => set("city", e.target.value)} /></div><div><label className={label} htmlFor="zip">ZIP</label><input id="zip" inputMode="numeric" maxLength={5} className={field} value={form.zip} onChange={e => set("zip", e.target.value.replace(/\D/g, ""))} /></div></div>
                  <p className="text-xs text-slate-500">California service requests only. We will confirm availability before booking.</p>
                </div>}
                {step === 2 && <div className="mt-8"><h2 className="text-2xl font-bold">What issue are you experiencing?</h2><div className="mt-5 space-y-2">{problems.map(([name, description]) => <button type="button" key={name} onClick={() => set("issue", name)} className={`w-full rounded-xl border p-4 text-left transition ${form.issue === name ? "border-blue-600 bg-blue-50" : "border-slate-200 hover:border-blue-300"}`}><span className="block font-semibold">{name}</span><span className="mt-1 block text-xs text-slate-600">{description}</span></button>)}</div></div>}
                {step === 3 && <div className="mt-8"><h2 className="text-2xl font-bold">Which solar equipment do you have?</h2><p className="mt-2 text-sm text-slate-600">Select your inverter or monitoring platform. Not sure is perfectly fine.</p><div className="mt-5 grid grid-cols-2 gap-2">{brands.map(name => <button key={name} type="button" onClick={() => set("brand", name)} className={`rounded-xl border p-4 text-sm font-semibold ${form.brand === name ? "border-blue-600 bg-blue-50" : "border-slate-200 hover:border-blue-300"}`}>{name}</button>)}</div><label className={`mt-5 ${label}`} htmlFor="details">Error code or additional details (optional)</label><textarea id="details" rows={3} className={field} value={form.detail} onChange={e => set("detail", e.target.value)} placeholder="What does the monitoring app or inverter say?" /></div>}
                {step === 4 && <div className="mt-8"><h2 className="text-2xl font-bold">Here's what your $249 diagnostic covers.</h2><p className="mt-3 leading-relaxed text-slate-600">A professional onsite evaluation of the reported problem, appropriate initial system checks, and an explanation of findings and recommended next steps.</p><div className="mt-5 rounded-xl border border-blue-200 bg-blue-50 p-5"><p className="text-4xl font-bold">$249</p><p className="mt-2 text-sm text-slate-700">Standard onsite diagnostic visit; subject to service-area and equipment confirmation.</p></div><p className="mt-5 text-sm leading-relaxed text-slate-600">Replacement parts, repairs, manufacturer programming fees, roof access requiring additional work, and other services are not included. We will explain any additional charges before you approve them.</p><p className="mt-4 text-sm font-semibold text-slate-800">Next: submit your contact details. We will review eligibility and coordinate an appointment. Online booking and payments are not enabled yet.</p></div>}
                {step === 5 && <div className="mt-8 space-y-4"><h2 className="text-2xl font-bold">How can we reach you?</h2><p className="text-sm text-slate-600">Request a service appointment for the $249 diagnostic. We will review the location and confirm scheduling with you.</p><div className="grid grid-cols-2 gap-3"><div><label htmlFor="first" className={label}>First name</label><input id="first" autoComplete="given-name" className={field} value={form.firstName} onChange={e => set("firstName", e.target.value)} /></div><div><label htmlFor="last" className={label}>Last name</label><input id="last" autoComplete="family-name" className={field} value={form.lastName} onChange={e => set("lastName", e.target.value)} /></div></div><div><label htmlFor="email" className={label}>Email</label><input id="email" type="email" autoComplete="email" className={field} value={form.email} onChange={e => set("email", e.target.value)} /></div><div><label htmlFor="phone" className={label}>Phone</label><input id="phone" type="tel" autoComplete="tel" className={field} value={form.phone} onChange={e => set("phone", e.target.value)} /></div><label className="flex items-start gap-3 text-sm text-slate-600"><input type="checkbox" className="mt-1" checked={form.consent} onChange={e => set("consent", e.target.checked)} /><span>I authorize Smart Choice Solar to contact me about this service request by phone or email. I understand the $249 diagnostic fee is subject to appointment confirmation. No payment is being collected now.</span></label><p className="text-xs text-slate-500">See our <Link className="underline" href="/privacy-policy">Privacy Policy</Link>. No recurring marketing consent is requested here.</p></div>}
                {error && <p className="mt-5 rounded-lg bg-red-50 p-3 text-sm text-red-700" role="alert">{error}</p>}
                <div className="mt-8 flex gap-3">
                  {step > 0 && <button type="button" className="rounded-xl border border-slate-300 px-5 py-3 font-semibold" disabled={busy} onClick={() => { setError(""); setStep(s => s - 1); }}>Back</button>}
                  <button type="button" disabled={busy} onClick={next} className="flex-1 rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800 disabled:opacity-60">{busy ? "Submitting…" : step === 5 ? "Request My Diagnostic" : step === 0 ? "Get Started" : "Continue"}</button>
                </div>
                <p className="mt-5 text-center text-xs text-slate-500">No payment today · No appointment until confirmed</p>
              </>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
