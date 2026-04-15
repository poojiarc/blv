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
      { label: "Founders", path: "/founder", icon: User },
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
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-16 pt-6">
      <div
        className={`liquid-glass rounded-xl px-4 py-2 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "shadow-lg" : ""
        }`}
      >
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="BLV Global" className="h-11 w-auto rounded" />
          <div className="hidden sm:block">
            <span className="text-white font-semibold text-sm leading-tight block tracking-tight">BLV GLOBAL NRI</span>
            <span className="text-gray-300 text-xs font-medium leading-tight block">ASSET MANAGEMENT PVT. LTD.</span>
          </div>
        </Link>

        {/* Center: Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              {item.dropdown ? (
                <div
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1.5 text-sm transition-colors duration-200 ${
                      isActive(item.path) || isActive("/founder")
                        ? "text-white"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    <item.icon className="h-3.5 w-3.5" />
                    {item.label}
                    <ChevronDown className="h-3 w-3" />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-3 py-2 liquid-glass rounded-xl min-w-[180px]">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className={`flex items-center gap-2 px-4 py-2.5 text-sm transition-colors ${
                            isActive(sub.path)
                              ? "text-white"
                              : "text-gray-300 hover:text-white"
                          }`}
                        >
                          <sub.icon className="h-3.5 w-3.5" />
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.path}
                  className={`flex items-center gap-1.5 text-sm transition-colors duration-200 ${
                    isActive(item.path)
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  <item.icon className="h-3.5 w-3.5" />
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Right: CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden md:inline-block bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden mt-2 liquid-glass rounded-xl py-4">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-2 w-full px-6 py-3 text-gray-300 text-sm font-medium"
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
                        isActive(sub.path) ? "text-white" : "text-gray-400 hover:text-white"
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
                    isActive(item.path) ? "text-white" : "text-gray-300 hover:text-white"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <div className="px-6 pt-2">
            <Link
              to="/contact"
              className="block text-center bg-white text-black px-6 py-2.5 rounded-lg text-sm font-medium"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
