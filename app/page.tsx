import type { Metadata } from "next";

import { HomePageClient } from "@/components/pages/home-page-client";

export const metadata: Metadata = {
  title: "California Solar, Battery Storage, and Roofing",
  description:
    "Compare premium solar, battery storage, and roofing solutions with a locally owned California team focused on clean project planning, honest guidance, and fast estimates.",
  keywords: [
    "California solar company",
    "California solar installer",
    "local solar company California",
    "battery storage California",
    "roofing and solar company",
    "home battery backup California",
    "locally owned and operated solar company"
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
    canonical: "/",
    languages: {
      "en-US": "/",
      "es-US": "/es",
      "x-default": "/"
    }
  },
  openGraph: {
    title: "California Solar, Battery Storage, and Roofing",
    description:
      "Compare premium solar, battery storage, and roofing solutions with a locally owned California team focused on clean project planning, honest guidance, and fast estimates.",
    url: "https://smartchoice.solar/",
    siteName: "Smart Choice Solar",
    locale: "en_US",
    alternateLocale: "es_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "California Solar, Battery Storage, and Roofing",
    description:
      "Compare premium solar, battery storage, and roofing solutions with a locally owned California team focused on clean project planning, honest guidance, and fast estimates."
  }
};

export default function HomePage() {
  return <HomePageClient />;
}
