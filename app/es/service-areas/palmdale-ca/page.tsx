import { PalmdaleServiceAreaPageClient } from "@/components/pages/palmdale-service-area-page-client";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Instalación Solar, Baterías y Permisos en Palmdale, CA",
  description:
    "Planificación solar y de baterías en Palmdale según el consumo de SCE, las condiciones del High Desert, el techo y el proceso de permisos de la ciudad.",
  path: "/service-areas/palmdale-ca",
  locale: "es",
  keywords: [
    "instalación solar Palmdale CA",
    "compañía solar Palmdale",
    "paneles solares Palmdale CA",
    "baterías solares Palmdale",
    "permiso solar Palmdale"
  ]
});

export default function PalmdaleServiceAreaPageEs() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/es/service-areas/palmdale-ca/#service`,
    name: "Solar, baterías y coordinación de techo en Palmdale, CA",
    url: `${siteConfig.url}/es/service-areas/palmdale-ca`,
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: ["Palmdale", "Rancho Vista", "Anaverde", "Joshua Hills", "Antelope Valley"].map((name) => ({ "@type": "Place", name })),
    serviceType: ["Solar residencial", "Baterías", "Coordinación de techo", "Revisión de propuestas solares"]
  };

  return (
    <>
      <PalmdaleServiceAreaPageClient />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
