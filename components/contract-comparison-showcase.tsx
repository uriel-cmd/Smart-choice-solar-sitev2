"use client";

import { useTranslation } from "@/components/language-provider";
import { SectionHeading } from "@/components/section-heading";

export function ContractComparisonShowcase() {
  const t = useTranslation();

  return (
    <section className="section-band-compare py-8 pt-0 md:py-12">
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-[36px] border border-[#d7e8f2] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(241,248,252,0.94))] p-6 shadow-[0_24px_70px_rgba(26,48,82,0.12)] sm:p-8 lg:p-10">
          <div className="absolute inset-x-0 top-0 h-2 bg-[linear-gradient(90deg,#e2a13a_0%,#8fcbe7_38%,#1a3052_100%)]" />
          <div className="absolute inset-y-0 left-0 w-24 bg-[linear-gradient(90deg,rgba(226,161,58,0.12),transparent)]" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.25)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.25)_50%,rgba(255,255,255,0.25)_75%,transparent_75%,transparent)] bg-[length:24px_24px] opacity-[0.06]" />
          <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow={t.comparison.eyebrow}
                title={t.comparison.title}
                description={t.comparison.description}
              />
              <div className="mt-8 grid gap-3">
                <div className="rounded-[22px] border border-line bg-white/85 px-4 py-4 text-sm leading-7 text-slate/80">
                  {t.comparison.point1}
                </div>
                <div className="rounded-[22px] border border-line bg-white/85 px-4 py-4 text-sm leading-7 text-slate/80">
                  {t.comparison.point2}
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[34px] border border-sky/20 bg-[linear-gradient(180deg,#eef6fb_0%,#dcecf7_100%)] p-4 shadow-[0_28px_80px_rgba(26,48,82,0.16)] sm:p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.78),transparent_34%),radial-gradient(circle_at_90%_20%,rgba(143,203,231,0.2),transparent_24%)]" />
              <svg viewBox="0 0 960 680" className="relative h-auto w-full" role="img" aria-label="Two contracts side by side with a magnifying glass moving across them for comparison">
                <defs>
                  <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="10" result="blur" />
                    <feOffset dy="6" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <rect x="0" y="0" width="960" height="680" rx="28" fill="transparent" />

                <g filter="url(#shadow)">
                  <g transform="translate(102 96)">
                    <rect width="310" height="454" rx="28" fill="#FFFFFF" />
                    <path d="M242 0H310V68L242 0Z" fill="#EAF4FA" />
                    <rect x="30" y="28" width="84" height="24" rx="12" fill="#1A3052" fillOpacity="0.08" />
                    <rect x="30" y="76" width="188" height="22" rx="11" fill="#1A3052" fillOpacity="0.12" />
                    <rect x="30" y="108" width="164" height="14" rx="7" fill="#1A3052" fillOpacity="0.08" />
                    <rect x="30" y="136" width="208" height="14" rx="7" fill="#1A3052" fillOpacity="0.08" />
                    <rect x="30" y="178" width="250" height="104" rx="24" fill="#F5FAFD" stroke="#D6E6F1" strokeWidth="3" />
                    <rect x="50" y="202" width="104" height="16" rx="8" fill="#8FCBE7" />
                    <rect x="50" y="232" width="182" height="12" rx="6" fill="#1A3052" fillOpacity="0.12" />
                    <rect x="50" y="256" width="146" height="12" rx="6" fill="#1A3052" fillOpacity="0.12" />
                    <rect x="30" y="314" width="224" height="16" rx="8" fill="#1A3052" fillOpacity="0.08" />
                    <rect x="30" y="344" width="188" height="16" rx="8" fill="#1A3052" fillOpacity="0.08" />
                    <rect x="30" y="374" width="232" height="16" rx="8" fill="#1A3052" fillOpacity="0.08" />
                    <rect x="30" y="418" width="116" height="34" rx="17" fill="#E2A13A" fillOpacity="0.92" />
                  </g>

                  <g transform="translate(548 96)">
                    <rect width="310" height="454" rx="28" fill="#FFFFFF" />
                    <path d="M242 0H310V68L242 0Z" fill="#EAF4FA" />
                    <rect x="30" y="28" width="96" height="24" rx="12" fill="#1A3052" fillOpacity="0.08" />
                    <rect x="30" y="76" width="204" height="22" rx="11" fill="#1A3052" fillOpacity="0.12" />
                    <rect x="30" y="108" width="178" height="14" rx="7" fill="#1A3052" fillOpacity="0.08" />
                    <rect x="30" y="136" width="224" height="14" rx="7" fill="#1A3052" fillOpacity="0.08" />
                    <rect x="30" y="178" width="250" height="104" rx="24" fill="#F5FAFD" stroke="#D6E6F1" strokeWidth="3" />
                    <rect x="50" y="202" width="122" height="16" rx="8" fill="#8FCBE7" />
                    <rect x="50" y="232" width="196" height="12" rx="6" fill="#1A3052" fillOpacity="0.12" />
                    <rect x="50" y="256" width="158" height="12" rx="6" fill="#1A3052" fillOpacity="0.12" />
                    <rect x="30" y="314" width="206" height="16" rx="8" fill="#1A3052" fillOpacity="0.08" />
                    <rect x="30" y="344" width="238" height="16" rx="8" fill="#1A3052" fillOpacity="0.08" />
                    <rect x="30" y="374" width="182" height="16" rx="8" fill="#1A3052" fillOpacity="0.08" />
                    <rect x="164" y="418" width="116" height="34" rx="17" fill="#8FCBE7" fillOpacity="0.98" />
                  </g>
                </g>

                <g opacity="0.78">
                  <path d="M418 180H542" stroke="#8FCBE7" strokeWidth="7" strokeLinecap="round" strokeDasharray="14 14">
                    <animate attributeName="stroke-dashoffset" values="0;-56" dur="1.15s" repeatCount="indefinite" />
                  </path>
                  <path d="M418 284H542" stroke="#8FCBE7" strokeWidth="7" strokeLinecap="round" strokeDasharray="14 14">
                    <animate attributeName="stroke-dashoffset" values="0;-56" dur="1.15s" repeatCount="indefinite" />
                  </path>
                  <path d="M418 388H542" stroke="#8FCBE7" strokeWidth="7" strokeLinecap="round" strokeDasharray="14 14">
                    <animate attributeName="stroke-dashoffset" values="0;-56" dur="1.15s" repeatCount="indefinite" />
                  </path>
                </g>

                <g>
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="-92 0;72 0;-92 0"
                    dur="6.6s"
                    repeatCount="indefinite"
                  />
                  <g transform="translate(348 226)">
                    <circle cx="130" cy="108" r="96" fill="#FFFFFF" fillOpacity="0.28" />
                    <circle cx="130" cy="108" r="78" fill="#FFFFFF" fillOpacity="0.42" />
                    <circle cx="130" cy="108" r="66" fill="none" stroke="#1A3052" strokeWidth="16" />
                    <circle cx="130" cy="108" r="52" fill="#8FCBE7" fillOpacity="0.22" />
                    <path d="M178 156L256 234" stroke="#1A3052" strokeWidth="20" strokeLinecap="round" />
                    <rect x="98" y="68" width="66" height="18" rx="9" fill="#FFFFFF" fillOpacity="0.84" />
                    <rect x="88" y="100" width="84" height="12" rx="6" fill="#1A3052" fillOpacity="0.18" />
                    <rect x="96" y="126" width="70" height="12" rx="6" fill="#1A3052" fillOpacity="0.18" />
                    <path d="M104 86H158" stroke="#1A3052" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 7">
                      <animate attributeName="stroke-dashoffset" values="0;-30" dur="1s" repeatCount="indefinite" />
                    </path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
