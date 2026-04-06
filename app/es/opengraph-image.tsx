import { contentType, createOgImage, size } from "@/lib/og";

export const runtime = "nodejs";

export { contentType, size };

export const alt = "Smart Choice Solar solar, baterías y techado en California";

export default function OpenGraphImageEs() {
  return createOgImage({
    locale: "es",
    eyebrow: "Operado Localmente en California",
    headline: "Solar, baterías y techado en California.",
    supporting: "Orientación premium, estimados claros y mejor planeación para propietarios en todo California."
  });
}
