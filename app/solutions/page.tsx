import { SolutionsPageClient } from "@/components/pages/solutions-page-client";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Solar, Battery Storage, and Roofing Solutions",
  description:
    "Explore Smart Choice Solar solutions for residential solar, battery backup, and roof coordination in California with one cleaner homeowner process.",
  path: "/solutions",
  keywords: [
    "solar battery roofing solutions California",
    "home energy solutions California",
    "solar battery roofing company California",
    "residential solar and battery California",
    "roof and solar coordination California"
  ]
});

export default function SolutionsPage() {
  return <SolutionsPageClient />;
}
