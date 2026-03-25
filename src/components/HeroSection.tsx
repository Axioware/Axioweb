import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Mic, MessageSquare, Sparkles, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedHeroBackground from "./AnimatedHeroBackground";
export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100svh-4rem)] md:min-h-[calc(100svh-5rem)] flex items-center py-12 md:py-16 overflow-hidden">
      {/* Animated Background */}
      <AnimatedHeroBackground />

      {/* Animated Grid Pattern - simplified for performance */}
      <div className="absolute inset-0 opacity-10 z-[1]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary-foreground) / 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--primary-foreground) / 0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Animated Elements - reduced for mobile performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2] hidden md:block">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/20 blur-[80px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-primary-light/20 blur-[70px]"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center py-0">
          {/* Badge */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium backdrop-blur-sm border border-white/20">
              <Sparkles className="w-4 h-4" />
              Pioneering AI-Powered Solutions
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
          >
            Transform Your Business with{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-accent drop-shadow-[0_1px_8px_hsl(175,60%,45%,0.3)]">
                Intelligent Automation
              </span>
              <span className="absolute inset-0 bg-accent/15 blur-lg -z-10 rounded-lg" />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.6,
            }}
            className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            From Voice Agents to AI Chatbots, we build cutting-edge solutions that revolutionize customer engagement and
            drive business growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.8,
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              size="xl"
              className="bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/30 hover:shadow-accent/50 transition-all duration-300 font-semibold"
            >
              <Link to="/contact" className="group">
                Get Started Today
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="xl"
              className="bg-white/15 text-white border-2 border-white/40 hover:bg-white/25 hover:border-white/60 backdrop-blur-sm font-semibold"
            >
              <Link to="/about" className="group flex items-center gap-2">
                <Play className="w-4 h-4" />
                Watch Demo
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 1,
            }}
            className="flex flex-wrap items-center justify-center gap-4 mt-8 mb-4"
          >
            {[
              {
                icon: Mic,
                label: "Voice Agents",
                color: "text-blue-400",
              },
              {
                icon: MessageSquare,
                label: "Automation",
                color: "text-purple-400",
              },
              {
                icon: Sparkles,
                label: "ML Solutions",
                color: "text-emerald-400",
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: 1.2 + index * 0.1,
                }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm"
              >
                <item.icon className={`w-4 h-4 ${item.color}`} />
                <span className="text-sm font-medium text-white">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
