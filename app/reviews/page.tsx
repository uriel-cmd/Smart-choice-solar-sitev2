import { ReviewsPageClient } from "@/components/pages/reviews-page-client";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Customer Reviews for Smart Choice Solar",
  description:
    "Read homeowner reviews for Smart Choice Solar and see why California clients trust our team for solar installation, battery storage, and roofing coordination.",
  path: "/reviews",
  keywords: [
    "solar company reviews",
    "California solar reviews",
    "battery storage reviews",
    "roofing and solar reviews",
    "Smart Choice Solar reviews"
  ]
});

export default function ReviewsPage() {
  return <ReviewsPageClient />;
}
