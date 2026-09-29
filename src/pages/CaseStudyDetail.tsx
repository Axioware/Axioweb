import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";
import { Button } from "@/components/ui/button";
import SEO, { generateBreadcrumbSchema } from "@/components/SEO";
import { caseStudies } from "@/data/caseStudies";

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) return <Navigate to="/case-studies" replace />;

  return (
    <Layout>
      <SEO
        title={study.title}
        description={study.summary}
        keywords={`${study.industry} AI Receptionist, Voice AI Case Study`}
        canonical={`/case-studies/${study.slug}`}
        structuredData={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Case Studies", url: "/case-studies" },
          { name: study.title, url: `/case-studies/${study.slug}` },
        ])}
      />
      <section className="relative py-24 md:py-32 overflow-hidden">
        <AnimatedHeroBackground />
        <div className="container-custom relative z-10 max-w-4xl">
          <Link to="/case-studies" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8"><ArrowLeft className="w-4 h-4" />All case studies</Link>
          <p className="text-accent font-medium mb-4">{study.industry} · {study.client}</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">{study.title}</h1>
          <p className="text-lg md:text-xl text-white/85 max-w-3xl">{study.summary}</p>
          <a href={study.clientWebsite} target="_blank" rel="noopener noreferrer" className="inline-block mt-6 text-white underline underline-offset-4 hover:text-accent">Visit {study.client}'s website</a>
        </div>
      </section>

      <div className="container-custom max-w-5xl py-12 md:py-20">
        <img src={study.image} alt="" className="w-full h-64 md:h-[420px] object-cover rounded-2xl mb-14" />
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 md:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">The challenge</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">A better first response for every caller</h2>
            <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">The solution</p>
            <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
            <ul className="space-y-3 mt-6">
              {study.capabilities.map((capability) => (
                <li key={capability} className="flex gap-3 text-foreground/85"><CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />{capability}</li>
              ))}
            </ul>
          </div>
        </div>

        <section className="mt-14 rounded-2xl bg-secondary/50 border border-border/50 p-6 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">The outcome</p>
          <p className="text-lg text-foreground/85 leading-relaxed">{study.outcome}</p>
        </section>

        {study.testimonial && (
          <blockquote className="my-14 border-l-4 border-accent pl-6 md:pl-8">
            <p className="font-display text-xl md:text-2xl text-foreground leading-relaxed">“{study.testimonial.quote}”</p>
            <footer className="mt-4 text-sm text-muted-foreground">{study.testimonial.author} · {study.testimonial.role}</footer>
          </blockquote>
        )}

        <div className="mt-16 text-center">
          <h2 className="font-display text-3xl font-bold mb-4">Want to improve how your calls are handled?</h2>
          <p className="text-muted-foreground mb-7">Tell us about your business and the conversations you want to automate.</p>
          <Button asChild size="lg"><Link to="/contact">Talk to our team <ArrowRight className="w-4 h-4 ml-2" /></Link></Button>
        </div>
      </div>
    </Layout>
  );
}
