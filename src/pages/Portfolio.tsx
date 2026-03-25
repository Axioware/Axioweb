import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, Quote, 
  Star, Brain, Globe, MessageSquare, Search, Mic
} from "lucide-react";
import SEO, { generateBreadcrumbSchema } from "@/components/SEO";

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  service: string;
  serviceIcon: any;
  image: string;
  description: string;
  challenge: string;
  solution: string;
  highlights: { label: string; detail: string }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  tags: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: "fintech-ml",
    title: "AI-Powered Fraud Detection System",
    client: "SecureBank Financial",
    industry: "Financial Services",
    service: "Machine Learning",
    serviceIcon: Brain,
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=80",
    description: "Built a real-time fraud detection system that analyzes millions of transactions daily.",
    challenge: "SecureBank was facing significant losses from fraudulent transactions. Their legacy rule-based system couldn't keep up with evolving fraud patterns.",
    solution: "We developed a machine learning model using gradient boosting and neural networks that analyzes transaction patterns in real-time, flagging suspicious activity with high accuracy.",
    highlights: [
      { label: "Scope", detail: "End-to-end ML pipeline" },
      { label: "Timeline", detail: "4-month deployment" },
      { label: "Integration", detail: "Core banking APIs" },
      { label: "Support", detail: "24/7 monitoring" }
    ],
    testimonial: {
      quote: "Axioware's ML solution transformed our fraud prevention. We've saved millions and our customers trust us more than ever.",
      author: "Michael Chen",
      role: "CTO, SecureBank Financial"
    },
    tags: ["Machine Learning", "Fraud Detection", "Real-time Analytics", "Python"]
  },
  {
    id: "ecommerce-chatbot",
    title: "24/7 E-commerce Customer Support Bot",
    client: "StyleHub Fashion",
    industry: "E-commerce",
    service: "AI Chatbots",
    serviceIcon: MessageSquare,
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop&q=80",
    description: "Deployed an intelligent chatbot handling the majority of customer inquiries automatically.",
    challenge: "StyleHub's support team was overwhelmed with thousands of daily inquiries. Response times were slow, leading to cart abandonment.",
    solution: "We built a conversational AI chatbot trained on their product catalog and FAQs. It handles order tracking, returns, sizing questions, and seamlessly escalates complex issues.",
    highlights: [
      { label: "Scope", detail: "Multi-platform chatbot" },
      { label: "Timeline", detail: "6-week rollout" },
      { label: "Channels", detail: "Web, Mobile, WhatsApp" },
      { label: "Training", detail: "Custom knowledge base" }
    ],
    testimonial: {
      quote: "Our customers love the instant support. The chatbot feels natural and actually solves problems—it's not just a fancy FAQ.",
      author: "Sarah Williams",
      role: "Head of CX, StyleHub"
    },
    tags: ["Chatbot", "NLP", "E-commerce", "Customer Support"]
  },
  {
    id: "healthcare-voice",
    title: "Voice-Enabled Appointment Scheduling",
    client: "MedCare Clinics",
    industry: "Healthcare",
    service: "Voice Agents",
    serviceIcon: Mic,
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&auto=format&fit=crop&q=80",
    description: "Created an AI voice agent that handles appointment bookings across 50+ clinic locations.",
    challenge: "MedCare's phone lines were constantly busy. Patients faced long wait times, and many calls went unanswered.",
    solution: "Our voice AI agent handles inbound calls 24/7, booking appointments, sending confirmations, and managing reschedules with natural conversation flow.",
    highlights: [
      { label: "Scope", detail: "50+ clinic locations" },
      { label: "Timeline", detail: "3-month phased launch" },
      { label: "Features", detail: "Booking, reminders, rescheduling" },
      { label: "Compliance", detail: "HIPAA compliant" }
    ],
    testimonial: {
      quote: "Patients can book anytime, even at 2 AM. It's like having a perfect receptionist who never takes a break.",
      author: "Dr. Amanda Foster",
      role: "Medical Director, MedCare"
    },
    tags: ["Voice AI", "Healthcare", "Scheduling", "Telephony"]
  },
  {
    id: "saas-webapp",
    title: "Enterprise Project Management Platform",
    client: "Velocity Software",
    industry: "Technology",
    service: "Web Development",
    serviceIcon: Globe,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80",
    description: "Built a scalable SaaS platform managing thousands of active projects for enterprise teams.",
    challenge: "Velocity needed a modern platform to replace their aging desktop software. They required real-time collaboration, mobile access, and enterprise security.",
    solution: "We architected a full-stack application using React, Node.js, and PostgreSQL with real-time sync, role-based permissions, and SOC 2 compliant infrastructure.",
    highlights: [
      { label: "Scope", detail: "Full-stack SaaS platform" },
      { label: "Timeline", detail: "8-month development" },
      { label: "Architecture", detail: "Microservices, real-time sync" },
      { label: "Security", detail: "SOC 2 Type II certified" }
    ],
    testimonial: {
      quote: "Axioware didn't just build our product—they helped us think through every edge case. The platform handles scale beautifully.",
      author: "James Rodriguez",
      role: "CEO, Velocity Software"
    },
    tags: ["React", "Node.js", "SaaS", "Real-time"]
  },
  {
    id: "legal-seo",
    title: "National SEO Domination Campaign",
    client: "Morrison & Associates Law",
    industry: "Legal Services",
    service: "SEO",
    serviceIcon: Search,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop&q=80",
    description: "Achieved top rankings for high-value legal keywords across multiple markets.",
    challenge: "Morrison & Associates was invisible online. Their competitors dominated search results, and they relied entirely on referrals for new clients.",
    solution: "We executed a comprehensive SEO strategy including technical optimization, content creation, local SEO for all office locations, and strategic link building.",
    highlights: [
      { label: "Scope", detail: "Multi-state SEO campaign" },
      { label: "Timeline", detail: "12-month engagement" },
      { label: "Deliverables", detail: "Technical audit, content, links" },
      { label: "Coverage", detail: "8 office locations" }
    ],
    testimonial: {
      quote: "We went from page 5 to page 1 in months. Our phone hasn't stopped ringing. Best marketing investment we've ever made.",
      author: "David Morrison",
      role: "Managing Partner"
    },
    tags: ["SEO", "Legal", "Content Strategy", "Local SEO"]
  }
];

export default function Portfolio() {
  return (
    <Layout>
      <SEO 
        title="Portfolio - Case Studies & Success Stories"
        description="Explore Axioware's portfolio of successful AI projects including Voice Agents, Chatbots, and digital transformation case studies with measurable results."
        keywords="AI Portfolio, Case Studies, Voice Agent Projects, Chatbot Success Stories, Client Testimonials, AI Implementation"
        canonical="/portfolio"
        structuredData={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Portfolio", url: "/portfolio" },
        ])}
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
              <Star className="w-4 h-4" /> Our Work
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Case Studies & Portfolio
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-10 leading-relaxed">
              Real results for real businesses. Explore how we've helped companies transform their operations with cutting-edge technology.
            </p>
            <Button asChild size="xl" className="bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/30">
              <a href="#case-studies" className="group">
                View Our Work
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
                Case Studies
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Success Stories
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every project tells a story. Here's how we've helped businesses achieve remarkable results.
              </p>
            </motion.div>
          </div>

          <div className="space-y-24">
            {caseStudies.map((study, idx) => (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                {/* Image - alternating sides */}
                <div className={`${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl transform rotate-3 group-hover:rotate-1 transition-transform" />
                    <img
                      src={study.image}
                      alt={study.title}
                      className="relative rounded-2xl shadow-xl w-full h-[300px] md:h-[400px] object-cover"
                    />
                    <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-white/95 rounded-full shadow-md">
                      <study.serviceIcon className="w-4 h-4 text-accent" />
                      <span className="text-sm font-medium text-foreground">{study.service}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm text-muted-foreground">{study.industry}</span>
                    <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                    <span className="text-sm text-accent font-medium">{study.client}</span>
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {study.title}
                  </h3>

                  <p className="text-muted-foreground mb-6">{study.description}</p>

                  {/* Project Highlights */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {study.highlights.map((highlight) => (
                      <div key={highlight.label} className="bg-secondary/50 rounded-xl p-4 border border-border/30">
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{highlight.label}</p>
                        <p className="text-sm font-semibold text-foreground">{highlight.detail}</p>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div className="bg-card rounded-xl p-6 border border-border/50 mb-6">
                    <Quote className="w-8 h-8 text-accent/30 mb-3" />
                    <p className="text-foreground/90 italic mb-4">"{study.testimonial.quote}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                        <span className="text-accent font-bold text-sm">
                          {study.testimonial.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">{study.testimonial.author}</p>
                        <p className="text-xs text-muted-foreground">{study.testimonial.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-secondary text-xs font-medium text-muted-foreground rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-dark via-primary to-accent/70 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_hsl(210_75%_12%/0.4)_100%)]" />
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-white/80 mb-8">
              Let's discuss how we can help your business achieve remarkable results with our technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl" className="bg-white text-primary hover:bg-white/90">
                <Link to="/contact" className="group">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Link to="/about">Learn About Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
