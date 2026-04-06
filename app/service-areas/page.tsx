import { ServiceAreasPageClient } from "@/components/pages/service-areas-page-client";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "California Service Areas",
  description:
    "See how Smart Choice Solar provides solar, battery storage, and roofing support across California, with locally owned service and statewide estimate intake.",
  path: "/service-areas",
  keywords: [
    "California solar company",
    "California solar installer",
    "service areas California",
    "battery storage California",
    "solar company near me California"
  ]
});

export default function ServiceAreasPage() {
  return <ServiceAreasPageClient />;
}
