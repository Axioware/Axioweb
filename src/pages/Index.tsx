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
    question: "What are Voice Agents?",
    answer:
      "Voice Agents are AI-powered virtual assistants that can handle phone calls, customer inquiries, and automate voice-based interactions 24/7.",
  },
  {
    question: "How can AI Chatbots help my business?",
    answer:
      "AI Chatbots provide instant customer support, qualify leads, and automate repetitive tasks, improving efficiency and customer satisfaction.",
  },
  {
    question: "What industries does Axioware serve?",
    answer:
      "We serve various industries including healthcare, retail, hospitality, finance, and technology with customized AI solutions.",
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
