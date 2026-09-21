"use client";

import Image from "next/image";
import Link from "next/link";

import { InlineCTA } from "@/components/inline-cta";
import { PageHero } from "@/components/page-hero";
import { useLanguage } from "@/components/language-provider";
import { openContactEvent } from "@/components/zip-estimator-controller";
import { localizeHref } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

const copy = {
  en: {
    eyebrow: "Solar Service & Repair",
    title: "Solar Repair & Maintenance Services in California",
    subheadline: "Your solar system should not stay broken because the original installer stopped answering.",
    description:
      "We troubleshoot existing residential solar systems that are offline, underproducing, showing faults, or no longer reporting correctly—then explain the problem and repair path before work moves forward.",
    primary: "Request Solar Service",
    secondary: `Call ${siteConfig.phoneDisplay}`,
    signalEyebrow: "Start With The Symptom",
    signalTitle: "What is your system doing right now?",
    signals: [
      ["System offline", "The inverter, gateway, or monitoring app shows no production or no communication.", "/solar-repair/system-offline"],
      ["Production dropped", "Output is noticeably lower than normal, one section is missing, or the utility bill suddenly increased.", "/solar-repair/low-production"],
      ["Fault or warning", "The inverter or app is displaying an error, shutdown, isolation, arc, grid, or communication warning.", "/solar-repair/inverter-fault"],
      ["Battery issue", "The battery is not charging, not discharging, unavailable for backup, or repeatedly going offline.", "/solar-repair/battery-issues"],
      ["Monitoring lost", "The system may still produce, but the app, portal, cellular connection, or internet reporting stopped updating.", "/solar-repair/monitoring-offline"],
      ["Roof or equipment work", "The system needs inspection, safe shutdown coordination, removal and reinstallation review, or repair after other work.", "/solar-repair/removal-reinstallation"]
    ],
    safety: "Do not open energized equipment or repeatedly reset a faulted system. Take photos of the display and error message, then leave the equipment in a safe condition until it can be evaluated.",
    scopeEyebrow: "Diagnostic Scope",
    scopeTitle: "We diagnose the system as a system—not just the first box showing an error.",
    scopeIntro:
      "A useful service call separates the symptom from the cause. The inverter may report the fault, but the actual issue can be upstream, downstream, inside the monitoring network, or tied to the original design.",
    scope: [
      ["Inverter and electrical faults", "Shutdowns, grid events, isolation faults, tripped protection, visible damage, and equipment that will not restart normally."],
      ["Strings, modules, and optimizers", "Missing production, uneven performance, failed power electronics, connector concerns, and string-level troubleshooting."],
      ["Monitoring and communications", "Offline portals, lost Wi-Fi or cellular reporting, gateway communication, meter data, and account-access issues."],
      ["Battery and backup behavior", "Charging, discharging, backup availability, gateway behavior, operating mode, and solar-to-storage interaction."],
      ["System performance review", "Production history, expected output, shading, clipping, curtailment, equipment limits, and whether the system is actually underperforming."],
      ["Repair and next-step plan", "A documented explanation of what was found, what can be repaired, what may involve warranty support, and what should happen next."]
    ],
    processEyebrow: "A Cleaner Service Process",
    processTitle: "Evidence first. Parts second.",
    steps: [
      ["1", "Remote intake", "We collect the address, equipment photos, app screenshots, error messages, production history, and original installer or warranty details."],
      ["2", "On-site diagnosis", "We inspect the equipment and system behavior, verify relevant electrical conditions, and narrow the problem to a defensible cause."],
      ["3", "Repair scope", "You receive a clear explanation of the recommended work, parts or manufacturer involvement, limitations, and pricing before repair proceeds."],
      ["4", "Verification", "After approved work, we confirm normal operation where possible and document remaining warranty, monitoring, or follow-up items."]
    ],
    brandsEyebrow: "Common Residential Platforms",
    brandsTitle: "Experience across the equipment homeowners actually have installed.",
    brandsBody:
      "We can evaluate many systems built around SolarEdge, Enphase, Tesla, SMA, Fronius, and Power-One/Aurora equipment. Equipment generation, access credentials, warranty status, parts availability, and fault type determine the final service path.",
    brands: [
      ["SolarEdge", "/solar-repair/solaredge"],
      ["Enphase", "/solar-repair/enphase"],
      ["Tesla", "/solar-repair/tesla"],
      ["SMA", "/solar-repair/sma"],
      ["Fronius", "/solar-repair/fronius"],
      ["Power-One / Aurora", "/solar-repair/power-one-aurora"]
    ],
    learnMore: "View troubleshooting guide",
    disclaimer: "Independent service. Manufacturer names identify equipment only and do not imply authorization, certification, endorsement, or affiliation.",
    faqEyebrow: "Solar Repair FAQ",
    faqTitle: "What homeowners need to know before scheduling service.",
    faqs: [
      ["Can you repair a system installed by another company?", "In many cases, yes. We first review the equipment, ownership or service agreement, system access, fault history, and site conditions."],
      ["What should I send before the appointment?", "Photos of the inverter and electrical equipment, monitoring screenshots, recent production history, error messages, and any original plans or warranty information."],
      ["Do you work on SolarEdge systems?", "We evaluate SolarEdge systems along with other common residential platforms. Availability depends on equipment generation, access, parts, warranty status, and the repair required."],
      ["Does low production always mean the panels are bad?", "No. Communication loss, inverter shutdown, string or optimizer issues, shading, utility events, equipment failure, or inaccurate expectations can all look like low production."],
      ["Are you authorized by every brand listed?", "No. Brand names identify equipment we may evaluate and do not imply manufacturer authorization or affiliation."]
    ],
    ctaEyebrow: "Get The System Looked At",
    ctaTitle: "Send the fault details before the visit so the diagnosis starts before we arrive.",
    ctaBody: "Include the equipment brand, error message, monitoring screenshot, installation address, and the last date the system appeared to operate normally.",
    ctaButton: "Request Service"
  },
  es: {
    eyebrow: "Servicio y Reparación Solar",
    title: "Servicios de Reparación y Mantenimiento Solar en California",
    subheadline: "Tu sistema solar no debe quedarse descompuesto porque el instalador original dejó de responder.",
    description:
      "Diagnosticamos sistemas residenciales apagados, con baja producción, fallas o problemas de monitoreo, y explicamos el problema y la ruta de reparación antes de avanzar.",
    primary: "Solicitar Servicio Solar",
    secondary: `Llamar ${siteConfig.phoneDisplay}`,
    signalEyebrow: "Empieza Con El Síntoma",
    signalTitle: "¿Qué está haciendo tu sistema ahora?",
    signals: [
      ["Sistema apagado", "El inversor, gateway o aplicación no muestra producción o comunicación.", "/solar-repair/system-offline"],
      ["Bajó la producción", "La producción es menor, falta una sección o la factura eléctrica aumentó repentinamente.", "/solar-repair/low-production"],
      ["Falla o advertencia", "El inversor o aplicación muestra error, apagado, aislamiento, arco, red o comunicación.", "/solar-repair/inverter-fault"],
      ["Problema de batería", "La batería no carga, no descarga, no respalda la casa o se desconecta repetidamente.", "/solar-repair/battery-issues"],
      ["Monitoreo perdido", "El sistema puede producir, pero la aplicación, portal, conexión celular o internet dejó de actualizar.", "/solar-repair/monitoring-offline"],
      ["Trabajo de techo o equipo", "El sistema necesita inspección, coordinación de apagado, revisión de retiro y reinstalación o reparación después de otro trabajo.", "/solar-repair/removal-reinstallation"]
    ],
    safety: "No abras equipo energizado ni reinicies repetidamente un sistema con falla. Toma fotos de la pantalla y del error y deja el equipo en condición segura hasta que pueda evaluarse.",
    scopeEyebrow: "Alcance Del Diagnóstico",
    scopeTitle: "Diagnosticamos el sistema completo, no solo la primera caja que muestra un error.",
    scopeIntro:
      "Una buena visita separa el síntoma de la causa. El inversor puede reportar la falla, pero el problema real puede estar antes, después, en la red de monitoreo o en el diseño original.",
    scope: [
      ["Fallas del inversor y eléctricas", "Apagados, eventos de red, fallas de aislamiento, protecciones activadas, daño visible y equipo que no reinicia normalmente."],
      ["Strings, módulos y optimizadores", "Producción faltante, desempeño desigual, electrónica fallada, conectores y diagnóstico a nivel de string."],
      ["Monitoreo y comunicaciones", "Portales fuera de línea, pérdida de Wi-Fi o celular, comunicación del gateway, datos del medidor y acceso a cuentas."],
      ["Batería y respaldo", "Carga, descarga, respaldo disponible, comportamiento del gateway, modo de operación e interacción entre solar y batería."],
      ["Revisión de desempeño", "Historial de producción, producción esperada, sombra, clipping, limitaciones del equipo y si realmente existe bajo rendimiento."],
      ["Plan de reparación", "Explicación documentada de lo encontrado, lo reparable, lo que puede requerir garantía y el siguiente paso."]
    ],
    processEyebrow: "Un Proceso Más Claro",
    processTitle: "Primero evidencia. Después partes.",
    steps: [
      ["1", "Información remota", "Recopilamos dirección, fotos, capturas, errores, producción y datos del instalador o garantía."],
      ["2", "Diagnóstico en sitio", "Inspeccionamos el equipo y su comportamiento, verificamos condiciones eléctricas relevantes y aislamos la causa."],
      ["3", "Alcance de reparación", "Recibes explicación clara del trabajo, partes, participación del fabricante, limitaciones y precio antes de avanzar."],
      ["4", "Verificación", "Después del trabajo aprobado, confirmamos operación normal cuando sea posible y documentamos pendientes de garantía o monitoreo."]
    ],
    brandsEyebrow: "Plataformas Residenciales Comunes",
    brandsTitle: "Experiencia con el equipo que realmente tienen instalado los propietarios.",
    brandsBody:
      "Podemos evaluar muchos sistemas con equipos SolarEdge, Enphase, Tesla, SMA, Fronius y Power-One/Aurora. La generación del equipo, acceso, garantía, partes y tipo de falla determinan la ruta final.",
    brands: [
      ["SolarEdge", "/solar-repair/solaredge"],
      ["Enphase", "/solar-repair/enphase"],
      ["Tesla", "/solar-repair/tesla"],
      ["SMA", "/solar-repair/sma"],
      ["Fronius", "/solar-repair/fronius"],
      ["Power-One / Aurora", "/solar-repair/power-one-aurora"]
    ],
    learnMore: "Ver guía de diagnóstico",
    disclaimer: "Servicio independiente. Los nombres de fabricantes solo identifican el equipo y no implican autorización, certificación, respaldo o afiliación.",
    faqEyebrow: "Preguntas De Reparación Solar",
    faqTitle: "Lo que debes saber antes de programar servicio.",
    faqs: [
      ["¿Pueden reparar un sistema instalado por otra compañía?", "En muchos casos, sí. Primero revisamos equipo, contrato, acceso, historial de fallas y condiciones del sitio."],
      ["¿Qué debo enviar antes de la cita?", "Fotos del inversor y equipo eléctrico, capturas, historial de producción, errores y cualquier plano o información de garantía."],
      ["¿Trabajan con SolarEdge?", "Evaluamos SolarEdge y otras plataformas residenciales. La disponibilidad depende de la generación, acceso, partes, garantía y reparación necesaria."],
      ["¿La baja producción significa que los paneles están dañados?", "No. Problemas de comunicación, inversor, strings, optimizadores, sombra, utilidad, equipo o expectativas pueden parecer baja producción."],
      ["¿Están autorizados por todas las marcas?", "No. Las marcas identifican equipos que podemos evaluar y no implican autorización o afiliación."]
    ],
    ctaEyebrow: "Revisa Tu Sistema",
    ctaTitle: "Envía los detalles de la falla para comenzar el diagnóstico antes de llegar.",
    ctaBody: "Incluye marca del equipo, mensaje de error, captura del monitoreo, dirección y última fecha de operación normal.",
    ctaButton: "Solicitar Servicio"
  }
} as const;

export function SolarRepairPageClient() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <>
      <PageHero
        eyebrow={t.eyebrow}
        title={t.title}
        subheadline={t.subheadline}
        description={t.description}
        primaryCta={{ label: t.primary, action: "contact" }}
        secondaryCta={{ label: t.secondary, href: `tel:${siteConfig.phoneHref}` }}
      />

      <section className="pb-12 md:pb-16">
        <div className="container-shell">
          <div className="glass-panel overflow-hidden rounded-[34px]">
            <div className="grid lg:grid-cols-[0.95fr,1.05fr] lg:items-stretch">
              <div className="relative min-h-[270px] overflow-hidden bg-slate sm:min-h-[360px] lg:min-h-full">
                <Image
                  src="/brand/smart-choice-solar-van-v3.png"
                  alt={language === "en" ? "Smart Choice Solar service vehicle" : "Vehículo de servicio de Smart Choice Solar"}
                  fill
                  priority
                  sizes="(max-width: 1023px) 100vw, 48vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(26,48,82,0.48))]" />
              </div>
              <div className="p-6 sm:p-8 lg:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate/65">{t.signalEyebrow}</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate sm:text-4xl">{t.signalTitle}</h2>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {t.signals.map(([title, body, href]) => (
                    <Link key={title} href={localizeHref(href, language)} className="group rounded-[22px] border border-line bg-white/90 p-4 shadow-soft transition hover:-translate-y-0.5 hover:border-sky/45 hover:shadow-[0_18px_38px_rgba(26,48,82,0.12)]">
                      <p className="font-semibold text-slate">{title}</p>
                      <p className="mt-2 text-sm leading-6 text-slate/76">{body}</p>
                      <span className="mt-3 inline-flex text-xs font-semibold text-blue transition group-hover:text-ink">{t.learnMore} →</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-t border-amber-300/35 bg-amber-50 px-6 py-4 text-sm leading-7 text-amber-950 sm:px-8">
              <strong>{language === "en" ? "Safety note: " : "Nota de seguridad: "}</strong>{t.safety}
            </div>
          </div>
        </div>
      </section>

      <section className="section-band-soft py-12 md:py-16">
        <div className="container-shell">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate/65">{t.scopeEyebrow}</p>
          <div className="mt-3 grid gap-5 lg:grid-cols-[0.9fr,1.1fr] lg:items-end">
            <h2 className="text-3xl font-semibold tracking-tight text-slate sm:text-4xl">{t.scopeTitle}</h2>
            <p className="text-base leading-8 text-slate/78">{t.scopeIntro}</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {t.scope.map(([title, body], index) => (
              <div key={title} className="glass-panel-strong rounded-[26px] p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate text-sm font-semibold text-white">{String(index + 1).padStart(2, "0")}</div>
                <h3 className="mt-5 text-xl font-semibold text-slate">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate/78">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band py-12 md:py-16">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate/65">{t.processEyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate sm:text-4xl">{t.processTitle}</h2>
          </div>
          <div className="grid gap-4">
            {t.steps.map(([number, title, body]) => (
              <div key={number} className="glass-panel-strong flex gap-4 rounded-[26px] p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate text-sm font-semibold text-white">{number}</span>
                <div>
                  <h3 className="text-lg font-semibold text-slate">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate/78">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-12 md:pb-16">
        <div className="container-shell">
          <div className="overflow-hidden rounded-[34px] bg-[linear-gradient(145deg,#1a3052,#315e84)] p-6 text-white shadow-[0_28px_70px_rgba(26,48,82,0.2)] sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/65">{t.brandsEyebrow}</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">{t.brandsTitle}</h2>
            <p className="mt-5 max-w-4xl text-base leading-8 text-white/78">{t.brandsBody}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              {t.brands.map(([brand, href]) => (
                <Link key={brand} href={localizeHref(href, language)} className="rounded-full border border-white/18 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/45 hover:bg-white/18">
                  {brand} <span aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
            <p className="mt-6 text-xs leading-6 text-white/58">{t.disclaimer}</p>
          </div>
        </div>
      </section>

      <section className="section-band-soft py-12 md:py-16">
        <div className="container-shell">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate/65">{t.faqEyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate sm:text-4xl">{t.faqTitle}</h2>
          <div className="mt-7 space-y-3">
            {t.faqs.map(([question, answer]) => (
              <details key={question} className="glass-panel-strong rounded-[22px] px-5 py-4">
                <summary className="cursor-pointer list-none pr-6 text-base font-semibold text-slate">{question}</summary>
                <p className="mt-3 text-sm leading-7 text-slate/78">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <InlineCTA
        eyebrow={t.ctaEyebrow}
        title={t.ctaTitle}
        description={t.ctaBody}
        primaryLabel={t.ctaButton}
        primaryAction="contact"
        secondaryLabel={t.secondary}
        sectionClassName="section-band pb-16"
      />

      <div className="fixed inset-x-3 bottom-[82px] z-[95] lg:bottom-5 lg:left-auto lg:right-5 lg:w-auto" aria-label={language === "en" ? "Solar repair quick actions" : "Acciones rápidas de reparación solar"}>
        <div className="mx-auto grid max-w-md grid-cols-2 gap-2 rounded-[22px] border border-white/60 bg-white/94 p-2 shadow-[0_18px_48px_rgba(26,48,82,0.2)] backdrop-blur-xl lg:w-[390px]">
          <a href={`tel:${siteConfig.phoneHref}`} className="rounded-2xl border border-slate/15 px-3 py-3 text-center text-sm font-semibold text-slate transition hover:bg-cloud">
            {t.secondary}
          </a>
          <button type="button" onClick={() => openContactEvent()} className="rounded-2xl bg-[linear-gradient(180deg,#73b5da_0%,#4d8fbb_100%)] px-3 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(77,143,187,0.25)] transition hover:brightness-95">
            {t.ctaButton}
          </button>
        </div>
      </div>
    </>
  );
}
