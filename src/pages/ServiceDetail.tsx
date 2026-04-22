// import { useParams, Link } from "react-router-dom";
// import { ArrowLeft, CheckCircle } from "lucide-react";
// import { services } from "@/data/services";
// import serviceProperty from "@/assets/service-property.jpg";
// import serviceInvestment from "@/assets/service-investment.jpg";
// import serviceGpa from "@/assets/service-gpa.jpg";
// import serviceRegistration from "@/assets/service-registration.jpg";
// import serviceLegal from "@/assets/service-legal.jpg";
// import serviceFinance from "@/assets/service-finance.jpg";
// import serviceWealth from "@/assets/service-wealth.jpg";
// import serviceVirtual from "@/assets/service-virtual.jpg";
// import serviceDocument from "@/assets/service-document.jpg";
// import serviceElderly from "@/assets/service-elderly.jpg";
// import serviceendtoend from "@/assets/service-end-to-end.png";

// const imageMap: Record<string, string> = {
//   "service-property": serviceProperty,
//   "service-investment": serviceInvestment,
//   "service-gpa": serviceGpa,
//   "service-registration": serviceRegistration,
//   "service-legal": serviceLegal,
//   "service-finance": serviceFinance,
//   "service-wealth": serviceWealth,
//   "service-virtual": serviceVirtual,
//   "service-document": serviceDocument,
//   "service-elderly": serviceElderly,
//   "service-end-to-end": serviceendtoend,
// };

// const formatPoint = (text: string) => {
//   // If the text contains an open parenthesis, split it
//   if (text.includes("(")) {
//     const [mainText, bracketText] = text.split(" (");
//     return (
//       <div className="flex flex-col">
//         <span className="text-foreground">{mainText}</span>
//         <span className="text-muted-foreground text-sm mt-0.5">
//           ({bracketText}
//         </span>
//       </div>
//     );
//   }
//   return <span className="text-foreground">{text}</span>;
// };

// const ServiceDetail = () => {
//   const { id } = useParams();
//   const service = services.find((s) => s.id === id);

//   if (!service) {
//     return (
//       <div className="min-h-screen pt-20 flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="font-serif text-3xl font-bold text-foreground mb-4">
//             Service Not Found
//           </h1>
//           <Link to="/services" className="text-gold hover:underline">
//             Back to Services
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen pt-20">
//       {/* Banner */}
//       <section className="relative h-72 md:h-96 overflow-hidden">
//         <img
//           src={imageMap[service.image]}
//           alt={service.title}
//           className="absolute inset-0 w-full h-full object-cover"
//           width={800}
//           height={600}
//         />
//         <div className="hero-overlay absolute inset-0" />
//         <div className="relative z-10 h-full flex items-end">
//           <div className="max-w-5xl mx-auto w-full px-4 md:px-8 pb-10">
//             <h1 className="font-serif text-3xl md:text-5xl font-bold text-primary-foreground">
//               {service.title}
//             </h1>
//           </div>
//         </div>
//       </section>

//       <section className="section-padding bg-background">
//         <div className="max-w-4xl mx-auto">
//           <Link
//             to="/services"
//             className="inline-flex items-center gap-2 text-gold hover:underline mb-8 text-sm font-medium"
//           >
//             <ArrowLeft className="h-4 w-4" /> Back to Services
//           </Link>

//           <div className="glass-card p-8 md:p-12 mb-8">
//             <p className="text-muted-foreground leading-relaxed text-lg mb-8">
//               {service.description}
//             </p>
//             {/* NORMAL SERVICES */}
//             {service.bullets && (
//               <>
//                 <h3 className="font-serif text-xl font-bold text-foreground mb-6">
//                   Key Features
//                 </h3>
//                 <div className="grid sm:grid-cols-2 gap-3 mb-8">
//                   {service.bullets.map((bullet) => (
//                     <div
//                       key={bullet}
//                       className="flex items-start gap-3 p-3 rounded-lg bg-muted/50"
//                     >
//                       <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
//                       <span className="text-foreground text-sm">{bullet}</span>
//                     </div>
//                   ))}
//                 </div>
//               </>
//             )}

//             {/* 🔼 TAX SERVICES */}
//             {service.taxServices && (
//               <>
//                 <h3 className="font-serif text-xl font-bold text-foreground mb-6 text-center">
//                   We Do
//                 </h3>

//                 <div className="grid md:grid-cols-2 gap-6 mb-10">
//                   {service.taxServices.map((item) => (
//                     <div
//                       key={item.title}
//                       className="p-4 rounded-lg bg-muted/50"
//                     >
//                       <h4 className="font-semibold text-foreground mb-2">
//                         {item.title}
//                       </h4>
//                       <ul className="space-y-1">
//                         {item.points.map((point) => (
//                           <li
//                             key={point}
//                             className="text-sm text-muted-foreground flex gap-2"
//                           >
//                             <CheckCircle className="h-4 w-4 text-gold mt-1" />
//                             {point}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   ))}
//                 </div>
//               </>
//             )}

//             {/* 🔽 REPARTRIATION */}
//             {service.repatriationServices && (
//               <>
//                 <hr className="my-10 border-gold/20" />

//                 <h3 className="font-serif text-xl font-bold text-foreground mb-6 text-center">
//                   Fund Repatriation Services (India ⇄ USA)
//                 </h3>

//                 <div className="grid md:grid-cols-2 gap-6">
//                   {service.repatriationServices.map((item) => (
//                     <div
//                       key={item.title}
//                       className="p-4 rounded-lg bg-muted/50"
//                     >
//                       <h4 className="font-semibold text-foreground mb-2">
//                         {item.title}
//                       </h4>
//                       <ul className="space-y-1">
//                         {item.points.map((point) => (
//                           <li
//                             key={point}
//                             className="text-sm text-muted-foreground flex gap-2"
//                           >
//                             <CheckCircle className="h-4 w-4 text-gold mt-1" />
//                             {point}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   ))}
//                 </div>
//               </>
//             )}
//             {service.documentSections && (
//               <>
//                 <h3 className="font-serif text-xl font-bold text-foreground mb-6 text-center">
//                   We Do
//                 </h3>

//                 <div className="grid md:grid-cols-2 gap-6">
//                   {service.documentSections.map((section) => (
//                     <div
//                       key={section.title}
//                       className="p-4 rounded-lg bg-muted/50"
//                     >
//                       <h4 className="font-semibold text-foreground mb-2">
//                         {section.title}
//                       </h4>

//                       <ul className="space-y-1">
//                         {section.points.map((point) => (
//                           // <li
//                           //   key={point}
//                           //   className="text-sm text-muted-foreground flex gap-2"
//                           // >
//                           //   <CheckCircle className="h-4 w-4 text-gold mt-1" />
//                           //   {point}
//                           // </li>
//                           <li key={point} className="flex items-start gap-3">
//                             <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
//                             {formatPoint(point)}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   ))}
//                 </div>
//               </>
//             )}
//             {/* VIRTUAL EXPERIENCE */}
//             {service.virtualSections && (
//               <>
//                 <h3 className="font-serif text-xl font-bold text-foreground mb-6 text-center">
//                   We Do
//                 </h3>

//                 <div className="grid md:grid-cols-2 gap-6">
//                   {service.virtualSections.map((section) => (
//                     <div
//                       key={section.title}
//                       className="p-4 rounded-lg bg-muted/50"
//                     >
//                       <h4 className="font-semibold text-foreground mb-2">
//                         {section.title}
//                       </h4>

//                       <ul className="space-y-1">
//                         {section.points.map((point) => (
//                           // <li
//                           //   key={point}
//                           //   className="text-sm text-muted-foreground flex gap-2"
//                           // >
//                           //   <CheckCircle className="h-4 w-4 text-gold mt-1" />
//                           //   {point}
//                           // </li>
//                           <li key={point} className="flex items-start gap-3">
//                             <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
//                             {formatPoint(point)}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   ))}
//                 </div>
//               </>
//             )}

//             {/* WEALTH MANAGEMENT */}
//             {service.wealthSections && (
//               <>
//                 <h3 className="font-serif text-xl font-bold text-foreground mb-6 text-center">
//                   We Do
//                 </h3>

//                 <div className="grid md:grid-cols-2 gap-6">
//                   {service.wealthSections.map((section) => (
//                     <div
//                       key={section.title}
//                       className="p-4 rounded-lg bg-muted/50"
//                     >
//                       <h4 className="font-semibold text-foreground mb-2">
//                         {section.title}
//                       </h4>

//                       <ul className="space-y-1">
//                         {section.points.map((point) => (
//                           // <li
//                           //   key={point}
//                           //   className="text-sm text-muted-foreground flex gap-2"
//                           // >
//                           //   <CheckCircle className="h-4 w-4 text-gold mt-1" />
//                           //   {point}
//                           // </li>
//                           <li key={point} className="flex items-start gap-3">
//                             <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
//                             {formatPoint(point)}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   ))}
//                 </div>
//               </>
//             )}
//           </div>

//           <div className="text-center">
//             <Link
//               to="/contact"
//               className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold gold-gradient text-accent-foreground hover:opacity-90 transition-all gold-glow"
//             >
//               Contact Us
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ServiceDetail;
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

const formatPoint = (text: string) => {
  // If the text contains an open parenthesis, split it
  if (text.includes("(")) {
    const [mainText, bracketText] = text.split(" (");
    return (
      <div className="flex flex-col">
        <span className="text-foreground text-sm">{mainText}</span>
        <span className="text-muted-foreground text-xs mt-0.5">
          ({bracketText}
        </span>
      </div>
    );
  }
  return <span className="text-foreground text-sm">{text}</span>;
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl font-bold text-foreground mb-4">
            Service Not Found
          </h1>
          <Link to="/services" className="text-gold hover:underline">
            Back to Services
          </Link>
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
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-primary-foreground">
              {service.title}
            </h1>
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
            <p className="text-muted-foreground leading-relaxed text-lg mb-8">
              {service.description}
            </p>

            {/* NORMAL SERVICES BULLETS */}
            {service.bullets && (
              <>
                <h3 className="font-serif text-xl font-bold text-foreground mb-6">
                  Key Features
                </h3>
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {service.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className="flex items-start gap-3 p-3 rounded-lg bg-muted/50"
                    >
                      <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{bullet}</span>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* TAX SERVICES */}
            {service.taxServices && (
              <>
                <h3 className="font-serif text-xl font-bold text-foreground mb-6 text-center">
                  We Do
                </h3>

                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  {service.taxServices.map((item) => (
                    <div
                      key={item.title}
                      className="p-4 rounded-lg bg-muted/50 h-full flex flex-col"
                    >
                      <h4 className="font-semibold text-foreground mb-4">
                        {item.title}
                      </h4>
                      <ul className="space-y-3 flex-grow">
                        {item.points.map((point) => (
                          <li key={point} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                            {formatPoint(point)}
                          </li>
                        ))}
                      </ul>
                      {item.sectionNote && (
                        <div className="mt-4 pt-4 border-t border-border/50 text-sm font-medium text-gold">
                          {item.sectionNote}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}
                        {/* POA TYPES SECTION */}
            {service.poaTypes && (
              <>
                <h3 className="font-serif text-xl font-bold text-foreground mb-6 text-center">
                  Types of Power of Attorney
                </h3>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {service.poaTypes.map((section) => (
                    <div
                      key={section.title}
                      className="p-4 rounded-lg bg-muted/50 h-full flex flex-col"
                    >
                      <h4 className="font-semibold text-foreground mb-4">
                        {section.title}
                      </h4>
                      <ul className="space-y-3 flex-grow">
                        {section.points.map((point) => (
                          <li key={point} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                            {formatPoint(point)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {service.poaTypesPowerLine && (
                  <div className="mb-10 p-6 bg-gold/10 border border-gold/20 rounded-xl text-center">
                    <p className="font-serif text-lg font-medium text-foreground">
                      {service.poaTypesPowerLine}
                    </p>
                  </div>
                )}

                <hr className="my-10 border-gold/20" />
              </>
            )}

            {/* POA MAIN SERVICES SECTION */}
            {service.poaServices && (
              <>
                <h3 className="font-serif text-xl font-bold text-foreground mb-6 text-center">
                  Power of Attorney Services for NRIs (Real Estate & Legal)
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  {service.poaServices.map((section) => (
                    <div
                      key={section.title}
                      className="p-4 rounded-lg bg-muted/50 h-full flex flex-col"
                    >
                      <h4 className="font-semibold text-foreground mb-4">
                        {section.title}
                      </h4>
                      <ul className="space-y-3 flex-grow">
                        {section.points.map((point) => (
                          <li key={point} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                            {formatPoint(point)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </>
            )}
            {/* REPATRIATION SERVICES */}
            {service.repatriationServices && (
              <>
                <hr className="my-10 border-gold/20" />

                <h3 className="font-serif text-xl font-bold text-foreground mb-6 text-center">
                  Fund Repatriation Services (India ⇄ USA)
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  {service.repatriationServices.map((item) => (
                    <div
                      key={item.title}
                      className="p-4 rounded-lg bg-muted/50 h-full flex flex-col"
                    >
                      <h4 className="font-semibold text-foreground mb-4">
                        {item.title}
                      </h4>
                      <ul className="space-y-3 flex-grow">
                        {item.points.map((point) => (
                          <li key={point} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                            {formatPoint(point)}
                          </li>
                        ))}
                      </ul>
                      {item.sectionNote && (
                        <div className="mt-4 pt-4 border-t border-border/50 text-sm font-medium text-gold">
                          {item.sectionNote}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* DOCUMENT MANAGEMENT */}
            {service.documentSections && (
              <>
                <h3 className="font-serif text-xl font-bold text-foreground mb-6 text-center">
                  We Do
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  {service.documentSections.map((section) => (
                    <div
                      key={section.title}
                      className="p-4 rounded-lg bg-muted/50 h-full flex flex-col"
                    >
                      <h4 className="font-semibold text-foreground mb-4">
                        {section.title}
                      </h4>

                      <ul className="space-y-3 flex-grow">
                        {section.points.map((point) => (
                          <li key={point} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                            {formatPoint(point)}
                          </li>
                        ))}
                      </ul>
                      {section.sectionNote && (
                        <div className="mt-4 pt-4 border-t border-border/50 text-sm font-medium text-gold">
                          {section.sectionNote}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* VIRTUAL EXPERIENCE */}
            {service.virtualSections && (
              <>
                <h3 className="font-serif text-xl font-bold text-foreground mb-6 text-center">
                  We Do
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  {service.virtualSections.map((section) => (
                    <div
                      key={section.title}
                      className="p-4 rounded-lg bg-muted/50 h-full flex flex-col"
                    >
                      <h4 className="font-semibold text-foreground mb-4">
                        {section.title}
                      </h4>
                      <ul className="space-y-3 flex-grow">
                        {section.points.map((point) => (
                          <li key={point} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                            {formatPoint(point)}
                          </li>
                        ))}
                      </ul>
                      {section.sectionNote && (
                        <div className="mt-4 pt-4 border-t border-border/50 text-sm font-medium text-gold">
                          {section.sectionNote}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* WEALTH MANAGEMENT */}
            {service.wealthSections && (
              <>
                <h3 className="font-serif text-xl font-bold text-foreground mb-6 text-center">
                  We Do
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  {service.wealthSections.map((section) => (
                    <div
                      key={section.title}
                      className="p-4 rounded-lg bg-muted/50 h-full flex flex-col"
                    >
                      <h4 className="font-semibold text-foreground mb-4">
                        {section.title}
                      </h4>

                      <ul className="space-y-3 flex-grow">
                        {section.points.map((point) => (
                          <li key={point} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                            {formatPoint(point)}
                          </li>
                        ))}
                      </ul>
                      {section.sectionNote && (
                        <div className="mt-4 pt-4 border-t border-border/50 text-sm font-medium text-gold">
                          {section.sectionNote}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Display Master Power Line if it exists at the bottom */}
            {service.powerLine && (
              <div className="mt-12 p-6 bg-gold/10 border border-gold/20 rounded-xl text-center">
                <p className="font-serif text-lg font-medium text-foreground">
                  {service.powerLine}
                </p>
              </div>
            )}
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
