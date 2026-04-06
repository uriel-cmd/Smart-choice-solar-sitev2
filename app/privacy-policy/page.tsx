import { PrivacyPolicyPageClient } from "@/components/pages/privacy-policy-page-client";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Read the Smart Choice Solar privacy policy regarding form submissions, website usage, and communications.",
  path: "/privacy-policy",
  keywords: ["privacy policy", "solar company privacy policy", "website privacy terms"]
});

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyPageClient />;
}
