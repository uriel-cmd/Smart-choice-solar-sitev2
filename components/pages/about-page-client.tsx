"use client";

import { useLanguage } from "@/components/language-provider";
import { ContentPage } from "@/components/content-page";

const copy = {
  en: {
    eyebrow: "About Smart Choice Solar",
    title: "A homeowner-focused energy company built around clarity and execution.",
    description: "We believe energy upgrades should feel informed, transparent, and well-managed from the first call to final walkthrough.",
    missionTitle: "Our mission",
    missionBody: "Smart Choice Solar exists to help homeowners make confident decisions about solar, storage, and roofing without the pressure, ambiguity, or fragmented project experience common in the market.",
    valuesTitle: "What we value",
    values: [
      "Clear communication instead of rushed sales tactics",
      "Project recommendations grounded in real home conditions",
      "High standards for design quality, scheduling, and follow-through",
      "Local service built on trust and repeat referrals"
    ],
    serveTitle: "Who we serve",
    serveBody: "We work with homeowners across California who want lower energy costs, greater resilience, and a locally owned and operated team that can responsibly guide both the technical and practical sides of the decision."
  },
  es: {
    eyebrow: "Sobre Smart Choice Solar",
    title: "Una empresa de energía enfocada en el propietario, construida sobre claridad y ejecución.",
    description: "Creemos que las mejoras energéticas deben sentirse informadas, transparentes y bien gestionadas desde la primera llamada hasta el recorrido final.",
    missionTitle: "Nuestra misión",
    missionBody: "Smart Choice Solar existe para ayudar a los propietarios a tomar decisiones seguras sobre solar, almacenamiento y techado sin la presión, ambigüedad o experiencia fragmentada común en el mercado.",
    valuesTitle: "Lo que valoramos",
    values: [
      "Comunicación clara en lugar de tácticas de venta apresuradas",
      "Recomendaciones basadas en las condiciones reales del hogar",
      "Altos estándares de diseño, agenda y cumplimiento",
      "Servicio local construido sobre confianza y referencias"
    ],
    serveTitle: "A quién servimos",
    serveBody: "Trabajamos con propietarios en California que quieren menores costos de energía, mayor resiliencia y un equipo operado localmente que pueda guiar tanto la parte técnica como la práctica de la decisión."
  }
} as const;

export function AboutPageClient() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <ContentPage eyebrow={t.eyebrow} title={t.title} description={t.description}>
      <h2>{t.missionTitle}</h2>
      <p>{t.missionBody}</p>
      <h2>{t.valuesTitle}</h2>
      <ul>{t.values.map((item) => <li key={item}>{item}</li>)}</ul>
      <h2>{t.serveTitle}</h2>
      <p>{t.serveBody}</p>
    </ContentPage>
  );
}
