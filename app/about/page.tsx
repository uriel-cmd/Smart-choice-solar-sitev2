import { AboutPageClient } from "@/components/pages/about-page-client";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "About Smart Choice Solar",
  description:
    "Learn more about Smart Choice Solar, our homeowner-first process, and the standards we bring to solar, battery, and roofing projects across California.",
  path: "/about",
  keywords: [
    "about solar company",
    "California solar team",
    "solar battery roofing company",
    "locally owned solar company",
    "Smart Choice Solar company"
  ]
});

export default function AboutPage() {
  return <AboutPageClient />;
}
