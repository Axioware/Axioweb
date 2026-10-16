import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading";
import ParallaxImage from "./ParallaxImage";
import { Button } from "./ui/button";
import { Mic, MessageSquare, ArrowRight, CheckCircle, Target, Linkedin, Bell, PhoneCall, Workflow } from "lucide-react";
import { LucideIcon } from "lucide-react";

// Import custom AI illustrations (WebP format)
import voiceAgentsImg from "@/assets/services/VA.png";
import chatbotsImg from "@/assets/services/chatbots.webp";
import webDevelopmentImg from "@/assets/services/web-development.webp";
import socialMediaImg from "@/assets/services/social-media.webp";
import outboundCallImg from "@/assets/services/VoiceAgent.jpg";

interface Service {
  title: string;
  headline: string;
  description: string;
  icon: LucideIcon;
  href: string;
  featured?: boolean;
  image: string;
  highlights: string[];
  color: string;
  bgColor: string;
}

const allServices: Service[] = [
  {
    title: "AI Receptionist",
    headline: "Never miss a call again.",
    description: "Every call answered and every appointment booked, even after hours.",
    icon: Mic,
    href: "/services/ai-receptionist",
    featured: true,
    image: voiceAgentsImg,
    highlights: ["Answers every call, day and night", "Handles common questions about your services, hours, and policies", "Books, reschedules, and confirms appointments in your calendar"],
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "AI Lead Generation",
    headline: "Too many hours go to the wrong leads.",
    description: "We research and qualify prospects before anyone picks up the phone.",
    icon: Target,
    href: "/services/ai-lead-generation",
    featured: true,
    image: socialMediaImg,
    highlights: ["Finds businesses that match your ideal customer", "Researches each company before anyone contacts it", "Scores every prospect against your criteria and shows the reasoning"],
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
  },
];

  {
    title: "LinkedIn BDR",
    headline: "Spend your time on calls, not on LinkedIn messages.",
    description: "Outreach and replies run in the background. You show up for the meeting.",
    icon: Linkedin,
    href: "/services/linkedin-bdr",
    image: socialMediaImg,
    highlights: ["Targets the right people based on your ideal customer profile", "Sends connection requests and messages every day", "Handles replies and follow-ups"],
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "Automated Follow-Ups",
    headline: "The lead went quiet and nobody followed up.",
    description: "We make sure someone always does, automatically.",
    icon: Bell,
    href: "/services/automated-follow-ups",
    image: chatbotsImg,
    highlights: ["Texts back missed callers", "Reminds and rebooks no-shows", "Chases quotes that have gone unanswered"],
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
  },
  {
    title: "Outbound AI Calling",
    headline: "Fill your calendar without picking up the phone.",
    description: "An AI agent calls your list, qualifies interest, and books appointments for you.",
    icon: PhoneCall,
    href: "/services/outbound-ai-calling",
    image: outboundCallImg,
    highlights: ["Calls your leads or past customers", "Handles voicemail and common objections", "Works out who is interested and who is not"],
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
  },
  {
    title: "WhatsApp and Chat Agents",
    headline: "Messages pile up when your team is busy.",
    description: "An AI agent replies right away and hands over to a person when needed.",
    icon: MessageSquare,
    href: "/services/whatsapp-and-chat-agents",
    image: chatbotsImg,
    highlights: ["Replies on WhatsApp, SMS, and your website chat", "Answers from your own information: services, prices, hours, and policies", "Takes bookings"],
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
  },
  {
    title: "CRM and Workflow Setup",
    headline: "Your tools do not talk to each other.",
    description: "We connect them so information moves on its own.",
    icon: Workflow,
    href: "/services/crm-and-workflow-setup",
    image: webDevelopmentImg,
    highlights: ["Sets up your CRM, including GoHighLevel", "Builds pipelines and lead capture forms", "Connects your calendar, email, and messaging"],
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
  },
];

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

                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">{service.headline}</h3>

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
