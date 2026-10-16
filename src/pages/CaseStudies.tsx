import Layout from "@/components/Layout";
import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";
import CaseStudyCard from "@/components/case-studies/CaseStudyCard";
import SEO, { generateBreadcrumbSchema } from "@/components/SEO";
import { featuredCaseStudies } from "@/data/caseStudies";

export default function CaseStudies() {
  return (
    <Layout>
      <SEO
        title="Case Studies"
        description="Explore AI reception, lead qualification, customer messaging, and workflow systems built for service businesses."
        canonical="/case-studies"
        structuredData={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Case Studies", url: "/case-studies" },
        ])}
      />
      <section className="relative min-h-[55vh] py-20 flex items-center justify-center overflow-hidden">
        <AnimatedHeroBackground />
        <div className="container-custom relative z-10 text-center max-w-3xl">
          <span className="inline-flex px-4 py-1.5 bg-white/15 text-white text-sm rounded-full mb-6 border border-white/20">
            Customer stories
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-white">Case Studies</h1>
          <p className="text-lg md:text-xl text-white/85 leading-relaxed">
            Examples of AI reception, lead follow-up, and workflow systems built for business teams.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {featuredCaseStudies.map((study) => <CaseStudyCard key={study.slug} study={study} />)}
        </div>
      </section>
    </Layout>
  );
}
