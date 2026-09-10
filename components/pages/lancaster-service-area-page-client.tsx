"use client";

import Image from "next/image";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { useLanguage } from "@/components/language-provider";
import { localizeHref } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

const copy = {
  en: {
    eyebrow: "Lancaster & Antelope Valley",
    title: "Solar, battery storage, and roofing guidance for Lancaster homes.",
    description:
      "Smart Choice Solar is based in Lancaster and helps Antelope Valley homeowners plan solar, battery backup, and roof work around the home, utility account, and long-term energy goals.",
    localTitle: "Local planning starts with the details that actually affect your home.",
    localBody:
      "Lancaster homeowners deal with intense summer cooling demand, strong year-round sun, different utility structures, and roofs that need to be evaluated before equipment is designed. We start with those realities instead of treating the project like a generic California quote.",
    facts: [
      ["Local office", "1105 W Avenue M Unit D, Lancaster, CA 93534"],
      ["Utility-aware", "Planning for Lancaster Energy generation with Southern California Edison delivery and billing"],
      ["Bilingual support", "Clear project guidance in English and Spanish"]
    ],
    servicesEyebrow: "Local Home-Energy Services",
    servicesTitle: "One planning process for the systems that affect each other.",
    services: [
      ["Residential solar", "System sizing and roof-aware design based on real electricity usage, shade, future loads, and the homeowner’s financial goals.", "/solar"],
      ["Battery storage", "Backup and load-shifting planning built around the circuits you care about, evening consumption, and the way your utility account is billed.", "/battery-storage"],
      ["Roof + solar coordination", "Early roof review and coordinated scheduling intended to reduce avoidable removal, reinstallation, and project delays.", "/roofing"],
      ["Solar project review", "A clear second opinion for homeowners comparing equipment, production assumptions, batteries, financing structures, or an existing proposal.", "/contact"]
    ],
    utilityEyebrow: "Lancaster Utility Planning",
    utilityTitle: "The utility shown on your bill changes the conversation.",
    utilityP1:
      "Lancaster homes may receive electricity generation from Lancaster Energy, while Southern California Edison provides delivery and billing. Before recommending a system, we confirm the generation provider, rate structure, recent usage, and whether the homeowner is planning for an EV, electric HVAC, or other future load.",
    utilityP2:
      "That review matters because the right solar-and-battery strategy depends on when the home uses power—not only how many kilowatt-hours appear on the annual bill.",
    processEyebrow: "How We Plan A Lancaster Project",
    processTitle: "A local recommendation should be specific enough to defend.",
    steps: [
      ["1", "Review the bill and utility", "We identify the utility, usage pattern, rate considerations, and any unusually high seasonal demand."],
      ["2", "Evaluate the roof and shade", "Roof condition, orientation, usable area, shade, and future roofing needs shape the system layout."],
      ["3", "Model solar and storage", "We compare realistic solar production, battery priorities, equipment choices, and project structure."],
      ["4", "Coordinate the next steps", "The proposal should clearly explain scope, timing, permitting, installation coordination, and what happens after completion."]
    ],
    nearbyTitle: "Serving Lancaster and the surrounding Antelope Valley",
    nearbyBody:
      "Our local coverage includes Lancaster, Palmdale, Quartz Hill, and nearby Antelope Valley communities. Project availability is confirmed by property address, utility, and scope.",
    faqEyebrow: "Lancaster Solar FAQ",
    faqTitle: "Questions local homeowners ask before requesting a proposal.",
    faqs: [
      ["Does Smart Choice Solar serve Lancaster, California?", "Yes. Smart Choice Solar is based in Lancaster and serves homeowners in Lancaster and surrounding Antelope Valley communities, subject to project scope and address verification."],
      ["How do Lancaster Energy and SCE work together?", "Lancaster Energy may provide electricity generation, while Southern California Edison delivers the power and sends the bill. We review both sets of charges and the home’s usage before making a recommendation."],
      ["Should I consider a battery with solar in Lancaster?", "It depends on evening usage, outage priorities, rate structure, available incentives, and budget. We model those factors instead of automatically adding or excluding storage."],
      ["What if my roof may need replacement?", "We recommend reviewing roof condition before final solar design. Coordinating roofing and solar early can reduce avoidable rework and protect the long-term project."],
      ["Can you review another company’s solar proposal?", "Yes. We can help compare system size, estimated production, battery capacity, equipment assumptions, financing structure, and what is included after installation."]
    ],
    officeLabel: "Lancaster office",
    officeLink: "Start a Lancaster assessment"
  },
  es: {
    eyebrow: "Lancaster y Antelope Valley",
    title: "Orientación solar, baterías y techado para hogares en Lancaster.",
    description:
      "Smart Choice Solar tiene su base en Lancaster y ayuda a propietarios del Antelope Valley a planear solar, batería de respaldo y trabajo de techo de acuerdo con su hogar, servicio eléctrico y metas a largo plazo.",
    localTitle: "La planificación local comienza con los detalles que realmente afectan tu hogar.",
    localBody:
      "Los propietarios de Lancaster enfrentan alta demanda de aire acondicionado en verano, abundante sol, distintas estructuras de servicio eléctrico y techos que deben revisarse antes de diseñar el sistema. Empezamos con esas realidades en lugar de tratar el proyecto como una cotización genérica de California.",
    facts: [
      ["Oficina local", "1105 W Avenue M Unit D, Lancaster, CA 93534"],
      ["Conocimiento de utilidad", "Planificación que considera la generación de Lancaster Energy y la entrega y facturación de Southern California Edison"],
      ["Atención bilingüe", "Orientación clara del proyecto en inglés y español"]
    ],
    servicesEyebrow: "Servicios Locales De Energía",
    servicesTitle: "Un solo proceso para sistemas que se afectan entre sí.",
    services: [
      ["Solar residencial", "Dimensionamiento y diseño que considera el techo, consumo real, sombra, cargas futuras y metas financieras del propietario.", "/solar"],
      ["Batería de respaldo", "Planificación de respaldo y uso de energía almacenada basada en circuitos importantes, consumo nocturno y facturación de la utilidad.", "/battery-storage"],
      ["Coordinación de techo y solar", "Revisión temprana del techo y coordinación de tiempos para reducir remoción, reinstalación y retrasos evitables.", "/roofing"],
      ["Revisión de propuesta solar", "Una segunda opinión clara al comparar equipos, producción estimada, baterías, financiamiento o una propuesta existente.", "/contact"]
    ],
    utilityEyebrow: "Planificación De Utilidad En Lancaster",
    utilityTitle: "La compañía que aparece en tu factura cambia la conversación.",
    utilityP1:
      "Los hogares de Lancaster pueden recibir generación eléctrica de Lancaster Energy, mientras Southern California Edison se encarga de la entrega y facturación. Antes de recomendar un sistema, confirmamos el proveedor de generación, la estructura tarifaria, el consumo reciente y planes futuros como vehículo eléctrico o HVAC eléctrico.",
    utilityP2:
      "Esa revisión importa porque la estrategia correcta de solar y batería depende de cuándo usa energía el hogar, no solo de los kilovatios-hora que aparecen en la factura anual.",
    processEyebrow: "Cómo Planeamos Un Proyecto En Lancaster",
    processTitle: "Una recomendación local debe ser suficientemente específica para defenderse.",
    steps: [
      ["1", "Revisar factura y utilidad", "Identificamos la utilidad, patrón de consumo, tarifas y cualquier demanda estacional inusualmente alta."],
      ["2", "Evaluar techo y sombra", "La condición, orientación, área disponible, sombra y necesidades futuras del techo determinan el diseño."],
      ["3", "Modelar solar y batería", "Comparamos producción realista, prioridades de respaldo, equipos y estructura del proyecto."],
      ["4", "Coordinar los siguientes pasos", "La propuesta debe explicar claramente alcance, tiempos, permisos, instalación y lo que sucede después."]
    ],
    nearbyTitle: "Atendiendo Lancaster y el Antelope Valley",
    nearbyBody:
      "Nuestra cobertura local incluye Lancaster, Palmdale, Quartz Hill y comunidades cercanas del Antelope Valley. Confirmamos disponibilidad según dirección, utilidad y alcance.",
    faqEyebrow: "Preguntas De Solar En Lancaster",
    faqTitle: "Lo que preguntan los propietarios locales antes de solicitar una propuesta.",
    faqs: [
      ["¿Smart Choice Solar atiende Lancaster, California?", "Sí. Smart Choice Solar tiene su base en Lancaster y atiende a propietarios en Lancaster y comunidades cercanas del Antelope Valley, según el alcance y la verificación de dirección."],
      ["¿Cómo trabajan juntos Lancaster Energy y SCE?", "Lancaster Energy puede proporcionar la generación eléctrica, mientras Southern California Edison entrega la energía y envía la factura. Revisamos ambos cargos y el consumo del hogar antes de hacer una recomendación."],
      ["¿Debo considerar una batería junto con solar en Lancaster?", "Depende del consumo nocturno, prioridades durante apagones, tarifa, incentivos disponibles y presupuesto. Modelamos esos factores antes de recomendar almacenamiento."],
      ["¿Qué pasa si mi techo necesita reemplazo?", "Recomendamos revisar el techo antes del diseño final. Coordinar techo y solar desde el principio puede reducir retrabajos y proteger el proyecto a largo plazo."],
      ["¿Pueden revisar la propuesta solar de otra compañía?", "Sí. Podemos comparar tamaño, producción estimada, capacidad de batería, equipos, financiamiento y lo que incluye el servicio después de instalar."]
    ],
    officeLabel: "Oficina en Lancaster",
    officeLink: "Comenzar evaluación en Lancaster"
  }
} as const;

export function LancasterServiceAreaPageClient() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <ContentPage eyebrow={t.eyebrow} title={t.title} description={t.description}>
      <div className="mb-12 overflow-hidden rounded-[30px] border border-sky/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(240,248,252,0.94))] shadow-[0_24px_60px_rgba(26,48,82,0.1)]">
        <Image
          src="/brand/solar-modern-home-external.svg"
          alt={language === "en" ? "Lancaster home with rooftop solar panels" : "Casa en Lancaster con paneles solares"}
          width={1600}
          height={980}
          className="h-auto w-full object-cover"
          priority
        />
        <div className="p-6 sm:p-8">
          <h2 className="mt-0 text-3xl font-semibold tracking-tight text-slate sm:text-4xl">{t.localTitle}</h2>
          <p>{t.localBody}</p>
          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            {t.facts.map(([title, body]) => (
              <div key={title} className="rounded-[24px] border border-line bg-white/90 p-5 shadow-soft">
                <p className="!mt-0 text-xs font-semibold uppercase tracking-[0.18em] text-slate/65">{title}</p>
                <p className="!mt-3 text-sm font-semibold leading-7 text-slate">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-12">
        <p className="!mt-0 text-xs font-semibold uppercase tracking-[0.2em] text-slate/65">{t.servicesEyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate sm:text-4xl">{t.servicesTitle}</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {t.services.map(([title, body, href]) => (
            <Link key={title} href={localizeHref(href, language)} className="group rounded-[26px] border border-line bg-white/88 p-6 shadow-soft transition hover:-translate-y-0.5 hover:border-sky/45">
              <h3 className="text-xl font-semibold text-slate">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate/78">{body}</p>
              <span className="mt-5 inline-flex text-sm font-semibold text-slate transition group-hover:text-[#3f87ad]">
                {language === "en" ? "Explore this service →" : "Explorar este servicio →"}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="mb-12 overflow-hidden rounded-[30px] border border-sky/20 bg-[linear-gradient(145deg,rgba(26,48,82,0.98),rgba(48,94,132,0.96))] p-6 text-white shadow-[0_24px_60px_rgba(26,48,82,0.2)] sm:p-8">
        <p className="!mt-0 text-xs font-semibold uppercase tracking-[0.2em] !text-white/70">{t.utilityEyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight !text-white sm:text-4xl">{t.utilityTitle}</h2>
        <div className="mt-6 grid gap-5 text-base leading-8 lg:grid-cols-2">
          <p className="!mt-0 !text-white/80">{t.utilityP1}</p>
          <p className="!mt-0 !text-white/80">{t.utilityP2}</p>
        </div>
      </div>

      <div className="mb-12">
        <p className="!mt-0 text-xs font-semibold uppercase tracking-[0.2em] text-slate/65">{t.processEyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate sm:text-4xl">{t.processTitle}</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {t.steps.map(([number, title, body]) => (
            <div key={number} className="rounded-[26px] border border-line bg-white/90 p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate text-sm font-semibold text-white">{number}</span>
                <div>
                  <h3 className="text-lg font-semibold text-slate">{title}</h3>
                  <p className="!mt-2 text-sm leading-7 text-slate/78">{body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12 rounded-[30px] border border-line bg-cloud/60 p-6 sm:p-8">
        <h2 className="mt-0 text-3xl font-semibold tracking-tight text-slate">{t.nearbyTitle}</h2>
        <p>{t.nearbyBody}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="!mt-0 text-xs font-semibold uppercase tracking-[0.18em] text-slate/60">{t.officeLabel}</p>
            <p className="!mt-2 font-semibold text-slate">{siteConfig.address.streetAddress}, Lancaster, CA {siteConfig.address.postalCode}</p>
          </div>
          <Link href={localizeHref("/contact", language)} className="accent-button px-5 py-3">{t.officeLink}</Link>
        </div>
      </div>

      <div>
        <p className="!mt-0 text-xs font-semibold uppercase tracking-[0.2em] text-slate/65">{t.faqEyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate sm:text-4xl">{t.faqTitle}</h2>
        <div className="mt-7 space-y-3">
          {t.faqs.map(([question, answer]) => (
            <details key={question} className="rounded-[22px] border border-line bg-white/90 px-5 py-4 shadow-soft">
              <summary className="cursor-pointer list-none pr-6 text-base font-semibold text-slate">{question}</summary>
              <p className="!mt-3 text-sm leading-7 text-slate/78">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </ContentPage>
  );
}
