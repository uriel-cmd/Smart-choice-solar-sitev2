import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

import type { Locale } from "@/lib/i18n";

export type BlogPostFrontmatter = {
  title: string;
  description: string;
  publishDate: string;
  author: string;
  category: string;
  slug: string;
  featuredImage: string;
};

export type BlogPost = BlogPostFrontmatter & {
  body: string;
  excerpt: string;
  readTime: string;
};

const CONTENT_ROOT = join(process.cwd(), "content", "blog");

function parseFrontmatter(fileContent: string) {
  const match = fileContent.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);

  if (!match) {
    throw new Error("Blog post is missing valid frontmatter.");
  }

  const [, rawFrontmatter, body] = match;
  const frontmatter = Object.fromEntries(
    rawFrontmatter
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const separatorIndex = line.indexOf(":");

        if (separatorIndex === -1) {
          throw new Error(`Invalid frontmatter line: ${line}`);
        }

        const key = line.slice(0, separatorIndex).trim();
        const value = line.slice(separatorIndex + 1).trim().replace(/^"(.*)"$/, "$1");
        return [key, value];
      })
  );

  return {
    frontmatter: frontmatter as unknown as BlogPostFrontmatter,
    body: body.trim()
  };
}

function getExcerpt(body: string) {
  const firstParagraph = body
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .find((block) => block && !block.startsWith("#") && !block.startsWith("- "));

  return firstParagraph ?? "";
}

function getReadTime(body: string, locale: Locale) {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 180));
  return locale === "es" ? `${minutes} min de lectura` : `${minutes} min read`;
}

function getLocaleFolder(locale: Locale) {
  return join(CONTENT_ROOT, locale);
}

export function getBlogPosts(locale: Locale): BlogPost[] {
  const folder = getLocaleFolder(locale);
  const files = readdirSync(folder).filter((file) => file.endsWith(".md") || file.endsWith(".mdx"));

  return files
    .map((file) => {
      const source = readFileSync(join(folder, file), "utf8");
      const { frontmatter, body } = parseFrontmatter(source);
      return {
        ...frontmatter,
        body,
        excerpt: getExcerpt(body),
        readTime: getReadTime(body, locale)
      };
    })
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
}

export function getBlogPostBySlug(locale: Locale, slug: string) {
  return getBlogPosts(locale).find((post) => post.slug === slug) ?? null;
}

export function getAllBlogSlugs() {
  return getBlogPosts("en").map((post) => post.slug);
}
