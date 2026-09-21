import { SolarRepairPageClient } from "@/components/pages/solar-repair-page-client";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Solar Panel Service & Repair in California",
  description:
    "Troubleshooting and repair for solar systems that are offline, underproducing, showing inverter faults, or no longer reporting correctly.",
  path: "/solar-repair",
  keywords: [
    "solar panel repair California",
    "solar inverter repair",
    "solar system troubleshooting",
    "SolarEdge repair California",
    "solar panels not producing",
    "solar repair Lancaster CA"
  ]
});

const faqs = [
  ["Can you repair a solar system installed by another company?", "In many cases, yes. We begin by reviewing the equipment, ownership or service agreement, system access, fault history, and site conditions before confirming the service path."],
  ["What should I send before the appointment?", "Photos of the inverter and electrical equipment, screenshots from the monitoring app, recent production history, error messages, and any original plans or warranty information help us prepare."],
  ["Do you work on SolarEdge systems?", "We evaluate SolarEdge systems along with other common residential solar platforms. Availability depends on equipment generation, site access, parts, warranty status, and the repair required."],
  ["Does low production always mean the panels are bad?", "No. Low production can come from communication loss, inverter shutdown, string or optimizer issues, shading, utility events, tripped protection, equipment failure, or a mismatch between expectations and actual system design."],
  ["Are you an authorized service center for every brand listed?", "No. Brand names identify equipment we may evaluate and do not imply manufacturer authorization or affiliation. We confirm warranty and service options before recommending work."]
] as const;

export default function SolarRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteConfig.url}/solar-repair/#service`,
        name: "Residential solar service and repair",
        url: `${siteConfig.url}/solar-repair`,
        provider: { "@id": `${siteConfig.url}/#organization` },
        areaServed: { "@type": "State", name: "California" },
        serviceType: ["Solar system diagnostics", "Solar inverter troubleshooting", "Solar monitoring repair", "Solar production issue diagnosis"]
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
