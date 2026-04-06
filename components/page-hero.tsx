"use client";

import Link from "next/link";

import { useLanguage, useTranslation } from "@/components/language-provider";
import { localizeHref } from "@/lib/i18n";
import { openEstimatorEvent } from "@/components/zip-estimator-controller";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: { label?: string; labelKey?: "startFreeEstimate"; href?: string; action?: "estimate" };
  secondaryCta?: { label?: string; labelKey?: "readReviews"; href: string };
};

export function PageHero({ eyebrow, title, description, primaryCta, secondaryCta }: PageHeroProps) {
  const { language } = useLanguage();
  const t = useTranslation();

  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="glass-panel-strong relative overflow-hidden rounded-[40px] px-6 py-16 sm:px-10 lg:px-14">
          <div className="absolute inset-0 bg-mesh opacity-70" />
          <div className="absolute -right-12 top-10 h-40 w-40 rounded-full bg-sky/20 blur-3xl" />
          <div className="absolute left-0 top-0 h-full w-full bg-halo opacity-50" />
          <div className="relative max-w-3xl">
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate sm:text-5xl lg:text-6xl">{title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate/80">{description}</p>
            {(primaryCta || secondaryCta) ? (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {primaryCta ? (
                  primaryCta.action === "estimate" ? (
                    <button type="button" onClick={() => openEstimatorEvent()} className="accent-button">
                      {primaryCta.labelKey ? t.pageHero[primaryCta.labelKey] : primaryCta.label}
                    </button>
                  ) : (
                    <Link href={localizeHref(primaryCta.href ?? "#", language)} className="accent-button">
                      {primaryCta.labelKey ? t.pageHero[primaryCta.labelKey] : primaryCta.label}
                    </Link>
                  )
                ) : null}
                {secondaryCta ? (
                  <Link
                    href={localizeHref(secondaryCta.href, language)}
                    className="rounded-full border border-slate/12 bg-white/85 px-6 py-4 text-sm font-semibold text-slate shadow-soft"
                  >
                    {secondaryCta.labelKey ? t.pageHero[secondaryCta.labelKey] : secondaryCta.label}
                  </Link>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
