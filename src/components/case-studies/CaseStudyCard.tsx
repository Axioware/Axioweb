import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { CaseStudy, ServiceSlug } from "@/data/caseStudies";
import FlowDiagram from "./FlowDiagram";

const serviceLabels: Record<ServiceSlug, string> = {
  "ai-receptionist": "AI Receptionist",
  "ai-lead-generation": "AI Lead Generation",
  "linkedin-bdr": "LinkedIn BDR",
  "automated-follow-ups": "Automated Follow-Ups",
  "outbound-ai-calling": "Outbound AI Calling",
  "whatsapp-and-chat-agents": "WhatsApp and Chat Agents",
  "crm-and-workflow-setup": "CRM and Workflow Setup",
};

interface CaseStudyCardProps {
  study: CaseStudy;
}

export default function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <article className="h-full overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm flex flex-col">
      <div className="p-4 pb-0">
        <FlowDiagram nodes={study.flow} compact />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <p className="text-sm font-medium text-accent mb-3">{study.clientLabel}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {study.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground">
              {serviceLabels[tag]}
            </span>
          ))}
        </div>
        <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">{study.title}</h2>
        <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{study.summary}</p>
        <Link
          to={`/case-studies/${study.slug}`}
          className="inline-flex items-center gap-2 text-accent font-medium hover:text-primary transition-colors mt-auto"
        >
          Read the case study
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}
