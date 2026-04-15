export interface ServiceData {
  id: string;
  title: string;
  shortDescription: string;
  image: string;
  description: string;
  bullets?: string[];

  taxServices?: {
    title: string;
    points: string[];
  }[];

  repatriationServices?: {
    title: string;
    points: string[];
  }[];

  documentSections?: {
    title: string;
    points: string[];
  }[];
  virtualSections?: {
  title: string;
  points: string[];
}[];

wealthSections?: {
  title: string;
  points: string[];
}[];
}

export const services: ServiceData[] = [
  // your services here
  {
    id: "property-management",
    title: "NRI Property Management & Asset Oversight",
    shortDescription: "Secure, compliant, and professionally monitored asset protection across Telangana, AP & Karnataka.",
    image: "service-property",
    description: "We ensure your property remains secure and protected, legally compliant, professionally monitored, and fully documented. Our focus is on asset protection, compliance, and value preservation.",
    bullets: [
      "Secure and protected asset oversight",
      "Legal compliance monitoring",
      "Professional on-ground monitoring",
      "Fully documented and transparent reporting",
      "Value preservation and maintenance coordination",
      "Coverage across Telangana, AP & Karnataka",
    ],
  },
  {
    id: "buying-selling",
    title: "Property Buying, Selling, Investment Advisory & Long term portfolio management",
    shortDescription: "Safe and profitable real estate decisions with risk mitigation and legal clarity.",
    image: "service-investment",
    description: "We assist NRIs in making safe and profitable real estate decisions. All transactions are executed with risk mitigation and legal clarity.",
    bullets: [
      "Property shortlisting aligned with goals",
      "Physical inspection & condition reporting",
      "Legal due diligence & title verification",
      "Negotiation & deal structuring",
      "Sale management with fair valuation",
      "Long-term investment advisory",
    ],
  },
  {
    id: "legal-documentation",
    title: "Legal, Documentation & Compliance Support",
    shortDescription: "All legal requirements managed under one roof with accuracy and accountability.",
    image: "service-legal",
    description: "We manage all legal requirements under one roof. Every process is handled with accuracy, compliance, and accountability.",
    bullets: [
      "Sale Deeds, Purchase Deeds & Agreements",
      "Property registrations and ownership transfers",
      "Legal opinion & documentation verification",
      "Coordination with advocates, banks & government offices",
      "FEMA-compliant structuring of all transactions",
      "Non-litigation issue resolution",
      "Litigation Solving- legal solutions",
      "Court Cases/Disputes handling",
      "Family litigations Handling & legal Clearances",
    ],
  },
  {
    id: "gpa-spa",
    title: "GPA & SPA Services for NRIs",
    shortDescription: "Complete Power of Attorney support enabling secure remote transactions.",
    image: "service-gpa",
    description: "We provide complete Power of Attorney support enabling secure and legally valid transactions without physical presence in India.",
    bullets: [
      "Drafting of GPA / SPA",
      "Notary, Apostille & Embassy coordination",
      "Registration in India",
      "We Operate as authorised representatives",
      "Remote transaction execution with complete capability.",
    ],
  },
  {
    id: "financial-banking",
    title: "Financial & Banking Assistance",
    shortDescription: "End-to-end financial coordination for NRI property requirements.",
    image: "service-finance",
    description: "We support all financial coordination for NRI property-related requirements, ensuring lawful, transparent, and stress-free financial management.",
    bullets: [
      "NRE / NRO account assistance",
      "Repatriation as per RBI & FEMA norms",
      "Home loan coordination",
      "Tax compliance guidance",
      "Transparent transaction tracking",
      "Financial documentation support",
    ],
  },
  {
  id: "asset-wealth",
  title: "Asset & Wealth Management Support",
  shortDescription:
    "Strategically manage, protect, and grow your real estate wealth across borders.",
  image: "service-wealth",

  description:
    "We help you manage, protect, and grow your real estate assets with structured planning, financial discipline, and long-term wealth strategies.",

  wealthSections: [
    {
      title: "Asset Structuring & Ownership Planning",
      points: [
        "Ownership structuring (individual / joint / family)",
        "Tax-efficient asset structuring",
        "Inheritance-ready planning",
        "Risk minimization in ownership",
      ],
    },
    {
      title: "Property Portfolio Management",
      points: [
        "Managing multiple properties in one system",
        "Income vs expense performance tracking",
        "Periodic portfolio reviews",
        "Buy / hold / sell recommendations",
      ],
    },
    {
      title: "Rental Yield Optimization",
      points: [
        "Market-based rent optimization",
        "Minimizing vacancy periods",
        "Tenant quality management",
        "Periodic rent revisions",
      ],
    },
    {
      title: "Expense & Cash Flow Management",
      points: [
        "Tracking all property expenses",
        "Utility, maintenance & tax payments",
        "Monthly cash flow reports",
        "Profitability analysis",
      ],
    },
    {
      title: "Fund Management & Repatriation Planning",
      points: [
        "NRE/NRO account handling",
        "Fund movement planning (India ⇄ abroad)",
        "Transfer timing & structuring",
        "Banking coordination",
      ],
    },
    {
      title: "Property Maintenance & Value Preservation",
      points: [
        "Regular inspections & upkeep",
        "Preventive maintenance",
        "Renovations & upgrades",
        "Protection of vacant properties",
      ],
    },
    {
      title: "Risk Management & Safeguarding",
      points: [
        "Property security monitoring",
        "Legal risk checks",
        "Fraud prevention",
        "Emergency response handling",
      ],
    },
    {
      title: "Exit Strategy & Wealth Realization",
      points: [
        "Sell vs hold decision guidance",
        "Market timing insights",
        "Sale execution & profit optimization",
        "Reinvestment planning",
      ],
    },
    {
      title: "Investment Advisory (India-Focused)",
      points: [
        "Reinvestment guidance",
        "Property vs alternative investment insights",
        "Risk-return analysis",
        "Diversification strategies",
      ],
    },
  ],
},
  {
  id: "virtual-verification",
  title: "Virtual Property Experience",
  shortDescription:
    "Experience properties remotely with live walkthroughs, real insights, and expert-backed decision support.",
  image: "service-virtual",

  description:
    "We don’t just show properties—we help you experience, understand, and confidently decide from anywhere in the world.",

  virtualSections: [
    {
      title: "Live Interactive Property Walkthrough",
      points: [
        "Real-time video calls (WhatsApp / Zoom)",
        "Client-directed viewing (balcony, walls, surroundings)",
        "No edits or filters—pure ground reality",
        "Multiple properties in one session",
        "Feel like you are physically present",
      ],
    },
    {
      title: "360° Visual Experience & Detailed Media",
      points: [
        "360° photos and panoramic views",
        "Drone shots for layout & surroundings",
        "High-detail videos (lighting, space, finish)",
        "Close-up shots of defects",
        "See beyond what agents or brokers show",
      ],
    },
    {
      title: "Real Ground Reality Insights",
      points: [
        "Road access & connectivity",
        "Water, drainage, and infrastructure",
        "Noise levels & neighborhood quality",
        "Identification of hidden negatives",
      ],
    },
    {
      title: "Lifestyle & Livability Check",
      points: [
        "Nearby essentials (hospitals, schools, stores)",
        "Community quality & environment",
        "Daily convenience factors",
        "Suitability for living vs investment",
      ],
    },
    {
      title: "Comparative Property Analysis",
      points: [
        "Compare multiple properties side-by-side",
        "Price vs value analysis",
        "Pros & cons breakdown",
        "Recommendations based on your goals",
      ],
    },
    {
      title: "Negotiation & Deal Strategy Support",
      points: [
        "Price negotiation based on findings",
        "Identification of overpricing",
        "Smart deal structuring",
        "Handling seller conversations",
      ],
    },
    {
      title: "End-to-End Virtual Decision Support",
      points: [
        "Personalized consultation after visits",
        "Clear recommendation: Buy / Avoid / Negotiate",
        "Risk vs return explanation",
        "Investment vs end-use guidance",
      ],
    },
    {
      title: "Continuous Updates Until Closure",
      points: [
        "Regular property status updates",
        "Follow-ups with sellers/builders",
        "Progress tracking",
        "Complete transparency throughout",
      ],
    },
  ],
},
  {
  id: "document-management",
  title: "Documents Management",
  shortDescription:
    "Secure, organized, and accessible document management for NRIs—handled with complete confidentiality.",
  image: "service-document",

  description:
    "Your documents in India—organized, protected, and always within reach. We ensure complete confidentiality, structured handling, and seamless access for all your property, legal, and financial records.",

  documentSections: [
    {
      title: "Document Collection & Organization",
      points: [
        "Collection of property, legal & financial documents",
        "Sorting, categorizing & structured organization",
        "Centralized document system creation",
        "Digitization (scanning & soft copy creation)",
      ],
    },
    {
      title: "Secure Storage & Safekeeping",
      points: [
        "Physical document storage (if required)",
        "Secure digital storage & backups",
        "Confidential handling of sensitive documents",
        "Access control & privacy assurance",
      ],
    },
    {
      title: "Property Document Management",
      points: [
        "Sale deeds, title documents & EC management",
        "Layout approvals, tax receipts, utility records",
        "Easy retrieval for transactions or legal use",
        "Continuous updating of property files",
      ],
    },
    {
      title: "Legal & Compliance Documents Handling",
      points: [
        "Agreements, affidavits & legal paperwork handling",
        "Notary & attestation coordination",
        "Submission to government departments",
        "Compliance tracking & updates",
      ],
    },
    {
      title: "Document Retrieval & Execution Support",
      points: [
        "Quick retrieval & sharing of documents",
        "Courier & delivery coordination (domestic/international)",
        "Assistance in document execution & signing",
        "Digital sharing for remote approvals",
      ],
    },
    {
      title: "Periodic Updates & Reporting",
      points: [
        "Regular updates on document status",
        "Digital access / shared folders",
        "Alerts for missing or required documents",
        "Full transparency in handling",
      ],
    },
    {
      title: "Title Trace & Historical Document Retrieval",
      points: [
        "Retrieval of old ownership records",
        "Title chain verification (ownership history)",
        "Encumbrance & litigation checks",
        "Coordination with sub-registrar offices",
      ],
    },
  ],
},
{
  id: "nri-tax-filing",
  title: "NRI Tax Filing & End-to-End Financial Compliance",
  shortDescription: "Comprehensive tax filing, compliance, and fund repatriation services for NRIs.",
  image: "service-registration",

  description:
    "We provide complete NRI tax filing, compliance, and fund repatriation services with full transparency, accuracy, and regulatory alignment.",

  // 🔼 ABOVE CENTER LINE
  taxServices: [
    {
      title: "Income Tax Return (ITR) Filing",
      points: [
        "Accurate ITR filing for NRI individuals",
        "Handling multiple income sources (rent, capital gains, interest)",
        "Compliance with latest tax regulations",
      ],
    },
    {
      title: "Rental Income Tax Management",
      points: [
        "Tax computation on rental income",
        "Deduction optimization",
        "TDS compliance & adjustments",
      ],
    },
    {
      title: "Capital Gains Tax Advisory",
      points: [
        "Tax calculation on property sale",
        "Short-term & long-term capital gains",
        "Reinvestment guidance",
      ],
    },
    {
      title: "TDS Compliance & Refunds",
      points: [
        "TDS verification & reconciliation",
        "Lower/Nil TDS certificate assistance",
        "Refund processing",
      ],
    },
    {
      title: "DTAA (Double Taxation Relief)",
      points: [
        "Avoid double taxation",
        "DTAA benefits",
        "Foreign income reporting",
      ],
    },
    {
      title: "Tax Planning & Optimization",
      points: [
        "Strategic tax planning",
        "Investment structuring",
        "Year-round advisory",
      ],
    },
    {
      title: "Notice Handling",
      points: [
        "Income tax notice response",
        "Documentation drafting",
        "Authority coordination",
      ],
    },
    {
      title: "Documentation Support",
      points: [
        "PAN & Aadhaar linkage",
        "NRO/NRE compliance",
        "Full documentation handling",
      ],
    },
    {
      title: "Remote Tax Filing",
      points: [
        "Fully remote processing",
        "Secure document handling",
        "Digital updates",
      ],
    },
  ],

  // 🔽 BELOW CENTER LINE
  repatriationServices: [
    {
      title: "End-to-End Fund Repatriation",
      points: [
        "India ⇄ USA transfers",
        "Full compliance handling",
        "Bank coordination",
      ],
    },
    {
      title: "NRO → NRE Transfer",
      points: [
        "Fund transfer support",
        "USD 1M limit handling",
        "Documentation support",
      ],
    },
    {
      title: "Form 15CA & 15CB",
      points: [
        "Form preparation",
        "CA certification",
        "Compliance verification",
      ],
    },
    {
      title: "FEMA & LRS Advisory",
      points: [
        "FEMA compliance",
        "LRS guidance",
        "Legal structuring",
      ],
    },
    {
      title: "Tax Clearance",
      points: [
        "Capital gains compliance",
        "TDS verification",
        "Documentation handling",
      ],
    },
    {
      title: "Property Sale Repatriation",
      points: [
        "Sale proceeds transfer",
        "RBI approvals",
        "Payment structuring",
      ],
    },
    {
      title: "Inward Remittance",
      points: [
        "Funds to India",
        "FEMA compliance",
        "Tax advisory",
      ],
    },
    {
      title: "Bank Coordination",
      points: [
        "Follow-ups",
        "Approvals",
        "Issue resolution",
      ],
    },
    {
      title: "Risk-Free Transfers",
      points: [
        "100% compliance",
        "No penalties",
        "Transparent process",
      ],
    },
    {
      title: "Remote Handling",
      points: [
        "End-to-end remote",
        "Secure documents",
        "Real-time updates",
      ],
    },
  ],
},
  {
    id: "elderly-support",
    title: "Senior Citizen Property Support",
    shortDescription: "Support for elderly property owners with documentation, payments & coordination.",
    image: "service-elderly",
    description: "We provide dedicated support for elderly property owners in India, handling documentation, payments, and coordination with regular updates to NRI families.",
    bullets: [
      "Support for elderly property owners in India",
      "Handling documentation & payments",
      "Financial and Transaction assistance",
      "On-ground coordination",
      "Regular updates to NRI families",
      "Compassionate and patient service",
      "Complete accountability and transparency",
    ],
  },
   {
  id: "End-to-End-Property-Management",
  title: "END TO END Property Management",
  shortDescription: "Complete property management covering documentation, maintenance, coordination, and compliance from start to finish.",
  image: "service-end-to-end", // ✅ FIXED
  description: "Comprehensive property management including documentation, maintenance, coordination, and legal compliance—all handled seamlessly.",
  bullets: [
    "Tenant management",
    "Rent collection and tracking",
    "Property maintenance",
    "Repairs and renovation support",
    "Property inspection and surveillance",
    "Security and safeguarding",
    "Emergency support – immediate action for urgent issues",
    "Periodic reporting with transparent updates via WhatsApp and email",
    "Geo-tagged photos and videos"
  ],
}
];
