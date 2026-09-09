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
  ["Do Palmdale homes benefit from battery storage?", "A battery may help with backup priorities and evening energy use, but the right capacity depends on the circuits the homeowner wants to support, SCE usage, system design, and budget."],
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
        areaServed: ["Palmdale", "Rancho Vista", "Anaverde", "Joshua Hills", "Antelope Valley"].map((name) => ({ "@type": "Place", name })),
        serviceType: ["Residential solar", "Battery storage", "Roofing coordination", "Solar proposal review"]
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
