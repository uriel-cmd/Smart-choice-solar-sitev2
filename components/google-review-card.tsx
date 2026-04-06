"use client";

import { useLanguage } from "@/components/language-provider";

type GoogleReviewCardProps = {
  name: string;
  timeAgo: string;
  rating: number;
  quote: string;
};

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts.map((part) => part[0]?.toUpperCase() ?? "").join("") || "S";
}

function GoogleBadge() {
  return (
    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white shadow-soft">
      <span className="bg-[conic-gradient(from_210deg,#4285F4_0deg,#4285F4_90deg,#34A853_90deg,#34A853_180deg,#FBBC05_180deg,#FBBC05_270deg,#EA4335_270deg,#EA4335_360deg)] bg-clip-text text-xl font-bold text-transparent">
        G
      </span>
    </div>
  );
}

function translateRelativeTime(timeAgo: string, language: "en" | "es") {
  if (language === "en") {
    return timeAgo;
  }

  if (timeAgo === "a month ago") {
    return "hace 1 mes";
  }

  const monthMatch = timeAgo.match(/^(\d+)\s+months?\s+ago$/i);
  if (monthMatch) {
    return `hace ${monthMatch[1]} ${monthMatch[1] === "1" ? "mes" : "meses"}`;
  }

  const yearMatch = timeAgo.match(/^(\d+)\s+years?\s+ago$/i);
  if (yearMatch) {
    return `hace ${yearMatch[1]} ${yearMatch[1] === "1" ? "año" : "años"}`;
  }

  return timeAgo;
}

export function GoogleReviewCard({ name, timeAgo, rating, quote }: GoogleReviewCardProps) {
  const { language } = useLanguage();

  return (
    <article className="glass-panel-strong rounded-[28px] border border-white/60 bg-white/94 p-6 shadow-[0_22px_60px_rgba(26,48,82,0.14)]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-slate text-xl font-semibold text-white">
            {getInitials(name)}
          </div>
          <div>
            <p className="text-xl font-semibold text-slate">{name}</p>
            <p className="text-sm text-slate/60">{translateRelativeTime(timeAgo, language)}</p>
          </div>
        </div>
        <GoogleBadge />
      </div>
      <div className="mt-4 text-xl leading-none text-sun">{Array.from({ length: rating }, () => "★").join(" ")}</div>
      <div className="mt-5 space-y-4">
        {quote.split("\n\n").map((paragraph) => (
          <p key={paragraph} className="text-base leading-8 text-slate/86">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}
