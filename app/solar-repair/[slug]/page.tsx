import { notFound } from "next/navigation";

import { SolarRepairGuidePage } from "@/components/pages/solar-repair-guide-page";
import { buildMetadata } from "@/lib/metadata";
import { getRepairGuide, getRepairGuideContent, repairGuides } from "@/lib/repair-guides";
import { siteConfig } from "@/lib/site";

type RepairGuidePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return repairGuides.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: RepairGuidePageProps) {
  const { slug } = await params;
  const guide = getRepairGuide(slug);
  if (!guide) return buildMetadata({ title: "Solar Repair Guide", description: "Solar repair and troubleshooting guidance in California.", path: `/solar-repair/${slug}` });
  const content = getRepairGuideContent(guide, "en");
  return buildMetadata({ title: content.title, description: content.description, path: `/solar-repair/${slug}`, keywords: [content.title, `${guide.serviceType} California`, "solar repair California"] });
}

export default async function RepairGuideRoute({ params }: RepairGuidePageProps) {
  const { slug } = await params;
  const guide = getRepairGuide(slug);
  if (!guide) notFound();
  const content = getRepairGuideContent(guide, "en");
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: content.title,
    description: content.description,
    url: `${siteConfig.url}/solar-repair/${slug}`,
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: { "@type": "State", name: "California" },
    serviceType: guide.serviceType
  };
  return <><SolarRepairGuidePage guide={guide} locale="en" /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></>;
}

