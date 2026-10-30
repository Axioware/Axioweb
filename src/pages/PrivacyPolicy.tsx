import Layout from "@/components/Layout";
import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";
import SEO, { generateBreadcrumbSchema } from "@/components/SEO";

const sections = [
  {
    title: "Information We Collect",
    content:
      "We may collect contact details, project requirements, messages you send through our forms, and basic technical information such as browser type, device information, and pages visited.",
  },
  {
    title: "How We Use Information",
    content:
      "We use information to respond to inquiries, provide services, improve our website, and communicate about projects.",
  },
  {
    title: "Data Sharing",
    content:
      "We do not sell personal information. We may use service providers to operate our website and deliver a system configured for a client. Depending on the setup, these may include ElevenLabs for voice processing, Twilio for calls or messages, GoHighLevel for customer records, n8n for workflow automation, OpenAI or Anthropic for AI responses, and Google Calendar for appointments. Only providers selected for a particular setup receive information through that system.",
  },
  {
    title: "Information handled by client systems",
    content:
      "Depending on the features enabled, a system may process caller names and contact details, call records, message content, transcripts, audio recordings, appointment details, and information shared during a conversation. Recording and transcript features depend on the configuration. For dental workflows that may handle clinical or payment information, contact us so we can review the requirements before setup.",
  },
  {
    title: "Storage, access, and retention",
    content:
      "Where information is stored, who can access it, and how long it is kept depend on the providers and settings selected for each client system. These details can vary by account and configuration. Before a system is used with real customer or patient information, the client should confirm its providers, access permissions, storage locations, recording settings, and deletion schedule with Axioware.",
  },
  {
    title: "Cookies and Analytics",
    content:
      "Optional Google Analytics and LinkedIn tags measure website visits and outreach activity. They load only when allowed in Cookie Preferences. You can change your choice using the Cookie Preferences link in the footer.",
  },
  {
    title: "Contact",
    content:
      "For privacy-related questions, contact us at business@axioware.tech.",
  },
];

export default function PrivacyPolicy() {
  return (
    <Layout>
      <SEO
        title="Privacy Policy"
        description="Read Axioware's Privacy Policy to understand how we collect, use, and protect information."
        canonical="/privacy"
        structuredData={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Privacy Policy", url: "/privacy" },
        ])}
      />
      <section className="relative min-h-screen pt-20 pb-12 flex items-center overflow-hidden">
        <AnimatedHeroBackground />
        <div className="container-custom relative z-10 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-white/70">Privacy Policy</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-5">Privacy Policy</h1>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl">
            How Axioware handles information collected through our website and service inquiries.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container-custom max-w-4xl">
          <div className="space-y-8">
            {sections.map((section) => (
              <article key={section.title} className="border-b border-border/60 pb-8 last:border-b-0">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-3">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
