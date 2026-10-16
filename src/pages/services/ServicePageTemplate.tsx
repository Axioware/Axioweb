import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";
import CTASection from "@/components/CTASection";
import VoiceAgentDemo from "@/components/VoiceAgentDemo";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SEO, { generateBreadcrumbSchema, generateFAQSchema, generateServiceSchema } from "@/components/SEO";
import ServicePageExpansion, { type ServicePageExpansionData } from "@/components/services/ServicePageExpansion";

export interface ServicePageContent {
  slug: string;
  label: string;
  homeHeadline?: string;
  h1: string;
  subhead: string;
  metaTitle: string;
  metaDescription: string;
  whatItDoes: string[];
  faqs: { question: string; answer: string }[];
  showReceptionistDemo?: boolean;
  expansion?: ServicePageExpansionData;
}

export const servicePages: Record<string, ServicePageContent> = {
  "ai-receptionist": {
    slug: "ai-receptionist",
    label: "AI Receptionist",
    homeHeadline: "Never miss a call again.",
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
      { question: "Will callers know it is an AI?", answer: "That depends on how you set it up. We can have it say at the start that it is an AI assistant, and we recommend being open about it." },
      { question: "What happens if it cannot answer a question?", answer: "It takes a message with the caller's details or transfers the call to your team, depending on the rules we set with you." },
      { question: "Does it work after hours?", answer: "Yes. It answers whenever a call comes in, including evenings, weekends, and when your team is busy." },
      { question: "Can it book into my existing calendar?", answer: "We connect it to your calendar or booking tool so it only offers times that are open. Ask us about your specific tool." },
    ],
    expansion: {
      problem: {
        heading: "What happens when nobody can answer the phone",
        paragraphs: [
          "Your front desk is busy with the person in front of them. The phone rings anyway: at lunch, after closing, and while your team is on another call.",
          "Most people who reach voicemail do not leave a message. They call the next business on their list, and the call you missed was often someone asking to book.",
        ],
      },
      whatItDoesHeading: "What your AI receptionist handles",
      whatItDoes: [
        { title: "Answers every call", description: "Picks up right away, day and night, including when your team is busy or the office is closed." },
        { title: "Answers common questions", description: "Covers your services, hours, location, and policies using the information you give us." },
        { title: "Books and reschedules", description: "Checks your calendar, offers open times, confirms the booking, and texts the caller a confirmation." },
        { title: "Logs everything", description: "Sends caller details and a summary of each call to your CRM, so nothing depends on someone's notes." },
        { title: "Hands over when needed", description: "Transfers the call or takes a message when the caller needs a person." },
      ],
      example: {
        heading: "What a call looks like",
        label: "Illustrative example",
        items: [
          "Caller: Hi, I'd like to book a cleaning for next week.",
          "Receptionist: Of course. Are you a new or existing patient?",
          "Caller: New.",
          "Receptionist: Welcome. I have Tuesday at 10:00 or Thursday at 2:30. Which works better?",
          "Caller: Thursday.",
          "Receptionist: Booked for Thursday at 2:30. I'm sending a confirmation to your phone now, and the details are with the team.",
        ],
      },
      howItWorks: {
        heading: "How your AI receptionist gets set up",
        steps: [
          { title: "We learn how you handle calls.", description: "Your services, hours, common questions, booking rules, and when a call should go to a person." },
          { title: "We build and test your receptionist.", description: "We set the voice, connect your calendar and CRM, and run test calls on real scenarios." },
          { title: "It goes live and we review the calls.", description: "We go through real calls with you and adjust answers and handoffs." },
        ],
      },
      worksWith: "Your calendar and CRM, including GoHighLevel, Salesforce, and Calendly.",
      whoItIsFor: {
        heading: "Who uses an AI receptionist",
        items: [
          "Dental clinics: New patient calls, bookings, reschedules, and basic questions while the front desk is with patients.",
          "Insurance agencies: Quote requests and callback details captured while agents are on other calls.",
          "Other service businesses: Any business where a call usually means a booking or a quote request.",
        ],
      },
      faqs: [
        { question: "Will callers know it is an AI?", answer: "That depends on how you set it up. We can have it say at the start that it is an AI assistant, and we recommend being open about it." },
        { question: "What happens if it cannot answer a question?", answer: "It takes a message with the caller's details or transfers the call to your team, depending on the rules we set with you." },
        { question: "Does it work after hours?", answer: "Yes. It answers whenever a call comes in, including evenings, weekends, and when your team is busy." },
        { question: "Can it book into my existing calendar?", answer: "We connect it to your calendar or booking tool so it only offers times that are open. Ask us about your specific tool." },
      ],
      relatedServices: ["automated-follow-ups", "whatsapp-and-chat-agents", "crm-and-workflow-setup"],
    },
  },
  "ai-lead-generation": {
    slug: "ai-lead-generation",
    label: "AI Lead Generation",
    homeHeadline: "Too many hours go to the wrong leads.",
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
      { question: "How does it decide which businesses are a fit?", answer: "We agree on your criteria first: type of business, size, location, services, and any deal-breakers. The system scores each prospect against them and records the reasons, so you can review and adjust." },
      { question: "Does the service contact prospects?", answer: "It drafts the first message for each prospect. Whether messages are sent automatically or reviewed by you first is your choice." },
      { question: "What information do I receive?", answer: "A short list of qualified prospects with a score, the reasoning, the evidence found, and a draft message, plus a weekly report." },
      { question: "Where does the prospect data come from?", answer: "Public sources such as business websites and listings, and lead databases such as Apollo.io." },
    ],
    expansion: {
      problem: {
        heading: "Why prospecting takes up your week",
        paragraphs: [
          "Finding prospects is slow. Someone searches directories and LinkedIn, opens websites, guesses who might be a fit, and writes messages one at a time.",
          "Much of that time goes to businesses that were never a match: the wrong size, the wrong service, or not in a position to buy. The hours are gone before the first real conversation.",
        ],
      },
      whatItDoesHeading: "What you get",
      whatItDoes: [
        { title: "Finds matching businesses", description: "Builds a list from your ideal customer profile: type of business, size, location, and services." },
        { title: "Researches each company", description: "Reads the website and public information to understand what the business does before anyone reaches out." },
        { title: "Scores and explains", description: "Rates each prospect against your criteria and records why. Businesses that clearly do not fit are dropped, so they never reach your team." },
        { title: "Writes the first message", description: "Drafts a personalized opening message based on what the research found." },
        { title: "Delivers a short list", description: "Sends the qualified prospects with their scores and reasoning, plus a weekly report." },
      ],
      example: {
        heading: "What a scored prospect looks like",
        label: "Illustrative example, not a real business",
        items: [
          "Prospect A: Independent dental practice, two dentists, takes new patient bookings online.",
          "Score: 8 out of 10.",
          "Why: Matches target size and service. No sign of after-hours phone coverage.",
          "Draft opener: \"Hi [Name], I saw you take new patient bookings online. Do calls outside office hours get answered?\"",
          "Prospect B: Dental group with more than 40 locations and a central call center.",
          "Result: Disqualified. Outside the target size.",
        ],
      },
      howItWorks: {
        heading: "How lead generation gets set up",
        steps: [
          { title: "We define your ideal customer.", description: "Who you sell to, what makes a good fit, and what rules a prospect out." },
          { title: "We build the research and scoring.", description: "We set up the research steps and scoring rules, then test them on a sample list with you." },
          { title: "You get a short list on a schedule.", description: "Qualified prospects arrive with scores and reasoning, plus a weekly report. We tune the criteria as you give feedback." },
        ],
      },
      worksWith: "Apollo.io, Instantly, Google Sheets, GoHighLevel, and n8n.",
      whoItIsFor: {
        heading: "Who uses AI lead generation",
        items: [
          "Service businesses that sell to other businesses and need a steady list of qualified prospects.",
          "Agencies and consultants who do their prospecting by hand today.",
          "Sales teams that want to spend their time on conversations instead of research.",
        ],
      },
      faqs: [
        { question: "How does it decide which businesses are a fit?", answer: "We agree on your criteria first: type of business, size, location, services, and any deal-breakers. The system scores each prospect against them and records the reasons, so you can review and adjust." },
        { question: "Does the service contact prospects?", answer: "It drafts the first message for each prospect. Whether messages are sent automatically or reviewed by you first is your choice." },
        { question: "What information do I receive?", answer: "A short list of qualified prospects with a score, the reasoning, the evidence found, and a draft message, plus a weekly report." },
        { question: "Where does the prospect data come from?", answer: "Public sources such as business websites and listings, and lead databases such as Apollo.io." },
      ],
      relatedServices: ["linkedin-bdr", "outbound-ai-calling", "automated-follow-ups"],
    },
  },
  "linkedin-bdr": {
    slug: "linkedin-bdr",
    label: "LinkedIn BDR",
    homeHeadline: "Spend your time on calls, not on LinkedIn messages.",
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
      { question: "Will the messages sound automated?", answer: "Messages are short and specific to the person, and we write them with you so they sound like you. When a prospect wants a real conversation, it goes to you." },
      // TODO: OWNER TO CONFIRM whether the Sales Navigator advice matches how you work.
      { question: "Do I need LinkedIn Sales Navigator?", answer: "It helps with precise targeting. We will recommend the setup that fits your audience." },
      // TODO: OWNER TO CONFIRM FAQ 3 and FAQ 4 wording before publishing.
      { question: "Who handles the replies?", answer: "Common replies are handled for you, and anything that needs a real conversation is passed to you." },
      { question: "Is this safe for my LinkedIn account?", answer: "LinkedIn limits automated activity, so we keep outreach at a steady, modest daily volume and avoid aggressive tactics. No tool can remove all risk to an account." },
    ],
    expansion: {
      problem: {
        heading: "Why LinkedIn outreach stalls",
        paragraphs: [
          "LinkedIn works for business development, but it takes steady daily effort: finding the right people, sending requests, following up, and replying quickly.",
          "When work gets busy, outreach is the first thing to stop. Replies sit unanswered and conversations go cold. Results come from consistency, and consistency is hard when your schedule is full.",
        ],
      },
      whatItDoesHeading: "What we handle on LinkedIn",
      whatItDoes: [
        { title: "Targets the right people", description: "Builds your prospect list from your ideal customer profile: role, industry, company size, and location." },
        { title: "Connects and messages daily", description: "Sends connection requests and opening messages at a steady daily pace." },
        { title: "Handles replies and follow-ups", description: "Responds to common replies and follows up with people who go quiet." },
        { title: "Books meetings", description: "Moves interested prospects to a booking link and puts the meeting on your calendar." },
        { title: "Leaves real conversations to you", description: "When a prospect wants to talk in depth, you take over with the full history in front of you." },
      ],
      example: {
        heading: "What an outreach sequence looks like",
        label: "Illustrative example",
        ordered: true,
        items: [
          "Day 1: A short connection request that mentions something specific to their role.",
          "Day 3: After they accept, a brief message about a problem relevant to their business, ending with one question.",
          "Day 7: If there is no reply, one follow-up from a different angle.",
          "When someone replies with interest: They get a booking link, and the meeting appears in your calendar.",
        ],
      },
      howItWorks: {
        heading: "How LinkedIn outreach gets set up",
        steps: [
          { title: "We define who to reach and what to say.", description: "Your ideal customer, your offer, and the tone you want in messages." },
          { title: "We set up and test the outreach.", description: "Profile review, message drafts, targeting, and a test run with a small group." },
          { title: "Outreach runs daily and you see the results.", description: "You can see the conversations and booked meetings, and we adjust messaging based on the replies." },
        ],
      },
      worksWith: "LinkedIn, Sales Navigator, GoHighLevel, n8n, and Zapier.",
      whoItIsFor: {
        heading: "Who uses LinkedIn BDR",
        items: [
          "Founders and owners who know LinkedIn works but do not have time for it.",
          "Agencies and service firms that sell to decision makers.",
          "Professional businesses that want a steady flow of conversations without a full-time hire.",
        ],
      },
      faqs: [
        { question: "Will the messages sound automated?", answer: "Messages are short and specific to the person, and we write them with you so they sound like you. When a prospect wants a real conversation, it goes to you." },
        // TODO: OWNER TO CONFIRM whether the Sales Navigator advice matches how you work.
        { question: "Do I need LinkedIn Sales Navigator?", answer: "It helps with precise targeting. We will recommend the setup that fits your audience." },
        // TODO: OWNER TO CONFIRM FAQ 3 and FAQ 4 wording before publishing.
        { question: "Who handles the replies?", answer: "Common replies are handled for you, and anything that needs a real conversation is passed to you." },
        { question: "Is this safe for my LinkedIn account?", answer: "LinkedIn limits automated activity, so we keep outreach at a steady, modest daily volume and avoid aggressive tactics. No tool can remove all risk to an account." },
      ],
      relatedServices: ["ai-lead-generation", "automated-follow-ups", "crm-and-workflow-setup"],
    },
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
            generateBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: service.label, url: canonical },
            ]),
            generateFAQSchema(service.expansion?.faqs ?? service.faqs),
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

      {service.showReceptionistDemo && (
        <>
          <section className="section-padding bg-secondary/30">
            <div className="container-custom">
              <div className="mx-auto max-w-5xl rounded-2xl border border-border/50 bg-card p-6 md:p-8 text-center">
                <p className="font-display text-3xl md:text-4xl font-bold text-foreground">69% of callers who reach voicemail hang up without leaving a message.</p>
                <p className="mt-3 text-sm text-muted-foreground">Source: <a className="underline underline-offset-4 hover:text-accent" href="https://moneypenny.com/us/resources/news/small-business-call-report/" target="_blank" rel="noreferrer">Moneypenny Small Business Call Report</a></p>
                {/* TODO: Check the report's publication date. */}
              </div>
            </div>
          </section>
          <VoiceAgentDemo />
        </>
      )}

      {service.expansion ? (
        <ServicePageExpansion
          content={service.expansion}
          relatedServices={service.expansion.relatedServices.map((slug) => {
            const relatedService = servicePages[slug];
            return {
              slug,
              label: relatedService.label,
              headline: relatedService.homeHeadline ?? "",
            };
          })}
        />
      ) : <>
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
      </>}

      <CTASection
        title="Talk about your service needs"
        description="Tell us how your team handles calls, leads, and appointments."
        buttonLabel="Book a 15-minute call"
      />
    </Layout>
  );
}
