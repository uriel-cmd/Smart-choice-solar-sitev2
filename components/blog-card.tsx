import Link from "next/link";

type BlogCardProps = {
  href: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  category: string;
  readTime: string;
  readLabel: string;
};

export function BlogCard({ href, title, excerpt, publishedAt, category, readTime, readLabel }: BlogCardProps) {
  return (
    <article className="glass-panel rounded-[28px] p-6">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate/75">
        <span>{category}</span>
        <span>{publishedAt}</span>
        <span>{readTime}</span>
      </div>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-slate/80">{excerpt}</p>
      <Link href={href} className="mt-6 inline-flex text-sm font-semibold text-ink">
        {readLabel}
      </Link>
    </article>
  );
}
