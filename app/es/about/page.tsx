import { AboutPageClient } from "@/components/pages/about-page-client";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Sobre Smart Choice Solar",
  description:
    "Conoce más sobre Smart Choice Solar, nuestro proceso enfocado en el propietario y los estándares que llevamos a proyectos de solar, batería y techado en California.",
  path: "/about",
  locale: "es",
  keywords: [
    "sobre compañía solar",
    "equipo solar California",
    "compañía solar batería techo",
    "compañía solar local",
    "Smart Choice Solar empresa"
  ]
});

export default function AboutPageEs() {
  return <AboutPageClient />;
}
