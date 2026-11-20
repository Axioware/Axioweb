import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarCheck,
  Check,
  Clock3,
  Headset,
  LockKeyhole,
  Phone,
  UserRoundPlus,
} from "lucide-react";
import Layout from "@/components/Layout";
import SEO, { generateFAQSchema } from "@/components/SEO";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useBookCallHref } from "@/lib/booking";

const faqs = [
  {
    question: "Will patients know they are speaking with an AI?",
    answer:
      "The greeting is configured with you. We recommend telling callers they are speaking with an AI receptionist and can include that in Remi's introduction.",
  },
  {
    question: "What if Remi cannot answer a question?",
    answer:
      "Remi uses clinic information that you approve. If she cannot answer, she can take a message or route the caller to a staff member according to your handoff rules.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Timing depends on the information, phone routing, calendar access, and testing your clinic needs. We confirm a timeline after reviewing your setup.",
  },
  {
    question: "Does it work with my phone number and practice software?",
    answer:
      "We review your current phone and practice systems first. We confirm supported connections for your specific setup before any work begins.",
  },
  {
    question: "Can Remi book directly into my calendar?",
    answer:
      "Direct booking depends on the calendar connection and permissions available. If it is not supported, Remi can collect appointment preferences for your team to confirm.",
  },
  {
    question: "What happens with urgent or emergency calls?",
    answer:
      "Remi does not provide clinical advice. You define the routing instructions for urgent or clinical calls, including when a call should be passed to your team.",
  },
  {
    question: "Is patient information kept secure?",
    answer:
      "Before launch, discuss what information is collected, access, retention, and any call recordings for your setup. Review the privacy policy and confirm your requirements with Axioware.",
  },
  {
    question: "Is there a long-term contract?",
    answer:
      "Contract terms are provided with your quote. Ask us to confirm the term, renewal, and cancellation details before agreeing to a service.",
  },
];

const featureGroups = [
  {
    id: "call-answering",
    title: "Calls",
    items: [
      ["Call answering", "Answer incoming calls using an introduction and call flow agreed with your clinic."],
      ["Approved questions", "Share clinic-approved details such as hours, location, and first-visit information."],
    ],
  },
  {
    id: "appointment-booking",
    title: "Scheduling",
    items: [
      ["Appointment requests", "Collect preferred appointment details and book directly only where your calendar setup supports it."],
      ["Rescheduling and cancellations", "Handle changes according to your calendar access and clinic policies."],
      ["Reminders and recalls", "Discuss reminder and rebooking workflows during setup; availability depends on your systems."],
    ],
  },
  {
    id: "new-patient-intake",
    title: "Patient communication",
    items: [
      ["New-patient intake", "Capture name, contact details, reason for calling, and preferred appointment time."],
      ["After-hours requests", "Provide a clear next step when a caller reaches the clinic outside staffed hours."],
    ],
  },
  {
    id: "staff-handoff",
    title: "Staff tools and reporting",
    items: [
      ["Human handoff", "Send urgent or complex calls to the person or team you designate."],
      ["Call summaries", "Share call details with staff through a delivery method confirmed for your setup."],
    ],
  },
];

function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  const bookingHref = useBookCallHref();

  return (
    <section className="bg-primary py-16 text-white md:py-20">
      <div className="container-custom text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-primary-light">{eyebrow}</p>
        <h1 className="mx-auto mb-5 max-w-4xl font-display text-4xl font-bold md:text-5xl">{title}</h1>
        <p className="mx-auto mb-8 max-w-3xl leading-relaxed text-white/75">{description}</p>
        <Button asChild size="xl" className="bg-[#FFB703] text-[#102A43] hover:bg-[#E6A500]">
          <Link to={bookingHref}>Book a free demo <ArrowRight className="ml-2 h-5 w-5" /></Link>
        </Button>
      </div>
    </section>
  );
}

export function ChiropractorFeatures() {
  return (
    <Layout>
      <SEO
        title="Features | Chiropractic AI Receptionist"
        description="Explore how Remi can help chiropractic clinics answer calls, capture new-patient requests, schedule visits, and hand off calls to staff."
        canonical="/features"
      />
      <PageIntro
        eyebrow="Features"
        title="More calls answered. More time for patients in the clinic."
        description="Remi supports the routine phone work around new-patient intake, scheduling, common questions, and staff handoffs."
      />
      {featureGroups.map((group, index) => (
        <section
          key={group.title}
          id={group.id}
          className={`scroll-mt-24 section-padding ${index % 2 ? "bg-secondary/30" : "bg-background"}`}
        >
          <div className="container-custom">
            <h2 className="mb-8 font-display text-3xl font-bold">{group.title}</h2>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {group.items.map(([title, description]) => (
                <Card key={title}>
                  <CardHeader>
                    <Check className="mb-2 h-6 w-6 text-accent" aria-hidden="true" />
                    <CardTitle className="text-lg">{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}
    </Layout>
  );
}

export function ChiropractorHowItWorks() {
  const steps = [
    {
      icon: Phone,
      title: "Discovery call",
      description:
        "We review your call volume, hours, common questions, appointment flow, and the calls that should go to a person.",
    },
    {
      icon: UserRoundPlus,
      title: "Share clinic details",
      description:
        "Your team provides approved service information, policies, booking rules, escalation instructions, and any required access.",
    },
    {
      icon: CalendarCheck,
      title: "Configure the call flow",
      description:
        "We set up the greeting and routine call handling around your clinic's information and the connections confirmed for your systems.",
    },
    {
      icon: Check,
      title: "Test with your team",
      description:
        "You review new-patient, scheduling, after-hours, and handoff scenarios before the system is switched on.",
    },
    {
      icon: Headset,
      title: "Go live and review",
      description:
        "Once the call flow is approved, we agree how your team will review calls and request changes.",
    },
  ];

  return (
    <Layout>
      <SEO
        title="How It Works | Chiropractic AI Receptionist"
        description="See the steps for setting up Remi with a chiropractic clinic's call flow, testing it with staff, and preparing for launch."
        canonical="/how-it-works"
      />
      <PageIntro
        eyebrow="How it works"
        title="A clear setup, tested with your team."
        description="We map your current phone process first, then configure and test the receptionist against the information and rules you approve."
      />
      <section className="section-padding bg-background">
        <div className="container-custom grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch lg:gap-12">
          <ol className="relative space-y-4 before:absolute before:bottom-8 before:left-6 before:top-8 before:w-px before:bg-gradient-to-b before:from-accent/50 before:to-border">
            {steps.map(({ icon: Icon, title, description }, index) => (
              <li key={title} className="relative flex gap-4 sm:gap-5">
                <span className="z-10 mt-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-background text-accent shadow-sm">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <Card className="flex-1 border-border/70 shadow-sm transition-shadow hover:shadow-md">
                  <CardHeader className="pb-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                      Step {index + 1}
                    </p>
                    <CardTitle className="text-lg sm:text-xl">{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ol>

          <div className="relative min-h-[460px] overflow-hidden rounded-3xl border border-border/60 bg-primary shadow-card sm:min-h-[560px] lg:min-h-full">
            <img
              src="/images/chiropractic-how-it-works.png"
              alt="A chiropractor performing a neck adjustment for a patient"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/15 to-transparent" />
            <div className="absolute left-5 right-5 top-5 rounded-2xl border border-white/20 bg-primary/50 p-4 text-white backdrop-blur-sm sm:left-6 sm:right-6 sm:top-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-light">
                Clinic-led setup
              </p>
              <p className="mt-1 font-display text-lg font-semibold">
                Your rules guide every call.
              </p>
            </div>
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/95 p-5 shadow-lg backdrop-blur-sm sm:bottom-6 sm:left-6 sm:right-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                Before go-live
              </p>
              <h2 className="mt-2 font-display text-xl font-bold text-foreground">
                Review the flow with your team.
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Test common calls, scheduling, and handoffs against the clinic
                information and rules you approve.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-secondary/30">
        <div className="container-custom grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 font-display text-3xl font-bold">What your clinic provides</h2>
            <ul className="space-y-3 text-muted-foreground">
              {[
                "Clinic hours, services, location, and approved FAQs",
                "Appointment rules, schedule access, and cancellation policies",
                "Call transfer and urgent-call instructions",
                "A point of contact for testing and review",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <LockKeyhole className="mb-4 h-6 w-6 text-accent" aria-hidden="true" />
            <h2 className="mb-3 font-display text-2xl font-bold">Before launch</h2>
            <p className="leading-relaxed text-muted-foreground">
              We review system compatibility, access, call handling, and patient
              information requirements with you. The implementation and timeline
              are confirmed before you approve the work.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export function ChiropractorPricing() {
  const bookingHref = useBookCallHref();

  return (
    <Layout>
      <SEO
        title="Pricing | Chiropractic AI Receptionist"
        description="Get a chiropractic receptionist quote based on call volume, coverage hours, booking flow, and required integrations."
        canonical="/pricing"
      />
      <PageIntro
        eyebrow="Pricing"
        title="Pricing that reflects your clinic's call flow."
        description="We review the setup before quoting, so you can understand what is included and which costs depend on your systems."
      />
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto max-w-5xl">
          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <Card className="border-primary/20">
              <CardHeader>
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">Custom quote</p>
                <CardTitle className="font-display text-3xl">Know what you are paying for.</CardTitle>
                <p className="text-muted-foreground">
                  No placeholder plan prices. Your quote follows a review of your requirements.
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    "Clinic hours and expected call volume",
                    "New-patient intake and scheduling needs",
                    "Phone, calendar, and practice-management compatibility",
                    "Handoffs, call summaries, and any requested follow-up",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-muted-foreground">
                      <Check className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button asChild size="lg" className="mt-8 bg-[#FFB703] text-[#102A43] hover:bg-[#E6A500]">
                  <Link to={bookingHref}>Discuss your clinic's pricing</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-secondary/30">
              <CardHeader>
                <Clock3 className="mb-2 h-6 w-6 text-accent" aria-hidden="true" />
                <CardTitle>What happens next?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>1. We learn how your clinic handles new and existing patient calls.</p>
                <p>2. We check the phone and scheduling connections you need.</p>
                <p>3. We share a quote and clarify scope before any commitment.</p>
                <p>4. You decide whether the proposed setup is right for your clinic.</p>
              </CardContent>
            </Card>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Specific plan rates, included minutes, setup charges, contract terms,
            and add-ons have not been provided for this site and are not listed
            as established prices. Ask for these details in writing with your quote.
          </p>
        </div>
      </section>
    </Layout>
  );
}

export function ChiropractorFAQ() {
  return (
    <Layout>
      <SEO
        title="FAQ | Chiropractic AI Receptionist"
        description="Answers to common questions about chiropractic receptionist call handling, appointment booking, setup, privacy, and pricing."
        canonical="/faq"
        structuredData={generateFAQSchema(faqs)}
      />
      <PageIntro
        eyebrow="Frequently asked questions"
        title="Answers before your demo."
        description="Understand what Remi can handle, what your clinic controls, and what we confirm before setup."
      />
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </Layout>
  );
}
