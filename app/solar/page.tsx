import { SolarPageClient } from "@/components/pages/solar-page-client";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Residential Solar Installation in California",
  description:
    "Explore premium residential solar installation in California with Smart Choice Solar, including custom system design, roof-aware planning, and homeowner-first guidance.",
  path: "/solar",
  keywords: [
    "California solar installation",
    "residential solar California",
    "solar panels for homes California",
    "California solar company",
    "solar system design California"
  ]
});

export default function SolarPage() {
  return <SolarPageClient />;
}
