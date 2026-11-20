import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Facebook, Instagram } from "lucide-react";
import logoWhite from "@/assets/axioware-logo-white.webp";

const footerGroups = [
  {
    title: "Services",
    links: [
      { label: "AI Receptionist", href: "/ai-receptionist-for-chiropractors" },
      { label: "Features", href: "/features" },
      { label: "How It Works", href: "/how-it-works" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Hear a Sample Call", href: "/#sample-calls" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Book a Demo", href: "/book-demo" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Data Security", href: "/privacy" },
    ],
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/axioware",
    label: "LinkedIn",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/share/19BLpgdXT3/?mibextid=wwXIfr",
    label: "Facebook",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/axiowaretech",
    label: "Instagram",
  },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="mb-5 flex items-center gap-2">
              <img src={logoWhite} alt="Axioware" className="h-10 w-10" width={40} height={40} loading="lazy" />
              <span className="font-display text-2xl font-bold text-white">
                Axio<span className="text-primary-light">ware</span>
              </span>
            </Link>
            <p className="mb-5 leading-relaxed text-background/70">
              Practical call handling and follow-up systems for chiropractic clinics and service businesses.
            </p>
            <p className="mb-5 text-sm text-background/60">Powered by Axioware</p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-background/10 text-background/70 transition-colors hover:bg-background/20 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {footerGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
            >
              <h2 className="mb-5 font-display text-lg font-semibold">{group.title}</h2>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-background/70 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-background/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-background/60">© {new Date().getFullYear()} Axioware. All rights reserved.</p>
          <div className="flex items-center gap-3 text-sm text-background/70">
            <Phone className="h-4 w-4 text-primary-light" aria-hidden="true" />
            <a href="tel:+923258988683" className="hover:text-white">+92 325 8988683</a>
            <Mail className="ml-3 h-4 w-4 text-primary-light" aria-hidden="true" />
            <a href="mailto:business@axioware.tech" className="hover:text-white">business@axioware.tech</a>
          </div>
        </div>
        <div className="mt-6 flex items-center gap-6 border-t border-background/10 pt-5 text-sm text-background/60">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event("axioware:open-cookie-preferences"))}
            className="hover:text-white"
          >
            Cookie preferences
          </button>
        </div>
      </div>
    </footer>
  );
}
