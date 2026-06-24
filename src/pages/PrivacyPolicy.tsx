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
      "We use information to respond to inquiries, provide services, improve our website, communicate about projects, and maintain the security and reliability of our systems.",
  },
  {
    title: "Data Sharing",
    content:
      "We do not sell personal information. We may share limited information with trusted service providers only when needed to operate our website, deliver services, or comply with legal obligations.",
  },
  {
    title: "Cookies and Analytics",
    content:
      "Our website may use cookies or analytics tools to understand usage patterns and improve the user experience. You can control cookies through your browser settings.",
  },
  {
    title: "Data Security",
    content:
      "We use reasonable technical and organizational measures to protect information, but no online transmission or storage system can be guaranteed to be completely secure.",
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
