import { ContactPageClient } from "@/components/pages/contact-page-client";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Free Solar Assessment and Contact",
  description:
    "Contact Smart Choice Solar for a free home assessment on solar, battery storage, roofing, or a combined home energy project in California.",
  path: "/contact",
  keywords: [
    "free solar assessment",
    "contact solar company California",
    "battery storage quote",
    "solar quote California",
    "free home energy consultation"
  ]
});

export default function ContactPage() {
  return <ContactPageClient />;
}
