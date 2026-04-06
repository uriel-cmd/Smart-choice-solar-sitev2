"use client";

import { useLanguage } from "@/components/language-provider";
import { InlineCTA } from "@/components/inline-cta";
import { GoogleReviewsList } from "@/components/google-reviews-list";
import { PageHero } from "@/components/page-hero";
import { ReviewsShowcase } from "@/components/reviews-showcase";

const copy = {
  en: {
    eyebrow: "Reviews",
    title: "Homeowners choose Smart Choice Solar for the experience as much as the result.",
    description: "Trust is earned in the details. These reviews reflect the clarity, responsiveness, and quality our clients expect.",
    learn: "Learn About Us",
    stats: [
      { value: "5/5", label: "Average homeowner rating" },
      { value: "1,000+", label: "Consultations and proposals guided" },
      { value: "3 core trades", label: "Solar, storage, and roofing under one strategy" }
    ],
    highlights: [
      "Transparent proposals and educational consultations",
      "Strong project communication from quote through install",
      "Thoughtful coordination for combined roofing and solar work"
    ],
    ctaEyebrow: "Second Opinion Welcome",
    ctaTitle: "Already have a quote from another company? Use us as the clarity benchmark.",
    ctaDescription: "Many homeowners come to Smart Choice Solar after a confusing first proposal. We help them compare scope, roof timing, battery logic, and next steps with more confidence.",
    ctaPrimary: "Compare My Options",
    ctaSecondary: "Call for Review"
  },
  es: {
    eyebrow: "Reseñas",
    title: "Los propietarios eligen Smart Choice Solar tanto por la experiencia como por el resultado.",
    description: "La confianza se gana en los detalles. Estas reseñas reflejan la claridad, rapidez y calidad que nuestros clientes esperan.",
    learn: "Conócenos",
    stats: [
      { value: "5/5", label: "Calificación promedio de propietarios" },
      { value: "1,000+", label: "Consultas y propuestas guiadas" },
      { value: "3 oficios clave", label: "Solar, almacenamiento y techado bajo una sola estrategia" }
    ],
    highlights: [
      "Propuestas transparentes y consultas educativas",
      "Comunicación sólida desde la cotización hasta la instalación",
      "Coordinación cuidadosa para proyectos combinados de techo y solar"
    ],
    ctaEyebrow: "Segunda Opinión Bienvenida",
    ctaTitle: "¿Ya tienes una cotización de otra compañía? Úsanos como referencia de claridad.",
    ctaDescription: "Muchos propietarios llegan a Smart Choice Solar después de una primera propuesta confusa. Les ayudamos a comparar alcance, techo, batería y próximos pasos con más confianza.",
    ctaPrimary: "Comparar Mis Opciones",
    ctaSecondary: "Llamar para Revisar"
  }
} as const;

export function ReviewsPageClient() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} description={t.description} primaryCta={{ href: "/?estimator=1", labelKey: "startFreeEstimate", action: "estimate" }} secondaryCta={{ href: "/about", label: t.learn }} />
      <section className="pb-16">
        <div className="container-shell">
          <div className="grid gap-5 md:grid-cols-3">
            {t.stats.map((stat) => (
              <div key={stat.label} className="glass-panel-strong rounded-[24px] p-5">
                <p className="text-2xl font-semibold text-slate">{stat.value}</p>
                <p className="mt-2 text-sm leading-7 text-slate/80">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {t.highlights.map((item) => <div key={item} className="glass-panel-strong rounded-[24px] p-5 text-sm leading-7 text-slate/80">{item}</div>)}
          </div>
          <div className="mt-8"><GoogleReviewsList /></div>
        </div>
      </section>
      <ReviewsShowcase />
      <InlineCTA eyebrow={t.ctaEyebrow} title={t.ctaTitle} description={t.ctaDescription} primaryLabel={t.ctaPrimary} secondaryLabel={t.ctaSecondary} />
    </>
  );
}
