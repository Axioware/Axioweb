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
  Palette,
  Search,
  Share2,
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
} from "lucide-react";
import SEO, { generateServiceSchema, generateBreadcrumbSchema } from "@/components/SEO";

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

const serviceData: Record<string, ServiceInfo> = {
  "machine-learning": {
    title: "Machine Learning",
    desc: "Custom ML models and predictive analytics that transform your data into actionable business intelligence.",
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
      heading: "Transform Data Into Intelligence",
      description:
        "Our machine learning solutions leverage cutting-edge algorithms to uncover hidden patterns, automate decision-making, and predict future trends. From customer behavior analysis to fraud detection, we build custom models tailored to your unique business challenges.",
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
          description: "We seamlessly integrate the model into your systems with rigorous testing.",
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
    desc: "Modern, responsive web applications built with cutting-edge technology for exceptional user experiences.",
    icon: Globe,
    features: [
      { title: "React & Next.js", icon: Code, desc: "Modern frameworks for fast, scalable applications" },
      { title: "E-commerce Solutions", icon: Globe, desc: "Full-featured online stores that convert" },
      { title: "Progressive Web Apps", icon: Zap, desc: "Native-like experiences on any device" },
      { title: "API Development", icon: Link2, desc: "Robust backend services and integrations" },
    ],
    overview: {
      heading: "Build Your Digital Presence",
      description:
        "We create stunning, high-performance web applications that drive engagement and conversions. Using modern frameworks like React, Next.js, and Node.js, we deliver scalable solutions that grow with your business.",
      benefits: [
        "Lightning-fast load times with optimized performance",
        "Mobile-first responsive design for all devices",
        "SEO-optimized architecture for better visibility",
        "Secure, scalable infrastructure that grows with you",
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
  "ui-ux-design": {
    title: "UI/UX Design",
    desc: "Beautiful, intuitive interfaces designed to delight users and drive meaningful engagement.",
    icon: Palette,
    features: [
      { title: "User Research", icon: Users, desc: "Deep understanding of your users' needs and behaviors" },
      { title: "Wireframing", icon: Layers, desc: "Strategic layouts that guide the user journey" },
      { title: "Prototyping", icon: Eye, desc: "Interactive prototypes to validate designs early" },
      { title: "Design Systems", icon: Sparkles, desc: "Scalable component libraries for consistency" },
    ],
    overview: {
      heading: "Design That Converts",
      description:
        "Great design is invisible—it just works. Our UI/UX team creates intuitive, beautiful interfaces that guide users naturally toward their goals. We combine research-driven insights with creative excellence to deliver experiences that users love.",
      benefits: [
        "Increase conversion rates with optimized user flows",
        "Reduce support costs with intuitive interfaces",
        "Build brand loyalty through memorable experiences",
        "Ensure consistency with scalable design systems",
      ],
    },
    process: {
      steps: [
        {
          title: "User Research",
          description: "We study your users through interviews, surveys, and analytics to understand their needs.",
          icon: Users,
        },
        {
          title: "Wireframing",
          description: "Low-fidelity wireframes map out the user journey and information architecture.",
          icon: Layers,
        },
        {
          title: "Visual Design",
          description: "High-fidelity designs bring your brand to life with stunning visuals.",
          icon: PenTool,
        },
        {
          title: "Prototyping & Testing",
          description: "Interactive prototypes are tested with real users to validate design decisions.",
          icon: Eye,
        },
      ],
    },
  },
  seo: {
    title: "SEO",
    desc: "Data-driven strategies to improve search visibility and drive sustainable organic traffic growth.",
    icon: Search,
    features: [
      { title: "Technical SEO", icon: Settings, desc: "Site architecture, speed, and crawlability optimization" },
      { title: "Content Strategy", icon: FileSearch, desc: "Keyword-targeted content that ranks and converts" },
      { title: "Link Building", icon: Link2, desc: "Quality backlinks that build domain authority" },
      { title: "Local SEO", icon: Target, desc: "Dominate local search results in your area" },
    ],
    overview: {
      heading: "Dominate Search Results",
      description:
        "SEO isn't just about rankings—it's about connecting your business with customers actively searching for your solutions. We combine technical expertise, content strategy, and data analysis to build sustainable organic growth.",
      benefits: [
        "Increase organic traffic significantly in 12 months",
        "Reduce customer acquisition costs vs. paid ads",
        "Build long-term brand authority and trust",
        "Capture high-intent traffic that converts",
      ],
    },
    process: {
      steps: [
        {
          title: "SEO Audit",
          description: "Comprehensive analysis of your site's technical health, content, and backlink profile.",
          icon: FileSearch,
        },
        {
          title: "Keyword Strategy",
          description: "Research-driven keyword targeting based on search volume, intent, and competition.",
          icon: Target,
        },
        {
          title: "On-Page Optimization",
          description: "Content optimization, meta tags, schema markup, and internal linking.",
          icon: Code,
        },
        {
          title: "Off-Page & Reporting",
          description: "Link building, local citations, and monthly reporting with actionable insights.",
          icon: Link2,
        },
      ],
    },
  },
  "social-media": {
    title: "Social Media Marketing",
    desc: "Strategic campaigns that build brand awareness, engage audiences, and drive measurable results.",
    icon: Share2,
    features: [
      { title: "Content Creation", icon: Camera, desc: "Engaging posts, stories, and videos for every platform" },
      { title: "Community Management", icon: Users, desc: "Active engagement and relationship building" },
      { title: "Paid Advertising", icon: Target, desc: "Targeted campaigns with measurable ROI" },
      { title: "Analytics & Reporting", icon: BarChart, desc: "Data-driven insights to optimize performance" },
    ],
    overview: {
      heading: "Amplify Your Brand Voice",
      description:
        "Social media is where brands become human. Our team creates compelling content, manages engaged communities, and runs data-driven ad campaigns that turn followers into customers and customers into advocates.",
      benefits: [
        "Build authentic connections with your audience",
        "Increase brand awareness and reach new markets",
        "Drive website traffic and lead generation",
        "Leverage paid social for scalable growth",
      ],
    },
    process: {
      steps: [
        {
          title: "Strategy Development",
          description: "Define your brand voice, target audience, and content pillars.",
          icon: Target,
        },
        {
          title: "Content Creation",
          description: "Engaging posts, stories, reels, and graphics tailored to each platform.",
          icon: Camera,
        },
        {
          title: "Community Management",
          description: "Active engagement, response management, and community building.",
          icon: MessageCircle,
        },
        {
          title: "Paid Campaigns",
          description: "Targeted advertising with A/B testing and performance optimization.",
          icon: BarChart,
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
  const service = serviceData[slug || ""] || serviceData["web-development"];

  const seoKeywords: Record<string, string> = {
    "machine-learning":
      "Machine Learning, ML Solutions, Predictive Analytics, AI Models, Data Science, Business Intelligence",
    "web-development": "Web Development, React, Next.js, Web Applications, E-commerce, Progressive Web Apps",
    "ui-ux-design": "UI/UX Design, User Experience, User Interface, Product Design, Design Systems, Prototyping",
    seo: "SEO Services, Search Engine Optimization, Google Rankings, Organic Traffic, Technical SEO, Content SEO",
    "social-media":
      "Social Media Marketing, Content Strategy, Social Advertising, Brand Awareness, Engagement Marketing",
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
              url: `https://axioware.com/services/${slug}`,
            }),
            generateBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Services", url: "/services" },
              { name: service.title, url: `/services/${slug}` },
            ]),
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
                <Link to="/contact" className="group">
                  Get Started
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
              <Link to="/contact" className="group">
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
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
              Let's discuss how our {service.title.toLowerCase()} services can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link to="/contact" className="group">
                  Contact Us Today
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div> -->
      </section> */}
    </Layout>
  );
}
