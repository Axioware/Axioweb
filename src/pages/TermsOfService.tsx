import Layout from "@/components/Layout";
import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";
import SEO, { generateBreadcrumbSchema } from "@/components/SEO";

const sections = [
  {
    title: "Use of Our Website",
    content:
      "You may use this website for lawful purposes only. You agree not to misuse the site, interfere with its operation, or attempt unauthorized access to any system or data.",
  },
  {
    title: "Service Engagements",
    content:
      "Project scope, timelines, pricing, deliverables, and support terms are defined separately in written proposals, contracts, or statements of work agreed with Axioware.",
  },
  {
    title: "Intellectual Property",
    content:
      "Website content, branding, designs, and materials belong to Axioware unless otherwise stated. Client project ownership is governed by the applicable project agreement.",
  },
  {
    title: "Third-Party Services",
    content:
      "Our website or delivered solutions may reference or integrate third-party platforms. Those services are subject to their own terms, policies, and availability.",
  },
  {
    title: "Limitation of Liability",
    content:
      "To the fullest extent permitted by law, Axioware is not liable for indirect, incidental, or consequential damages arising from use of this website.",
  },
  {
    title: "Contact",
    content:
      "For questions about these terms, contact us at business@axioware.tech.",
  },
];

export default function TermsOfService() {
  return (
    <Layout>
      <SEO
        title="Terms of Service"
        description="Read Axioware's Terms of Service for website usage and service engagement information."
        canonical="/terms"
        structuredData={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Terms of Service", url: "/terms" },
        ])}
      />
      <section className="relative min-h-screen pt-20 pb-12 flex items-center overflow-hidden">
        <AnimatedHeroBackground />
        <div className="container-custom relative z-10 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-white/70">Terms</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-5">Terms of Service</h1>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl">
            The basic rules for using the Axioware website and engaging with our services.
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
