import { motion, useReducedMotion } from "framer-motion";

export default function AnimatedHeroBackground() {
  const prefersReducedMotion = useReducedMotion();

  // Stable positions keep prerendered markup consistent during hydration.
  const particles = prefersReducedMotion ? [] : [
    { id: 0, left: "13%", top: "18%", duration: 5.2, delay: 0.3 },
    { id: 1, left: "27%", top: "72%", duration: 4.4, delay: 1.1 },
    { id: 2, left: "39%", top: "31%", duration: 6.1, delay: 0.7 },
    { id: 3, left: "52%", top: "84%", duration: 4.8, delay: 1.6 },
    { id: 4, left: "66%", top: "22%", duration: 5.7, delay: 0.9 },
    { id: 5, left: "74%", top: "61%", duration: 4.3, delay: 0.2 },
    { id: 6, left: "86%", top: "39%", duration: 6.4, delay: 1.3 },
    { id: 7, left: "93%", top: "77%", duration: 5.0, delay: 0.5 },
  ];

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
