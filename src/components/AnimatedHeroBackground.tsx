import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

export default function AnimatedHeroBackground() {
  const prefersReducedMotion = useReducedMotion();

  // Memoize particle positions to prevent re-renders
  const particles = useMemo(() => {
    const count = prefersReducedMotion ? 0 : 8; // Reduced from 20 to 8
    return [...Array(count)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 4 + Math.random() * 3,
      delay: Math.random() * 2,
    }));
  }, [prefersReducedMotion]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Base gradient matching logo colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-accent/70" />
      
      {/* Animated gradient orbs - simplified animations */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            className="absolute top-0 left-0 w-[40vw] h-[40vw] rounded-full bg-accent/30 blur-[60px]"
            style={{ transform: "translateZ(0)" }}
            animate={{
              x: ["-10%", "5%", "-10%"],
              y: ["-10%", "0%", "-10%"],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-[35vw] h-[35vw] rounded-full bg-primary-light/40 blur-[50px]"
            style={{ transform: "translateZ(0)" }}
            animate={{
              x: ["10%", "-5%", "10%"],
              y: ["10%", "0%", "10%"],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-[30vw] h-[30vw] rounded-full bg-primary/30 blur-[40px]"
            style={{ transform: "translateZ(0)" }}
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
        </>
      )}

      {/* Static fallback for reduced motion */}
      {prefersReducedMotion && (
        <>
          <div className="absolute top-0 left-0 w-[40vw] h-[40vw] rounded-full bg-accent/30 blur-[60px]" />
          <div className="absolute bottom-0 right-0 w-[35vw] h-[35vw] rounded-full bg-primary-light/40 blur-[50px]" />
          <div className="absolute top-1/2 left-1/2 w-[30vw] h-[30vw] rounded-full bg-primary/30 blur-[40px] -translate-x-1/2 -translate-y-1/2" />
        </>
      )}

      {/* Floating particles - reduced count and simplified animation */}
      <div className="absolute inset-0 hidden md:block">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
              transform: "translateZ(0)",
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(white 1px, transparent 1px),
                            linear-gradient(90deg, white 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_hsl(210_75%_12%/0.4)_100%)]" />
    </div>
  );
}
