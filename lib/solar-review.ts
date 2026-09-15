export const reviewQuestions = [
  { key: "homeowner", title: "Are you the homeowner?", options: ["Yes", "No"] },
  { key: "utility", title: "Who is your electric utility?", options: ["Southern California Edison", "LADWP", "Other"] },
  { key: "bill", title: "About how much is your average electric bill?", options: ["Under $150", "$150–$250", "$250–$400", "$400–$600", "$600+"] },
  { key: "interest", title: "What are you most interested in?", options: ["Lowering my electric bill", "Battery backup", "Solar + battery", "I just want to see my options"] }
] as const;

export const reviewHeadlines: Record<string, string> = {
  truth: "The No-Bullshit Solar Review",
  utility: "Your Utility Company Has a Plan for Your Money. You Should Too.",
  flying: "Before You Put Solar on Your Roof, Know What You’re Actually Buying."
};
