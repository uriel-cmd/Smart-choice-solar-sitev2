import type { Metadata } from "next";

import { HomePageClient } from "@/components/pages/home-page-client";

export const metadata: Metadata = {
  title: "Solar, Baterías y Techado en California",
  description:
    "Compara soluciones premium de solar, baterías y techado con un equipo local de California enfocado en planeación clara, orientación honesta y estimados rápidos.",
  keywords: [
    "compañía solar en California",
    "instalador solar en California",
    "compañía solar local California",
    "batería residencial California",
    "compañía de solar y techado",
    "respaldo de batería California",
    "compañía solar operada localmente"
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  alternates: {
    canonical: "/es",
    languages: {
      "en-US": "/",
      "es-US": "/es",
      "x-default": "/"
    }
  },
  openGraph: {
    title: "Solar, Baterías y Techado en California",
    description:
      "Compara soluciones premium de solar, baterías y techado con un equipo local de California enfocado en planeación clara, orientación honesta y estimados rápidos.",
    url: "https://www.smartchoice.solar/es",
    siteName: "Smart Choice Solar",
    locale: "es_US",
    alternateLocale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar, Baterías y Techado en California",
    description:
      "Compara soluciones premium de solar, baterías y techado con un equipo local de California enfocado en planeación clara, orientación honesta y estimados rápidos."
  }
};

export default function HomePageEs() {
  return <HomePageClient />;
}
