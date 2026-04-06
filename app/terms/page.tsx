import { TermsPageClient } from "@/components/pages/terms-page-client";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Terms",
  description: "Read the Smart Choice Solar website terms and conditions regarding site usage, content, and submitted inquiries.",
  path: "/terms",
  keywords: ["website terms", "solar company terms", "terms and conditions"]
});

export default function TermsPage() {
  return <TermsPageClient />;
}
