import { contentType, createOgImage, size } from "@/lib/og";

export const runtime = "nodejs";

export { contentType, size };

export const alt = "Smart Choice Solar customer reviews";

export default function ReviewsOpenGraphImage() {
  return createOgImage({
    locale: "en",
    eyebrow: "Customer Reviews",
    headline: "Real reviews from California homeowners."
  });
}
