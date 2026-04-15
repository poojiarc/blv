import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { services } from "@/data/services";
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
import serviceendtoend from "@/assets/service-end-to-end.png";

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
  "service-end-to-end": serviceendtoend,
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl font-bold text-foreground mb-4">Service Not Found</h1>
          <Link to="/services" className="text-gold hover:underline">Back to Services</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Banner */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <img
          src={imageMap[service.image]}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover"
          width={800}
          height={600}
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-5xl mx-auto w-full px-4 md:px-8 pb-10">
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-primary-foreground">{service.title}</h1>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-gold hover:underline mb-8 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Services
          </Link>

          <div className="glass-card p-8 md:p-12 mb-8">
            <p className="text-muted-foreground leading-relaxed text-lg mb-8">{service.description}</p>
            <h3 className="font-serif text-xl font-bold text-foreground mb-6">Key Features</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {service.bullets.map((bullet) => (
                <div key={bullet} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold gold-gradient text-accent-foreground hover:opacity-90 transition-all gold-glow"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
