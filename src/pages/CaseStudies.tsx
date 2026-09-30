import { motion } from "framer-motion";
import { ArrowRight, Bot, Files, HardHat, type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";
import { Button } from "@/components/ui/button";
import SEO, { generateBreadcrumbSchema } from "@/components/SEO";
import { caseStudies } from "@/data/caseStudies";

const icons: Record<string, LucideIcon> = {
  "AI & Automation": Bot,
  "Design & Build": HardHat,
  "Knowledge Management": Files,
};

export default function CaseStudies() {
  return (
    <Layout>
      <SEO
        title="Case Studies"
        description="Explore how Axioware helps businesses solve challenges with thoughtful technology and tailored solutions."
        keywords="Axioware Case Studies, Client Success Stories, Business Solutions"
        canonical="/case-studies"
        structuredData={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Case Studies", url: "/case-studies" },
        ])}
      />
      <section className="relative min-h-[55vh] py-20 flex items-center justify-center overflow-hidden">
        <AnimatedHeroBackground />
        <div className="container-custom relative z-10 text-center max-w-3xl">
          <span className="inline-flex px-4 py-1.5 bg-white/15 text-white text-sm rounded-full mb-6 border border-white/20">Customer stories</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-white">Case Studies</h1>
          <p className="text-lg md:text-xl text-white/85 leading-relaxed">Explore how we help businesses solve real challenges with thoughtful technology and tailored solutions.</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => {
            const Icon = icons[study.industry];
            return (
              <motion.article
                key={study.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm"
              >
                <img src={study.image} alt="" className="w-full h-56 object-cover" loading="lazy" />
                <div className="p-6 md:p-8">
                  <span className="inline-flex items-center gap-2 text-sm text-accent font-medium mb-4"><Icon className="w-4 h-4" />{study.industry}</span>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-3">{study.title}</h2>
                  {study.clientWebsite && study.client && (
                    <a href={study.clientWebsite} target="_blank" rel="noopener noreferrer" className="inline-block text-sm font-medium text-accent underline underline-offset-4 mb-4">Visit {study.client}</a>
                  )}
                  <p className="text-muted-foreground mb-6">{study.summary}</p>
                  <Button asChild>
                    <Link to={`/case-studies/${study.slug}`}>Read case study <ArrowRight className="w-4 h-4 ml-2" /></Link>
                  </Button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
