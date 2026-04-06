"use client";

import Link from "next/link";

import { useLanguage, useTranslation } from "@/components/language-provider";
import { GoogleReviewsList } from "@/components/google-reviews-list";
import { openContactEvent } from "@/components/zip-estimator-controller";
import { localizeHref } from "@/lib/i18n";

export function ReviewsShowcase() {
  const { language } = useLanguage();
  const t = useTranslation();
  const stats =
    t.reviews.eyebrow === "Reputación y Reseñas"
      ? [
          { value: "5/5", label: "Calificación promedio de propietarios" },
          { value: "1,000+", label: "Consultas y propuestas guiadas" },
          { value: "3 oficios clave", label: "Solar, almacenamiento y techado bajo una sola estrategia" }
        ]
      : [
          { value: "5/5", label: "Average homeowner rating" },
          { value: "1,000+", label: "Consultations and proposals guided" },
          { value: "3 core trades", label: "Solar, storage, and roofing under one strategy" }
        ];

  return (
    <section className="section-band-dark section-space pt-0">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr]">
          <div className="glass-panel-strong rounded-[34px] border border-white/60 bg-white/94 p-7 shadow-[0_24px_70px_rgba(26,48,82,0.16)] sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate/70">{t.reviews.eyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate sm:text-4xl">
              {t.reviews.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-slate/80">
              {t.reviews.description}
            </p>
            <div className="mt-6 grid gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-[20px] border border-line bg-white/85 px-4 py-4">
                  <p className="text-2xl font-semibold text-slate">{stat.value}</p>
                  <p className="mt-1 text-sm leading-6 text-slate/75">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href={localizeHref("/reviews", language)} className="accent-button px-5 py-3">
                {t.reviews.readAll}
              </Link>
              <button
                type="button"
                onClick={() => openContactEvent()}
                className="rounded-full border border-line bg-white px-5 py-3 text-center text-sm font-semibold text-ink"
              >
                {t.reviews.startAssessment}
              </button>
            </div>
          </div>
          <GoogleReviewsList />
        </div>
      </div>
    </section>
  );
}
