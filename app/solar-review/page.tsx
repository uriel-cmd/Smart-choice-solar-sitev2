import type { Metadata } from "next";
import { SolarReview } from "@/components/pages/solar-review";

export const metadata: Metadata = {
  title: "Your Personal Solar Review",
  description: "Get a straightforward review of your home, electric bill, and solar or battery options with Uriel at Smart Choice Solar.",
  alternates: { canonical: "/solar-review", languages: {} },
  robots: { index: false, follow: false },
  openGraph: { title: "See If Solar Actually Makes Sense for Your Home", url: "/solar-review" }
};

export default async function SolarReviewPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const params = await searchParams;
  const ad = typeof params.ad === "string" ? params.ad : "";
  return <SolarReview ad={ad} calendarUrl={process.env.SOLAR_REVIEW_CALENDAR_URL || ""} portraitUrl={process.env.SOLAR_REVIEW_PORTRAIT_URL || ""} />;
}
