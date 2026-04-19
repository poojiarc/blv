import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import testimonialPraveen from "@/assets/testimonial-praveen.png";
import testimonialSubramanyam from "@/assets/testimonial-subramanyam.png";
import testimonialRohit from "@/assets/testimonial-rohit.png";

interface Testimonial {
  name: string;
  role: string;
  category: string;
  review: string;
  gender: "male" | "female";
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "M. Praveen Chakravarthy",
    role: "Chicago, USA – Renowned Immigration Attorney",
    category: "Property Purchase – Trust & Transparency",
    review: "I approached BLV Global NRI for my real estate property transaction in Hyderabad, and the entire process was handled with utmost professionalism. Their clear guidance, strong legal expertise, and efficient coordination with government authorities made everything completely hassle-free. I highly recommend BLV Global NRI for reliable and seamless real estate transactions.",
    gender: "male",
    image: testimonialPraveen,
  },
  {
    name: "Sandeep Varma",
    role: "Entrepreneur | London, UK",
    category: "Commercial Property Investment",
    review: "Purchasing a commercial property in Visakhapatnam while being overseas can be challenging, but BLV Global NRI made it effortless. Their strong local network, thorough due diligence, and transparent approach gave me complete confidence. They handled everything—from property verification to final registration—with absolute precision. Today, I am a peaceful owner enjoying strong rental returns.",
    gender: "male",
  },
  {
    name: "Anusha Devi",
    role: "Software Engineer | Sydney, Australia",
    category: "Legal & Documentation Excellence",
    review: "What impressed me the most was their deep knowledge of legal processes and documentation. BLV Global NRI ensured my property transaction was legally secure and well-structured. Their attention to detail and clarity at every step truly set them apart in real estate advisory.",
    gender: "female",
  },
  {
    name: "Karthik Narayan",
    role: "Software Developer | New Jersey, USA",
    category: "Custodian of Original Documents",
    review: "Entrusting original property documents was not easy, especially back in 2019. But Mr. Vagesh Datt and the team proved to be highly dependable custodians. Their secure handling, systematic documentation, and accountability gave me complete peace of mind. A truly professional and trustworthy team.",
    gender: "male",
  },
  {
    name: "Harish Chandra Devireddy",
    role: "Toronto, Canada",
    category: "Finance Management & Advisory",
    review: "BLV Global NRI not only managed my property transaction but also guided me through the financial aspects with clarity. Their structured approach to fund management, compliance, and remittances made the entire process smooth and efficient.",
    gender: "male",
  },
  {
    name: "Meghana Reddy",
    role: "Architect | Singapore",
    category: "Buyer & Seller Handling Expertise",
    review: "Their ability to handle both buyers and sellers with professionalism is remarkable. BLV Global NRI ensured genuine negotiations, fair value, and a smooth closure. Their market understanding and strong network truly reflect their credibility.",
    gender: "female",
  },
  {
    name: "Trivikram Reddy",
    role: "Dallas, USA",
    category: "Full-Time Support Across Time Zones",
    review: "Despite the time difference, BLV Global NRI was always available and responsive. Their commitment to providing support across time zones made communication effortless. I never felt disconnected from the process.",
    gender: "male",
  },
   {
    name: "G. Rohit Rao",
    role: "Software Engineer | Dallas, USA",
    category: "Complete Turnkey Experience",
    review: "From finding the perfect apartment to completing interiors and placing a reliable tenant, BLV Global NRI handled everything end-to-end. Their structured approach and regular management ensure I receive rental income smoothly every month without any involvement.",
    gender: "male",
    image: testimonialRohit,
  },
  {
    name: "Naveen Goud Cherukuri",
    role: "Melbourne, Australia",
    category: "Strong Local Network & Execution",
    review: "Their strong local network and on-ground presence played a key role in closing my transaction efficiently. BLV Global NRI combines market intelligence with execution excellence, making them a trusted partner for any real estate requirement.",
    gender: "male",
  },
  {
    name: "Sowmya Iyer",
    role: "Bangalore / Singapore",
    category: "Investment to Income – Seamless Execution",
    review: "What stood out was their ability to convert my property investment into a fully managed rental asset. From selection to interiors and tenant management, everything was handled professionally. I now receive consistent rental income with complete peace of mind.",
    gender: "female",
  },
  {
    name: "Chelaram Chowdary",
    role: "Dubai, UAE",
    category: "Premium Property Management Experience",
    review: "BLV Global NRI delivered a complete premium experience—from identifying a high-rise gated community apartment to executing interiors and managing tenants. Their proactive updates and smooth rental handling make them highly dependable.",
    gender: "male",
  },
{
    name: "Arjun Rao Raagam",
    role: "Dubai, UAE",
    category: "Complete NRI Property Management",
    review: "BLV Global NRI offers a complete ecosystem for NRIs—from property acquisition and legal verification to documentation, custody, and transaction management. Their strong local presence and professional execution make them a one-stop solution for real estate in India.",
    gender: "male",
  },
  {
    name: "Raaman Iyer",
    role: "Sailam, Tamil Nadu / Dubai, UAE",
    category: "Dispute to Closure – Complete Authority",
    review: "What started as a stressful property dispute was transformed into a well-managed process once Mr. Vagesh Datt took over through GPA. His ability to handle court matters, legal documentation, and on-ground coordination ensured a timely and effective resolution. Highly recommended for critical property matters.",
    gender: "male",
  },
  {
    name: "Subramanyam Mallik K.",
    role: "New Jersey, USA",
    category: "Complex Dispute – Strategic Resolution",
    review: "I was facing a long-pending and complex property dispute in Hyderabad involving multiple legal complications. After granting General Power of Attorney to Mr. P. Vagesh Datt, the entire matter was handled with strategic clarity and authority. From court proceedings to documentation and stakeholder coordination, every aspect was managed professionally. The issue was resolved efficiently without my physical presence. A truly dependable and result-driven approach.",
    gender: "male",
    image: testimonialSubramanyam,
  },
];

const faqs = [
  {
    q: "What does BLV Global do?",
    a: "We manage property, legal, compliance, and transactions for NRIs as their authorized representative.",
  },
  {
    q: "Are you Agentss?",
    a: "No. We are professional asset managers focused on responsibility and compliance.",
  },
  {
    q: "Is it FEMA compliant?",
    a: "Yes. All services strictly follow FEMA and Indian laws.",
  },
  {
    q: "Can you act on my behalf?",
    a: "Yes, through GPA / SPA.",
  },
  {
    q: "Do I need to travel to India?",
    a: "In most cases, no. We coordinate Notary, Apostille, Embassy attestation, POA registration, and execution so that transactions can be completed remotely.",
  },
  
  {
    q: "How do I track progress?",
    a: "Through digital reports, photos, and direct communication. NRIs remain informed and in control — from anywhere in the world.",
  },
];

const Testimonials = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-navy section-padding text-center">
        <span className="text-gold text-sm font-semibold tracking-wider uppercase">Client Stories</span>
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mt-3 mb-6">
          Testimonials
        </h1>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
          Hear from NRIs who trust BLV Global with their most valuable assets in India.
        </p>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="glass-card p-6 hover:scale-[1.02] transition-transform">
              <div className="flex items-center gap-4 mb-3">
                {t.image ? (
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-gold/20"
                    loading="lazy"
                    width={56}
                    height={56}
                  />
                ) : (
                  <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center text-2xl border-2 border-gold/20">
                    {t.gender === "male" ? "👨" : "👩"}
                  </div>
                )}
                <div>
                  <h4 className="font-serif font-semibold text-foreground">{t.name}</h4>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
              <div className="inline-block px-2 py-0.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-[10px] font-medium mb-3">
                {t.category}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed italic">"{t.review}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">FAQ</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3">
              Frequently Asked Questions
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass-card px-6 border-none"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-gold py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
