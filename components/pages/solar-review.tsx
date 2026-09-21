"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { createLeadSubmitter } from "@/lib/lead-submission";
import { reviewHeadlines, reviewQuestions } from "@/lib/solar-review";
import { googleReviews, siteConfig } from "@/lib/site";
import styles from "./solar-review.module.css";

export function SolarReview({ ad, calendarUrl, portraitUrl }: { ad: string; calendarUrl: string; portraitUrl: string }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [contact, setContact] = useState({ firstName: "", lastName: "", email: "", phone: "" });
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const [error, setError] = useState("");
  const heading = useRef<HTMLHeadingElement>(null);
  const lock = useRef(false);
  const submitLead = useRef(createLeadSubmitter());
  const previousStep = useRef(0);
  useEffect(() => {
    if (previousStep.current !== step || status === "success") heading.current?.focus();
    previousStep.current = step;
  }, [step, status]);
  const question = reviewQuestions[step];
  const selected = question ? answers[question.key] : answers.zip;
  function next(event: FormEvent) { event.preventDefault(); setStep(s => s + 1); }
  async function submit(event: FormEvent) {
    event.preventDefault();
    if (lock.current) return;
    lock.current = true;
    setStatus("sending"); setError("");
    const attribution: Record<string, string> = {};
    const params = new URLSearchParams(window.location.search);
    for (const key of ["ad", "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid"]) {
      const value = params.get(key); if (value) attribution[key] = value;
    }
    try {
      await submitLead.current("/api/solar-review", { ...answers, ...contact, consent, attribution });
      setStatus("success");
    } catch (e) { setError(e instanceof Error ? e.message : "We couldn’t send your request. Please try again."); setStatus("idle"); }
    finally { lock.current = false; }
  }
  return <div className={styles.page}>
    <header className={styles.header}>
      {/* Native image keeps the existing brand asset unchanged. */}
      <img src="/brand/smart-choice-solar-logo-1200.png" width="240" height="80" alt="Smart Choice Solar" />
      <span>REAL ANSWERS. LOCAL GUIDANCE.</span>
    </header>
    <div className={styles.layout}>
      <section className={styles.story}>
        <p className={styles.eyebrow}><span /> YOUR HOME. YOUR BILL. YOUR OPTIONS.</p>
        <h1>{reviewHeadlines[ad] || "See If Solar Actually Makes Sense for Your Home"}</h1>
        <p className={styles.intro}>No gimmicks. No “free solar” nonsense. Just a straightforward look at your electric bill, your home, and whether solar or battery storage could benefit you.</p>
        <div className={styles.advisorCard}>
          <p className={styles.advisorLabel}>YOUR REVIEW IS PERSONALLY HANDLED BY</p>
          <div className={styles.advisor}>
            {portraitUrl ? <img src={portraitUrl} alt="Uriel I. Romo" width="88" height="88" /> : <div className={styles.initials} aria-hidden="true">UR</div>}
            <div><strong>Uriel I. Romo</strong><p>Director · Smart Choice Solar</p></div>
          </div>
          <blockquote>“Most homeowners don’t need another generic solar pitch. They need someone to look at their actual situation and tell them what makes sense.”</blockquote>
        </div>
        <div className={styles.proof}><span>01 <strong>Your utility usage</strong></span><span>02 <strong>Your solar options</strong></span><span>03 <strong>A clear next step</strong></span></div>
      </section>
      <section id="assessment" className={styles.card} aria-label="Your solar review">
        {status === "success" ? <div className={styles.success}>
          <div className={styles.check} aria-hidden="true">✓</div>
          <p className={styles.eyebrow}>REQUEST RECEIVED</p>
          <h2 ref={heading} tabIndex={-1}>Thanks, {contact.firstName}. I’ve got your information.</h2>
          <p>The next step is a quick review of your usage and property to see whether solar makes sense for you.</p>
          {calendarUrl ? <><h3>Skip the back-and-forth. Pick a time with me.</h3><iframe title="Book your solar review with Uriel" src={calendarUrl} className={styles.calendar} /><a href={calendarUrl} target="_blank" rel="noreferrer">Open booking calendar ↗</a></> : <><h3>I’ll follow up about your review.</h3><p>Want to talk sooner? Call <a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phoneDisplay}</a>.</p></>}
        </div> : <>
          <div className={styles.progressLabel}><span>YOUR PERSONAL SOLAR REVIEW</span><span>{step + 1} / 6</span></div>
          <div className={styles.progress} role="progressbar" aria-label="Assessment progress" aria-valuemin={0} aria-valuemax={6} aria-valuenow={step + 1}><span style={{ width: `${((step + 1) / 6) * 100}%` }} /></div>
          <form onSubmit={step === 5 ? submit : next}>
            <h2 ref={heading} tabIndex={-1}>{question ? question.title : step === 4 ? "What’s your ZIP code?" : "Where should I send your personalized solar review?"}</h2>
            <p className={styles.helper}>{step === 0 ? "Let’s start with a little about your home." : step === 4 ? "This helps us understand your local options." : step === 5 ? "Almost done. Uriel will follow up about your request." : "Choose the option that best fits your situation."}</p>
            {question ? <fieldset className={styles.options}><legend className={styles.srOnly}>{question.title}</legend>{question.options.map(option => <label key={option} className={`${styles.option} ${selected === option ? styles.selected : ""}`}><input type="radio" name={question.key} value={option} checked={selected === option} onChange={() => setAnswers({ ...answers, [question.key]: option })} required /><span>{option}</span><span className={styles.radio} aria-hidden="true" /></label>)}</fieldset> : step === 4 ? <label className={styles.field}>ZIP code<input autoComplete="postal-code" inputMode="numeric" pattern="[0-9]{5}" maxLength={5} value={answers.zip || ""} onChange={e => setAnswers({ ...answers, zip: e.target.value.replace(/\D/g, "").slice(0, 5) })} required placeholder="93534" /></label> : <>
              <div className={styles.fields}>{([['firstName', 'First name', 'given-name', 'text'], ['lastName', 'Last name', 'family-name', 'text'], ['email', 'Email', 'email', 'email'], ['phone', 'Phone', 'tel', 'tel']] as const).map(([key, label, autoComplete, type]) => <label className={styles.field} key={key}>{label}<input type={type} autoComplete={autoComplete} required maxLength={key === 'email' ? 254 : 100} value={contact[key]} onChange={e => setContact({ ...contact, [key]: e.target.value })} /></label>)}</div>
              <label className={styles.consent}><input type="checkbox" required checked={consent} onChange={e => setConsent(e.target.checked)} /><span>I agree to be contacted by Smart Choice Solar by phone or email about my solar review request.</span></label>
              <p className={styles.privacy}>Your information is used for your request. <a href="/privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</a></p>
            </>}
            {error && <p className={styles.error} role="alert">{error} You can also call <a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phoneDisplay}</a>.</p>}
            <button className={styles.continue} disabled={status === 'sending' || (step < 5 && !selected)}>{status === 'sending' ? 'Sending your request…' : step === 5 ? 'Get My Solar Review' : 'Continue'} <span aria-hidden="true">→</span></button>
            {step > 0 && <button className={styles.back} type="button" disabled={status === 'sending'} onClick={() => { setError(""); setStep(s => s - 1); }}>← Back</button>}
          </form>
          <div className={styles.cardFoot}>A real conversation about what works for your home.</div>
        </>}
      </section>
    </div>
    <section className={styles.reviews} aria-labelledby="reviews-title">
      <div className={styles.reviewsHeading}>
        <div><p className={styles.eyebrow}><span /> REAL HOMEOWNER EXPERIENCES</p><h2 id="reviews-title">Before You Decide, Hear From Homeowners Who Already Did.</h2></div>
        <p>Solar is a big decision. See what customers say about the clarity, guidance, and follow-through they received from Uriel and Smart Choice Solar.</p>
      </div>
      <div className={styles.reviewGrid}>
        {[googleReviews[1], googleReviews[2], googleReviews[4]].map((review) => <article className={styles.reviewCard} key={review.name}>
          <div className={styles.stars} aria-label={`${review.rating} out of 5 stars`}>★★★★★</div>
          <blockquote>“{review.quote}”</blockquote>
          <footer><span className={styles.reviewInitial}>{review.name.charAt(0)}</span><div><strong>{review.name}</strong><span>Google review</span></div></footer>
        </article>)}
      </div>
      <a className={styles.reviewCta} href="#assessment">Start My Solar Review <span aria-hidden="true">↑</span></a>
    </section>
    <footer className={styles.footer}><span>© {new Date().getFullYear()} Smart Choice Solar</span><div><a href="/privacy-policy">Privacy</a><a href="/terms">Terms</a></div></footer>
  </div>;
}