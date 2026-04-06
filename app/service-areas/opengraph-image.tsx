import { contentType, createOgImage, size } from "@/lib/og";

export const runtime = "nodejs";

export { contentType, size };

export const alt = "Smart Choice Solar service areas in California";

export default function ServiceAreasOpenGraphImage() {
  return createOgImage({
    locale: "en",
    eyebrow: "California Service Areas",
    headline: "Serving homeowners across California."
  });
}
