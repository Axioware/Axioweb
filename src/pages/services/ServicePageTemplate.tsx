import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import IPhoneMockup from "@/components/IPhoneMockup";
import CallInterface from "@/components/CallInterface";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SEO, { generateFAQSchema, generateServiceSchema } from "@/components/SEO";

export interface ServicePageContent {
  slug: string;
  title: string;
  outcome: string;
  description: string;
  problem: string;
  handles: string[];
  audience: string;
  faqs: { question: string; answer: string }[];
  showReceptionistDemo?: boolean;
}

export const servicePages: Record<string, ServicePageContent> = {
  "ai-receptionist": {
    slug: "ai-receptionist",
    title: "AI Receptionist",
    outcome: "Answer calls, handle common questions, and book or reschedule appointments.",
    description: "An AI receptionist for small service businesses that answers calls, handles common questions, and books or reschedules appointments.",
    problem: "When calls go unanswered, people may move on before your team can call back. Staff can also lose time repeating answers and managing routine scheduling requests.",
    handles: [
      "Answers incoming calls and common questions.",
      "Collects caller details and the reason for the call.",
      "Books or reschedules appointments based on your rules.",
      "Passes requests to a staff member when needed.",
      "Shares call details with your team.",
    ],
    audience: "Dental clinics, insurance agencies, and other small service businesses that handle calls and appointments.",
    showReceptionistDemo: true,
    faqs: [
      { question: "Can it book and reschedule appointments?", answer: "It can handle booking and rescheduling using the rules and calendar access agreed for your setup." },
      { question: "What happens when a caller needs a person?", answer: "The system can hand the call or request to your staff based on the instructions set during setup." },
      { question: "Can I try the receptionist demo?", answer: "Yes. The interactive demo on this page uses the same receptionist demo shown on the home page." },
    ],
  },
  "ai-lead-generation": {
    slug: "ai-lead-generation",
    title: "AI Lead Generation",
    outcome: "Find businesses that fit your target profile and qualify them for your team.",
    description: "Lead research and qualification for small businesses, based on the customer profile and criteria you provide.",
    problem: "Building a prospect list takes time, and a long list does not show which businesses fit your offer. Your team needs useful details before deciding who to contact.",
    handles: [
      "Uses your criteria to describe a suitable business.",
      "Finds businesses that match the profile.",
      "Collects available business details for review.",
      "Checks prospects against your qualification rules.",
      "Organizes qualified prospects for your team.",
    ],
    audience: "Dental clinics, insurance agencies, and other small businesses that sell to organizations or need a more focused prospect list.",
    faqs: [
      { question: "What does the system use to qualify a lead?", answer: "It applies the target profile and qualification criteria you provide, then organizes matching prospects for review." },
      { question: "Does it contact prospects?", answer: "This service focuses on finding and qualifying prospects. Outreach can be handled separately through LinkedIn BDR or outbound calling." },
      { question: "Can I choose which businesses count as a fit?", answer: "Yes. The qualification criteria start with the business profile and requirements you share." },
    ],
  },
  "linkedin-bdr": {
    slug: "linkedin-bdr",
    title: "LinkedIn BDR",
    outcome: "Handle LinkedIn outreach and replies, then book meetings with qualified prospects.",
    description: "LinkedIn outreach support that follows your approved messaging and meeting criteria.",
    problem: "Consistent outreach takes attention every day. When replies sit unanswered or the next step is unclear, a good conversation can lose momentum.",
    handles: [
      "Uses your target profile to guide outreach.",
      "Sends outreach based on messaging you approve.",
      "Monitors replies and responds within agreed rules.",
      "Identifies prospects who meet your criteria.",
      "Books meetings when a prospect is ready.",
    ],
    audience: "Small service businesses that use LinkedIn to reach business owners, referral partners, or other professional prospects.",
    faqs: [
      { question: "Can I review the outreach message?", answer: "Yes. The outreach approach and message are agreed with you before it is used." },
      { question: "How does it decide who is qualified?", answer: "It uses the fit and meeting criteria you provide, and can flag unclear replies for your team." },
      { question: "Does it book meetings?", answer: "It can arrange a meeting when a prospect meets the agreed criteria and requests a next step." },
    ],
  },
  "automated-follow-ups": {
    slug: "automated-follow-ups",
    title: "Automated Follow-Ups",
    outcome: "Send timely follow-up messages for missed calls, no-shows, quiet quotes, and old leads.",
    description: "Follow-up workflows for missed calls, no-shows, quotes that went quiet, and older leads.",
    problem: "Follow-ups are easy to miss when the day gets busy. A missed call, no-show, or unanswered quote can sit without a next step.",
    handles: [
      "Sends a message after a missed call.",
      "Follows up after an appointment no-show.",
      "Checks in on quotes that have had no reply.",
      "Reaches out to older leads based on your rules.",
      "Stops or routes the sequence when a person replies.",
    ],
    audience: "Dental clinics, insurance agencies, and other service businesses that need a consistent way to follow up with inquiries and customers.",
    faqs: [
      { question: "Can we choose what triggers a follow-up?", answer: "Yes. Follow-up triggers and message rules are set around the situations you want to handle." },
      { question: "Can the messages use our wording?", answer: "Messages can be drafted with your team and reviewed before a workflow is put in use." },
      { question: "What happens if someone replies?", answer: "A reply can stop the next automated message and be passed to your team, based on the workflow rules." },
    ],
  },
  "outbound-ai-calling": {
    slug: "outbound-ai-calling",
    title: "Outbound AI Calling",
    outcome: "Call your list, qualify interest, and book appointments into your calendar.",
    description: "Outbound calling workflows that contact an approved list, ask qualifying questions, and arrange appointments.",
    problem: "Calling a list takes time, and it can be hard for a team to reach everyone and record each response. Interested people may wait too long for a follow-up.",
    handles: [
      "Calls the list and follows an agreed introduction.",
      "Asks questions to understand interest.",
      "Records the prospect's answers and requested next step.",
      "Books an appointment when the prospect qualifies.",
      "Passes requests or unclear cases to your team.",
    ],
    audience: "Small service businesses with a permission-based contact list and a clear reason to call prospects or customers.",
    faqs: [
      { question: "What does the caller say?", answer: "The call flow and wording are prepared with you to reflect your offer and the questions the system should ask." },
      { question: "Can it book appointments?", answer: "It can book appointments using the calendar access and booking rules agreed for your setup." },
      { question: "Can a person take over a call?", answer: "The workflow can pass a request to your team when a caller needs help beyond its instructions." },
    ],
  },
  "whatsapp-and-chat-agents": {
    slug: "whatsapp-and-chat-agents",
    title: "WhatsApp and Chat Agents",
    outcome: "Answer customer questions and take bookings across WhatsApp, SMS, and website chat.",
    description: "Chat agents for common questions, customer details, and booking requests across WhatsApp, SMS, and website chat.",
    problem: "Messages can arrive across several channels while staff are helping other customers. A delayed reply can leave a question or booking request waiting.",
    handles: [
      "Answers common questions using information you provide.",
      "Collects details needed to respond to an inquiry.",
      "Takes booking requests through supported chat channels.",
      "Routes questions that need a staff member.",
      "Keeps conversation details available to your team.",
    ],
    audience: "Dental clinics, insurance agencies, and small service businesses that receive customer questions and booking requests by message.",
    faqs: [
      { question: "Which channels can it handle?", answer: "The service is designed for WhatsApp, SMS, and website chat, depending on the channels selected for your setup." },
      { question: "Can it answer questions about my business?", answer: "It can answer common questions using information and boundaries you provide." },
      { question: "Can a customer reach a person?", answer: "Yes. The conversation can be passed to your team when a request needs human help." },
    ],
  },
  "crm-and-workflow-setup": {
    slug: "crm-and-workflow-setup",
    title: "CRM and Workflow Setup",
    outcome: "Connect your automation to your CRM and calendar so work runs in one place.",
    description: "CRM and workflow setup that connects lead, call, messaging, and booking processes in one place.",
    problem: "When customer details are spread across tools, staff may have to copy information by hand. That makes it harder to see what happened and what needs attention next.",
    handles: [
      "Maps the information your team needs to keep.",
      "Connects agreed lead and customer workflows.",
      "Passes call and conversation details to your CRM.",
      "Connects booking steps with your calendar setup.",
      "Adds handoffs for tasks that need staff attention.",
    ],
    audience: "Small service businesses that want their calls, leads, follow-ups, and bookings to work together through their CRM and calendar.",
    faqs: [
      { question: "Can you work with our current CRM?", answer: "We first review your current CRM and workflow needs, then confirm what can be connected before work begins." },
      { question: "Which automation tools do you use?", answer: "The site currently lists n8n and Zapier. The right option depends on your existing setup and requirements." },
      { question: "Do we need to replace our calendar?", answer: "The goal is to connect the workflow to your existing calendar where it can be supported." },
    ],
  },
};

const processSteps = [
  { title: "Learn the business", description: "We learn how your team handles calls, leads, appointments, and handoffs today." },
  { title: "Build and test", description: "We set up the agreed workflow and test it with realistic examples before it goes live." },
  { title: "Go live and improve", description: "We launch the workflow, review how it behaves, and make agreed improvements." },
];

export default function ServicePageTemplate({ service }: { service: ServicePageContent }) {
  const canonical = `/services/${service.slug}`;

  return (
    <Layout>
      <SEO
        title={`${service.title} for Small Businesses`}
        description={service.description}
        canonical={canonical}
        structuredData={{
          "@graph": [
            generateServiceSchema({ name: service.title, description: service.description, url: `https://axioware.tech${canonical}` }),
            generateFAQSchema(service.faqs),
          ],
        }}
      />
      <section className="relative min-h-[calc(100svh-4rem)] md:min-h-[calc(100svh-5rem)] py-12 md:py-16 flex items-center justify-center overflow-hidden">
        <AnimatedHeroBackground />
        <div className="container-custom relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 text-white text-sm font-medium rounded-full mb-6 border border-white/20">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" /> AI Automation Service
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">{service.title}</h1>
            <p className="text-lg md:text-xl text-white/85 mb-10 leading-relaxed">{service.outcome}</p>
            <Button asChild size="xl" className="bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/30">
              <Link to="/contact" className="group">
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading badge="The problem" title="When routine work gets missed" subtitle={service.problem} />
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <SectionHeading badge="What it does" title="Work your system can handle" subtitle={service.outcome} />
          <ul className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {service.handles.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl bg-card border border-border/50 p-5 text-foreground">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          {service.showReceptionistDemo && (
            <div className="mt-12 max-w-sm mx-auto" aria-label="Interactive AI receptionist demo">
              <IPhoneMockup>
                <CallInterface />
              </IPhoneMockup>
            </div>
          )}
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading badge="How it works" title="A clear three-step process" />
          <div className="grid md:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <div key={step.title} className="rounded-2xl bg-card border border-border/50 p-6">
                <span className="text-sm font-semibold text-accent">Step {index + 1}</span>
                <h3 className="font-display text-xl font-semibold text-foreground mt-3 mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="container-custom text-center max-w-3xl">
          <SectionHeading badge="Who it is for" title="Built around your team" subtitle={service.audience} />
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom max-w-3xl">
          <SectionHeading badge="FAQ" title="Common questions" />
          <Accordion type="single" collapsible className="w-full">
            {service.faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base md:text-lg">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
