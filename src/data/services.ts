export interface ServiceData {
  id: string;
  title: string;
  shortDescription: string;
  image: string;
  description: string;
  bullets: string[];
}

export const services: ServiceData[] = [
  {
    id: "property-management",
    title: "NRI Property Management & Asset Oversight",
    shortDescription: "Secure, compliant, and professionally monitored asset protection across Telangana, AP & Karnataka.",
    image: "service-property",
    description: "We ensure your property remains secure and protected, legally compliant, professionally monitored, and fully documented. Our focus is on asset protection, compliance, and value preservation — not rental operations.",
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
      "Acting as authorized representatives",
      "Execution of transactions remotely",
      "Complete remote transaction capability",
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
    shortDescription: "Manage and grow wealth across generations with strategic asset planning.",
    image: "service-wealth",
    description: "We help manage and grow your wealth across multiple property portfolios, inherited assets, and joint ownership situations.",
    bullets: [
      "Multiple property portfolios",
      "Inherited and ancestral assets",
      "Joint ownership resolution",
      "Long-term asset planning",
      "Cross-generational wealth protection",
      "Strategic asset optimization",
    ],
  },
  {
    id: "virtual-verification",
    title: "Virtual Property Verification",
    shortDescription: "Live site visits and HD virtual tours with real-time inspection updates.",
    image: "service-virtual",
    description: "Stay connected with your property from anywhere in the world through our virtual verification services.",
    bullets: [
      "Live site visits via video calls",
      "High-definition virtual tours",
      "Real-time inspection updates",
      "Photo & video documentation",
      "Condition assessment reports",
      "On-demand property walkthroughs",
      "Geo Tagged photos & Videos"
    ],
  },
  {
    id: "document-management",
    title: "Documents Management",
    shortDescription: "Safe custody, scanning, indexing & secure handling of all property documents.",
    image: "service-document",
    description: "We provide comprehensive document management services ensuring your critical property documents are safely stored and easily accessible.",
    bullets: [
      "Safe custody of documents",
      "Scanning, indexing & retrieval",
      "Secure handling protocols",
      "Digital documentation access",
      "Organized record management",
      "Quick retrieval on demand",
    ],
  },
  {
    id: "nri-tax-filing",
    title: "NRI Tax Filling & Is END TO END Financial Compliance",
    shortDescription: "Annual tax filing, capital gains guidance, and legal issue resolution.",
    image: "service-registration",
    description: "We provide comprehensive tax filing and issue resolution services for NRI property owners.",
    bullets: [
      "Annual tax filing support",
      "Capital gains and TDS guidance",
      "Legal issue resolution (non-litigation)",
      "Coordination with government departments",
      "Tax compliance documentation",
      "Expert advisory on NRI taxation",
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
