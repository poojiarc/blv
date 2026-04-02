import { Shield, Globe, CheckCircle, Eye, Heart, Users, AlertTriangle } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Banner */}
      <section className="bg-navy section-padding text-center">
        <span className="text-gold text-sm font-semibold tracking-wider uppercase">About Us</span>
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mt-3 mb-6">
          Who We Are
        </h1>
        <p className="text-primary-foreground/70 max-w-3xl mx-auto text-lg">
          A Government-registered and FEMA-compliant company exclusively focused on managing property, assets, and compliance for NRIs across the globe.
        </p>
      </section>

      {/* About Content */}
      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="glass-card p-8 md:p-12 mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
              BLV Global NRI Asset Management Pvt. Ltd.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                BLV Global NRI Asset Management Pvt. Ltd. is a Government-registered and FEMA-compliant company exclusively focused on managing property, assets, and compliance for NRIs across the globe.
              </p>
              <p>
                With strong local expertise and structured processes, we act as a single, reliable point of contact in India, ensuring your assets are handled with professionalism, legal clarity, and care.
              </p>
            </div>
          </div>

          {/* Why BLV Global Exists */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
              Why BLV Global Exists
            </h2>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">
              NRIs often face serious challenges while managing assets in India:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {[
                "Legal complexities and compliance risks",
                "Documentation errors and delays",
                "Lack of trustworthy on-ground representation",
                "Miscommunication and coordination issues",
                "Dependence on unreliable agents",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 glass-card">
                  <AlertTriangle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-foreground font-semibold text-lg">
              BLV Global was created to eliminate these challenges.
            </p>
            <p className="text-center text-muted-foreground mt-2 max-w-3xl mx-auto">
              We bridge the gap between NRIs and their Indian assets — offering clarity, control, and confidence through professional execution and ethical practices.
            </p>
          </div>

          {/* Our Approach */}
          <div className="glass-card p-8 md:p-12 mb-16">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
              Our Approach
            </h2>
            <p className="text-foreground font-semibold mb-2">We are not transaction-driven. We are responsibility-driven.</p>
            <div className="grid sm:grid-cols-2 gap-4 mt-6 mb-6">
              {[
                "Legal compliance",
                "Structured execution",
                "Transparency in every step",
                "Long-term asset protection",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0" />
                  <span className="text-foreground text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground italic">
              We don't act as intermediaries. We act as custodians of your assets.
            </p>
          </div>

          {/* Key Highlights */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Key Highlights
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "7+ Years of Professional Expertise",
                "70+ Successfully Completed NRI Projects",
                "Government & FEMA Registered Company",
                "GPA / SPA + Registration Services Fully Integrated",
                "Directors with Engineering, Technical & Field Expertise",
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
                At BLV Global, we don't just manage assets — we manage relationships. We act as your trusted representative in India, treating your assets as our own. From routine management to critical decisions, we ensure clarity, control, and confidence at every step.
              </p>
            </div>
          </div>

          {/* Who We Serve */}
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">Who We Serve</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Globe, text: "NRIs across USA, UK, UAE, Europe & Australia" },
                { icon: Shield, text: "Overseas real estate investors" },
                { icon: Users, text: "Families managing ancestral properties" },
                { icon: CheckCircle, text: "Professionals seeking long-term asset security" },
              ].map((item) => (
                <div key={item.text} className="glass-card p-6 text-center">
                  <item.icon className="h-8 w-8 text-gold mx-auto mb-3" />
                  <p className="text-sm text-foreground">{item.text}</p>
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
