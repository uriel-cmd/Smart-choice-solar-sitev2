import { contentType, createOgImage, size } from "@/lib/og";

export const runtime = "nodejs";

export { contentType, size };

export const alt = "Smart Choice Solar California solar, battery storage, and roofing";

export default function OpenGraphImage() {
  return createOgImage({
    locale: "en",
    eyebrow: "Locally Owned in California",
    headline: "California solar, battery storage, and roofing.",
    supporting: "Premium guidance, clear estimates, and cleaner project planning for homeowners across California."
  });
}
