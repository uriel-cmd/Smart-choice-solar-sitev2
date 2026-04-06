import { contentType, createOgImage, size } from "@/lib/og";

export const runtime = "nodejs";

export { contentType, size };

export const alt = "Smart Choice Solar resources and blog";

export default function BlogOpenGraphImage() {
  return createOgImage({
    locale: "en",
    eyebrow: "Resources",
    headline: "Solar, battery, and roofing guidance worth reading."
  });
}
