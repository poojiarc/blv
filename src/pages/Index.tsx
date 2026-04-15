import { Link } from "react-router-dom";
import { ArrowRight, Shield, Globe, CheckCircle, Phone, Mail, MapPin, Award, Trophy } from "lucide-react";
import { services } from "@/data/services";
import AnimatedHeading from "@/components/AnimatedHeading";
import FadeIn from "@/components/FadeIn";
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
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
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
  { value: "8+", label: "Years Experience" },
  { value: "90+", label: "Projects Completed" },
  { value: "3", label: "Andhra Pradesh, Telangana, Karnataka States Covered" },
  { value: "100%", label: "FEMA Compliant" },
  {value:"₹150cr+",label:"Transactions Facilitated"},
];

const HERO_VIDEO_URL = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4";
const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/india/india-states.json";
const Index = () => {
  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative h-screen overflow-hidden bg-black">
        {/* Video Background — NO overlay */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>

        {/* Hero Content — bottom-aligned */}
        <div className="relative z-10 h-full flex flex-col px-6 md:px-12 lg:px-16">
          <div className="flex-1 flex flex-col justify-end pb-12 lg:pb-16">
            <div className="lg:grid lg:grid-cols-2 lg:items-end">
              {/* Left Column */}
              <div>
                <AnimatedHeading
                  text={"Your Property.\nOur Responsibility."}
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-white mb-4 font-sans"
                  charDelay={30}
                  initialDelay={200}
                />

                <FadeIn delay={800} duration={1000}>
                  <p className="text-base md:text-lg text-gray-300 mb-5 max-w-xl" style={{ letterSpacing: '-0.01em' }}>
                     Your Permanent Presence in India — Without Being Here.we back NRIs with trusted………. Accrods india.
                  </p>
                </FadeIn>

                <FadeIn delay={1200} duration={1000}>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/contact"
                      className="bg-white text-black px-8 py-3 rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors"
                    >
                      Get in Touch
                    </Link>
                    <Link
                      to="/services"
                      className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium text-sm hover:bg-white hover:text-black transition-all duration-300"
                    >
                      Explore Services
                    </Link>
                  </div>
                </FadeIn>
              </div>

              {/* Right Column — Tag */}
              <FadeIn delay={1400} duration={1000} className="mt-8 lg:mt-0 flex items-end justify-start lg:justify-end">
                <div className="liquid-glass border border-white/20 px-6 py-3 rounded-xl">
                  <span className="text-lg md:text-xl lg:text-2xl font-light text-white">
                    Property. Legal. Compliance.
                  </span>
                </div>
              </FadeIn>
            </div>
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
              We don't operate as agents. We act as responsible custodians of your assets, delivering transparency, accountability, and complete peace of mind — no matter where you are in the world.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { icon: Shield, title: "Government Incorporated.", desc: "Fully compliant with FEMA guidelines and Indian regulations" },
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

      {/* AWARDS & RECOGNITION */}
      <section className="section-padding bg-navy relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-gold text-sm font-semibold tracking-wider uppercase flex items-center justify-center gap-2">
              <Trophy className="h-4 w-4" /> Awards & Recognition
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary-foreground mt-3 mb-6">
              Honoured & Recognised
            </h2>
            <p className="text-primary-foreground/70 max-w-3xl mx-auto text-lg leading-relaxed">
              Honoured &amp; privileged to receive the <span className="text-gold font-semibold">International Business &amp; Education Awards 2026</span> from International Cricketer <span className="text-gold font-semibold">Mr. Suresh Raina</span> at Hyatt Centric, New Delhi — a proud moment on <span className="text-gold font-semibold">11th April 2026</span> for <span className="text-gold font-semibold">Best Global NRI Property Management Company</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden border border-gold/20 shadow-lg group">
              <img
                src={awardCeremony}
                alt="PVR Vagesh Datt receiving International Business & Education Award 2026 from Suresh Raina"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={800}
                height={600}
              />
              <div className="p-5 bg-navy-dark">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="h-5 w-5 text-gold" />
                  <span className="text-gold font-semibold text-sm">International Business & Education Awards 2026</span>
                </div>
                <p className="text-primary-foreground/60 text-sm">PVR Vagesh Datt, Founder & Managing Director, receiving the award at Hyatt Centric, New Delhi</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gold/20 shadow-lg group">
              <img
                src={awardNews}
                alt="Telangana News Spot coverage of BLV Global NRI Award"
                className="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={800}
                height={600}
              />
              <div className="p-5 bg-navy-dark">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="h-5 w-5 text-gold" />
                  <span className="text-gold font-semibold text-sm">Media Recognition</span>
                </div>
                <p className="text-primary-foreground/60 text-sm">Featured in Telangana News Spot — Best Global NRI Property Management Company</p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <div className="liquid-glass border border-gold/20 px-8 py-4 rounded-2xl text-center">
              <p className="text-primary-foreground font-serif text-lg font-semibold">
                🏆 Best Global NRI Property Management Company — 2026
              </p>
              <p className="text-primary-foreground/50 text-sm mt-1">International Business & Education Awards, New Delhi</p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PRESENCE — South India Map */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold text-sm font-semibold tracking-wider uppercase">Our Presence</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Serving Across South India
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                BLV Global has a strong on-ground presence across three key states in South India, ensuring your properties and assets are managed with local expertise and personal attention.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  { state: "Telangana", desc: "Headquartered in Secunderabad with extensive coverage across Hyderabad and surrounding districts" },
                  { state: "Andhra Pradesh", desc: "Active presence covering Vijayawada, Visakhapatnam and key investment corridors" },
                  { state: "Karnataka", desc: "Operations extending to Bengaluru and surrounding regions for NRI clients" },
                ].map((item) => (
                  <div key={item.state} className="flex items-start gap-3 p-4 glass-card">
                    <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="text-foreground font-semibold text-sm">{item.state}</span>
                      <p className="text-muted-foreground text-xs mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
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
