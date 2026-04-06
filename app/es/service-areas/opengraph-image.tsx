import { contentType, createOgImage, size } from "@/lib/og";

export const runtime = "nodejs";

export { contentType, size };

export const alt = "Áreas de servicio de Smart Choice Solar en California";

export default function ServiceAreasOpenGraphImageEs() {
  return createOgImage({
    locale: "es",
    eyebrow: "Áreas de Servicio",
    headline: "Atendiendo propietarios en todo California."
  });
}
