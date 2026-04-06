"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { useLanguage, useTranslation } from "@/components/language-provider";
import { localizeHref } from "@/lib/i18n";
import { openEstimatorEvent } from "@/components/zip-estimator-controller";

const billOptions = [150, 250, 350, 500];

export function EstimateCalculator() {
  const { language } = useLanguage();
  const t = useTranslation();
  const [monthlyBill, setMonthlyBill] = useState(250);
  const [roofStatus, setRoofStatus] = useState("good");
  const [backupPriority, setBackupPriority] = useState("backup");

  const estimate = useMemo(() => {
    const baseSavings = Math.round(monthlyBill * 0.42);
    const low = Math.round(baseSavings * 0.8);
    const high = Math.round(baseSavings * 1.15);

    const recommendation =
      roofStatus === "soon" ? "Solar + battery + roof" : "Solar + battery";

    return { low, high, recommendation };
  }, [backupPriority, monthlyBill, roofStatus]);

  return (
    <section className="section-band-dark py-8 pt-0 md:py-12">
      <div className="container-shell">
        <div className="glass-panel-strong overflow-hidden rounded-[36px] border border-white/60 bg-white/92 p-6 shadow-[0_28px_80px_rgba(26,48,82,0.16)] sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.92fr,1.08fr] lg:items-start">
            <div>
              <span className="eyebrow">{t.estimateCalculator.eyebrow}</span>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate sm:text-4xl">
                {t.estimateCalculator.title}
              </h2>
              <div className="mt-6 grid gap-3">
                {[t.estimateCalculator.benefit1, t.estimateCalculator.benefit2, t.estimateCalculator.benefit3].map((benefit) => (
                  <div key={benefit} className="rounded-[20px] border border-line bg-white/85 px-4 py-4 text-sm leading-7 text-slate/80">
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[30px] bg-ink p-5 text-white shadow-soft sm:p-6">
              <div className="grid gap-5">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                    {t.estimateCalculator.monthlyBill}
                  </label>
                  <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {billOptions.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => setMonthlyBill(amount)}
                        className={`rounded-[18px] px-3 py-3 text-sm font-semibold transition ${
                          monthlyBill === amount ? "bg-white text-ink" : "bg-white/10 text-white"
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                    {t.estimateCalculator.roofStatus}
                  </label>
                  <select
                    value={roofStatus}
                    onChange={(event) => setRoofStatus(event.target.value)}
                    className="mt-3 w-full rounded-[18px] border border-white/15 bg-white/10 px-4 py-3 text-sm text-white outline-none"
                  >
                    <option value="good" className="text-ink">{t.estimateCalculator.roofGood}</option>
                    <option value="soon" className="text-ink">{t.estimateCalculator.roofSoon}</option>
                    <option value="unsure" className="text-ink">{t.estimateCalculator.roofUnsure}</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                    {t.estimateCalculator.backupInterest}
                  </label>
                  <select
                    value={backupPriority}
                    onChange={(event) => setBackupPriority(event.target.value)}
                    className="mt-3 w-full rounded-[18px] border border-white/15 bg-white/10 px-4 py-3 text-sm text-white outline-none"
                  >
                    <option value="backup" className="text-ink">{t.estimateCalculator.backupYes}</option>
                    <option value="savings" className="text-ink">{t.estimateCalculator.backupSavings}</option>
                    <option value="comparing" className="text-ink">{t.estimateCalculator.backupComparing}</option>
                  </select>
                </div>
                <div className="rounded-[24px] bg-white p-5 text-ink">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate/70">{t.estimateCalculator.range}</p>
                  <p className="mt-3 text-3xl font-semibold">
                    ${estimate.low} - ${estimate.high} {language === "en" ? "/ month" : "/ mes"}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate/80">
                    {t.estimateCalculator.rangeBody}
                  </p>
                  <div className="mt-4 rounded-[18px] border border-line bg-cloud px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate/70">{t.estimateCalculator.path}</p>
                    <p className="mt-1 text-base font-semibold text-slate">
                      {language === "en" ? estimate.recommendation : estimate.recommendation === "Solar + battery + roof" ? "Solar + batería + techo" : "Solar + batería"}
                    </p>
                  </div>
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={() => openEstimatorEvent()}
                      className="accent-button px-5 py-3"
                    >
                      {t.estimateCalculator.fullEstimate}
                    </button>
                    <Link
                      href={localizeHref("/service-areas", language)}
                      className="rounded-full border border-line px-5 py-3 text-center text-sm font-semibold text-ink"
                    >
                      {t.estimateCalculator.checkArea}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
