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
const field = "w-full rounded-2xl border border-line bg-white px-4 py-3 text-ink outline-none transition focus:border-sky";
const label = "mb-2 block text-sm font-medium text-slate";

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
    <div className="text-ink">
      <div className="container-shell max-w-[1420px] pb-20 pt-12 lg:pt-16">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3 text-sm">
          <span className="eyebrow">Smart Choice Solar · Service & Repair</span>
          <a className="font-semibold text-slate underline decoration-sky underline-offset-4" href="tel:+18447876456">Questions? (844) 787-6456</a>
        </div>
        <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_.95fr]">
          <section className="brand-panel relative overflow-hidden rounded-[34px] p-7 text-white sm:p-10">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c3e6f8]">Existing solar systems · Independent diagnostics</span>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Your solar system deserves a real diagnosis.</h1>
            <p className="mt-5 text-lg leading-8 text-white/85">Installer disappeared? Inverter showing an error? Electric bill unexpectedly high? We troubleshoot existing residential solar systems and explain the next step before any repairs begin.</p>
            <div className="mt-8 rounded-[24px] border border-white/20 bg-white/10 p-6 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c3e6f8]">Professional onsite solar diagnostic</p>
              <p className="mt-2 font-display text-5xl font-semibold">$249</p>
              <p className="mt-2 text-sm leading-7 text-white/80">Initial equipment inspection, applicable diagnostic checks, and findings with recommended next steps. Repairs, parts, manufacturer fees, and work beyond the diagnostic are quoted separately.</p>
            </div>
            <h2 className="mt-9 text-lg font-semibold">What to expect</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-white/85">
              <li>✓ Evaluation of the issue you reported</li>
              <li>✓ Applicable inverter, production, electrical, or monitoring checks</li>
              <li>✓ Explanation of findings and repair options</li>
              <li>✓ Independent service for many common solar platforms</li>
            </ul>
            <p className="mt-8 text-xs leading-6 text-white/70">Diagnostic work depends on safe site access and installed equipment. We verify the service address and system before scheduling. A diagnostic does not guarantee a repair or manufacturer warranty approval.</p>
          </section>
          <section className="relative overflow-hidden rounded-[30px] border border-[#d7e8f2] bg-[linear-gradient(180deg,#eef6fb_0%,#e6f0f8_100%)] p-6 shadow-[0_22px_60px_rgba(26,48,82,0.1)] sm:p-8" aria-label="Solar service request">
            {complete ? (
              <div role="status" className="py-12">
                <p className="text-sm font-bold uppercase tracking-widest text-blue-700">Request received</p>
                <h2 className="mt-3 text-3xl font-bold">Thank you, {form.firstName}.</h2>
                <p className="mt-4 leading-7 text-slate/80">Your service request has been sent for review. Our team will confirm coverage and discuss scheduling. <strong>No appointment has been booked and no payment has been charged.</strong></p>
                <a className="accent-button mt-7 inline-block" href="tel:+18447876456">Call our service team</a>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate/70">Request a diagnostic</span>
                  <span className="text-xs text-slate/65">Step {step + 1} of 6</span>
                </div>
                <div className="mt-4 flex gap-1.5" aria-label="Form progress">
                  {Array.from({ length: 6 }, (_, i) => <div key={i} className={`h-1.5 flex-1 rounded-full ${i <= step ? "bg-[#5da8cf]" : "bg-white/75"}`} />)}
                </div>
                {step === 0 && <div className="mt-8">
                  <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">Let's get your solar system checked.</h2>
                  <p className="mt-4 text-slate-600">Answer a few quick questions so we can review your equipment and location. The standard onsite diagnostic is <strong>$249</strong>. You'll see the service details again before submitting.</p>
                  <p className="mt-5 rounded-2xl border border-[#d7e8f2] bg-white/80 p-4 text-sm leading-7 text-slate">We service existing systems, including many systems installed by companies that are no longer available.</p>
                </div>}
                {step === 1 && <div className="mt-8 space-y-4">
                  <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">Where is the system located?</h2>
                  <p className="text-sm leading-7 text-slate/75">We'll review your address to confirm whether we can provide onsite service. Submitting an address does not guarantee service coverage.</p>
                  <div><label className={label} htmlFor="street">Street address</label><input id="street" className={field} autoComplete="street-address" value={form.address} onChange={e => set("address", e.target.value)} placeholder="Street address" /></div>
                  <div className="grid grid-cols-[1fr_120px] gap-3"><div><label className={label} htmlFor="city">City</label><input id="city" className={field} value={form.city} onChange={e => set("city", e.target.value)} /></div><div><label className={label} htmlFor="zip">ZIP</label><input id="zip" inputMode="numeric" maxLength={5} className={field} value={form.zip} onChange={e => set("zip", e.target.value.replace(/\D/g, ""))} /></div></div>
                  <p className="text-xs text-slate/65">California service requests only. We will confirm availability before booking.</p>
                </div>}
                {step === 2 && <div className="mt-8"><h2 className="font-display text-2xl font-semibold tracking-tight text-ink">What issue are you experiencing?</h2><div className="mt-5 space-y-2">{problems.map(([name, description]) => <button type="button" key={name} onClick={() => set("issue", name)} className={`w-full rounded-2xl border p-4 text-left transition ${form.issue === name ? "border-sky bg-white shadow-[0_8px_25px_rgba(93,168,207,0.14)]" : "border-line bg-white/65 hover:border-sky"}`}><span className="block font-semibold">{name}</span><span className="mt-1 block text-xs text-slate-600">{description}</span></button>)}</div></div>}
                {step === 3 && <div className="mt-8"><h2 className="font-display text-2xl font-semibold tracking-tight text-ink">Which solar equipment do you have?</h2><p className="mt-2 text-sm leading-7 text-slate/75">Select your inverter or monitoring platform. Not sure is perfectly fine.</p><div className="mt-5 grid grid-cols-2 gap-2">{brands.map(name => <button key={name} type="button" onClick={() => set("brand", name)} className={`rounded-2xl border p-4 text-sm font-semibold ${form.brand === name ? "border-sky bg-white shadow-[0_8px_25px_rgba(93,168,207,0.14)]" : "border-line bg-white/65 hover:border-sky"}`}>{name}</button>)}</div><label className={`mt-5 ${label}`} htmlFor="details">Error code or additional details (optional)</label><textarea id="details" rows={3} className={field} value={form.detail} onChange={e => set("detail", e.target.value)} placeholder="What does the monitoring app or inverter say?" /></div>}
                {step === 4 && <div className="mt-8"><h2 className="font-display text-2xl font-semibold tracking-tight text-ink">Here's what your $249 diagnostic covers.</h2><p className="mt-3 leading-relaxed text-slate-600">A professional onsite evaluation of the reported problem, appropriate initial system checks, and an explanation of findings and recommended next steps.</p><div className="glass-panel-strong mt-5 rounded-[24px] p-5"><p className="font-display text-4xl font-semibold text-ink">$249</p><p className="mt-2 text-sm text-slate-700">Standard onsite diagnostic visit; subject to service-area and equipment confirmation.</p></div><p className="mt-5 text-sm leading-7 text-slate/80">Replacement parts, repairs, manufacturer programming fees, roof access requiring additional work, and other services are not included. We will explain any additional charges before you approve them.</p><p className="mt-4 text-sm font-semibold text-slate">Next: submit your contact details. We will review eligibility and coordinate an appointment. Online booking and payments are not enabled yet.</p></div>}
                {step === 5 && <div className="mt-8 space-y-4"><h2 className="font-display text-2xl font-semibold tracking-tight text-ink">How can we reach you?</h2><p className="text-sm leading-7 text-slate/75">Request a service appointment for the $249 diagnostic. We will review the location and confirm scheduling with you.</p><div className="grid grid-cols-2 gap-3"><div><label htmlFor="first" className={label}>First name</label><input id="first" autoComplete="given-name" className={field} value={form.firstName} onChange={e => set("firstName", e.target.value)} /></div><div><label htmlFor="last" className={label}>Last name</label><input id="last" autoComplete="family-name" className={field} value={form.lastName} onChange={e => set("lastName", e.target.value)} /></div></div><div><label htmlFor="email" className={label}>Email</label><input id="email" type="email" autoComplete="email" className={field} value={form.email} onChange={e => set("email", e.target.value)} /></div><div><label htmlFor="phone" className={label}>Phone</label><input id="phone" type="tel" autoComplete="tel" className={field} value={form.phone} onChange={e => set("phone", e.target.value)} /></div><label className="flex items-start gap-3 text-sm text-slate-600"><input type="checkbox" className="mt-1" checked={form.consent} onChange={e => set("consent", e.target.checked)} /><span>I authorize Smart Choice Solar to contact me about this service request by phone or email. I understand the $249 diagnostic fee is subject to appointment confirmation. No payment is being collected now.</span></label><p className="text-xs text-slate/65">See our <Link className="underline" href="/privacy-policy">Privacy Policy</Link>. No recurring marketing consent is requested here.</p></div>}
                {error && <p className="mt-5 rounded-lg bg-red-50 p-3 text-sm text-red-700" role="alert">{error}</p>}
                <div className="mt-8 flex gap-3">
                  {step > 0 && <button type="button" className="rounded-full border border-line bg-white/90 px-6 py-4 text-sm font-semibold text-slate transition hover:bg-white" disabled={busy} onClick={() => { setError(""); setStep(s => s - 1); }}>Back</button>}
                  <button type="button" disabled={busy} onClick={next} className="accent-button flex-1 disabled:opacity-60">{busy ? "Submitting…" : step === 5 ? "Request My Diagnostic" : step === 0 ? "Get Started" : "Continue"}</button>
                </div>
                <p className="mt-5 text-center text-xs text-slate/65">No payment today · No appointment until confirmed</p>
              </>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
