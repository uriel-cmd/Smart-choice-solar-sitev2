"use client";

import { useLanguage } from "@/components/language-provider";
import { ContentPage } from "@/components/content-page";

const copy = {
  en: {
    eyebrow: "Privacy Policy",
    title: "Privacy Policy",
    description: "How Smart Choice Solar collects, uses, and safeguards information submitted through this website.",
    paragraphs: [
      "Smart Choice Solar may collect personal information you voluntarily submit through website forms, including your name, phone number, email address, ZIP code, and project details.",
      "We use this information to respond to quote requests, communicate about services, improve our website, and support customer service operations.",
      "We do not sell your personal information. Information may be shared with trusted service providers only when necessary to operate our business or fulfill your request.",
      "If you have questions about this policy or would like to request changes to your information, please contact Smart Choice Solar directly."
    ]
  },
  es: {
    eyebrow: "Política de Privacidad",
    title: "Política de Privacidad",
    description: "Cómo Smart Choice Solar recopila, usa y protege la información enviada a través de este sitio web.",
    paragraphs: [
      "Smart Choice Solar puede recopilar información personal que envíes voluntariamente a través de formularios del sitio, incluyendo nombre, teléfono, correo, código postal y detalles del proyecto.",
      "Usamos esta información para responder a solicitudes de cotización, comunicarnos sobre servicios, mejorar el sitio web y apoyar operaciones de servicio al cliente.",
      "No vendemos tu información personal. La información puede compartirse con proveedores de confianza solo cuando sea necesario para operar el negocio o cumplir tu solicitud.",
      "Si tienes preguntas sobre esta política o deseas solicitar cambios en tu información, comunícate directamente con Smart Choice Solar."
    ]
  }
} as const;

export function PrivacyPolicyPageClient() {
  const { language } = useLanguage();
  const t = copy[language];
  return <ContentPage eyebrow={t.eyebrow} title={t.title} description={t.description}>{t.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</ContentPage>;
}
