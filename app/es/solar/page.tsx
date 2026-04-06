import { SolarPageClient } from "@/components/pages/solar-page-client";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Instalación Solar Residencial en California",
  description:
    "Explora instalación solar residencial premium en California con Smart Choice Solar, incluyendo diseño personalizado, planeación según el techo y orientación clara para propietarios.",
  path: "/solar",
  locale: "es",
  keywords: [
    "instalación solar California",
    "solar residencial California",
    "paneles solares para casas California",
    "compañía solar California",
    "diseño de sistema solar California"
  ]
});

export default function SolarPageEs() {
  return <SolarPageClient />;
}
