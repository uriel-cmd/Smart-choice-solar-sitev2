"use client";

import Link from "next/link";

import { useLanguage } from "@/components/language-provider";
import { localizeHref } from "@/lib/i18n";

type LogoProps = {
  variant?: "desktop" | "mobile";
};

export function Logo({ variant = "desktop" }: LogoProps) {
  const { language } = useLanguage();

  const frameClassName =
    variant === "mobile"
      ? "relative h-14 w-[260px] sm:h-16 sm:w-[320px]"
      : "relative h-8 w-[180px] overflow-hidden sm:h-10 sm:w-[290px] lg:h-[102px] lg:w-[700px]";
  const imageClassName =
    variant === "mobile"
      ? "h-full w-full object-contain"
      : "absolute left-0 top-1/2 h-[96px] w-auto max-w-none -translate-y-1/2 sm:h-[132px] lg:h-[308px]";

  return (
    <Link href={localizeHref("/", language)} className="inline-flex shrink-0 items-center" aria-label="Smart Choice Solar home">
      <div className={frameClassName}>
        <img
          src="/brand/smart-choice-solar-logo.svg"
          alt="Smart Choice Solar"
          className={imageClassName}
        />
      </div>
    </Link>
  );
}
