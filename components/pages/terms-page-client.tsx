"use client";

import { useLanguage } from "@/components/language-provider";
import { ContentPage } from "@/components/content-page";

const copy = {
  en: {
    eyebrow: "Terms",
    title: "Terms and Conditions",
    description: "Basic terms governing the use of the Smart Choice Solar website and related inquiries.",
    paragraphs: [
      "By using this website, you agree to use it only for lawful purposes and acknowledge that the information provided is for general informational purposes only.",
      "Smart Choice Solar makes reasonable efforts to keep website content accurate, but does not guarantee that all information is complete, current, or free from error.",
      "Any estimates, timelines, or savings discussions shared through the website are illustrative and may vary based on your property, usage, utility plan, and project scope.",
      "Continued use of the website constitutes acceptance of these terms. If you do not agree, please discontinue use of the site."
    ]
  },
  es: {
    eyebrow: "Términos",
    title: "Términos y Condiciones",
    description: "Términos básicos que rigen el uso del sitio web de Smart Choice Solar y las consultas relacionadas.",
    paragraphs: [
      "Al usar este sitio web, aceptas utilizarlo solo con fines legales y reconoces que la información proporcionada es solo con fines informativos generales.",
      "Smart Choice Solar hace esfuerzos razonables para mantener el contenido del sitio preciso, pero no garantiza que toda la información esté completa, actual o libre de errores.",
      "Cualquier estimado, cronograma o conversación sobre ahorro compartida a través del sitio es ilustrativa y puede variar según tu propiedad, consumo, plan tarifario y alcance del proyecto.",
      "El uso continuo del sitio constituye aceptación de estos términos. Si no estás de acuerdo, por favor deja de usar el sitio."
    ]
  }
} as const;

export function TermsPageClient() {
  const { language } = useLanguage();
  const t = copy[language];
  return <ContentPage eyebrow={t.eyebrow} title={t.title} description={t.description}>{t.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</ContentPage>;
}
