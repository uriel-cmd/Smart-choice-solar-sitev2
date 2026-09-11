import { OffersPageClient } from "@/components/pages/offers-page-client";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Solar Promotions & Offers | Free Mini Split",
  description: "For a limited time, qualifying homeowners can receive a free high-efficiency mini-split AC system with a Smart Choice Solar home solar installation.",
  path: "/offers",
  keywords: ["solar promotions California", "free mini split with solar", "solar installation offer", "Smart Choice Solar promotion"]
});

export default function OffersPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: "Free Mini Split When You Go Solar",
    description: "For a limited time, qualifying homeowners can receive a free high-efficiency mini-split AC system with a home solar installation from Smart Choice Solar.",
    url: `${siteConfig.url}/offers`,
    seller: { "@id": `${siteConfig.url}/#organization` },
    itemOffered: { "@type": "Service", name: "High-efficiency mini-split AC system with qualifying home solar installation" }
  };

  return <><OffersPageClient /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></>;
}
