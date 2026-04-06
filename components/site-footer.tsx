"use client";

import Image from "next/image";
import Link from "next/link";

import { useLanguage, useTranslation } from "@/components/language-provider";
import { localizeHref } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" }
];

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/reviews", label: "Reviews" },
  { href: "/blog", label: "Resources" },
  { href: "/contact", label: "Free Assessment" }
];

function SocialIcon({ type }: { type: "facebook" | "instagram" | "linkedin" | "yelp" }) {
  if (type === "facebook") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          d="M13.5 21v-7.2h2.5l.4-2.9h-2.9V9.1c0-.8.2-1.4 1.4-1.4H16V5.1c-.2 0-.9-.1-1.8-.1-1.8 0-3 .9-3 3.3v2.6H8.8v2.9h2.4V21h2.3Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (type === "instagram") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <rect x="4.5" y="4.5" width="15" height="15" rx="4.2" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
      </svg>
    );
  }

  if (type === "yelp") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          d="M11.2 3.3c-.6 0-1 .4-1.1 1l-.8 5.2c-.1.5.2 1 .7 1.2l2.1.7c.5.2 1.1-.1 1.2-.7l.8-5.1c.1-.6-.2-1.1-.8-1.3l-1-.7c-.3-.2-.7-.3-1.1-.3Zm5.4 3.9c-.2 0-.4.1-.6.2l-3.8 2.7c-.4.3-.6.9-.3 1.4l1 1.9c.3.5.9.7 1.4.4l4.8-1.8c.5-.2.8-.8.6-1.4l-.5-1.2c-.3-.7-1.3-1.4-2.6-2Zm-12 4.3c-.8 0-1.6.3-2 .8l-.8 1c-.4.5-.3 1.1.1 1.5l4 3.3c.4.4 1 .3 1.4-.1l1.4-1.6c.4-.4.3-1.1-.2-1.4L5.8 12c-.3-.3-.7-.5-1.2-.5Zm14.2 2.1c-.2 0-.4 0-.6.1l-5 1c-.5.1-.9.7-.8 1.3l.3 2.1c.1.6.6 1 1.2 1l5.1-.1c.6 0 1-.5 1.1-1.1l.1-1.3c.1-1-.5-2.3-1.4-3Zm-9.4 4.7c-.4 0-.8.2-1 .5l-3 4.1c-.3.5-.2 1.1.3 1.4l1.1.7c.6.4 2 .4 2.9-.1l1.1-.6c.5-.3.7-.9.5-1.4L10.6 19c-.2-.4-.6-.7-1.2-.7Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        d="M7.4 8.8h3v10.1h-3V8.8Zm1.5-4.7a1.8 1.8 0 1 1 0 3.6a1.8 1.8 0 0 1 0-3.6ZM12.5 8.8h2.8v1.4h.1c.4-.8 1.4-1.7 3-1.7c3.2 0 3.8 2.1 3.8 4.9v5.5h-3v-4.9c0-1.2 0-2.7-1.7-2.7c-1.7 0-1.9 1.3-1.9 2.6v5h-3V8.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function SiteFooter() {
  const { language } = useLanguage();
  const t = useTranslation();

  return (
    <footer className="border-t border-[#36587f] bg-[radial-gradient(circle_at_top_left,rgba(143,203,231,0.16),transparent_24%),radial-gradient(circle_at_88%_18%,rgba(226,161,58,0.12),transparent_18%),linear-gradient(160deg,#3f3f40_0%,#2f3033_100%)] text-white">
      <div className="container-shell py-14 md:py-16">
        <div className="grid gap-10 border-b border-white/16 pb-12 lg:grid-cols-[1.25fr,1fr,0.9fr,0.9fr,0.8fr] lg:items-start lg:gap-x-8">
          <div className="space-y-6 lg:-mr-[28rem] xl:-mr-[36rem]">
            <div className="relative h-[308px] w-[894px] max-w-full sm:h-[351px] sm:w-[1015px]">
              <Image
                src="/brand/smart-choice-solar-logo-dark.svg"
                alt={`${siteConfig.name} logo`}
                fill
                className="object-contain object-left"
                sizes="(min-width: 640px) 1015px, 894px"
              />
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-white">{t.footer.popularLocations}</h2>
            <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-5 text-[15px] text-white/80 lg:grid-cols-2">
              {siteConfig.serviceAreas.slice(0, 8).map((area) => (
                <p key={area}>{area}</p>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-white">{t.footer.contactUs}</h2>
            <div className="mt-6 space-y-4 text-[15px] leading-7 text-white/80">
              <p>
                {siteConfig.address.streetAddress}
                <br />
                {siteConfig.address.addressLocality}, {siteConfig.address.addressRegion} {siteConfig.address.postalCode}
              </p>
              <p>
                <a href={`tel:${siteConfig.phoneHref}`} className="transition hover:text-white">
                  {siteConfig.phoneDisplay}
                </a>
              </p>
              <p>
                <a href={`mailto:${siteConfig.email}`} className="transition hover:text-white">
                  {siteConfig.email}
                </a>
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-white">{t.footer.aboutUs}</h2>
            <div className="mt-6 grid gap-4 text-[15px] text-white/80">
              {companyLinks.map((item) => (
                <Link key={item.href} href={localizeHref(item.href, language)} className="transition hover:text-white">
                  {item.href === "/about"
                    ? t.nav.about
                    : item.href === "/reviews"
                      ? t.footer.reviews
                      : item.href === "/blog"
                        ? t.footer.resources
                        : t.footer.freeAssessment}
                </Link>
              ))}
              {legalLinks.map((item) => (
                <Link key={item.href} href={localizeHref(item.href, language)} className="transition hover:text-white">
                  {item.href === "/privacy-policy" ? t.footer.privacyPolicy : t.footer.terms}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2px] border border-white/14 bg-white/8 px-5 py-4 text-[15px] text-white/62 backdrop-blur-sm">
              {t.footer.search}
            </div>
            <div className="flex items-center gap-4">
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#3f3f40] transition hover:scale-105"
              >
                <SocialIcon type="facebook" />
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#3f3f40] transition hover:scale-105"
              >
                <SocialIcon type="instagram" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#3f3f40] transition hover:scale-105"
              >
                <SocialIcon type="linkedin" />
              </a>
              <a
                href="https://www.yelp.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Yelp"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#3f3f40] transition hover:scale-105"
              >
                <SocialIcon type="yelp" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 py-5 text-center text-sm text-white/68 md:flex-row md:gap-6">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {legalLinks.map((item) => (
              <Link key={item.href} href={localizeHref(item.href, language)} className="transition hover:text-white">
                {item.href === "/privacy-policy" ? t.footer.privacyPolicy : t.footer.terms}
              </Link>
            ))}
          </div>
          <p>© {new Date().getFullYear()} {siteConfig.legalName}. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
