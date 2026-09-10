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
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteConfig.url}/es/service-areas/palmdale-ca/#service`,
        name: "Solar, baterías y coordinación de techo en Palmdale, CA",
        url: `${siteConfig.url}/es/service-areas/palmdale-ca`,
        provider: { "@id": `${siteConfig.url}/#organization` },
        areaServed: {
          "@type": "City",
          name: "Palmdale, CA",
          geo: { "@type": "GeoCoordinates", latitude: 34.5794, longitude: -118.1165 },
          containedInPlace: { "@type": "State", name: "California" }
        },
        serviceType: ["Solar residencial", "Baterías", "Coordinación de techo", "Revisión de propuestas solares"]
      },
      {
        "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        telephone: siteConfig.phoneHref,
        sameAs: siteConfig.businessProfiles,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.streetAddress,
          addressLocality: siteConfig.address.addressLocality,
          addressRegion: siteConfig.address.addressRegion,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.addressCountry
        }
      }
    ]
  };

  return (
    <>
      <PalmdaleServiceAreaPageClient />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
