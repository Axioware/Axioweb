import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import ServiceSelector from "@/components/ServiceSelector";
import MobileServiceGrid from "@/components/MobileServiceGrid";
import SectionHeading from "@/components/SectionHeading";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowRight, Mic, MessageSquare, Utensils } from "lucide-react";
import SEO, { generateBreadcrumbSchema } from "@/components/SEO";
const featuredServices = [
  {
    title: "Voice Agents",
    description:
      "Intelligent voice-powered assistants that handle customer calls, appointments, and support with natural conversations.",
    icon: Mic,
    href: "/services/voice-agents",
    featured: true,
  },
  {
    title: "AI Chatbots",
    description:
      "Smart conversational agents that engage customers 24/7, answer questions, and drive conversions effortlessly.",
    icon: MessageSquare,
    href: "/services/chatbots",
    featured: true,
  },
];
export default function Services() {
  const isMobile = useIsMobile();
  return (
    <Layout>
      <SEO
        title="Services - AI Voice Agents, Chatbots & Digital Solutions"
        description="Explore Axioware's comprehensive AI services including Voice Agents, AI Chatbots, Machine Learning, Web Development, SEO, and UI/UX Design."
        keywords="AI Services, Voice Agents, AI Chatbots, Machine Learning, Web Development, SEO Services, UI/UX Design, Digital Solutions"
        canonical="/services"
        structuredData={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ])}
      />
      {/* Hero Section */}
      <section className="relative min-h-[calc(100svh-4rem)] md:min-h-[calc(100svh-5rem)] py-12 md:py-16 flex items-center justify-center overflow-hidden">
        <AnimatedHeroBackground />
        <div className="container-custom relative z-10 text-center">
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
            }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 text-white text-sm font-medium rounded-full mb-6 border border-white/20">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" /> Our Expertise
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">Our Services</h1>
            <p className="text-lg md:text-xl text-white/85 mb-10 leading-relaxed">
              Comprehensive AI and digital solutions to transform your business and drive growth.
            </p>
            <Button asChild size="xl" className="bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/30">
              <Link to="/contact" className="group">
                Get a Quote
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured AI Services */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            badge="AI-Powered"
            title="Featured Services"
            highlight="Featured"
            subtitle="Our flagship AI solutions that transform how businesses operate."
          />

          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            className="mb-8 pt-4 relative z-20"
          >
            <p className="text-center text-sm font-medium text-accent">★ Core AI Solutions</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {featuredServices.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <SectionHeading
            badge="Full Suite"
            title="Additional Services"
            highlight="Additional"
            subtitle="Comprehensive digital solutions to complement your AI strategy."
          />

          {isMobile ? <MobileServiceGrid /> : <ServiceSelector />}
        </div>
      </section>

      {/* Restaurant Agent CTA */}
      {/*<section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-primary/5" />
        
      </section>*/}

      {/* General CTA Section */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how our services can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link to="/contact">
                  Schedule a Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
