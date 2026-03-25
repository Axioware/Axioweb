import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

// Partner logos - colored versions
import microsoftLogo from "@/assets/partners/microsoft-color.svg";
import salesforceLogo from "@/assets/integrations/salesforce-color.svg";
import hubspotLogo from "@/assets/integrations/hubspot-color.svg";
import zendeskLogo from "@/assets/integrations/zendesk-color.svg";
import stripeLogo from "@/assets/partners/stripe-color.svg";
import twilioLogo from "@/assets/partners/twilio-color.svg";
import openaiLogo from "@/assets/partners/openai.svg";
import awsLogo from "@/assets/partners/aws-color.svg";
import googleLogo from "@/assets/partners/google-color.svg";
import shopifyLogo from "@/assets/integrations/shopify-color.svg";

const partners = [
  { name: "Microsoft", logo: microsoftLogo },
  { name: "Salesforce", logo: salesforceLogo },
  { name: "HubSpot", logo: hubspotLogo },
  { name: "Zendesk", logo: zendeskLogo },
  { name: "Stripe", logo: stripeLogo },
  { name: "Twilio", logo: twilioLogo },
  { name: "OpenAI", logo: openaiLogo },
  { name: "AWS", logo: awsLogo },
  { name: "Google", logo: googleLogo },
  { name: "Shopify", logo: shopifyLogo },
];

// Duplicate for seamless loop
const duplicatedPartners = [...partners, ...partners];

export default function PartnersSection() {
  return (
    <section className="py-16 bg-secondary/30 relative overflow-hidden">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 mb-10">
        <SectionHeading
          badge="Partners"
          title="Trusted by Industry Leaders"
          highlight="Leaders"
          subtitle="We're proud to work with forward-thinking companies across various industries."
        />
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-secondary/30 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-secondary/30 to-transparent z-10" />

        {/* Scrolling Partners */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-8 md:gap-12"
            style={{ willChange: "transform" }}
            animate={{
              x: [0, -50 * partners.length * 1.5],
            }}
            transition={{
              x: {
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 group"
              >
                <div className="w-40 md:w-48 h-20 md:h-24 bg-card rounded-xl border border-border/50 flex items-center justify-center gap-4 transition-all duration-300 hover:border-primary/30 hover:shadow-soft group-hover:scale-105 px-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center flex-shrink-0">
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <span className="font-display font-medium text-foreground text-sm md:text-base">
                    {partner.name}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
