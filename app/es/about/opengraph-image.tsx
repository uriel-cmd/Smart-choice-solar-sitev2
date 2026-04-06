import { contentType, createOgImage, size } from "@/lib/og";

export const runtime = "nodejs";

export { contentType, size };

export const alt = "Sobre Smart Choice Solar";

export default function AboutOpenGraphImageEs() {
  return createOgImage({
    locale: "es",
    eyebrow: "Sobre Smart Choice Solar",
    headline: "Una compañía solar de California enfocada en el propietario."
  });
}
