"use client";
import { Suspense } from "react";
import { usePathname } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ZipEstimatorController } from "@/components/zip-estimator-controller";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname === "/solar-review") return <main>{children}</main>;
  return <><SiteHeader /><main className="pb-[72px] lg:pb-0">{children}</main><SiteFooter /><Suspense fallback={null}><ZipEstimatorController /></Suspense></>;
}
