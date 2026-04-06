import { BatteryStoragePageClient } from "@/components/pages/battery-storage-page-client";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Home Battery Storage in California",
  description:
    "Add home battery storage in California for outage backup, peak-rate protection, and smarter solar use with Smart Choice Solar.",
  path: "/battery-storage",
  keywords: [
    "home battery backup California",
    "battery storage installer California",
    "solar battery California",
    "whole home battery backup",
    "backup battery for solar"
  ]
});

export default function BatteryStoragePage() {
  return <BatteryStoragePageClient />;
}
