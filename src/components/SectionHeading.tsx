import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  highlight?: string;
  centered?: boolean;
  children?: ReactNode;
  light?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  highlight,
  centered = true,
  children,
  light = false,
}: SectionHeadingProps) {
  // Split title to highlight specific word
  const renderTitle = () => {
    if (!highlight) return title;
    const parts = title.split(highlight);
    return (
      <>
        {parts[0]}
        <span className={light ? "text-accent-gold" : "text-primary"}>{highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-12 md:mb-16`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className={`inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium rounded-full border ${
            light 
              ? "bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20" 
              : "bg-primary/10 text-primary border-primary/20"
          }`}>
            {badge}
          </span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${
          light ? "text-primary-foreground" : "text-foreground"
        }`}
      >
        {renderTitle()}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-lg leading-relaxed ${
            light ? "text-primary-foreground/80" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </motion.p>
      )}

      {children}
    </div>
  );
}
