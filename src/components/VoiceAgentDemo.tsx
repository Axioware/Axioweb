import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Phone, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "./SectionHeading";
import IPhoneMockup from "./IPhoneMockup";
import CallInterface from "./CallInterface";

const capabilities = ["Answers incoming calls", "Handles common questions", "Books appointments", "Hands off to staff"];

export default function VoiceAgentDemo({ showPromo = true }: { showPromo?: boolean }) {
  const liveDemo = (
    <IPhoneMockup>
      <CallInterface />
    </IPhoneMockup>
  );

  return (
    <section className="section-padding bg-secondary/30 overflow-hidden">
      <div className="container-custom">
        {showPromo ? (
          <>
            <SectionHeading
              badge="Featured"
              title="AI Receptionist"
              highlight="Receptionist"
              subtitle="Answers calls, handles common questions, and helps book or reschedule appointments."
            />
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 text-blue-400 text-sm font-medium rounded-full mb-4">
                  <PhoneCall className="w-4 h-4" />
                  See It In Action
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                  A receptionist for routine calls
                </h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  It answers incoming calls, handles routine questions, and supports appointment scheduling, with a handoff to your staff when needed.
                </p>
                <ul className="space-y-3 mb-8">
                  {capabilities.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                    <Link to="/services/ai-receptionist" className="group">
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
              {liveDemo}
            </div>
          </>
        ) : (
          <div className="max-w-md mx-auto">
            <p className="text-center text-sm font-medium text-accent mb-4">Hear a sample call</p>
            {liveDemo}
          </div>
        )}
      </div>
    </section>
  );
}
