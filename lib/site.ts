export const siteConfig = {
  name: "Smart Choice Solar",
  legalName: "Smart Choice Solar",
  tagline: "Premium solar, battery, and roofing guidance for California homeowners",
  description:
    "Smart Choice Solar helps California homeowners reduce power bills, strengthen outage resilience, and coordinate solar, battery storage, and roofing with one locally owned and operated team.",
  url: "https://smartchoice.solar",
  phoneDisplay: "(844) 787-6456",
  phoneHref: "+18447876456",
  email: "info@smartchoice.solar",
  address: {
    streetAddress: "1105 W Avenue M STE D",
    addressLocality: "Lancaster",
    addressRegion: "CA",
    postalCode: "93534",
    addressCountry: "US"
  },
  geo: {
    latitude: 34.69804,
    longitude: -118.13674
  },
  serviceAreas: [
    "Los Angeles",
    "San Diego",
    "Bay Area",
    "Inland Empire",
    "Central Coast",
    "Central Valley",
    "Sacramento",
    "Northern California",
    "Greater Los Angeles",
    "Statewide California ZIP coverage"
  ],
  socials: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/"
  },
  seo: {
    defaultTitle: "California Solar, Battery Storage, and Roofing | Smart Choice Solar",
    titleTemplate: "%s | Smart Choice Solar",
    defaultDescription:
      "Smart Choice Solar is a locally owned California solar company offering premium solar installation, battery storage, and roofing coordination for homeowners statewide."
  }
};

export const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions" },
  { href: "/reviews", label: "Reviews" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Resources" },
  { href: "/contact", label: "Free Assessment" }
] as const;

export const serviceNav = [
  { href: "/solar", label: "Solar" },
  { href: "/battery-storage", label: "Battery Storage" },
  { href: "/roofing", label: "Roofing" },
  { href: "/contact", label: "Estimate" }
] as const;

export const stats = [
  { value: "25+", label: "Years of combined solar and roofing experience" },
  { value: "5/5", label: "Average homeowner review rating" },
  { value: "24 hrs", label: "Average proposal turnaround" }
];

export const services = [
  {
    kicker: "Solar Design",
    title: "Custom Solar Systems",
    image: "/brand/service-solar.svg",
    description:
      "Thoughtfully designed solar built around your roofline, utility usage, and long-term energy goals.",
    benefits: ["Cleaner utility savings strategy", "Roof-aware design", "Permitting support"],
    href: "/solar"
  },
  {
    kicker: "Energy Resilience",
    title: "Battery Backup",
    image: "/brand/service-battery.svg",
    description:
      "Battery storage that protects the essentials during outages and helps you keep more of your power on your terms.",
    benefits: ["Backup planning", "Peak-rate protection", "Expandable design"],
    href: "/battery-storage"
  },
  {
    kicker: "Roof + Solar Planning",
    title: "Roof + Solar Coordination",
    image: "/brand/service-roofing.svg",
    description:
      "Roofing guidance and solar coordination that reduce rework, timeline issues, and contractor handoff friction.",
    benefits: ["One coordinated scope", "Long-term roof protection", "Fewer project surprises"],
    href: "/roofing"
  }
];

export const trustSignals = [
  "Locally owned and operated with California-wide homeowner coverage",
  "Premium solar, battery, and roofing planning in one process",
  "Fast quote delivery with no-pressure education"
];

export const credibilityBadges = [
  "Homeowner-first project guidance",
  "Solar + battery + roofing expertise",
  "Clean installs and clear communication"
];

export const reviewStats = [
  { value: "5/5", label: "Average homeowner rating" },
  { value: "1,000+", label: "Consultations and proposals guided" },
  { value: "3 core trades", label: "Solar, storage, and roofing under one strategy" }
];

export const googleReviews = [
  {
    name: "Marci Young",
    timeAgo: "2 months ago",
    rating: 5,
    quote:
      "I had a great experience with smart choice. Solar Uriel, the representative was there to help the entire time. It's a great company definitely would recommend to anyone in search of solar services."
  },
  {
    name: "Alex Del CID",
    timeAgo: "a month ago",
    rating: 5,
    quote:
      "You ever felt solar sales don't know what they are talking about ? Let me tell you about Uriel .short answer cuz we talk a lot . Uriel knew exactly what size solar system I needed. He was extremely knowledgeable about kW sizing, batteries, and everything solar. This was the first time I truly felt I was working with someone who understands what they sell and actually delivers on it. My system with battery was just installed, and I couldn't be happier with the experience"
  },
  {
    name: "Dwindalin D Edwards",
    timeAgo: "2 months ago",
    rating: 5,
    quote:
      "I had an excellent experience working with Smart Choice Solar, and I can confidently say their team delivers both professionalism and transparency. Uriel, my representative, was extremely knowledgeable and patient in guiding me through the entire solar installation process.\n\nFrom the initial consultation to next steps, Uriel remained engaged, responsive, and forthcoming with information, ensuring I fully understood my solar options, system performance, and long-term benefits. He took the time to answer all of my questions thoroughly and never made the process feel rushed or pressured.\n\nIf you're looking for a reliable solar company that values customer education and clear communication, I highly recommend Smart Choice Solar. Their commitment to service and integrity truly sets them apart."
  },
  {
    name: "Elsa Navarijo",
    timeAgo: "7 months ago",
    rating: 5,
    quote:
      "Yo instale los paneles en mi casa en el 2022 y estoy muy satisfecha con los resultados, no pago una factura de energía eléctrica durante el verano y durante el invierno es muy poquito lo que eh pagado Uriel me ayudó con todo el papeleo y proceso de instalación. Nunca eh tenido ningún problema con mis paneles solares. Y yo si los recomiendo"
  },
  {
    name: "Miguel Corcio",
    timeAgo: "7 months ago",
    rating: 5,
    quote:
      "Uriel is incredibly knowledgable and profesional, he Was able to explain the differences between paneles&batteries and help us craft the right option for our home! I Was extremely skeptical at first. My brother worked with Uriel 3 years ago and reffered me to him. I am very happy and feel confident about our decision."
  },
  {
    name: "chauncey lincoln",
    timeAgo: "2 years ago",
    rating: 5,
    quote:
      "I was skeptical but after meeting Uriel and getting the financial info I needed it was a no brainer . We were able to build a system that provides more kWh than I used the last couple years with info provided directly from my old bills. The cost of my now 11 month old system is ridiculously less than I would have spent in direct payments to SCE for monthly bills. I also bagged a 14k tax rebate... seriously and this is for real!!!!\n\nWe installed in February 2023 and proceeded to absolutely 100% Max our A/C from morning thru night every single day of the summer like a rich person!! Oh and heck - yes my pool/jacuzzi ran 8hours per day every day-all year. The Solar Edge Monitoring app allows me to track usage day to day and month to month so I can easily see at a glance my daily use. This was awesome especially in summer because I was enjoying watching my electric meter “Go Backwards “ while my system was generating more current than I was using with all of my household items on and cranking —— Ha Ha Ha!!!\n\nI don't even bother turning off lights and stuff anymore, and I stand in front of my refrigerator with the door open casually picking what I want .\n\nI can't thank Uriel enough for digging deep and designing a system that saves me $$ immediately and provides more energy than I needed for the year without oversizing it.i am now in month 12 and my electric company will owe me approximately $210 for the year!! Now I'm no Genius but darn that's a financial swing I wish I could have done years ago! Now thanks to Uriel I make my own electricity and they buy what I have left over daily!!!"
  },
  {
    name: "Robert Loza",
    timeAgo: "2 years ago",
    rating: 5,
    quote:
      "I highly recommend smart choice Solar for your solar panel company. Mr. Uriel is very knowledgeable in his field and the installers of the panels did a very good professional job kept area clean\n\nAnd took their time in answering all my questions and above all they are the best price of all other companies"
  }
] as const;

export const credibilityPillars = [
  {
    title: "Estimate-first process",
    description:
      "We make it easy to start with a guided savings conversation before you commit to a full appointment."
  },
  {
    title: "Local home-energy expertise",
    description:
      "Our recommendations account for California roofs, outage concerns, and utility rate realities."
  },
  {
    title: "Premium project handling",
    description:
      "From proposal clarity to install coordination, we focus on making the entire homeowner experience feel organized."
  }
];

export const serviceArchitecture = [
  {
    title: "Residential Solar",
    description: "System design, installation planning, utility savings strategy, and production guidance.",
    links: ["Custom solar systems", "System upgrades", "Panel placement strategy", "Project planning"]
  },
  {
    title: "Battery Storage",
    description: "Backup planning, peak-rate protection, and storage design matched to household priorities.",
    links: ["Whole-home backup planning", "Essential-load strategy", "Storage pairing with solar", "Future-ready expansion"]
  },
  {
    title: "Roof + Solar Coordination",
    description: "Early roof review so solar timing, waterproofing, and long-term durability stay aligned.",
    links: ["Roof readiness review", "Combined project sequencing", "Re-roof coordination", "Long-term investment planning"]
  }
];

export const estimateBenefits = [
  "A fast projected savings range based on your home and bill profile",
  "Guidance on whether solar-only, solar + battery, or roof-first planning makes more sense",
  "A clear next step to book a full home assessment when you are ready"
];

export const financingOptions = [
  {
    title: "PPA",
    visual: "ppa",
    description:
      "A power purchase agreement can reduce upfront cost and shift the conversation toward the rate you pay for solar energy over time.",
    points: ["Lower upfront entry", "Rate-based structure", "Best for payment-first comparisons"]
  },
  {
    title: "Lease",
    visual: "lease",
    description:
      "A solar lease can make monthly budgeting more predictable when the homeowner wants a simpler equipment-use arrangement.",
    points: ["Predictable monthly structure", "Straightforward agreement terms", "Good for simplicity-focused buyers"]
  },
  {
    title: "Financing",
    visual: "financing",
    description:
      "Financing can make the most sense for homeowners who want long-term ownership, tax-credit alignment, and stronger lifetime value.",
    points: ["Ownership-focused path", "Tax credit alignment", "Long-term savings upside"]
  }
] as const;

export const processSteps = [
  {
    title: "Discovery and roof review",
    description:
      "We start with your utility usage, roof condition, and project priorities so the recommendation is grounded in your actual home."
  },
  {
    title: "Custom design and savings strategy",
    description:
      "You receive a tailored proposal with system assumptions, battery options when relevant, and a clearer picture of next steps."
  },
  {
    title: "Permits, scheduling, and install",
    description:
      "Our team coordinates the moving pieces, keeps you updated, and manages the job with the polish homeowners expect from a premium contractor."
  },
  {
    title: "Activation and support",
    description:
      "We walk you through the finished system, what production should look like, and how your setup is expected to perform over time."
  }
];

export const testimonials = [
  {
    name: "Alicia M.",
    location: "California homeowner",
    project: "Solar installation",
    quote:
      "Smart Choice Solar felt far more buttoned-up than the other companies we met. The proposal was cleaner, the communication was better, and the installation felt organized from day one.",
    rating: 5
  },
  {
    name: "Jordan T.",
    location: "California homeowner",
    project: "Roof + solar project",
    quote:
      "Bundling the roof and solar together saved us a huge amount of stress. We had one team, one timeline, and no guessing about what needed to happen first.",
    rating: 5
  },
  {
    name: "Nina R.",
    location: "California homeowner",
    project: "Battery backup",
    quote:
      "Our battery system has already proven itself during an outage. More importantly, the team was honest about what it would and would not power, which made the whole decision easier.",
    rating: 5
  }
];

export const faqs = [
  {
    question: "How much can I save with solar?",
    answer:
      "Savings depend on your utility rates, roof layout, and usage profile. During your proposal, we focus on a realistic design strategy so you understand the tradeoffs behind the numbers."
  },
  {
    question: "Do I need a new roof before going solar?",
    answer:
      "Not always. We review roof condition early and let you know whether solar can move forward now or if roofing work should happen first to protect the long-term investment."
  },
  {
    question: "Is battery storage worth it in California?",
    answer:
      "For many California homes, yes. Battery storage can improve outage resilience, help with peak-rate pressure, and make your solar production more useful later in the day."
  },
  {
    question: "What financing options are available?",
    answer:
      "We can walk through cash and financing paths so you can compare monthly outlay, expected savings behavior, and the option that best fits your timeline."
  }
];
