"use client";

import { useLanguage } from "@/components/language-provider";
import { ContentPage } from "@/components/content-page";
import { ServiceCard } from "@/components/service-card";

const copy = {
  en: {
    eyebrow: "Solutions",
    title: "Three core services, one cleaner homeowner process.",
    description:
      "Smart Choice Solar brings solar, battery storage, and roofing coordination together so homeowners can make one well-planned energy decision instead of juggling disconnected proposals.",
    introEyebrow: "Why this matters",
    introTitle: "Most homeowners are not solving one problem. They are solving a sequence.",
    introBody:
      "The right system might be solar with storage. It might be solar with roofing coordination first. It might be a battery-led resilience plan based on outage concerns and utility timing. A serious solutions page should make those paths easy to compare, not force every homeowner into the same pitch.",
    compareEyebrow: "Compare the paths",
    compareTitle: "Choose the lane that fits your home best.",
    compareItems: [
      [
        "Solar",
        "Best for homeowners focused on bill reduction, long-term ownership value, and a design tailored to their roof and usage profile."
      ],
      [
        "Battery Storage",
        "Best for homeowners thinking about outages, late-day power use, backup priorities, and getting more control over when stored energy is used."
      ],
      [
        "Roofing Coordination",
        "Best for homeowners who want to avoid rework, protect the roof before install, and keep long-term system timing aligned from the start."
      ]
    ],
    services: [
      {
        kicker: "Solar Design",
        title: "Custom Solar Systems",
        image: "/brand/service-solar.svg",
        description:
          "Thoughtfully designed solar built around your roofline, utility usage, and long-term energy goals.",
        benefits: ["Cleaner utility savings strategy", "Roof-aware design", "Permitting support"],
        href: "/solar"
      },
      {
        kicker: "Energy Resilience",
        title: "Battery Backup",
        image: "/brand/service-battery.svg",
        description:
          "Battery storage that protects the essentials during outages and helps you keep more of your power on your terms.",
        benefits: ["Backup planning", "Peak-rate protection", "Expandable design"],
        href: "/battery-storage"
      },
      {
        kicker: "Roof + Solar Planning",
        title: "Roof + Solar Coordination",
        image: "/brand/service-roofing.svg",
        description:
          "Roofing guidance and solar coordination that reduce rework, timeline issues, and contractor handoff friction.",
        benefits: ["One coordinated scope", "Long-term roof protection", "Fewer project surprises"],
        href: "/roofing"
      }
    ]
  },
  es: {
    eyebrow: "Soluciones",
    title: "Tres servicios principales, un proceso más limpio para el propietario.",
    description:
      "Smart Choice Solar reúne solar, baterías y coordinación de techado para que los propietarios tomen una sola decisión energética bien planificada en lugar de manejar propuestas desconectadas.",
    introEyebrow: "Por qué importa",
    introTitle: "La mayoría de los propietarios no resuelven un solo problema. Resuelven una secuencia.",
    introBody:
      "La mejor opción puede ser solar con batería. Puede ser solar con coordinación de techo primero. Puede ser una estrategia centrada en batería según apagones y tarifas. Una página seria de soluciones debe hacer que esos caminos sean fáciles de comparar, no empujar a todos al mismo discurso.",
    compareEyebrow: "Compara los caminos",
    compareTitle: "Elige la ruta que mejor encaja con tu hogar.",
    compareItems: [
      [
        "Solar",
        "Ideal para propietarios enfocados en reducir la factura, el valor de propiedad a largo plazo y un diseño adaptado a su techo y consumo."
      ],
      [
        "Batería",
        "Ideal para propietarios que piensan en apagones, uso nocturno, prioridades de respaldo y mayor control sobre cuándo usar la energía almacenada."
      ],
      [
        "Coordinación de Techo",
        "Ideal para propietarios que quieren evitar retrabajos, proteger el techo antes de instalar y mantener el momento del sistema alineado desde el inicio."
      ]
    ],
    services: [
      {
        kicker: "Diseño Solar",
        title: "Sistemas Solares Personalizados",
        image: "/brand/service-solar.svg",
        description:
          "Solar cuidadosamente diseñado alrededor de tu techo, tu consumo y tus metas energéticas a largo plazo.",
        benefits: ["Estrategia más limpia de ahorro", "Diseño consciente del techo", "Apoyo con permisos"],
        href: "/solar"
      },
      {
        kicker: "Resiliencia Energética",
        title: "Respaldo con Batería",
        image: "/brand/service-battery.svg",
        description:
          "Almacenamiento con batería que protege lo esencial durante apagones y te ayuda a controlar mejor tu energía.",
        benefits: ["Plan de respaldo", "Protección contra tarifas pico", "Diseño expandible"],
        href: "/battery-storage"
      },
      {
        kicker: "Planificación de Techo + Solar",
        title: "Coordinación de Techo + Solar",
        image: "/brand/service-roofing.svg",
        description:
          "Orientación de techado y coordinación solar que reduce retrabajos, problemas de tiempo y fricción entre contratistas.",
        benefits: ["Un alcance coordinado", "Protección del techo a largo plazo", "Menos sorpresas"],
        href: "/roofing"
      }
    ]
  }
} as const;

export function SolutionsPageClient() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <ContentPage eyebrow={t.eyebrow} title={t.title} description={t.description}>
      <div className="mb-12 overflow-hidden rounded-[30px] border border-sky/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(240,248,252,0.94))] shadow-[0_24px_60px_rgba(26,48,82,0.1)]">
        <div className="h-1.5 bg-[linear-gradient(90deg,#e2a13a_0%,#8fcbe7_38%,#1a3052_100%)]" />
        <div className="p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate/65">{t.introEyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate sm:text-4xl">{t.introTitle}</h2>
          <p className="mt-6 text-base leading-8 text-slate/80">{t.introBody}</p>
        </div>
        <div className="h-1.5 bg-[linear-gradient(90deg,#8fcbe7_0%,#1a3052_64%,#e2a13a_100%)]" />
      </div>

      <div className="mb-12 rounded-[30px] border border-line bg-white/90 p-6 shadow-soft sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate/65">{t.compareEyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate sm:text-4xl">{t.compareTitle}</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {t.compareItems.map(([title, body]) => (
            <div key={title} className="rounded-[24px] border border-line bg-cloud/55 p-5">
              <p className="text-base font-semibold text-slate">{title}</p>
              <p className="mt-3 text-sm leading-7 text-slate/78">{body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {t.services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </ContentPage>
  );
}
