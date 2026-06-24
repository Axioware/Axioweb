import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Globe, Palette, Search, Share2, Smartphone, LucideIcon } from "lucide-react";

// Import service images (WebP format)
import machineLearningImg from "@/assets/services/machine-learning.webp";
import webDevelopmentImg from "@/assets/services/web-development.webp";
import uiUxDesignImg from "@/assets/services/ui-ux-design.webp";
import seoImg from "@/assets/services/seo.webp";
import socialMediaImg from "@/assets/services/social-media.webp";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  gradient: string;
  accentColor: string;
  image: string;
}

const services: Service[] = [
  {
    id: "ml",
    title: "Machine Learning",
    description: "Custom ML models and predictive analytics solutions.",
    icon: Brain,
    href: "/services/machine-learning",
    gradient: "from-purple-500/10 to-blue-500/10",
    accentColor: "text-purple-400",
    image: machineLearningImg,
  },
  {
    id: "web",
    title: "Web Development",
    description: "Modern, responsive websites and web applications.",
    icon: Globe,
    href: "/services/web-development",
    gradient: "from-cyan-500/10 to-teal-500/10",
    accentColor: "text-cyan-400",
    image: webDevelopmentImg,
  },
  {
    id: "app",
    title: "App Development",
    description: "Custom mobile and cross-platform applications.",
    icon: Smartphone,
    href: "/services/app-development",
    gradient: "from-violet-500/10 to-fuchsia-500/10",
    accentColor: "text-violet-400",
    image: webDevelopmentImg,
  },
  {
    id: "design",
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed to delight.",
    icon: Palette,
    href: "/services/ui-ux-design",
    gradient: "from-pink-500/10 to-rose-500/10",
    accentColor: "text-pink-400",
    image: uiUxDesignImg,
  },
  {
    id: "seo",
    title: "SEO",
    description: "Data-driven strategies that improve visibility.",
    icon: Search,
    href: "/services/seo",
    gradient: "from-emerald-500/10 to-green-500/10",
    accentColor: "text-emerald-400",
    image: seoImg,
  },
  {
    id: "social",
    title: "Social Media",
    description: "Strategic campaigns that build brand awareness.",
    icon: Share2,
    href: "/services/social-media",
    gradient: "from-amber-500/10 to-yellow-500/10",
    accentColor: "text-amber-400",
    image: socialMediaImg,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function MobileServiceGrid() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid gap-4"
    >
      {services.map((service) => {
        const Icon = service.icon;
        return (
          <motion.div
            key={service.id}
            variants={itemVariants}
            className={`relative rounded-xl border border-border/50 bg-card hover:border-accent/30 transition-all group overflow-hidden`}
          >
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
            
            <div className="relative flex items-start gap-4 p-4">
              {/* Image thumbnail */}
              <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className={`absolute bottom-1 right-1 p-1.5 rounded-md bg-background/80 backdrop-blur-sm`}>
                  <Icon className={`w-4 h-4 ${service.accentColor}`} />
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-semibold text-foreground mb-1">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {service.description}
                </p>
                <Button asChild variant="ghost" size="sm" className="p-0 h-auto text-accent hover:text-accent/80 hover:bg-transparent">
                  <Link to={service.href} className="group/link flex items-center gap-1">
                    Learn more
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
