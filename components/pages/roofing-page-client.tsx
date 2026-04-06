"use client";

import Image from "next/image";

import { useLanguage } from "@/components/language-provider";
import { ContentPage } from "@/components/content-page";

const copy = {
  en: {
    eyebrow: "Roofing",
    title: "Roofing support that keeps your solar investment on solid ground.",
    description: "Roof condition changes everything about solar timing. We help homeowners align roofing, project sequence, and long-term value before the install ever gets messy.",
    highlights: [
      ["Roof timing", "Know whether the roof supports solar now or suggests a smarter sequence first."],
      ["Project coordination", "Avoid the multi-contractor handoff that makes simple projects feel unnecessarily risky."],
      ["Long-term protection", "Protect the solar investment by making sure the surface beneath it is ready for the long run."]
    ],
    whyEyebrow: "Why Roof-First Planning Matters",
    whyTitle: "Solar works best when the roof beneath it is part of the strategy, not an afterthought.",
    whyP1: "A solar system is only as durable as the surface beneath it. If the roof is nearing the end of its useful life, handling roofing first often prevents future panel removal costs, schedule disruptions, and the frustration of paying twice for work that should have been coordinated once.",
    whyP2: "That is why roof timing is not a side conversation. It is one of the first decisions that should be evaluated when the homeowner wants a project that feels strategic instead of rushed.",
    concernsEyebrow: "Usually the first concerns are",
    concerns: [
      "The roof is aging and they want to avoid installing solar twice.",
      "They want one coordinated timeline instead of managing separate vendors.",
      "They need a clear answer on whether roofing is necessary before solar begins."
    ],
    protectEyebrow: "What Good Coordination Protects",
    protectTitle: "Better sequencing protects budget, timeline, and the finished result.",
    protects: [
      ["Fewer avoidable panel removal costs later", "Reworking a roof after solar is installed can create unnecessary cost and friction that could have been avoided early."],
      ["Cleaner scheduling and fewer project delays", "One integrated plan reduces the stop-start feeling that often comes from disconnected trades."],
      ["A stronger long-term investment decision", "Roofing and solar should work together as one upgrade path, not compete with each other for timing and budget."],
      ["A homeowner experience that feels more organized", "Better coordination makes the project feel thought through from the beginning instead of improvised along the way."]
    ],
    helpEyebrow: "How We Help",
    helpTitle: "We bring roofing and solar into one conversation before the project gets complicated.",
    helpP1: "Our role is to help you make a confident decision about sequencing, scope, and long-term home protection without bouncing between disconnected recommendations.",
    helpP2: "When roof readiness is handled early, the solar decision becomes cleaner, the installation becomes more confident, and the finished project feels like one integrated improvement instead of two competing jobs."
  },
  es: {
    eyebrow: "Techo",
    title: "Apoyo de techado que mantiene tu inversión solar sobre una base firme.",
    description: "El estado del techo cambia por completo el momento del proyecto solar. Ayudamos a alinear techado, secuencia del proyecto y valor a largo plazo antes de que la instalación se complique.",
    highlights: [
      ["Momento del techo", "Conoce si el techo permite avanzar con solar ahora o si conviene una secuencia más inteligente primero."],
      ["Coordinación del proyecto", "Evita el traspaso entre varios contratistas que hace que un proyecto simple se sienta riesgoso."],
      ["Protección a largo plazo", "Protege la inversión solar asegurando que la superficie debajo esté lista para durar."]
    ],
    whyEyebrow: "Por Qué Importa Planificar El Techo Primero",
    whyTitle: "La energía solar funciona mejor cuando el techo debajo forma parte de la estrategia y no se deja para después.",
    whyP1: "Un sistema solar solo es tan duradero como la superficie debajo. Si el techo se acerca al final de su vida útil, atender el techado primero evita costos futuros de desmontaje, interrupciones y la frustración de pagar dos veces por algo que pudo coordinarse una sola vez.",
    whyP2: "Por eso el momento del techo no es una conversación secundaria. Es una de las primeras decisiones que deben evaluarse cuando el propietario quiere un proyecto estratégico y no apresurado.",
    concernsEyebrow: "Las primeras preocupaciones suelen ser",
    concerns: [
      "El techo está envejeciendo y quieren evitar instalar solar dos veces.",
      "Quieren una sola línea de tiempo coordinada en lugar de manejar varios proveedores.",
      "Necesitan una respuesta clara sobre si es necesario trabajar el techo antes de comenzar con solar."
    ],
    protectEyebrow: "Lo Que Protege Una Buena Coordinación",
    protectTitle: "Una mejor secuencia protege presupuesto, tiempo y resultado final.",
    protects: [
      ["Menos costos evitables por desmontaje de paneles", "Rehacer un techo después de instalar solar puede generar costos y fricción innecesarios que pudieron evitarse temprano."],
      ["Agenda más limpia y menos retrasos", "Un plan integrado reduce la sensación de arranque y parada común entre oficios desconectados."],
      ["Una inversión más fuerte a largo plazo", "Techo y solar deben trabajar como una sola ruta de mejora y no competir por tiempo y presupuesto."],
      ["Una experiencia más organizada para el propietario", "La mejor coordinación hace que el proyecto se sienta pensado desde el inicio y no improvisado."]
    ],
    helpEyebrow: "Cómo Ayudamos",
    helpTitle: "Unimos techado y solar en una sola conversación antes de que el proyecto se complique.",
    helpP1: "Nuestro papel es ayudarte a tomar una decisión confiada sobre secuencia, alcance y protección a largo plazo sin brincar entre recomendaciones desconectadas.",
    helpP2: "Cuando la preparación del techo se atiende temprano, la decisión solar se vuelve más limpia, la instalación más segura y el resultado final se siente como una sola mejora integral."
  }
} as const;

export function RoofingPageClient() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <ContentPage eyebrow={t.eyebrow} title={t.title} description={t.description}>
      <div className="mb-10 overflow-hidden rounded-[28px] border border-sky/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(238,247,252,0.92))] p-4 shadow-[0_24px_60px_rgba(26,48,82,0.1)] sm:mb-12 sm:p-5">
        <Image src="/brand/roofing-hero.svg" alt="Roofing and solar planning illustration" width={1200} height={720} className="h-auto w-full rounded-[22px] object-cover" priority />
      </div>
      <div className="mb-12 grid gap-4 sm:grid-cols-3">
        {t.highlights.map(([title, body]) => (
          <div key={title} className="rounded-[24px] border border-line bg-white/88 p-5 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate/65">{title}</p>
            <p className="mt-3 text-base font-semibold text-slate">{body}</p>
          </div>
        ))}
      </div>
      <div className="mb-12 rounded-[30px] border border-sky/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(240,248,252,0.94))] p-6 shadow-[0_20px_55px_rgba(26,48,82,0.08)] sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate/65">{t.whyEyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate sm:text-4xl">{t.whyTitle}</h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-[1.08fr,0.92fr]">
          <div className="space-y-4 text-base leading-8 text-slate/80"><p>{t.whyP1}</p><p>{t.whyP2}</p></div>
          <div className="rounded-[26px] border border-line bg-white/88 p-5 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate/65">{t.concernsEyebrow}</p>
            <div className="mt-4 space-y-3">{t.concerns.map((item) => <div key={item} className="rounded-[18px] border border-line bg-cloud/65 px-4 py-3 text-sm leading-7 text-slate/82">{item}</div>)}</div>
          </div>
        </div>
      </div>
      <div className="mb-12 overflow-hidden rounded-[30px] border border-sky/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(240,248,252,0.94))] shadow-[0_24px_60px_rgba(26,48,82,0.1)]">
        <div className="h-1.5 bg-[linear-gradient(90deg,#e2a13a_0%,#8fcbe7_38%,#1a3052_100%)]" />
        <div className="p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate/65">{t.protectEyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate sm:text-4xl">{t.protectTitle}</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {t.protects.map(([title, body]) => (
              <div key={title} className="rounded-[26px] border border-line bg-white/88 p-5 shadow-soft">
                <p className="text-base font-semibold text-slate">{title}</p>
                <p className="mt-3 text-sm leading-7 text-slate/78">{body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="h-1.5 bg-[linear-gradient(90deg,#8fcbe7_0%,#1a3052_64%,#e2a13a_100%)]" />
      </div>
      <div className="rounded-[30px] border border-line bg-white/90 p-6 shadow-soft sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate/65">{t.helpEyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate sm:text-4xl">{t.helpTitle}</h2>
        <div className="mt-6 space-y-4 text-base leading-8 text-slate/80"><p>{t.helpP1}</p><p>{t.helpP2}</p></div>
      </div>
    </ContentPage>
  );
}
