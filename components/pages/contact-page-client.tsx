"use client";

import { useLanguage } from "@/components/language-provider";
import { EstimateCalculator } from "@/components/estimate-calculator";
import { InlineCTA } from "@/components/inline-cta";
import { LeadForm } from "@/components/lead-form";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/lib/site";

const copy = {
  en: {
    eyebrow: "Free Assessment",
    title: "Tell us about your home and we’ll map the right next step.",
    description: "Choose the path that fits you best: start with the estimator or send your project details directly for a tailored follow-up.",
    reasons: [
      "Fast assessment turnaround with practical next steps",
      "No-pressure guidance on solar, storage, and roofing decisions",
      "Financing and timeline conversations tailored to your project"
    ],
    orEmail: "Call",
    ctaEyebrow: "Need Fast Answers?",
    ctaTitle: "Use the estimate path for quicker qualification, or submit the full form for a hands-on review.",
    ctaDescription: "Both routes are designed to feel easy. The difference is simply how much guidance you want up front.",
    ctaPrimary: "Start My Estimate"
  },
  es: {
    eyebrow: "Evaluación Gratis",
    title: "Cuéntanos sobre tu hogar y trazaremos el siguiente paso correcto.",
    description: "Elige la ruta que mejor te funcione: empieza con el estimador o envía tus detalles para un seguimiento más personalizado.",
    reasons: [
      "Respuesta rápida con próximos pasos prácticos",
      "Orientación sin presión sobre solar, batería y techo",
      "Conversaciones sobre financiamiento y tiempos adaptadas a tu proyecto"
    ],
    orEmail: "Llama",
    ctaEyebrow: "¿Necesitas Respuestas Rápidas?",
    ctaTitle: "Usa el estimador para una calificación más rápida o envía el formulario completo para una revisión más directa.",
    ctaDescription: "Ambas rutas están diseñadas para sentirse fáciles. La diferencia es cuánta guía quieres desde el inicio.",
    ctaPrimary: "Comenzar Mi Estimado"
  }
} as const;

export function ContactPageClient() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} description={t.description} primaryCta={{ action: "estimate", labelKey: "startFreeEstimate" }} secondaryCta={{ href: "/reviews", labelKey: "readReviews" }} />
      <EstimateCalculator />
      <section className="pb-16">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.85fr,1.15fr]">
          <div className="space-y-4">
            {t.reasons.map((reason) => <div key={reason} className="glass-panel-strong rounded-[24px] p-5 text-sm leading-7 text-slate/80">{reason}</div>)}
            <div className="glass-panel-strong rounded-[24px] p-5 text-sm leading-7 text-slate/80">
              {t.orEmail} <a href={`tel:${siteConfig.phoneHref}`} className="font-semibold text-ink">{siteConfig.phoneDisplay}</a> {language === "en" ? "or email" : "o envía correo a"}{" "}
              <a href={`mailto:${siteConfig.email}`} className="font-semibold text-ink">{siteConfig.email}</a>.
            </div>
          </div>
          <LeadForm />
        </div>
      </section>
      <InlineCTA eyebrow={t.ctaEyebrow} title={t.ctaTitle} description={t.ctaDescription} primaryLabel={t.ctaPrimary} secondaryLabel={`${t.orEmail} ${siteConfig.phoneDisplay}`} />
    </>
  );
}
