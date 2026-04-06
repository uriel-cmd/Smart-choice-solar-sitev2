export type EstimatorData = {
  zip: string;
  homeType: string;
  homeownerStatus: string;
  billRange: string;
  utilityProvider: string;
  roofCondition: string;
  shadeExposure: string;
  batteryInterest: string;
  goal: string;
  timeline: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
};

export const estimatorInitialData: EstimatorData = {
  zip: "",
  homeType: "",
  homeownerStatus: "",
  billRange: "",
  utilityProvider: "",
  roofCondition: "",
  shadeExposure: "",
  batteryInterest: "",
  goal: "",
  timeline: "",
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  address: ""
};

export const estimatorSteps = [
  { id: "zip", title: "Service ZIP", description: "Start with your home ZIP code." },
  { id: "homeType", title: "Home Type", description: "Tell us what kind of property you have." },
  { id: "homeownerStatus", title: "Homeowner Status", description: "This helps us tailor the next step." },
  { id: "billRange", title: "Electric Bill", description: "Choose the range closest to your average bill." },
  { id: "utilityProvider", title: "Utility Provider", description: "We’ll match your estimate to the right context." },
  { id: "roofCondition", title: "Roof Condition", description: "Roof timing can change the best project path." },
  { id: "shadeExposure", title: "Sun Exposure", description: "Help us gauge likely production conditions." },
  { id: "batteryInterest", title: "Battery Interest", description: "Let us know how important backup power is." },
  { id: "goal", title: "Primary Goal", description: "What matters most for this project?" },
  { id: "timeline", title: "Project Timeline", description: "When are you hoping to move forward?" },
  { id: "contact", title: "Unlock Estimate", description: "Where should we send the detailed estimate?" }
] as const;

export const billRangeMap: Record<string, number> = {
  "Under $125": 110,
  "$125-$200": 165,
  "$200-$300": 250,
  "$300-$450": 375,
  "$450+": 525
};

export const estimatorOptions = {
  homeType: ["Single-family home", "Townhome", "Duplex / multi-unit", "Not sure"],
  homeownerStatus: ["I own the home", "I’m buying soon", "I’m researching for later"],
  billRange: Object.keys(billRangeMap),
  utilityProvider: ["SCE", "PG&E", "SDG&E", "SMUD", "LADWP", "Other / not sure"],
  roofCondition: ["Newer roof", "10-15 years old", "May need work soon", "Not sure"],
  shadeExposure: ["Mostly full sun", "Some shade", "Heavy shade / not sure"],
  batteryInterest: ["Yes, I want backup power", "Maybe, depending on cost", "Solar only for now"],
  goal: ["Lower electric bills", "Backup power", "Roof + solar planning", "Just comparing options"],
  timeline: ["ASAP", "Within 3 months", "3-6 months", "Just researching"]
};

export function isSupportedZip(zip: string) {
  const normalized = zip.trim();

  if (!/^\d{5}$/.test(normalized)) {
    return false;
  }

  const value = Number(normalized);
  return value >= 90001 && value <= 96162;
}

export function calculateEstimate(data: Partial<EstimatorData>) {
  const billValue = billRangeMap[data.billRange ?? ""] ?? 220;
  const shadeMultiplier =
    data.shadeExposure === "Heavy shade / not sure"
      ? 1.22
      : data.shadeExposure === "Some shade"
        ? 1.1
        : 1;
  const roofAdjustment = data.roofCondition === "May need work soon" ? -0.5 : 0;

  const baseSystem = Math.max(4.5, Math.round(((billValue / 32) * shadeMultiplier + roofAdjustment) * 10) / 10);
  const lowSystem = Math.max(4, Math.round((baseSystem - 0.8) * 10) / 10);
  const highSystem = Math.round((baseSystem + 1.1) * 10) / 10;

  const lowOffset =
    data.shadeExposure === "Heavy shade / not sure"
      ? 78
      : data.shadeExposure === "Some shade"
        ? 84
        : 90;
  const highOffset =
    data.shadeExposure === "Heavy shade / not sure"
      ? 92
      : data.shadeExposure === "Some shade"
        ? 96
        : 100;

  const recommendation =
    data.roofCondition === "May need work soon"
      ? "Solar + battery + roof"
      : "Solar + battery";

  return {
    systemSize: `${lowSystem}-${highSystem} kW`,
    billOffset: `${lowOffset}-${highOffset}%`,
    recommendation
  };
}
