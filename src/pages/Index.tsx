import { Link } from "react-router-dom";
import { ArrowRight, Shield, Globe, CheckCircle, Phone, Mail, MapPin } from "lucide-react";
import { services } from "@/data/services";
import heroBg from "@/assets/hero-bg.jpg";
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

const stats = [
  { value: "7+", label: "Years Experience" },
  { value: "70+", label: "Projects Completed" },
  { value: "3", label: "States Covered" },
  { value: "100%", label: "FEMA Compliant" },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="Indian cityscape" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 py-32">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-sm mb-8 animate-fade-up">
            <Shield className="h-4 w-4 text-gold" />
            <span className="text-sm text-gold font-medium">Government & FEMA Registered</span>
          </div>
          <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-4 animate-fade-up">
            BLV GLOBAL NRI ASSET MANAGEMENT PVT. LTD
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up-delay-1">
            Your Trusted Partner for{" "}
            <span className="text-gold">End-to-End NRI Property & Asset Management</span>{" "}
            in India
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-3xl mx-auto mb-4 animate-fade-up-delay-2">
            Managing property, legal documentation, and financial responsibilities in India while living abroad can be complex, uncertain, and time-consuming.
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-6 animate-fade-up-delay-2 font-medium">
            BLV Global bridges this gap — acting as your trusted, authorized on-ground representative, ensuring your assets are secure, compliant, and professionally managed.
          </p>
          <p className="text-gold font-serif text-2xl md:text-3xl font-bold mb-10 animate-fade-up-delay-2">
            Your Property. Our Responsibility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-2">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl font-semibold gold-gradient text-accent-foreground hover:opacity-90 transition-all gold-glow text-base"
            >
              Contact Us
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 rounded-xl font-semibold border-2 border-gold/40 text-primary-foreground hover:bg-gold/10 transition-all text-base"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-3xl md:text-4xl font-bold text-gold mb-1">{stat.value}</div>
              <div className="text-sm text-primary-foreground/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">Who We Are</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              Your Trusted Partner in India
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed mb-4">
              BLV Global NRI Asset Management Pvt. Ltd. is a professionally managed, Government-registered and FEMA-compliant company dedicated exclusively to Non-Resident Indians (NRIs) and global investors.
            </p>
            <p className="text-foreground max-w-3xl mx-auto text-base leading-relaxed font-medium">
              We don't operate as brokers. We act as responsible custodians of your assets, delivering transparency, accountability, and complete peace of mind — no matter where you are in the world.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { icon: Shield, title: "Government Registered", desc: "Fully compliant with FEMA guidelines and Indian regulations" },
              { icon: Globe, title: "NRI-Focused", desc: "Exclusively serving NRIs across USA, UK, UAE, Europe & Australia" },
              { icon: CheckCircle, title: "Single Point of Contact", desc: "No multiple follow-ups — one reliable representative in India" },
            ].map((item) => (
              <div key={item.title} className="glass-card p-8 text-center hover:scale-[1.02] transition-transform">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gold/10 mb-5">
                  <item.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{item.title}</h3>
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

      {/* SERVICES */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">Our Services</span>
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
          <span className="text-gold text-sm font-semibold tracking-wider uppercase">Get in Touch</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mt-3 mb-10">
            Let's Discuss Your Asset Needs
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { icon: Phone, label: "+91 9966799225", href: "tel:+919966799225" },
              { icon: Mail, label: "blvglobalnri@gmail.com", href: "mailto:blvglobalnri@gmail.com" },
              { icon: MapPin, label: "Secunderabad, Telangana", href: "#" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex flex-col items-center gap-3 p-6 rounded-xl border border-gold/10 bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors"
              >
                <item.icon className="h-6 w-6 text-gold" />
                <span className="text-primary-foreground/80 text-sm">{item.label}</span>
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
