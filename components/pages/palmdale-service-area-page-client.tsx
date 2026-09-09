"use client";

import Image from "next/image";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { useLanguage } from "@/components/language-provider";
import { localizeHref } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

const copy = {
  en: {
    eyebrow: "Palmdale, California",
    title: "Solar and battery planning shaped around Palmdale homes.",
    description: "Our nearby Lancaster-based team helps Palmdale homeowners plan solar, storage, and roof work around SCE usage, High Desert conditions, and the City’s permit process.",
    localTitle: "A Palmdale project starts with the home, the bill, and the permit path.",
    localBody: "Homes across Rancho Vista, Anaverde, Joshua Hills, and east and west Palmdale do not share one roof type or energy profile. We review summer cooling demand, roof age and orientation, shade, afternoon wind exposure, and future loads before recommending equipment.",
    facts: [
      ["Nearby team", "Based at 1105 W Avenue M STE D in neighboring Lancaster"],
      ["SCE planning", "System sizing based on the home’s Southern California Edison usage and rate plan"],
      ["Palmdale permits", "SolarAPP+ or Accela routing based on the home and project scope"]
    ],
    servicesEyebrow: "Palmdale Home-Energy Services",
    servicesTitle: "One local plan for solar, storage, and the roof beneath them.",
    services: [
      ["Residential solar", "Design based on SCE usage, roof geometry, shade, cooling demand, and realistic production assumptions.", "/solar"],
      ["Battery storage", "Backup and evening-use planning based on the circuits that matter, desired runtime, and the home’s electrical setup.", "/battery-storage"],
      ["Roof + solar coordination", "Roof review before final design to reduce avoidable removal, reinstallation, and schedule conflicts.", "/roofing"],
      ["Proposal review", "A second opinion on production, equipment, storage capacity, financing, and project responsibilities.", "/contact"]
    ],
    permitEyebrow: "City Of Palmdale Permitting",
    permitTitle: "The permit route changes when a battery is part of the project.",
    permitP1: "The City of Palmdale offers SolarAPP+ for qualifying rooftop solar on existing single-family and duplex homes without battery storage. Eligible projects can use the City’s express solar review process.",
    permitP2: "Projects that include an energy storage system, involve a new residence, or do not qualify for SolarAPP+ use the City’s Accela Citizens Portal process. We identify the route during planning so the proposal reflects the actual scope.",
    processEyebrow: "How We Plan A Palmdale Project",
    processTitle: "Local details should shape the recommendation from day one.",
    steps: [
      ["1", "Read the SCE bill", "We review annual usage, summer peaks, rate plan, and planned loads such as an EV or electric HVAC."],
      ["2", "Inspect roof and exposure", "Roof condition, usable planes, shade, orientation, and wind exposure guide layout and equipment placement."],
      ["3", "Choose the permit path", "We determine whether the scope fits SolarAPP+ or requires the City’s Accela process, especially when storage is included."],
      ["4", "Compare a complete proposal", "The final recommendation explains production, storage priorities, roof work, permitting, scheduling, and ongoing support."]
    ],
    neighborhoodsTitle: "Serving neighborhoods across Palmdale",
    neighborhoodsBody: "We work with homeowners in Rancho Vista, Anaverde, Joshua Hills, west Palmdale, east Palmdale, and nearby Antelope Valley communities. Service is confirmed by property address and project scope.",
    faqEyebrow: "Palmdale Solar FAQ",
    faqTitle: "Questions Palmdale homeowners ask before choosing a system.",
    faqs: [
      ["Does Smart Choice Solar serve Palmdale?", "Yes. Our nearby Lancaster-based team serves Palmdale homeowners, subject to address and project review."],
      ["Who provides electricity in Palmdale?", "Palmdale homes are generally served by Southern California Edison. We review the home’s SCE usage and rate plan before sizing solar or storage."],
      ["How are residential solar permits handled in Palmdale?", "The City offers SolarAPP+ for qualifying rooftop-only projects on existing single-family and duplex homes. Projects with batteries and projects on new residences follow the Accela permitting path."],
      ["Should I add a battery?", "That depends on backup priorities, evening demand, desired runtime, available incentives, and budget. We size storage around those goals."],
      ["What local conditions affect the design?", "Summer cooling loads, afternoon winds, roof condition, shade, orientation, and planned electrical loads all affect system design."]
    ],
    officeLabel: "Nearby Antelope Valley office",
    officeLink: "Start a Palmdale assessment"
  },
  es: {
    eyebrow: "Palmdale, California",
    title: "Planificación solar y de baterías diseñada para hogares de Palmdale.",
    description: "Nuestro equipo ubicado en Lancaster ayuda a propietarios de Palmdale a planear solar, baterías y techo según su consumo de SCE, las condiciones del High Desert y los permisos de la ciudad.",
    localTitle: "Un proyecto en Palmdale comienza con la casa, la factura y el tipo de permiso.",
    localBody: "Los hogares de Rancho Vista, Anaverde, Joshua Hills y el este y oeste de Palmdale no comparten un solo tipo de techo ni perfil de consumo. Revisamos la demanda de aire acondicionado, edad y orientación del techo, sombra, viento de la tarde y cargas futuras antes de recomendar equipos.",
    facts: [
      ["Equipo cercano", "Ubicado en 1105 W Avenue M STE D en la vecina ciudad de Lancaster"],
      ["Planificación con SCE", "Tamaño del sistema basado en el consumo y tarifa de Southern California Edison"],
      ["Permisos de Palmdale", "Ruta SolarAPP+ o Accela según la vivienda y el alcance"]
    ],
    servicesEyebrow: "Servicios De Energía En Palmdale",
    servicesTitle: "Un plan local para solar, baterías y el techo que los sostiene.",
    services: [
      ["Solar residencial", "Diseño según consumo de SCE, geometría del techo, sombra, aire acondicionado y producción realista.", "/solar"],
      ["Batería de respaldo", "Planificación según circuitos importantes, tiempo de respaldo deseado y sistema eléctrico de la vivienda.", "/battery-storage"],
      ["Coordinación de techo y solar", "Revisión del techo antes del diseño final para reducir remoción, reinstalación y conflictos de calendario.", "/roofing"],
      ["Revisión de propuesta", "Segunda opinión sobre producción, equipos, capacidad de batería, financiamiento y responsabilidades.", "/contact"]
    ],
    permitEyebrow: "Permisos De La Ciudad De Palmdale",
    permitTitle: "La ruta del permiso cambia cuando el proyecto incluye batería.",
    permitP1: "La Ciudad de Palmdale ofrece SolarAPP+ para proyectos elegibles de solar en techo en viviendas existentes unifamiliares y dúplex sin batería. Esos proyectos pueden usar la revisión solar rápida de la ciudad.",
    permitP2: "Los proyectos con almacenamiento de energía, viviendas nuevas o trabajos que no califican para SolarAPP+ usan el portal Accela de la ciudad. Identificamos la ruta durante la planificación para que la propuesta refleje el alcance real.",
    processEyebrow: "Cómo Planeamos Un Proyecto En Palmdale",
    processTitle: "Los detalles locales deben guiar la recomendación desde el primer día.",
    steps: [
      ["1", "Revisar la factura de SCE", "Analizamos consumo anual, picos de verano, tarifa y cargas futuras como vehículo eléctrico o HVAC eléctrico."],
      ["2", "Revisar techo y exposición", "Condición, áreas utilizables, sombra, orientación y exposición al viento guían el diseño y los equipos."],
      ["3", "Elegir la ruta del permiso", "Determinamos si el proyecto califica para SolarAPP+ o requiere Accela, especialmente cuando incluye batería."],
      ["4", "Comparar una propuesta completa", "La recomendación explica producción, respaldo, techo, permisos, calendario y servicio posterior."]
    ],
    neighborhoodsTitle: "Atendiendo vecindarios de todo Palmdale",
    neighborhoodsBody: "Trabajamos con propietarios en Rancho Vista, Anaverde, Joshua Hills, el oeste y este de Palmdale y comunidades cercanas del Antelope Valley. Confirmamos el servicio según la dirección y el proyecto.",
    faqEyebrow: "Preguntas De Solar En Palmdale",
    faqTitle: "Lo que preguntan los propietarios de Palmdale antes de elegir un sistema.",
    faqs: [
      ["¿Smart Choice Solar atiende Palmdale?", "Sí. Nuestro equipo cercano en Lancaster atiende hogares de Palmdale, sujeto a revisión de la dirección y el proyecto."],
      ["¿Quién proporciona la electricidad en Palmdale?", "Los hogares de Palmdale generalmente reciben servicio de Southern California Edison. Revisamos el consumo y la tarifa de SCE antes de dimensionar solar o batería."],
      ["¿Cómo se tramitan los permisos solares en Palmdale?", "La ciudad ofrece SolarAPP+ para proyectos elegibles solo de solar en viviendas existentes unifamiliares y dúplex. Proyectos con batería y viviendas nuevas usan Accela."],
      ["¿Debo agregar una batería?", "Depende de prioridades de respaldo, consumo nocturno, tiempo deseado, incentivos disponibles y presupuesto."],
      ["¿Qué condiciones locales afectan el diseño?", "El aire acondicionado en verano, viento de la tarde, techo, sombra, orientación y cargas futuras afectan el diseño."]
    ],
    officeLabel: "Oficina cercana en Antelope Valley",
    officeLink: "Comenzar evaluación en Palmdale"
  }
} as const;

export function PalmdaleServiceAreaPageClient() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <ContentPage eyebrow={t.eyebrow} title={t.title} description={t.description}>
      <div className="mb-12 overflow-hidden rounded-[30px] border border-sky/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(240,248,252,0.94))] shadow-[0_24px_60px_rgba(26,48,82,0.1)]">
        <Image src="/brand/solar-modern-home-external.svg" alt={language === "en" ? "Palmdale home with rooftop solar panels" : "Casa en Palmdale con paneles solares"} width={1600} height={980} className="h-auto w-full object-cover" priority />
        <div className="p-6 sm:p-8">
          <h2 className="mt-0 text-3xl font-semibold tracking-tight text-slate sm:text-4xl">{t.localTitle}</h2>
          <p>{t.localBody}</p>
          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            {t.facts.map(([title, body]) => <div key={title} className="rounded-[24px] border border-line bg-white/90 p-5 shadow-soft"><p className="!mt-0 text-xs font-semibold uppercase tracking-[0.18em] text-slate/65">{title}</p><p className="!mt-3 text-sm font-semibold leading-7 text-slate">{body}</p></div>)}
          </div>
        </div>
      </div>

      <div className="mb-12">
        <p className="!mt-0 text-xs font-semibold uppercase tracking-[0.2em] text-slate/65">{t.servicesEyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate sm:text-4xl">{t.servicesTitle}</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {t.services.map(([title, body, href]) => <Link key={title} href={localizeHref(href, language)} className="group rounded-[26px] border border-line bg-white/90 p-6 shadow-soft transition hover:-translate-y-0.5 hover:border-sky/55"><h3 className="text-xl font-semibold text-slate">{title}</h3><p className="mt-3 text-sm leading-7 text-slate/78">{body}</p><span className="mt-5 inline-flex text-sm font-semibold text-slate group-hover:text-[#3f87ad]">{language === "en" ? "Explore this service →" : "Explorar este servicio →"}</span></Link>)}
        </div>
      </div>

      <div className="mb-12 overflow-hidden rounded-[30px] border border-sky/20 bg-[linear-gradient(145deg,rgba(26,48,82,0.98),rgba(48,94,132,0.96))] p-6 text-white shadow-[0_24px_60px_rgba(26,48,82,0.2)] sm:p-8">
        <p className="!mt-0 text-xs font-semibold uppercase tracking-[0.2em] !text-white/70">{t.permitEyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight !text-white sm:text-4xl">{t.permitTitle}</h2>
        <div className="mt-6 grid gap-5 text-base leading-8 lg:grid-cols-2"><p className="!mt-0 !text-white/80">{t.permitP1}</p><p className="!mt-0 !text-white/80">{t.permitP2}</p></div>
      </div>

      <div className="mb-12">
        <p className="!mt-0 text-xs font-semibold uppercase tracking-[0.2em] text-slate/65">{t.processEyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate sm:text-4xl">{t.processTitle}</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">{t.steps.map(([number, title, body]) => <div key={number} className="rounded-[26px] border border-line bg-white/90 p-6 shadow-soft"><div className="flex items-start gap-4"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate text-sm font-semibold text-white">{number}</span><div><h3 className="text-lg font-semibold text-slate">{title}</h3><p className="!mt-2 text-sm leading-7 text-slate/78">{body}</p></div></div></div>)}</div>
      </div>

      <div className="mb-12 rounded-[30px] border border-line bg-cloud/60 p-6 sm:p-8">
        <h2 className="mt-0 text-3xl font-semibold tracking-tight text-slate">{t.neighborhoodsTitle}</h2><p>{t.neighborhoodsBody}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div><p className="!mt-0 text-xs font-semibold uppercase tracking-[0.18em] text-slate/60">{t.officeLabel}</p><p className="!mt-2 font-semibold text-slate">{siteConfig.address.streetAddress}, {siteConfig.address.addressLocality}, CA {siteConfig.address.postalCode}</p></div><Link href={localizeHref("/contact", language)} className="accent-button px-5 py-3">{t.officeLink}</Link></div>
      </div>

      <div><p className="!mt-0 text-xs font-semibold uppercase tracking-[0.2em] text-slate/65">{t.faqEyebrow}</p><h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate sm:text-4xl">{t.faqTitle}</h2><div className="mt-7 space-y-3">{t.faqs.map(([question, answer]) => <details key={question} className="rounded-[22px] border border-line bg-white/90 px-5 py-4 shadow-soft"><summary className="cursor-pointer list-none pr-6 text-base font-semibold text-slate">{question}</summary><p className="!mt-3 text-sm leading-7 text-slate/78">{answer}</p></details>)}</div></div>
    </ContentPage>
  );
}
