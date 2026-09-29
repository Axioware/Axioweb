import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading";
import ParallaxImage from "./ParallaxImage";
import { Button } from "./ui/button";
import { Mic, MessageSquare, Brain, Globe, Smartphone, ArrowRight, CheckCircle } from "lucide-react";
import { LucideIcon } from "lucide-react";

// Import custom AI illustrations (WebP format)
import voiceAgentsImg from "@/assets/services/VA.png";
import chatbotsImg from "@/assets/services/chatbots.webp";
import machineLearningImg from "@/assets/services/Machine Learning.jpg";
import webDevelopmentImg from "@/assets/services/web-development.webp";

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  featured?: boolean;
  image: string;
  highlights: string[];
  color: string;
  bgColor: string;
}

const featuredServices: Service[] = [
  {
    title: "Voice Agents",
    description:
      "Intelligent voice-powered assistants that handle customer calls, appointments, and support with natural conversations. Transform your phone system into a 24/7 sales and support powerhouse.",
    icon: Mic,
    href: "/services/voice-agents",
    featured: true,
    image: voiceAgentsImg,
    highlights: ["24/7 availability", "Natural conversations", "CRM integration"],
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "AI Chatbots",
    description:
      "Smart conversational agents that engage customers around the clock, answer questions instantly, and drive conversions effortlessly. Deploy on web, mobile, and messaging platforms.",
    icon: MessageSquare,
    href: "/services/chatbots",
    featured: true,
    image: chatbotsImg,
    highlights: ["Multi-platform", "Lead qualification", "Instant responses"],
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
  },
];

const otherServices: Service[] = [
  {
    title: "Machine Learning",
    description:
      "Custom ML models and predictive analytics solutions that unlock deep insights from your data. Make smarter decisions with AI-powered intelligence that learns and improves over time.",
    icon: Brain,
    href: "/services/machine-learning",
    image: machineLearningImg,
    highlights: ["Predictive analytics", "Custom models", "Data insights"],
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
  },
  {
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications built with cutting-edge technologies. From landing pages to complex platforms, we create experiences that convert visitors into customers.",
    icon: Globe,
    href: "/services/web-development",
    image: webDevelopmentImg,
    highlights: ["React & Next.js", "E-commerce", "API development"],
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
  },
  {
    title: "App Development",
    description:
      "Custom mobile and cross-platform applications designed for reliable performance, intuitive workflows, and measurable business growth. We build apps that feel polished from first tap to daily use.",
    icon: Smartphone,
    href: "/services/app-development",
    image: webDevelopmentImg,
    highlights: ["iOS & Android", "Cross-platform builds", "API integrations"],
    color: "text-violet-400",
    bgColor: "bg-violet-500/10",
  },
];

const allServices = [...featuredServices, ...otherServices];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 15,
    },
  },
};

export default function ServicesSection() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        <SectionHeading
          badge="Our Services"
          title="Solutions That Drive Growth"
          highlight="Growth"
          subtitle="From AI-powered automation to creative digital solutions, we deliver comprehensive services tailored to your business needs."
        />

        {/* Alternating Service Rows */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16 md:space-y-24"
        >
          {allServices.map((service, index) => {
            const isEven = index % 2 === 0;
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-16 items-center`}
              >
                {/* Image with Parallax */}
                <motion.div
                  className="w-full lg:w-1/2"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="relative group overflow-hidden rounded-2xl">
                    <ParallaxImage
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 md:h-80"
                      parallaxStrength={0.1}
                    />

                    {/* Featured Badge */}
                    {service.featured && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent text-white text-xs font-medium rounded-full shadow-lg">
                          <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-5">
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${service.bgColor}`}>
                    <Icon className={`w-4 h-4 ${service.color}`} />
                    <span className={`text-sm font-medium ${service.color}`}>{service.title}</span>
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">{service.title}</h3>

                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg">{service.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {service.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-3">
                        <CheckCircle className={`w-5 h-5 ${service.color} flex-shrink-0`} />
                        <span className="text-foreground font-medium">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2">
                    <Button asChild className="group">
                      <Link to={service.href}>
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
