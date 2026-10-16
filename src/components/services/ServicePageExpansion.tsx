import { Bell, Linkedin, MessageSquare, Mic, PhoneCall, Target, Workflow, type LucideIcon } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ServiceCard from "@/components/ServiceCard";

export interface ServicePageExpansionData {
  problem: {
    heading: string;
    paragraphs: [string, string];
  };
  whatItDoesHeading: string;
  whatItDoes: { title: string; description: string }[];
  example: {
    heading: string;
    label: string;
    items: string[];
    ordered?: boolean;
    note?: string;
  };
  howItWorks: {
    heading: string;
    steps: { title: string; description: string }[];
  };
  worksWith: string;
  whoItIsFor: {
    heading: string;
    items: string[];
  };
  faqs: { question: string; answer: string }[];
  relatedServices: string[];
}

export interface RelatedServiceData {
  slug: string;
  label: string;
  headline: string;
}

const relatedServiceIcons: Record<string, LucideIcon> = {
  "ai-receptionist": Mic,
  "ai-lead-generation": Target,
  "linkedin-bdr": Linkedin,
  "automated-follow-ups": Bell,
  "outbound-ai-calling": PhoneCall,
  "whatsapp-and-chat-agents": MessageSquare,
  "crm-and-workflow-setup": Workflow,
};

export default function ServicePageExpansion({
  content,
  relatedServices,
}: {
  content: ServicePageExpansionData;
  relatedServices: RelatedServiceData[];
}) {
  return (
    <>
      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">{content.problem.heading}</h2>
          {content.problem.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-10">{content.whatItDoesHeading}</h2>
          <div className="grid gap-4 md:grid-cols-2 max-w-5xl mx-auto">
            {content.whatItDoes.map((item) => (
              <Card key={item.title} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg leading-relaxed">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">{content.example.heading}</h2>
          <Card>
            <CardHeader>
              <p className="text-sm font-medium text-accent">{content.example.label}</p>
            </CardHeader>
            <CardContent>
              {content.example.ordered ? (
                <ol className="list-decimal pl-6 space-y-3 text-muted-foreground leading-relaxed">
                  {content.example.items.map((item) => <li key={item}>{item}</li>)}
                </ol>
              ) : (
                <ul className="list-disc pl-6 space-y-3 text-muted-foreground leading-relaxed">
                  {content.example.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}
              {content.example.note && <p className="mt-5 text-muted-foreground leading-relaxed">{content.example.note}</p>}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-10">{content.howItWorks.heading}</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {content.howItWorks.steps.map((step, index) => (
              <Card key={step.title} className="h-full">
                <CardHeader>
                  <p className="text-sm font-semibold text-accent">Step {index + 1}</p>
                  <CardTitle className="text-lg leading-relaxed">{step.title}</CardTitle>
                </CardHeader>
                <CardContent><p className="text-muted-foreground leading-relaxed">{step.description}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <p className="text-foreground leading-relaxed"><strong>Works with:</strong> {content.worksWith}</p>
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="container-custom max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">{content.whoItIsFor.heading}</h2>
          <ul className="space-y-4 list-disc pl-6 text-muted-foreground leading-relaxed">
            {content.whoItIsFor.items.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-8">Frequently asked questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {content.faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-10">Related services</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((service, index) => {
              const Icon = relatedServiceIcons[service.slug];
              return (
                <ServiceCard
                  key={service.slug}
                  title={service.label}
                  description={service.headline}
                  icon={Icon}
                  href={`/services/${service.slug}`}
                  index={index}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
