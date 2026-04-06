import { SolutionsPageClient } from "@/components/pages/solutions-page-client";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Soluciones de Solar, Baterías y Techado",
  description:
    "Explora las soluciones de Smart Choice Solar para solar residencial, baterías de respaldo y coordinación de techado en California con un proceso más limpio.",
  path: "/solutions",
  locale: "es",
  keywords: [
    "soluciones solar baterías techado California",
    "soluciones energía hogar California",
    "compañía solar batería techo California",
    "solar residencial y batería California",
    "coordinación techo y solar California"
  ]
});

export default function SolutionsPageEs() {
  return <SolutionsPageClient />;
}
