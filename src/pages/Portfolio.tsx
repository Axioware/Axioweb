import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";
import CTASection from "@/components/CTASection";
import CaseStudyCard from "@/components/case-studies/CaseStudyCard";
import { Button } from "@/components/ui/button";
import SEO, { generateBreadcrumbSchema } from "@/components/SEO";
import { featuredCaseStudies } from "@/data/caseStudies";

const selectedCases = [
  "vino-voice-receptionist",
  "agi-bilingual-receptionist",
  "vino-followup-calling",
  "sellersfirst-lead-qualification",
].map((slug) => featuredCaseStudies.find((study) => study.slug === slug)!);

export default function Portfolio() {
  return (
    <Layout>
      <SEO
        title="Selected Work"
        description="Examples of AI reception, lead follow-up, and appointment workflows built for business teams."
        canonical="/case-studies"
        noIndex
        structuredData={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Case Studies", url: "/case-studies" },
        ])}
      />
      <section className="relative min-h-screen pt-20 pb-12 flex items-center justify-center overflow-hidden">
        <AnimatedHeroBackground />
        <div className="container-custom relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 text-white text-sm font-medium rounded-full mb-6 border border-white/20">
              Our Work
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">Selected work</h1>
            <p className="text-lg md:text-xl text-white/85 mb-10 leading-relaxed">
              Examples of systems for answering calls, qualifying leads, and following up with customers.
            </p>
            <Button asChild size="xl" className="bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/30">
              <a href="#case-studies" className="group">
                View selected work
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="case-studies" className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Selected work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each case describes the system built and the facts provided for it.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {selectedCases.map((study) => <CaseStudyCard key={study.slug} study={study} />)}
          </div>
        </div>
      </section>
      <CTASection />
    </Layout>
  );
}
