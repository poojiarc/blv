import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface Testimonial {
  name: string;
  role: string;
  review: string;
  gender: "male" | "female";
}

const testimonials: Testimonial[] = [
  {
    name: "Rajesh Kumar",
    role: "NRI - USA",
    review: "BLV Global managed my property registration in Hyderabad flawlessly. Their single point of contact approach saved me from dealing with multiple agents. Highly professional and trustworthy.",
    gender: "male",
  },
  {
    name: "Priya Sharma",
    role: "NRI - UK",
    review: "I was worried about managing my inherited property from London. BLV Global handled everything — from documentation to compliance. Their transparency and regular updates gave me complete peace of mind.",
    gender: "female",
  },
  {
    name: "Suresh Reddy",
    role: "NRI - UAE",
    review: "The GPA and SPA services from BLV Global were exceptional. They coordinated everything with the embassy and registrar office. I didn't have to travel to India even once. Truly reliable.",
    gender: "male",
  },
  {
    name: "Anitha Venkatesh",
    role: "NRI - Australia",
    review: "What sets BLV apart is their engineering background — they inspect properties with a technical eye that no broker can match. My family's ancestral property is in safe hands now.",
    gender: "female",
  },
  {
    name: "Karthik Naidu",
    role: "NRI - Canada",
    review: "BLV Global helped me sell my property in Secunderabad with complete FEMA compliance. The process was smooth, documented, and professionally handled. I recommend them to every NRI.",
    gender: "male",
  },
  {
    name: "Meena Rao",
    role: "NRI - Germany",
    review: "Their financial and tax assistance for NRI properties is outstanding. They guided me through the entire repatriation process and ensured everything was legally compliant.",
    gender: "female",
  },
];

const faqs = [
  {
    q: "What exactly does BLV Global do?",
    a: "BLV Global is a Government and FEMA-registered NRI Asset Management company. We act as your authorized on-ground representative in India, managing property transactions, legal documentation, compliance, registrations, and asset oversight on your behalf.",
  },
  {
    q: "Are you a real estate broker or agent?",
    a: "No. We are not brokers. We are a professional asset and compliance management company. Our role is responsibility, execution, and compliance — not commissions or quick transactions.",
  },
  {
    q: "Can BLV act on my behalf legally while I am abroad?",
    a: "Yes. Through a properly drafted and registered GPA (General Power of Attorney) or SPA (Special Power of Attorney), we legally represent NRIs for property and asset-related activities in India.",
  },
  {
    q: "Do I need to travel to India for registrations or documentation?",
    a: "In most cases, no. We coordinate Notary, Apostille, Embassy attestation, POA registration, and execution so that transactions can be completed remotely.",
  },
  {
    q: "Do you manage rental properties or tenants?",
    a: "No. We do not offer rental management. Our specialization is asset protection, legal compliance, documentation, and transaction execution.",
  },
  {
    q: "Can you help with buying or selling property in India?",
    a: "Yes. We assist with property identification, due diligence, title verification, negotiation, registration, and sale execution, ensuring compliance and risk mitigation.",
  },
  {
    q: "Do you handle inherited or ancestral properties?",
    a: "Yes. We support NRIs with inherited assets, joint ownership issues, documentation rectification, and structured asset resolution.",
  },
  {
    q: "How do I stay updated if I am abroad?",
    a: "We provide digital documentation access, photo & video updates, online approvals, and periodic status reports. You remain informed and in control at every stage.",
  },
  {
    q: "Is there transparency in costs and documentation?",
    a: "Yes. All activities are clearly documented, approvals are taken in advance, and execution is done only as per mandate.",
  },
  {
    q: "Why should I trust BLV with my assets?",
    a: "Because we offer Government & FEMA registration, 7+ years of professional experience, 70+ completed NRI projects, single point of accountability, and ethical, process-driven execution.",
  },
  {
    q: "How do we start working with BLV Global?",
    a: "You can begin with an initial consultation, where we understand your asset structure and advise the best compliant way forward.",
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
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center text-2xl border-2 border-gold/20">
                  {t.gender === "male" ? "👨" : "👩"}
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-foreground">{t.name}</h4>
                  <p className="text-sm text-gold">{t.role}</p>
                </div>
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
