"use client";

import Image from "next/image";

import { ContentPage } from "@/components/content-page";
import { useLanguage } from "@/components/language-provider";
import { openEstimatorEvent } from "@/components/zip-estimator-controller";

const copy = {
  en: {
    eyebrow: "Limited-Time Home Energy Offer",
    title: "FREE Mini Split When You Go Solar",
    description: "Upgrade your home’s energy efficiency and stay comfortable year-round with a qualifying home solar installation from Smart Choice Solar.",
    badge: "Limited-time promotion",
    offerTitle: "Solar savings and efficient home comfort in one project.",
    offerBody: "For a limited time, qualifying homeowners can receive a FREE high-efficiency mini-split AC system when they install a home solar setup with Smart Choice Solar. Reduce dependence on utility power while adding efficient heating and cooling where your home needs it most.",
    cta: "See If My Home Qualifies",
    callout: "Qualification, system design, equipment selection, and project details are confirmed during your free assessment.",
    includedTitle: "What this promotion brings together",
    included: [
      ["Custom solar planning", "A home solar recommendation based on your electric usage, roof, utility, and long-term goals."],
      ["High-efficiency mini split", "Efficient heating and cooling for an eligible area of the home as part of a qualifying solar project."],
      ["One clear next step", "Start with a free quote so our team can review the property and explain whether the promotion applies."]
    ],
    stepsTitle: "How to claim the offer",
    steps: [
      ["1", "Request your free quote", "Share your ZIP code and basic home information through our guided estimate form."],
      ["2", "Confirm project eligibility", "We review your solar needs, property details, and the mini-split location with you."],
      ["3", "Review your proposal", "Your proposal explains the solar setup, included promotional equipment, and next steps before you decide."]
    ],
    finalTitle: "Ready to see if your home qualifies?",
    finalBody: "Get a free solar quote and ask our team about the limited-time mini-split promotion.",
    finalCta: "Claim My Free Quote"
  },
  es: {
    eyebrow: "Oferta de Energía para el Hogar por Tiempo Limitado",
    title: "Mini Split GRATIS al Instalar Solar",
    description: "Mejora la eficiencia energética y el confort de tu hogar durante todo el año con una instalación solar residencial elegible de Smart Choice Solar.",
    badge: "Promoción por tiempo limitado",
    offerTitle: "Ahorro solar y climatización eficiente en un solo proyecto.",
    offerBody: "Por tiempo limitado, propietarios elegibles pueden recibir un sistema mini split de alta eficiencia GRATIS al instalar un sistema solar residencial con Smart Choice Solar. Reduce tu dependencia de la red eléctrica y agrega calefacción y aire acondicionado eficientes donde más los necesita tu hogar.",
    cta: "Ver Si Mi Casa Califica",
    callout: "La elegibilidad, el diseño del sistema, la selección del equipo y los detalles del proyecto se confirman durante tu evaluación gratuita.",
    includedTitle: "Lo que combina esta promoción",
    included: [
      ["Plan solar personalizado", "Una recomendación basada en tu consumo eléctrico, techo, compañía de electricidad y metas a largo plazo."],
      ["Mini split de alta eficiencia", "Climatización eficiente para un área elegible del hogar como parte de un proyecto solar que califique."],
      ["Un siguiente paso claro", "Comienza con una cotización gratuita para que revisemos la propiedad y expliquemos si la promoción aplica."]
    ],
    stepsTitle: "Cómo solicitar la oferta",
    steps: [
      ["1", "Solicita tu cotización gratuita", "Comparte tu código postal y la información básica de tu hogar en nuestro formulario guiado."],
      ["2", "Confirma la elegibilidad", "Revisamos contigo las necesidades solares, los detalles de la propiedad y la ubicación del mini split."],
      ["3", "Revisa tu propuesta", "Tu propuesta explicará el sistema solar, el equipo promocional incluido y los siguientes pasos antes de decidir."]
    ],
    finalTitle: "¿Listo para saber si tu hogar califica?",
    finalBody: "Obtén una cotización solar gratuita y pregunta por la promoción del mini split por tiempo limitado.",
    finalCta: "Solicitar Mi Cotización Gratis"
  }
} as const;

export function OffersPageClient() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <ContentPage eyebrow={t.eyebrow} title={t.title} description={t.description}>
      <section className="overflow-hidden rounded-[30px] bg-[radial-gradient(circle_at_top_right,rgba(143,203,231,0.32),transparent_34%),linear-gradient(145deg,#17385f_0%,#315f86_100%)] p-6 text-white shadow-[0_24px_60px_rgba(26,48,82,0.2)] [&_h2]:!text-white [&_p]:!text-white sm:p-10">
        <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <div>
            <p className="!mt-0 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/90">{t.badge}</p>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-5xl">{t.offerTitle}</h2>
            <p className="text-base leading-8 text-white/85 sm:text-lg">{t.offerBody}</p>
            <button type="button" onClick={() => openEstimatorEvent()} className="mt-7 rounded-full bg-white px-6 py-3.5 font-semibold text-slate shadow-[0_14px_30px_rgba(0,0,0,0.18)] transition hover:bg-cloud">{t.cta}</button>
            <p className="mt-6 text-sm leading-6 text-white/70">{t.callout}</p>
          </div>
          <div className="mx-auto w-full max-w-md overflow-hidden rounded-[24px] border border-white/20 bg-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.22)] lg:max-w-none">
            <Image
              src="/brand/mini-split-living-room.jpg"
              alt="Ductless mini-split AC heat pump installed on a modern living room wall"
              width={1100}
              height={916}
              className="h-auto w-full object-cover"
              sizes="(min-width: 1024px) 36vw, (min-width: 640px) 448px, calc(100vw - 48px)"
            />
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-semibold tracking-tight text-slate sm:text-4xl">{t.includedTitle}</h2>
        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {t.included.map(([title, body]) => <article key={title} className="rounded-[24px] border border-line bg-white/90 p-6 shadow-soft"><h3 className="mt-0 text-xl font-semibold text-slate">{title}</h3><p className="text-sm leading-7 text-slate/75">{body}</p></article>)}
        </div>
      </section>

      <section className="mt-12 rounded-[30px] border border-sky/20 bg-cloud/70 p-6 sm:p-8">
        <h2 className="mt-0 text-3xl font-semibold tracking-tight text-slate sm:text-4xl">{t.stepsTitle}</h2>
        <div className="mt-7 grid gap-5 lg:grid-cols-3">
          {t.steps.map(([number, title, body]) => <article key={number} className="rounded-[22px] border border-line bg-white p-5"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate text-sm font-semibold text-white">{number}</span><h3 className="mt-5 text-lg font-semibold text-slate">{title}</h3><p className="text-sm leading-7 text-slate/75">{body}</p></article>)}
        </div>
      </section>

      <section className="mt-12 rounded-[30px] border border-line bg-white p-6 text-center shadow-soft sm:p-10">
        <h2 className="mt-0 text-3xl font-semibold tracking-tight text-slate sm:text-4xl">{t.finalTitle}</h2>
        <p className="mx-auto max-w-2xl text-base leading-8 text-slate/75">{t.finalBody}</p>
        <button type="button" onClick={() => openEstimatorEvent()} className="accent-button mt-6 px-6 py-3.5">{t.finalCta}</button>
      </section>
    </ContentPage>
  );
}
