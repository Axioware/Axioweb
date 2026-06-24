import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import logoColored from "@/assets/axioware-logo.webp";
import logoWhite from "@/assets/axioware-logo-white.webp";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; featured?: boolean }[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Voice Agents", href: "/services/voice-agents", featured: true },
      { label: "AI Chatbots", href: "/services/chatbots", featured: true },
      { label: "Restaurant Agent", href: "/restaurant-agent", featured: true },
      { label: "Machine Learning", href: "/services/machine-learning" },
      { label: "Web Development", href: "/services/web-development" },
      { label: "App Development", href: "/services/app-development" },
      { label: "UI/UX Design", href: "/services/ui-ux-design" },
      { label: "SEO", href: "/services/seo" },
      { label: "Social Media Marketing", href: "/services/social-media" },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`sticky top-0 z-50 w-full transition-all duration-700 ease-in-out ${
        scrolled
          ? "bg-card/95 backdrop-blur-xl shadow-medium border-b border-border/50"
          : "bg-primary backdrop-blur-md"
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.img
              src={scrolled ? logoColored : logoWhite}
              alt="Axioware"
              className="h-10 w-10 md:h-12 md:w-12 transition-all duration-500 ease-in-out group-hover:scale-110"
              whileHover={{ rotate: 5 }}
              width={48}
              height={48}
              loading="eager"
            />
            <span className={`font-display text-xl md:text-2xl font-bold transition-colors duration-500 ${
              scrolled ? "text-primary" : "text-white"
            }`}>
              Axio<span className={scrolled ? "text-accent" : "text-primary-light"}>ware</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`relative flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${
                    location.pathname === item.href
                      ? "text-accent bg-accent/10"
                      : scrolled
                        ? "text-foreground/80 hover:text-accent hover:bg-accent/5"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span className="relative">
                    {item.label}
                    <span className={`absolute -bottom-1 left-0 w-full h-0.5 rounded-full transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100 ${
                      scrolled ? "bg-accent" : "bg-white"
                    }`} />
                  </span>
                  {item.children && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-72 bg-card rounded-xl shadow-medium border border-border/50 p-3 backdrop-blur-xl space-y-1.5"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 group ${
                            child.featured
                              ? "bg-accent/5 hover:bg-accent/10 border border-accent/20"
                              : "hover:bg-secondary"
                          }`}
                        >
                          {child.featured && (
                            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                          )}
                          <span
                            className={`text-sm font-medium ${
                              child.featured ? "text-accent" : "text-foreground/80"
                            } group-hover:text-accent transition-colors`}
                          >
                            {child.label}
                          </span>
                          {child.featured && (
                            <span className="ml-auto text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full">
                              Featured
                            </span>
                          )}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="relative overflow-hidden px-6 py-2.5 bg-accent text-white font-medium rounded-lg transition-all duration-300 hover:shadow-glow group"
            >
              <span className="relative z-10">Get Started</span>
              <motion.div
                className="absolute inset-0 bg-primary"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 transition-colors ${
              scrolled ? "text-foreground hover:text-accent" : "text-white hover:text-accent"
            }`}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30, opacity: { duration: 0.2 } }}
              className="lg:hidden overflow-hidden"
            >
              <div className={`py-4 space-y-2 border-t ${scrolled ? "border-border/50" : "border-white/20"}`}>
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.children ? (
                      <div className="space-y-1">
                        <button
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === item.label ? null : item.label
                            )
                          }
                          className={`flex items-center justify-between w-full px-4 py-3 font-medium rounded-lg transition-colors ${
                            scrolled 
                              ? "text-foreground hover:bg-secondary" 
                              : "text-white hover:bg-white/10"
                          }`}
                        >
                          {item.label}
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-300 ${
                              activeDropdown === item.label ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.label && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: "auto" }}
                              exit={{ height: 0 }}
                              className="overflow-hidden pl-4"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.label}
                                  to={child.href}
                                  className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-colors ${
                                    child.featured
                                      ? "text-accent font-medium"
                                      : scrolled 
                                        ? "text-foreground/70 hover:text-foreground" 
                                        : "text-white/80 hover:text-white"
                                  }`}
                                >
                                  {child.featured && (
                                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                                  )}
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className={`block px-4 py-3 font-medium rounded-lg transition-colors ${
                          scrolled 
                            ? "text-foreground hover:bg-secondary" 
                            : "text-white hover:bg-white/10"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-4"
                >
                  <Link
                    to="/contact"
                    className="block w-full text-center px-6 py-3 bg-accent text-white font-medium rounded-lg"
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
