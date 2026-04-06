import { RoofingPageClient } from "@/components/pages/roofing-page-client";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Roofing and Solar Coordination in California",
  description:
    "Coordinate roofing and solar the right way in California with Smart Choice Solar for cleaner sequencing, roof readiness, and installation-ready planning.",
  path: "/roofing",
  keywords: [
    "roof and solar company California",
    "solar roofing coordination",
    "roof replacement and solar",
    "California roofing solar",
    "roof readiness for solar"
  ]
});

export default function RoofingPage() {
  return <RoofingPageClient />;
}
