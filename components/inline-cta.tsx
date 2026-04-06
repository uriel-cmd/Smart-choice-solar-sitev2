"use client";

import Link from "next/link";

import { openContactEvent, openEstimatorEvent } from "@/components/zip-estimator-controller";
import { siteConfig } from "@/lib/site";

type InlineCTAProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryAction?: "estimate" | "contact";
  secondaryLabel?: string;
  sectionClassName?: string;
  panelClassName?: string;
};

export function InlineCTA({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryAction = "estimate",
  secondaryLabel,
  sectionClassName = "section-band",
  panelClassName = ""
}: InlineCTAProps) {
  return (
    <section className={`${sectionClassName} py-8 md:py-10`}>
      <div className="container-shell">
        <div
          className={`glass-panel-strong grid gap-5 rounded-[32px] border border-sky/20 bg-white/90 px-6 py-6 shadow-[0_22px_60px_rgba(26,48,82,0.1)] sm:px-8 md:py-7 lg:grid-cols-[1fr,auto] lg:items-center ${panelClassName}`.trim()}
        >
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate sm:text-3xl">{title}</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate/80">{description}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => (primaryAction === "contact" ? openContactEvent() : openEstimatorEvent())}
              className="accent-button px-5 py-3"
            >
              {primaryLabel}
            </button>
            {secondaryLabel ? (
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="rounded-full border border-slate/12 bg-white px-5 py-3 text-center text-sm font-semibold text-slate shadow-soft"
              >
                {secondaryLabel}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
