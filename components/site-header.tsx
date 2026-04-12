"use client";

import Link from "next/link";
import { useState } from "react";

import { useLanguage, useTranslation } from "@/components/language-provider";
import { Logo } from "@/components/logo";
import { openContactEvent } from "@/components/zip-estimator-controller";
import { localizeHref } from "@/lib/i18n";
import { primaryNav, serviceNav, siteConfig } from "@/lib/site";
import { navLabelFor, serviceNavLabelFor } from "@/lib/translations";

function BottomNavIcon({ icon }: { icon: "home" | "reviews" | "sun" | "phone" | "menu" }) {
  const commonProps = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true
  };

  if (icon === "home") {
    return (
      <svg {...commonProps}>
        <path d="M4 11.3 12 5l8 6.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.5 10.5V19h11v-8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 19v-5h4v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (icon === "reviews") {
    return (
      <svg {...commonProps}>
        <path d="m12 4.6 2.1 4.2 4.7.7-3.4 3.3.8 4.7-4.2-2.2-4.2 2.2.8-4.7-3.4-3.3 4.7-.7L12 4.6Z" fill="currentColor" />
      </svg>
    );
  }

  if (icon === "sun") {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="4.2" fill="currentColor" />
        <path d="M12 2.8v2.1M12 19.1v2.1M4.1 4.1l1.5 1.5M18.4 18.4l1.5 1.5M2.8 12h2.1M19.1 12h2.1M4.1 19.9l1.5-1.5M18.4 5.6l1.5-1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "phone") {
    return (
      <svg {...commonProps}>
        <path d="M8.1 4.2 10 8.4 8.6 9.7c1 2.1 2.6 3.8 4.8 4.8l1.4-1.4 4.1 1.9-.7 3.4c-.2.9-1 1.5-2 1.4C9.4 19.2 4.8 14.6 4.2 7.8c-.1-.9.5-1.8 1.4-2l2.5-.6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = useTranslation();

  return (
    <header className="sticky top-0 z-50 border-b border-slate/10 bg-white lg:bg-white/92 lg:backdrop-blur-xl">
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
      <div className="flex w-full flex-col items-center gap-3 px-4 py-4 lg:hidden">
        <Logo variant="mobile" />
        <div className="grid w-full max-w-sm grid-cols-2 gap-3">
          <a
            href={`tel:${siteConfig.phoneHref}`}
            aria-label={`${t.header.call} ${siteConfig.phoneDisplay}`}
            className="rounded-full border border-slate/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(239,247,252,0.94))] px-4 py-3 text-center text-sm font-semibold text-slate shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]"
          >
            {t.header.call} {siteConfig.phoneDisplay}
          </a>
          <button
            type="button"
            onClick={() => openContactEvent()}
            aria-label={t.header.getInTouch}
            className="rounded-full bg-[linear-gradient(180deg,#73b5da_0%,#4d8fbb_100%)] px-4 py-3 text-center text-sm font-semibold text-white shadow-[0_14px_30px_rgba(77,143,187,0.26)]"
          >
            {t.header.getInTouch}
          </button>
        </div>
      </div>
      <div className="hidden min-h-32 w-full items-center gap-8 px-8 lg:flex xl:px-10 2xl:px-12">
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
            aria-label={t.header.getInTouch}
            className="rounded-full bg-[linear-gradient(180deg,#73b5da_0%,#4d8fbb_100%)] px-9 py-4 text-base font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_14px_32px_rgba(77,143,187,0.3)] transition hover:brightness-95 xl:px-12 xl:py-5 xl:text-[17px]"
          >
            {t.header.getInTouch}
          </button>
          <a
            href={`tel:${siteConfig.phoneHref}`}
            aria-label={`${t.header.call} ${siteConfig.phoneDisplay}`}
            className="rounded-full border border-slate/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(244,248,252,0.92))] px-9 py-4 text-base font-semibold text-slate shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] transition hover:border-slate/30 hover:bg-white xl:px-12 xl:py-5 xl:text-[17px]"
          >
            {t.header.call} {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>
      {open ? (
        <div id="mobile-nav" className="fixed inset-x-0 bottom-[72px] z-[60] border-t border-line bg-white shadow-[0_-18px_50px_rgba(26,48,82,0.16)] lg:hidden">
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
      <nav className="fixed inset-x-0 bottom-0 z-[100] border-t border-slate/10 bg-white shadow-[0_-12px_36px_rgba(26,48,82,0.12)] lg:hidden">
        <div className="grid min-h-[72px] grid-cols-5 items-center px-2 pb-[env(safe-area-inset-bottom)] text-[11px] font-semibold text-slate/72">
          <Link href={localizeHref("/", language)} className="flex flex-col items-center gap-1 text-slate" onClick={() => setOpen(false)}>
            <BottomNavIcon icon="home" />
            <span>{t.nav.home}</span>
          </Link>
          <Link href={localizeHref("/reviews", language)} className="flex flex-col items-center gap-1" onClick={() => setOpen(false)}>
            <BottomNavIcon icon="reviews" />
            <span>{t.nav.reviews}</span>
          </Link>
          <Link href={localizeHref("/solutions", language)} className="flex flex-col items-center gap-1" onClick={() => setOpen(false)}>
            <span className="text-sun">
              <BottomNavIcon icon="sun" />
            </span>
            <span>{t.nav.solutions}</span>
          </Link>
          <a href={`tel:${siteConfig.phoneHref}`} aria-label={`${t.header.call} ${siteConfig.phoneDisplay}`} className="flex flex-col items-center gap-1">
            <BottomNavIcon icon="phone" />
            <span>{t.header.call}</span>
          </a>
          <button
            type="button"
            className="flex flex-col items-center gap-1"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={t.header.menu}
          >
            <BottomNavIcon icon="menu" />
            <span>{t.header.menu}</span>
          </button>
        </div>
      </nav>
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
