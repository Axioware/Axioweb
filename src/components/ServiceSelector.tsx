import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Bell, PhoneCall, MessageSquare, Workflow } from "lucide-react";

// Import service images (WebP format)
import webDevelopmentImg from "@/assets/services/web-development.webp";
import socialMediaImg from "@/assets/services/social-media.webp";
import chatbotsImg from "@/assets/services/chatbots.webp";
import voiceAgentsImg from "@/assets/services/VA.png";

const services = [
  {
    id: "linkedin-bdr",
    title: "LinkedIn BDR",
    description: "Handles outreach and replies on LinkedIn and books meetings with qualified prospects.",
    icon: Linkedin,
    href: "/services/linkedin-bdr",
    features: ["Outreach", "Replies", "Meeting booking"],
    image: socialMediaImg,
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10",
  },
  {
    id: "automated-follow-ups",
    title: "Automated Follow-Ups",
    description: "Sends follow-up messages for missed calls, no-shows, quiet quotes, and old leads.",
    icon: Bell,
    href: "/services/automated-follow-ups",
    features: ["Missed calls", "No-shows", "Quiet quotes"],
    image: chatbotsImg,
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/10",
  },
  {
    id: "outbound-ai-calling",
    title: "Outbound AI Calling",
    description: "Calls your list, qualifies interest, and books appointments into your calendar.",
    icon: PhoneCall,
    href: "/services/outbound-ai-calling",
    features: ["Calls prospects", "Qualifies interest", "Books appointments"],
    image: voiceAgentsImg,
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/10",
  },
  {
    id: "whatsapp-and-chat-agents",
    title: "WhatsApp and Chat Agents",
    description: "Answers customer questions and takes bookings on WhatsApp, SMS, and your website chat.",
    icon: MessageSquare,
    href: "/services/whatsapp-and-chat-agents",
    features: ["WhatsApp and SMS", "Website chat", "Bookings"],
    image: chatbotsImg,
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
  },
  {
    id: "crm-and-workflow-setup",
    title: "CRM and Workflow Setup",
    description: "Connects your automation to your CRM and calendar so work runs in one place.",
    icon: Workflow,
    href: "/services/crm-and-workflow-setup",
    features: ["CRM setup", "Calendar setup", "Workflow connection"],
    image: webDevelopmentImg,
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10",
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
