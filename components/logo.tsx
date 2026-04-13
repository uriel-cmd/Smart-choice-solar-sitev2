"use client";

import Image from "next/image";
import Link from "next/link";

import { useLanguage } from "@/components/language-provider";
import { localizeHref } from "@/lib/i18n";

type LogoProps = {
  variant?: "desktop" | "mobile";
  compact?: boolean;
};

export function Logo({ variant = "desktop", compact = false }: LogoProps) {
  const { language } = useLanguage();

  const frameClassName =
    variant === "mobile"
      ? compact
        ? "relative h-11 w-[220px] overflow-hidden sm:h-12 sm:w-[250px]"
        : "relative h-14 w-[260px] overflow-hidden sm:h-16 sm:w-[320px]"
      : compact
        ? "relative h-8 w-[180px] overflow-hidden sm:h-10 sm:w-[290px] lg:h-[78px] lg:w-[560px]"
        : "relative h-8 w-[180px] overflow-hidden sm:h-10 sm:w-[290px] lg:h-[102px] lg:w-[700px]";
  const imageClassName =
    variant === "mobile"
      ? "object-contain object-center"
      : "object-contain object-left";

  return (
    <Link href={localizeHref("/", language)} className="inline-flex shrink-0 items-center" aria-label="Smart Choice Solar home">
      <div className={frameClassName}>
        <Image
          src="/brand/smart-choice-solar-logo-1200.png"
          alt="Smart Choice Solar"
          fill
          priority
          sizes={variant === "mobile" ? "260px" : "(max-width: 639px) 180px, (max-width: 1023px) 290px, 700px"}
          className={imageClassName}
        />
      </div>
    </Link>
  );
}
