import { LancasterServiceAreaPageClient } from "@/components/pages/lancaster-service-area-page-client";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Instalación Solar y Baterías en Lancaster, CA",
  description:
    "Solar, baterías, coordinación de techo y revisión de propuestas en Lancaster por un equipo local que atiende propietarios del Antelope Valley.",
  path: "/service-areas/lancaster-ca",
  locale: "es",
  keywords: [
    "instalación solar Lancaster CA",
    "compañía solar Lancaster",
    "paneles solares Lancaster CA",
    "baterías solares Lancaster",
    "compañía solar Antelope Valley"
  ]
});

export default function LancasterServiceAreaPageEs() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/es/service-areas/lancaster-ca/#service`,
    name: "Solar, baterías y coordinación de techo en Lancaster, CA",
    url: `${siteConfig.url}/es/service-areas/lancaster-ca`,
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: ["Lancaster", "Palmdale", "Quartz Hill", "Antelope Valley"].map((name) => ({ "@type": "Place", name })),
    serviceType: ["Solar residencial", "Baterías", "Coordinación de techo", "Revisión de propuestas solares"]
  };

  return (
    <>
      <LancasterServiceAreaPageClient />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
