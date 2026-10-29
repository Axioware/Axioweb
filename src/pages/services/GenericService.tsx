import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Brain,
  Globe,
  CheckCircle,
  Settings,
  Target,
  BarChart,
  Users,
  Zap,
  Lightbulb,
  Code,
  Layers,
  Sparkles,
  PenTool,
  Eye,
  LineChart,
  FileSearch,
  Link2,
  MessageCircle,
  Camera,
  Smartphone,
  Bell,
  ShieldCheck,
} from "lucide-react";
import SEO, { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/components/SEO";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import NotFound from "@/pages/NotFound";
import { useBookCallHref } from "@/lib/booking";

interface ServiceInfo {
  title: string;
  desc: string;
  icon: any;
  features: { title: string; icon: any; desc: string }[];
  overview: {
    heading: string;
    description: string;
    benefits: string[];
  };
  process: {
    steps: { title: string; description: string; icon: any }[];
  };
}

export const serviceData: Record<string, ServiceInfo> = {
  "machine-learning": {
    title: "Machine Learning",
    desc: "Custom ML models and predictive analytics that turn your data into actionable business intelligence.",
    icon: Brain,
    features: [
      { title: "Predictive Analytics", icon: LineChart, desc: "Forecast trends and make data-driven decisions" },
      { title: "Computer Vision", icon: Eye, desc: "Image recognition and visual data processing" },
      {
        title: "NLP Solutions",
        icon: MessageCircle,
        desc: "Text analysis, sentiment detection, and language processing",
      },
      { title: "Recommendation Engines", icon: Sparkles, desc: "Personalized suggestions that drive engagement" },
    ],
    overview: {
      heading: "Turn Data Into Useful Insights",
      description:
        "Our machine learning solutions use current algorithms to uncover hidden patterns, automate decision-making, and predict future trends. From customer behavior analysis to fraud detection, we build custom models tailored to your unique business challenges.",
      benefits: [
        "Reduce operational costs with automated decision-making",
        "Increase revenue with personalized recommendations",
        "Detect anomalies and fraud in real-time",
        "Scale predictions across millions of data points",
      ],
    },
    process: {
      steps: [
        {
          title: "Data Assessment",
          description: "We analyze your existing data infrastructure and identify opportunities for ML integration.",
          icon: FileSearch,
        },
        {
          title: "Model Development",
          description: "Our data scientists build and train custom models using your historical data.",
          icon: Brain,
        },
        {
          title: "Integration & Testing",
          description: "We integrate the model into your systems with rigorous testing.",
          icon: Code,
        },
        {
          title: "Monitoring & Optimization",
          description: "Continuous monitoring ensures your models stay accurate and improve over time.",
          icon: LineChart,
        },
      ],
    },
  },
  "web-development": {
    title: "Web Development",
    desc: "Responsive web applications built for clear user journeys and common business needs.",
    icon: Globe,
    features: [
      { title: "React & Next.js", icon: Code, desc: "Modern frameworks for fast applications that can grow" },
      { title: "E-commerce Solutions", icon: Globe, desc: "Full-featured online stores that convert" },
      { title: "Progressive Web Apps", icon: Zap, desc: "Native-like experiences on any device" },
      { title: "API Development", icon: Link2, desc: "Robust backend services and integrations" },
    ],
    overview: {
      heading: "Build Your Digital Presence",
      description:
        "We create stunning, high-performance web applications that drive engagement and conversions. Using modern frameworks like React, Next.js, and Node.js, we build solutions that can grow with your business.",
      benefits: [
        "Lightning-fast load times with optimized performance",
        "Mobile-first responsive design for all devices",
        "SEO-optimized architecture for better visibility",
        "Infrastructure planned for the application's expected needs",
      ],
    },
    process: {
      steps: [
        {
          title: "Discovery & Planning",
          description: "We understand your goals, audience, and requirements to create a detailed roadmap.",
          icon: Lightbulb,
        },
        {
          title: "Design & Prototyping",
          description: "Interactive prototypes and UI designs ensure alignment before development.",
          icon: Layers,
        },
        {
          title: "Development & Testing",
          description: "Agile development with continuous testing ensures quality at every stage.",
          icon: Code,
        },
        {
          title: "Launch & Support",
          description: "Smooth deployment with ongoing maintenance and feature updates.",
          icon: Zap,
        },
      ],
    },
  },
  "app-development": {
    title: "App Development",
    desc: "Custom mobile and cross-platform applications built for smooth performance, practical workflows, and business growth.",
    icon: Smartphone,
    features: [
      { title: "iOS & Android Apps", icon: Smartphone, desc: "Mobile experiences designed for the devices your customers use" },
      { title: "Cross-Platform Builds", icon: Layers, desc: "Efficient shared codebases without sacrificing polish" },
      { title: "API Integrations", icon: Link2, desc: "Connect payments, CRMs, dashboards, and third-party services" },
      { title: "App Architecture", icon: ShieldCheck, desc: "Authentication, permissions, and data handling set out for the app's use cases" },
    ],
    overview: {
      heading: "Build Apps People Actually Use",
      description:
        "We design and develop mobile applications that support real business workflows, not just screens. From customer-facing apps to internal operations tools, we focus on speed, reliability, clean UX, and integrations that make the product useful from day one.",
      benefits: [
        "Launch on iOS and Android with a consistent experience",
        "Reduce manual work with app-driven workflows",
        "Integrate your app with existing business systems",
        "Ship a product that can evolve after launch",
      ],
    },
    process: {
      steps: [
        {
          title: "Product Planning",
          description: "We define users, core workflows, technical scope, and launch priorities.",
          icon: Lightbulb,
        },
        {
          title: "UX & Prototype",
          description: "Clickable prototypes validate the app flow before development starts.",
          icon: Layers,
        },
        {
          title: "App Development",
          description: "We build, integrate, and test the app across target devices and platforms.",
          icon: Code,
        },
        {
          title: "Launch & Iteration",
          description: "We prepare release builds, support deployment, and improve from real usage.",
          icon: Bell,
        },
      ],
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function GenericService() {
  const { slug } = useParams();
  const bookingHref = useBookCallHref();
  const service = serviceData[slug || ""];

  if (!service) return <NotFound />;

  const serviceFAQs = [
    {
      question: `What steps are part of the ${service.title} process?`,
      answer: service.process.steps.map((step, index) => `${index + 1}. ${step.title}: ${step.description}`).join(" "),
    },
  ];

  const seoKeywords: Record<string, string> = {
    "machine-learning":
      "Machine Learning, ML Solutions, Predictive Analytics, AI Models, Data Science, Business Intelligence",
    "web-development": "Web Development, React, Next.js, Web Applications, E-commerce, Progressive Web Apps",
    "app-development": "App Development, Mobile Apps, iOS Apps, Android Apps, Cross-Platform Apps, React Native",
  };

  return (
    <Layout>
      <SEO
        title={`${service.title} - Professional Solutions`}
        description={service.desc}
        keywords={seoKeywords[slug || ""] || "Professional Services, Digital Solutions, Business Automation"}
        canonical={`/services/${slug}`}
        structuredData={{
          "@context": "https://schema.org",
          "@graph": [
            generateServiceSchema({
              name: service.title,
              description: service.desc,
              url: `https://axioware.tech/services/${slug}`,
            }),
            generateBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Services", url: "/services" },
              { name: service.title, url: `/services/${slug}` },
            ]),
            generateFAQSchema(serviceFAQs),
          ],
        }}
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
              <service.icon className="w-4 h-4" /> Professional Service
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">{service.title}</h1>
            <p className="text-lg md:text-xl text-white/85 mb-10 leading-relaxed">{service.desc}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl" className="bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/30">
                <Link to={bookingHref} className="group">
                  Book a 15-minute call
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
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
                <service.icon className="w-4 h-4" />
                Overview
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                {service.overview.heading}
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.overview.description}</p>
              <ul className="space-y-3">
                {service.overview.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-secondary/50 to-accent/10 rounded-2xl p-8 text-center border border-border/50"
            >
              <service.icon className="w-24 h-24 text-accent mx-auto mb-4" />
              <p className="text-lg font-semibold text-foreground">{service.title}</p>
              <p className="text-muted-foreground mt-2">Tailored solutions for your business</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <SectionHeading
            badge="Features"
            title="Key Capabilities"
            highlight="Capabilities"
            subtitle="Everything you need for success."
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {service.features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-card p-6 rounded-xl border border-border/50 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 text-center h-full flex flex-col"
              >
                <feature.icon className="w-10 h-10 text-accent mx-auto mb-4 flex-shrink-0" />
                <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground flex-grow">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            badge="Process"
            title="Our Proven Process"
            highlight="Process"
            subtitle="We follow a structured approach to ensure successful delivery and measurable results."
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {service.process.steps.map((step, idx) => (
              <motion.div
                key={step.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative h-full"
              >
                <div className="bg-card p-6 rounded-xl border border-border/50 h-full hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-sm font-bold text-accent">Step {idx + 1}</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground flex-grow">{step.description}</p>
                </div>
                {idx < service.process.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
                )}
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
              <Link to={bookingHref} className="group">
                Book a 15-minute call
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="container-custom max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-8">Frequently asked questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {serviceFAQs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section 
      <section className="section-padding bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-primary/5" />
        <!-- <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how our {service.title.toLowerCase()} services can help improve your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link to={bookingHref} className="group">
                  Book a 15-minute call
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
              <Link to="/case-studies">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div> -->
      </section> */}
    </Layout>
  );
}
