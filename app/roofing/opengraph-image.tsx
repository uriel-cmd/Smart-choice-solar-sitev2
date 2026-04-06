import { contentType, createOgImage, size } from "@/lib/og";

export const runtime = "nodejs";

export { contentType, size };

export const alt = "Smart Choice Solar roofing and solar coordination";

export default function RoofingOpenGraphImage() {
  return createOgImage({
    locale: "en",
    eyebrow: "Roofing Coordination",
    headline: "Roof and solar planning that keeps the project clean."
  });
}
