import { ContactPageClient } from "@/components/pages/contact-page-client";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Contacto y Evaluación Solar Gratis",
  description:
    "Contacta a Smart Choice Solar para una evaluación gratuita de solar, batería, techado o un proyecto de energía residencial en California.",
  path: "/contact",
  locale: "es",
  keywords: [
    "evaluación solar gratis",
    "contacto compañía solar California",
    "cotización batería",
    "cotización solar California",
    "consulta gratis energía solar"
  ]
});

export default function ContactPageEs() {
  return <ContactPageClient />;
}
