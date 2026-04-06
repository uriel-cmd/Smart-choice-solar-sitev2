import { contentType, createOgImage, size } from "@/lib/og";

export const runtime = "nodejs";

export { contentType, size };

export const alt = "Smart Choice Solar instalación solar residencial";

export default function SolarOpenGraphImageEs() {
  return createOgImage({
    locale: "es",
    eyebrow: "Solar Residencial",
    headline: "Sistemas solares personalizados para hogares de California."
  });
}
