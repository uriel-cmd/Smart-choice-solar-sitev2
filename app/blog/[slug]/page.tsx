import Image from "next/image";
import { notFound } from "next/navigation";

import { CTASection } from "@/components/cta-section";
import { MarkdownContent } from "@/components/markdown-content";
import { PageHero } from "@/components/page-hero";
import { getAllBlogSlugs, getBlogPostBySlug } from "@/lib/blog";
import { buildMetadata } from "@/lib/metadata";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug("en", slug);

  if (!post) {
    return buildMetadata({
      title: "Blog Article",
      description: "Smart Choice Solar blog article.",
      path: `/blog/${slug}`,
      keywords: ["solar article", "battery storage article", "roofing and solar article"]
    });
  }

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
    keywords: [
      `${post.category.toLowerCase()} article`,
      "California home energy blog",
      "solar article",
      "battery storage article",
      "roofing and solar article"
    ]
  });
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const article = getBlogPostBySlug("en", slug);

  if (!article) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    image: [`https://smartchoice.solar${article.featuredImage}`],
    datePublished: article.publishDate,
    dateModified: article.publishDate,
    author: {
      "@type": "Person",
      name: article.author
    },
    publisher: {
      "@type": "Organization",
      name: "Smart Choice Solar",
      logo: {
        "@type": "ImageObject",
        url: "https://smartchoice.solar/brand/smart-choice-solar-logo.svg"
      }
    },
    mainEntityOfPage: `https://smartchoice.solar/blog/${article.slug}`,
    url: `https://smartchoice.solar/blog/${article.slug}`,
    isPartOf: {
      "@type": "Blog",
      name: "Smart Choice Solar Blog",
      url: "https://smartchoice.solar/blog"
    },
    articleSection: article.category,
    inLanguage: "en-US"
  };

  return (
    <>
      <PageHero
        eyebrow="Blog Article"
        title={article.title}
        description={article.description}
      />
      <section className="pb-16">
        <div className="container-shell">
          <article className="glass-panel rounded-[32px] px-6 py-10 sm:px-10">
            <div className="mb-8 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate/75">
              <span>{article.category}</span>
              <span>{article.publishDate}</span>
              <span>{article.author}</span>
              <span>{article.readTime}</span>
            </div>
            <div className="mb-8 overflow-hidden rounded-[28px] border border-sky/20 bg-white">
              <Image
                src={article.featuredImage}
                alt={article.title}
                width={1400}
                height={900}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="content-rich">
              <MarkdownContent content={article.body} />
            </div>
          </article>
        </div>
      </section>
      <CTASection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
}
