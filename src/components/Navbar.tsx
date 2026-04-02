import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Info, User, Wrench, MessageSquare, Phone, Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.jpg";

const navItems = [
  { label: "Home", path: "/", icon: Home },
  {
    label: "About",
    path: "/about",
    icon: Info,
    dropdown: [
      { label: "About Us", path: "/about", icon: Info },
      { label: "Founder", path: "/founder", icon: User },
    ],
  },
  { label: "Services", path: "/services", icon: Wrench },
  { label: "Testimonials", path: "/testimonials", icon: MessageSquare },
  { label: "Contact", path: "/contact", icon: Phone },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-dark/95 backdrop-blur-lg shadow-lg border-b border-gold/10"
          : "bg-navy-dark/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="BLV Global" className="h-14 w-auto rounded" />
            <div className="hidden sm:block">
              <span className="text-primary-foreground font-serif font-bold text-sm leading-tight block">BLV Global NRI</span>
              <span className="text-gold text-xs font-medium leading-tight block">Asset Management</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive(item.path) || isActive("/founder")
                          ? "text-gold"
                          : "text-primary-foreground/80 hover:text-gold"
                      }`}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.label}
                      <ChevronDown className="h-3 w-3" />
                    </button>
                    {dropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 py-2 bg-navy-dark/95 backdrop-blur-lg rounded-xl border border-gold/10 shadow-xl min-w-[180px]">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            className={`flex items-center gap-2 px-4 py-2.5 text-sm transition-colors ${
                              isActive(sub.path)
                                ? "text-gold"
                                : "text-primary-foreground/70 hover:text-gold hover:bg-gold/5"
                            }`}
                          >
                            <sub.icon className="h-4 w-4" />
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive(item.path)
                        ? "text-gold"
                        : "text-primary-foreground/80 hover:text-gold"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-primary-foreground p-2"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy-dark/98 backdrop-blur-lg border-t border-gold/10 pb-6">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-2 w-full px-6 py-3 text-primary-foreground/80 text-sm font-medium"
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                    <ChevronDown className={`h-3 w-3 ml-auto transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {dropdownOpen && item.dropdown.map((sub) => (
                    <Link
                      key={sub.path}
                      to={sub.path}
                      className={`flex items-center gap-2 pl-12 pr-6 py-2.5 text-sm ${
                        isActive(sub.path) ? "text-gold" : "text-primary-foreground/60 hover:text-gold"
                      }`}
                    >
                      <sub.icon className="h-4 w-4" />
                      {sub.label}
                    </Link>
                  ))}
                </>
              ) : (
                <Link
                  to={item.path}
                  className={`flex items-center gap-2 px-6 py-3 text-sm font-medium ${
                    isActive(item.path) ? "text-gold" : "text-primary-foreground/80 hover:text-gold"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
