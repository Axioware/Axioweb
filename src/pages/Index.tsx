import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import CTASection from "@/components/CTASection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PartnersSection from "@/components/PartnersSection";
import VoiceAgentDemo from "@/components/VoiceAgentDemo";
import SEO, { generateFAQSchema } from "@/components/SEO";

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
  return (
    <Layout>
      <SEO canonical="/" structuredData={generateFAQSchema(homeFAQs)} />
      <HeroSection />
      <VoiceAgentDemo />
      <ServicesSection />
      <TechnologiesSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
