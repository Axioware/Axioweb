import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedHeroBackground from "./AnimatedHeroBackground";

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100svh-4rem)] flex items-center py-16 md:py-24 overflow-hidden">
      <AnimatedHeroBackground />

      <div className="container-custom relative z-10 w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-3 mb-8 md:mb-10"
        >
          <div className="w-8 h-px bg-white/50" />
          <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-white/60 font-sans">
            Intelligence Engineered for Growth
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="font-display font-bold text-white leading-[0.92] tracking-tight mb-12 md:mb-16
                     text-[clamp(3.2rem,9vw,7.5rem)]"
        >
          Transform your
          <br />
          business with
          <br />
          <em className="text-accent" style={{ fontStyle: "italic" }}>
            intelligent AI
          </em>
        </motion.h1>

        {/* Bottom row: description left — buttons + tagline right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-16"
        >
          {/* Description */}
          <p className="text-base md:text-lg text-white/70 max-w-sm leading-relaxed font-sans">
            Axioware builds cutting-edge software solutions and AI-powered products
            that help businesses engage clients, automate workflows, and scale
            intelligently.
          </p>

          {/* CTA + tagline */}
          <div className="flex flex-col items-start md:items-end gap-4 flex-shrink-0">
            <div className="flex items-center gap-3 flex-wrap">
              <Button
                asChild
                className="rounded-full bg-accent hover:bg-accent/90 text-white px-6 py-2.5 text-sm font-semibold shadow-lg shadow-accent/30 transition-all duration-300"
              >
                <Link to="/services" className="group flex items-center gap-2">
                  Explore Services
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="rounded-full text-white hover:bg-white/10 border border-white/20 px-6 py-2.5 text-sm font-semibold"
              >
                <Link to="/restaurant-agent" className="flex items-center gap-2">
                  <Mic className="w-4 h-4" />
                  Meet Our AI
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
