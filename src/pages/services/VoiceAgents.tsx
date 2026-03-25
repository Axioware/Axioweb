import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";
import IPhoneMockup from "@/components/IPhoneMockup";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import CallInterface from "@/components/CallInterface";
import { 
  ArrowRight, 
  Mic, 
  Phone, 
  Clock, 
  Settings, 
  Headphones, 
  CheckCircle,
  Building2,
  ShoppingBag,
  Stethoscope,
  Car,
  Hotel,
  Briefcase,
  Play,
  PhoneCall,
  PhoneIncoming,
  PhoneOutgoing,
  Workflow,
  TrendingUp,
  Sparkles
} from "lucide-react";
import SEO, { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/components/SEO";

const voiceAgentFAQs = [
  { question: "What are AI Voice Agents?", answer: "AI Voice Agents are intelligent virtual assistants that handle phone calls using natural language processing to understand and respond to customer inquiries automatically." },
  { question: "How much do Voice Agents cost?", answer: "Voice Agent pricing varies based on call volume and features. Contact us for a customized quote tailored to your business needs." },
  { question: "Can Voice Agents integrate with my existing systems?", answer: "Yes, our Voice Agents integrate seamlessly with popular CRMs, helpdesk platforms, and business tools including Salesforce, HubSpot, and Zendesk." },
];

const voiceAgentTypes = [
  {
    icon: PhoneIncoming,
    title: "Inbound Sales Agent",
    description: "Handles incoming customer inquiries, qualifies leads, and schedules appointments. Perfect for businesses that receive high call volumes.",
    useCases: ["Lead qualification", "Appointment booking", "Product inquiries"],
    color: "text-blue-400"
  },
  {
    icon: PhoneOutgoing,
    title: "Outbound Sales Agent",
    description: "Proactively reaches out to prospects, follows up on leads, and nurtures customer relationships at scale.",
    useCases: ["Cold outreach", "Follow-ups", "Survey calls"],
    color: "text-green-400"
  },
  {
    icon: Headphones,
    title: "Customer Support Agent",
    description: "Provides 24/7 customer support, answers FAQs, troubleshoots issues, and escalates complex problems to human agents.",
    useCases: ["FAQ handling", "Ticket creation", "Status updates"],
    color: "text-purple-400"
  },
  {
    icon: Workflow,
    title: "Appointment Scheduler",
    description: "Manages your calendar, books appointments, sends reminders, and handles rescheduling automatically.",
    useCases: ["Booking management", "Reminders", "Cancellations"],
    color: "text-amber-400"
  },
  {
    icon: Hotel,
    title: "Chefie - Restaurant Agent",
    description: "Specialized AI voice agent for restaurants that handles reservations, takes orders, answers menu questions, and manages customer inquiries.",
    useCases: ["Order taking", "Reservations", "Menu inquiries"],
    color: "text-orange-400",
    link: "/restaurant-agent"
  },
];

const industries = [
  { icon: Building2, name: "Real Estate", desc: "Property inquiries & showings", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: Stethoscope, name: "Healthcare", desc: "Appointment scheduling", color: "text-emerald-400", bg: "bg-emerald-500/10" },
  { icon: ShoppingBag, name: "E-Commerce", desc: "Order support & tracking", color: "text-purple-400", bg: "bg-purple-500/10" },
  { icon: Car, name: "Automotive", desc: "Service bookings", color: "text-amber-400", bg: "bg-amber-500/10" },
  { icon: Hotel, name: "Hospitality", desc: "Reservations & concierge", color: "text-rose-400", bg: "bg-rose-500/10" },
  { icon: Briefcase, name: "Professional Services", desc: "Client consultations", color: "text-cyan-400", bg: "bg-cyan-500/10" },
];

const features = [
  { icon: Phone, title: "Inbound & Outbound", desc: "Handle both incoming and outgoing calls automatically" },
  { icon: Clock, title: "24/7 Availability", desc: "Never miss a customer call, day or night" },
  { icon: TrendingUp, title: "Lead Qualification", desc: "Qualify leads and schedule appointments seamlessly" },
  { icon: Headphones, title: "Support Automation", desc: "Resolve common queries without human intervention" },
];

const capabilities = [
  "Natural language understanding",
  "Multi-language support",
  "Seamless CRM integration",
  "Real-time analytics",
  "Call recording & transcription",
  "Custom voice personas"
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

export default function VoiceAgentsService() {
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateServiceSchema({
        name: "AI Voice Agents",
        description: "Intelligent voice-powered assistants that handle customer calls, appointments, and support with natural conversations 24/7.",
        url: "https://axioware.com/services/voice-agents"
      }),
      generateBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "Voice Agents", url: "/services/voice-agents" },
      ]),
      generateFAQSchema(voiceAgentFAQs),
    ]
  };

  return (
    <Layout>
      <SEO 
        title="Voice Agents - AI-Powered Phone Assistants"
        description="Deploy intelligent AI Voice Agents that handle customer calls 24/7. Automate appointments, support, and sales with natural conversations. Reduce costs by 70%."
        keywords="Voice Agents, AI Phone Assistants, Call Automation, Virtual Receptionist, AI Customer Service, Phone Bot, Voice AI"
        canonical="/services/voice-agents"
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
              Voice Agents
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-10 leading-relaxed">
              AI-powered voice assistants that revolutionize customer communication.
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
                <Mic className="w-4 h-4" />
                Overview
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Intelligent Voice-Powered Assistants
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our Voice Agents handle customer calls with natural conversations, from appointment scheduling to support queries. They work 24/7, never miss a call, and provide consistent, high-quality service.
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
              <CallInterface />
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
            subtitle="Everything you need for seamless voice automation."
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
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

      {/* Types of Voice Agents */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            badge="Agent Types"
            title="Types of Voice Agents"
            highlight="Voice Agents"
            subtitle="Choose the right voice agent for your specific business needs."
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            {voiceAgentTypes.map((agent) => {
              const cardContent = (
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-secondary/50 group-hover:bg-accent/10 transition-colors">
                    <agent.icon className={`w-6 h-6 ${agent.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-display font-semibold text-lg text-foreground">{agent.title}</h3>
                      {agent.link && (
                        <ArrowRight className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{agent.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {agent.useCases.map((useCase) => (
                        <span
                          key={useCase}
                          className="px-2 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );

              return (
                <motion.div
                  key={agent.title}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="h-full"
                >
                  {agent.link ? (
                    <Link
                      to={agent.link}
                      className="bg-card p-6 rounded-xl border border-border/50 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 group h-full block"
                    >
                      {cardContent}
                    </Link>
                  ) : (
                    <div className="bg-card p-6 rounded-xl border border-border/50 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 group h-full">
                      {cardContent}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>


      {/* Industries Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            badge="Industries"
            title="Voice Agents for Every Industry"
            highlight="Every Industry"
            subtitle="Tailored solutions that understand your industry's unique requirements."
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {industries.map((industry) => (
              <motion.div
                key={industry.name}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-card p-4 rounded-xl border border-border/50 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 text-center group h-full flex flex-col items-center"
              >
                <div className={`w-12 h-12 mx-auto mb-3 rounded-xl ${industry.bg} group-hover:scale-110 transition-all duration-300 flex items-center justify-center`}>
                  <industry.icon className={`w-6 h-6 ${industry.color}`} />
                </div>
                <h4 className="font-semibold text-foreground text-sm mb-1">{industry.name}</h4>
                <p className="text-xs text-muted-foreground">{industry.desc}</p>
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
            subtitle="Get started with Voice Agents in just a few simple steps."
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {[
              { step: 1, title: "Discovery", desc: "We analyze your call patterns and business requirements", icon: Settings },
              { step: 2, title: "Configuration", desc: "Custom voice persona and conversation flows designed for you", icon: Sparkles },
              { step: 3, title: "Integration", desc: "Seamless connection with your phone system and CRM", icon: Phone },
              { step: 4, title: "Launch", desc: "Go live with 24/7 monitoring and continuous optimization", icon: TrendingUp },
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

      {/* CTA Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-primary/5" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Customer Calls?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join hundreds of businesses that have automated their phone operations with our Voice Agents.
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
