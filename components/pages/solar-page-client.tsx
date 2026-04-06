"use client";

import Image from "next/image";

import { useLanguage } from "@/components/language-provider";
import { ContentPage } from "@/components/content-page";

const copy = {
  en: {
    eyebrow: "Solar",
    title: "Solar systems designed around your home, not dropped onto it.",
    description: "Better solar starts with better planning. We look at your roof, bill pattern, long-term goals, and upgrade timing so the final design feels intentional, not templated.",
    highlights: [
      ["Designed around the home", "Roof layout, shade, usage, and timing all shape the recommendation."],
      ["Built for long-term value", "We think beyond panel count and focus on performance, clarity, and upgrade sequencing."],
      ["Guided like a premium project", "You should know what is happening, why it matters, and what comes next at every step."]
    ],
    diffEyebrow: "Why Homeowners Feel The Difference Early",
    diffTitle: "Better solar starts with sharper questions.",
    diffP1: "Smart Choice Solar starts where better projects always start: with the real questions first. How much energy does the home actually use? Is the roof ready for the timing of the project? Should the system be built only for today’s bill, or should it account for future battery storage, EV charging, or rising usage over time?",
    diffP2: "That is where serious solar planning separates itself from generic quoting. Instead of forcing a prefab layout onto the roof, we shape the system around the property itself so the final recommendation feels tailored, credible, and easier to trust from the beginning.",
    answerEyebrow: "The first conversation should answer",
    answers: [
      "How much of the current utility bill can realistically be offset?",
      "Whether the roof timing supports the project now or suggests coordination first.",
      "If solar alone makes sense, or if the home should be planned with storage in mind."
    ],
    includeEyebrow: "What Your Solar Project Should Include",
    includeTitle: "A premium solar project should feel buttoned-up from the first draft to final activation.",
    includes: [
      ["System design that is actually built around the home", "Custom sizing based on real usage patterns, roof geometry, and the production goals that matter to the homeowner."],
      ["Equipment guidance without the fog", "Recommendations that explain the tradeoffs clearly instead of hiding them behind panel specs and jargon."],
      ["Project coordination that feels organized", "Permit, utility, and scheduling support that keeps the job moving cleanly and avoids the messy handoff feeling."],
      ["A finish that does not leave you guessing", "Post-install guidance so you understand performance expectations, monitoring, and what the next chapter should look like."]
    ],
    moreEyebrow: "More Than A Quote",
    moreTitle: "The best proposals do not just price solar. They make the path forward feel clear.",
    moreP1: "A serious solar company should be able to talk through utility offset, roof timing, battery logic, resale considerations, and project sequence with the same confidence it talks about panels and inverters. When that level of thinking is missing, the proposal usually feels thin. When it is present, the project feels grounded.",
    moreP2: "That is the standard we build around. The goal is not simply to sell a solar system. The goal is to help you make a sharper home-energy decision with more clarity, less friction, and a stronger result once everything is installed.",
    bestEyebrow: "Best Fit",
    bestTitle: "Built for homeowners who want more than the cheapest pitch.",
    bestItems: [
      ["Lower bills with fewer question marks", "Real savings matter more when you also understand exactly what is being installed and why."],
      ["More predictability as energy costs rise", "A smarter plan helps the home adapt as utility rates change and household usage evolves over time."],
      ["A cleaner, more guided experience", "From first conversation to final activation, the process should feel organized, thoughtful, and professionally handled."]
    ]
  },
  es: {
    eyebrow: "Solar",
    title: "Sistemas solares diseñados alrededor de tu hogar, no simplemente colocados sobre él.",
    description: "Un mejor proyecto solar comienza con una mejor planeación. Revisamos tu techo, tu patrón de consumo, metas a largo plazo y momento del proyecto para que el diseño final se sienta intencional, no genérico.",
    highlights: [
      ["Diseñado alrededor del hogar", "La distribución del techo, la sombra, el consumo y el momento del proyecto moldean la recomendación."],
      ["Pensado para valor a largo plazo", "Miramos más allá del número de paneles y nos enfocamos en desempeño, claridad y secuencia de mejoras."],
      ["Guiado como un proyecto premium", "Debes saber qué está pasando, por qué importa y qué sigue en cada etapa."]
    ],
    diffEyebrow: "Por Qué Los Propietarios Sienten La Diferencia Desde El Inicio",
    diffTitle: "Un mejor proyecto solar comienza con preguntas más inteligentes.",
    diffP1: "Smart Choice Solar empieza donde empiezan los mejores proyectos: con las preguntas reales primero. ¿Cuánta energía usa realmente la casa? ¿El techo está listo para el momento del proyecto? ¿Debe el sistema pensarse solo para la factura actual o también para batería, carga de EV o mayor consumo futuro?",
    diffP2: "Ahí es donde la planificación seria se separa de una cotización genérica. En lugar de forzar un diseño prefabricado sobre el techo, moldeamos el sistema alrededor de la propiedad para que la recomendación final se sienta personalizada, creíble y más fácil de confiar.",
    answerEyebrow: "La primera conversación debe responder",
    answers: [
      "¿Qué parte de la factura actual puede compensarse de forma realista?",
      "Si el momento del techo permite avanzar ahora o sugiere coordinar primero.",
      "Si conviene solar por sí solo o planificar el hogar con batería en mente."
    ],
    includeEyebrow: "Lo Que Debe Incluir Tu Proyecto Solar",
    includeTitle: "Un proyecto solar premium debe sentirse ordenado desde el primer borrador hasta la activación final.",
    includes: [
      ["Diseño realmente basado en el hogar", "Dimensionamiento personalizado basado en consumo real, geometría del techo y metas de producción importantes para el propietario."],
      ["Guía de equipos sin confusión", "Recomendaciones que explican claramente los pros y contras en lugar de ocultarlos detrás de especificaciones y jerga."],
      ["Coordinación del proyecto que se siente organizada", "Apoyo con permisos, utilidad y agenda para que el trabajo avance limpio y sin sensación de caos."],
      ["Un cierre que no te deje adivinando", "Guía posterior a la instalación para que entiendas expectativas de desempeño, monitoreo y lo que sigue."]
    ],
    moreEyebrow: "Más Que Una Cotización",
    moreTitle: "Las mejores propuestas no solo ponen precio al sistema. Hacen que el camino se vea claro.",
    moreP1: "Una compañía seria debe poder hablar de compensación de factura, momento del techo, lógica de batería, consideraciones de reventa y secuencia del proyecto con la misma confianza con la que habla de paneles e inversores. Cuando eso falta, la propuesta se siente débil. Cuando está presente, el proyecto se siente sólido.",
    moreP2: "Ese es el estándar sobre el que trabajamos. La meta no es solo vender un sistema solar. La meta es ayudarte a tomar una decisión energética más inteligente con mayor claridad, menos fricción y un mejor resultado una vez instalado todo.",
    bestEyebrow: "Ideal Para",
    bestTitle: "Diseñado para propietarios que buscan algo más que la opción más barata.",
    bestItems: [
      ["Facturas más bajas con menos dudas", "El ahorro real vale más cuando también entiendes exactamente qué se instalará y por qué."],
      ["Más previsibilidad mientras suben los costos de energía", "Un plan más inteligente ayuda al hogar a adaptarse conforme cambian las tarifas y el consumo."],
      ["Una experiencia más limpia y guiada", "Desde la primera conversación hasta la activación final, el proceso debe sentirse organizado y profesional."]
    ]
  }
} as const;

export function SolarPageClient() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <ContentPage eyebrow={t.eyebrow} title={t.title} description={t.description}>
      <div className="mb-10 overflow-hidden rounded-[28px] border border-sky/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(238,247,252,0.92))] p-3 shadow-[0_24px_60px_rgba(26,48,82,0.1)] sm:mb-12 sm:p-4">
        <Image src="/brand/solar-modern-home-external.svg" alt="Modern home with rooftop solar panels" width={1600} height={980} className="h-auto w-full rounded-[22px] object-cover" priority />
      </div>
      <div className="mb-10 grid gap-4 sm:mb-12 sm:grid-cols-3">
        {t.highlights.map(([kicker, body]) => (
          <div key={kicker} className="rounded-[24px] border border-line bg-white/88 p-5 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate/65">{kicker}</p>
            <p className="mt-3 text-base font-semibold text-slate">{body}</p>
          </div>
        ))}
      </div>
      <div className="mb-12 rounded-[30px] border border-sky/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(240,248,252,0.94))] p-6 shadow-[0_20px_55px_rgba(26,48,82,0.08)] sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate/65">{t.diffEyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate sm:text-4xl">{t.diffTitle}</h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-[1.15fr,0.85fr]">
          <div className="space-y-4 text-base leading-8 text-slate/80"><p>{t.diffP1}</p><p>{t.diffP2}</p></div>
          <div className="rounded-[26px] border border-line bg-white/88 p-5 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate/65">{t.answerEyebrow}</p>
            <div className="mt-4 space-y-3">{t.answers.map((item) => <div key={item} className="rounded-[18px] border border-line bg-cloud/65 px-4 py-3 text-sm leading-7 text-slate/82">{item}</div>)}</div>
          </div>
        </div>
      </div>
      <div className="mb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate/65">{t.includeEyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate sm:text-4xl">{t.includeTitle}</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {t.includes.map(([title, body]) => (
            <div key={title} className="rounded-[26px] border border-line bg-white/88 p-5 shadow-soft">
              <p className="text-base font-semibold text-slate">{title}</p>
              <p className="mt-3 text-sm leading-7 text-slate/78">{body}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-12 overflow-hidden rounded-[30px] border border-sky/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(240,248,252,0.94))] shadow-[0_24px_60px_rgba(26,48,82,0.1)]">
        <div className="h-1.5 bg-[linear-gradient(90deg,#e2a13a_0%,#8fcbe7_38%,#1a3052_100%)]" />
        <div className="p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate/65">{t.moreEyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate sm:text-4xl">{t.moreTitle}</h2>
          <div className="mt-6 space-y-4 text-base leading-8 text-slate/80"><p>{t.moreP1}</p><p>{t.moreP2}</p></div>
        </div>
        <div className="h-1.5 bg-[linear-gradient(90deg,#8fcbe7_0%,#1a3052_64%,#e2a13a_100%)]" />
      </div>
      <div className="rounded-[30px] border border-line bg-white/90 p-6 shadow-soft sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate/65">{t.bestEyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate sm:text-4xl">{t.bestTitle}</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {t.bestItems.map(([title, body]) => (
            <div key={title} className="rounded-[24px] border border-line bg-cloud/55 p-5">
              <p className="text-base font-semibold text-slate">{title}</p>
              <p className="mt-3 text-sm leading-7 text-slate/78">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </ContentPage>
  );
}
