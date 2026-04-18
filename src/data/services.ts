// export interface ServiceSection {
//   title: string;
//   points: string[];
// }

// export interface ServiceData {
//   id: string;
//   title: string;
//   shortDescription: string;
//   image: string;
//   description: string;

//   bullets?: string[];

//   taxServices?: ServiceSection[];
//   repatriationServices?: ServiceSection[];
//   documentSections?: ServiceSection[];
//   virtualSections?: ServiceSection[];
//   wealthSections?: ServiceSection[];

//   powerLine?: string; // ✅ FIXED (optional)
// }

// export const services: ServiceData[] = [
//   // your services here
  
//   {
//   id: "buying-selling",
//   title:
//     "Property Buying, Selling, Investment Advisory & Long Term Portfolio Management",
//   shortDescription:
//     "End-to-end real estate solutions for NRIs covering acquisition, sale, and growth.",
//   image: "service-investment",

//   description:
//     "We provide complete real estate solutions for NRIs, ensuring safe transactions, profitable investments, and long-term wealth growth.",

//   wealthSections: [
//     {
//       title: "Property Buying",
//       points: [
//         "Property identification",
//         "Virtual inspections",
//         "Legal verification",
//         "Negotiation support",
//       ],
//     },
//     {
//       title: "Property Selling",
//       points: [
//         "Market valuation",
//         "Buyer sourcing",
//         "Deal structuring",
//         "Sale closure",
//       ],
//     },
//     {
//       title: "Investment Advisory",
//       points: [
//         "Goal-based planning",
//         "Location analysis",
//         "ROI evaluation",
//         "Risk assessment",
//       ],
//     },
//     {
//       title: "Portfolio Management",
//       points: [
//         "Managing multiple assets",
//         "Rental income tracking",
//         "Performance review",
//         "Reinvestment strategies",
//       ],
//     },
//   ],

//   powerLine:
//     "End-to-end real estate solutions for NRIs—covering buying, selling, investment, and long-term portfolio management.",
// },
//  {
//   id: "legal-documentation",
//   title: "Legal, Documentation & Compliance Support",
//   shortDescription:
//     "Complete legal due diligence, documentation, and compliance management.",
//   image: "service-legal",

//   description:
//     "We handle every legal and documentation aspect of your property transactions with accuracy, compliance, and accountability.",

//   wealthSections: [
//     {
//       title: "Legal Due Diligence",
//       points: [
//         "Title verification",
//         "Encumbrance certificate check",
//         "Land use validation",
//         "Litigation background check",
//       ],
//     },
//     {
//       title: "Document Validation",
//       points: [
//         "Collecting seller/builder documents",
//         "Cross-verification",
//         "Identifying missing documents",
//         "Transaction-ready file preparation",
//       ],
//     },
//     {
//       title: "Regulatory Compliance",
//       points: [
//         "RERA verification",
//         "Approval checks",
//         "Legal construction validation",
//         "Local law compliance",
//       ],
//     },
//     {
//       title: "Agreement Drafting & Review",
//       points: [
//         "Agreement to Sale drafting",
//         "Builder agreement review",
//         "Clause protection",
//         "Negotiation support",
//       ],
//     },
//     {
//       title: "Tax & Financial Compliance",
//       points: [
//         "TDS handling",
//         "Form 15CA / 15CB",
//         "Capital gains documentation",
//         "PAN & KYC compliance",
//       ],
//     },
//     {
//       title: "Post-Registration Compliance",
//       points: [
//         "Mutation / Khata transfer",
//         "Tax ownership updates",
//         "Utility transfers",
//         "Society updates",
//       ],
//     },
//     {
//       title: "Risk & Litigation Support",
//       points: [
//         "Fraud prevention",
//         "Legal advisory",
//         "Court coordination",
//         "Lawyer liaison",
//       ],
//     },
//   ],

//   powerLine:
//     "From verification to registration to compliance—we manage every legal detail of your property in India.",
// },
//   {
//   id: "gpa-spa",
//   title: "GPA & SPA Services for NRIs",
//   shortDescription:
//     "Structured Power of Attorney solutions enabling secure and remote transactions.",
//   image: "service-gpa",

//   description:
//     "We provide comprehensive Power of Attorney solutions tailored for NRIs, enabling secure, compliant, and fully controlled execution of property, financial, and legal matters in India.",

//   wealthSections: [
//     {
//       title: "Types of Power of Attorney",
//       points: [
//         "General Power of Attorney (GPA)",
//         "Special Power of Attorney (SPA)",
//         "Durable Power of Attorney",
//         "Non-Durable Power of Attorney",
//         "Revocable Power of Attorney",
//         "Irrevocable Power of Attorney",
//         "Property-Specific Power of Attorney",
//         "Banking / Financial Power of Attorney",
//         "Legal / Litigation Power of Attorney",
//       ],
//     },
//     {
//       title: "POA Advisory & Structuring",
//       points: [
//         "GPA vs SPA guidance",
//         "Scope definition",
//         "Risk limitation structuring",
//         "Protection-focused drafting strategy",
//       ],
//     },
//     {
//       title: "Drafting of GPA / SPA",
//       points: [
//         "Property transactions",
//         "Banking & financial authority",
//         "Rental & management use",
//         "Court representation",
//       ],
//     },
//     {
//       title: "Attestation & Apostille",
//       points: [
//         "Notary & embassy attestation",
//         "Apostille coordination",
//         "Country-specific compliance",
//         "End-to-end handling",
//       ],
//     },
//     {
//       title: "Registration in India",
//       points: [
//         "Stamp duty & adjudication",
//         "Sub-registrar registration",
//         "State compliance handling",
//         "On-ground execution",
//       ],
//     },
//     {
//       title: "Execution & Representation",
//       points: [
//         "Signing agreements",
//         "Handling property transactions",
//         "Banking coordination",
//         "Authority-based execution",
//       ],
//     },
//     {
//       title: "Monitoring & Control",
//       points: [
//         "POA usage tracking",
//         "Misuse prevention",
//         "Revocation support",
//         "Lifecycle management",
//       ],
//     },
//   ],

//   powerLine:
//     "Authorize with confidence—your property, transactions, and legal matters handled seamlessly in India.",
// },
//   {
//   id: "financial-banking",
//   title: "Financial & Banking Services for NRIs",
//   shortDescription:
//     "Complete financial structuring, banking coordination, and fund management for NRI real estate transactions.",
//   image: "service-finance",

//   description:
//     "We provide end-to-end financial and banking solutions tailored for NRIs, ensuring compliant, transparent, and optimized handling of funds across property investments in India.",

//   wealthSections: [
//     {
//       title: "NRE / NRO Account Setup & Management",
//       points: [
//         "Assistance in opening NRE / NRO accounts",
//         "Account structuring based on investment goals",
//         "Ongoing banking coordination",
//         "KYC & compliance updates",
//       ],
//     },
//     {
//       title: "Property Investment Fund Planning",
//       points: [
//         "Budget planning for property purchase",
//         "Fund allocation strategy",
//         "Investment structuring for returns",
//         "Advisory on timing & location",
//       ],
//     },
//     {
//       title: "Loan & Financing Assistance",
//       points: [
//         "NRI home loan eligibility guidance",
//         "Loan processing & documentation",
//         "Bank coordination & approvals",
//         "EMI structuring",
//       ],
//     },
//     {
//       title: "Transaction Structuring & Payment Handling",
//       points: [
//         "Stage-wise payment planning",
//         "Buyer/seller fund flow handling",
//         "Secure execution of transactions",
//         "Error-free payment coordination",
//       ],
//     },
//     {
//       title: "Repatriation & Fund Movement",
//       points: [
//         "Outward remittance planning",
//         "RBI compliance handling",
//         "Documentation coordination",
//         "Efficient fund transfer strategy",
//       ],
//     },
//     {
//       title: "Tax & Financial Structuring",
//       points: [
//         "Capital gains planning",
//         "TDS optimization",
//         "Tax-integrated structuring",
//         "Maximizing net returns",
//       ],
//     },
//     {
//       title: "Forex & Currency Optimization",
//       points: [
//         "Exchange rate timing strategy",
//         "USD ⇄ INR advisory",
//         "Forex cost reduction",
//         "Value maximization in transfers",
//       ],
//     },
//     {
//       title: "Financial Reporting & Transparency",
//       points: [
//         "Investment performance tracking",
//         "Cash flow visibility",
//         "Profitability reports",
//         "Full financial transparency",
//       ],
//     },
//   ],

//   powerLine:
//     "From funding to profit realization—complete financial control over your real estate investments in India.",
// },
// {
//   id: "asset-wealth",
//   title: "Asset & Wealth Management Support",
//   shortDescription:
//     "Strategically manage, protect, and grow your real estate wealth across borders.",
//   image: "service-wealth",

//   description:
//     "We help you manage, protect, and grow your real estate assets with structured planning, financial discipline, and long-term wealth strategies.",

//   wealthSections: [
//     {
//       title: "Asset Structuring & Ownership Planning",
//       points: [
//         "Ownership structuring (individual / joint / family)",
//         "Tax-efficient asset structuring",
//         "Inheritance-ready planning",
//         "Risk minimization in ownership",
//       ],
//     },
//     {
//       title: "Property Portfolio Management",
//       points: [
//         "Managing multiple properties in one system",
//         "Income vs expense performance tracking",
//         "Periodic portfolio reviews",
//         "Buy / hold / sell recommendations",
//       ],
//     },
//     {
//       title: "Rental Yield Optimization",
//       points: [
//         "Market-based rent optimization",
//         "Minimizing vacancy periods",
//         "Tenant quality management",
//         "Periodic rent revisions",
//       ],
//     },
//     {
//       title: "Expense & Cash Flow Management",
//       points: [
//         "Tracking all property expenses",
//         "Utility, maintenance & tax payments",
//         "Monthly cash flow reports",
//         "Profitability analysis",
//       ],
//     },
//     {
//       title: "Fund Management & Repatriation Planning",
//       points: [
//         "NRE/NRO account handling",
//         "Fund movement planning (India ⇄ abroad)",
//         "Transfer timing & structuring",
//         "Banking coordination",
//       ],
//     },
//     {
//       title: "Property Maintenance & Value Preservation",
//       points: [
//         "Regular inspections & upkeep",
//         "Preventive maintenance",
//         "Renovations & upgrades",
//         "Protection of vacant properties",
//       ],
//     },
//     {
//       title: "Risk Management & Safeguarding",
//       points: [
//         "Property security monitoring",
//         "Legal risk checks",
//         "Fraud prevention",
//         "Emergency response handling",
//       ],
//     },
//     {
//       title: "Exit Strategy & Wealth Realization",
//       points: [
//         "Sell vs hold decision guidance",
//         "Market timing insights",
//         "Sale execution & profit optimization",
//         "Reinvestment planning",
//       ],
//     },
//     {
//       title: "Investment Advisory (India-Focused)",
//       points: [
//         "Reinvestment guidance",
//         "Property vs alternative investment insights",
//         "Risk-return analysis",
//         "Diversification strategies",
//       ],
//     },
//   ],
// },
//   {
//   id: "virtual-verification",
//   title: "Virtual Property Experience",
//   shortDescription:
//     "Experience properties remotely with live walkthroughs, real insights, and expert-backed decision support.",
//   image: "service-virtual",

//   description:
//     "We don’t just show properties—we help you experience, understand, and confidently decide from anywhere in the world.",

//   virtualSections: [
//     {
//       title: "Live Interactive Property Walkthrough",
//       points: [
//         "Real-time video calls (WhatsApp / Zoom)",
//         "Client-directed viewing (balcony, walls, surroundings)",
//         "No edits or filters—pure ground reality",
//         "Multiple properties in one session",
//         "Feel like you are physically present",
//       ],
//     },
//     {
//       title: "360° Visual Experience & Detailed Media",
//       points: [
//         "360° photos and panoramic views",
//         "Drone shots for layout & surroundings",
//         "High-detail videos (lighting, space, finish)",
//         "Close-up shots of defects",
//         "See beyond what agents or Agentss show",
//       ],
//     },
//     {
//       title: "Real Ground Reality Insights",
//       points: [
//         "Road access & connectivity",
//         "Water, drainage, and infrastructure",
//         "Noise levels & neighborhood quality",
//         "Identification of hidden negatives",
//       ],
//     },
//     {
//       title: "Lifestyle & Livability Check",
//       points: [
//         "Nearby essentials (hospitals, schools, stores)",
//         "Community quality & environment",
//         "Daily convenience factors",
//         "Suitability for living vs investment",
//       ],
//     },
//     {
//       title: "Comparative Property Analysis",
//       points: [
//         "Compare multiple properties side-by-side",
//         "Price vs value analysis",
//         "Pros & cons breakdown",
//         "Recommendations based on your goals",
//       ],
//     },
//     {
//       title: "Negotiation & Deal Strategy Support",
//       points: [
//         "Price negotiation based on findings",
//         "Identification of overpricing",
//         "Smart deal structuring",
//         "Handling seller conversations",
//       ],
//     },
//     {
//       title: "End-to-End Virtual Decision Support",
//       points: [
//         "Personalized consultation after visits",
//         "Clear recommendation: Buy / Avoid / Negotiate",
//         "Risk vs return explanation",
//         "Investment vs end-use guidance",
//       ],
//     },
//     {
//       title: "Continuous Updates Until Closure",
//       points: [
//         "Regular property status updates",
//         "Follow-ups with sellers/builders",
//         "Progress tracking",
//         "Complete transparency throughout",
//       ],
//     },
//   ],
// },
//   {
//   id: "document-management",
//   title: "Documents Management",
//   shortDescription:
//     "Secure, organized, and accessible document management for NRIs—handled with complete confidentiality.",
//   image: "service-document",

//   description:
//     "Your documents in India—organized, protected, and always within reach. We ensure complete confidentiality, structured handling, and seamless access for all your property, legal, and financial records.",

//   documentSections: [
//     {
//       title: "Document Collection & Organization",
//       points: [
//         "Collection of property, legal & financial documents",
//         "Sorting, categorizing & structured organization",
//         "Centralized document system creation",
//         "Digitization (scanning & soft copy creation)",
//       ],
//     },
//     {
//       title: "Secure Storage & Safekeeping",
//       points: [
//         "Physical document storage (if required)",
//         "Secure digital storage & backups",
//         "Confidential handling of sensitive documents",
//         "Access control & privacy assurance",
//       ],
//     },
//     {
//       title: "Property Document Management",
//       points: [
//         "Sale deeds, title documents & EC management",
//         "Layout approvals, tax receipts, utility records",
//         "Easy retrieval for transactions or legal use",
//         "Continuous updating of property files",
//       ],
//     },
//     {
//       title: "Legal & Compliance Documents Handling",
//       points: [
//         "Agreements, affidavits & legal paperwork handling",
//         "Notary & attestation coordination",
//         "Submission to government departments",
//         "Compliance tracking & updates",
//       ],
//     },
//     {
//       title: "Document Retrieval & Execution Support",
//       points: [
//         "Quick retrieval & sharing of documents",
//         "Courier & delivery coordination (domestic/international)",
//         "Assistance in document execution & signing",
//         "Digital sharing for remote approvals",
//       ],
//     },
//     {
//       title: "Periodic Updates & Reporting",
//       points: [
//         "Regular updates on document status",
//         "Digital access / shared folders",
//         "Alerts for missing or required documents",
//         "Full transparency in handling",
//       ],
//     },
//     {
//       title: "Title Trace & Historical Document Retrieval",
//       points: [
//         "Retrieval of old ownership records",
//         "Title chain verification (ownership history)",
//         "Encumbrance & litigation checks",
//         "Coordination with sub-registrar offices",
//       ],
//     },
//   ],
// },
// {
//   id: "nri-tax-filing",
//   title: "NRI Tax Filing & End-to-End Financial Compliance",
//   shortDescription: "Comprehensive tax filing, compliance, and fund repatriation services for NRIs.",
//   image: "service-registration",

//   description:
//     "We provide complete NRI tax filing, compliance, and fund repatriation services with full transparency, accuracy, and regulatory alignment.",

//   // 🔼 ABOVE CENTER LINE
//   taxServices: [
//     {
//       title: "Income Tax Return (ITR) Filing",
//       points: [
//         "Accurate ITR filing for NRI individuals",
//         "Handling multiple income sources (rent, capital gains, interest)",
//         "Compliance with latest tax regulations",
//       ],
//     },
//     {
//       title: "Rental Income Tax Management",
//       points: [
//         "Tax computation on rental income",
//         "Deduction optimization",
//         "TDS compliance & adjustments",
//       ],
//     },
//     {
//       title: "Capital Gains Tax Advisory",
//       points: [
//         "Tax calculation on property sale",
//         "Short-term & long-term capital gains",
//         "Reinvestment guidance",
//       ],
//     },
//     {
//       title: "TDS Compliance & Refunds",
//       points: [
//         "TDS verification & reconciliation",
//         "Lower/Nil TDS certificate assistance",
//         "Refund processing",
//       ],
//     },
//     {
//       title: "DTAA (Double Taxation Relief)",
//       points: [
//         "Avoid double taxation",
//         "DTAA benefits",
//         "Foreign income reporting",
//       ],
//     },
//     {
//       title: "Tax Planning & Optimization",
//       points: [
//         "Strategic tax planning",
//         "Investment structuring",
//         "Year-round advisory",
//       ],
//     },
//     {
//       title: "Notice Handling",
//       points: [
//         "Income tax notice response",
//         "Documentation drafting",
//         "Authority coordination",
//       ],
//     },
//     {
//       title: "Documentation Support",
//       points: [
//         "PAN & Aadhaar linkage",
//         "NRO/NRE compliance",
//         "Full documentation handling",
//       ],
//     },
//     {
//       title: "Remote Tax Filing",
//       points: [
//         "Fully remote processing",
//         "Secure document handling",
//         "Digital updates",
//       ],
//     },
//   ],

//   // 🔽 BELOW CENTER LINE
//   repatriationServices: [
//     {
//       title: "End-to-End Fund Repatriation",
//       points: [
//         "India ⇄ USA transfers",
//         "Full compliance handling",
//         "Bank coordination",
//       ],
//     },
//     {
//       title: "NRO → NRE Transfer",
//       points: [
//         "Fund transfer support",
//         "USD 1M limit handling",
//         "Documentation support",
//       ],
//     },
//     {
//       title: "Form 15CA & 15CB",
//       points: [
//         "Form preparation",
//         "CA certification",
//         "Compliance verification",
//       ],
//     },
//     {
//       title: "FEMA & LRS Advisory",
//       points: [
//         "FEMA compliance",
//         "LRS guidance",
//         "Legal structuring",
//       ],
//     },
//     {
//       title: "Tax Clearance",
//       points: [
//         "Capital gains compliance",
//         "TDS verification",
//         "Documentation handling",
//       ],
//     },
//     {
//       title: "Property Sale Repatriation",
//       points: [
//         "Sale proceeds transfer",
//         "RBI approvals",
//         "Payment structuring",
//       ],
//     },
//     {
//       title: "Inward Remittance",
//       points: [
//         "Funds to India",
//         "FEMA compliance",
//         "Tax advisory",
//       ],
//     },
//     {
//       title: "Bank Coordination",
//       points: [
//         "Follow-ups",
//         "Approvals",
//         "Issue resolution",
//       ],
//     },
//     {
//       title: "Risk-Free Transfers",
//       points: [
//         "100% compliance",
//         "No penalties",
//         "Transparent process",
//       ],
//     },
//     {
//       title: "Remote Handling",
//       points: [
//         "End-to-end remote",
//         "Secure documents",
//         "Real-time updates",
//       ],
//     },
//   ],
// },
//   {
//     id: "elderly-support",
//     title: "Senior Citizen Property Support",
//     shortDescription: "Support for elderly property owners with documentation, payments & coordination.",
//     image: "service-elderly",
//     description: "We provide dedicated support for elderly property owners in India, handling documentation, payments, and coordination with regular updates to NRI families.",
//     bullets: [
//       "Support for elderly property owners in India",
//       "Handling documentation & payments",
//       "Financial and Transaction assistance",
//       "On-ground coordination",
//       "Regular updates to NRI families",
//       "Compassionate and patient service",
//       "Complete accountability and transparency",
//     ],
//   },
//    {
//   id: "End-to-End-Property-Management",
//   title: "END TO END Property Management",
//   shortDescription: "Complete property management covering documentation, maintenance, coordination, and compliance from start to finish.",
//   image: "service-end-to-end", // ✅ FIXED
//   description: "Comprehensive property management including documentation, maintenance, coordination, and legal compliance—all handled seamlessly.",
//   bullets: [
//     "Tenant management",
//     "Rent collection and tracking",
//     "Property maintenance",
//     "Repairs and renovation support",
//     "Property inspection and surveillance",
//     "Security and safeguarding",
//     "Emergency support – immediate action for urgent issues",
//     "Periodic reporting with transparent updates via WhatsApp and email",
//     "Geo-tagged photos and videos"
//   ],
// },
// {
//   id: "property-management",
//   title: "Advanced NRI Property Management & Asset Oversight",
//   shortDescription:
//     "Institutional-grade asset management focused on performance and protection.",
//   image: "service-property",

//   description:
//     "We deliver advanced property management solutions combining technology, analytics, and on-ground execution for long-term wealth growth.",

//   wealthSections: [
//     {
//       title: "Asset Performance Analytics",
//       points: [
//         "ROI tracking",
//         "Market benchmarking",
//         "Performance reports",
//         "Actionable insights",
//       ],
//     },
//     {
//       title: "Smart Monitoring",
//       points: [
//         "CCTV integration",
//         "Remote dashboards",
//         "Real-time alerts",
//         "24/7 monitoring",
//       ],
//     },
//     {
//       title: "Revenue Optimization",
//       points: [
//         "Rental strategy",
//         "Dynamic pricing",
//         "Vacancy reduction",
//         "Income maximization",
//       ],
//     },
//     {
//       title: "Value Enhancement",
//       points: [
//         "Renovation planning",
//         "CapEx budgeting",
//         "Execution support",
//         "Value-add improvements",
//       ],
//     },
//     {
//       title: "Risk & Compliance",
//       points: [
//         "Legal monitoring",
//         "Risk alerts",
//         "Preventive actions",
//         "Compliance tracking",
//       ],
//     },
//     {
//       title: "Portfolio Strategy",
//       points: [
//         "Asset rebalancing",
//         "Buy/sell recommendations",
//         "Diversification",
//         "Wealth optimization",
//       ],
//     },
//   ],

//   powerLine:
//     "Advanced property management and asset oversight—focused on performance, protection, and long-term wealth growth.",
// },
// ];

// export interface ServiceSection {
//   title: string;
//   points: string[];
// }

// export interface ServiceData {
//   id: string;
//   title: string;
//   shortDescription: string;
//   image: string;
//   description: string;

//   bullets?: string[];

//   taxServices?: ServiceSection[];
//   repatriationServices?: ServiceSection[];
//   documentSections?: ServiceSection[];
//   virtualSections?: ServiceSection[];
//   wealthSections?: ServiceSection[];

//   powerLine?: string; // ✅ FIXED (optional)
// }

// export const services: ServiceData[] = [
//   // your services here
  
//   {
//   id: "buying-selling",
//   title:
//     "Property Buying, Selling, Investment Advisory & Long Term Portfolio Management",
//   shortDescription:
//     "End-to-end real estate solutions for NRIs covering acquisition, sale, and growth.",
//   image: "service-investment",

//   description:
//     "We do provide complete real estate solutions for NRIs, ensuring safe transactions, profitable investments, and long-term wealth growth.",

//   wealthSections: [
//     {
//       title: "Property Buying",
//       points: [
//         "Property identification",
//         "Virtual inspections",
//         "Legal verification",
//         "Negotiation support",
//       ],
//     },
//     {
//       title: "Property Selling",
//       points: [
//         "Market valuation",
//         "Buyer sourcing",
//         "Deal structuring",
//         "Sale closure",
//       ],
//     },
//     {
//       title: "Investment Advisory",
//       points: [
//         "Goal-based planning",
//         "Location analysis",
//         "ROI evaluation",
//         "Risk assessment",
//       ],
//     },
//     {
//       title: "Portfolio Management",
//       points: [
//         "Managing multiple assets",
//         "Rental income tracking",
//         "Performance review",
//         "Reinvestment strategies",
//       ],
//     },
//   ],

//   powerLine:
//     "End-to-end real estate solutions for NRIs—covering buying, selling, investment, and long-term portfolio management.",
// },
//  {
//   id: "legal-documentation",
//   title: "Legal, Documentation & Compliance Support",
//   shortDescription:
//     "Complete legal due diligence, documentation, and compliance management.",
//   image: "service-legal",

//   description:
//     "We handle every legal and documentation aspect of your property transactions with accuracy, compliance, and accountability.",

//   wealthSections: [
//     {
//       title: "Legal Due Diligence",
//       points: [
//         "Title verification",
//         "Encumbrance certificate check",
//         "Land use validation",
//         "Litigation background check",
//       ],
//     },
//     {
//       title: "Document Validation",
//       points: [
//         "Collecting seller/builder documents",
//         "Cross-verification",
//         "Identifying missing documents",
//         "Transaction-ready file preparation",
//       ],
//     },
//     {
//       title: "Regulatory Compliance",
//       points: [
//         "RERA verification",
//         "Approval checks",
//         "Legal construction validation",
//         "Local law compliance",
//       ],
//     },
//     {
//       title: "Agreement Drafting & Review",
//       points: [
//         "Agreement to Sale drafting",
//         "Builder agreement review",
//         "Clause protection",
//         "Negotiation support",
//       ],
//     },
//     {
//       title: "Tax & Financial Compliance",
//       points: [
//         "TDS handling",
//         "Form 15CA / 15CB",
//         "Capital gains documentation",
//         "PAN & KYC compliance",
//       ],
//     },
//     {
//       title: "Post-Registration Compliance",
//       points: [
//         "Mutation / Khata transfer",
//         "Tax ownership updates",
//         "Utility transfers",
//         "Society updates",
//       ],
//     },
//     {
//       title: "Risk & Litigation Support",
//       points: [
//         "Fraud prevention",
//         "Legal advisory",
//         "Court coordination",
//         "Lawyer liaison",
//       ],
//     },
//   ],

//   powerLine:
//     "From verification to registration to compliance—we manage every legal detail of your property in India.",
// },
//   {
//   id: "gpa-spa",
//   title: "GPA & SPA Services for NRIs",
//   shortDescription:
//     "Structured Power of Attorney solutions enabling secure and remote transactions.",
//   image: "service-gpa",

//   description:
//     "We provide comprehensive Power of Attorney solutions tailored for NRIs, enabling secure, compliant, and fully controlled execution of property, financial, and legal matters in India.",

//   wealthSections: [
//     {
//       title: "Types of Power of Attorney",
//       points: [
//         "General Power of Attorney (GPA)",
//         "Special Power of Attorney (SPA)",
//         "Durable Power of Attorney",
//         "Non-Durable Power of Attorney",
//         "Revocable Power of Attorney",
//         "Irrevocable Power of Attorney",
//         "Property-Specific Power of Attorney",
//         "Banking / Financial Power of Attorney",
//         "Legal / Litigation Power of Attorney",
//       ],
//     },
//     {
//       title: "POA Advisory & Structuring",
//       points: [
//         "GPA vs SPA guidance",
//         "Scope definition",
//         "Risk limitation structuring",
//         "Protection-focused drafting strategy",
//       ],
//     },
//     {
//       title: "Drafting of GPA / SPA",
//       points: [
//         "Property transactions",
//         "Banking & financial authority",
//         "Rental & management use",
//         "Court representation",
//       ],
//     },
//     {
//       title: "Attestation & Apostille",
//       points: [
//         "Notary & embassy attestation",
//         "Apostille coordination",
//         "Country-specific compliance",
//         "End-to-end handling",
//       ],
//     },
//     {
//       title: "Registration in India",
//       points: [
//         "Stamp duty & adjudication",
//         "Sub-registrar registration",
//         "State compliance handling",
//         "On-ground execution",
//       ],
//     },
//     {
//       title: "Execution & Representation",
//       points: [
//         "Signing agreements",
//         "Handling property transactions",
//         "Banking coordination",
//         "Authority-based execution",
//       ],
//     },
//     {
//       title: "Monitoring & Control",
//       points: [
//         "POA usage tracking",
//         "Misuse prevention",
//         "Revocation support",
//         "Lifecycle management",
//       ],
//     },
//   ],

//   powerLine:
//     "Authorize with confidence—your property, transactions, and legal matters handled seamlessly in India.",
// },
//   {
//   id: "financial-banking",
//   title: "Financial & Banking Services for NRIs",
//   shortDescription:
//     "Complete financial structuring, banking coordination, and fund management for NRI real estate transactions.",
//   image: "service-finance",

//   description:
//     "We provide end-to-end financial and banking solutions tailored for NRIs, ensuring compliant, transparent, and optimized handling of funds across property investments in India.",

//   wealthSections: [
//     {
//       title: "NRE / NRO Account Setup & Management",
//       points: [
//         "Assistance in opening NRE / NRO accounts",
//         "Account structuring based on investment goals",
//         "Ongoing banking coordination",
//         "KYC & compliance updates",
//       ],
//     },
//     {
//       title: "Property Investment Fund Planning",
//       points: [
//         "Budget planning for property purchase",
//         "Fund allocation strategy",
//         "Investment structuring for returns",
//         "Advisory on timing & location",
//       ],
//     },
//     {
//       title: "Loan & Financing Assistance",
//       points: [
//         "NRI home loan eligibility guidance",
//         "Loan processing & documentation",
//         "Bank coordination & approvals",
//         "EMI structuring",
//       ],
//     },
//     {
//       title: "Transaction Structuring & Payment Handling",
//       points: [
//         "Stage-wise payment planning",
//         "Buyer/seller fund flow handling",
//         "Secure execution of transactions",
//         "Error-free payment coordination",
//       ],
//     },
//     {
//       title: "Repatriation & Fund Movement",
//       points: [
//         "Outward remittance planning",
//         "RBI compliance handling",
//         "Documentation coordination",
//         "Efficient fund transfer strategy",
//       ],
//     },
//     {
//       title: "Tax & Financial Structuring",
//       points: [
//         "Capital gains planning",
//         "TDS optimization",
//         "Tax-integrated structuring",
//         "Maximizing net returns",
//       ],
//     },
//     {
//       title: "Forex & Currency Optimization",
//       points: [
//         "Exchange rate timing strategy",
//         "USD ⇄ INR advisory",
//         "Forex cost reduction",
//         "Value maximization in transfers",
//       ],
//     },
//     {
//       title: "Financial Reporting & Transparency",
//       points: [
//         "Investment performance tracking",
//         "Cash flow visibility",
//         "Profitability reports",
//         "Full financial transparency",
//       ],
//     },
//   ],

//   powerLine:
//     "From funding to profit realization—complete financial control over your real estate investments in India.",
// },
// {
//   id: "asset-wealth",
//   title: "Asset & Wealth Management Support",
//   shortDescription:
//     "Strategically manage, protect, and grow your real estate wealth across borders.",
//   image: "service-wealth",

//   description:
//     "We help you manage, protect, and grow your real estate assets with structured planning, financial discipline, and long-term wealth strategies.",

//   wealthSections: [
//     {
//       title: "Asset Structuring & Ownership Planning",
//       points: [
//         "Ownership structuring (individual / joint / family)",
//         "Tax-efficient asset structuring",
//         "Inheritance-ready planning",
//         "Risk minimization in ownership",
//       ],
//     },
//     {
//       title: "Property Portfolio Management",
//       points: [
//         "Managing multiple properties in one system",
//         "Income vs expense performance tracking",
//         "Periodic portfolio reviews",
//         "Buy / hold / sell recommendations",
//       ],
//     },
//     {
//       title: "Rental Yield Optimization",
//       points: [
//         "Market-based rent optimization",
//         "Minimizing vacancy periods",
//         "Tenant quality management",
//         "Periodic rent revisions",
//       ],
//     },
//     {
//       title: "Expense & Cash Flow Management",
//       points: [
//         "Tracking all property expenses",
//         "Utility, maintenance & tax payments",
//         "Monthly cash flow reports",
//         "Profitability analysis",
//       ],
//     },
//     {
//       title: "Fund Management & Repatriation Planning",
//       points: [
//         "NRE/NRO account handling",
//         "Fund movement planning (India ⇄ abroad)",
//         "Transfer timing & structuring",
//         "Banking coordination",
//       ],
//     },
//     {
//       title: "Property Maintenance & Value Preservation",
//       points: [
//         "Regular inspections & upkeep",
//         "Preventive maintenance",
//         "Renovations & upgrades",
//         "Protection of vacant properties",
//       ],
//     },
//     {
//       title: "Risk Management & Safeguarding",
//       points: [
//         "Property security monitoring",
//         "Legal risk checks",
//         "Fraud prevention",
//         "Emergency response handling",
//       ],
//     },
//     {
//       title: "Exit Strategy & Wealth Realization",
//       points: [
//         "Sell vs hold decision guidance",
//         "Market timing insights",
//         "Sale execution & profit optimization",
//         "Reinvestment planning",
//       ],
//     },
//     {
//       title: "Investment Advisory (India-Focused)",
//       points: [
//         "Reinvestment guidance",
//         "Property vs alternative investment insights",
//         "Risk-return analysis",
//         "Diversification strategies",
//       ],
//     },
//   ],
// },
//   {
//   id: "virtual-verification",
//   title: "Virtual Property Experience",
//   shortDescription:
//     "Experience properties remotely with live walkthroughs, real insights, and expert-backed decision support.",
//   image: "service-virtual",

//   description:
//     "We don’t just show properties—we help you experience, understand, and confidently decide from anywhere in the world.",

//   virtualSections: [
//     {
//       title: "Live Interactive Property Walkthrough",
//       points: [
//         "Real-time video calls (WhatsApp / Zoom)",
//         "Client-directed viewing (balcony, walls, surroundings)",
//         "No edits or filters—pure ground reality",
//         "Multiple properties in one session",
//         "Feel like you are physically present",
//       ],
//     },
//     {
//       title: "360° Visual Experience & Detailed Media",
//       points: [
//         "360° photos and panoramic views",
//         "Drone shots for layout & surroundings",
//         "High-detail videos (lighting, space, finish)",
//         "Close-up shots of defects",
//         "See beyond what agents or Agentss show",
//       ],
//     },
//     {
//       title: "Real Ground Reality Insights",
//       points: [
//         "Road access & connectivity",
//         "Water, drainage, and infrastructure",
//         "Noise levels & neighborhood quality",
//         "Identification of hidden negatives",
//       ],
//     },
//     {
//       title: "Lifestyle & Livability Check",
//       points: [
//         "Nearby essentials (hospitals, schools, stores)",
//         "Community quality & environment",
//         "Daily convenience factors",
//         "Suitability for living vs investment",
//       ],
//     },
//     {
//       title: "Comparative Property Analysis",
//       points: [
//         "Compare multiple properties side-by-side",
//         "Price vs value analysis",
//         "Pros & cons breakdown",
//         "Recommendations based on your goals",
//       ],
//     },
//     {
//       title: "Negotiation & Deal Strategy Support",
//       points: [
//         "Price negotiation based on findings",
//         "Identification of overpricing",
//         "Smart deal structuring",
//         "Handling seller conversations",
//       ],
//     },
//     {
//       title: "End-to-End Virtual Decision Support",
//       points: [
//         "Personalized consultation after visits",
//         "Clear recommendation: Buy / Avoid / Negotiate",
//         "Risk vs return explanation",
//         "Investment vs end-use guidance",
//       ],
//     },
//     {
//       title: "Continuous Updates Until Closure",
//       points: [
//         "Regular property status updates",
//         "Follow-ups with sellers/builders",
//         "Progress tracking",
//         "Complete transparency throughout",
//       ],
//     },
//   ],
// },
//   {
//   id: "document-management",
//   title: "Documents Management",
//   shortDescription:
//     "Secure, organized, and accessible document management for NRIs—handled with complete confidentiality.",
//   image: "service-document",

//   description:
//     "Your documents in India—organized, protected, and always within reach. We ensure complete confidentiality, structured handling, and seamless access for all your property, legal, and financial records.",

//   documentSections: [
//     {
//       title: "Document Collection & Organization",
//       points: [
//         "Collection of property, legal & financial documents",
//         "Sorting, categorizing & structured organization",
//         "Centralized document system creation",
//         "Digitization (scanning & soft copy creation)",
//       ],
//     },
//     {
//       title: "Secure Storage & Safekeeping",
//       points: [
//         "Physical document storage (if required)",
//         "Secure digital storage & backups",
//         "Confidential handling of sensitive documents",
//         "Access control & privacy assurance",
//       ],
//     },
//     {
//       title: "Property Document Management",
//       points: [
//         "Sale deeds, title documents & EC management",
//         "Layout approvals, tax receipts, utility records",
//         "Easy retrieval for transactions or legal use",
//         "Continuous updating of property files",
//       ],
//     },
//     {
//       title: "Legal & Compliance Documents Handling",
//       points: [
//         "Agreements, affidavits & legal paperwork handling",
//         "Notary & attestation coordination",
//         "Submission to government departments",
//         "Compliance tracking & updates",
//       ],
//     },
//     {
//       title: "Document Retrieval & Execution Support",
//       points: [
//         "Quick retrieval & sharing of documents",
//         "Courier & delivery coordination (domestic/international)",
//         "Assistance in document execution & signing",
//         "Digital sharing for remote approvals",
//       ],
//     },
//     {
//       title: "Periodic Updates & Reporting",
//       points: [
//         "Regular updates on document status",
//         "Digital access / shared folders",
//         "Alerts for missing or required documents",
//         "Full transparency in handling",
//       ],
//     },
//     {
//       title: "Title Trace & Historical Document Retrieval",
//       points: [
//         "Retrieval of old ownership records",
//         "Title chain verification (ownership history)",
//         "Encumbrance & litigation checks",
//         "Coordination with sub-registrar offices",
//       ],
//     },
//   ],
// },
// {
//   id: "nri-tax-filing",
//   title: "NRI Tax Filing & End-to-End Financial Compliance",
//   shortDescription: "Comprehensive tax filing, compliance, and fund repatriation services for NRIs.",
//   image: "service-registration",

//   description:
//     "We provide complete NRI tax filing, compliance, and fund repatriation services with full transparency, accuracy, and regulatory alignment.",

//   // 🔼 ABOVE CENTER LINE
//   taxServices: [
//     {
//       title: "Income Tax Return (ITR) Filing",
//       points: [
//         "Accurate ITR filing for NRI individuals",
//         "Handling multiple income sources (rent, capital gains, interest)",
//         "Compliance with latest tax regulations",
//       ],
//     },
//     {
//       title: "Rental Income Tax Management",
//       points: [
//         "Tax computation on rental income",
//         "Deduction optimization",
//         "TDS compliance & adjustments",
//       ],
//     },
//     {
//       title: "Capital Gains Tax Advisory",
//       points: [
//         "Tax calculation on property sale",
//         "Short-term & long-term capital gains",
//         "Reinvestment guidance",
//       ],
//     },
//     {
//       title: "TDS Compliance & Refunds",
//       points: [
//         "TDS verification & reconciliation",
//         "Lower/Nil TDS certificate assistance",
//         "Refund processing",
//       ],
//     },
//     {
//       title: "DTAA (Double Taxation Relief)",
//       points: [
//         "Avoid double taxation",
//         "DTAA benefits",
//         "Foreign income reporting",
//       ],
//     },
//     {
//       title: "Tax Planning & Optimization",
//       points: [
//         "Strategic tax planning",
//         "Investment structuring",
//         "Year-round advisory",
//       ],
//     },
//     {
//       title: "Notice Handling",
//       points: [
//         "Income tax notice response",
//         "Documentation drafting",
//         "Authority coordination",
//       ],
//     },
//     {
//       title: "Documentation Support",
//       points: [
//         "PAN & Aadhaar linkage",
//         "NRO/NRE compliance",
//         "Full documentation handling",
//       ],
//     },
//     {
//       title: "Remote Tax Filing",
//       points: [
//         "Fully remote processing",
//         "Secure document handling",
//         "Digital updates",
//       ],
//     },
//   ],

//   // 🔽 BELOW CENTER LINE
//   repatriationServices: [
//     {
//       title: "End-to-End Fund Repatriation",
//       points: [
//         "India ⇄ USA transfers",
//         "Full compliance handling",
//         "Bank coordination",
//       ],
//     },
//     {
//       title: "NRO → NRE Transfer",
//       points: [
//         "Fund transfer support",
//         "USD 1M limit handling",
//         "Documentation support",
//       ],
//     },
//     {
//       title: "Form 15CA & 15CB",
//       points: [
//         "Form preparation",
//         "CA certification",
//         "Compliance verification",
//       ],
//     },
//     {
//       title: "FEMA & LRS Advisory",
//       points: [
//         "FEMA compliance",
//         "LRS guidance",
//         "Legal structuring",
//       ],
//     },
//     {
//       title: "Tax Clearance",
//       points: [
//         "Capital gains compliance",
//         "TDS verification",
//         "Documentation handling",
//       ],
//     },
//     {
//       title: "Property Sale Repatriation",
//       points: [
//         "Sale proceeds transfer",
//         "RBI approvals",
//         "Payment structuring",
//       ],
//     },
//     {
//       title: "Inward Remittance",
//       points: [
//         "Funds to India",
//         "FEMA compliance",
//         "Tax advisory",
//       ],
//     },
//     {
//       title: "Bank Coordination",
//       points: [
//         "Follow-ups",
//         "Approvals",
//         "Issue resolution",
//       ],
//     },
//     {
//       title: "Risk-Free Transfers",
//       points: [
//         "100% compliance",
//         "No penalties",
//         "Transparent process",
//       ],
//     },
//     {
//       title: "Remote Handling",
//       points: [
//         "End-to-end remote",
//         "Secure documents",
//         "Real-time updates",
//       ],
//     },
//   ],
// },
//   {
//     id: "elderly-support",
//     title: "Senior Citizen Property Support",
//     shortDescription: "Support for elderly property owners with documentation, payments & coordination.",
//     image: "service-elderly",
//     description: "We provide dedicated support for elderly property owners in India, handling documentation, payments, and coordination with regular updates to NRI families.",
//     bullets: [
//       "Support for elderly property owners in India",
//       "Handling documentation & payments",
//       "Financial and Transaction assistance",
//       "On-ground coordination",
//       "Regular updates to NRI families",
//       "Compassionate and patient service",
//       "Complete accountability and transparency",
//     ],
//   },
//    {
//   id: "End-to-End-Property-Management",
//   title: "END TO END Property Management",
//   shortDescription: "Complete property management covering documentation, maintenance, coordination, and compliance from start to finish.",
//   image: "service-end-to-end", // ✅ FIXED
//   description: "Comprehensive property management including documentation, maintenance, coordination, and legal compliance—all handled seamlessly.",
//   bullets: [
//     "Tenant management",
//     "Rent collection and tracking",
//     "Property maintenance",
//     "Repairs and renovation support",
//     "Property inspection and surveillance",
//     "Security and safeguarding",
//     "Emergency support – immediate action for urgent issues",
//     "Periodic reporting with transparent updates via WhatsApp and email",
//     "Geo-tagged photos and videos"
//   ],
// },
// {
//   id: "property-management",
//   title: "Advanced NRI Property Management & Asset Oversight",
//   shortDescription:
//     "Institutional-grade asset management focused on performance and protection.",
//   image: "service-property",

//   description:
//     "We deliver advanced property management solutions combining technology, analytics, and on-ground execution for long-term wealth growth.",

//   wealthSections: [
//     {
//       title: "Asset Performance Analytics",
//       points: [
//         "ROI tracking",
//         "Market benchmarking",
//         "Performance reports",
//         "Actionable insights",
//       ],
//     },
//     {
//       title: "Smart Monitoring",
//       points: [
//         "CCTV integration",
//         "Remote dashboards",
//         "Real-time alerts",
//         "24/7 monitoring",
//       ],
//     },
//     {
//       title: "Revenue Optimization",
//       points: [
//         "Rental strategy",
//         "Dynamic pricing",
//         "Vacancy reduction",
//         "Income maximization",
//       ],
//     },
//     {
//       title: "Value Enhancement",
//       points: [
//         "Renovation planning",
//         "CapEx budgeting",
//         "Execution support",
//         "Value-add improvements",
//       ],
//     },
//     {
//       title: "Risk & Compliance",
//       points: [
//         "Legal monitoring",
//         "Risk alerts",
//         "Preventive actions",
//         "Compliance tracking",
//       ],
//     },
//     {
//       title: "Portfolio Strategy",
//       points: [
//         "Asset rebalancing",
//         "Buy/sell recommendations",
//         "Diversification",
//         "Wealth optimization",
//       ],
//     },
//   ],

//   powerLine:
//     "Advanced property management and asset oversight—focused on performance, protection, and long-term wealth growth.",
// },
// ];
export interface ServiceSection {
  title: string;
  points: string[];
}

export interface ServiceData {
  id: string;
  title: string;
  shortDescription: string;
  image: string;
  description: string;

  bullets?: string[];

  taxServices?: ServiceSection[];
  repatriationServices?: ServiceSection[];
  documentSections?: ServiceSection[];
  virtualSections?: ServiceSection[];
  wealthSections?: ServiceSection[];

  powerLine?: string;
  masterPositioningLine?: string; // Added to support your master line request
}

export const services: ServiceData[] = [
  {
    id: "buying-selling",
    title: "Property Buying, Selling, Investment Advisory & Long Term Portfolio Management",
    shortDescription: "End-to-end real estate solutions for NRIs covering acquisition, sale, and growth.",
    image: "service-investment",
    description: "End-to-end real estate solutions for NRIs—covering buying, selling, investment, and long-term portfolio management.", // Using the Master Positioning Line here as the main intro
    
    wealthSections: [
      {
        title: "Property Buying",
        points: [
          "Property identification based on your goals (investment / personal use)",
          "Virtual property verification & site inspections",
          "Title due diligence & legal verification",
          "Builder / seller credibility checks",
          "Price evaluation & negotiation support",
          "Agreement drafting & review",
          "Power of Attorney structuring (if required)",
          "Transaction coordination & registration execution"
        ],
      },
      {
        title: "Property Selling",
        points: [
          "Property valuation & market positioning",
          "Preparing property for sale (documentation + presentation)",
          "Buyer sourcing & screening",
          "Negotiation & deal structuring",
          "Agreement drafting & execution",
          "Handling TDS, tax, and compliance requirements",
          "Sale deed registration & closure",
          "Fund management & repatriation support"
        ],
      },
      {
        title: "Investment Advisory",
        points: [
          "Understanding your investment goals (rental / appreciation / diversification)",
          "Location & project analysis",
          "Risk assessment (legal, financial, market)",
          "ROI & yield evaluation",
          "Builder and project due diligence",
          "Investment comparison & recommendations",
          "Timing strategy (buy / hold / exit)"
        ],
      },
      {
        title: "Long-Term Portfolio Management",
        points: [
          "Managing multiple properties under one system",
          "Rental income management & tenant handling",
          "Maintenance & asset upkeep",
          "Expense tracking & cash flow reporting",
          "Tax & compliance coordination",
          "Periodic portfolio review (performance analysis)",
          "Buy / sell / hold recommendations",
          "Reinvestment & wealth growth strategies"
        ],
      },
    ],
    powerLine: "Secure, verified, and hassle-free property acquisition—without your physical presence. Optimized sale value with smooth execution. Strategic investments backed by data. Complete control and wealth optimization.", // Combined Power Lines for meta/summary if needed, though they will be displayed per section in the UI.
    masterPositioningLine: "End-to-end real estate solutions for NRIs—covering buying, selling, investment, and long-term portfolio management.",
  },
  {
    id: "legal-documentation",
    title: "Legal, Documentation & Compliance Support",
    shortDescription: "Complete legal due diligence, documentation, and compliance management.",
    image: "service-legal",
    description: "We handle every legal and documentation aspect of your property transactions with accuracy, compliance, and accountability.",
    wealthSections: [
  {
    title: "Legal Due Diligence",
    points: [
      "Title verification (clear ownership check)",
      "Encumbrance certificate (EC) verification",
      "Land use & zoning validation",
      "Approval checks (layout, building permissions)",
      "Litigation / dispute background check",
    ],
  },
  {
    title: "Document Collection & Validation",
    points: [
      "Collecting all documents from seller/builder",
      "Cross-verification of originals",
      "Identifying missing/inconsistent documents",
      "Transaction-ready file preparation",
    ],
  },
  {
    title: "Regulatory Compliance",
    points: [
      "RERA verification",
      "Approval & permission checks",
      "Construction legality validation",
      "Local/state law compliance",
    ],
  },
  {
    title: "Agreement Drafting & Review",
    points: [
      "Agreement to Sale drafting",
      "Builder agreement / sale deed review",
      "Clause protection for NRI",
      "Negotiation support",
    ],
  },
  {
    title: "Power of Attorney (PoA) Setup",
    points: [
      "Drafting GPA / SPA",
      "Attestation & apostille coordination",
      "Adjudication & registration in India",
      "Acting as authorized representative",
    ],
  },
  {
    title: "Financial & Tax Compliance",
    points: [
      "TDS compliance",
      "Form 15CA / 15CB",
      "Capital gains documentation",
      "PAN & KYC compliance",
    ],
  },
  {
    title: "Registration & Stamp Duty Compliance",
    points: [
      "Stamp duty calculation & payment",
      "Registration scheduling",
      "Sale deed execution",
      "Sub-Registrar handling",
    ],
  },
  {
    title: "Post-Registration Compliance",
    points: [
      "Mutation / Khata transfer",
      "Property tax update",
      "Utility transfers",
      "Society updates",
    ],
  },
  {
    title: "Risk Advisory & Litigation Support",
    points: [
      "Fraud prevention checks",
      "Legal advisory",
      "Court coordination",
      "Lawyer liaison",
    ],
  },
],
    powerLine: "From verification to registration to compliance—we manage every legal detail of your property in India.",
  },
  {
    id: "gpa-spa",
    title: "GPA & SPA Services for NRIs",
    shortDescription: "Structured Power of Attorney solutions enabling secure and remote transactions.",
    image: "service-gpa",
    description: "We provide comprehensive Power of Attorney solutions tailored for NRIs, enabling secure, compliant, and fully controlled execution of property, financial, and legal matters in India.",
    wealthSections: [
  {
    title: "Types of Power of Attorney",
    points: [
      "General Power of Attorney (GPA) – broad authority across activities",
      "Special Power of Attorney (SPA) – specific transaction-based authority",
      "Durable Power of Attorney – valid even during incapacity",
      "Non-Durable Power of Attorney – short-term authority",
      "Revocable Power of Attorney – can be cancelled anytime",
      "Irrevocable Power of Attorney – fixed for contractual interest",
      "Property-Specific Power of Attorney – for real estate transactions",
      "Banking / Financial Power of Attorney – account & fund handling",
      "Legal / Litigation Power of Attorney – court & legal representation",
    ],
  },
  {
    title: "Power of Attorney Advisory & Structuring",
    points: [
      "GPA vs SPA guidance",
      "Scope definition",
      "Risk limitation structuring",
      "Protection-focused drafting",
    ],
  },
  {
    title: "Drafting of GPA / SPA",
    points: [
      "Property transactions",
      "Rental & management",
      "Banking & financial authority",
      "Court representation",
      "Clear authority clauses",
    ],
  },
  {
    title: "Attestation & Apostille",
    points: [
      "Notary & embassy attestation",
      "Apostille coordination",
      "Country-specific compliance",
      "End-to-end handling",
    ],
  },
  {
    title: "Registration in India",
    points: [
      "Stamp duty & adjudication",
      "Sub-Registrar registration",
      "State compliance",
      "On-ground execution",
    ],
  },
  {
    title: "Execution & Representation",
    points: [
      "Signing agreements",
      "Property transaction handling",
      "Bank coordination",
      "Authority execution",
    ],
  },
  {
    title: "POA Monitoring & Control",
    points: [
      "Usage tracking",
      "Misuse prevention",
      "Revocation support",
      "Lifecycle management",
    ],
  },
  {
    title: "Multi-POA Management",
    points: [
      "Managing multiple POAs",
      "Central tracking",
      "Integration with transactions",
      "Long-term lifecycle handling",
    ],
  },
],
    powerLine: "Authorize with confidence—your property, transactions, and legal matters handled seamlessly in India.",
  },
  {
    id: "financial-banking",
    title: "Financial & Banking Services for NRIs",
    shortDescription: "Complete financial structuring, banking coordination, and fund management for NRI real estate transactions.",
    image: "service-finance",
    description: "We provide end-to-end financial and banking solutions tailored for NRIs, ensuring compliant, transparent, and optimized handling of funds across property investments in India.",
    wealthSections: [
  {
    title: "NRE / NRO Account Setup & Management",
    points: [
      "Account opening assistance",
      "Investment-based structuring",
      "Bank coordination",
      "KYC compliance",
    ],
  },
  {
    title: "Property Investment Fund Planning",
    points: [
      "Budget planning",
      "Fund allocation strategy",
      "Return-focused structuring",
      "Timing advisory",
    ],
  },
  {
    title: "Loan & Financing Assistance",
    points: [
      "NRI home loan advisory",
      "Loan processing",
      "Bank approvals",
      "EMI structuring",
    ],
  },
  {
    title: "Transaction Structuring & Payments",
    points: [
      "Stage-wise payments",
      "Fund flow handling",
      "Secure transactions",
      "Error-free coordination",
    ],
  },
  {
    title: "Repatriation Planning",
    points: [
      "Outward remittance planning",
      "RBI compliance",
      "Documentation handling",
      "Efficient transfers",
    ],
  },
  {
    title: "Financial Structuring",
    points: [
      "Capital gains planning",
      "TDS optimization",
      "Tax-integrated structuring",
      "Return maximization",
    ],
  },
  {
    title: "Forex Optimization",
    points: [
      "Exchange timing strategy",
      "USD ⇄ INR advisory",
      "Forex cost reduction",
      "Value maximization",
    ],
  },
  {
    title: "Financial Reporting",
    points: [
      "Performance tracking",
      "Cash flow visibility",
      "Profit reports",
      "Full transparency",
    ],
  },
],
    powerLine: "From funding to profit realization—complete financial control over your real estate investments in India.",
  },
  {
    id: "asset-wealth",
    title: "Asset & Wealth Management Support",
    shortDescription: "Strategically manage, protect, and grow your real estate wealth across borders.",
    image: "service-wealth",
    description: "We help you manage, protect, and grow your real estate assets with structured planning, financial discipline, and long-term wealth strategies.",
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
    shortDescription: "Experience properties remotely with live walkthroughs, real insights, and expert-backed decision support.",
    image: "service-virtual",
    description: "We don’t just show properties—we help you experience, understand, and confidently decide from anywhere in the world.",
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
          "See beyond what agents or Agentss show",
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
    shortDescription: "Secure, organized, and accessible document management for NRIs—handled with complete confidentiality.",
    image: "service-document",
    description: "Your documents in India—organized, protected, and always within reach. We ensure complete confidentiality, structured handling, and seamless access for all your property, legal, and financial records.",
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
    description: "We provide complete NRI tax filing, compliance, and fund repatriation services with full transparency, accuracy, and regulatory alignment.",
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
    image: "service-end-to-end",
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
  },
  {
    id: "property-management",
    title: "Advanced NRI Property Management & Asset Oversight",
    shortDescription: "Institutional-grade asset management focused on performance and protection.",
    image: "service-property",
    description: "We deliver advanced property management solutions combining technology, analytics, and on-ground execution for long-term wealth growth.",
    wealthSections: [
  {
    title: "Asset Performance Analytics",
    points: [
      "ROI tracking",
      "Performance reports",
      "Market benchmarking",
      "Actionable insights",
    ],
  },
  {
    title: "Smart Property Monitoring",
    points: [
      "CCTV integration",
      "Remote dashboards",
      "Real-time alerts",
      "24/7 monitoring",
    ],
  },
  {
    title: "Revenue Maximization",
    points: [
      "Rental strategy",
      "Dynamic pricing",
      "Vacancy reduction",
      "Income growth",
    ],
  },
  {
    title: "Value Enhancement",
    points: [
      "Renovation planning",
      "CapEx budgeting",
      "Execution support",
      "Value improvements",
    ],
  },
  {
    title: "Risk & Compliance Intelligence",
    points: [
      "Legal monitoring",
      "Compliance alerts",
      "Risk flags",
      "Preventive actions",
    ],
  },
  {
    title: "Portfolio Strategy",
    points: [
      "Asset rebalancing",
      "Buy/sell strategy",
      "Diversification",
      "Wealth optimization",
    ],
  },
  {
    title: "Exit Strategy",
    points: [
      "Pre-sale preparation",
      "Market timing",
      "Premium positioning",
      "Maximized returns",
    ],
  },
],
    powerLine: "Advanced property management and asset oversight—focused on performance, protection, and long-term wealth growth.",
  },
];
