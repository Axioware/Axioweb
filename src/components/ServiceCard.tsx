import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  featured?: boolean;
  index?: number;
  image?: string;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  href,
  featured = false,
  index = 0,
  image,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`h-full ${featured ? "pt-4" : ""}`}
    >
      <Link
        to={href}
        className={`flex flex-col h-full ${featured ? "service-card-featured" : "service-card"} group overflow-visible`}
      >
        {/* Featured Badge */}
        {featured && (
          <div className="absolute -top-3 left-6 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent text-white text-xs font-medium rounded-full shadow-glow">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              Featured
            </span>
          </div>
        )}

        {/* Image */}
        {image && (
          <div className="relative h-40 -mx-6 -mt-6 mb-5 overflow-hidden rounded-t-2xl">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Icon overlay */}
            <motion.div
              className={`absolute bottom-4 left-6 w-12 h-12 rounded-xl flex items-center justify-center ${
                featured
                  ? "bg-accent text-white shadow-glow"
                  : "bg-card text-primary border border-border/50"
              }`}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Icon className="w-6 h-6" />
            </motion.div>
          </div>
        )}

        {/* Icon (only if no image) */}
        {!image && (
          <motion.div
            className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 flex-shrink-0 ${
              featured
                ? "bg-accent text-white group-hover:shadow-glow"
                : "bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground"
            }`}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <Icon className="w-7 h-7" />
          </motion.div>
        )}

        {/* Content */}
        <div className="flex-grow">
          <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-5 text-sm md:text-base">
            {description}
          </p>
        </div>

        {/* Link - always at bottom */}
        <div className="flex items-center gap-2 text-accent font-medium mt-auto">
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>

        {/* Hover Gradient */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </Link>
    </motion.div>
  );
}
