import Link from "next/link";

import { InlineCTA } from "@/components/inline-cta";
import { PageHero } from "@/components/page-hero";
import { localizeHref, type Locale } from "@/lib/i18n";
import { getRepairGuideContent, type RepairGuide } from "@/lib/repair-guides";
import { siteConfig } from "@/lib/site";

export function SolarRepairGuidePage({ guide, locale }: { guide: RepairGuide; locale: Locale }) {
  const content = getRepairGuideContent(guide, locale);
  const isEnglish = locale === "en";

  return (
    <>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        primaryCta={{ label: isEnglish ? "Request Solar Service" : "Solicitar Servicio Solar", action: "contact" }}
        secondaryCta={{ label: `${isEnglish ? "Call" : "Llamar"} ${siteConfig.phoneDisplay}`, href: `tel:${siteConfig.phoneHref}` }}
      />
      <section className="pb-12 md:pb-16">
        <div className="container-shell grid gap-6 lg:grid-cols-[1.05fr,0.95fr]">
          <article className="glass-panel-strong rounded-[30px] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate/60">{isEnglish ? "What the symptom means" : "Qué significa el síntoma"}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate">{isEnglish ? "Diagnose the cause before replacing equipment." : "Diagnostica la causa antes de reemplazar equipo."}</h2>
            <p className="mt-5 text-base leading-8 text-slate/78">{content.overview}</p>
            <div className="mt-7 rounded-[22px] border border-amber-300/40 bg-amber-50 p-5 text-sm leading-7 text-amber-950">
              <strong>{isEnglish ? "Service note: " : "Nota de servicio: "}</strong>{content.note}
            </div>
          </article>
          <div className="grid gap-5">
            <div className="glass-panel rounded-[30px] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-slate">{isEnglish ? "Common signs" : "Señales comunes"}</h2>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate/78">
                {content.signs.map((item) => <li key={item} className="rounded-2xl border border-line bg-white/80 px-4 py-3">{item}</li>)}
              </ul>
            </div>
            <div className="glass-panel rounded-[30px] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-slate">{isEnglish ? "What a diagnosis should verify" : "Qué debe verificar el diagnóstico"}</h2>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate/78">
                {content.checks.map((item) => <li key={item} className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky" />{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section-band-soft py-10">
        <div className="container-shell flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold text-slate">{isEnglish ? "Explore the complete service process" : "Explora el proceso completo de servicio"}</p>
            <p className="mt-1 text-sm text-slate/70">{isEnglish ? "Return to solar repair services, symptoms, platforms, and FAQs." : "Regresa a servicios, síntomas, plataformas y preguntas frecuentes."}</p>
          </div>
          <Link href={localizeHref("/solar-repair", locale)} className="rounded-full border border-slate/15 bg-white px-5 py-3 text-sm font-semibold text-slate shadow-soft">
            {isEnglish ? "All Solar Repair Services" : "Todos los Servicios de Reparación"}
          </Link>
        </div>
      </section>
      <InlineCTA
        eyebrow={isEnglish ? "Request A Diagnosis" : "Solicita Un Diagnóstico"}
        title={isEnglish ? "Send the equipment details and fault history before the visit." : "Envía los datos del equipo y el historial de fallas antes de la visita."}
        description={isEnglish ? "Include photos, app screenshots, the installation address, and the last date the system worked normally." : "Incluye fotos, capturas, dirección y la última fecha de operación normal."}
        primaryLabel={isEnglish ? "Request Service" : "Solicitar Servicio"}
        primaryAction="contact"
        secondaryLabel={`${isEnglish ? "Call" : "Llamar"} ${siteConfig.phoneDisplay}`}
        sectionClassName="section-band pb-16"
      />
    </>
  );
}

