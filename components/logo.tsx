"use client";

import Link from "next/link";

import { useLanguage } from "@/components/language-provider";
import { localizeHref } from "@/lib/i18n";

export function Logo() {
  const { language } = useLanguage();

  return (
    <Link href={localizeHref("/", language)} className="inline-flex shrink-0 items-center" aria-label="Smart Choice Solar home">
      <div className="relative h-8 w-[180px] overflow-hidden sm:h-10 sm:w-[290px] lg:h-[102px] lg:w-[700px]">
        <img
          src="/brand/smart-choice-solar-logo.svg"
          alt="Smart Choice Solar"
          className="absolute left-0 top-1/2 h-[96px] w-auto max-w-none -translate-y-1/2 sm:h-[132px] lg:h-[308px]"
        />
      </div>
    </Link>
  );
}
