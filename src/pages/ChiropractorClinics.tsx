import { Link, useLocation } from "react-router-dom";
import {
  ArrowRight,
  CalendarCheck,
  Clock3,
  Headset,
  PhoneCall,
  ShieldCheck,
  UserRoundPlus,
} from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";
import SEO, {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateServiceSchema,
} from "@/components/SEO";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useBookCallHref } from "@/lib/booking";

const pagePath = "/ai-receptionist-for-chiropractors";
const description =
  "Answer more new-patient calls and book chiropractic visits, even when your front desk is busy or your clinic is closed. Hear a sample call and book a free demo.";

const faqs = [
  {
    question: "Can it book chiropractic appointments?",
    answer:
      "It can collect appointment preferences and book when your calendar connection supports it. We confirm your scheduling setup and booking rules before launch.",
  },
  {
    question: "What happens when someone calls after hours?",
    answer:
      "You choose the call flow. The receptionist can answer common questions, collect new-patient details, and handle appointment requests according to the hours and rules we set with you.",
  },
  {
    question: "Does it provide chiropractic or medical advice?",
    answer:
      "No. It follows the information you approve, does not diagnose or recommend treatment, and can route urgent or clinical questions to your team using your escalation instructions.",
  },
  {
    question: "Will it replace my front-desk team?",
    answer:
      "It is designed to help with incoming calls and routine requests so your team can stay focused on patients in the clinic. You decide which calls should be passed to a person.",
  },
  {
    question: "How is pricing determined?",
    answer:
      "We discuss your expected call volume, coverage hours, booking flow, and any required connections before sharing a quote. Book a free demo to review the setup and pricing for your clinic.",
  },
];

const capabilities = [
  {
    icon: UserRoundPlus,
    title: "Capture new-patient enquiries",
    description:
      "Gather a caller's contact details and appointment preferences when your team cannot get to the phone.",
  },
  {
    icon: CalendarCheck,
    title: "Help book and change visits",
    description:
      "Handle appointment requests and changes in line with the scheduling access and rules agreed for your clinic.",
  },
  {
    icon: Clock3,
    title: "Answer beyond front-desk hours",
    description:
      "Give callers a way to reach your clinic after hours, during lunch, and when staff are helping patients.",
  },
  {
    icon: Headset,
    title: "Hand off when a person is needed",
    description:
      "Route calls or capture a clear callback request for clinical questions and situations your team should handle.",
  },
];

const setupSteps = [
  {
    title: "Map your call flow",
    description:
      "We learn your hours, common questions, appointment rules, and which calls should go to a staff member.",
  },
  {
    title: "Configure and test",
    description:
      "We set up the receptionist around your clinic's information and test typical new-patient and scheduling scenarios.",
  },
  {
    title: "Review before going live",
    description:
      "You review the experience and agree on the call handling before the receptionist answers for your clinic.",
  },
];

export default function ChiropractorClinics() {
  const location = useLocation();
  const bookingHref = useBookCallHref();
  const structuredData = {
    "@graph": [
      generateServiceSchema({
        name: "AI Receptionist for Chiropractic Clinics",
        description,
        url: `https://axioware.tech${pagePath}`,
      }),
      generateFAQSchema(faqs),
      generateBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "AI Receptionist for Chiropractors", url: pagePath },
      ]),
    ],
  };

  return (
    <Layout>
      <SEO
        title="AI Receptionist for Chiropractors | Axioware"
        titleIsComplete
        description={description}
        canonical={pagePath}
        structuredData={structuredData}
      />

      <section className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden py-16 md:min-h-[calc(100svh-5rem)] md:py-20">
        <AnimatedHeroBackground />
        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white">
              For chiropractic clinics
            </span>
            <h1 className="mb-6 font-display text-4xl font-bold text-white md:text-6xl">
              Turn missed calls into booked chiropractic visits.
            </h1>
            <p className="mx-auto mb-9 max-w-3xl text-lg leading-relaxed text-white/85 md:text-xl">
              Answer new-patient enquiries, help callers book an adjustment, and
              keep the conversation going when your front desk is busy or the
              clinic is closed.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="xl" className="bg-[#FFB703] text-[#102A43] hover:bg-[#E6A500]">
                <Link to={bookingHref}>
                  Book a free demo <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="xl" variant="hero-outline">
                <Link to="/#sample-calls">Hear a sample call</Link>
              </Button>
            </div>
            <p className="mt-8 text-sm text-white/70">
              New-patient calls · Appointment requests · After-hours coverage
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              Every call is a chance to help someone get started
            </p>
            <h2 className="mb-5 font-display text-3xl font-bold md:text-4xl">
              Patients call while your team is already caring for someone.
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              A patient is checking in. Another is asking a question at the desk.
              Meanwhile, a new patient is calling to ask about booking. If no one
              can answer, they may try another clinic.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map(({ icon: Icon, title, description: detail }) => (
              <Card key={title} className="h-full">
                <CardHeader>
                  <Icon className="mb-2 h-6 w-6 text-accent" aria-hidden="true" />
                  <CardTitle className="text-lg">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">{detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="sample-call" className="section-padding scroll-mt-24 bg-secondary/30">
        <div className="container-custom mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">Hear a sample chiropractic call</h2>
          <p className="mb-7 leading-relaxed text-muted-foreground">
            Review illustrative call scripts for new-patient intake, common questions, and after-hours requests.
          </p>
          <Button asChild size="xl" className="bg-[#FFB703] text-[#102A43] hover:bg-[#E6A500]">
            <Link to="/#sample-calls">
              Hear sample calls <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              Made for the way your clinic works
            </p>
            <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
              Helpful on the phone. Clear about its limits.
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Your receptionist uses the clinic information and call rules you
              approve. It does not replace clinical judgement or make treatment
              decisions.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
            {[
              {
                title: "Use your clinic's answers",
                text: "Share approved details about hours, location, services, and appointment policies.",
              },
              {
                title: "Choose when to involve staff",
                text: "Set the situations that should be transferred or sent to your team for a callback.",
              },
              {
                title: "Confirm the booking setup",
                text: "We check your calendar and workflow before confirming what can be booked automatically.",
              },
            ].map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <ShieldCheck className="mb-2 h-6 w-6 text-accent" aria-hidden="true" />
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
              From your current call flow to a tested receptionist
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              We agree on the details with you before anything answers calls for
              your clinic.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
            {setupSteps.map((step, index) => (
              <Card key={step.title}>
                <CardHeader>
                  <p className="text-sm font-semibold text-accent">Step {index + 1}</p>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="mx-auto grid max-w-5xl items-center gap-8 rounded-3xl border border-border/60 bg-card p-7 shadow-card md:grid-cols-[1fr_auto] md:p-10">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                Straightforward pricing conversation
              </p>
              <h2 className="mb-4 font-display text-3xl font-bold">
                Get pricing based on your clinic's call flow.
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Call volume, coverage hours, booking requirements, and
                connections can affect the setup. We will review what you need
                and share a quote before you decide.
              </p>
            </div>
            <Button asChild size="xl" className="bg-accent text-white hover:bg-accent/90">
              <Link to={bookingHref}>Discuss pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom max-w-3xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold md:text-4xl">
            Questions from chiropractic clinics
          </h2>
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

      <section className="section-padding bg-primary text-center">
        <div className="container-custom max-w-3xl">
          <PhoneCall className="mx-auto mb-5 h-9 w-9 text-primary-light" aria-hidden="true" />
          <h2 className="mb-5 font-display text-3xl font-bold text-primary-foreground md:text-4xl">
            Hear how it could handle calls for your clinic.
          </h2>
          <p className="mb-8 leading-relaxed text-primary-foreground/80">
            Walk through your hours, appointment flow, and the calls you want
            answered. We will show you a sample and discuss a setup for your team.
          </p>
          <Button asChild size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link to={bookingHref}>Book a free demo</Link>
          </Button>
          <p className="mt-4 text-sm text-primary-foreground/65">
            <Link
              to={`/services/ai-receptionist${location.search}`}
              className="underline underline-offset-4 hover:text-primary-foreground"
            >
              Learn about Axioware's AI receptionist
            </Link>
          </p>
        </div>
      </section>
    </Layout>
  );
}
