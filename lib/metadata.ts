import type { Metadata } from "next";

import type { Locale } from "@/lib/i18n";

const SITE_URL = "https://www.smartchoice.solar";
const SITE_NAME = "Smart Choice Solar";

type PageMetadata = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  locale?: Locale;
};

export function buildMetadata({ title, description, path, keywords, locale = "en" }: PageMetadata): Metadata {
  const localizedPath = locale === "es" ? (path === "/" ? "/es" : `/es${path}`) : path;
  const normalizedPath = path === "/es" ? "/" : path.startsWith("/es/") ? path.replace(/^\/es/, "") || "/" : path;
  const alternates = {
    "en-US": normalizedPath,
    "es-US": normalizedPath === "/" ? "/es" : `/es${normalizedPath}`,
    "x-default": normalizedPath
  };
  const url = `${SITE_URL}${localizedPath}`;

  return {
    title,
    description,
    keywords,
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
      canonical: localizedPath,
      languages: alternates
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: locale === "es" ? "es_US" : "en_US",
      alternateLocale: locale === "es" ? "en_US" : "es_US",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}
