import SectionHeading from "@/components/SectionHeading";
import { featuredCaseStudies } from "@/data/caseStudies";
import type { ServiceSlug } from "@/data/caseStudies";
import CaseStudyCard from "./CaseStudyCard";

export default function RelatedWorkSection({ service }: { service: ServiceSlug }) {
  const studies = featuredCaseStudies.filter((study) => study.tags.includes(service));

  if (studies.length === 0) return null;

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <SectionHeading
          badge="Related work"
          title="Related systems"
          subtitle="See how these workflows have been used in other business settings."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {studies.map((study) => <CaseStudyCard key={study.slug} study={study} />)}
        </div>
      </div>
    </section>
  );
}
