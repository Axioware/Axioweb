import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SEO, { generateFAQSchema, generateServiceSchema } from "@/components/SEO";

export interface ServicePageContent {
  slug: string;
  label: string;
  h1: string;
  subhead: string;
  metaTitle: string;
  metaDescription: string;
  whatItDoes: string[];
  faqs: { question: string; answer: string }[];
  showReceptionistDemo?: boolean;
}

export const servicePages: Record<string, ServicePageContent> = {
  "ai-receptionist": {
    slug: "ai-receptionist",
    label: "AI Receptionist",
    h1: "Never miss a call again.",
    subhead: "Your AI receptionist answers every call, handles common questions, and books appointments into your calendar. Your staff step in only when needed.",
    metaTitle: "AI Receptionist for Small Businesses",
    metaDescription: "An AI receptionist that answers every call, handles common questions, and books appointments into your calendar. Staff step in only when needed.",
    showReceptionistDemo: true,
    whatItDoes: [
      "Answers every call, day and night",
      "Handles common questions about your services, hours, and policies",
      "Books, reschedules, and confirms appointments in your calendar",
      "Sends the details to your CRM and texts a confirmation",
      "Hands the call to your staff when a person is needed",
    ],
    faqs: [
      { question: "What questions can the receptionist answer?", answer: "It can answer common questions about your services, hours, and policies using the information provided for your business." },
      { question: "Can it book or reschedule appointments?", answer: "It can book, reschedule, and confirm appointments in your calendar." },
      { question: "When does a staff member step in?", answer: "The receptionist hands the call to your staff when a person is needed." },
    ],
  },
  "ai-lead-generation": {
    slug: "ai-lead-generation",
    label: "AI Lead Generation",
    h1: "Stop chasing leads that were never going to buy.",
    subhead: "We research each prospect, score them against what you look for, and send you a short list with the reasoning behind each one.",
    metaTitle: "AI Lead Generation",
    metaDescription: "We find businesses that fit your ideal customer, research and score each one, and send you a short list worth contacting.",
    whatItDoes: [
      "Finds businesses that match your ideal customer",
      "Researches each company before anyone contacts it",
      "Scores every prospect against your criteria and shows the reasoning",
      "Writes a personalized first message for each one",
      "Sends you a short list and a weekly report",
    ],
    faqs: [
      { question: "How does it decide which businesses are a fit?", answer: "It compares each prospect with the ideal customer profile and criteria you provide, and shows the reasoning behind its score." },
      { question: "Does the service contact prospects?", answer: "It researches and qualifies prospects, then prepares a personalized first message for each one." },
      { question: "What information do I receive?", answer: "You receive a short list of prospects with the reasoning behind each one, along with a weekly report." },
    ],
  },
  "linkedin-bdr": {
    slug: "linkedin-bdr",
    label: "LinkedIn BDR",
    h1: "Spend your time on calls, not on LinkedIn messages.",
    subhead: "We run your outreach, handle the replies, and book interested prospects onto your calendar. You step in for the conversation that matters.",
    metaTitle: "LinkedIn BDR",
    metaDescription: "We run your LinkedIn outreach, handle replies, and book interested prospects onto your calendar, so you only join the meetings.",
    whatItDoes: [
      "Targets the right people based on your ideal customer profile",
      "Sends connection requests and messages every day",
      "Handles replies and follow-ups",
      "Books interested prospects onto your calendar",
      "Leaves the real conversations to you",
    ],
    faqs: [
      { question: "Who does the outreach target?", answer: "Outreach targets people who match the ideal customer profile you provide." },
      { question: "What happens when someone replies?", answer: "Replies and follow-ups are handled, with interested prospects booked onto your calendar." },
      { question: "When do I join the conversation?", answer: "You step in for the conversation with an interested prospect." },
    ],
  },
  "automated-follow-ups": {
    slug: "automated-follow-ups",
    label: "Automated Follow-Ups",
    h1: "Leads rarely say no. They go quiet.",
    subhead: "A call goes unreturned, a quote sits unanswered, a patient skips an appointment. We set up follow-ups that go out on time without adding to anyone's workload.",
    metaTitle: "Automated Follow-Ups",
    metaDescription: "Automatic follow-ups for missed calls, no-shows, and unanswered quotes, by text, email, or call, with your CRM updated each time.",
    whatItDoes: [
      "Texts back missed callers",
      "Reminds and rebooks no-shows",
      "Chases quotes that have gone unanswered",
      "Re-engages old leads on a schedule you choose",
      "Updates the CRM after every step",
    ],
    faqs: [
      { question: "Which situations can start a follow-up?", answer: "Follow-ups can start after missed calls, no-shows, unanswered quotes, or when you choose to re-engage an old lead." },
      { question: "Can the follow-up reach someone by text?", answer: "Yes. The workflows can text back missed callers and send follow-ups for the situations you select." },
      { question: "What happens in the CRM?", answer: "The CRM is updated after every step in the follow-up workflow." },
    ],
  },
  "outbound-ai-calling": {
    slug: "outbound-ai-calling",
    label: "Outbound AI Calling",
    h1: "Fill your calendar without making a single call.",
    subhead: "Our AI voice agent calls your leads, finds out who is interested, and books them straight into your calendar.",
    metaTitle: "Outbound AI Calling",
    metaDescription: "An AI voice agent that calls your leads, finds out who is interested, and books them into your calendar.",
    whatItDoes: [
      "Calls your leads or past customers",
      "Handles voicemail and common objections",
      "Works out who is interested and who is not",
      "Books interested people into your calendar",
      "Records every outcome in your CRM",
    ],
    faqs: [
      { question: "Who can the voice agent call?", answer: "It can call your leads or past customers." },
      { question: "What happens if a call reaches voicemail?", answer: "The voice agent handles voicemail and records the outcome in your CRM." },
      { question: "How are interested people scheduled?", answer: "Interested people can be booked into your calendar." },
    ],
  },
  "whatsapp-and-chat-agents": {
    slug: "whatsapp-and-chat-agents",
    label: "WhatsApp and Chat Agents",
    h1: "Messages should not wait until someone is free.",
    subhead: "Our chat agent replies straight away using your own information, and passes anything complicated to your team.",
    metaTitle: "WhatsApp and Chat Agents",
    metaDescription: "AI chat agents for WhatsApp, SMS, and your website that answer from your own information and pass complex cases to your team.",
    whatItDoes: [
      "Replies on WhatsApp, SMS, and your website chat",
      "Answers from your own information: services, prices, hours, and policies",
      "Takes bookings",
      "Flags anything complicated and passes it to your team",
      "Keeps the full conversation history",
    ],
    faqs: [
      { question: "Which channels can the chat agent reply on?", answer: "It can reply on WhatsApp, SMS, and your website chat." },
      { question: "What information does it use to answer?", answer: "It answers using your own information, such as services, prices, hours, and policies." },
      { question: "What happens when a question is complicated?", answer: "The chat agent flags the question and passes it to your team." },
    ],
  },
  "crm-and-workflow-setup": {
    slug: "crm-and-workflow-setup",
    label: "CRM and Workflow Setup",
    h1: "When your tools do not talk to each other, your team becomes the connection.",
    subhead: "We link your CRM, calendar, forms, and messaging so data moves by itself and nothing depends on someone remembering to copy it.",
    metaTitle: "CRM and Workflow Setup",
    metaDescription: "We connect your CRM, calendar, and messaging tools so leads, calls, and bookings are recorded automatically.",
    whatItDoes: [
      "Sets up your CRM, including GoHighLevel",
      "Builds pipelines and lead capture forms",
      "Connects your calendar, email, and messaging",
      "Automates repetitive steps with n8n or Zapier",
      "Moves data between your tools so nothing is copied by hand",
    ],
    faqs: [
      { question: "Which CRM can you set up?", answer: "CRM setup can include GoHighLevel." },
      { question: "What tools can the workflow connect?", answer: "Workflows can connect your CRM, calendar, forms, email, and messaging." },
      { question: "Which tools can automate repetitive steps?", answer: "The service can use n8n or Zapier to automate repetitive steps." },
    ],
  },
};

const processSteps = [
  { title: "We learn your business.", description: "A short call to cover your services, hours, and how you want things handled." },
  { title: "We build and test it.", description: "We set it up, connect your calendar and CRM, and test it with real scenarios." },
  { title: "It goes live and we keep improving it.", description: "We watch how it performs and adjust it every month." },
];

export default function ServicePageTemplate({ service }: { service: ServicePageContent }) {
  const canonical = `/services/${service.slug}`;

  return (
    <Layout>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        canonical={canonical}
        structuredData={{
          "@graph": [
            generateServiceSchema({ name: service.label, description: service.metaDescription, url: `https://axioware.tech${canonical}` }),
            generateFAQSchema(service.faqs),
          ],
        }}
      />
      <section className="relative min-h-[calc(100svh-4rem)] md:min-h-[calc(100svh-5rem)] py-12 md:py-16 flex items-center justify-center overflow-hidden">
        <AnimatedHeroBackground />
        <div className="container-custom relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 text-white text-sm font-medium rounded-full mb-6 border border-white/20">{service.label}</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">{service.h1}</h1>
            <p className="text-lg md:text-xl text-white/85 mb-10 leading-relaxed">{service.subhead}</p>
            <Button asChild size="xl" className="bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/30">
              <Link to="/contact" className="group">
                Book a 15-minute call
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-10">What it does</h2>
          <ul className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {service.whatItDoes.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl bg-card border border-border/50 p-5 text-foreground">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-10">How it works</h2>
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

      <section className="section-padding bg-background">
        <div className="container-custom text-center max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Who it is for</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">Dental clinics, insurance agencies, and other small service businesses that rely on calls, leads, and appointments.</p>
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="container-custom max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-8">Frequently asked questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {service.faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTASection buttonLabel="Book a 15-minute call" />
    </Layout>
  );
}
