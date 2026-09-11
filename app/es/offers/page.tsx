import { OffersPageClient } from "@/components/pages/offers-page-client";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Promociones y Ofertas Solares | Mini Split Gratis",
  description: "Por tiempo limitado, propietarios elegibles pueden recibir un mini split de alta eficiencia gratis con una instalación solar residencial de Smart Choice Solar.",
  path: "/offers",
  locale: "es",
  keywords: ["promociones solares California", "mini split gratis con solar", "oferta de instalación solar"]
});

export default function OffersPageEs() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: "Mini Split Gratis al Instalar Solar",
    description: "Por tiempo limitado, propietarios elegibles pueden recibir un mini split de alta eficiencia gratis con una instalación solar residencial de Smart Choice Solar.",
    url: `${siteConfig.url}/es/offers`,
    seller: { "@id": `${siteConfig.url}/#organization` },
    itemOffered: { "@type": "Service", name: "Mini split de alta eficiencia con una instalación solar residencial elegible" }
  };

  return <><OffersPageClient /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></>;
}
