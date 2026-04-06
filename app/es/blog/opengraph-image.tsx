import { contentType, createOgImage, size } from "@/lib/og";

export const runtime = "nodejs";

export { contentType, size };

export const alt = "Recursos y blog de Smart Choice Solar";

export default function BlogOpenGraphImageEs() {
  return createOgImage({
    locale: "es",
    eyebrow: "Recursos",
    headline: "Guías de solar, baterías y techado que vale la pena leer."
  });
}
