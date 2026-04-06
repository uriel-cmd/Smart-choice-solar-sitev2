"use client";

import { useLanguage } from "@/components/language-provider";
import { InlineCTA } from "@/components/inline-cta";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/lib/site";

const copy = {
  en: {
    eyebrow: "Service Areas",
    title: "Serving homeowners across California.",
    description: "If you are exploring solar, battery backup, or roofing support anywhere in California, our team can help you evaluate the right path.",
    primary: "Check My ZIP",
    sectionTitle: "Primary service areas",
    sectionBody: "Smart Choice Solar works with homeowners throughout California who want to explore solar, battery backup, roofing coordination, or a combined project with one locally owned and operated team.",
    bottom: "Every California ZIP code is considered serviceable for estimate intake and project review. Reach out and we will help confirm the best next step for your property and project type.",
    ctaEyebrow: "Coverage Check",
    ctaTitle: "The fastest way to confirm fit is to enter your ZIP and start the estimate.",
    ctaDescription: "We use ZIP verification to route homeowners into the right next step and make sure the estimate experience feels relevant from the start.",
    ctaPrimary: "Start ZIP Check",
    ctaSecondary: "Call for Coverage"
  },
  es: {
    eyebrow: "Áreas de Servicio",
    title: "Atendiendo a propietarios en todo California.",
    description: "Si estás explorando solar, batería de respaldo o apoyo de techado en cualquier parte de California, nuestro equipo puede ayudarte a evaluar la mejor ruta.",
    primary: "Verificar Mi ZIP",
    sectionTitle: "Áreas principales de servicio",
    sectionBody: "Smart Choice Solar trabaja con propietarios en todo California que quieren explorar solar, batería, coordinación de techo o un proyecto combinado con un solo equipo operado localmente.",
    bottom: "Todo código postal de California se considera elegible para intake de estimado y revisión de proyecto. Contáctanos y te ayudaremos a confirmar el mejor siguiente paso para tu propiedad.",
    ctaEyebrow: "Verificación de Cobertura",
    ctaTitle: "La forma más rápida de confirmar compatibilidad es ingresar tu código postal y comenzar el estimado.",
    ctaDescription: "Usamos la verificación por ZIP para dirigir a cada propietario al siguiente paso correcto y hacer que el estimado se sienta relevante desde el inicio.",
    ctaPrimary: "Comenzar Revisión ZIP",
    ctaSecondary: "Llamar por Cobertura"
  }
} as const;

export function ServiceAreasPageClient() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} description={t.description} primaryCta={{ href: "/?estimator=1", label: t.primary, action: "estimate" }} />
      <section className="pb-16">
        <div className="container-shell">
          <div className="glass-panel-strong rounded-[32px] p-8 sm:p-10">
            <h2 className="text-2xl font-semibold tracking-tight text-slate">{t.sectionTitle}</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate/80">{t.sectionBody}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {siteConfig.serviceAreas.map((area) => <div key={area} className="rounded-[22px] border border-line bg-white/80 px-4 py-4 text-sm font-medium text-slate">{area}</div>)}
            </div>
            <p className="mt-6 text-sm leading-7 text-slate/80">{t.bottom}</p>
          </div>
        </div>
      </section>
      <InlineCTA eyebrow={t.ctaEyebrow} title={t.ctaTitle} description={t.ctaDescription} primaryLabel={t.ctaPrimary} secondaryLabel={t.ctaSecondary} />
    </>
  );
}
