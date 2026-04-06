import { ReviewsPageClient } from "@/components/pages/reviews-page-client";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Reseñas",
  description:
    "Lee reseñas de propietarios de Smart Choice Solar y descubre por qué clientes en California confían en nosotros para proyectos de instalación solar, baterías y techado.",
  path: "/reviews",
  locale: "es",
  keywords: [
    "reseñas compañía solar",
    "reseñas solar California",
    "reseñas batería residencial",
    "reseñas de solar y techo",
    "reseñas Smart Choice Solar"
  ]
});

export default function ReviewsPageEs() {
  return <ReviewsPageClient />;
}
