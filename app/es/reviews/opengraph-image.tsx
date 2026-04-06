import { contentType, createOgImage, size } from "@/lib/og";

export const runtime = "nodejs";

export { contentType, size };

export const alt = "Reseñas de Smart Choice Solar";

export default function ReviewsOpenGraphImageEs() {
  return createOgImage({
    locale: "es",
    eyebrow: "Reseñas Reales",
    headline: "Opiniones reales de propietarios en California."
  });
}
