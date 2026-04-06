import { RoofingPageClient } from "@/components/pages/roofing-page-client";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Coordinación de Techado y Solar en California",
  description:
    "Coordina techado y solar de la forma correcta en California con Smart Choice Solar para una mejor secuencia, revisión del techo y planeación lista para instalar.",
  path: "/roofing",
  locale: "es",
  keywords: [
    "techo y solar California",
    "coordinación de techo y solar",
    "reemplazo de techo y solar",
    "techado California solar",
    "techo listo para paneles solares"
  ]
});

export default function RoofingPageEs() {
  return <RoofingPageClient />;
}
