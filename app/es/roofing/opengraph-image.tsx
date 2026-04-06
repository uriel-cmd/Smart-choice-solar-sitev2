import { contentType, createOgImage, size } from "@/lib/og";

export const runtime = "nodejs";

export { contentType, size };

export const alt = "Smart Choice Solar coordinación de techado y solar";

export default function RoofingOpenGraphImageEs() {
  return createOgImage({
    locale: "es",
    eyebrow: "Coordinación de Techado",
    headline: "Planeación de techo y solar para un proyecto más limpio."
  });
}
