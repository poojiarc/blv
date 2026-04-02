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
    shortDescription: "End-to-end property management for residential, commercial, and land assets across Telangana, AP & Karnataka.",
    image: "service-property",
    description: "We provide structured, non-rental asset oversight services ensuring that NRI-owned properties remain secure, legally compliant, and professionally managed — even when owners are residing abroad. Our focus is on asset protection, compliance, and value preservation.",
    bullets: [
      "Secure and protected asset oversight",
      "Legal compliance monitoring",
      "Professional on-ground monitoring",
      "Well-documented and transparent reporting",
      "Value preservation and maintenance coordination",
      "Coverage across Telangana, AP & Karnataka",
    ],
  },
  {
    id: "buying-selling",
    title: "Property Buying, Selling & Investment Advisory",
    shortDescription: "Safe, transparent, and FEMA-compliant real estate transactions for NRIs worldwide.",
    image: "service-investment",
    description: "BLV Global assists NRIs with safe, transparent, and FEMA-compliant real estate transactions. Every transaction is executed with risk mitigation and legal clarity, ensuring NRIs can invest with confidence from anywhere in the world.",
    bullets: [
      "Property shortlisting aligned with budget and goals",
      "Physical inspection and condition reporting",
      "Legal due diligence and title verification",
      "Negotiation and deal structuring",
      "Sale management with fair market valuation",
      "Long-term investment advisory for asset growth",
    ],
  },
  {
    id: "gpa-spa",
    title: "GPA & SPA Services for NRIs",
    shortDescription: "Complete General & Special Power of Attorney support for secure remote transactions.",
    image: "service-gpa",
    description: "We provide complete support for General Power of Attorney (GPA) and Special Power of Attorney (SPA) requirements, enabling secure, legally valid remote transactions without physical presence in India.",
    bullets: [
      "Drafting of GPA / SPA for property transactions",
      "Coordination for Notary, Apostille & Embassy attestation",
      "Registration of GPA / SPA in India",
      "Acting as authorized representatives as per mandate",
      "Smooth execution of property transactions on behalf of NRIs",
      "Complete remote transaction capability",
    ],
  },
  {
    id: "registration-documentation",
    title: "Property Registration & Documentation",
    shortDescription: "Comprehensive registration and documentation services with precision and compliance.",
    image: "service-registration",
    description: "BLV Global manages all documentation and registration processes with accuracy and compliance. Our structured approach ensures error-free and legally secure transactions for NRIs.",
    bullets: [
      "Sale Deed, Purchase Deed & Lease registrations",
      "Agreement of Sale documentation",
      "Property mutation and ownership transfers",
      "Coordination with Sub-Registrar Offices (SROs)",
      "Liaison with advocates, banks, and government authorities",
      "Complete documentation accuracy and verification",
    ],
  },
  {
    id: "legal-compliance",
    title: "Legal, Compliance & Issue Resolution",
    shortDescription: "FEMA-compliant legal structuring and issue resolution for all NRI property matters.",
    image: "service-legal",
    description: "As a Government and FEMA-registered company, compliance is our foundation. We provide comprehensive legal support ensuring every transaction meets regulatory requirements and protects NRI interests.",
    bullets: [
      "FEMA-compliant structuring of all transactions",
      "Legal due diligence and title verification",
      "Resolution of property-related legal issues",
      "POA validation and documentation accuracy",
      "Coordination with experienced legal professionals",
      "Non-litigation issue resolution",
    ],
  },
  {
    id: "financial-banking",
    title: "Financial, Banking & Tax Assistance",
    shortDescription: "End-to-end financial coordination for NRI property-related requirements.",
    image: "service-finance",
    description: "We provide end-to-end financial and banking assistance for all NRI property-related requirements. Our approach ensures lawful, transparent, and stress-free financial management.",
    bullets: [
      "NRE / NRO account assistance",
      "Sale proceeds repatriation as per FEMA norms",
      "Home loan coordination",
      "Tax filing procedures for NRI properties",
      "Capital gains tax guidance and compliance",
      "Financial documentation support",
    ],
  },
  {
    id: "asset-wealth",
    title: "Asset & Wealth Management Support",
    shortDescription: "Preserve, grow, and protect wealth across generations with strategic asset management.",
    image: "service-wealth",
    description: "Beyond property, we help NRIs manage multiple portfolios and inherited assets. Our goal is to preserve, grow, and protect wealth across generations through structured planning.",
    bullets: [
      "Management of multiple property portfolios",
      "Inherited and ancestral property handling",
      "Joint ownership asset resolution",
      "Long-term asset planning and restructuring",
      "Cross-generational wealth protection",
      "Strategic asset optimization",
    ],
  },
];
