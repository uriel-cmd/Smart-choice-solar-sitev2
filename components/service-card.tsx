"use client";

import Image from "next/image";
import Link from "next/link";

import { useLanguage } from "@/components/language-provider";
import { localizeHref } from "@/lib/i18n";

type ServiceCardProps = {
  kicker: string;
  title: string;
  image: string;
  description: string;
  benefits: readonly string[];
  href: string;
};

export function ServiceCard({ kicker, title, image, description, benefits, href }: ServiceCardProps) {
  const { language } = useLanguage();

  return (
    <article className="group glass-panel overflow-hidden rounded-[30px] transition duration-300 hover:-translate-y-1 hover:border-sky/30 hover:shadow-glow">
      <div className="relative border-b border-sky/20 bg-[linear-gradient(145deg,rgba(26,48,82,0.08),rgba(143,203,231,0.2))] px-4 pb-0 pt-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.92),transparent_42%)]" />
        <div className="relative overflow-hidden rounded-[24px] border border-white/60 bg-white/65 shadow-[0_16px_45px_rgba(26,48,82,0.08)]">
          <Image
            src={image}
            alt={title}
            width={1200}
            height={760}
            className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.02]"
          />
        </div>
      </div>
      <div className="p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate/70">{kicker}</p>
      <h3 className="text-xl font-semibold text-slate">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate/80">{description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {benefits.map((benefit) => (
          <span key={benefit} className="rounded-full border border-line bg-white/80 px-3 py-1 text-xs font-medium text-slate">
            {benefit}
          </span>
        ))}
      </div>
      <Link href={localizeHref(href, language)} className="mt-6 inline-flex items-center text-sm font-semibold text-ink transition group-hover:text-slate">
        {language === "en" ? "Explore service" : "Explorar servicio"}
      </Link>
      </div>
    </article>
  );
}
