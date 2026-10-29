import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import CTASection from "@/components/CTASection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PartnersSection from "@/components/PartnersSection";
import VoiceAgentDemo from "@/components/VoiceAgentDemo";
import SEO, { generateFAQSchema } from "@/components/SEO";
import { Link, useLocation } from "react-router-dom";

const homeFAQs = [
  {
    question: "Can an AI receptionist answer calls and book appointments?",
    answer:
      "An AI receptionist can answer calls, handle common questions, and book or reschedule appointments based on the instructions and calendar access agreed for your setup.",
  },
  {
    question: "Can follow-up messages be sent automatically?",
    answer:
      "Yes. Follow-up workflows can send messages after situations such as missed calls, no-shows, quiet quotes, or older leads, based on rules agreed with your team.",
  },
  {
    question: "Who are these services for?",
    answer:
      "Axioware works with dental clinics, insurance agencies, and other small service businesses.",
  },
];

const Index = () => {
  const location = useLocation();
  return (
    <Layout>
      <SEO title="Axioware | AI Receptionist for Dental Clinics" titleIsComplete description="AI receptionists that answer your practice's calls, book appointments, and follow up with patients who did not get through. Built for dental clinics." ogLocale="en_GB" canonical="/" structuredData={generateFAQSchema(homeFAQs)} />
      <HeroSection />
      <section className="section-padding bg-secondary/30">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Built for dental clinics</h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">A dental practice lives on its phone line. We set up an AI receptionist that answers every call, books patients in, and passes urgent calls to your team.</p>
          <Link className="text-accent underline underline-offset-4" to={`/ai-receptionist-for-dental-clinics${location.search}`}>See the dental receptionist</Link>
        </div>
      </section>
      <VoiceAgentDemo />
      <ServicesSection />
      <TechnologiesSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
