import { Link } from "react-router-dom";
import { Heart, Phone, Mail, MapPin, Home, Info, Wrench, MessageSquare,} from "lucide-react";
import logo from "@/assets/logo.jpg";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const WHATSAPP_URL = "https://wa.me/919966799225?text=Hello%20BLV%20Global%2C%20I%20would%20like%20to%20know%20more%20about%20your%20NRI%20asset%20management%20services.";
const INSTAGRAM_URL = "https://www.instagram.com/blvglobalnri/";

const Footer = () => {
  return (
    <footer className="bg-navy-dark text-primary-foreground/80">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="BLV Global" className="h-16 md:h-20 w-auto rounded" />
              <div>
                <span className="text-primary-foreground font-serif font-bold text-sm leading-tight block">BLV GLOBAL NRI</span>
                <span className="text-gold text-xs font-medium leading-tight block">ASSET MANAGEMENT   PVT. LTD.</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/60">
              Your Trusted Partner for End-to-End NRI Property & Asset Management in India.
            </p>
            <p className="text-sm mt-3 text-gold font-medium">
              Government & FEMA Registered
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#25D366]/20 flex items-center justify-center hover:bg-[#25D366]/40 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="h-6 w-6 text-[#25D366]" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-pink-500/20 flex items-center justify-center hover:bg-pink-500/40 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="h-6 w-6 text-pink-400" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-serif text-lg text-primary-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", path: "/", icon: Home },
                { label: "About Us", path: "/about", icon: Info },
                { label: "Services", path: "/services", icon: Wrench },
                { label: "Testimonials", path: "/testimonials", icon: MessageSquare },
                { label: "Contact", path: "/contact", icon: Phone },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-gold transition-colors"
                >
                  <link.icon className="h-4 w-4 text-gold" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-serif text-lg text-primary-foreground mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a href="tel:+919966799225" className="flex items-center gap-2 text-primary-foreground/60 hover:text-gold transition-colors">
                <Phone className="h-4 w-4 text-gold" /> +91 9966799225
              </a>
              <a href="mailto:blvglobalnri@gmail.com" className="flex items-center gap-2 text-primary-foreground/60 hover:text-gold transition-colors">
                <Mail className="h-4 w-4 text-gold" /> blvglobalnri@gmail.com
              </a>
              <div className="flex items-start gap-2 text-primary-foreground/60">
                <MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                <span>Secunderabad, Telangana, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center">
  
  {/* Made with section */}
  <div className="flex justify-center items-center gap-1 text-sm text-primary-foreground/50 mb-2">
    Made with <Heart className="inline h-4 w-4 text-red-500 mx-1" /> by
    <a
      href="https://staffarc.in"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 text-orange-600 hover:underline ml-1"
    >
      <img
        src="https://www.staffarc.in/images/Staffarc-logo.png"
        alt="StaffArc logo"
        className="h-5 w-5 object-contain"
      />
      StaffArc
    </a>
  </div>

  {/* Copyright */}
  <p className="text-xs text-primary-foreground/40">
    © {new Date().getFullYear()} BLV Global NRI Asset Management  PVT. LTD. All rights reserved.
  </p>

</div>
      </div>
    </footer>
  );
};

export default Footer;
