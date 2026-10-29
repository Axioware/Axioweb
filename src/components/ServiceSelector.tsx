import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";


const services = [
  {
    id: "linkedin-bdr",
    title: "LinkedIn BDR",
    description: "Handles outreach and replies on LinkedIn and books meetings with qualified prospects.",
    href: "/services/linkedin-bdr",
    features: ["Outreach", "Replies", "Meeting booking"],
  },
  {
    id: "automated-follow-ups",
    title: "Automated Follow-Ups",
    description: "Sends follow-up messages for missed calls, no-shows, quiet quotes, and old leads.",
    href: "/services/automated-follow-ups",
    features: ["Missed calls", "No-shows", "Quiet quotes"],
  },
  {
    id: "outbound-ai-calling",
    title: "Outbound AI Calling",
    description: "Calls your list, qualifies interest, and books appointments into your calendar.",
    href: "/services/outbound-ai-calling",
    features: ["Calls prospects", "Qualifies interest", "Books appointments"],
  },
  {
    id: "whatsapp-and-chat-agents",
    title: "WhatsApp and Chat Agents",
    description: "Answers customer questions and takes bookings on WhatsApp, SMS, and your website chat.",
    href: "/services/whatsapp-and-chat-agents",
    features: ["WhatsApp and SMS", "Website chat", "Bookings"],
  },
  {
    id: "crm-and-workflow-setup",
    title: "CRM and Workflow Setup",
    description: "Connects your automation to your CRM and calendar so work runs in one place.",
    href: "/services/crm-and-workflow-setup",
    features: ["CRM setup", "Calendar setup", "Workflow connection"],
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
      {services.map((service) => (
          <motion.div
            key={service.id}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative bg-card rounded-2xl border border-border/50 overflow-hidden hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 h-full flex flex-col"
          >
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
      ))}
    </motion.div>
  );
}
