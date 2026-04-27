// import { useState } from "react";
// import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

// const Contact = () => {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const mailtoLink = `mailto:blvglobalnri@gmail.com?subject=Inquiry from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.name} (${form.email})`;
//     window.location.href = mailtoLink;
//   };

//   return (
//     <div className="min-h-screen pt-20">
//       <section className="bg-navy section-padding text-center">
//         <span className="text-gold text-sm font-semibold tracking-wider uppercase">Reach Out</span>
//         <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mt-3 mb-6">
//           Contact Us
//         </h1>
//         <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
//           Let's discuss how we can manage and protect your Indian assets professionally.
//         </p>
//       </section>

//       <section className="section-padding bg-background">
//         <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
//           {/* Contact Details */}
//           <div>
//             <h2 className="font-serif text-2xl font-bold text-foreground mb-8">Get in Touch</h2>
//             <div className="space-y-4 mb-10">
//               {[
//                 { icon: Phone, label: "Phone", value: "+91 9966799225", href: "tel:+919966799225" },
//                 { icon: Mail, label: "Email", value: "blvglobalnri@gmail.com", href: "mailto:blvglobalnri@gmail.com" },
//                 { icon: Clock, label: "Business Hours", value: "10:00 AM – 8:00 PM (All Days)", href: "#" },
//               ].map((item) => (
//                 <a
//                   key={item.label}
//                   href={item.href}
//                   className="glass-card p-5 flex items-center gap-4 hover:scale-[1.01] transition-transform block"
//                 >
//                   <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
//                     <item.icon className="h-5 w-5 text-gold" />
//                   </div>
//                   <div>
//                     <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
//                     <p className="text-foreground font-medium">{item.value}</p>
//                   </div>
//                 </a>
//               ))}
//             </div>

//             {/* Address Card */}
//             <div className="glass-card p-6">
//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
//                   <MapPin className="h-5 w-5 text-gold" />
//                 </div>
//                 <div>
//                   <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Office Address</p>
//                   <p className="text-foreground font-medium text-sm leading-relaxed">
//                     PVR VAGESH DATT<br />
//                     Plot No-9-4-37, Flat No-202<br />
//                     Chamundeshwari Residency,<br />
//                     Lions Town Colony, Hasmathpet,<br />
//                     Old Bowenpally, Secunderabad,<br />
//                     Telangana – 500009
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Map */}
//             <div className="mt-6 rounded-xl overflow-hidden border border-border">
//               <iframe
//                 src="https://maps.google.com/maps?q=17.476759,78.486534&z=15&output=embed"
//                 width="100%"
//                 height="250"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="BLV Global Location"
//               />
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div>
//             <h2 className="font-serif text-2xl font-bold text-foreground mb-8">Send a Message</h2>
//             <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
//               <div>
//                 <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
//                 <input
//                   type="text"
//                   required
//                   value={form.name}
//                   onChange={(e) => setForm({ ...form, name: e.target.value })}
//                   className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-gold/30 focus:border-gold/50 outline-none transition-all"
//                   placeholder="Your full name"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
//                 <input
//                   type="email"
//                   required
//                   value={form.email}
//                   onChange={(e) => setForm({ ...form, email: e.target.value })}
//                   className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-gold/30 focus:border-gold/50 outline-none transition-all"
//                   placeholder="your@email.com"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-foreground mb-2">Message</label>
//                 <textarea
//                   required
//                   rows={5}
//                   value={form.message}
//                   onChange={(e) => setForm({ ...form, message: e.target.value })}
//                   className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-gold/30 focus:border-gold/50 outline-none transition-all resize-none"
//                   placeholder="Tell us about your asset management needs..."
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold gold-gradient text-accent-foreground hover:opacity-90 transition-all gold-glow"
//               >
//                 <Send className="h-4 w-4" /> Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;
// import { useState } from "react";
// import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

// const Contact = () => {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     // WhatsApp number with country code (no + or spaces)
//     const whatsappNumber = "919966799225";
    
//     // Format the message
//     const whatsappMessage = `*New Inquiry from Website:*\n\n*Name:* ${form.name}\n*Email:* ${form.email}\n*Message:* ${form.message}`;
    
//     // Encode the message for the URL
//     const encodedMessage = encodeURIComponent(whatsappMessage);
    
//     // Create the WhatsApp link
//     const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
//     // Open WhatsApp in a new tab
//     window.open(whatsappLink, "_blank");
//   };

//   return (
//     <div className="min-h-screen pt-20">
//       <section className="bg-navy section-padding text-center">
//         <span className="text-gold text-sm font-semibold tracking-wider uppercase">Reach Out</span>
//         <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mt-3 mb-6">
//           Contact Us
//         </h1>
//         <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
//           Let's discuss how we can manage and protect your Indian assets professionally.
//         </p>
//       </section>

//       <section className="section-padding bg-background">
//         <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
//           {/* Contact Details */}
//           <div>
//             <h2 className="font-serif text-2xl font-bold text-foreground mb-8">Get in Touch</h2>
//             <div className="space-y-4 mb-10">
//               {[
//                 { icon: Phone, label: "Phone", value: "+91 9966799225", href: "tel:+919966799225" },
//                 { icon: Mail, label: "Email", value: "blvglobalnri@gmail.com", href: "mailto:blvglobalnri@gmail.com" },
//                 { icon: Clock, label: "Business Hours", value: "10:00 AM – 8:00 PM (All Days)", href: "#" },
//               ].map((item) => (
//                 <a
//                   key={item.label}
//                   href={item.href}
//                   className="glass-card p-5 flex items-center gap-4 hover:scale-[1.01] transition-transform block"
//                 >
//                   <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
//                     <item.icon className="h-5 w-5 text-gold" />
//                   </div>
//                   <div>
//                     <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
//                     <p className="text-foreground font-medium">{item.value}</p>
//                   </div>
//                 </a>
//               ))}
//             </div>

//             {/* Address Card */}
//             <div className="glass-card p-6">
//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
//                   <MapPin className="h-5 w-5 text-gold" />
//                 </div>
//                 <div>
//                   <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Office Address</p>
//                   <p className="text-foreground font-medium text-sm leading-relaxed">
//                     PVR VAGESH DATT<br />
//                     Plot No-9-4-37, Flat No-202<br />
//                     Chamundeshwari Residency,<br />
//                     Lions Town Colony, Hasmathpet,<br />
//                     Old Bowenpally, Secunderabad,<br />
//                     Telangana – 500009
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Map */}
//             <div className="mt-6 rounded-xl overflow-hidden border border-border">
//               <iframe
//                 src="https://maps.google.com/maps?q=17.476759,78.486534&z=15&output=embed"
//                 width="100%"
//                 height="250"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="BLV Global Location"
//               />
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div>
//             <h2 className="font-serif text-2xl font-bold text-foreground mb-8">Send a Message</h2>
//             <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
//               <div>
//                 <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
//                 <input
//                   type="text"
//                   required
//                   value={form.name}
//                   onChange={(e) => setForm({ ...form, name: e.target.value })}
//                   className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-gold/30 focus:border-gold/50 outline-none transition-all"
//                   placeholder="Your full name"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-foreground mb-2">Contact</label>
//                 <input
//                   type="email"
//                   required
//                   value={form.email}
//                   onChange={(e) => setForm({ ...form, email: e.target.value })}
//                   className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-gold/30 focus:border-gold/50 outline-none transition-all"
//                   placeholder="your@email.com"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-foreground mb-2">Message</label>
//                 <textarea
//                   required
//                   rows={5}
//                   value={form.message}
//                   onChange={(e) => setForm({ ...form, message: e.target.value })}
//                   className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-gold/30 focus:border-gold/50 outline-none transition-all resize-none"
//                   placeholder="Tell us about your asset management needs..."
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold gold-gradient text-accent-foreground hover:opacity-90 transition-all gold-glow"
//               >
//                 <Send className="h-4 w-4" /> Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  // Updated state to use 'contact' instead of 'email'
  const [form, setForm] = useState({ name: "", contact: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // WhatsApp number with country code (no + or spaces)
    const whatsappNumber = "919966799225";
    
    // Format the message with the new contact field
    const whatsappMessage = `*New Inquiry from Website:*\n\n*Name:* ${form.name}\n*Contact Number:* ${form.contact}\n*Message:* ${form.message}`;
    
    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Create the WhatsApp link
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-navy section-padding text-center">
        <span className="text-gold text-sm font-semibold tracking-wider uppercase">Reach Out</span>
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mt-3 mb-6">
          Contact Us
        </h1>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
          Let's discuss how we can manage and protect your Indian assets professionally.
        </p>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-8">Get in Touch</h2>
            <div className="space-y-4 mb-10">
              {[
                { icon: Phone, label: "Phone", value: "+91 9966799225", href: "tel:+919966799225" },
                { icon: Mail, label: "Email", value: "blvglobalnri@gmail.com", href: "mailto:blvglobalnri@gmail.com" },
                { icon: Clock, label: "Business Hours", value: "10:00 AM – 8:00 PM (All Days)", href: "#" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="glass-card p-5 flex items-center gap-4 hover:scale-[1.01] transition-transform block"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                    <p className="text-foreground font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Address Card */}
            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Office Address</p>
                  <p className="text-foreground font-medium text-sm leading-relaxed">
                    PVR VAGESH DATT<br />
                    Plot No-9-4-37, Flat No-202<br />
                    Chamundeshwari Residency,<br />
                    Lions Town Colony, Hasmathpet,<br />
                    Old Bowenpally, Secunderabad,<br />
                    Telangana – 500009
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-6 rounded-xl overflow-hidden border border-border">
              <iframe
                src="https://maps.google.com/maps?q=17.476759,78.486534&z=15&output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="BLV Global Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-8">Send a Message</h2>
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-gold/30 focus:border-gold/50 outline-none transition-all"
                  placeholder="Your full name"
                />
              </div>
              
              {/* Updated Contact Field */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Contact Number</label>
                <input
                  type="tel"
                  required
                  value={form.contact}
                  onChange={(e) => setForm({ ...form, contact: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-gold/30 focus:border-gold/50 outline-none transition-all"
                  placeholder="+91 99999 99999"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-gold/30 focus:border-gold/50 outline-none transition-all resize-none"
                  placeholder="Tell us about your asset management needs..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold gold-gradient text-accent-foreground hover:opacity-90 transition-all gold-glow"
              >
                <Send className="h-4 w-4" /> Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

// Fixed the export statement
export default Contact;
