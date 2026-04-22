// export interface ServiceSection {
//   title: string;
//   points: string[];
//   sectionNote?: string; // Added to support your master line request
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

//   powerLine?: string;
//   masterPositioningLine?: string;
  
// }

// export const services: ServiceData[] = [
//   {
//     id: "buying-selling",
//     title: "Property Buying, Selling, Investment Advisory & Long Term Portfolio Management",
//     shortDescription: "End-to-end real estate solutions for NRIs covering acquisition, sale, and growth.",
//     image: "service-investment",
//     description: "End-to-end real estate solutions for NRIs—covering buying, selling, investment, and long-term portfolio management.", // Using the Master Positioning Line here as the main intro
    
//     wealthSections: [
//       {
//         title: "Property Buying",
//         points: [
//           "Property identification based on your goals (investment / personal use)",
//           "Virtual property verification & site inspections",
//           "Title due diligence & legal verification",
//           "Builder / seller credibility checks",
//           "Price evaluation & negotiation support",
//           "Agreement drafting & review",
//           "Power of Attorney structuring (if required)",
//           "Transaction coordination & registration execution"
//         ],
//       },
//       {
//         title: "Property Selling",
//         points: [
//           "Property valuation & market positioning",
//           "Preparing property for sale (documentation + presentation)",
//           "Buyer sourcing & screening",
//           "Negotiation & deal structuring",
//           "Agreement drafting & execution",
//           "Handling TDS, tax, and compliance requirements",
//           "Sale deed registration & closure",
//           "Fund management & repatriation support"
//         ],
//       },
//       {
//         title: "Investment Advisory",
//         points: [
//           "Understanding your investment goals (rental / appreciation / diversification)",
//           "Location & project analysis",
//           "Risk assessment (legal, financial, market)",
//           "ROI & yield evaluation",
//           "Builder and project due diligence",
//           "Investment comparison & recommendations",
//           "Timing strategy (buy / hold / exit)"
//         ],
//       },
//       {
//         title: "Long-Term Portfolio Management",
//         points: [
//           "Managing multiple properties under one system",
//           "Rental income management & tenant handling",
//           "Maintenance & asset upkeep",
//           "Expense tracking & cash flow reporting",
//           "Tax & compliance coordination",
//           "Periodic portfolio review (performance analysis)",
//           "Buy / sell / hold recommendations",
//           "Reinvestment & wealth growth strategies"
//         ],
//       },
//     ],
//     powerLine: "Secure, verified, and hassle-free property acquisition—without your physical presence. Optimized sale value with smooth execution. Strategic investments backed by data. Complete control and wealth optimization.", // Combined Power Lines for meta/summary if needed, though they will be displayed per section in the UI.
//     masterPositioningLine: "End-to-end real estate solutions for NRIs—covering buying, selling, investment, and long-term portfolio management.",
//   },
//     {
//     id: "legal-documentation",
//     title: "Legal, Documentation & Compliance Support",
//     shortDescription: "Complete legal due diligence, documentation, and compliance management.",
//     image: "service-legal",
//     description: "We handle every legal and documentation aspect of your property transactions with accuracy, compliance, and accountability.",
//     wealthSections: [
//       {
//         title: "Legal Due Diligence",
//         points: [
//           "Title verification (clear ownership check)",
//           "Encumbrance certificate (EC) verification",
//           "Land use & zoning validation",
//           "Approval checks (layout, building permissions)",
//           "Litigation / dispute background check",
//         ],
//       },
//       {
//         title: "Document Collection & Validation",
//         points: [
//           "Collecting all documents from seller/builder",
//           "Cross-verification of originals",
//           "Identifying missing/inconsistent documents",
//           "Transaction-ready file preparation",
//         ],
//       },
//       {
//         title: "Regulatory Compliance",
//         points: [
//           "RERA verification",
//           "Approval & permission checks",
//           "Construction legality validation",
//           "Local/state law compliance",
//         ],
//       },
//       {
//         title: "Agreement Drafting & Review",
//         points: [
//           "Agreement to Sale drafting",
//           "Builder agreement / sale deed review",
//           "Clause protection for NRI",
//           "Negotiation support",
//         ],
//       },
//       {
//         title: "Power of Attorney (PoA) Setup",
//         points: [
//           "Drafting GPA / SPA",
//           "Attestation & apostille coordination",
//           "Adjudication & registration in India",
//           "Acting as authorized representative",
//         ],
//       },
//       {
//         title: "Financial & Tax Compliance",
//         points: [
//           "TDS compliance",
//           "Form 15CA / 15CB",
//           "Capital gains documentation",
//           "PAN & KYC compliance",
//         ],
//       },
//       {
//         title: "Registration & Stamp Duty Compliance",
//         points: [
//           "Stamp duty calculation & payment",
//           "Registration scheduling",
//           "Sale deed execution",
//           "Sub-Registrar handling",
//         ],
//       },
//       {
//         title: "Post-Registration Compliance",
//         points: [
//           "Mutation / Khata transfer",
//           "Property tax update",
//           "Utility transfers",
//           "Society updates",
//         ],
//       },
//       {
//         title: "Risk Advisory & Litigation Support",
//         points: [
//           "Fraud prevention checks",
//           "Legal advisory",
//           "Court coordination",
//           "Lawyer liaison",
//         ],
//       },
//     ],
//     powerLine: "From verification to registration to compliance—we manage every legal detail of your property in India.",
//   },
//   {
//     id: "gpa-spa",
//     title: "GPA & SPA Services for NRIs",
//     shortDescription: "Structured Power of Attorney solutions enabling secure and remote transactions.",
//     image: "service-gpa",
//     description: "We provide comprehensive Power of Attorney solutions tailored for NRIs, enabling secure, compliant, and fully controlled execution of property, financial, and legal matters in India.",
//     wealthSections: [
//       {
//         title: "Types of Power of Attorney",
//         points: [
//           "General Power of Attorney (GPA) – Broad, multi-purpose authority",
//           "Special Power of Attorney (SPA) – Task-specific/limited authority",
//           "Durable & Non-Durable POA – Lifecycle-based authority control",
//           "Revocable & Irrevocable POA – Flexibility and secure structuring",
//           "Property-Specific POA – Sale, purchase, and registration focus",
//           "Banking & Financial POA – Account operations and loan handling",
//           "Legal & Litigation POA – Court and legal representation"
//         ],
//         sectionNote: "Structured Power of Attorney solutions tailored to your specific needs—secure, compliant, and fully controlled."
//       },
//       {
//         title: "PoA Advisory & Structuring",
//         points: [
//           "Guidance on GPA vs SPA selection",
//           "Defining scope (Management vs. Transaction)",
//           "Risk assessment & authority limitation structuring",
//           "Drafting strategies to protect NRI interests"
//         ]
//       },
//       {
//         title: "Customized Drafting",
//         points: [
//           "Drafting for Property sale, purchase, and rental",
//           "Banking, financial, and NRE/NRO authority",
//           "Court representation & legal notices",
//           "Inclusion of clear authority clauses & restrictions"
//         ]
//       },
//       {
//         title: "Attestation & Apostille Coordination",
//         points: [
//           "Notary & Embassy attestation (Abroad & India)",
//           "Apostille coordination for Hague Convention countries",
//           "Country-specific requirement guidance",
//           "End-to-end documentation handling"
//         ]
//       },
//       {
//         title: "Adjudication & Registration in India",
//         points: [
//           "Stamp duty calculation & adjudication process",
//           "Registration at local Sub-Registrar offices",
//           "State-specific compliance (e.g., Delhi, Maharashtra, Karnataka)",
//           "Complete on-ground execution support"
//         ]
//       },
//       {
//         title: "Authorized Representative Services",
//         points: [
//           "Acting as authorized signatory for property deals",
//           "Coordinating with builders, buyers, and authorities",
//           "Signing agreements & registration documents",
//           "Managing bank & loan-related paperwork"
//         ]
//       },
//       {
//         title: "Litigation & Court Support",
//         points: [
//           "Coordination with legal networks for hearings",
//           "Filing cases & responding to legal notices",
//           "Handling court documentation & follow-ups",
//           "On-ground representation via PoA"
//         ]
//       },
//       {
//         title: "Monitoring, Control & Revocation",
//         points: [
//           "Continuous monitoring of PoA usage",
//           "Prevention of misuse or overreach",
//           "Revocation drafting & execution support",
//           "Portfolio-level lifecycle management"
//         ]
//       },
//       {
//         title: "Multi-Purpose Portfolio Management",
//         points: [
//           "Centralized tracking of multiple POAs",
//           "Integration with tax and transaction records",
//           "Updating & reissuing POAs as required",
//           "Long-term management of all legal authorizations"
//         ]
//       }
//     ],
//     powerLine: "Authorize with confidence—your property, transactions, and legal matters handled seamlessly in India."
//   },
//   {
//     id: "financial-banking",
//     title: "Financial & Banking Services for NRIs",
//     shortDescription: "Complete financial structuring, banking coordination, and fund management for NRI real estate transactions.",
//     image: "service-finance",
//     description: "We provide end-to-end financial and banking solutions tailored for NRIs, ensuring compliant, transparent, and optimized handling of funds across property investments in India.",
//     wealthSections: [
//       {
//         title: "NRE / NRO Account & Banking Liaison",
//         points: [
//           "NRE / NRO account setup & structuring",
//           "Ongoing banking coordination & follow-ups",
//           "KYC & compliance update management",
//           "Authorized banking representation"
//         ]
//       },
//       {
//         title: "Investment Fund & Risk Planning",
//         points: [
//           "Budget planning & fund allocation strategy",
//           "ROI vs. Risk analysis (Overpricing check)",
//           "Liquidity & exit feasibility evaluation",
//           "Developer payment risk assessment"
//         ]
//       },
//       {
//         title: "Financing & Loan Assistance",
//         points: [
//           "NRI Home, Personal & Collateral loan advisory",
//           "Application processing & bank approvals",
//           "EMI structuring & bridge funding solutions",
//           "Managing timing gaps in transactions"
//         ]
//       },
//       {
//         title: "Transaction & Payment Structuring",
//         points: [
//           "Stage-wise construction-linked planning",
//           "Risk-based fund release strategy",
//           "Joint investment & co-ownership structuring",
//           "Secure buyer/seller fund flow execution"
//         ]
//       },
//       {
//         title: "Global Fund Movement & Repatriation",
//         points: [
//           "Inbound/Outbound remittance (India ⇄ Abroad)",
//           "RBI limit planning & compliance",
//           "Sale proceeds allocation (NRE/NRO)",
//           "Forex & currency strategy (USD ⇄ INR)"
//         ]
//       },
//       {
//         title: "Tax-Linked Financial Structuring",
//         points: [
//           "Capital gains planning & TDS optimization",
//           "Integration with annual tax filings",
//           "Lease structuring for commercial yields",
//           "Corporate tenant yield optimization"
//         ]
//       },
//       {
//         title: "Premium & HNI Services",
//         points: [
//           "Multi-account fund structuring for HNIs",
//           "Confidential large-ticket deal management",
//           "Priority execution & multi-stakeholder coordination",
//           "Structured investment for maximum net returns"
//         ]
//       },
//       {
//         title: "Reporting & Deal Closure",
//         points: [
//           "Investment performance & cash flow tracking",
//           "Final payment & registration day management",
//           "Digital financial reporting & transparency",
//           "End-to-end transaction closure support"
//         ]
//       }
//     ],
//     powerLine: "From funding to profit realization—complete financial control over your real estate investments in India."
//   },
//   {
//     id: "asset-wealth",
//     title: "Asset & Wealth Management Support",
//     shortDescription: "Strategically manage, protect, and grow your real estate wealth across borders.",
//     image: "service-wealth",
//     description: "We help you manage, protect, and grow your real estate assets with structured planning, financial discipline, and long-term wealth strategies.",
//     wealthSections: [
//       {
//         title: "Asset Structuring & Ownership Planning",
//         points: [
//           "Ownership structuring (individual / joint / family)",
//           "Tax-efficient asset structuring",
//           "Inheritance-ready planning",
//           "Risk minimization in ownership",
//         ],
//       },
//       {
//         title: "Property Portfolio Management",
//         points: [
//           "Managing multiple properties in one system",
//           "Income vs expense performance tracking",
//           "Periodic portfolio reviews",
//           "Buy / hold / sell recommendations",
//         ],
//       },
//       {
//         title: "Rental Yield Optimization",
//         points: [
//           "Market-based rent optimization",
//           "Minimizing vacancy periods",
//           "Tenant quality management",
//           "Periodic rent revisions",
//         ],
//       },
//       {
//         title: "Expense & Cash Flow Management",
//         points: [
//           "Tracking all property expenses",
//           "Utility, maintenance & tax payments",
//           "Monthly cash flow reports",
//           "Profitability analysis",
//         ],
//       },
//       {
//         title: "Fund Management & Repatriation Planning",
//         points: [
//           "NRE/NRO account handling",
//           "Fund movement planning (India ⇄ abroad)",
//           "Transfer timing & structuring",
//           "Banking coordination",
//         ],
//       },
//       {
//         title: "Property Maintenance & Value Preservation",
//         points: [
//           "Regular inspections & upkeep",
//           "Preventive maintenance",
//           "Renovations & upgrades",
//           "Protection of vacant properties",
//         ],
//       },
//       {
//         title: "Risk Management & Safeguarding",
//         points: [
//           "Property security monitoring",
//           "Legal risk checks",
//           "Fraud prevention",
//           "Emergency response handling",
//         ],
//       },
//       {
//         title: "Exit Strategy & Wealth Realization",
//         points: [
//           "Sell vs hold decision guidance",
//           "Market timing insights",
//           "Sale execution & profit optimization",
//           "Reinvestment planning",
//         ],
//       },
//       {
//         title: "Investment Advisory (India-Focused)",
//         points: [
//           "Reinvestment guidance",
//           "Property vs alternative investment insights",
//           "Risk-return analysis",
//           "Diversification strategies",
//         ],
//       },
//     ],
//   },
//   {
//     id: "virtual-verification",
//     title: "Virtual Property Experience",
//     shortDescription: "Experience properties remotely with live walkthroughs, real insights, and expert-backed decision support.",
//     image: "service-virtual",
//     description: "We don’t just show properties—we help you experience, understand, and confidently decide from anywhere in the world.",
//     virtualSections: [
//       {
//         title: "Live Interactive Property Walkthrough",
//         points: [
//           "Real-time video calls (WhatsApp / Zoom)",
//           "Client-directed viewing (balcony, walls, surroundings)",
//           "No edits or filters—pure ground reality",
//           "Multiple properties in one session",
//           "Feel like you are physically present",
//         ],
//       },
//       {
//         title: "360° Visual Experience & Detailed Media",
//         points: [
//           "360° photos and panoramic views",
//           "Drone shots for layout & surroundings",
//           "High-detail videos (lighting, space, finish)",
//           "Close-up shots of defects",
//           "See beyond what agents or Agentss show",
//         ],
//       },
//       {
//         title: "Real Ground Reality Insights",
//         points: [
//           "Road access & connectivity",
//           "Water, drainage, and infrastructure",
//           "Noise levels & neighborhood quality",
//           "Identification of hidden negatives",
//         ],
//       },
//       {
//         title: "Lifestyle & Livability Check",
//         points: [
//           "Nearby essentials (hospitals, schools, stores)",
//           "Community quality & environment",
//           "Daily convenience factors",
//           "Suitability for living vs investment",
//         ],
//       },
//       {
//         title: "Comparative Property Analysis",
//         points: [
//           "Compare multiple properties side-by-side",
//           "Price vs value analysis",
//           "Pros & cons breakdown",
//           "Recommendations based on your goals",
//         ],
//       },
//       {
//         title: "Negotiation & Deal Strategy Support",
//         points: [
//           "Price negotiation based on findings",
//           "Identification of overpricing",
//           "Smart deal structuring",
//           "Handling seller conversations",
//         ],
//       },
//       {
//         title: "End-to-End Virtual Decision Support",
//         points: [
//           "Personalized consultation after visits",
//           "Clear recommendation: Buy / Avoid / Negotiate",
//           "Risk vs return explanation",
//           "Investment vs end-use guidance",
//         ],
//       },
//       {
//         title: "Continuous Updates Until Closure",
//         points: [
//           "Regular property status updates",
//           "Follow-ups with sellers/builders",
//           "Progress tracking",
//           "Complete transparency throughout",
//         ],
//       },
//     ],
//   },
//   {
//     id: "document-management",
//     title: "Documents Management",
//     shortDescription: "Secure, organized, and accessible document management for NRIs—handled with complete confidentiality.",
//     image: "service-document",
//     description: "Your documents in India—organized, protected, and always within reach. We ensure complete confidentiality, structured handling, and seamless access for all your property, legal, and financial records.",
//     documentSections: [
//       {
//         title: "Document Collection & Organization",
//         points: [
//           "Collection of property, legal & financial documents",
//           "Sorting, categorizing & structured organization",
//           "Centralized document system creation",
//           "Digitization (scanning & soft copy creation)",
//         ],
//       },
//       {
//         title: "Secure Storage & Safekeeping",
//         points: [
//           "Physical document storage (if required)",
//           "Secure digital storage & backups",
//           "Confidential handling of sensitive documents",
//           "Access control & privacy assurance",
//         ],
//       },
//       {
//         title: "Property Document Management",
//         points: [
//           "Sale deeds, title documents & EC management",
//           "Layout approvals, tax receipts, utility records",
//           "Easy retrieval for transactions or legal use",
//           "Continuous updating of property files",
//         ],
//       },
//       {
//         title: "Legal & Compliance Documents Handling",
//         points: [
//           "Agreements, affidavits & legal paperwork handling",
//           "Notary & attestation coordination",
//           "Submission to government departments",
//           "Compliance tracking & updates",
//         ],
//       },
//       {
//         title: "Document Retrieval & Execution Support",
//         points: [
//           "Quick retrieval & sharing of documents",
//           "Courier & delivery coordination (domestic/international)",
//           "Assistance in document execution & signing",
//           "Digital sharing for remote approvals",
//         ],
//       },
//       {
//         title: "Periodic Updates & Reporting",
//         points: [
//           "Regular updates on document status",
//           "Digital access / shared folders",
//           "Alerts for missing or required documents",
//           "Full transparency in handling",
//         ],
//       },
//       {
//         title: "Title Trace & Historical Document Retrieval",
//         points: [
//           "Retrieval of old ownership records",
//           "Title chain verification (ownership history)",
//           "Encumbrance & litigation checks",
//           "Coordination with sub-registrar offices",
//         ],
//       },
//     ],
//   },
//     {
//     id: "nri-tax-filing",
//     title: "NRI Tax Filing & End-to-End Financial Compliance",
//     shortDescription: "Comprehensive tax filing, compliance, and fund repatriation services for NRIs.",
//     image: "service-registration",
//     description: "We provide complete NRI tax filing, compliance, and fund repatriation services with full transparency, accuracy, and regulatory alignment.",
//     taxServices: [
//       {
//         title: "Income Tax Return (ITR) Filing",
//         points: [
//           "Accurate ITR filing for NRI individuals",
//           "Handling multiple income sources (rent, capital gains, interest)",
//           "Compliance with latest tax regulations",
//         ],
//       },
//       {
//         title: "Rental Income Tax Management",
//         points: [
//           "Tax computation on rental income",
//           "Deduction optimization (standard deduction, interest, etc.)",
//           "TDS compliance & adjustments",
//         ],
//       },
//       {
//         title: "Capital Gains Tax Advisory",
//         points: [
//           "Tax calculation on property sale",
//           "Short-term & long-term capital gains handling",
//           "Guidance on reinvestment benefits (tax saving options)",
//         ],
//       },
//       {
//         title: "TDS Compliance & Refunds",
//         points: [
//           "TDS verification & reconciliation",
//           "Lower/Nil TDS certificate assistance",
//           "Claiming refunds efficiently",
//         ],
//       },
//       {
//         title: "Double Taxation Relief (DTAA)",
//         points: [
//           "Advisory on avoiding double taxation",
//           "DTAA benefit application",
//           "Foreign income reporting guidance",
//         ],
//       },
//       {
//         title: "Tax Planning & Optimization",
//         points: [
//           "Strategic tax planning for NRIs",
//           "Investment structuring for tax efficiency",
//           "Year-round advisory support",
//         ],
//       },
//       {
//         title: "Notice Handling & Representation",
//         points: [
//           "Responding to Income Tax notices",
//           "Drafting replies & documentation",
//           "Liaison with tax authorities",
//         ],
//       },
//       {
//         title: "Documentation & Compliance Support",
//         points: [
//           "PAN, Aadhaar linkage guidance",
//           "Bank & NRO/NRE account compliance",
//           "End-to-end documentation handling",
//         ],
//       },
//       {
//         title: "Remote Tax Filing Capability",
//         points: [
//           "Complete remote handling of tax filing",
//           "Secure document collection & processing",
//           "Timely updates & digital communication",
//         ],
//       },
//     ],
//     repatriationServices: [
//       {
//         title: "End-to-End Fund Repatriation Assistance",
//         points: [
//           "Complete handling of fund transfers from India to USA and USA to India",
//           "Step-by-step guidance with full compliance",
//           "Coordination with banks & financial institutions",
//         ],
//       },
//       {
//         title: "NRO to NRE Fund Transfer (India → Abroad)",
//         points: [
//           "Transfer of funds from NRO to NRE accounts",
//           "Annual repatriation limit management (USD 1 million)",
//           "Documentation & bank processing support",
//         ],
//       },
//       {
//         title: "Form 15CA & 15CB Compliance",
//         points: [
//           "Preparation and filing of Form 15CA",
//           "Chartered Accountant certification (Form 15CB)",
//           "Tax compliance verification before remittance",
//         ],
//       },
//       {
//         title: "Foreign Remittance Advisory (LRS & FEMA)",
//         points: [
//           "Guidance under Liberalised Remittance Scheme (LRS)",
//           "Compliance with Foreign Exchange Management Act (FEMA) regulations",
//           "Structuring transfers within legal frameworks",
//         ],
//       },
//       {
//         title: "Tax Clearance & Documentation",
//         points: [
//           "Capital gains tax compliance (if property sale involved)",
//           "TDS verification before remittance",
//           "End-to-end documentation handling",
//         ],
//       },
//       {
//         title: "Property Sale Fund Repatriation",
//         points: [
//           "Repatriation of sale proceeds from property in India",
//           "RBI compliance & approvals (if required)",
//           "Handling buyer payments & transfer structuring",
//         ],
//       },
//       {
//         title: "Inward Remittance (USA → India)",
//         points: [
//           "Receiving funds into NRE/NRO accounts",
//           "Purpose code & FEMA compliance",
//           "Advisory on taxation (if applicable)",
//         ],
//       },
//       {
//         title: "Bank Coordination & Processing",
//         points: [
//           "Liaison with banks for smooth processing",
//           "Follow-ups for faster approvals",
//           "Resolving queries & documentation gaps",
//         ],
//       },
//       {
//         title: "Compliance Review & Risk-Free Transfers",
//         points: [
//           "Ensuring 100% legal compliance",
//           "Avoidance of penalties or delays",
//           "Structured, transparent process",
//         ],
//       },
//       {
//         title: "Remote Handling & Reporting",
//         points: [
//           "Complete remote execution",
//           "Secure document collection",
//           "Real-time updates & status tracking",
//         ],
//       },
//     ],
//   },
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
//   {
//     id: "End-to-End-Property-Management",
//     title: "END TO END Property Management",
//     shortDescription: "Complete property management covering documentation, maintenance, coordination, and compliance from start to finish.",
//     image: "service-end-to-end",
//     description: "Comprehensive property management including documentation, maintenance, coordination, and legal compliance—all handled seamlessly.",
//     bullets: [
//       "Tenant management",
//       "Rent collection and tracking",
//       "Property maintenance",
//       "Repairs and renovation support",
//       "Property inspection and surveillance",
//       "Security and safeguarding",
//       "Emergency support – immediate action for urgent issues",
//       "Periodic reporting with transparent updates via WhatsApp and email",
//       "Geo-tagged photos and videos"
//     ],
//   },
//   {
//     id: "advanced-property-management",
//     title: "Advanced NRI Property Management & Asset Oversight",
//     shortDescription: "Institutional-grade asset management focused on performance and protection.",
//     image: "service-property",
//     description: "We deliver advanced property management solutions combining technology, analytics, and on-ground execution for long-term wealth growth.",
//     wealthSections: [
//       {
//         title: "Asset Performance Analytics & Optimization",
//         points: [
//           "ROI, yield & appreciation tracking",
//           "Property-wise performance reports",
//           "Market benchmarking & performance analysis",
//           "Actionable recommendations (upgrade / lease / sell)"
//         ],
//         sectionNote: "Turns property into a measurable, data-driven investment."
//       },
//       {
//         title: "Smart Property Monitoring & Automation",
//         points: [
//           "CCTV + remote access integration",
//           "Smart locks & sensor-based alerts",
//           "Real-time monitoring dashboards",
//           "Incident alerts (intrusion, water leaks, etc.)"
//         ],
//         sectionNote: "24/7 visibility without the need to be physically present in India."
//       },
//       {
//         title: "Vacancy Strategy & Revenue Maximization",
//         points: [
//           "Rental staging & furnishing advisory",
//           "Short-term vs. long-term rental strategy",
//           "Dynamic pricing guidance",
//           "Reducing vacancy periods to maximize active income"
//         ]
//       },
//       {
//         title: "CapEx Planning & Value Enhancement",
//         points: [
//           "Strategic upgrade & renovation planning",
//           "ROI-focused budgeting for major improvements",
//           "Execution & contractor supervision",
//           "Value-add enhancements before sale or lease"
//         ]
//       },
//       {
//         title: "Risk & Compliance Intelligence",
//         points: [
//           "Continuous legal & documentation monitoring",
//           "Alerts for tax, renewals, and legal updates",
//           "Risk flags (encroachments, disputes, dues)",
//           "Preventive action planning to avoid legal shocks"
//         ]
//       },
//       {
//         title: "Portfolio Strategy & Rebalancing",
//         points: [
//           "Identifying underperforming assets in the portfolio",
//           "Buy / hold / sell strategic recommendations",
//           "Rebalancing for optimized total returns",
//           "Diversification strategies for active wealth management"
//         ]
//       },
//       {
//         title: "Tenant & Lease Structuring",
//         points: [
//           "Premium corporate tenant acquisition",
//           "Institutional-grade long-term lease structuring",
//           "Lock-in periods & escalation clause planning",
//           "Rental security and yield optimization"
//         ]
//       },
//       {
//         title: "Exit Strategy Engineering",
//         points: [
//           "Preparing property for maximum resale value",
//           "Market timing and exit strategy planning",
//           "Legal & documentation readiness for sale",
//           "Positioning assets for premium buyers"
//         ]
//       },
//       {
//         title: "Integrated Financial Oversight",
//         points: [
//           "Income, tax, and reinvestment tracking",
//           "Complete fund flow visibility",
//           "Property-financial integration (Wealth growth mapping)",
//           "Single-view oversight of all India-based assets"
//         ]
//       },
//       {
//         title: "Family Office-Style Representation",
//         points: [
//           "Dedicated relationship manager (Premium)",
//           "Handling all India-side legal and operational matters",
//           "Coordination with CAs, lawyers, and banks",
//           "Single point of contact for family asset protection"
//         ]
//       }
//     ],
//     powerLine: "Advanced property management and asset oversight—focused on performance, protection, and long-term wealth growth."
//   }
// ];
export interface ServiceSection {
  title: string;
  points: string[];
  sectionNote?: string; // Added to support your master line request
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

  poaTypes?: ServiceSection[];
  poaTypesPowerLine?: string;
  poaServices?: ServiceSection[];

  powerLine?: string;
  masterPositioningLine?: string;
  
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
    
    // 🔼 SEPARATED TOP SECTION (Types of POA)
    poaTypes: [
      {
        title: "General Power of Attorney (GPA)",
        points: [
          "Gives broad powers to the representative",
          "Covers multiple activities (property, banking, legal, etc.)",
          "Suitable for long-term, ongoing authority",
        ],
      },
      {
        title: "Special Power of Attorney (SPA)",
        points: [
          "Limited to specific task or transaction",
          "Example: Only for selling one property",
          "Automatically ends after task completion",
        ],
      },
      {
        title: "Durable Power of Attorney",
        points: [
          "Remains valid even if the principal becomes incapacitated",
          "More common in international contexts",
          "Limited practical use in India but relevant for NRIs abroad",
        ],
      },
      {
        title: "Non-Durable Power of Attorney",
        points: [
          "Valid for a specific period or situation",
          "Ends if the principal becomes incapacitated",
          "Typically used for short-term needs",
        ],
      },
      {
        title: "Revocable Power of Attorney",
        points: [
          "Can be cancelled anytime by the principal",
          "Most commonly used format",
          "Gives flexibility and control",
        ],
      },
      {
        title: "Irrevocable Power of Attorney",
        points: [
          "Cannot be easily revoked",
          "Usually linked with financial or contractual interest",
          "Used in specific high-stakes transactions",
        ],
      },
      {
        title: "Property-Specific Power of Attorney",
        points: [
          "Created specifically for property matters",
          "Covers sale, purchase, registration, leasing",
          "Most common for NRIs",
        ],
      },
      {
        title: "Banking / Financial Power of Attorney",
        points: [
          "Authority for banking operations",
          "Managing accounts, transfers, loans",
          "Useful for NRE/NRO account handling",
        ],
      },
      {
        title: "Legal / Litigation Power of Attorney",
        points: [
          "For handling court cases & legal matters",
          "Authorizes lawyer/representative",
          "Filing, attending, and managing cases",
        ],
      },
    ],
    poaTypesPowerLine: "Structured Power of Attorney solutions tailored to your specific needs—secure, compliant, and fully controlled.",

    // 🔽 BOTTOM SECTION (Main Services)
    poaServices: [
      {
        title: "Power of Attorney Advisory & Structuring",
        points: [
          "Guidance on choosing GPA vs SPA based on requirement",
          "Scope definition (transaction / management / litigation)",
          "Risk assessment & limitation structuring",
          "Drafting strategy to protect NRI interests",
        ],
      },
      {
        title: "Drafting of GPA / SPA",
        points: [
          "Customized drafting for:",
          "Property sale / purchase",
          "Rental & management",
          "Bank & financial handling",
          "Court representation",
          "Clear authority clauses & restrictions",
          "Compliance with Indian legal standards",
        ],
      },
      {
        title: "Attestation & Apostille Coordination (Abroad + India)",
        points: [
          "Notary & embassy attestation abroad",
          "Apostille coordination (if applicable)",
          "Guidance on country-specific requirements",
          "End-to-end process handling",
        ],
      },
      {
        title: "POA Adjudication & Registration in India",
        points: [
          "Stamp duty & adjudication process",
          "Registration at Sub-Registrar office",
          "State-specific compliance handling(TELANGANA, ANDHRA PRADESH & KARNATAKA)",
          "Complete on-ground execution",
        ],
      },
      {
        title: "Acting as Authorized Representative",
        points: [
          "Representation for property transactions",
          "Signing agreements & registrations",
          "Handling bank & financial processes",
          "Coordination with builders, buyers, authorities",
        ],
      },
      {
        title: "Property Transaction Execution via POA",
        points: [
          "Sale / purchase execution",
          "Agreement to sale, registration handling",
          "Payment coordination",
          "Buyer/seller negotiation support",
        ],
      },
      {
        title: "Banking & Financial Authority via POA",
        points: [
          "Operating NRE/NRO accounts (as authorized)",
          "Handling fund transfers & documentation",
          "Loan processing & banking coordination",
          "Financial compliance support",
        ],
      },
      {
        title: "Litigation & Court Representation Support",
        points: [
          "Coordination with lawyers for court cases",
          "Filing cases / responding to notices",
          "Court documentation & follow-ups",
          "On-ground representation for hearings (through legal network)",
        ],
      },
      {
        title: "POA Monitoring, Control & Revocation Support",
        points: [
          "Monitoring usage of POA",
          "Preventing misuse / overreach",
          "Revocation drafting & execution",
          "Updating / reissuing POA when required",
        ],
      },
      {
        title: "Multi-Purpose POA Management (Portfolio Level)",
        points: [
          "Managing multiple POAs across properties",
          "Centralized tracking & documentation",
          "Integration with transactions, tax & compliance",
          "Long-term POA lifecycle management",
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
        title: "NRE / NRO Account & Banking Liaison",
        points: [
          "NRE / NRO account setup & structuring",
          "Ongoing banking coordination & follow-ups",
          "KYC & compliance update management",
          "Authorized banking representation"
        ]
      },
      {
        title: "Investment Fund & Risk Planning",
        points: [
          "Budget planning & fund allocation strategy",
          "ROI vs. Risk analysis (Overpricing check)",
          "Liquidity & exit feasibility evaluation",
          "Developer payment risk assessment"
        ]
      },
      {
        title: "Financing & Loan Assistance",
        points: [
          "NRI Home, Personal & Collateral loan advisory",
          "Application processing & bank approvals",
          "EMI structuring & bridge funding solutions",
          "Managing timing gaps in transactions"
        ]
      },
      {
        title: "Transaction & Payment Structuring",
        points: [
          "Stage-wise construction-linked planning",
          "Risk-based fund release strategy",
          "Joint investment & co-ownership structuring",
          "Secure buyer/seller fund flow execution"
        ]
      },
      {
        title: "Global Fund Movement & Repatriation",
        points: [
          "Inbound/Outbound remittance (India ⇄ Abroad)",
          "RBI limit planning & compliance",
          "Sale proceeds allocation (NRE/NRO)",
          "Forex & currency strategy (USD ⇄ INR)"
        ]
      },
      {
        title: "Tax-Linked Financial Structuring",
        points: [
          "Capital gains planning & TDS optimization",
          "Integration with annual tax filings",
          "Lease structuring for commercial yields",
          "Corporate tenant yield optimization"
        ]
      },
      {
        title: "Premium & HNI Services",
        points: [
          "Multi-account fund structuring for HNIs",
          "Confidential large-ticket deal management",
          "Priority execution & multi-stakeholder coordination",
          "Structured investment for maximum net returns"
        ]
      },
      {
        title: "Reporting & Deal Closure",
        points: [
          "Investment performance & cash flow tracking",
          "Final payment & registration day management",
          "Digital financial reporting & transparency",
          "End-to-end transaction closure support"
        ]
      }
    ],
    powerLine: "From funding to profit realization—complete financial control over your real estate investments in India."
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
          "Deduction optimization (standard deduction, interest, etc.)",
          "TDS compliance & adjustments",
        ],
      },
      {
        title: "Capital Gains Tax Advisory",
        points: [
          "Tax calculation on property sale",
          "Short-term & long-term capital gains handling",
          "Guidance on reinvestment benefits (tax saving options)",
        ],
      },
      {
        title: "TDS Compliance & Refunds",
        points: [
          "TDS verification & reconciliation",
          "Lower/Nil TDS certificate assistance",
          "Claiming refunds efficiently",
        ],
      },
      {
        title: "Double Taxation Relief (DTAA)",
        points: [
          "Advisory on avoiding double taxation",
          "DTAA benefit application",
          "Foreign income reporting guidance",
        ],
      },
      {
        title: "Tax Planning & Optimization",
        points: [
          "Strategic tax planning for NRIs",
          "Investment structuring for tax efficiency",
          "Year-round advisory support",
        ],
      },
      {
        title: "Notice Handling & Representation",
        points: [
          "Responding to Income Tax notices",
          "Drafting replies & documentation",
          "Liaison with tax authorities",
        ],
      },
      {
        title: "Documentation & Compliance Support",
        points: [
          "PAN, Aadhaar linkage guidance",
          "Bank & NRO/NRE account compliance",
          "End-to-end documentation handling",
        ],
      },
      {
        title: "Remote Tax Filing Capability",
        points: [
          "Complete remote handling of tax filing",
          "Secure document collection & processing",
          "Timely updates & digital communication",
        ],
      },
    ],
    repatriationServices: [
      {
        title: "End-to-End Fund Repatriation Assistance",
        points: [
          "Complete handling of fund transfers from India to USA and USA to India",
          "Step-by-step guidance with full compliance",
          "Coordination with banks & financial institutions",
        ],
      },
      {
        title: "NRO to NRE Fund Transfer (India → Abroad)",
        points: [
          "Transfer of funds from NRO to NRE accounts",
          "Annual repatriation limit management (USD 1 million)",
          "Documentation & bank processing support",
        ],
      },
      {
        title: "Form 15CA & 15CB Compliance",
        points: [
          "Preparation and filing of Form 15CA",
          "Chartered Accountant certification (Form 15CB)",
          "Tax compliance verification before remittance",
        ],
      },
      {
        title: "Foreign Remittance Advisory (LRS & FEMA)",
        points: [
          "Guidance under Liberalised Remittance Scheme (LRS)",
          "Compliance with Foreign Exchange Management Act (FEMA) regulations",
          "Structuring transfers within legal frameworks",
        ],
      },
      {
        title: "Tax Clearance & Documentation",
        points: [
          "Capital gains tax compliance (if property sale involved)",
          "TDS verification before remittance",
          "End-to-end documentation handling",
        ],
      },
      {
        title: "Property Sale Fund Repatriation",
        points: [
          "Repatriation of sale proceeds from property in India",
          "RBI compliance & approvals (if required)",
          "Handling buyer payments & transfer structuring",
        ],
      },
      {
        title: "Inward Remittance (USA → India)",
        points: [
          "Receiving funds into NRE/NRO accounts",
          "Purpose code & FEMA compliance",
          "Advisory on taxation (if applicable)",
        ],
      },
      {
        title: "Bank Coordination & Processing",
        points: [
          "Liaison with banks for smooth processing",
          "Follow-ups for faster approvals",
          "Resolving queries & documentation gaps",
        ],
      },
      {
        title: "Compliance Review & Risk-Free Transfers",
        points: [
          "Ensuring 100% legal compliance",
          "Avoidance of penalties or delays",
          "Structured, transparent process",
        ],
      },
      {
        title: "Remote Handling & Reporting",
        points: [
          "Complete remote execution",
          "Secure document collection",
          "Real-time updates & status tracking",
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
    id: "advanced-property-management",
    title: "Advanced NRI Property Management & Asset Oversight",
    shortDescription: "Institutional-grade asset management focused on performance and protection.",
    image: "service-property",
    description: "We deliver advanced property management solutions combining technology, analytics, and on-ground execution for long-term wealth growth.",
    wealthSections: [
      {
        title: "Asset Performance Analytics & Optimization",
        points: [
          "ROI, yield & appreciation tracking",
          "Property-wise performance reports",
          "Market benchmarking & performance analysis",
          "Actionable recommendations (upgrade / lease / sell)"
        ],
        sectionNote: "Turns property into a measurable, data-driven investment."
      },
      {
        title: "Smart Property Monitoring & Automation",
        points: [
          "CCTV + remote access integration",
          "Smart locks & sensor-based alerts",
          "Real-time monitoring dashboards",
          "Incident alerts (intrusion, water leaks, etc.)"
        ],
        sectionNote: "24/7 visibility without the need to be physically present in India."
      },
      {
        title: "Vacancy Strategy & Revenue Maximization",
        points: [
          "Rental staging & furnishing advisory",
          "Short-term vs. long-term rental strategy",
          "Dynamic pricing guidance",
          "Reducing vacancy periods to maximize active income"
        ]
      },
      {
        title: "CapEx Planning & Value Enhancement",
        points: [
          "Strategic upgrade & renovation planning",
          "ROI-focused budgeting for major improvements",
          "Execution & contractor supervision",
          "Value-add enhancements before sale or lease"
        ]
      },
      {
        title: "Risk & Compliance Intelligence",
        points: [
          "Continuous legal & documentation monitoring",
          "Alerts for tax, renewals, and legal updates",
          "Risk flags (encroachments, disputes, dues)",
          "Preventive action planning to avoid legal shocks"
        ]
      },
      {
        title: "Portfolio Strategy & Rebalancing",
        points: [
          "Identifying underperforming assets in the portfolio",
          "Buy / hold / sell strategic recommendations",
          "Rebalancing for optimized total returns",
          "Diversification strategies for active wealth management"
        ]
      },
      {
        title: "Tenant & Lease Structuring",
        points: [
          "Premium corporate tenant acquisition",
          "Institutional-grade long-term lease structuring",
          "Lock-in periods & escalation clause planning",
          "Rental security and yield optimization"
        ]
      },
      {
        title: "Exit Strategy Engineering",
        points: [
          "Preparing property for maximum resale value",
          "Market timing and exit strategy planning",
          "Legal & documentation readiness for sale",
          "Positioning assets for premium buyers"
        ]
      },
      {
        title: "Integrated Financial Oversight",
        points: [
          "Income, tax, and reinvestment tracking",
          "Complete fund flow visibility",
          "Property-financial integration (Wealth growth mapping)",
          "Single-view oversight of all India-based assets"
        ]
      },
      {
        title: "Family Office-Style Representation",
        points: [
          "Dedicated relationship manager (Premium)",
          "Handling all India-side legal and operational matters",
          "Coordination with CAs, lawyers, and banks",
          "Single point of contact for family asset protection"
        ]
      }
    ],
    powerLine: "Advanced property management and asset oversight—focused on performance, protection, and long-term wealth growth."
  }
];
