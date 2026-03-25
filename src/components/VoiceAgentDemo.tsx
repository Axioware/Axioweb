import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, ArrowRight, CheckCircle, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "./SectionHeading";
import IPhoneMockup from "./IPhoneMockup";
import CallInterface from "./CallInterface";

const capabilities = ["24/7 availability", "Natural conversations", "CRM integration", "Multi-language support"];

export default function VoiceAgentDemo() {
  return (
    <section className="section-padding bg-secondary/30 overflow-hidden">
      <div className="container-custom">
        <SectionHeading
          badge="Featured"
          title="AI Voice Agents"
          highlight="Voice Agents"
          subtitle="Intelligent voice-powered assistants that handle customer calls with natural conversations."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Left */}
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
              Transform Your Phone System
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our Voice Agents handle customer calls around the clock, from appointment scheduling to support queries.
              They sound natural, understand context, and never miss a call.
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
                <Link to="/services/voice-agents" className="group">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* iPhone Right - Interactive Call Interface */}
          <IPhoneMockup>
            <CallInterface />
          </IPhoneMockup>
        </div>
      </div>
    </section>
  );
}
