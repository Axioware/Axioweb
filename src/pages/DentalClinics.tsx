import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Bell, MessageSquare, Workflow } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";
import CTASection from "@/components/CTASection";
import VoiceAgentDemo from "@/components/VoiceAgentDemo";
import SEO, { generateBreadcrumbSchema, generateFAQSchema, generateServiceSchema } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ServiceCard from "@/components/ServiceCard";
import { useBookCallHref } from "@/lib/booking";

const description = "An AI receptionist for dental clinics that answers every call, books appointments, and passes patient details to your team, including after hours.";
const faqs = [
  { question: "Will patients know it is an AI?", answer: "That depends on how you set it up. We can have it say at the start that it is an AI assistant, and we recommend being open about it." },
  { question: "What if a patient has an urgent problem?", answer: "It does not give clinical advice. When a caller describes something urgent, it passes the call to your team straight away or takes their details for an immediate callback, following the rules you set with us." },
  // TODO: OWNER TO CONFIRM FAQ 3 wording about practice management system connections.
  { question: "Can it book into our practice management software?", answer: "We confirm what we can connect to before we start. If direct booking is not possible for your system, the receptionist takes the patient's details and preferred time and sends them to your team to confirm." },
  // TODO: OWNER TO CONFIRM FAQ 4 wording about patient information handling.
  { question: "How is patient information handled?", answer: "We collect only the details needed to book and call back. We agree with you how call data is stored, who can see it, and how long it is kept." },
  { question: "Does it work after hours?", answer: "Yes. It answers whenever a call comes in, including evenings, weekends, and when your team is busy." },
  { question: "What happens if it cannot answer a question?", answer: "It takes a message with the caller's details or transfers the call to your team, depending on the rules we set with you." },
];
const tasks = [
  ["New patient enquiries", "Takes the patient's name, contact details, and what they are looking for, then books a first appointment."],
  ["Booking and changes", "Books, reschedules, and confirms visits, and texts the patient a confirmation."],
  ["Common questions", "Answers questions about opening hours, location, services, and the fee and policy information you give us."],
  ["Urgent calls", "Does not give clinical advice. When a caller describes something urgent, it passes the call to your team straight away or takes their details for an immediate callback, following the rules you set."],
  ["Messages and callbacks", "When a caller needs a person, it takes a clear message so your team can call back."],
  ["Call records", "Logs every call with the details, in your CRM or sent to your team."],
];
const conversations = [
  { title: "New patient booking", lines: ["Caller: Hi, I'd like to book a check-up.", "Receptionist: Of course. Have you visited us before?", "Caller: No, I'm new.", "Receptionist: Welcome. I have Tuesday at 10:00 or Thursday at 2:30. Which suits you?", "Caller: Thursday.", "Receptionist: Booked for Thursday at 2:30. I'm texting you a confirmation now, and the team has your details."] },
  { title: "Urgent call", lines: ["Caller: I have a bad toothache and I'd like to see someone today.", "Receptionist: I'm sorry to hear that. I can't give clinical advice, but I'll pass this to the team right away. Can I take your name and the best number to reach you?", "Caller: Sam, and it's [number].", "Receptionist: Thank you, Sam. The team will call you back as soon as possible."] },
];
const serviceLinks = [
  { label: "Automated Follow-Ups", href: "/services/automated-follow-ups", text: "The lead went quiet and nobody followed up.", icon: Bell },
  { label: "WhatsApp and Chat Agents", href: "/services/whatsapp-and-chat-agents", text: "Messages pile up when your team is busy.", icon: MessageSquare },
  { label: "CRM and Workflow Setup", href: "/services/crm-and-workflow-setup", text: "Your tools do not talk to each other.", icon: Workflow },
];

export default function DentalClinics() {
  const location = useLocation();
  const contactHref = useBookCallHref();
  const structuredData = { "@graph": [
    generateServiceSchema({ name: "AI Receptionist for Dental Clinics", description, url: "https://axioware.tech/ai-receptionist-for-dental-clinics" }),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "AI Receptionist for Dental Clinics", url: "/ai-receptionist-for-dental-clinics" }]),
  ] };
  return <Layout>
    <SEO title="AI Receptionist for Dental Clinics | Axioware" titleIsComplete description={description} canonical="/ai-receptionist-for-dental-clinics" ogLocale="en_GB" structuredData={structuredData} />
    <section className="relative min-h-[calc(100svh-4rem)] md:min-h-[calc(100svh-5rem)] py-12 md:py-16 flex items-center justify-center overflow-hidden">
      <AnimatedHeroBackground />
      <div className="container-custom relative z-10 text-center"><div className="max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 text-white text-sm font-medium rounded-full mb-6 border border-white/20">AI Receptionist for Dental Clinics</span>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">Never miss a patient call again.</h1>
        <p className="text-lg md:text-xl text-white/85 mb-10 leading-relaxed">Your AI receptionist answers every call to your practice, books appointments, and passes the details to your team. It works while your front desk is with a patient and after the practice closes.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="xl" className="bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/30"><Link to={contactHref}>Book a 15-minute call <ArrowRight className="w-5 h-5 ml-2" /></Link></Button>
          <Button asChild size="xl" variant="hero-outline"><a href="#demo">Hear a live demo</a></Button>
        </div>
      </div></div>
    </section>
    <section className="section-padding bg-secondary/30"><div className="container-custom"><div className="mx-auto max-w-5xl rounded-2xl border border-border/50 bg-card p-6 md:p-8 text-center">
      <p className="font-display text-3xl md:text-4xl font-bold text-foreground">69% of callers who reach voicemail hang up without leaving a message.</p>
      <p className="mt-3 text-sm text-muted-foreground">Source: <a className="underline underline-offset-4 hover:text-accent" href="https://moneypenny.com/us/resources/news/small-business-call-report/" target="_blank" rel="noreferrer">Moneypenny Small Business Call Report</a></p>
    </div></div></section>
    <div id="demo"><VoiceAgentDemo showPromo={false} /></div>
    <section className="section-padding bg-background"><div className="container-custom max-w-4xl">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">What happens to calls when the front desk is busy</h2>
      <p className="text-muted-foreground leading-relaxed mb-4">Your team is checking in a patient, handling a payment, or talking to someone on another line. The phone keeps ringing: first thing in the morning, at lunch, and after you close.</p>
      <p className="text-muted-foreground leading-relaxed">Most people who reach voicemail do not leave a message. A new patient who cannot get through will often call another practice, and you may never know they tried.</p>
    </div></section>
    <section className="section-padding bg-secondary/30"><div className="container-custom">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-10">What your dental AI receptionist handles</h2>
      <div className="grid gap-4 md:grid-cols-2 max-w-5xl mx-auto">{tasks.map(([title, text]) => <Card key={title}><CardHeader><CardTitle className="text-lg">{title}</CardTitle></CardHeader><CardContent><p className="text-muted-foreground leading-relaxed">{text}</p></CardContent></Card>)}</div>
    </div></section>
    <section className="section-padding bg-background"><div className="container-custom max-w-5xl">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-10">What a call looks like</h2>
      <div className="grid gap-6 md:grid-cols-2">{conversations.map((chat) => <Card key={chat.title}><CardHeader><CardTitle className="text-xl">{chat.title}</CardTitle><p className="text-sm font-medium text-accent">Illustrative example</p></CardHeader><CardContent><ul className="space-y-3 text-muted-foreground leading-relaxed">{chat.lines.map((line) => <li key={line}>{line}</li>)}</ul></CardContent></Card>)}</div>
    </div></section>
    <section className="section-padding bg-secondary/30"><div className="container-custom max-w-4xl"><h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Missed calls and no-shows, followed up</h2><p className="text-muted-foreground leading-relaxed">Add automatic follow-ups: a text to callers who did not get through, reminders before appointments, and a message to rebook when someone does not attend. <Link className="text-accent underline underline-offset-4" to={`/services/automated-follow-ups${location.search}`}>See automated follow-ups</Link></p></div></section>
    <section className="section-padding bg-background"><div className="container-custom"><h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-10">How your dental AI receptionist gets set up</h2><div className="grid gap-6 md:grid-cols-3">{[
      ["We learn how your practice handles calls.", "Opening hours, treatments, booking rules, what counts as urgent, and when a call goes to a person."],
      ["We build and test it with your scenarios.", "Voice, calendar connection, and test calls, including urgent and awkward ones."],
      ["It goes live and we review real calls with you.", "You hear actual calls, and we adjust answers and handoffs."],
    ].map(([title, text], i) => <Card key={title}><CardHeader><p className="text-sm font-semibold text-accent">Step {i + 1}</p><CardTitle className="text-lg leading-relaxed">{title}</CardTitle></CardHeader><CardContent><p className="text-muted-foreground leading-relaxed">{text}</p></CardContent></Card>)}</div>
      <div className="max-w-5xl mx-auto mt-6 rounded-xl border border-border/60 bg-secondary/30 px-5 py-4 text-sm leading-relaxed text-muted-foreground"><span className="font-semibold text-foreground">Works with: </span>Your calendar and CRM, including GoHighLevel. For practice management software, we confirm what we can connect to before we start.</div>
      {/* TODO: OWNER TO CONFIRM practice management software wording before publishing. */}
    </div></section>
    <section className="section-padding bg-secondary/30"><div className="container-custom"><h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-10">Who uses an AI receptionist in a dental practice</h2><div className="grid gap-4 md:grid-cols-3 max-w-5xl mx-auto">{[
      "Independent practices with a small front desk team.",
      "Practice owners and managers who want calls answered without adding headcount.",
      "Practices that lose calls during busy periods, lunch, and after hours.",
    ].map((item) => <Card key={item}><CardContent className="p-6 text-muted-foreground leading-relaxed">{item}</CardContent></Card>)}</div></div></section>
    <section className="section-padding bg-background"><div className="container-custom max-w-3xl"><h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-8">Frequently asked questions</h2><Accordion type="single" collapsible className="w-full">{faqs.map((faq, i) => <AccordionItem key={faq.question} value={`faq-${i}`}><AccordionTrigger className="text-left">{faq.question}</AccordionTrigger><AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>
    <section className="section-padding bg-secondary/30"><div className="container-custom"><h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-10">Related services</h2><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{serviceLinks.map((service, i) => <ServiceCard key={service.href} title={service.label} description={service.text} icon={service.icon} href={service.href} index={i} />)}</div></div></section>
    <CTASection title="Want to hear it handle your calls?" description="" />
  </Layout>;
}
