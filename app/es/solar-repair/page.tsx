import { SolarRepairPageClient } from "@/components/pages/solar-repair-page-client";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Servicio y Reparación de Paneles Solares en California",
  description:
    "Diagnóstico y reparación para sistemas solares apagados, con baja producción, fallas del inversor o problemas de monitoreo.",
  path: "/solar-repair",
  locale: "es",
  keywords: [
    "reparación de paneles solares California",
    "reparación de inversor solar",
    "diagnóstico sistema solar",
    "reparación SolarEdge California",
    "paneles solares no producen",
    "reparación solar Lancaster CA"
  ]
});

const faqs = [
  ["¿Pueden reparar un sistema instalado por otra compañía?", "En muchos casos, sí. Primero revisamos el equipo, el contrato de servicio o propiedad, acceso al sistema, historial de fallas y condiciones del sitio."],
  ["¿Qué debo enviar antes de la cita?", "Fotos del inversor y equipo eléctrico, capturas de la aplicación, historial reciente de producción, mensajes de error y cualquier plano o información de garantía."],
  ["¿Trabajan con sistemas SolarEdge?", "Evaluamos sistemas SolarEdge y otras plataformas residenciales comunes. La disponibilidad depende de la generación del equipo, acceso, partes, garantía y reparación necesaria."],
  ["¿La baja producción siempre significa que los paneles están dañados?", "No. Puede deberse a pérdida de comunicación, inversor apagado, fallas de strings u optimizadores, sombra, eventos de la utilidad, protecciones activadas, equipo defectuoso o expectativas incorrectas."],
  ["¿Son centro autorizado de todas las marcas mencionadas?", "No. Las marcas identifican equipos que podemos evaluar y no implican autorización o afiliación. Confirmamos las opciones de garantía y servicio antes de recomendar trabajo."]
] as const;

export default function SolarRepairSpanishPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteConfig.url}/es/solar-repair/#service`,
        name: "Servicio y reparación de sistemas solares residenciales",
        url: `${siteConfig.url}/es/solar-repair`,
        provider: { "@id": `${siteConfig.url}/#organization` },
        telephone: siteConfig.phoneHref,
        areaServed: [
          { "@type": "State", name: "California" },
          ...["Lancaster", "Los Angeles", "San Diego", "Sacramento"].map((name) => ({ "@type": "City", name })),
          ...["Antelope Valley", "Bay Area", "Inland Empire", "Central Coast", "Central Valley", "Northern California", "Greater Los Angeles"].map((name) => ({ "@type": "AdministrativeArea", name }))
        ],
        serviceType: ["Diagnóstico de sistemas solares", "Diagnóstico de inversores", "Reparación de monitoreo solar", "Diagnóstico de baja producción"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicios de diagnóstico y reparación solar",
          itemListElement: [
            "Visita de diagnóstico del sistema solar",
            "Diagnóstico del inversor solar",
            "Reparación de monitoreo y comunicación",
            "Diagnóstico de baja producción",
            "Diagnóstico de batería y respaldo",
            "Revisión de retiro y reinstalación solar"
          ].map((name) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name }
          }))
        }
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer }
        }))
      }
    ]
  };

  return (
    <>
      <SolarRepairPageClient />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
