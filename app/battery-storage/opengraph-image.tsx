import { contentType, createOgImage, size } from "@/lib/og";

export const runtime = "nodejs";

export { contentType, size };

export const alt = "Smart Choice Solar home battery storage";

export default function BatteryOpenGraphImage() {
  return createOgImage({
    locale: "en",
    eyebrow: "Battery Storage",
    headline: "Backup power and smarter energy use after sunset."
  });
}
