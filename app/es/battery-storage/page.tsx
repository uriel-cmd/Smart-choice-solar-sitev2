import { BatteryStoragePageClient } from "@/components/pages/battery-storage-page-client";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Batería de Respaldo para el Hogar en California",
  description:
    "Agrega batería de respaldo para el hogar en California y mejora la protección ante apagones, el control de tarifas pico y el uso inteligente de tu sistema solar con Smart Choice Solar.",
  path: "/battery-storage",
  locale: "es",
  keywords: [
    "batería residencial California",
    "instalador de batería California",
    "batería solar California",
    "respaldo de batería para casa",
    "batería para paneles solares"
  ]
});

export default function BatteryStoragePageEs() {
  return <BatteryStoragePageClient />;
}
