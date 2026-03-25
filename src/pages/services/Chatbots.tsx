import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";
import IPhoneMockup from "@/components/IPhoneMockup";
import ChatInterface from "@/components/ChatInterface";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  MessageSquare, 
  Zap, 
  Globe, 
  BarChart, 
  Bot, 
  CheckCircle, 
  Settings,
  Users,
  Clock,
  Shield,
  Sparkles,
  MessageCircle,
  Headphones
} from "lucide-react";
import SEO, { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/components/SEO";

const chatbotFAQs = [
  { question: "What can AI Chatbots do for my business?", answer: "AI Chatbots provide 24/7 customer support, qualify leads, answer FAQs, process orders, and integrate with your existing systems to automate repetitive tasks." },
  { question: "Which platforms do your Chatbots support?", answer: "Our chatbots deploy across web, WhatsApp, Facebook Messenger, Slack, Microsoft Teams, and integrate with popular CRMs and helpdesk platforms." },
  { question: "How long does it take to deploy a Chatbot?", answer: "Basic chatbots can be deployed within 1-2 weeks, while more complex implementations with custom integrations typically take 4-6 weeks." },
];

// Integration icons - colored versions
import slackIcon from "@/assets/integrations/slack-color.svg";
import teamsIcon from "@/assets/integrations/teams-color.svg";
import whatsappIcon from "@/assets/integrations/whatsapp-color.svg";
import messengerIcon from "@/assets/integrations/messenger-color.svg";
import intercomIcon from "@/assets/integrations/intercom-color.svg";
import wordpressIcon from "@/assets/integrations/wordpress-color.svg";
import zendeskIcon from "@/assets/integrations/zendesk-color.svg";
import salesforceIcon from "@/assets/integrations/salesforce-color.svg";
import hubspotIcon from "@/assets/integrations/hubspot-color.svg";
import shopifyIcon from "@/assets/integrations/shopify-color.svg";

const features = [
  { icon: Bot, title: "AI-Powered", desc: "Advanced NLP for human-like conversations that understand context and intent" },
  { icon: Globe, title: "Omnichannel", desc: "Deploy on web, WhatsApp, Messenger, Slack & more from a single platform" },
  { icon: BarChart, title: "Analytics", desc: "Track performance, conversation insights, and customer behavior patterns" },
  { icon: Clock, title: "24/7 Availability", desc: "Never miss a customer query, even outside business hours" },
  { icon: Shield, title: "Enterprise Security", desc: "Bank-grade encryption and compliance with GDPR, SOC 2, and more" },
  { icon: Headphones, title: "Human Handoff", desc: "Seamless escalation to live agents when needed" },
];

const useCases = [
  {
    title: "Customer Support",
    description: "Automate FAQ responses, ticket creation, and issue resolution to reduce support costs by 60%.",
    icon: Headphones,
  },
  {
    title: "Lead Generation",
    description: "Qualify leads 24/7, capture contact information, and book meetings automatically.",
    icon: Users,
  },
  {
    title: "E-commerce Assistant",
    description: "Guide customers through product selection, answer questions, and assist with checkout.",
    icon: MessageCircle,
  },
  {
    title: "Internal Help Desk",
    description: "Answer employee questions about HR policies, IT issues, and company procedures.",
    icon: Settings,
  },
];

const capabilities = [
  "Context-aware responses",
  "Multi-channel deployment",
  "Easy no-code customization",
  "Handoff to human agents",
  "Multi-language support",
  "Conversation memory"
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

export default function ChatbotsService() {
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateServiceSchema({
        name: "AI Chatbots",
        description: "Intelligent conversational agents that engage customers 24/7, answer questions, qualify leads, and drive conversions across multiple platforms.",
        url: "https://axioware.com/services/chatbots"
      }),
      generateBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "AI Chatbots", url: "/services/chatbots" },
      ]),
      generateFAQSchema(chatbotFAQs),
    ]
  };

  return (
    <Layout>
      <SEO 
        title="AI Chatbots - Intelligent Conversational Agents"
        description="Deploy AI Chatbots that engage customers 24/7 on web, WhatsApp, Messenger, and more. Automate support, qualify leads, and boost conversions."
        keywords="AI Chatbots, Conversational AI, Customer Support Bot, WhatsApp Bot, Messenger Bot, Lead Generation Bot, Customer Service Automation"
        canonical="/services/chatbots"
        structuredData={combinedSchema}
      />
      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 pb-12 flex items-center justify-center overflow-hidden">
        <AnimatedHeroBackground />
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 text-white text-sm font-medium rounded-full mb-6 border border-white/20">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" /> Featured Service
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              AI Chatbots
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-10 leading-relaxed">
              Intelligent conversational agents that engage and convert customers 24/7.
            </p>
            <Button asChild size="xl" className="bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/30">
              <Link to="/contact" className="group">
                Get Started
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
                <MessageSquare className="w-4 h-4" />
                Overview
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Smart Conversational AI
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our AI Chatbots engage customers 24/7 with natural conversations, answering questions, guiding purchases, and providing instant support across all your digital channels.
              </p>
              <ul className="space-y-3">
                {capabilities.map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <IPhoneMockup>
              <ChatInterface />
            </IPhoneMockup>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <SectionHeading
            badge="Features"
            title="Powerful Capabilities"
            highlight="Capabilities"
            subtitle="Everything you need for intelligent customer engagement."
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((f) => (
              <motion.div 
                key={f.title} 
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-card p-6 rounded-xl border border-border/50 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 h-full flex flex-col"
              >
                <f.icon className="w-10 h-10 text-accent mb-4 flex-shrink-0" />
                <h4 className="font-semibold text-foreground mb-2">{f.title}</h4>
                <p className="text-sm text-muted-foreground flex-grow">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            badge="Use Cases"
            title="How Businesses Use Our Chatbots"
            highlight="Chatbots"
            subtitle="Flexible solutions for every industry and use case."
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {useCases.map((useCase) => (
              <motion.div
                key={useCase.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-card p-6 rounded-xl border border-border/50 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 group h-full"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-secondary/50 group-hover:bg-accent/10 transition-colors">
                    <useCase.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-lg text-foreground mb-2">{useCase.title}</h3>
                    <p className="text-sm text-muted-foreground">{useCase.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <SectionHeading
            badge="Process"
            title="How It Works"
            highlight="Works"
            subtitle="Get your chatbot up and running in just a few steps."
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {[
              { step: 1, title: "Discovery", desc: "We understand your business goals and customer needs", icon: Settings },
              { step: 2, title: "Design", desc: "Custom conversation flows and persona development", icon: Sparkles },
              { step: 3, title: "Build & Train", desc: "AI training with your data and knowledge base", icon: Bot },
              { step: 4, title: "Deploy", desc: "Launch across channels with ongoing optimization", icon: Zap },
            ].map((item) => (
              <motion.div
                key={item.step}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative h-full"
              >
                <div className="bg-card p-6 rounded-xl border border-border/50 h-full hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-sm font-bold text-accent">Step {item.step}</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground flex-grow">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild size="lg">
              <Link to="/contact" className="group">
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            badge="Integrations"
            title="Works With Your Existing Tools"
            highlight="Existing Tools"
            subtitle="Seamlessly connect with the platforms you already use."
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 max-w-4xl mx-auto"
          >
            {[
              { name: "Slack", icon: slackIcon, color: "#4A154B" },
              { name: "Teams", icon: teamsIcon, color: "#6264A7" },
              { name: "WhatsApp", icon: whatsappIcon, color: "#25D366" },
              { name: "Messenger", icon: messengerIcon, color: "#0084FF" },
              { name: "Zendesk", icon: zendeskIcon, color: "#03363D" },
              { name: "Salesforce", icon: salesforceIcon, color: "#00A1E0" },
              { name: "HubSpot", icon: hubspotIcon, color: "#FF7A59" },
              { name: "Intercom", icon: intercomIcon, color: "#1F8DED" },
              { name: "Shopify", icon: shopifyIcon, color: "#7AB55C" },
              { name: "WordPress", icon: wordpressIcon, color: "#21759B" },
            ].map((platform) => (
              <motion.div
                key={platform.name}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.05 }}
                className="flex flex-col items-center gap-3 p-5 bg-card rounded-xl border border-border/50 hover:shadow-lg transition-all duration-300"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${platform.color}15` }}
                >
                  <img 
                    src={platform.icon} 
                    alt={platform.name} 
                    className="w-7 h-7 object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-foreground text-center">{platform.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-primary/5" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Automate Customer Conversations?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join hundreds of businesses that have transformed their customer engagement with our AI chatbots.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link to="/contact" className="group">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/portfolio">View Case Studies</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
