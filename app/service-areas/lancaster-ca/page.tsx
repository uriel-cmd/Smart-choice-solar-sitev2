import { LancasterServiceAreaPageClient } from "@/components/pages/lancaster-service-area-page-client";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Solar Installation & Battery Storage in Lancaster, CA",
  description:
    "Lancaster solar, battery storage, roofing coordination, and proposal guidance from a locally based team serving Antelope Valley homeowners.",
  path: "/service-areas/lancaster-ca",
  keywords: [
    "solar installation Lancaster CA",
    "Lancaster solar company",
    "solar panels Lancaster CA",
    "battery installation Lancaster CA",
    "solar panel repair Lancaster CA",
    "Antelope Valley solar company"
  ]
});

const faqs = [
  ["Does Smart Choice Solar serve Lancaster, California?", "Yes. Smart Choice Solar is based in Lancaster and serves homeowners in Lancaster and surrounding Antelope Valley communities, subject to project scope and address verification."],
  ["Can you help both Lancaster Energy and SCE customers?", "We begin by confirming the utility shown on the homeowner’s bill, then review usage and the applicable project path before making a recommendation."],
  ["Should I consider a battery with solar in Lancaster?", "It depends on evening usage, outage priorities, rate structure, available incentives, and budget. We model those factors instead of automatically adding or excluding storage."],
  ["What if my roof may need replacement?", "We recommend reviewing roof condition before final solar design. Coordinating roofing and solar early can reduce avoidable rework and protect the long-term project."],
  ["Can you review another company’s solar proposal?", "Yes. We can help compare system size, estimated production, battery capacity, equipment assumptions, financing structure, and what is included after installation."]
] as const;

export default function LancasterServiceAreaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteConfig.url}/service-areas/lancaster-ca/#service`,
        name: "Solar, battery storage, and roofing guidance in Lancaster, CA",
        url: `${siteConfig.url}/service-areas/lancaster-ca`,
        provider: { "@id": `${siteConfig.url}/#organization` },
        areaServed: ["Lancaster", "Palmdale", "Quartz Hill", "Antelope Valley"].map((name) => ({ "@type": "Place", name })),
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
      <LancasterServiceAreaPageClient />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
