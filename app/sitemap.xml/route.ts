import { getBlogPosts } from "@/lib/blog";

const baseUrl = "https://smartchoice.solar";

const routes = [
  "",
  "/solutions",
  "/solar",
  "/battery-storage",
  "/roofing",
  "/about",
  "/reviews",
  "/service-areas",
  "/contact",
  "/blog",
  "/privacy-policy",
  "/terms"
];

type SitemapEntry = {
  url: string;
  lastModified: string;
  changeFrequency: "weekly" | "monthly";
  priority: number;
  alternates: {
    en: string;
    es: string;
    default: string;
  };
};

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function sitemapUrl(entry: SitemapEntry) {
  return [
    "  <url>",
    `    <loc>${escapeXml(entry.url)}</loc>`,
    `    <lastmod>${entry.lastModified}</lastmod>`,
    `    <changefreq>${entry.changeFrequency}</changefreq>`,
    `    <priority>${entry.priority.toFixed(2)}</priority>`,
    `    <xhtml:link rel="alternate" hreflang="en-US" href="${escapeXml(entry.alternates.en)}" />`,
    `    <xhtml:link rel="alternate" hreflang="es-US" href="${escapeXml(entry.alternates.es)}" />`,
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(entry.alternates.default)}" />`,
    "  </url>"
  ].join("\n");
}

function createStaticEntries(): SitemapEntry[] {
  const now = new Date().toISOString();

  return routes.flatMap((route) => {
    const enPath = route;
    const esPath = route === "" ? "/es" : `/es${route}`;
    const enUrl = `${baseUrl}${enPath}`;
    const esUrl = `${baseUrl}${esPath}`;

    return [
      {
        url: enUrl,
        lastModified: now,
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : 0.8,
        alternates: {
          en: enUrl,
          es: esUrl,
          default: enUrl
        }
      },
      {
        url: esUrl,
        lastModified: now,
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 0.95 : 0.75,
        alternates: {
          en: enUrl,
          es: esUrl,
          default: enUrl
        }
      }
    ] satisfies SitemapEntry[];
  });
}

function createBlogEntries(): SitemapEntry[] {
  const englishPosts = getBlogPosts("en");
  const spanishPosts = getBlogPosts("es");

  return englishPosts.flatMap((post) => {
    const spanishMatch = spanishPosts.find((entry) => entry.slug === post.slug);
    const enUrl = `${baseUrl}/blog/${post.slug}`;
    const esUrl = `${baseUrl}/es/blog/${post.slug}`;
    const lastModified = new Date(spanishMatch?.publishDate ?? post.publishDate).toISOString();

    return [
      {
        url: enUrl,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          en: enUrl,
          es: esUrl,
          default: enUrl
        }
      },
      {
        url: esUrl,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.65,
        alternates: {
          en: enUrl,
          es: esUrl,
          default: enUrl
        }
      }
    ] satisfies SitemapEntry[];
  });
}

export function GET() {
  const entries = [...createStaticEntries(), ...createBlogEntries()];
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...entries.map(sitemapUrl),
    "</urlset>"
  ].join("\n");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600"
    }
  });
}
