"use client";

import Link from "next/link";
import { useState } from "react";

import { useLanguage, useTranslation } from "@/components/language-provider";
import { Logo } from "@/components/logo";
import { openContactEvent } from "@/components/zip-estimator-controller";
import { localizeHref } from "@/lib/i18n";
import { primaryNav, serviceNav, siteConfig } from "@/lib/site";
import { navLabelFor, serviceNavLabelFor } from "@/lib/translations";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = useTranslation();

  return (
    <header className="sticky top-0 z-50 border-b border-slate/10 bg-white/92 backdrop-blur-xl">
      <div className="border-b border-white/10 bg-slate text-white">
        <div className="relative flex min-h-8 items-center justify-center px-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80 sm:min-h-9 sm:text-[11px] lg:min-h-11 lg:text-xs lg:tracking-[0.22em]">
          <p>{t.header.topStrip}</p>
          <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 lg:block">
            <label className="sr-only" htmlFor="desktop-language-select">
              {t.header.language}
            </label>
            <div className="flex items-center gap-2 rounded-full border border-white/18 bg-white/8 px-3 py-1.5 backdrop-blur-sm">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/72">{t.header.language}</span>
              <select
                id="desktop-language-select"
                value={language}
                onChange={(event) => setLanguage(event.target.value as "en" | "es")}
                className="bg-transparent text-[11px] font-semibold uppercase tracking-[0.18em] text-white outline-none"
              >
                <option value="en" className="text-slate">
                  EN
                </option>
                <option value="es" className="text-slate">
                  ES
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="flex min-h-20 w-full items-center gap-3 px-4 sm:gap-4 sm:px-6 lg:min-h-32 lg:gap-8 lg:px-8 xl:px-10 2xl:px-12">
        <div className="shrink-0">
          <Logo />
        </div>
        <nav className="hidden flex-1 items-center justify-center gap-6 whitespace-nowrap lg:flex xl:gap-8 2xl:gap-10">
          {primaryNav.map((item) => (
            <Link key={item.href} href={localizeHref(item.href, language)} className="text-base font-semibold text-slate transition hover:text-ink xl:text-[17px]">
              {navLabelFor(item.href, language)}
            </Link>
          ))}
        </nav>
        <div className="ml-auto hidden shrink-0 items-center gap-4 lg:flex">
          <button
            type="button"
            onClick={() => openContactEvent()}
            className="rounded-full bg-[linear-gradient(180deg,#73b5da_0%,#4d8fbb_100%)] px-9 py-4 text-base font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_14px_32px_rgba(77,143,187,0.3)] transition hover:brightness-95 xl:px-12 xl:py-5 xl:text-[17px]"
          >
            {t.header.getInTouch}
          </button>
          <a
            href={`tel:${siteConfig.phoneHref}`}
            className="rounded-full border border-slate/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(244,248,252,0.92))] px-9 py-4 text-base font-semibold text-slate shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] transition hover:border-slate/30 hover:bg-white xl:px-12 xl:py-5 xl:text-[17px]"
          >
            {t.header.call} {siteConfig.phoneDisplay}
          </a>
        </div>
        <button
          type="button"
          className="inline-flex rounded-full border border-line px-4 py-2 text-sm font-semibold text-ink lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {t.header.menu}
        </button>
      </div>
      {open ? (
        <div id="mobile-nav" className="border-t border-line bg-white lg:hidden">
          <div className="container-shell flex flex-col gap-2 py-4">
            <div className="rounded-[24px] border border-sky/20 bg-cloud px-4 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate/70">{t.header.popularPaths}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {serviceNav.map((item) => (
                  <Link
                    key={item.href}
                    href={localizeHref(item.href, language)}
                    className="rounded-full border border-line bg-white px-3 py-2 text-xs font-semibold text-ink"
                    onClick={() => setOpen(false)}
                  >
                    {serviceNavLabelFor(item.href, language)}
                  </Link>
                ))}
              </div>
            </div>
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={localizeHref(item.href, language)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate transition hover:bg-cloud hover:text-ink"
                onClick={() => setOpen(false)}
              >
                {navLabelFor(item.href, language)}
              </Link>
            ))}
            <div className="mt-2 rounded-[24px] border border-sky/20 bg-cloud px-4 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate/70">{t.header.language}</p>
              <label className="sr-only" htmlFor="mobile-language-select">
                {t.header.language}
              </label>
              <select
                id="mobile-language-select"
                value={language}
                onChange={(event) => setLanguage(event.target.value as "en" | "es")}
                className="mt-3 w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm font-medium text-slate outline-none transition focus:border-sky"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>
            </div>
            <button
              type="button"
              className="accent-button mt-2 rounded-2xl px-4 py-3"
              onClick={() => {
                setOpen(false);
                openContactEvent();
              }}
            >
              {t.header.getInTouch}
            </button>
          </div>
        </div>
      ) : null}
      <div className="hidden border-t border-slate/8 bg-slate/[0.03] lg:block">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 flex min-h-12 items-center gap-3 overflow-x-auto text-xs font-semibold uppercase tracking-[0.18em] text-slate/70">
          <span className="shrink-0 text-slate/55">{t.nav.exploreServices}</span>
          {serviceNav.map((item) => (
            <Link
              key={item.href}
              href={localizeHref(item.href, language)}
              className="shrink-0 rounded-full border border-transparent px-3 py-2 transition hover:border-sky/30 hover:bg-white hover:text-ink"
            >
              {serviceNavLabelFor(item.href, language)}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
