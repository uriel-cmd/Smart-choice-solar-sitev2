import { contentType, createOgImage, size } from "@/lib/og";

export const runtime = "nodejs";

export { contentType, size };

export const alt = "Smart Choice Solar batería de respaldo para el hogar";

export default function BatteryOpenGraphImageEs() {
  return createOgImage({
    locale: "es",
    eyebrow: "Batería Residencial",
    headline: "Respaldo de energía y uso inteligente después del atardecer."
  });
}
