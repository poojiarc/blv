import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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

const Services = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-navy section-padding text-center">
        <span className="text-gold text-sm font-semibold tracking-wider uppercase">What We Do</span>
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mt-3 mb-6">
  OUR{" "}
  <span className="inline-block text-[1.25em] leading-none align-baseline">
    11
  </span>{" "}
  SERVICE PILLARS
</h1>
        <p className="text-primary-foreground/70 max-w-3xl mx-auto text-lg">
         From acquisition to exit in Capital, Our 11 Service Pillars master every layer of ownership and sustained wealth creation for Global NRIs.
        </p>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
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
                <p className="text-primary-foreground/70 text-sm line-clamp-2">{service.shortDescription}</p>
                <div className="mt-3 flex items-center gap-1 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
