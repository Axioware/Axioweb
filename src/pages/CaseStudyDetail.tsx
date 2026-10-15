import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";
import CTASection from "@/components/CTASection";
import FlowDiagram from "@/components/case-studies/FlowDiagram";
import { Button } from "@/components/ui/button";
import SEO, { generateBreadcrumbSchema } from "@/components/SEO";
import { featuredCaseStudies } from "@/data/caseStudies";
import type { ServiceSlug } from "@/data/caseStudies";

const serviceLabels: Record<ServiceSlug, string> = {
  "ai-receptionist": "AI Receptionist",
  "ai-lead-generation": "AI Lead Generation",
  "linkedin-bdr": "LinkedIn BDR",
  "automated-follow-ups": "Automated Follow-Ups",
  "outbound-ai-calling": "Outbound AI Calling",
  "whatsapp-and-chat-agents": "WhatsApp and Chat Agents",
  "crm-and-workflow-setup": "CRM and Workflow Setup",
};

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const study = featuredCaseStudies.find((item) => item.slug === slug);

  if (!study) return <Navigate to="/case-studies" replace />;

  const canonical = `/case-studies/${study.slug}`;

  return (
    <Layout>
      <SEO
        title={study.title}
        description={study.summary}
        canonical={canonical}
        structuredData={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Case Studies", url: "/case-studies" },
          { name: study.title, url: canonical },
        ])}
      />
      <section className="relative py-24 md:py-32 overflow-hidden">
        <AnimatedHeroBackground />
        <div className="container-custom relative z-10 max-w-4xl">
          <Link to="/case-studies" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8">
            <ArrowRight className="w-4 h-4 rotate-180" /> All case studies
          </Link>
          <p className="text-accent font-medium mb-4">{study.clientLabel}</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">{study.title}</h1>
          <div className="flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <Link
                key={tag}
                to={`/services/${tag}`}
                className="inline-flex px-3 py-1.5 rounded-full border border-white/25 bg-white/10 text-sm text-white hover:bg-white/20 transition-colors"
              >
                {serviceLabels[tag]}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-custom max-w-5xl py-12 md:py-16">
        <p className="text-lg md:text-xl text-foreground leading-relaxed">{study.summary}</p>
      </section>

      <section className="container-custom max-w-5xl pb-12 md:pb-16">
        <FlowDiagram nodes={study.flow} />
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="container-custom max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">The problem</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">What needed to be handled</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{study.problem}</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">What we built</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">System details</h2>
          <ul className="space-y-4">
            {study.built.map((item) => (
              <li key={item} className="flex gap-3 text-foreground/85 leading-relaxed">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {study.facts.length > 0 && (
        <section className="section-padding bg-secondary/30">
          <div className="container-custom max-w-5xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Facts</p>
            <dl className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {study.facts.map((fact) => (
                <div key={fact.label} className="rounded-xl border border-border/50 bg-card p-5">
                  <dt className="text-sm text-muted-foreground mb-2">{fact.label}</dt>
                  <dd className="font-semibold text-foreground">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      <section className="section-padding bg-background">
        <div className="container-custom max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">Stack</p>
          <ul className="flex flex-wrap gap-2">
            {study.stack.map((item) => (
              <li key={item} className="px-3 py-1.5 rounded-full bg-secondary text-sm text-foreground">{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="container-custom max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">Related services</p>
          <div className="flex flex-wrap gap-3">
            {study.tags.map((tag) => (
              <Button key={tag} asChild variant="outline">
                <Link to={`/services/${tag}`}>{serviceLabels[tag]}</Link>
              </Button>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
