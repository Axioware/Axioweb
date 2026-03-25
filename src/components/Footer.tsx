import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Instagram } from "lucide-react";
import logoWhite from "@/assets/axioware-logo-white.webp";

const footerLinks = {
  services: [
    { label: "Voice Agents", href: "/services/voice-agents" },
    { label: "AI Chatbots", href: "/services/chatbots" },
    { label: "Machine Learning", href: "/services/machine-learning" },
    { label: "Web Development", href: "/services/web-development" },
    { label: "UI/UX Design", href: "/services/ui-ux-design" },
    { label: "SEO", href: "/services/seo" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "/blog" },
  ],
  social: [
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/axioware",
      label: "LinkedIn",
      color: "hover:bg-[#0A66C2] hover:text-white",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/axioware",
      label: "Twitter",
      color: "hover:bg-[#1DA1F2] hover:text-white",
    },
    { icon: Github, href: "https://github.com/axioware", label: "GitHub", color: "hover:bg-[#333] hover:text-white" },
    {
      icon: Instagram,
      href: "https://instagram.com/axioware",
      label: "Instagram",
      color: "hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] hover:text-white",
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <img
                src={logoWhite}
                alt="Axioware"
                className="h-10 w-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                width={40}
                height={40}
                loading="lazy"
              />
              <span className="font-display text-2xl font-bold text-white transition-colors duration-300 group-hover:text-primary-light">
                Axio<span className="text-primary-light">ware</span>
              </span>
            </Link>
            <p className="text-background/70 mb-6 leading-relaxed">
              Empowering businesses with intelligent automation. From Voice Agents to AI Chatbots, we build the future
              of customer engagement.
            </p>
            <div className="flex items-center gap-4">
              {footerLinks.social.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center text-background/70 transition-all duration-300 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-display text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary-light transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary-light transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary-light transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary-light transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-display text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-background/70">
                <Mail className="w-5 h-5 text-primary-light mt-0.5 flex-shrink-0" />
                <a href="mailto:business@axioware.tech" className="hover:text-primary-light transition-colors">
                  business@axioware.tech
                </a>
              </li>
              <li className="flex items-start gap-3 text-background/70">
                <Phone className="w-5 h-5 text-primary-light mt-0.5 flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-primary-light transition-colors">
                  +92 325 8988683
                </a>
              </li>
              <li className="flex items-start gap-3 text-background/70">
                <MapPin className="w-5 h-5 text-primary-light mt-0.5 flex-shrink-0" />
                <span>Karachi, Pakistan</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/60 text-sm">© {new Date().getFullYear()} Axioware. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-background/60 text-sm hover:text-primary-light transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-background/60 text-sm hover:text-primary-light transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
