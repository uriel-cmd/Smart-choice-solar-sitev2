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
  const article = getBlogPostBySlug("es", slug);

  if (!article) {
    return buildMetadata({
      title: "Artículo del Blog",
      description: "Artículo del blog de Smart Choice Solar.",
      path: `/blog/${slug}`,
      locale: "es",
      keywords: ["artículo solar", "artículo batería residencial", "artículo techo y solar"]
    });
  }

  return buildMetadata({
    title: article.title,
    description: article.description,
    path: `/blog/${slug}`,
    locale: "es",
    keywords: [
      `artículo ${article.category.toLowerCase()}`,
      "blog energía California",
      "artículo solar",
      "artículo batería residencial",
      "artículo techo y solar"
    ]
  });
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export default async function BlogPostPageEs({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const article = getBlogPostBySlug("es", slug);

  if (!article) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    image: [`https://www.smartchoice.solar${article.featuredImage}`],
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
        url: "https://www.smartchoice.solar/brand/smart-choice-solar-logo.svg"
      }
    },
    mainEntityOfPage: `https://www.smartchoice.solar/es/blog/${article.slug}`,
    url: `https://www.smartchoice.solar/es/blog/${article.slug}`,
    isPartOf: {
      "@type": "Blog",
      name: "Blog de Smart Choice Solar",
      url: "https://www.smartchoice.solar/es/blog"
    },
    articleSection: article.category,
    inLanguage: "es-US"
  };

  return (
    <>
      <PageHero
        eyebrow="Artículo del Blog"
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
