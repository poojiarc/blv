// import { Shield, Globe, CheckCircle, Eye, Heart, Users, AlertTriangle } from "lucide-react";

// const About = () => {
//   return (
//     <div className="min-h-screen pt-20">
//       {/* Banner */}
//       <section className="bg-navy section-padding text-center">
//         <span className="text-gold text-sm font-semibold tracking-wider uppercase">About Us</span>
//         <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mt-3 mb-6">
//           Who We Are
//         </h1>
//         <p className="text-primary-foreground/70 max-w-3xl mx-auto text-lg">
//           A Government-Incorporated and FEMA-compliant company exclusively focused on managing property, assets, and compliance for NRIs across the globe.
//         </p>
//       </section>

//       {/* About Content */}
//       <section className="section-padding bg-background">
//         <div className="max-w-5xl mx-auto">
//           <div className="glass-card p-8 md:p-12 mb-12">
//             <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
//               BLV Global NRI Asset Management  PVT. LTD.
//             </h2>
//             <div className="space-y-4 text-muted-foreground leading-relaxed">
//               <p>
//                 BLV Global NRI Asset Management  PVT. LTD. is a Government-Incorporated and FEMA-compliant company exclusively focused on managing property, assets, and compliance for NRIs across the globe.
//               </p>
//               <p>
//                 With strong local expertise and structured processes, we act as a single, reliable point of contact in India, ensuring your assets are handled with professionalism, legal clarity, and care.
//               </p>
//             </div>
//           </div>

//           {/* Why BLV Exists */}
// <div className="mb-16">
//   <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
//     Why BLV Exists
//   </h2>

//   {/* Hero Statement */}
//   <p className="text-center text-lg md:text-xl font-semibold text-foreground max-w-4xl mx-auto mb-10">
//     BLV exists to eliminate fraud, manipulation, and blind trust in real estate — 
//     giving NRIs complete control, transparency, and peace of mind.
//   </p>

//   {/* Problem Section */}
//   <div className="glass-card p-6 md:p-8 mb-10">
//     <h3 className="text-lg font-bold text-red-500 mb-4 flex items-center gap-2">
//       <AlertTriangle className="h-5 w-5" />
//       The Problem
//     </h3>

//     <div className="grid md:grid-cols-2 gap-4">
//       {[
//         "Untrustworthy agents — no accountability after the deal",
//         "Manipulating realtors — inflated prices & hidden commissions",
//         "Unethical mediators — dual-sided commissions & conflicts",
//         "Fraud real estate companies — fake promises & legal risks",
//         "NRI disadvantage — distance leads to misinformation & misuse",
//       ].map((item) => (
//         <div key={item} className="flex items-start gap-3">
//           <AlertTriangle className="h-4 w-4 text-red-500 mt-1" />
//           <span className="text-sm text-foreground">{item}</span>
//         </div>
//       ))}
//     </div>

//     <p className="text-red-500 font-semibold mt-6 text-sm">
//       Result: Loss of money, control, and peace of mind.
//     </p>
//   </div>

//   {/* Purpose Section */}
//   <div className="glass-card p-6 md:p-8 mb-10">
//     <h3 className="text-lg font-bold text-green-600 mb-4 flex items-center gap-2">
//       <CheckCircle className="h-5 w-5" />
//       Our Purpose
//     </h3>

//     <div className="grid sm:grid-cols-2 gap-4">
//       {[
//         "Your Eyes & Ears on Ground",
//         "Your Legal & Financial Safeguard",
//         "Your Transparent Decision Partner",
//         "Your Asset Protector — Not a Commission Agent",
//       ].map((item) => (
//         <div key={item} className="flex items-center gap-3">
//           <CheckCircle className="h-4 w-4 text-green-600" />
//           <span className="text-sm text-foreground font-medium">{item}</span>
//         </div>
//       ))}
//     </div>
//   </div>

//   {/* One-line Positioning */}
//   <div className="text-center space-y-3 max-w-3xl mx-auto">
//     {[
//       "BLV exists because trust in real estate is rare — and we make it standard.",
//       "Built to eliminate manipulation, fraud, and blind trust in property decisions.",
//       "We replace uncertainty with verified control for every NRI.",
//       "Where others sell property, we protect your ownership.",
//     ].map((line) => (
//       <p key={line} className="text-muted-foreground text-sm italic">
//         “{line}”
//       </p>
//     ))}
//   </div>
// </div>

//           {/* Our Approach */}
//           <div className="glass-card p-8 md:p-12 mb-16">
//             <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
//               Our Approach
//             </h2>
//             <p className="text-foreground font-semibold mb-2">We are not transaction-driven. We are responsibility-driven.</p>
//             <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
//   Every action is accountable, every process is transparent, and every decision is aligned with your best interests — even in your absence.
// </p>
//             <div className="grid sm:grid-cols-2 gap-4 mt-6 mb-6">
//               {[
//                 "Legal compliance",
//                 "Structured execution",
//                 "Transparency in every step",
//                 "Long-term asset protection",
//               ].map((item) => (
//                 <div key={item} className="flex items-center gap-3">
//                   <CheckCircle className="h-5 w-5 text-gold shrink-0" />
//                   <span className="text-foreground text-sm font-medium">{item}</span>
//                 </div>
//               ))}
//             </div>
//             <p className="text-muted-foreground italic">
//               We don't act as intermediaries. We act as custodians of your assets.
//             </p>
//           </div>

//           {/* Key Highlights */}
//           <div className="mb-16">
//             <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
//               Key Highlights
//             </h2>
//             <div className="grid md:grid-cols-2 gap-4">
//               {[
//                 "7+ Years of Professional Expertise",
//                 "70+ Successfully Completed NRI Projects",
//                 "Government & FEMA Registered Company",
//                 "GPA / SPA + Registration Services Fully Integrated",
//                 "Directors with Engineering, Technical & Field Expertise",
//               ].map((item) => (
//                 <div key={item} className="flex items-start gap-3 p-4 glass-card">
//                   <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
//                   <span className="text-foreground text-sm font-medium">{item}</span>
//                 </div>
//               ))}
//               <div className="flex items-start gap-3 p-4 glass-card border-2 border-gold/30 bg-gold/5">
//                 <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
//                 <span className="text-gold text-sm font-bold">Strong Presence in Telangana, Andhra Pradesh & Karnataka</span>
//               </div>
//             </div>
//           </div>

//           {/* Vision & Commitment */}
//           <div className="grid md:grid-cols-2 gap-8 mb-16">
//             <div className="glass-card p-8">
//               <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gold/10 mb-5">
//                 <Eye className="h-6 w-6 text-gold" />
//               </div>
//               <h3 className="font-serif text-xl font-bold text-foreground mb-4">Our Vision</h3>
//               <p className="text-muted-foreground text-sm leading-relaxed">
//                 To become one of India's most trusted NRI asset management companies, known for professionalism, transparency, and long-term client relationships. We aim to protect, preserve, and optimize NRI assets while building relationships based on trust, clarity, and Professional accountability.
//               </p>
//             </div>
//             <div className="glass-card p-8">
//               <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gold/10 mb-5">
//                 <Heart className="h-6 w-6 text-gold" />
//               </div>
//               <h3 className="font-serif text-xl font-bold text-foreground mb-4">Our Commitment</h3>
//               <p className="text-muted-foreground text-sm leading-relaxed">
//                 At BLV Global, we don't just manage assets — we maintain relationships. We act as your trusted representative in India, treating your assets as our own. From routine management to critical decisions, we ensure clarity, control, and confidence at every step.
//               </p>
//             </div>
//           </div>

//           {/* Who We Serve */}
//           <div className="text-center mb-12">
//             <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">Who We Serve</h2>
//             <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
//   {[
//     { icon: Globe, text: "NRIs across USA, UK, UAE, Europe & Australia" },
//     { icon: Shield, text: "Overseas real estate investors" },
//     { icon: Users, text: "Families managing ancestral properties" },
//     { icon: CheckCircle, text: "Professionals seeking long-term asset security" },
//     {
//       icon: Heart,
//       text: "Senior Citizen Support",
//       description:
//         "We extend dedicated support to parents residing in India, managing their property matters, documentation, and transactions with utmost care, transparency, and accountability.",
//       subline:
//         "Because your presence shouldn’t be a necessity for their protection.",
//       highlight: true,
//     },
//   ].map((item) => (
//     <div
//       key={item.text}
//       className={`glass-card p-6 text-center ${
//         item.highlight ? "border-2 border-gold/30 bg-gold/5" : ""
//       }`}
//     >
//       <item.icon className="h-8 w-8 text-gold mx-auto mb-3" />

//       <p className="text-sm font-semibold text-foreground mb-2">
//         {item.text}
//       </p>

//       {item.description && (
//         <p className="text-xs text-muted-foreground mb-2 leading-relaxed">
//           {item.description}
//         </p>
//       )}

//       {item.subline && (
//         <p className="text-xs italic text-gold">
//           “{item.subline}”
//         </p>
//       )}
//     </div>
//   ))}
// </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;
import { Shield, Globe, CheckCircle, Eye, Heart, Users, AlertTriangle } from "lucide-react";
import aboutImg from "@/assets/about 4.jpg";
const About = () => {
  const solutions = [
  {
    title: "Integrity",
    desc: "Uncompromised ethics in every transaction and decision",
  },
  {
    title: "Clarity",
    desc: "Absolute legal transparency and verified ownership",
  },
  {
    title: "Command",
    desc: "Complete on-ground control and decisive execution",
  },
  {
    title: "Protection",
    desc: "Safeguarding assets against risk, fraud, and misuse",
  },
  {
    title: "Compliance",
    desc: "Strict alignment with FEMA, RERA, and all regulations",
  },
  {
    title: "Precision",
    desc: "Detail-driven execution with zero room for error",
  },
  {
    title: "Authority",
    desc: "Strong legal, financial, and operational expertise",
  },
  {
    title: "Accountability",
    desc: "Single-point ownership with full responsibility",
  },
  {
    title: "Transparency",
    desc: "Clear reporting, communication, and decision visibility",
  },
  {
    title: "Continuity",
    desc: "Long-term management across the full asset lifecycle",
  },
];
  return (
    <div className="min-h-screen pt-20">
      {/* Banner */}
      <section className="bg-navy section-padding text-center">
        <span className="text-gold text-sm font-semibold tracking-wider uppercase">About Us</span>
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mt-3 mb-6">
          Who We Are
        </h1>
        <p className="text-primary-foreground/70 max-w-3xl mx-auto text-lg">
          A Government of India, FEMA & RERA-Registered Company delivering asset, legal, financial, execution, and compliance excellence exclusively for NRIs.
        </p>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto">

          {/* ABOUT */}
         <div className="glass-card p-8 md:p-12 mb-12">
  <div className="max-w-5xl mx-auto text-center">

    {/* LEFT TEXT */}
    <div>
      <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
        BLV GLOBAL NRI ASSET MANAGEMENT PVT. LTD.
      </h2>

      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          BLV Global NRI Asset Management Pvt. Ltd. is a Government of India–incorporated company exclusively focused on the acquisition, legal, financial management, execution, and compliance of NRI assets across Telangana, Andhra Pradesh & Karnataka.
        </p>

        <p>
          Backed by deep on-ground expertise and a structured approach, we serve as your single, trusted point of contact in India—ensuring your assets are managed with precision, legal clarity, and uncompromised care.
        </p>
      </div>
    </div>

    

  </div>
</div>

          {/* WHY BLV EXISTS */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
              Why BLV Exists
            </h2>

            <p className="text-center text-lg md:text-xl font-semibold text-foreground max-w-4xl mx-auto mb-10">
              BLV exists to eliminate uncertainty, restore trust, and bring structured control to NRI asset ownership in India.
            </p>

            {/* PROBLEMS */}
            <div className="glass-card p-6 md:p-8 mb-10">
              <h3 className="text-lg font-bold text-red-500 mb-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" /> The Problem
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Lack of Trust in Local Agents",
                  "Legal Uncertainty & Title Risks",
                  "No On-Ground Control",
                  "Fraud & Misrepresentation Risks",
                  "Fragmented Service Handling",
                  "FEMA, RERA & Tax Compliance Confusion",
                  "Poor Property Monitoring & Maintenance",
                  "Encroachment & Misuse Risks",
                  "Delayed or Inefficient Execution",
                  "Difficult Exit Process",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <AlertTriangle className="h-4 w-4 text-red-500 mt-1" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-red-500 font-semibold mt-6 text-sm">
                Result:  Loss of Money, Legal Complications, Risk of Fraud, Encroachment Threats, Compliance Penalties, Execution Failures, Asset Value Decline, Time & Stress Loss, Unreliable Dependency, Exit Challenges.
              </p>
            </div>

            {/* SOLUTION */}
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-lg font-bold text-green-600 mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5" /> The Solution
              </h3>

             <div className="grid sm:grid-cols-2 gap-6">
  {solutions.map((item, index) => (
    <div
      key={index}
      className="border border-green-500/20 rounded-xl p-5 hover:bg-green-500/5 transition"
    >
      <div className="flex items-start gap-3">
        <CheckCircle className="h-5 w-5 text-green-600 mt-1" />

        <div>
          <h4 className="text-sm font-semibold text-foreground">
            {index + 1}. {item.title}
          </h4>

          <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
            {item.desc}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>
              <p className="text-green-500 font-semibold mt-6 text-sm">
               The Result: You Deserve-
Your investments in India evolve into growth, strength, and enduring peace of mind—guided by expertise, driven by precision, and delivering lasting success.
              </p>
            </div>
          </div>

          {/* PRICING PHILOSOPHY (REPLACED APPROACH) */}
          <div className="glass-card p-8 md:p-12 mb-16">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
              Pricing Philosophy
            </h2>

            <p className="text-muted-foreground mb-4">
              At BLV GLOBAL NRI ASSET MANAGEMENT PVT. LTD., pricing is built on clarity, fairness, and responsibility.
            </p>

            <p className="text-muted-foreground mb-6">
              We do not follow commission-based Agentsage models. Our pricing reflects scope, legal responsibility, time involvement, and Professional accountability.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                "Scope-Based Fees",
                "Transparent Structure",
                "No Conflict of Interest",
                "Value Over Volume",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-gold" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground text-sm">
              You are paying for expertise, legal safety, execution precision, and accountability — ensuring peace of mind.
            </p>

            <p className="text-gold font-semibold mt-6">
              Your Property. Our Responsibility.
            </p>
          </div>

          {/* KEEPING BELOW SECTIONS SAME */}

          {/* Key Highlights */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Key Highlights
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "8+ Years of Professional Expertise",
                "90+ Successfully Completed NRI Projects",
                <>
  Government & FEMA Registered Company
  <br />
  (GOVT. OF INDIA, FEMA & RERA-REGD. Company)
</>,
                "Property Buy & Sell, Legal, Financial & Compliance — All Under One Trusted Point of Contact.",
                "Directors with Civil & Structural expertise, driven by technical precision and field excellence.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 glass-card">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm font-medium">{item}</span>
                </div>
              ))}
              <div className="flex items-start gap-3 p-4 glass-card border-2 border-gold/30 bg-gold/5">
                <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span className="text-gold text-sm font-bold">Strong Presence in Telangana, Andhra Pradesh & Karnataka</span>
              </div>
            </div>
          </div>

          {/* Vision & Commitment */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="glass-card p-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gold/10 mb-5">
                <Eye className="h-6 w-6 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To become one of India's most trusted NRI asset management companies, known for professionalism, transparency, and long-term client relationships. We aim to protect, preserve, and optimize NRI assets while building relationships based on trust, clarity, and accountability.
              </p>
            </div>

            <div className="glass-card p-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gold/10 mb-5">
                <Heart className="h-6 w-6 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-4">Our Commitment</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                At BLV Global, we don't just manage assets — we maintain relationships. We act as your trusted representative in India, Treating your assets as ours. From routine management to critical decisions, we ensure clarity, control, and confidence at every step.
              </p>
            </div>
          </div>

          {/* Who We Serve */}
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">Who We Serve</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Globe, text: "NRIs across the globe" },
                { icon: Shield, text: "Overseas real estate investors" },
                { icon: Users, text: "Families managing ancestral properties" },
                { icon: CheckCircle, text: "Professionals seeking long-term asset security" },
                {
                  icon: Heart,
                  text: "Senior Citizen Support",
                  description:
                    "We extend dedicated support to parents residing in India, managing their property matters with care and accountability.",
                  subline:
                    "Because your presence shouldn’t be a necessity for their protection.",
                  highlight: true,
                },
              ].map((item) => (
                <div
                  key={item.text}
                  className={`glass-card p-6 text-center ${
                    item.highlight ? "border-2 border-gold/30 bg-gold/5" : ""
                  }`}
                >
                  <item.icon className="h-8 w-8 text-gold mx-auto mb-3" />

                  <p className="text-sm font-semibold text-foreground mb-2">
                    {item.text}
                  </p>

                  {item.description && (
                    <p className="text-xs text-muted-foreground mb-2">
                      {item.description}
                    </p>
                  )}

                  {item.subline && (
                    <p className="text-xs italic text-gold">
                      “{item.subline}”
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;