import { contentType, createOgImage, size } from "@/lib/og";

export const runtime = "nodejs";

export { contentType, size };

export const alt = "Evaluación gratis con Smart Choice Solar";

export default function ContactOpenGraphImageEs() {
  return createOgImage({
    locale: "es",
    eyebrow: "Evaluación Gratis",
    headline: "Contáctanos para un punto de partida solar más claro."
  });
}
