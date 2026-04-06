import type { MetadataRoute } from "next";

import { getBlogPosts } from "@/lib/blog";

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

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://smartchoice.solar";
  const englishPosts = getBlogPosts("en");
  const spanishPosts = getBlogPosts("es");
  const staticRoutes: MetadataRoute.Sitemap = routes.flatMap((route) => {
    const enPath = route;
    const esPath = route === "" ? "/es" : `/es${route}`;

    return [
      {
        url: `${baseUrl}${enPath}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : 0.8,
        alternates: {
          languages: {
            "en-US": `${baseUrl}${enPath}`,
            "es-US": `${baseUrl}${esPath}`,
            "x-default": `${baseUrl}${enPath}`
          }
        }
      },
      {
        url: `${baseUrl}${esPath}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 0.95 : 0.75,
        alternates: {
          languages: {
            "en-US": `${baseUrl}${enPath}`,
            "es-US": `${baseUrl}${esPath}`,
            "x-default": `${baseUrl}${enPath}`
          }
        }
      }
    ];
  });
  const articles: MetadataRoute.Sitemap = englishPosts.flatMap((post) => {
    const spanishMatch = spanishPosts.find((entry) => entry.slug === post.slug);
    const enUrl = `${baseUrl}/blog/${post.slug}`;
    const esUrl = `${baseUrl}/es/blog/${post.slug}`;
    const lastModified = new Date(spanishMatch?.publishDate ?? post.publishDate);

    return [
      {
        url: enUrl,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          languages: {
            "en-US": enUrl,
            "es-US": esUrl,
            "x-default": enUrl
          }
        }
      },
      {
        url: esUrl,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.65,
        alternates: {
          languages: {
            "en-US": enUrl,
            "es-US": esUrl,
            "x-default": enUrl
          }
        }
      }
    ];
  });

  return [...staticRoutes, ...articles];
}
