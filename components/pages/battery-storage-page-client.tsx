"use client";

import Image from "next/image";

import { useLanguage } from "@/components/language-provider";
import { ContentPage } from "@/components/content-page";

const copy = {
  en: {
    eyebrow: "Battery Storage",
    title: "Battery storage that adds resilience, not confusion.",
    description: "The right battery plan should feel practical on day one and valuable for years. We help you understand backup, rate protection, and future flexibility in plain homeowner terms.",
    highlights: [
      ["Backup clarity", "Know what stays on, what does not, and what backup really means for your home."],
      ["Rate-plan strategy", "Use stored energy more intelligently when time-of-use pricing starts to bite."],
      ["Future-ready design", "Build around today’s priorities without cornering the home out of tomorrow’s options."]
    ],
    whyEyebrow: "Why Storage Matters Now",
    whyTitle: "Resilience has gone from “nice to have” to a serious planning category.",
    whyP1: "Battery storage is no longer just a premium add-on for early adopters. For many California homeowners, it has become one of the clearest ways to improve outage resilience, use more of their own production, and reduce exposure to expensive peak-rate windows.",
    whyP2: "The real question is not whether batteries sound good in theory. The real question is whether they make sense for your home, your rate plan, and the way you actually want power to behave when the grid becomes less reliable.",
    firstQuestions: "Usually the first questions are",
    questions: [
      "Which appliances or circuits matter most during an outage?",
      "Does the utility rate plan make stored energy more valuable?",
      "Should the home add storage now or design solar with storage in mind for later?"
    ],
    planningEyebrow: "What Good Battery Planning Covers",
    planningTitle: "A strong battery recommendation should connect backup, savings, and household priorities.",
    items: [
      ["Outage protection that matches real life", "Essential-load strategy should be grounded in what the household actually needs available when the grid goes down."],
      ["Smarter use of stored solar production", "Storage works best when it is planned as part of the broader energy strategy, not bolted on as an afterthought."],
      ["Peak-rate management that actually pencils out", "Time-of-use strategy matters when the homeowner wants more control over when expensive power is avoided."],
      ["Expansion logic for the next phase of the home", "EV charging, future appliances, and added storage capacity should not feel disconnected from today’s design."]
    ],
    approachEyebrow: "Our Approach",
    approachTitle: "Premium guidance means making storage feel understandable before it ever feels technical.",
    approachP1: "We explain battery storage in plain homeowner language: what will stay on, what will not, how the system interacts with solar production, and whether your priorities point toward storage now or later.",
    approachP2: "The result should not feel like a battery sales pitch. It should feel like a clear recommendation built around resilience, usability, and the way your home actually consumes power."
  },
  es: {
    eyebrow: "Batería",
    title: "Almacenamiento con batería que añade resiliencia, no confusión.",
    description: "El plan correcto de batería debe sentirse práctico desde el primer día y valioso por años. Te ayudamos a entender respaldo, protección tarifaria y flexibilidad futura en términos claros.",
    highlights: [
      ["Claridad de respaldo", "Conoce qué permanece encendido, qué no, y qué significa realmente el respaldo para tu hogar."],
      ["Estrategia tarifaria", "Usa la energía almacenada de forma más inteligente cuando la tarifa por horario empieza a pesar."],
      ["Diseño listo para el futuro", "Construye alrededor de las prioridades de hoy sin cerrar las opciones del mañana."]
    ],
    whyEyebrow: "Por Qué El Almacenamiento Importa Ahora",
    whyTitle: "La resiliencia pasó de ser un lujo a una categoría seria de planificación.",
    whyP1: "El almacenamiento con batería ya no es solo un extra premium para adoptadores tempranos. Para muchos propietarios en California, se ha convertido en una de las maneras más claras de mejorar la resiliencia ante apagones, usar más de su propia producción y reducir exposición a tarifas pico.",
    whyP2: "La verdadera pregunta no es si las baterías suenan bien en teoría. La verdadera pregunta es si tienen sentido para tu hogar, tu plan tarifario y la manera en que quieres que la energía funcione cuando la red sea menos confiable.",
    firstQuestions: "Las primeras preguntas suelen ser",
    questions: [
      "¿Qué aparatos o circuitos importan más durante un apagón?",
      "¿El plan tarifario hace más valiosa la energía almacenada?",
      "¿Conviene agregar almacenamiento ahora o diseñar el sistema con batería para más adelante?"
    ],
    planningEyebrow: "Lo Que Cubre Una Buena Planeación De Batería",
    planningTitle: "Una recomendación sólida debe conectar respaldo, ahorro y prioridades del hogar.",
    items: [
      ["Protección ante apagones que coincide con la vida real", "La estrategia de cargas esenciales debe basarse en lo que el hogar realmente necesita cuando la red falla."],
      ["Mejor uso de la producción solar almacenada", "El almacenamiento funciona mejor cuando forma parte de la estrategia energética general y no como ocurrencia tardía."],
      ["Manejo de tarifas pico que realmente conviene", "La estrategia por horario importa cuando el propietario quiere más control sobre cuándo evita la energía cara."],
      ["Lógica de expansión para la siguiente etapa del hogar", "Carga de EV, nuevos aparatos y capacidad adicional no deben sentirse desconectados del diseño actual."]
    ],
    approachEyebrow: "Nuestro Enfoque",
    approachTitle: "La guía premium hace que el almacenamiento se entienda antes de volverse técnico.",
    approachP1: "Explicamos la batería en lenguaje claro para el propietario: qué seguirá encendido, qué no, cómo interactúa con la producción solar y si tus prioridades apuntan a almacenamiento ahora o después.",
    approachP2: "El resultado no debe sentirse como un discurso de ventas. Debe sentirse como una recomendación clara construida alrededor de resiliencia, usabilidad y la forma real en que tu hogar consume energía."
  }
} as const;

export function BatteryStoragePageClient() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <ContentPage eyebrow={t.eyebrow} title={t.title} description={t.description}>
      <div className="mb-10 overflow-hidden rounded-[28px] border border-sky/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(238,247,252,0.92))] p-3 shadow-[0_24px_60px_rgba(26,48,82,0.1)] sm:mb-12 sm:p-4">
        <div className="overflow-hidden rounded-[22px]">
          <Image src="/brand/battery-hero-v3.svg" alt="Battery storage illustration" width={1600} height={980} className="h-auto w-full rounded-[22px] object-cover object-[34%_center]" priority />
        </div>
      </div>
      <div className="mb-12 grid gap-4 sm:grid-cols-3">
        {t.highlights.map(([title, body]) => (
          <div key={title} className="rounded-[24px] border border-line bg-white/88 p-5 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate/65">{title}</p>
            <p className="mt-3 text-base font-semibold text-slate">{body}</p>
          </div>
        ))}
      </div>
      <div className="mb-12 overflow-hidden rounded-[30px] border border-sky/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(240,248,252,0.94))] shadow-[0_24px_60px_rgba(26,48,82,0.1)]">
        <div className="h-1.5 bg-[linear-gradient(90deg,#e2a13a_0%,#8fcbe7_38%,#1a3052_100%)]" />
        <div className="p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate/65">{t.whyEyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate sm:text-4xl">{t.whyTitle}</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-4 text-base leading-8 text-slate/80"><p>{t.whyP1}</p><p>{t.whyP2}</p></div>
            <div className="rounded-[26px] border border-line bg-white/88 p-5 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate/65">{t.firstQuestions}</p>
              <div className="mt-4 space-y-3">{t.questions.map((item) => <div key={item} className="rounded-[18px] border border-line bg-cloud/65 px-4 py-3 text-sm leading-7 text-slate/82">{item}</div>)}</div>
            </div>
          </div>
        </div>
        <div className="h-1.5 bg-[linear-gradient(90deg,#8fcbe7_0%,#1a3052_64%,#e2a13a_100%)]" />
      </div>
      <div className="mb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate/65">{t.planningEyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate sm:text-4xl">{t.planningTitle}</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {t.items.map(([title, body]) => (
            <div key={title} className="rounded-[26px] border border-line bg-white/88 p-5 shadow-soft">
              <p className="text-base font-semibold text-slate">{title}</p>
              <p className="mt-3 text-sm leading-7 text-slate/78">{body}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-[30px] border border-line bg-white/90 p-6 shadow-soft sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate/65">{t.approachEyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate sm:text-4xl">{t.approachTitle}</h2>
        <div className="mt-6 space-y-4 text-base leading-8 text-slate/80"><p>{t.approachP1}</p><p>{t.approachP2}</p></div>
      </div>
    </ContentPage>
  );
}
