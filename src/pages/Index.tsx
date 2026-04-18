// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   Globe,
//   CheckCircle,
//   Phone,
//   Mail,
//   MapPin,
//   Award,
//   Trophy,
//   FileCheck,
//   Building2,
// } from "lucide-react";
// import { services } from "@/data/services";
// import AnimatedHeading from "@/components/AnimatedHeading";
// import FadeIn from "@/components/FadeIn";
// import CountUp from "react-countup";
// import { useInView } from "react-intersection-observer";

// import awardCeremony from "@/assets/award-ceremony.png";
// import awardNews from "@/assets/award-news.png";
// import southIndiaMap from "@/assets/south-india-map.png";
// import serviceProperty from "@/assets/service-property.jpg";
// import serviceInvestment from "@/assets/service-investment.jpg";
// import serviceGpa from "@/assets/service-gpa.jpg";
// import serviceRegistration from "@/assets/service-registration.jpg";
// import serviceLegal from "@/assets/service-legal.jpg";
// import serviceFinance from "@/assets/service-finance.jpg";
// import serviceWealth from "@/assets/service-wealth.jpg";
// import serviceVirtual from "@/assets/service-virtual.jpg";
// import serviceDocument from "@/assets/service-document.jpg";
// import serviceElderly from "@/assets/service-elderly.jpg";
// import about1 from "@/assets/about 1.jpg";
// import about2 from "@/assets/about 2.jpg";
// import about4 from "@/assets/about 4.jpg";

// const imageMap: Record<string, string> = {
//   "service-property": serviceProperty,
//   "service-investment": serviceInvestment,
//   "service-gpa": serviceGpa,
//   "service-registration": serviceRegistration,
//   "service-legal": serviceLegal,
//   "service-finance": serviceFinance,
//   "service-wealth": serviceWealth,
//   "service-virtual": serviceVirtual,
//   "service-document": serviceDocument,
//   "service-elderly": serviceElderly,
// };

// const StatItem = ({
//   value,
//   label,
// }: {
//   value: string;
//   label: React.ReactNode;
// }) => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.3,
//   });

//   const number = parseInt(value.replace(/\D/g, "")) || 0;
//   const suffix = value.replace(/[0-9]/g, "");

//   return (
//     <div ref={ref} className="text-center">
//       <div className="font-serif text-3xl md:text-4xl font-bold text-gold mb-1">
//         {inView ? (
//           <>
//             <CountUp end={number} duration={2} />
//             {suffix}
//           </>
//         ) : (
//           "0"
//         )}
//       </div>
//       <div className="text-sm text-primary-foreground/60">{label}</div>
//     </div>
//   );
// };

// const Index = () => {
//   const stats = [
//     { value: "8+", label: "Years Experience" },
//     { value: "90+", label: "Projects Completed" },
//     {
//       value: "3",
//       label: (
//         <>
//           STATES:{" "}
//           <span className="text-gold font-medium">
//             TELANGANA, <br />
//             ANDHRA PRADESH, KARNATAKA
//           </span>
//         </>
//       ),
//     },
//     { value: "100%", label: "FEMA Compliant" },
//     { value: "₹150cr+", label: "Transactions Facilitated" },
//   ];

//   const certifications = [
//     {
//       title: "FEMA REGISTERED",
//       subtitle: "FOREIGN EXCHANGE MANAGEMENT ACT 1999",
//     },
//     {
//       title: "RERA- REGISTERED FOUNDER",
//       subtitle: "REAL ESTATE REGULATORY AUTHORITY",
//       extra: "Real Estate (Regulation and Development) Act, 2016",
//     },
//     {
//       title: "GOVERNMENT OF INDIA",
//       subtitle: "MINISTRY OF EXTERNAL AFFAIRS - INCORPORATED COMPANY",
//     },
//   ];

//   const HERO_VIDEO_URL =
//     "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4";

//   return (
//     <div className="min-h-screen">
//       {/* HERO */}
//       <section className="relative h-screen overflow-hidden bg-black">
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover"
//         >
//           <source src={HERO_VIDEO_URL} type="video/mp4" />
//         </video>

//         <div className="relative z-10 h-full flex flex-col px-6 md:px-12 lg:px-16">
//           <div className="flex-1 flex flex-col justify-end pb-12 lg:pb-16">
//             <div className="lg:grid lg:grid-cols-2 lg:items-end">
//               <div>
//                 <AnimatedHeading
//                   text={"Your Property.\nOur Responsibility."}
//                   className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-white mb-4 font-sans"
//                   charDelay={30}
//                   initialDelay={200}
//                 />
//                 <FadeIn delay={800} duration={1000}>
//                   <p
//                     className="text-base md:text-lg text-gray-300 mb-5 max-w-xl"
//                     style={{ letterSpacing: "-0.01em" }}
//                   >
//                     Your Permanent Presence in India – without being here.
//                     <br />
//                     BLV GLOBAL NRI- A fully integrated ecosystem for your Indian
//                     real estate.
//                   </p>
//                 </FadeIn>
//                 <FadeIn delay={1200} duration={1000}>
//                   <div className="flex flex-wrap gap-4">
//                     <Link
//                       to="/services"
//                       className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium text-sm hover:bg-white hover:text-black transition-all duration-300"
//                     >
//                       Explore Services
//                     </Link>
//                   </div>
//                 </FadeIn>
//               </div>
//               <FadeIn
//                 delay={1400}
//                 duration={1000}
//                 className="mt-8 lg:mt-0 flex items-end justify-start lg:justify-end"
//               >
//                 <div className="liquid-glass border border-white/20 px-6 py-3 rounded-xl">
//                   <span className="text-lg md:text-xl lg:text-2xl font-light text-white">
//                     ASSETS • LEGAL • FINANCE• EXECUTION
//                   </span>
//                 </div>
//               </FadeIn>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* STATS */}
//       <section className="bg-navy py-12">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {stats.slice(0, 4).map((stat, index) => (
//               <StatItem key={index} value={stat.value} label={stat.label} />
//             ))}
//           </div>
//           <div className="flex flex-wrap items-center justify-center gap-10 mt-12">
//             <StatItem value="150cr+" label="Transactions Facilitated" />
//             {certifications.map((item) => (
//               <div key={item.title} className="text-center max-w-xs">
//                 <div className="font-serif text-lg md:text-xl font-bold text-gold mb-1">
//                   {item.title}
//                 </div>
//                 <div className="text-primary-foreground/60 leading-tight text-[11px] md:text-xs lg:text-sm max-w-[260px] mx-auto text-center">
//                   {item.subtitle}
//                 </div>
//                 {item.extra && (
//                   <div className="text-sm text-primary-foreground/60 leading-snug">
//                     {item.extra}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ABOUT PREVIEW */}
//       <section className="section-padding bg-background">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <span className="text-gold text-sm font-semibold tracking-wider uppercase">
//               Who We Are
//             </span>
//             <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6">
//               Your Trusted Partner in India
//             </h2>
//             <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed mb-4">
//               BLV Global NRI Asset Management PVT. LTD. is a professionally
//               managed, Government-registered and FEMA-compliant company
//               dedicated exclusively to Non-Resident Indians (NRIs) and global
//               investors.
//             </p>
//             <p className="text-foreground max-w-3xl mx-auto text-base leading-relaxed font-medium">
//               We don't operate as agents. We act as responsible custodians of
//               your assets, delivering transparency, accountability, and complete
//               peace of mind — no matter where you are in the world.
//             </p>
//           </div>
//           <div className="grid md:grid-cols-3 gap-6 mb-10">
//             {[
//               {
//                 icon: "emblem",
//                 title: "Government Recognized",
//                 desc: "Operating in compliance with Indian regulatory frameworks and standards",
//               },
//               {
//                 icon: Globe,
//                 title: "NRI-Focused",
//                 desc: "Exclusively serving NRIs across USA, UK, UAE, Europe & Australia",
//               },
//               {
//                 icon: CheckCircle,
//                 title: "Single Point Contact",
//                 desc: "No multiple follow-ups — one reliable representative in India",
//               },
//               {
//                 icon: FileCheck,
//                 title: "FEMA Registered",
//                 desc: "Compliant under Foreign Exchange Management Act (1999) for NRI transactions",
//               },
//               {
//                 icon: Building2,
//                 title: "RERA Compliant",
//                 desc: "Aligned with Real Estate Regulatory Authority (RERA) Act, 2016",
//               },
//             ].map((item) => (
//               <div
//                 key={item.title}
//                 className="glass-card p-8 text-center hover:scale-[1.02] transition-transform"
//               >
//                 <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gold/10 mb-5">
//                   {item.icon === "emblem" ? (
//                     <img
//                       src="/emblem.jpg"
//                       alt="National Emblem of India"
//                       className="h-8 w-8 object-contain"
//                     />
//                   ) : (
//                     <item.icon className="h-7 w-7 text-gold" />
//                   )}
//                 </div>
//                 <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
//                   {item.title}
//                 </h3>
//                 <p className="text-muted-foreground text-sm">{item.desc}</p>
//               </div>
//             ))}
//           </div>

//           <div className="text-center">
//             <Link
//               to="/about"
//               className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-gold border border-gold/30 hover:bg-gold/5 transition-all font-medium"
//             >
//               Know More <ArrowRight className="h-4 w-4" />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* AWARDS & RECOGNITION (Natural Size Layout) */}
//       <section className="section-padding bg-navy relative overflow-hidden">
//         <div className="max-w-6xl mx-auto px-4 md:px-0">
//           {/* Using grid columns but normal block stacking inside to prevent stretching */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
//             {/* LEFT COLUMN (Wider column for group photos) */}
//             <div className="md:col-span-2 flex flex-col gap-6">
//               {/* Top Left - Group Photo */}
//               <div className="rounded-2xl border border-gold/20 shadow-lg bg-black/40 overflow-hidden group">
//                 <img
//                   src={about1}
//                   alt="Award Ceremony Group"
//                   className="w-full h-auto max-h-[350px] object-contain transition duration-500 group-hover:scale-105"
//                 />
//               </div>

//               {/* Bottom Left - Award Receipt Card */}
//               <div className="rounded-2xl overflow-hidden border border-gold/20 shadow-lg bg-navy-dark group">
//                 <div className="overflow-hidden bg-black/40">
//                   <img
//                     src={awardCeremony}
//                     alt="PVR Vagesh Datt receiving International Business & Education Award 2026"
//                     className="w-full h-auto max-h-[350px] object-contain transition-transform duration-500 group-hover:scale-105"
//                     loading="lazy"
//                   />
//                 </div>
//                 <div className="p-5 md:p-6 bg-navy-dark relative z-10">
//                   <div className="flex items-center gap-2 mb-2">
//                     <Award className="h-5 w-5 text-gold flex-shrink-0" />
//                     <span className="text-gold font-semibold text-sm line-clamp-1">
//                       International Business & Education Awards 2026
//                     </span>
//                   </div>
//                   <p className="text-primary-foreground/70 text-sm leading-relaxed">
//                     PVR Vagesh Datt, Founder & Managing Director, receiving the
//                     award at Hyatt Centric, New Delhi.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT COLUMN (Narrow column for vertical photos) */}
//             <div className="md:col-span-1 flex flex-col gap-6">
//               {/* Top Right - Duo Photo */}
//               <div className="rounded-2xl border border-gold/20 shadow-lg bg-black/40 overflow-hidden group">
//                 <img
//                   src={about2}
//                   alt="Award Recognition Duo"
//                   className="w-full h-auto max-h-[350px] object-contain transition duration-500 group-hover:scale-105"
//                 />
//               </div>

//               {/* Bottom Right - Media Recognition Card */}
//               <div className="rounded-2xl overflow-hidden border border-gold/20 shadow-lg bg-navy-dark group">
//                 <div className="overflow-hidden bg-black/40">
//                   <img
//                     src={about4}
//                     alt="Media Recognition"
//                     className="w-full h-auto max-h-[350px] object-contain transition-transform duration-500 group-hover:scale-105"
//                     loading="lazy"
//                   />
//                 </div>
//                 <div className="p-5 md:p-6 bg-navy-dark relative z-10">
//                   <div className="flex items-center gap-2 mb-2">
//                     <Trophy className="h-5 w-5 text-gold flex-shrink-0" />
//                     <span className="text-gold font-semibold text-sm line-clamp-1">
//                       Media Recognition
//                     </span>
//                   </div>
//                   <p className="text-primary-foreground/70 text-sm leading-relaxed">
//                     Featured in Telangana News Spot — Best Global NRI Property
//                     Management Company.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Footer Award Callout */}
//           <div className="mt-10 flex justify-center w-full">
//             <div className="liquid-glass border border-gold/20 px-8 py-5 rounded-2xl text-center shadow-2xl bg-black/20 backdrop-blur-sm w-full md:w-auto">
//               <p className="text-primary-foreground font-serif text-lg md:text-xl font-semibold">
//                 🏆 Best Global NRI Property Management Company — 2026
//               </p>
//               <p className="text-primary-foreground/50 text-sm mt-2">
//                 International Business & Education Awards, New Delhi
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* OUR PRESENCE — South India Map */}
//       <section className="section-padding bg-background">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <span className="text-gold text-sm font-semibold tracking-wider uppercase">
//                 Our Presence
//               </span>
//               <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
//                 Serving Across South India
//               </h2>
//               <p className="text-muted-foreground text-base leading-relaxed mb-6">
//                 BLV Global has a strong on-ground presence across three key
//                 states in South India, ensuring your properties and assets are
//                 managed with local expertise and personal attention.
//               </p>
//               <div className="grid gap-6 mt-6">
//                 <div className="glass-card p-5">
//                   <h3 className="text-foreground font-semibold text-lg mb-3">
//                     Telangana
//                   </h3>
//                   <div className="space-y-2 text-sm text-muted-foreground">
//                     <p>
//                       <span className="text-gold font-medium">Tier 1:</span>{" "}
//                       Hyderabad
//                     </p>
//                     <p>
//                       <span className="text-gold font-medium">Tier 2:</span>{" "}
//                       Warangal, Karimnagar, Khammam, Nizamabad, Ramagundam
//                     </p>
//                     <p>
//                       <span className="text-gold font-medium">Tier 3:</span>{" "}
//                       Developing & Semi-Urban Regions
//                     </p>
//                   </div>
//                 </div>
//                 <div className="glass-card p-5">
//                   <h3 className="text-foreground font-semibold text-lg mb-3">
//                     Andhra Pradesh
//                   </h3>
//                   <div className="space-y-2 text-sm text-muted-foreground">
//                     <p>
//                       <span className="text-gold font-medium">Tier 1:</span>{" "}
//                       Visakhapatnam, Vijayawada
//                     </p>
//                     <p>
//                       <span className="text-gold font-medium">Tier 2:</span>{" "}
//                       Tirupati, Guntur, Kurnool, Nellore, Rajahmundry, Kakinada,
//                       Kadapa, Anantapur
//                     </p>
//                     <p>
//                       <span className="text-gold font-medium">Tier 3:</span>{" "}
//                       Ongole, Eluru, Chittoor, Machilipatnam, Srikakulam,
//                       Vizianagaram, Hindupur, Proddatur, Tenali
//                     </p>
//                   </div>
//                 </div>
//                 <div className="glass-card p-5">
//                   <h3 className="text-foreground font-semibold text-lg mb-3">
//                     Karnataka
//                   </h3>
//                   <div className="space-y-2 text-sm text-muted-foreground">
//                     <p>
//                       <span className="text-gold font-medium">Tier 1:</span>{" "}
//                       Bengaluru
//                     </p>
//                     <p>
//                       <span className="text-gold font-medium">Tier 2:</span>{" "}
//                       Mysuru, Mangaluru, Hubballi-Dharwad, Belagavi, Kalaburagi,
//                       Davangere
//                     </p>
//                     <p>
//                       <span className="text-gold font-medium">Tier 3:</span>{" "}
//                       Ballari, Shivamogga, Tumakuru, Udupi, Hassan,
//                       Chikkamagaluru, Raichur, Kolar
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex justify-center">
//               <img
//                 src={southIndiaMap}
//                 alt="BLV Global presence across Telangana, Andhra Pradesh and Karnataka"
//                 className="w-full max-w-md drop-shadow-2xl"
//                 loading="lazy"
//                 width={800}
//                 height={900}
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SERVICES PREVIEW */}
//       <section className="section-padding bg-muted/30">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-14">
//             <span className="text-gold text-sm font-semibold tracking-wider uppercase">
//               Our Services
//             </span>
//             <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-3">
//               Comprehensive NRI Solutions
//             </h2>
//           </div>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {services.slice(0, 6).map((service) => (
//               <Link
//                 key={service.id}
//                 to={`/services/${service.id}`}
//                 className="group relative rounded-xl overflow-hidden h-80 block"
//               >
//                 <img
//                   src={imageMap[service.image]}
//                   alt={service.title}
//                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   loading="lazy"
//                   width={800}
//                   height={600}
//                 />
//                 <div className="service-card-overlay" />
//                 <div className="relative z-10 h-full flex flex-col justify-end p-6">
//                   <h3 className="font-serif text-xl font-semibold text-primary-foreground mb-2">
//                     {service.title}
//                   </h3>
//                   <p className="text-primary-foreground/70 text-sm line-clamp-2">
//                     {service.shortDescription}
//                   </p>
//                   <div className="mt-3 flex items-center gap-1 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
//                     Learn More <ArrowRight className="h-4 w-4" />
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//           <div className="text-center mt-10">
//             <Link
//               to="/services"
//               className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold gold-gradient text-accent-foreground hover:opacity-90 transition-all gold-glow"
//             >
//               View All Services <ArrowRight className="h-4 w-4" />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* CONTACT PREVIEW */}
//       <section className="section-padding bg-navy">
//         <div className="max-w-4xl mx-auto text-center">
//           <span className="text-gold text-sm font-semibold tracking-wider uppercase">
//             Get in Touch
//           </span>
//           <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mt-3 mb-10">
//             Let's Discuss Your Asset Needs
//           </h2>
//           <div className="grid md:grid-cols-3 gap-6 mb-10">
//             {[
//               {
//                 icon: Phone,
//                 label: "+91 9966799225",
//                 href: "tel:+919966799225",
//               },
//               {
//                 icon: Mail,
//                 label: "blvglobalnri@gmail.com",
//                 href: "mailto:blvglobalnri@gmail.com",
//               },
//               { icon: MapPin, label: "Hyderabad, Telangana", href: "#" },
//             ].map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 className="flex flex-col items-center gap-3 p-6 rounded-xl border border-gold/10 bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors"
//               >
//                 <item.icon className="h-6 w-6 text-gold" />
//                 <span className="text-primary-foreground/80 text-sm">
//                   {item.label}
//                 </span>
//               </a>
//             ))}
//           </div>
//           <Link
//             to="/contact"
//             className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold gold-gradient text-accent-foreground hover:opacity-90 transition-all gold-glow"
//           >
//             Contact Us <ArrowRight className="h-4 w-4" />
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Index;
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Globe,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Award,
  Trophy,
  FileCheck,
  Building2,
} from "lucide-react";
import { services } from "@/data/services";
import AnimatedHeading from "@/components/AnimatedHeading";
import FadeIn from "@/components/FadeIn";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import awardCeremony from "@/assets/award-ceremony.png";
import awardNews from "@/assets/award-news.png";
import southIndiaMap from "@/assets/south-india-map.png";
import serviceProperty from "@/assets/service-property.jpg";
import serviceInvestment from "@/assets/service-investment.jpg";
import serviceGpa from "@/assets/service-gpa.jpg";
import serviceRegistration from "@/assets/service-registration.jpg";
import serviceLegal from "@/assets/service-legal.jpg";
import serviceFinance from "@/assets/service-finance.jpg";
import serviceWealth from "@/assets/service-wealth.jpg";
import serviceVirtual from "@/assets/service-virtual.jpg";
import serviceDocument from "@/assets/service-document.jpg";
import serviceElderly from "@/assets/service-elderly.jpg";
import about1 from "@/assets/about 1.jpg";
import about2 from "@/assets/about 2.jpg";
import about4 from "@/assets/about 4.jpg";

const imageMap: Record<string, string> = {
  "service-property": serviceProperty,
  "service-investment": serviceInvestment,
  "service-gpa": serviceGpa,
  "service-registration": serviceRegistration,
  "service-legal": serviceLegal,
  "service-finance": serviceFinance,
  "service-wealth": serviceWealth,
  "service-virtual": serviceVirtual,
  "service-document": serviceDocument,
  "service-elderly": serviceElderly,
};

const StatItem = ({
  value,
  label,
}: {
  value: string;
  label: React.ReactNode;
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const number = parseInt(value.replace(/\D/g, "")) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  return (
    <div
      ref={ref}
      className="text-center flex flex-col items-center justify-start"
    >
      <div className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gold mb-2">
        {inView ? (
          <>
            <CountUp end={number} duration={2} />
            {suffix}
          </>
        ) : (
          "0"
        )}
      </div>
      <div className="text-sm text-primary-foreground/60 max-w-[200px] leading-snug">
        {label}
      </div>
    </div>
  );
};

const Index = () => {
  const topStats = [
    { value: "8+", label: "Years Experience" },
    { value: "90+", label: "Projects Completed" },
    {
value: "3 STATES",
  label: (
    <div className="text-primary-foreground/60 leading-tight">
      <div className="font-medium text-primary-foreground">
         TELANGANA
      </div>
      <div className="text-primary-foreground">
        ANDHRA PRADESH, KARNATAKA
      </div>
    </div>
  ),
},
    { value: "100%", label: "FEMA Compliant" },
  ];

  const certifications = [
    {
      title: "FEMA REGISTERED",
      subtitle: "FOREIGN EXCHANGE MANAGEMENT ACT 1999",
    },
    {
      title: "RERA- REGISTERED FOUNDER",
      subtitle: "REAL ESTATE REGULATORY AUTHORITY",
      extra: "Real Estate (Regulation and Development) Act, 2016",
    },
    {
      title: "GOVERNMENT OF INDIA",
      subtitle: "MINISTRY OF EXTERNAL AFFAIRS - INCORPORATED COMPANY",
    },
  ];

  const HERO_VIDEO_URL =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4";

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative h-screen overflow-hidden bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>

        <div className="relative z-10 h-full flex flex-col px-6 md:px-12 lg:px-16">
          <div className="flex-1 flex flex-col justify-end pb-12 lg:pb-16">
            <div className="lg:grid lg:grid-cols-2 lg:items-end">
              <div>
                <AnimatedHeading
                  text={"Your Property.\nOur Responsibility."}
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-white mb-4 font-sans"
                  charDelay={30}
                  initialDelay={200}
                />
                <FadeIn delay={800} duration={1000}>
                  <p
                    className="text-base md:text-lg text-gray-300 mb-5 max-w-2xl"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    Your Permanent Presence in India – without being here.
                    <br />
                    BLV GLOBAL NRI- A fully integrated ecosystem for your Indian
                    real estate.
                  </p>
                </FadeIn>
                <FadeIn delay={1200} duration={1000}>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/services"
                      className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium text-sm hover:bg-white hover:text-black transition-all duration-300"
                    >
                      Explore Services
                    </Link>
                  </div>
                </FadeIn>
              </div>
              <FadeIn
                delay={1400}
                duration={1000}
                className="mt-8 lg:mt-0 flex items-end justify-start lg:justify-end"
              >
                <div className="liquid-glass border border-white/20 px-6 py-3 rounded-xl">
                  <span className="text-lg md:text-xl lg:text-2xl font-light text-white">
                    ASSETS • LEGAL • FINANCE• EXECUTION
                  </span>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* STATS & CERTIFICATIONS (Re-aligned to match the image) */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col gap-16 md:gap-24">
            {/* ROW 1: Top 4 Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-start">
              {topStats.map((stat, index) => (
                <StatItem key={index} value={stat.value} label={stat.label} />
              ))}
            </div>

            {/* ROW 2: ₹150cr+ & 3 Certifications */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-start">
              {/* Leftmost Item (Animated Stat) */}
              <StatItem value="150cr+" label="Transactions Facilitated" />

              {/* Remaining 3 Items (Certifications) */}
              {certifications.map((item) => (
                <div
                  key={item.title}
                  className="text-center flex flex-col items-center justify-start"
                >
                  {/* Title */}
                  <div className="font-serif text-lg md:text-xl lg:text-2xl font-bold text-gold mb-2 leading-tight">
                    {item.title}
                  </div>

                  {/* Subtitle */}
                  <div className="text-primary-foreground/60 text-xs md:text-sm uppercase tracking-wider mb-1 max-w-[260px] mx-auto leading-snug">
                    {item.subtitle}
                  </div>

                  {/* Extra text (only for RERA) */}
                  {item.extra && (
                    <div className="text-primary-foreground/50 text-[11px] md:text-xs max-w-[240px] mx-auto mt-1 leading-snug">
                      {item.extra}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">
              Who We Are
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              Your Trusted Partner in India
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed mb-4">
              BLV Global NRI Asset Management PVT. LTD. is a professionally
              managed, Government-registered and FEMA-compliant company
              dedicated exclusively to Non-Resident Indians (NRIs) and global
              investors.
            </p>
            <p className="text-foreground max-w-3xl mx-auto text-base leading-relaxed font-medium">
              We don't operate as agents. We act as responsible custodians of
              your assets, delivering transparency, accountability, and complete
              peace of mind — no matter where you are in the world.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: "emblem",
                title: "Government Recognized",
                desc: "Operating in compliance with Indian regulatory frameworks and standards",
              },
              {
                icon: Globe,
                title: "NRI-Focused",
                desc: "Exclusively serving NRIs across USA, UK, UAE, Europe & Australia",
              },
              {
                icon: CheckCircle,
                title: "Single Point Contact",
                desc: "No multiple follow-ups — one reliable representative in India",
              },
              {
                icon: FileCheck,
                title: "FEMA Registered",
                desc: "Compliant under Foreign Exchange Management Act (1999) for NRI transactions",
              },
              {
                icon: Building2,
                title: "RERA Compliant",
                desc: "Aligned with Real Estate Regulatory Authority (RERA) Act, 2016",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="glass-card p-8 text-center hover:scale-[1.02] transition-transform"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gold/10 mb-5">
                  {item.icon === "emblem" ? (
                    <img
                      src="/emblem.jpg"
                      alt="National Emblem of India"
                      className="h-8 w-8 object-contain"
                    />
                  ) : (
                    <item.icon className="h-7 w-7 text-gold" />
                  )}
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-gold border border-gold/30 hover:bg-gold/5 transition-all font-medium"
            >
              Know More <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* AWARDS & RECOGNITION (Natural Size Layout) */}
      <section className="section-padding bg-navy relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {/* LEFT COLUMN */}
            <div className="md:col-span-2 flex flex-col gap-6">
              <div className="rounded-2xl border border-gold/20 shadow-lg bg-black/40 overflow-hidden group">
                <img
                  src={about1}
                  alt="Award Ceremony Group"
                  className="w-full h-auto max-h-[350px] object-contain transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="rounded-2xl overflow-hidden border border-gold/20 shadow-lg bg-navy-dark group">
                <div className="overflow-hidden bg-black/40">
                  <img
                    src={awardCeremony}
                    alt="PVR Vagesh Datt receiving International Business & Education Award 2026"
                    className="w-full h-auto max-h-[350px] object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 md:p-6 bg-navy-dark relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="h-5 w-5 text-gold flex-shrink-0" />
                    <span className="text-gold font-semibold text-sm line-clamp-1">
                      International Business & Education Awards 2026
                    </span>
                  </div>
                  <p className="text-primary-foreground/70 text-sm leading-relaxed">
                    PVR Vagesh Datt, Founder & Managing Director, receiving the
                    award at Hyatt Centric, New Delhi.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="md:col-span-1 flex flex-col gap-6">
              <div className="rounded-2xl border border-gold/20 shadow-lg bg-black/40 overflow-hidden group">
                <img
                  src={about2}
                  alt="Award Recognition Duo"
                  className="w-full h-auto max-h-[350px] object-contain transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="rounded-2xl overflow-hidden border border-gold/20 shadow-lg bg-navy-dark group">
                <div className="overflow-hidden bg-black/40">
                  <img
                    src={about4}
                    alt="Media Recognition"
                    className="w-full h-auto max-h-[350px] object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 md:p-6 bg-navy-dark relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="h-5 w-5 text-gold flex-shrink-0" />
                    <span className="text-gold font-semibold text-sm line-clamp-1">
                      Media Recognition
                    </span>
                  </div>
                  <p className="text-primary-foreground/70 text-sm leading-relaxed">
                    Telangana global elite business award 2026 for Best NRI property asset management company of the year – India.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-center w-full">
            <div className="liquid-glass border border-gold/20 px-8 py-5 rounded-2xl text-center shadow-2xl bg-black/20 backdrop-blur-sm w-full md:w-auto">
              <p className="text-primary-foreground font-serif text-lg md:text-xl font-semibold">
                🏆 Best Global NRI Property Management Company — 2026
              </p>
              <p className="text-primary-foreground/50 text-sm mt-2">
                International Business & Education Awards, New Delhi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PRESENCE — South India Map */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold text-sm font-semibold tracking-wider uppercase">
                Our Presence
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Serving Across South India
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                BLV Global has a strong on-ground presence across three key
                states in South India, ensuring your properties and assets are
                managed with local expertise and personal attention.
              </p>
              <div className="grid gap-6 mt-6">
                <div className="glass-card p-5">
                  <h3 className="text-foreground font-semibold text-lg mb-3">
                    Telangana
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>
                      <span className="text-gold font-medium">Tier 1:</span>{" "}
                      Hyderabad
                    </p>
                    <p>
                      <span className="text-gold font-medium">Tier 2:</span>{" "}
                      Warangal, Karimnagar, Khammam, Nizamabad, Ramagundam
                    </p>
                    <p>
                      <span className="text-gold font-medium">Tier 3:</span>{" "}
                      Developing & Semi-Urban Regions
                    </p>
                  </div>
                </div>
                <div className="glass-card p-5">
                  <h3 className="text-foreground font-semibold text-lg mb-3">
                    Andhra Pradesh
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>
                      <span className="text-gold font-medium">Tier 1:</span>{" "}
                      Visakhapatnam, Vijayawada
                    </p>
                    <p>
                      <span className="text-gold font-medium">Tier 2:</span>{" "}
                      Tirupati, Guntur, Kurnool, Nellore, Rajahmundry, Kakinada,
                      Kadapa, Anantapur
                    </p>
                    <p>
                      <span className="text-gold font-medium">Tier 3:</span>{" "}
                      Ongole, Eluru, Chittoor, Machilipatnam, Srikakulam,
                      Vizianagaram, Hindupur, Proddatur, Tenali
                    </p>
                  </div>
                </div>
                <div className="glass-card p-5">
                  <h3 className="text-foreground font-semibold text-lg mb-3">
                    Karnataka
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>
                      <span className="text-gold font-medium">Tier 1:</span>{" "}
                      Bengaluru
                    </p>
                    <p>
                      <span className="text-gold font-medium">Tier 2:</span>{" "}
                      Mysuru, Mangaluru, Hubballi-Dharwad, Belagavi, Kalaburagi,
                      Davangere
                    </p>
                    <p>
                      <span className="text-gold font-medium">Tier 3:</span>{" "}
                      Ballari, Shivamogga, Tumakuru, Udupi, Hassan,
                      Chikkamagaluru, Raichur, Kolar
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src={southIndiaMap}
                alt="BLV Global presence across Telangana, Andhra Pradesh and Karnataka"
                className="w-full max-w-md drop-shadow-2xl"
                loading="lazy"
                width={800}
                height={900}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">
              Our Services
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-3">
              Comprehensive NRI Solutions
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="group relative rounded-xl overflow-hidden h-80 block"
              >
                <img
                  src={imageMap[service.image]}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  width={800}
                  height={600}
                />
                <div className="service-card-overlay" />
                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                  <h3 className="font-serif text-xl font-semibold text-primary-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-primary-foreground/70 text-sm line-clamp-2">
                    {service.shortDescription}
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold gold-gradient text-accent-foreground hover:opacity-90 transition-all gold-glow"
            >
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT PREVIEW */}
      <section className="section-padding bg-navy">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-gold text-sm font-semibold tracking-wider uppercase">
            Get in Touch
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mt-3 mb-10">
            Let's Discuss Your Asset Needs
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: Phone,
                label: "+91 9966799225",
                href: "tel:+919966799225",
              },
              {
                icon: Mail,
                label: "blvglobalnri@gmail.com",
                href: "mailto:blvglobalnri@gmail.com",
              },
              { icon: MapPin, label: "Hyderabad, Telangana", href: "#" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex flex-col items-center gap-3 p-6 rounded-xl border border-gold/10 bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors"
              >
                <item.icon className="h-6 w-6 text-gold" />
                <span className="text-primary-foreground/80 text-sm">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold gold-gradient text-accent-foreground hover:opacity-90 transition-all gold-glow"
          >
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
