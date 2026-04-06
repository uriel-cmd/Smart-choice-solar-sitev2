import { contentType, createOgImage, size } from "@/lib/og";

export const runtime = "nodejs";

export { contentType, size };

export const alt = "Smart Choice Solar residential solar installation";

export default function SolarOpenGraphImage() {
  return createOgImage({
    locale: "en",
    eyebrow: "Residential Solar",
    headline: "Custom solar systems built for California homes."
  });
}
