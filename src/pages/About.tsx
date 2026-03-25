import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Target,
  Users,
  Lightbulb,
  Award,
  ArrowRight,
  CheckCircle,
  Shield,
  Zap,
  BookOpen,
  Calendar,
} from "lucide-react";
import SEO, { generateBreadcrumbSchema } from "@/components/SEO";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We focus on delivering measurable outcomes that directly impact your business growth and bottom line.",
    points: [
      "Data-backed decision making",
      "ROI-focused solutions",
      "Continuous performance optimization"
    ]
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We stay at the forefront of technology, constantly exploring and implementing cutting-edge solutions.",
    points: [
      "Latest AI/ML technologies",
      "Continuous R&D investment",
      "Future-proof architectures"
    ]
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "We work as an extension of your team, fully aligned with your goals, vision, and success metrics.",
    points: [
      "Dedicated project managers",
      "Transparent communication",
      "Long-term relationship focus"
    ]
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in every project, from initial concept to final delivery and beyond.",
    points: [
      "Rigorous quality assurance",
      "Industry best practices",
      "Comprehensive documentation"
    ]
  },
  {
    icon: Shield,
    title: "Security & Trust",
    description: "We prioritize data security and privacy, ensuring your business and customer information is always protected.",
    points: [
      "Enterprise-grade security",
      "GDPR compliant processes",
      "Regular security audits"
    ]
  },
  {
    icon: Zap,
    title: "Agility & Speed",
    description: "We embrace agile methodologies to deliver solutions quickly without compromising on quality or reliability.",
    points: [
      "Rapid prototyping",
      "Iterative development",
      "Fast time-to-market"
    ]
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15
    }
  }
};

export default function About() {
  return (
    <Layout>
      <SEO 
        title="About Us - Our Story, Mission & Values"
        description="Learn about Axioware's mission to make advanced AI technology accessible. Discover our values, expertise, and commitment to transforming businesses through intelligent automation."
        keywords="About Axioware, AI Company, Software House, Our Story, Company Values, AI Expertise, Digital Transformation"
        canonical="/about"
        structuredData={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
        ])}
      />
      {/* Hero */}
      <section className="page-hero">
        <div className="container-custom relative z-10">
          <SectionHeading
            badge="About Axioware"
            title="Pioneering the Future of AI"
            highlight="AI"
            subtitle="We're a team of passionate technologists, designers, and strategists dedicated to transforming businesses through intelligent automation."
            light
          />
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
                Our Story
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                From Vision to <span className="text-accent">Reality</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Axioware was founded with a simple yet ambitious mission: to make advanced AI technology accessible to businesses of all sizes. We saw the transformative potential of voice agents and chatbots, and we set out to build solutions that could revolutionize customer engagement.
                </p>
                <p>
                  Today, we're proud to be at the forefront of AI innovation, helping organizations across the globe leverage intelligent automation to drive growth, improve efficiency, and deliver exceptional customer experiences.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link to="/contact" className="group">
                    Work With Us
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <SectionHeading
            badge="Our Values"
            title="What Drives Us"
            highlight="Drives"
            subtitle="Our core values shape every decision we make and every solution we build."
          />

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-card rounded-2xl p-6 border border-border/50 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 group h-full flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent transition-colors flex-shrink-0">
                  <value.icon className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {value.description}
                </p>
                <ul className="space-y-2 mt-auto">
                  {value.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              badge="Why Axioware"
              title="Your Partner in Digital Transformation"
              highlight="Partner"
            />

            <div className="grid sm:grid-cols-2 gap-4 text-left mt-12">
              {[
                "Proven expertise in AI and automation",
                "Custom solutions tailored to your needs",
                "Transparent communication throughout",
                "Ongoing support and maintenance",
                "Industry-leading technology stack",
                "Rapid development and deployment",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50"
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <Button asChild size="lg">
                <Link to="/contact" className="group">
                  Start a Conversation
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <SectionHeading
            badge="Our Blog"
            title="Insights & Resources"
            highlight="Insights"
            subtitle="Stay updated with the latest trends in AI, automation, and digital transformation."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mt-8"
          >
            {[
              {
                title: "The Future of Voice AI in Customer Service",
                category: "Voice Agents & AI Chatbots",
                date: "Jan 15, 2026",
                description: "Explore how AI voice agents are revolutionizing customer support across industries."
              },
              {
                title: "Building Conversational AI That Feels Human",
                category: "AI & ML",
                date: "Jan 10, 2026",
                description: "Learn the key principles behind creating natural, engaging AI conversations."
              },
              {
                title: "Restaurant AI: How Chefie is Changing Dining",
                category: "Voice Agents & AI Chatbots",
                date: "Jan 5, 2026",
                description: "Discover how our restaurant voice agent is transforming the hospitality industry."
              },
            ].map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-card rounded-xl p-6 border border-border/50 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 group h-full flex flex-col"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent font-medium">
                    {post.category}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  {post.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{post.date}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Button asChild variant="outline" size="lg">
              <Link to="/blog" className="group">
                <BookOpen className="w-4 h-4 mr-2" />
                View All Articles
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
