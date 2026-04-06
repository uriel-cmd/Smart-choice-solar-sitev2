"use client";

import Link from "next/link";

import { useLanguage, useTranslation } from "@/components/language-provider";
import { localizeHref } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

export function CTASection() {
  const { language } = useLanguage();
  const t = useTranslation();

  return (
    <section className="section-band-dark section-space pt-0">
      <div className="container-shell">
        <div className="brand-panel-soft relative overflow-hidden rounded-[40px] px-6 py-12 text-white shadow-soft sm:px-10 lg:px-14">
          <div className="absolute inset-0 bg-mesh opacity-20" />
          <div className="absolute -left-10 top-0 h-48 w-48 rounded-full bg-sky/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-sun/12 blur-3xl" />
          <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
            <div className="relative">
                <span className="eyebrow border-sky/30 bg-white/10 text-white">{t.ctaSection.eyebrow}</span>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                {t.ctaSection.title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/75">
                {t.ctaSection.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
                <span className="rounded-full border border-white/15 px-3 py-2">{t.ctaSection.badge1}</span>
                <span className="rounded-full border border-white/15 px-3 py-2">{t.ctaSection.badge2}</span>
                <span className="rounded-full border border-white/15 px-3 py-2">{t.ctaSection.badge3}</span>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[28px] border border-white/10 bg-white/8 p-5 backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">{t.ctaSection.expect}</p>
                <div className="mt-4 grid gap-3 text-sm text-white/80">
                  <div className="rounded-[20px] bg-white/8 px-4 py-3">{t.ctaSection.expect1}</div>
                  <div className="rounded-[20px] bg-white/8 px-4 py-3">{t.ctaSection.expect2}</div>
                  <div className="rounded-[20px] bg-white/8 px-4 py-3">{t.ctaSection.expect3}</div>
                </div>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <Link href={localizeHref("/?estimator=1", language)} className="accent-button">
                    {t.ctaSection.primary}
                  </Link>
                  <a
                    href={`tel:${siteConfig.phoneHref}`}
                    className="rounded-full border border-white/20 px-6 py-4 text-center text-sm font-semibold text-white"
                  >
                    {t.ctaSection.call} {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
