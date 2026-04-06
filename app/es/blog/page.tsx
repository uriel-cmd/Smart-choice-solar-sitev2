import { BlogCard } from "@/components/blog-card";
import { PageHero } from "@/components/page-hero";
import { getBlogPosts } from "@/lib/blog";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Recursos de Solar, Baterías y Techado",
  description:
    "Lee recursos de Smart Choice Solar sobre energía residencial, baterías, techado, comparaciones de propuestas y decisiones para el hogar.",
  path: "/blog",
  locale: "es",
  keywords: [
    "blog solar California",
    "artículos de baterías",
    "recursos de solar y techado",
    "consejos contrato solar",
    "blog energía residencial"
  ]
});

export default function BlogPageEs() {
  const posts = getBlogPosts("es");

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Guía práctica de energía para propietarios que comparan su siguiente paso."
        description="Ideas sobre solar, baterías, coordinación de techado y cómo tomar una mejor decisión energética para el hogar."
      />
      <section className="pb-16">
        <div className="container-shell grid gap-5 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              href={`/es/blog/${post.slug}`}
              title={post.title}
              excerpt={post.excerpt}
              publishedAt={post.publishDate}
              category={post.category}
              readTime={post.readTime}
              readLabel="Leer artículo"
            />
          ))}
        </div>
      </section>
    </>
  );
}
