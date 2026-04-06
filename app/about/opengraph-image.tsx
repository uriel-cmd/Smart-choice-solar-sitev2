import { contentType, createOgImage, size } from "@/lib/og";

export const runtime = "nodejs";

export { contentType, size };

export const alt = "About Smart Choice Solar";

export default function AboutOpenGraphImage() {
  return createOgImage({
    locale: "en",
    eyebrow: "About Smart Choice Solar",
    headline: "A homeowner-first California solar company."
  });
}
