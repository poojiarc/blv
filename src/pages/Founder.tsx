import founderImg from "@/assets/founder-placeholder.jpg";

interface FounderInfo {
  name: string;
  title: string;
  qualification: string;
  image: string;
  experience: string[];
  bio: string;
}

const founders: FounderInfo[] = [
  {
    name: "PVR Vagesh Datt",
    title: "Founder & Managing Director",
    qualification: "B.Tech – Civil Engineering | M.Tech – Structural Engineering",
    image: founderImg,
    experience: [
      "Central Government, State Government & Private Construction Projects",
      "Infrastructure Development",
      "Interior Project Execution",
      "End-to-End Property Management Services",
    ],
    bio: "PVR Vagesh Datt is a qualified Civil and Structural Engineer with over 7 years of comprehensive experience. His professional journey includes delivering multiple high-value assignments with a focus on precision, compliance, and client satisfaction. Over the years, he has built a specialised and committed team that upholds professional standards, ethical practices, and transparent communication.",
  },
  {
    name: "Co-Founder",
    title: "Co-Founder & Director",
    qualification: "Details Coming Soon",
    image: founderImg,
    experience: [
      "Strategic Business Development",
      "NRI Client Relations",
      "Operations & Compliance Management",
    ],
    bio: "A dedicated professional bringing strategic vision and operational excellence to BLV Global's mission of serving NRIs with integrity and professionalism.",
  },
];

const Founder = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-navy section-padding text-center">
        <span className="text-gold text-sm font-semibold tracking-wider uppercase">Leadership</span>
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mt-3 mb-6">
          Our Founders
        </h1>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
          The visionaries behind BLV Global's commitment to NRI asset protection and professional excellence.
        </p>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto space-y-16">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="glass-card overflow-hidden"
            >
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
                    <h3 className="font-serif text-2xl font-bold text-primary-foreground">{founder.name}</h3>
                    <p className="text-gold text-sm font-medium">{founder.title}</p>
                  </div>
                </div>
                <div className="md:col-span-3 p-8">
                  <div className="inline-block px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-medium mb-4">
                    {founder.qualification}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">{founder.bio}</p>
                  <h4 className="font-serif text-lg font-semibold text-foreground mb-3">Key Experience</h4>
                  <ul className="space-y-2">
                    {founder.experience.map((exp) => (
                      <li key={exp} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold mt-2 shrink-0" />
                        {exp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Founder;
