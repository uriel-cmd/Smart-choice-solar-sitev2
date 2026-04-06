import { contentType, createOgImage, size } from "@/lib/og";

export const runtime = "nodejs";

export { contentType, size };

export const alt = "Free solar assessment with Smart Choice Solar";

export default function ContactOpenGraphImage() {
  return createOgImage({
    locale: "en",
    eyebrow: "Free Assessment",
    headline: "Get in touch for a clearer solar starting point."
  });
}
