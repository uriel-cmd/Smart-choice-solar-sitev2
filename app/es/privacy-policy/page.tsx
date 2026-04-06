import { PrivacyPolicyPageClient } from "@/components/pages/privacy-policy-page-client";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Política de Privacidad",
  description: "Lee la política de privacidad de Smart Choice Solar sobre formularios, uso del sitio y comunicaciones.",
  path: "/privacy-policy",
  locale: "es",
  keywords: ["política de privacidad", "privacidad compañía solar", "términos de privacidad sitio web"]
});

export default function PrivacyPolicyPageEs() {
  return <PrivacyPolicyPageClient />;
}
