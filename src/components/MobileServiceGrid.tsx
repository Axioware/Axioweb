import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";


interface Service {
  id: string;
  title: string;
  description: string;
  href: string;
  features: string[];
}

const services: Service[] = [
  {
    id: "linkedin-bdr",
    features: ["Outreach", "Replies", "Meeting booking"],
    title: "LinkedIn BDR",
    description: "Handles LinkedIn outreach and replies, then books meetings with qualified prospects.",
    href: "/services/linkedin-bdr",
  },
  {
    id: "automated-follow-ups",
    features: ["Missed calls", "No-shows", "Quiet quotes"],
    title: "Automated Follow-Ups",
    description: "Sends follow-up messages for missed calls, no-shows, quiet quotes, and old leads.",
    href: "/services/automated-follow-ups",
  },
  {
    id: "outbound-ai-calling",
    features: ["Calls prospects", "Qualifies interest", "Books appointments"],
    title: "Outbound AI Calling",
    description: "Calls your list, qualifies interest, and books appointments into your calendar.",
    href: "/services/outbound-ai-calling",
  },
  {
    id: "whatsapp-and-chat-agents",
    features: ["WhatsApp and SMS", "Website chat", "Bookings"],
    title: "WhatsApp and Chat Agents",
    description: "Answers questions and takes bookings on WhatsApp, SMS, and your website chat.",
    href: "/services/whatsapp-and-chat-agents",
  },
  {
    id: "crm-and-workflow-setup",
    features: ["CRM setup", "Calendar setup", "Workflow connection"],
    title: "CRM and Workflow Setup",
    description: "Connects your automation to your CRM and calendar so work runs in one place.",
    href: "/services/crm-and-workflow-setup",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function MobileServiceGrid() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid gap-4"
    >
      {services.map((service) => (
          <motion.div
            key={service.id}
            variants={itemVariants}
            className="relative rounded-xl border border-border/50 bg-card hover:border-accent/30 transition-all group overflow-hidden"
          >
            <div className="relative p-5">
                <h3 className="font-display font-semibold text-foreground mb-1">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {service.features.map((feature) => <span key={feature} className="px-2.5 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground">{feature}</span>)}
                </div>
                <Button asChild variant="ghost" size="sm" className="p-0 h-auto text-accent hover:text-accent/80 hover:bg-transparent">
                  <Link to={service.href} className="group/link flex items-center gap-1">
                    Learn more
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </Button>
            </div>
          </motion.div>
      ))}
    </motion.div>
  );
}
