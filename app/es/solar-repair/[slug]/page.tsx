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
  if (!guide) return buildMetadata({ title: "Guía de Reparación Solar", description: "Guía de reparación y diagnóstico solar en California.", path: `/solar-repair/${slug}`, locale: "es" });
  const content = getRepairGuideContent(guide, "es");
  return buildMetadata({ title: content.title, description: content.description, path: `/solar-repair/${slug}`, locale: "es", keywords: [content.title, `${guide.serviceType} California`, "reparación solar California"] });
}

export default async function RepairGuideRouteEs({ params }: RepairGuidePageProps) {
  const { slug } = await params;
  const guide = getRepairGuide(slug);
  if (!guide) notFound();
  const content = getRepairGuideContent(guide, "es");
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: content.title,
    description: content.description,
    url: `${siteConfig.url}/es/solar-repair/${slug}`,
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: { "@type": "State", name: "California" },
    serviceType: guide.serviceType,
    inLanguage: "es-US"
  };
  return <><SolarRepairGuidePage guide={guide} locale="es" /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></>;
}

