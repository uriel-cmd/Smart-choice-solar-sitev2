import { ReactNode } from "react";

import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";

type ContentPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function ContentPage({ eyebrow, title, description, children }: ContentPageProps) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        primaryCta={{ labelKey: "startFreeEstimate", action: "estimate" }}
        secondaryCta={{ href: "/reviews", labelKey: "readReviews" }}
      />
      <section className="pb-16">
        <div className="container-shell">
          <div className="glass-panel rounded-[32px] px-6 py-10 sm:px-10">
            <div className="content-rich">
              {children}
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
