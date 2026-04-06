"use client";

import { useTranslation } from "@/components/language-provider";
import { SectionHeading } from "@/components/section-heading";

export function EnergyFlowShowcase() {
  const t = useTranslation();

  return (
    <section className="section-band-soft py-8 pt-0 md:py-12">
      <div className="container-shell">
        <div className="glass-panel-strong overflow-hidden rounded-[36px] border border-sky/20 bg-white/92 p-6 shadow-[0_24px_70px_rgba(26,48,82,0.12)] sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow={t.energyFlow.eyebrow}
                title={t.energyFlow.title}
                description={t.energyFlow.description}
              />
              <div className="mt-8 grid gap-3">
                <div className="rounded-[22px] border border-line bg-white/85 px-4 py-4 text-sm leading-7 text-slate/80">
                  {t.energyFlow.point1}
                </div>
                <div className="rounded-[22px] border border-line bg-white/85 px-4 py-4 text-sm leading-7 text-slate/80">
                  {t.energyFlow.point2}
                </div>
                <div className="rounded-[22px] border border-line bg-white/85 px-4 py-4 text-sm leading-7 text-slate/80">
                  {t.energyFlow.point3}
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[34px] border border-sky/20 bg-[linear-gradient(180deg,#cfe6f3_0%,#eaf4fa_45%,#183252_100%)] p-4 shadow-[0_28px_80px_rgba(26,48,82,0.18)] sm:p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.55),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(143,203,231,0.18),transparent_30%)]" />
              <svg viewBox="0 0 960 720" className="relative h-auto w-full" role="img" aria-label="Animated diagram of solar powering a home, charging a battery, and running the home at night">
                <defs>
                  <linearGradient id="flowSky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#dcedf8" />
                    <stop offset="50%" stopColor="#eff7fc" />
                    <stop offset="100%" stopColor="#183252" />
                  </linearGradient>
                  <linearGradient id="panelFlow" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#8FCBE7" />
                    <stop offset="100%" stopColor="#E2A13A" />
                  </linearGradient>
                  <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="10" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <rect x="0" y="0" width="960" height="720" rx="28" fill="url(#flowSky)" />

                <g>
                  <circle cx="150" cy="132" r="54" fill="#E2A13A" filter="url(#softGlow)">
                    <animate attributeName="opacity" values="1;1;1;0.18;0.18;1" dur="10s" repeatCount="indefinite" />
                  </circle>
                  <g stroke="#E2A13A" strokeWidth="8" strokeLinecap="round">
                    <path d="M150 42V18">
                      <animate attributeName="opacity" values="1;1;1;0.12;0.12;1" dur="10s" repeatCount="indefinite" />
                    </path>
                    <path d="M212 68L230 50">
                      <animate attributeName="opacity" values="1;1;1;0.12;0.12;1" dur="10s" repeatCount="indefinite" />
                    </path>
                    <path d="M238 132H262">
                      <animate attributeName="opacity" values="1;1;1;0.12;0.12;1" dur="10s" repeatCount="indefinite" />
                    </path>
                    <path d="M212 196L230 214">
                      <animate attributeName="opacity" values="1;1;1;0.12;0.12;1" dur="10s" repeatCount="indefinite" />
                    </path>
                    <path d="M150 222V246">
                      <animate attributeName="opacity" values="1;1;1;0.12;0.12;1" dur="10s" repeatCount="indefinite" />
                    </path>
                    <path d="M88 196L70 214">
                      <animate attributeName="opacity" values="1;1;1;0.12;0.12;1" dur="10s" repeatCount="indefinite" />
                    </path>
                    <path d="M62 132H38">
                      <animate attributeName="opacity" values="1;1;1;0.12;0.12;1" dur="10s" repeatCount="indefinite" />
                    </path>
                  </g>
                  <path d="M740 122C740 80 774 46 816 46C829 46 842 49 853 55C840 33 816 18 788 18C747 18 714 51 714 92C714 126 738 154 770 163C751 149 740 127 740 122Z" fill="#F7FBFE">
                    <animate attributeName="opacity" values="0.12;0.12;0.12;0.95;0.95;0.12" dur="10s" repeatCount="indefinite" />
                  </path>
                </g>

                <g transform="translate(150 250)">
                  <path d="M62 178L290 18C309 4 335 4 354 18L582 178V352H62V178Z" fill="#234A77" />
                  <path d="M118 176L323 38L528 176H118Z" fill="#1A3052" />
                  <rect x="152" y="176" width="342" height="176" rx="20" fill="#F7FBFE" />
                  <rect x="292" y="242" width="74" height="110" rx="14" fill="#8FCBE7" />
                  <rect x="182" y="214" width="72" height="72" rx="14" fill="#dcecf8" />
                  <rect x="392" y="214" width="72" height="72" rx="14" fill="#dcecf8" />
                  <g transform="translate(118 126)">
                    <rect width="410" height="42" rx="10" fill="#10233F" />
                    <g fill="#8FCBE7">
                      <rect x="18" y="9" width="76" height="24" rx="4">
                        <animate attributeName="fill-opacity" values="0.55;1;0.55" dur="2.4s" begin="0s" repeatCount="indefinite" />
                      </rect>
                      <rect x="102" y="9" width="76" height="24" rx="4">
                        <animate attributeName="fill-opacity" values="0.55;1;0.55" dur="2.4s" begin="0.3s" repeatCount="indefinite" />
                      </rect>
                      <rect x="186" y="9" width="76" height="24" rx="4">
                        <animate attributeName="fill-opacity" values="0.55;1;0.55" dur="2.4s" begin="0.6s" repeatCount="indefinite" />
                      </rect>
                      <rect x="270" y="9" width="76" height="24" rx="4">
                        <animate attributeName="fill-opacity" values="0.55;1;0.55" dur="2.4s" begin="0.9s" repeatCount="indefinite" />
                      </rect>
                    </g>
                  </g>
                </g>

                <g transform="translate(702 338)">
                  <rect width="136" height="188" rx="24" fill="#17314F" />
                  <rect x="30" y="-18" width="76" height="18" rx="9" fill="#2D537E" />
                  <rect x="20" y="18" width="96" height="152" rx="16" fill="#EFF7FC" />
                  <rect x="34" y="36" width="68" height="116" rx="10" fill="#8FCBE7" fillOpacity="0.26" />
                  <rect x="34" y="36" width="68" height="116" rx="10" fill="url(#panelFlow)">
                    <animate attributeName="height" values="10;116;116;44;44;10" dur="10s" repeatCount="indefinite" />
                    <animate attributeName="y" values="142;36;36;108;108;142" dur="10s" repeatCount="indefinite" />
                  </rect>
                  <path d="M68 64L50 98H64L58 126L88 88H72L80 64H68Z" fill="#E2A13A">
                    <animate attributeName="opacity" values="0.6;1;1;0.8;0.8;0.6" dur="10s" repeatCount="indefinite" />
                  </path>
                </g>

                <g stroke="url(#panelFlow)" strokeWidth="8" strokeLinecap="round" strokeDasharray="12 14">
                  <path d="M512 394C606 394 660 394 702 394">
                    <animate attributeName="stroke-dashoffset" values="0;-52" dur="1.2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="1;1;1;0.35;0.35;1" dur="10s" repeatCount="indefinite" />
                  </path>
                  <path d="M770 530C770 590 736 624 674 624H480">
                    <animate attributeName="stroke-dashoffset" values="0;-52" dur="1.2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.25;0.25;0.25;1;1;0.25" dur="10s" repeatCount="indefinite" />
                  </path>
                </g>

                <g transform="translate(178 610)">
                  <rect width="196" height="54" rx="27" fill="#FFFFFF" fillOpacity="0.86" />
                  <text x="98" y="34" textAnchor="middle" fill="#1A3052" fontSize="22" fontWeight="700" fontFamily="Arial, sans-serif">
                    {t.energyFlow.day}
                  </text>
                </g>
                <g transform="translate(570 610)">
                  <rect width="202" height="54" rx="27" fill="#FFFFFF" fillOpacity="0.86" />
                  <text x="101" y="34" textAnchor="middle" fill="#1A3052" fontSize="22" fontWeight="700" fontFamily="Arial, sans-serif">
                    {t.energyFlow.night}
                  </text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
