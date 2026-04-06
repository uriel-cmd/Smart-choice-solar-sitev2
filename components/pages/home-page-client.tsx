"use client";

import Image from "next/image";
import Link from "next/link";

import { useLanguage } from "@/components/language-provider";
import { ContractComparisonShowcase } from "@/components/contract-comparison-showcase";
import { EnergyFlowShowcase } from "@/components/energy-flow-showcase";
import { EstimateCalculator } from "@/components/estimate-calculator";
import { FAQList } from "@/components/faq-list";
import { InlineCTA } from "@/components/inline-cta";
import { LeadForm } from "@/components/lead-form";
import { ReviewsShowcase } from "@/components/reviews-showcase";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { localizeHref } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

const homeCopy = {
  en: {
    heroEyebrow: "Locally Owned and Operated",
    heroTitle: "Your Trusted Premium Solar Partner in California.",
    heroDescription:
      "Smart Choice Solar helps California homeowners compare solar, battery storage, and roofing with a cleaner estimate-first process, stronger project coordination, and a more confident homeowner experience from day one.",
    startEstimate: "Start My Free Estimate",
    checkArea: "Check Service Area",
    badges: [
      "Homeowner-first project guidance",
      "Solar + battery + roofing expertise",
      "Clean installs and clear communication"
    ],
    pillars: [
      {
        title: "Estimate-first process",
        description: "We make it easy to start with a guided savings conversation before you commit to a full appointment."
      },
      {
        title: "Local home-energy expertise",
        description: "Our recommendations account for California roofs, outage concerns, and utility rate realities."
      },
      {
        title: "Premium project handling",
        description: "From proposal clarity to install coordination, we focus on making the entire homeowner experience feel organized."
      }
    ],
    stats: [
      { value: "25+", label: "Years of combined solar and roofing experience" },
      { value: "5/5", label: "Average homeowner review rating" },
      { value: "24 hrs", label: "Average proposal turnaround" }
    ],
    panelTitle: "A more authoritative path from estimate to installation.",
    rated: "5/5 rated",
    trustSignals: [
      "Locally owned and operated with California-wide homeowner coverage",
      "Premium solar, battery, and roofing planning in one process",
      "Fast quote delivery with no-pressure education"
    ],
    quickFitTitle: "Quick local fit check",
    quickFitDescription:
      "As a locally owned and operated company serving California homeowners, we help you decide whether solar, battery backup, roofing, or a combined scope makes the most sense before the project starts.",
    bestForTitle: "Best for",
    bestForDescription: "Homeowners comparing quotes and wanting a more trustworthy second opinion.",
    nextTitle: "What happens next",
    nextDescription: "Estimate review, roof fit check, service recommendation, then a scheduled in-home assessment.",
    builtForTrustEyebrow: "Built for trust",
    builtForTrustTitle: "Homeowners come to us when they want clarity before they commit.",
    builtForTrustPoints: [
      "Real conversations about roof condition, project timing, and energy priorities.",
      "Cleaner handoff between design, scheduling, installation, and final walkthrough.",
      "A premium homeowner experience that feels organized from first call to final activation."
    ],
    servicesEyebrow: "Our Services",
    servicesTitle: "A broader service platform with one high-trust homeowner process.",
    servicesDescription:
      "The business should feel established because the work is established. We cover the major decision paths homeowners actually need, not just a narrow solar pitch.",
    services: [
      {
        kicker: "Solar Design",
        title: "Custom Solar Systems",
        image: "/brand/service-solar.svg",
        description: "Thoughtfully designed solar built around your roofline, utility usage, and long-term energy goals.",
        benefits: ["Cleaner utility savings strategy", "Roof-aware design", "Permitting support"],
        href: "/solar"
      },
      {
        kicker: "Energy Resilience",
        title: "Battery Backup",
        image: "/brand/service-battery.svg",
        description: "Battery storage that protects the essentials during outages and helps you keep more of your power on your terms.",
        benefits: ["Backup planning", "Peak-rate protection", "Expandable design"],
        href: "/battery-storage"
      },
      {
        kicker: "Roof + Solar Planning",
        title: "Roof + Solar Coordination",
        image: "/brand/service-roofing.svg",
        description: "Roofing guidance and solar coordination that reduce rework, timeline issues, and contractor handoff friction.",
        benefits: ["One coordinated scope", "Long-term roof protection", "Fewer project surprises"],
        href: "/roofing"
      }
    ],
    estimateCtaEyebrow: "Start With an Estimate",
    estimateCtaTitle: "Not ready for a full site visit yet? Start with a guided savings and scope estimate.",
    estimateCtaPrimary: "Try the Estimate",
    processEyebrow: "The Smart Choice Difference",
    processTitle: "A higher-touch process built for homeowners who care about the details.",
    processDescription: "We focus on the moments that shape trust: honest recommendations, strong communication, and cleaner project coordination.",
    processSteps: [
      {
        title: "Discovery and roof review",
        description: "We start with your utility usage, roof condition, and project priorities so the recommendation is grounded in your actual home."
      },
      {
        title: "Custom design and savings strategy",
        description: "You receive a tailored proposal with system assumptions, battery options when relevant, and a clearer picture of next steps."
      },
      {
        title: "Permits, scheduling, and install",
        description: "Our team coordinates the moving pieces, keeps you updated, and manages the job with the polish homeowners expect from a premium contractor."
      },
      {
        title: "Activation and support",
        description: "We walk you through the finished system, what production should look like, and how your setup is expected to perform over time."
      }
    ],
    planningEyebrow: "Project Planning",
    planningTitle: "Get real guidance on savings, battery backup, roof timing, and next steps.",
    planningPrimary: "Get In Touch",
    financingEyebrow: "Financing",
    financingTitle: "Explore the main ways homeowners structure a solar project.",
    financingDescription:
      "The best option depends on whether you care most about ownership, monthly payment structure, or how quickly you want to get started.",
    financingLabel: "Option",
    financingOptions: [
      {
        title: "PPA",
        visual: "ppa",
        description: "A power purchase agreement can reduce upfront cost and shift the conversation toward the rate you pay for solar energy over time.",
        points: ["Lower upfront entry", "Rate-based structure", "Best for payment-first comparisons"]
      },
      {
        title: "Lease",
        visual: "lease",
        description: "A solar lease can make monthly budgeting more predictable when the homeowner wants a simpler equipment-use arrangement.",
        points: ["Predictable monthly structure", "Straightforward agreement terms", "Good for simplicity-focused buyers"]
      },
      {
        title: "Financing",
        visual: "financing",
        description: "Financing can make the most sense for homeowners who want long-term ownership, tax-credit alignment, and stronger lifetime value.",
        points: ["Ownership-focused path", "Tax credit alignment", "Long-term savings upside"]
      }
    ],
    financingCtaEyebrow: "Financing Guidance",
    financingCtaTitle: "Options are great, but only when you understand which is right for you.",
    financingCtaPrimary: "Explore Options",
    confidenceEyebrow: "Confidence Check",
    confidenceTitle: "If you are comparing multiple companies, let us be the high-clarity benchmark.",
    confidenceDescription:
      "Homeowners often contact Smart Choice Solar after a confusing first quote. We help them understand what is actually being proposed and what a cleaner project plan looks like.",
    confidencePrimary: "Compare My Options",
    faqEyebrow: "FAQ",
    faqTitle: "Questions homeowners ask before they move forward.",
    faqDescription: "A few of the real conversations that come up when people are comparing proposals and trying to make the right call.",
    faqs: [
      {
        question: "How much can I save with solar?",
        answer: "Savings depend on your utility rates, roof layout, and usage profile. During your proposal, we focus on a realistic design strategy so you understand the tradeoffs behind the numbers."
      },
      {
        question: "Do I need a new roof before going solar?",
        answer: "Not always. We review roof condition early and let you know whether solar can move forward now or if roofing work should happen first to protect the long-term investment."
      },
      {
        question: "Is battery storage worth it in California?",
        answer: "For many California homes, yes. Battery storage can improve outage resilience, help with peak-rate pressure, and make your solar production more useful later in the day."
      },
      {
        question: "What financing options are available?",
        answer: "We can walk through cash and financing paths so you can compare monthly outlay, expected savings behavior, and the option that best fits your timeline."
      }
    ]
  },
  es: {
    heroEyebrow: "Operado Localmente",
    heroTitle: "Tu socio premium de confianza en energía solar en California.",
    heroDescription:
      "Smart Choice Solar ayuda a los propietarios de California a comparar solar, batería y techado con un proceso de estimado más claro, mejor coordinación del proyecto y una experiencia más segura desde el primer día.",
    startEstimate: "Comenzar Mi Estimado Gratis",
    checkArea: "Verificar Área de Servicio",
    badges: ["Guía enfocada en el propietario", "Experiencia en solar + batería + techo", "Instalaciones limpias y comunicación clara"],
    pillars: [
      {
        title: "Proceso basado en estimado",
        description: "Facilitamos comenzar con una conversación guiada de ahorro antes de comprometerte a una cita completa."
      },
      {
        title: "Experiencia local en energía del hogar",
        description: "Nuestras recomendaciones consideran techos de California, apagones y realidades tarifarias."
      },
      {
        title: "Manejo premium del proyecto",
        description: "Desde la claridad de la propuesta hasta la coordinación de la instalación, buscamos una experiencia organizada."
      }
    ],
    stats: [
      { value: "25+", label: "Años de experiencia combinada en solar y techado" },
      { value: "5/5", label: "Calificación promedio de propietarios" },
      { value: "24 hrs", label: "Tiempo promedio de entrega de propuesta" }
    ],
    panelTitle: "Una ruta más confiable desde el estimado hasta la instalación.",
    rated: "5/5 calificado",
    trustSignals: [
      "Operado localmente con cobertura para propietarios en todo California",
      "Planeación premium de solar, batería y techado en un solo proceso",
      "Cotizaciones rápidas con educación sin presión"
    ],
    quickFitTitle: "Revisión rápida de compatibilidad",
    quickFitDescription:
      "Como empresa local que atiende a propietarios en California, te ayudamos a decidir si lo mejor es solar, batería de respaldo, techado o un alcance combinado antes de comenzar.",
    bestForTitle: "Ideal para",
    bestForDescription: "Propietarios que comparan cotizaciones y quieren una segunda opinión más confiable.",
    nextTitle: "Qué sigue",
    nextDescription: "Revisión del estimado, revisión del techo, recomendación de servicio y luego una evaluación en casa programada.",
    builtForTrustEyebrow: "Diseñado para generar confianza",
    builtForTrustTitle: "Los propietarios nos buscan cuando quieren claridad antes de comprometerse.",
    builtForTrustPoints: [
      "Conversaciones reales sobre el estado del techo, el momento del proyecto y las prioridades energéticas.",
      "Mejor coordinación entre diseño, agenda, instalación y recorrido final.",
      "Una experiencia premium para el propietario organizada desde la primera llamada hasta la activación final."
    ],
    servicesEyebrow: "Nuestros Servicios",
    servicesTitle: "Una plataforma más amplia de servicios con un proceso de alta confianza.",
    servicesDescription:
      "El negocio debe sentirse establecido porque el trabajo lo está. Cubrimos los caminos de decisión que los propietarios realmente necesitan, no solo una propuesta limitada de solar.",
    services: [
      {
        kicker: "Diseño Solar",
        title: "Sistemas Solares Personalizados",
        image: "/brand/service-solar.svg",
        description: "Solar cuidadosamente diseñado alrededor de tu techo, tu consumo y tus metas energéticas a largo plazo.",
        benefits: ["Estrategia más limpia de ahorro", "Diseño consciente del techo", "Apoyo con permisos"],
        href: "/solar"
      },
      {
        kicker: "Resiliencia Energética",
        title: "Respaldo con Batería",
        image: "/brand/service-battery.svg",
        description: "Almacenamiento con batería que protege lo esencial durante apagones y te ayuda a controlar mejor tu energía.",
        benefits: ["Plan de respaldo", "Protección contra tarifas pico", "Diseño expandible"],
        href: "/battery-storage"
      },
      {
        kicker: "Planificación de Techo + Solar",
        title: "Coordinación de Techo + Solar",
        image: "/brand/service-roofing.svg",
        description: "Orientación de techado y coordinación solar que reduce retrabajos, problemas de tiempo y fricción entre contratistas.",
        benefits: ["Un alcance coordinado", "Protección del techo a largo plazo", "Menos sorpresas"],
        href: "/roofing"
      }
    ],
    estimateCtaEyebrow: "Empieza con un Estimado",
    estimateCtaTitle: "¿Aún no estás listo para una visita completa? Empieza con un estimado guiado de ahorro y alcance.",
    estimateCtaPrimary: "Probar el Estimado",
    processEyebrow: "La Diferencia Smart Choice",
    processTitle: "Un proceso de mayor nivel para propietarios que se fijan en los detalles.",
    processDescription: "Nos enfocamos en los momentos que generan confianza: recomendaciones honestas, comunicación sólida y coordinación más limpia.",
    processSteps: [
      {
        title: "Descubrimiento y revisión del techo",
        description: "Comenzamos con tu consumo, el estado del techo y tus prioridades para que la recomendación se base en tu hogar real."
      },
      {
        title: "Diseño personalizado y estrategia de ahorro",
        description: "Recibes una propuesta a medida con supuestos del sistema, opciones de batería cuando aplica y una visión más clara del siguiente paso."
      },
      {
        title: "Permisos, agenda e instalación",
        description: "Nuestro equipo coordina las piezas, te mantiene informado y gestiona el trabajo con el nivel que los propietarios esperan."
      },
      {
        title: "Activación y soporte",
        description: "Te explicamos cómo queda el sistema, qué producción esperar y cómo debería comportarse con el tiempo."
      }
    ],
    planningEyebrow: "Planificación del Proyecto",
    planningTitle: "Obtén orientación real sobre ahorro, batería de respaldo, tiempo del techo y próximos pasos.",
    planningPrimary: "Contáctanos",
    financingEyebrow: "Financiamiento",
    financingTitle: "Explora las principales formas en que los propietarios estructuran un proyecto solar.",
    financingDescription:
      "La mejor opción depende de si te importa más la propiedad, la estructura mensual del pago o la rapidez para comenzar.",
    financingLabel: "Opción",
    financingOptions: [
      {
        title: "PPA",
        visual: "ppa",
        description: "Un acuerdo de compra de energía puede reducir el costo inicial y enfocar la conversación en la tarifa que pagas por la energía solar con el tiempo.",
        points: ["Menor entrada inicial", "Estructura basada en tarifa", "Ideal para comparar pagos"]
      },
      {
        title: "Arrendamiento",
        visual: "lease",
        description: "Un arrendamiento solar puede hacer más predecible el pago mensual cuando el propietario quiere una estructura más simple.",
        points: ["Pago mensual predecible", "Términos sencillos", "Bueno para compradores que buscan simplicidad"]
      },
      {
        title: "Financiamiento",
        visual: "financing",
        description: "El financiamiento suele ser ideal para quienes quieren propiedad a largo plazo, alineación con créditos fiscales y mayor valor total.",
        points: ["Ruta enfocada en propiedad", "Alineación con crédito fiscal", "Mayor ahorro a largo plazo"]
      }
    ],
    financingCtaEyebrow: "Guía de Financiamiento",
    financingCtaTitle: "Las opciones son excelentes, pero solo cuando entiendes cuál te conviene.",
    financingCtaPrimary: "Explorar Opciones",
    confidenceEyebrow: "Revisión de Confianza",
    confidenceTitle: "Si estás comparando varias compañías, permítenos ser tu referencia de claridad.",
    confidenceDescription:
      "Muchos propietarios nos contactan después de recibir una primera cotización confusa. Les ayudamos a entender qué se está proponiendo realmente y cómo se ve un plan más limpio.",
    confidencePrimary: "Comparar Mis Opciones",
    faqEyebrow: "Preguntas Frecuentes",
    faqTitle: "Preguntas que los propietarios hacen antes de avanzar.",
    faqDescription: "Algunas de las conversaciones reales que surgen cuando las personas comparan propuestas y quieren tomar la decisión correcta.",
    faqs: [
      {
        question: "¿Cuánto puedo ahorrar con solar?",
        answer: "El ahorro depende de tus tarifas eléctricas, el diseño del techo y tu perfil de consumo. En la propuesta nos enfocamos en una estrategia realista para que entiendas los números."
      },
      {
        question: "¿Necesito un techo nuevo antes de instalar solar?",
        answer: "No siempre. Revisamos el techo desde el inicio y te decimos si el proyecto puede avanzar ahora o si conviene hacer techado primero."
      },
      {
        question: "¿Vale la pena la batería en California?",
        answer: "Para muchos hogares, sí. La batería puede mejorar la resiliencia ante apagones, aliviar las tarifas pico y hacer más útil tu producción solar al final del día."
      },
      {
        question: "¿Qué opciones de financiamiento hay?",
        answer: "Podemos revisar opciones en efectivo y financiadas para que compares desembolso mensual, comportamiento del ahorro y la opción que mejor encaja con tu calendario."
      }
    ]
  }
} as const;

export function HomePageClient() {
  const { language } = useLanguage();
  const copy = homeCopy[language];

  const renderFinancingVisual = (visual: string) => {
    if (visual === "ppa") {
      return (
        <div className="relative h-40 overflow-hidden rounded-[22px] border border-white/60 bg-[linear-gradient(135deg,rgba(255,255,255,0.88),rgba(222,236,247,0.98))] p-5 shadow-[0_14px_40px_rgba(26,48,82,0.08)]">
          <div className="absolute right-5 top-5 h-14 w-14 rounded-full bg-sun/85 shadow-[0_0_30px_rgba(226,161,58,0.28)]" />
          <div className="mt-3 flex items-end gap-3">
            <div className="h-12 w-14 rounded-t-[14px] bg-sky/70" />
            <div className="h-20 w-14 rounded-t-[14px] bg-slate" />
            <div className="h-28 w-14 rounded-t-[14px] bg-sky" />
          </div>
          <div className="mt-4 h-3 rounded-full bg-slate/10" />
          <div className="mt-3 flex items-center justify-between rounded-[18px] bg-white/90 px-4 py-3 text-sm font-semibold text-slate shadow-soft">
            <span>{language === "en" ? "Pay for power used" : "Paga por la energía usada"}</span>
            <span className="sun-accent">kWh</span>
          </div>
        </div>
      );
    }

    if (visual === "lease") {
      return (
        <div className="relative h-40 overflow-hidden rounded-[22px] border border-white/60 bg-[linear-gradient(135deg,rgba(255,255,255,0.88),rgba(232,243,250,0.98))] p-5 shadow-[0_14px_40px_rgba(26,48,82,0.08)]">
          <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-sky/30 blur-2xl" />
          <div className="rounded-[18px] bg-white/92 p-4 shadow-soft">
            <div className="mb-3 flex items-center justify-between">
              <div className="h-3 w-24 rounded-full bg-slate/15" />
              <div className="h-8 w-8 rounded-full bg-sun/85" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3"><div className="h-6 w-6 rounded-full bg-slate text-white" /><div className="h-3 flex-1 rounded-full bg-slate/12" /></div>
              <div className="flex items-center gap-3"><div className="h-6 w-6 rounded-full bg-sky text-white" /><div className="h-3 flex-1 rounded-full bg-slate/12" /></div>
              <div className="flex items-center gap-3"><div className="h-6 w-6 rounded-full bg-sun text-white" /><div className="h-3 flex-1 rounded-full bg-slate/12" /></div>
            </div>
          </div>
          <div className="mt-4 rounded-[16px] border border-sky/25 bg-white/80 px-4 py-3 text-sm font-semibold text-slate">
            {language === "en" ? "Predictable monthly structure" : "Pago mensual predecible"}
          </div>
        </div>
      );
    }

    return (
      <div className="relative h-40 overflow-hidden rounded-[22px] border border-white/60 bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(228,240,248,0.98))] p-5 shadow-[0_14px_40px_rgba(26,48,82,0.08)]">
        <div className="absolute inset-x-0 bottom-0 h-16 bg-[linear-gradient(180deg,rgba(143,203,231,0.08),rgba(26,48,82,0.12))]" />
        <div className="flex items-start justify-between">
          <div className="rounded-[18px] bg-slate px-4 py-3 text-lg font-semibold text-white shadow-soft">$</div>
          <div className="rounded-full border border-sky/25 bg-white/85 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate">
            {language === "en" ? "Ownership" : "Propiedad"}
          </div>
        </div>
        <div className="mt-5 flex items-end gap-3">
          <div className="h-12 w-16 rounded-t-[14px] bg-slate/25" />
          <div className="h-20 w-16 rounded-t-[14px] bg-sky/80" />
          <div className="h-30 w-16 rounded-t-[14px] bg-slate" />
        </div>
        <div className="mt-4 rounded-[16px] bg-white/90 px-4 py-3 text-sm font-semibold text-slate shadow-soft">
          {language === "en" ? "Long-term value focus" : "Enfoque en valor a largo plazo"}
        </div>
      </div>
    );
  };

  return (
    <>
      <section className="relative overflow-hidden pb-10">
        <div className="absolute inset-0 grid-overlay opacity-40" />
        <div className="absolute left-0 top-0 h-full w-full bg-halo opacity-70" />
        <div className="container-shell relative section-space pb-12">
          <div className="grid gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:items-start">
            <div className="pt-4">
              <span className="eyebrow">{copy.heroEyebrow}</span>
              <h1 className="headline mt-6 max-w-4xl text-balance">{copy.heroTitle}</h1>
              <p className="subheadline mt-6 max-w-2xl text-balance">{copy.heroDescription}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href={localizeHref("/?estimator=1", language)} className="accent-button">{copy.startEstimate}</Link>
                <Link href={localizeHref("/service-areas", language)} className="rounded-full border border-slate/12 bg-white/90 px-6 py-4 text-center text-sm font-semibold text-slate shadow-soft">
                  {copy.checkArea}
                </Link>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {copy.badges.map((badge) => <span key={badge} className="accent-chip">{badge}</span>)}
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {copy.pillars.map((pillar) => (
                  <div key={pillar.title} className="rounded-[24px] border border-line/80 bg-white/80 p-5 shadow-soft">
                    <p className="text-sm font-semibold text-slate">{pillar.title}</p>
                    <p className="mt-2 text-sm leading-7 text-slate/75">{pillar.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {copy.stats.map((stat) => (
                  <div key={stat.label} className="glass-panel-strong rounded-[24px] p-4">
                    <div className="flex items-center gap-2 text-3xl font-semibold text-slate">
                      {stat.value === "5/5" ? <span className="sun-accent text-2xl leading-none">★</span> : null}
                      <span>{stat.value}</span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate/75">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative lg:sticky lg:top-28">
              <div className="glass-panel-strong overflow-hidden rounded-[36px] p-3 sm:p-4">
                <div className="relative overflow-hidden rounded-[30px] bg-[linear-gradient(145deg,rgba(26,48,82,0.2),rgba(143,203,231,0.28))] p-4 sm:p-5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.95),transparent_38%),radial-gradient(circle_at_88%_18%,rgba(143,203,231,0.34),transparent_22%)]" />
                  <div className="relative">
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-slate/70">{language === "en" ? "Why Homeowners Call Us First" : "Por Qué Nos Llaman Primero"}</p>
                        <h2 className="mt-2 text-2xl font-semibold text-slate">{copy.panelTitle}</h2>
                      </div>
                      <div className="inline-flex items-center gap-1.5 rounded-full border border-sun/35 bg-white/80 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate">
                        <span className="sun-accent text-sm leading-none">★</span>
                        <span>{copy.rated}</span>
                      </div>
                    </div>
                    <div className="relative overflow-hidden rounded-[28px] border border-white/60 bg-white/70 shadow-[0_22px_70px_rgba(26,48,82,0.12)]">
                      <Image src="/brand/smart-choice-solar-van-v3.png" alt="Smart Choice Solar branded service van" width={1456} height={816} priority className="h-auto w-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative mx-3 -mt-10 overflow-hidden rounded-[30px] border border-sky/20 bg-[linear-gradient(145deg,rgba(26,48,82,0.12),rgba(143,203,231,0.26))] p-5 shadow-[0_24px_70px_rgba(26,48,82,0.14)] sm:mx-6 sm:-mt-14 sm:p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.9),transparent_36%),radial-gradient(circle_at_88%_18%,rgba(143,203,231,0.24),transparent_24%)]" />
                <div className="relative">
                  <div className="grid gap-3">
                    {copy.trustSignals.map((signal) => <div key={signal} className="rounded-[22px] border border-line bg-white/90 px-4 py-4 text-sm leading-7 text-slate/82">{signal}</div>)}
                  </div>
                  <div className="mt-5 rounded-[24px] border border-line bg-cloud/80 p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate/70">{copy.quickFitTitle}</p>
                    <p className="mt-2 text-sm leading-7 text-slate/80">{copy.quickFitDescription}</p>
                  </div>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-[22px] border border-line bg-white/90 px-4 py-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate/65">{copy.bestForTitle}</p>
                      <p className="mt-2 text-sm leading-7 text-slate/80">{copy.bestForDescription}</p>
                    </div>
                    <div className="rounded-[22px] border border-line bg-white/90 px-4 py-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate/65">{copy.nextTitle}</p>
                      <p className="mt-2 text-sm leading-7 text-slate/80">{copy.nextDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-band-soft py-10 pt-0 md:py-14">
        <div className="container-shell">
          <div className="glass-panel-strong mb-7 rounded-[30px] px-5 py-5 sm:px-7 md:mb-8">
            <div className="grid gap-4 lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate/70">{copy.builtForTrustEyebrow}</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate">{copy.builtForTrustTitle}</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {copy.builtForTrustPoints.map((item) => <div key={item} className="rounded-[22px] border border-line bg-white/85 p-4 text-sm leading-7 text-slate/80">{item}</div>)}
              </div>
            </div>
          </div>
          <SectionHeading eyebrow={copy.servicesEyebrow} title={copy.servicesTitle} description={copy.servicesDescription} />
          <div className="mt-7 grid gap-5 md:mt-8 md:grid-cols-3">
            {copy.services.map((service) => <ServiceCard key={service.title} {...service} />)}
          </div>
        </div>
      </section>

      <InlineCTA eyebrow={copy.estimateCtaEyebrow} title={copy.estimateCtaTitle} description="" primaryLabel={copy.estimateCtaPrimary} secondaryLabel={`${language === "en" ? "Call" : "Llamar"} ${siteConfig.phoneDisplay}`} />
      <EstimateCalculator />

      <section className="section-band py-10 pt-0 md:py-14">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
          <div className="space-y-8">
            <SectionHeading eyebrow={copy.processEyebrow} title={copy.processTitle} description={copy.processDescription} />
            <div className="grid gap-4">
              {copy.processSteps.map((step, index) => (
                <div key={step.title} className="glass-panel-strong flex gap-4 rounded-[24px] p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate text-sm font-semibold text-white">{index + 1}</div>
                  <div>
                    <h3 className="font-semibold text-slate">{step.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate/75">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <LeadForm compact />
        </div>
      </section>

      <EnergyFlowShowcase />
      <InlineCTA eyebrow={copy.planningEyebrow} title={copy.planningTitle} description="" primaryLabel={copy.planningPrimary} primaryAction="contact" secondaryLabel={`${language === "en" ? "Call" : "Llamar"} ${siteConfig.phoneDisplay}`} />
      <ReviewsShowcase />

      <section className="section-band py-10 pt-0 md:py-14">
        <div className="container-shell">
          <div className="glass-panel-strong rounded-[32px] p-8 sm:p-10">
            <SectionHeading eyebrow={copy.financingEyebrow} title={copy.financingTitle} description={copy.financingDescription} />
            <div className="mt-7 grid gap-5 md:mt-8 lg:grid-cols-3">
              {copy.financingOptions.map((option) => (
                <article key={option.title} className="overflow-hidden rounded-[28px] border border-sky/20 bg-white/88 shadow-[0_18px_50px_rgba(26,48,82,0.08)]">
                  <div className="border-b border-sky/20 bg-[linear-gradient(145deg,rgba(26,48,82,0.08),rgba(143,203,231,0.18))] p-4">{renderFinancingVisual(option.visual)}</div>
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate/65">{copy.financingLabel}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-slate">{option.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate/80">{option.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {option.points.map((point) => <span key={point} className="rounded-full border border-line bg-white/90 px-3 py-2 text-xs font-medium text-slate">{point}</span>)}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <InlineCTA eyebrow={copy.financingCtaEyebrow} title={copy.financingCtaTitle} description="" primaryLabel={copy.financingCtaPrimary} primaryAction="contact" secondaryLabel={`${language === "en" ? "Call" : "Llamar"} ${siteConfig.phoneDisplay}`} />
      <ContractComparisonShowcase />
      <InlineCTA
        eyebrow={copy.confidenceEyebrow}
        title={copy.confidenceTitle}
        description={copy.confidenceDescription}
        primaryLabel={copy.confidencePrimary}
        secondaryLabel={`${language === "en" ? "Call" : "Llamar"} ${siteConfig.phoneDisplay}`}
        sectionClassName="section-band-confidence"
        panelClassName="relative overflow-hidden border-slate/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(230,242,249,0.98)_55%,rgba(248,251,254,0.96)_100%)] before:absolute before:inset-y-0 before:right-0 before:w-40 before:bg-[radial-gradient(circle_at_center,rgba(143,203,231,0.22),transparent_68%)] before:content-[''] after:absolute after:inset-x-0 after:top-0 after:h-1.5 after:bg-[linear-gradient(90deg,#8fcbe7_0%,#1a3052_70%,#e2a13a_100%)] after:content-['']"
      />

      <section className="section-band section-space pt-0">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr,1.05fr]">
          <div><SectionHeading eyebrow={copy.faqEyebrow} title={copy.faqTitle} description={copy.faqDescription} /></div>
          <FAQList items={copy.faqs} />
        </div>
      </section>
    </>
  );
}
