import { PalmdaleServiceAreaPageClient } from "@/components/pages/palmdale-service-area-page-client";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Solar Installation, Battery Storage & Permitting in Palmdale, CA",
  description:
    "Custom solar and battery planning shaped specifically for Palmdale Homes.",
  path: "/service-areas/palmdale-ca",
  keywords: [
    "solar installation Palmdale CA",
    "Palmdale solar company",
    "solar panels Palmdale CA",
    "battery installation Palmdale",
    "Palmdale solar permit",
    "Antelope Valley solar company"
  ]
});

const faqs = [
  ["Does Smart Choice Solar serve Palmdale?", "Yes. Our nearby Lancaster-based team serves Palmdale homeowners, including Rancho Vista, Anaverde, Joshua Hills, and surrounding Antelope Valley communities, subject to address and project review."],
  ["Who provides electricity in Palmdale?", "Palmdale homes are generally served by Southern California Edison. We review the home’s SCE usage, rate plan, and evening demand before sizing solar or storage."],
  ["How are residential solar permits handled in Palmdale?", "The City offers SolarAPP+ for qualifying rooftop-only projects on existing single-family and duplex homes. Projects with battery storage and projects on new residences follow the City’s Accela permitting path."],
  ["How much does NEM 3.0 affect solar savings in Palmdale?", "For new SCE solar customers, the Solar Billing Plan—also called the Net Billing Tariff or NEM 3.0—usually values exported energy below the retail electricity rate. Using more solar in the home and shifting energy into evening hours can therefore matter more than under older NEM plans. Actual savings depend on usage, system size, rate plan, and export timing."],
  ["Do I need a battery for solar in Palmdale under SCE?", "No. SCE does not require a battery to install solar. Storage can hold excess daytime production for evening use, improve self-consumption, and provide backup when designed for it, so we compare solar-only and solar-plus-battery options for the home."],
  ["What affects battery size for a Palmdale home?", "Backup priorities, evening demand, desired runtime, the home’s electrical setup, available incentives, and budget all affect battery capacity. We size storage around those goals."],
  ["What local conditions affect a Palmdale solar design?", "Summer cooling loads, afternoon winds, roof condition, shade, orientation, and planned electrical loads all affect equipment placement and system sizing."]
] as const;

export default function PalmdaleServiceAreaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteConfig.url}/service-areas/palmdale-ca/#service`,
        name: "Solar, battery storage, and roof planning in Palmdale, CA",
        url: `${siteConfig.url}/service-areas/palmdale-ca`,
        provider: { "@id": `${siteConfig.url}/#organization` },
        areaServed: {
          "@type": "City",
          name: "Palmdale, CA",
          geo: { "@type": "GeoCoordinates", latitude: 34.5794, longitude: -118.1165 }
        },
        serviceType: ["Residential solar", "Battery storage", "Roofing coordination", "Solar proposal review"]
      },
      {
        "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        telephone: siteConfig.phoneHref,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.streetAddress,
          addressLocality: siteConfig.address.addressLocality,
          addressRegion: siteConfig.address.addressRegion,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.addressCountry
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
      <PalmdaleServiceAreaPageClient />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
