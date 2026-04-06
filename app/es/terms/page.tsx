import { TermsPageClient } from "@/components/pages/terms-page-client";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Términos",
  description: "Lee los términos y condiciones del sitio web de Smart Choice Solar sobre uso del sitio, contenido y consultas enviadas.",
  path: "/terms",
  locale: "es",
  keywords: ["términos del sitio web", "términos compañía solar", "términos y condiciones"]
});

export default function TermsPageEs() {
  return <TermsPageClient />;
}
