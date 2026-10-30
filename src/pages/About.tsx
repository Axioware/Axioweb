import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import SEO, { generateBreadcrumbSchema } from "@/components/SEO";
import { useBookCallHref } from "@/lib/booking";

const founderPhotoUrl = "/images/founder-abdulrauf.png";
const founderText = "I’m a software engineer, and I’ve built AI voice and messaging systems for businesses in healthcare, construction, and education. I started Axioware to bring that work to dental practices, where a missed call can mean a missed patient. We’re a small team, and I stay involved in every setup. Before anything goes live, we test it on your own call scenarios so you can hear how it will sound to your patients.";

const workingPrinciples = [
  {
    title: "We start with your calls",
    description: "We learn how your practice handles calls, bookings, and urgent situations before building anything.",
  },
  {
    title: "We test before going live",
    description: "We run test calls on your real scenarios and set the rules for when a call goes to a person.",
  },
  {
    title: "We review real calls with you",
    description: "After launch we go through actual calls with you and adjust answers and handoffs.",
  },
];

export default function About() {
  const bookingHref = useBookCallHref();

  return (
    <Layout>
      <SEO
        title="About Axioware"
        description="Learn about Axioware and our work building AI receptionists and follow-up systems for small service businesses."
        canonical="/about"
        structuredData={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
        ])}
      />

      <section className="page-hero">
        <div className="container-custom relative z-10">
          <SectionHeading
            headingLevel="h1"
            badge="About Axioware"
            title="AI receptionists for small service businesses"
            subtitle="We build systems that answer calls, follow up with leads, and help practices manage appointments."
            light
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">Our Story</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">What we do</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>Axioware builds practical AI automation for small service businesses, with a focus on AI receptionists and follow-up systems for dental clinics.</p>
                <p>We are a small team, and our founder stays involved in every setup. Before launch, we test the system using your call scenarios.</p>
              </div>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link to={bookingHref} className="group">
                    Book a 15-minute call
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-10">How we work</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {workingPrinciples.map((item) => (
              <Card key={item.title} className="h-full">
                <CardHeader><CardTitle className="text-lg leading-relaxed">{item.title}</CardTitle></CardHeader>
                <CardContent><p className="text-muted-foreground leading-relaxed">{item.description}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {founderPhotoUrl && founderText && (
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-10">The team</h2>
            <Card className="md:flex md:items-center md:gap-6">
              <img src={founderPhotoUrl} alt="Axioware founder AbdulRauf Siddiqui" className="w-full md:w-64 aspect-square object-cover object-top rounded-t-lg md:rounded-lg" />
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">AbdulRauf Siddiqui, Founder and CEO</h3>
                <p className="text-muted-foreground leading-relaxed">{founderText}</p>
              </div>
            </Card>
          </div>
        </section>
      )}
    </Layout>
  );
}
