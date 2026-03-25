import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Globe, Palette, Search, Share2 } from "lucide-react";

// Import service images (WebP format)
import machineLearningImg from "@/assets/services/machine-learning.webp";
import webDevelopmentImg from "@/assets/services/web-development.webp";
import uiUxDesignImg from "@/assets/services/ui-ux-design.webp";
import seoImg from "@/assets/services/seo.webp";
import socialMediaImg from "@/assets/services/social-media.webp";

const services = [
  {
    id: "ml",
    title: "Machine Learning",
    description:
      "Custom ML models and predictive analytics that unlock insights from your data and automate decision-making.",
    icon: Brain,
    href: "/services/machine-learning",
    features: ["Predictive Analytics", "Neural Networks", "Computer Vision"],
    image: machineLearningImg,
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
  },
  {
    id: "web",
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications built with cutting-edge technologies to convert visitors.",
    icon: Globe,
    href: "/services/web-development",
    features: ["React & Next.js", "E-Commerce", "API Development"],
    image: webDevelopmentImg,
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10",
  },
  {
    id: "design",
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces that delight users with visually stunning and functional experiences.",
    icon: Palette,
    href: "/services/ui-ux-design",
    features: ["User Research", "Prototyping", "Design Systems"],
    image: uiUxDesignImg,
    iconColor: "text-rose-400",
    iconBg: "bg-rose-500/10",
  },
  {
    id: "seo",
    title: "SEO",
    description: "Data-driven SEO strategies that improve visibility and drive organic traffic to your business.",
    icon: Search,
    href: "/services/seo",
    features: ["Technical SEO", "Content Strategy", "Local SEO"],
    image: seoImg,
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/10",
  },
  {
    id: "social",
    title: "Social Media",
    description: "Strategic social media campaigns that build brand awareness and turn followers into customers.",
    icon: Share2,
    href: "/services/social-media",
    features: ["Content Creation", "Paid Advertising", "Analytics"],
    image: socialMediaImg,
    iconColor: "text-indigo-400",
    iconBg: "bg-indigo-500/10",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function ServiceSelector() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {services.map((service) => {
        const Icon = service.icon;

        return (
          <motion.div
            key={service.id}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative bg-card rounded-2xl border border-border/50 overflow-hidden hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 h-full flex flex-col"
          >
            {/* Image */}
            <div className="relative h-40 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
              {/* Icon overlay */}
              {/*<div className={`absolute bottom-3 left-4 w-10 h-10 rounded-lg ${service.iconBg} backdrop-blur-sm flex items-center justify-center border border-border/50`}>
                <Icon className={`w-5 h-5 ${service.iconColor}`} />
              </div>*/}
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              {/* Title */}
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{service.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">{service.description}</p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-2.5 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="group/btn p-0 h-auto text-accent hover:text-accent hover:bg-transparent"
              >
                <Link to={service.href} className="flex items-center gap-2">
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Subtle hover accent line */}
            <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-accent/0 group-hover:bg-accent/30 transition-colors rounded-full" />
          </motion.div>
        );
      })}
    </motion.div>
  );
}
