import { Suspense } from "react";
import type { Metadata } from "next";

import "./globals.css";

import { LanguageProvider } from "@/components/language-provider";
import { ZipEstimatorController } from "@/components/zip-estimator-controller";
import { buildLocaleAlternates } from "@/lib/i18n";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getLocalBusinessSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.seo.defaultTitle,
    template: siteConfig.seo.titleTemplate
  },
  description: siteConfig.seo.defaultDescription,
  applicationName: siteConfig.name,
  category: "Solar Energy",
  keywords: [
    "California solar company",
    "California solar installer",
    "battery storage installer",
    "roofing and solar company",
    "locally owned solar company",
    "home battery backup",
    "compañía solar en California",
    "instalador solar en California",
    "batería residencial California",
    "techado y solar California"
  ],
  alternates: {
    canonical: "/",
    languages: buildLocaleAlternates("/")
  },
  openGraph: {
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    alternateLocale: "es_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = getLocalBusinessSchema();

  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <SiteHeader />
          <main className="pb-[72px] lg:pb-0">{children}</main>
          <SiteFooter />
          <Suspense fallback={null}>
            <ZipEstimatorController />
          </Suspense>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        </LanguageProvider>
      </body>
    </html>
  );
}
