import { ServiceAreasPageClient } from "@/components/pages/service-areas-page-client";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Áreas de Servicio en California",
  description:
    "Descubre cómo Smart Choice Solar ofrece apoyo de solar, baterías y techado en todo California, con servicio local y recepción de estimados a nivel estatal.",
  path: "/service-areas",
  locale: "es",
  keywords: [
    "compañía solar California",
    "instalador solar California",
    "áreas de servicio California",
    "batería California",
    "compañía solar cerca de mí California"
  ]
});

export default function ServiceAreasPageEs() {
  return <ServiceAreasPageClient />;
}
