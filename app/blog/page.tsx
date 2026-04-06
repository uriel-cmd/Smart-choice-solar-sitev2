import { BlogCard } from "@/components/blog-card";
import { PageHero } from "@/components/page-hero";
import { getBlogPosts } from "@/lib/blog";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Solar, Battery, and Roofing Resources",
  description:
    "Read solar, battery, roofing, and homeowner energy insights from Smart Choice Solar, including proposal tips, outage planning, and roof coordination guidance.",
  path: "/blog",
  keywords: [
    "solar blog California",
    "battery storage articles",
    "roofing and solar resources",
    "solar contract tips",
    "home energy blog"
  ]
});

export default function BlogPage() {
  const posts = getBlogPosts("en");

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Practical energy guidance for homeowners comparing their next move."
        description="Insights on solar, batteries, roofing coordination, and how to make a smarter home energy decision."
      />
      <section className="pb-16">
        <div className="container-shell grid gap-5 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              href={`/blog/${post.slug}`}
              title={post.title}
              excerpt={post.excerpt}
              publishedAt={post.publishDate}
              category={post.category}
              readTime={post.readTime}
              readLabel="Read article"
            />
          ))}
        </div>
      </section>
    </>
  );
}
