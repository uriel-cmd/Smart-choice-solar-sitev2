import { siteConfig } from "@/lib/site";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    image: `${siteConfig.url}/brand/smart-choice-solar-van-v3.png`,
    logo: `${siteConfig.url}/brand/smart-choice-solar-logo.svg`,
    telephone: siteConfig.phoneHref,
    email: siteConfig.email,
    slogan: siteConfig.tagline,
    availableLanguage: ["English", "Spanish"],
    address: {
      "@type": "PostalAddress",
      ...siteConfig.address
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 34.6466832,
      longitude: -118.1502569
    },
    hasMap: "https://www.google.com/maps/search/?api=1&query=Smart%20Choice%20Solar&query_place_id=ChIJC8ByWQJOV40RriTku6NeTqg",
    areaServed: [
      {
        "@type": "State",
        name: "California"
      },
      ...siteConfig.serviceAreas.map((area) => ({
        "@type": "Place",
        name: area
      }))
    ],
    serviceType: ["Residential solar installation", "Solar diagnostics and repair", "Battery storage", "Roofing coordination"],
    priceRange: "$$",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phoneHref,
        email: siteConfig.email,
        contactType: "customer service",
        areaServed: "US-CA",
        availableLanguage: ["English", "Spanish"]
      }
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00"
      }
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Home energy services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Residential Solar"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Battery Storage"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Roofing"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Solar system diagnostic service",
            url: `${siteConfig.url}/solar-repair`
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Solar inverter and monitoring repair",
            url: `${siteConfig.url}/solar-repair`
          }
        }
      ]
    },
    sameAs: siteConfig.businessProfiles
  };
}
