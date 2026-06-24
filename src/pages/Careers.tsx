import { Link } from "react-router-dom";
import { Briefcase, Mail, Sparkles, Users, Zap } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";
import { Button } from "@/components/ui/button";
import SEO, { generateBreadcrumbSchema } from "@/components/SEO";

const highlights = [
  {
    icon: Sparkles,
    title: "AI-first work",
    description: "Build practical automation, voice agents, chatbots, and digital products for real business problems.",
  },
  {
    icon: Users,
    title: "Small focused team",
    description: "Work close to strategy, design, engineering, and client outcomes without unnecessary layers.",
  },
  {
    icon: Zap,
    title: "Fast execution",
    description: "Move from idea to shipped product quickly while keeping quality and maintainability in view.",
  },
];

export default function Careers() {
  return (
    <Layout>
      <SEO
        title="Careers"
        description="Explore career opportunities at Axioware and learn how to contact us about future roles."
        canonical="/careers"
        structuredData={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Careers", url: "/careers" },
        ])}
      />
      <section className="relative min-h-screen pt-20 pb-12 flex items-center overflow-hidden">
        <AnimatedHeroBackground />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-white/70">Careers</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-5">Work with Axioware</h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8">
              Join a team building useful software, thoughtful AI systems, and polished customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="rounded-full px-6 bg-accent hover:bg-accent/90 text-white">
                <Link to="/contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Us
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full px-6 border-white/30 text-white hover:bg-white/10"
              >
                <a href="mailto:business@axioware.tech">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Send Your Profile
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="rounded-xl border border-border/60 bg-card p-6">
                  <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="font-display text-xl font-semibold text-foreground mb-3">{item.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-14 rounded-2xl border border-border/60 bg-secondary/40 p-6 md:p-8">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-3">Open roles</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not have specific openings listed right now. If your skills align with AI development, web and app
              development, UI/UX design, SEO, or social media marketing, send us your profile and a short note about the
              kind of work you want to do.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
