import { Shield, Globe, CheckCircle, Eye, Heart, Users } from "lucide-react";

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
          Bridging the gap between NRIs and their Indian assets with integrity, transparency, and professional excellence.
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
                BLV Global NRI Asset Management Pvt. Ltd. is a professionally managed, Government-registered and FEMA-compliant company, exclusively dedicated to Non-Resident Indians (NRIs) and global investors with assets in India.
              </p>
              <p>
                Headquartered in India and driven by strong local expertise, BLV Global acts as a single, reliable on-ground representative for NRIs who own, plan to acquire, or manage property and assets across India.
              </p>
              <p>
                Managing properties, finances, and legal compliances from abroad can be complex and time-consuming. BLV Global was founded with a clear vision — to bridge the gap between NRIs and their assets in India, offering complete peace of mind through ethical practices, professional execution, and personalized service.
              </p>
            </div>
          </div>

          {/* Why BLV Global */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Why BLV Global?
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Government & FEMA Registered Company",
                "7+ Years of Proven Professional Experience",
                "70+ Successfully Completed NRI Projects",
                "Strong Presence in Telangana, AP & Karnataka",
                "Directors with Engineering, Technical & Field Expertise",
                "Legal, Financial & Compliance Support Under One Roof",
                "Single Point of Contact for All NRI Asset Requirements",
                "Ethical, Transparent, Process-Driven Operations",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 glass-card">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm font-medium">{item}</span>
                </div>
              ))}
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
                { icon: Shield, text: "Overseas investors in Indian real estate" },
                { icon: Users, text: "Families managing inherited properties" },
                { icon: CheckCircle, text: "Professionals seeking passive income from Indian assets" },
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
