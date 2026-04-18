import founderVagesh from "@/assets/founder-vagesh.png";
import founderGanesh from "@/assets/founder-ganesh.png";

interface FounderInfo {
  name: string;
  title: string;
  qualification: string;
  image: string;
  experience: string[];
  bio: string;

  description?: string;
  leadership?: string;
  credibility?: string;

  story?: string[];
}

const founders: FounderInfo[] = [
  {
    name: "PVR Vagesh Datt",
    title: "Founder & Managing Director",
    qualification:
      "B.Tech – Civil Engineering | M.Tech – Structural Engineering",
    image: founderVagesh,

    experience: [
      "Central & State Government Construction Projects",
      "Private Construction Projects",
      "Infrastructure Development",
      "Interior Project Execution",
      "End-to-End Property Management Services",
    ],

    bio: "PVR Vagesh Datt is a qualified Civil and Structural Engineer with over 8+ years of comprehensive experience across government, private, and infrastructure projects. His work is driven by precision, compliance, and a strong commitment to client satisfaction.",

    description:
      "His professional journey includes delivering multiple high-value assignments across Central Government, State Government, and private sector projects. With a deep understanding of execution, compliance, and coordination, he ensures every project is handled with technical accuracy and accountability.",

    leadership:
      "Over the years, he has built a specialised and committed team that operates with strong professional standards, ethical practices, and transparent communication.",

    credibility:
      "His work has earned consistent appreciation from both Indian and NRI clients, establishing him as a reliable and responsible industry professional.",

    story: [
      "His journey did not begin as a business idea. It began with people.",
      "Friends and family living abroad started reaching out — not for investments, but for trust. They had properties in India, but no one reliable to manage them.",
      "He stepped in personally — visiting sites, handling documentation, coordinating processes, and ensuring everything was done correctly.",
      "For an NRI, property is not just an asset — it is savings, legacy, emotion, and future security.",
      "What they needed was not a Agent, but someone who would stand in their place with responsibility.",
      "What started quietly grew through trust, leading to 90+ successful NRI engagements.",
      "BLV Global was built on one foundation: Trust backed by responsibility.",
    ],
  },
  {
    name: "P. Venkata Ganesh",
    title: "Director",
    qualification: "37+ Years of Corporate Experience",
    image: founderGanesh,
    experience: [
      "Strategic Financial Planning & Advisory",
      "Risk Management & Business Structuring",
      "Complete Financial Framework Oversight",
      "Long-Term Value Creation for Clients",
    ],
    bio: "Mr. P. Venkata Ganesh serves as the Director of BLV Global NRI Asset Management Private Limited, overseeing the company's entire financial framework. With over 37+ years of extensive corporate experience, he is a distinguished financial strategist and advisor, bringing deep expertise in financial planning, risk management, and business structuring. His strategic vision and financial acumen play a crucial role in driving the company's stability, growth, and long-term value for clients.",
  },
];

const Founder = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-navy section-padding text-center">
        <span className="text-gold text-sm font-semibold tracking-wider uppercase">
          Leadership
        </span>
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mt-3 mb-6">
          Our Founders
        </h1>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
          The visionaries behind BLV Global stands for a global commitment to
          NRIs — Protecting Properties. Empowering Ownership. Delivering
          Excellence
        </p>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto space-y-16">
          {founders.map((founder, index) => (
            <div key={index} className="glass-card overflow-hidden">
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 relative">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover min-h-[300px]"
                    loading="lazy"
                    width={600}
                    height={600}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-navy-dark/90 to-transparent">
                    <h3 className="font-serif text-2xl font-bold text-primary-foreground">
                      {founder.name}
                    </h3>
                    <p className="text-gold text-sm font-medium">
                      {founder.title}
                    </p>
                  </div>
                </div>
                <div className="md:col-span-3 p-8">
                  <div className="inline-block px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-medium mb-4">
                    {founder.qualification}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {founder.bio}
                  </p>
                  <h4 className="font-serif text-lg font-semibold text-foreground mb-3">
                    Key Experience
                  </h4>
                  <ul className="space-y-2">
                    {founder.experience.map((exp) => (
                      <li
                        key={exp}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-gold mt-2 shrink-0" />
                        {exp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Founder Story */}
              {founder.story && (
                <div className="p-8 border-t border-border">
                  <h4 className="font-serif text-xl font-bold text-foreground mb-4">
                    The Real Story Behind BLV Global
                  </h4>
                  <div className="space-y-3">
                    {founder.story.map((para, i) => (
                      <p
                        key={i}
                        className="text-muted-foreground leading-relaxed text-sm"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Founder;
