import { useEffect, useRef, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./PageTransition";
import PageLoader from "./PageLoader";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Portfolio from "@/pages/Portfolio";
import Services from "@/pages/Services";
import Blog from "@/pages/Blog";
import BlogArticle from "@/pages/BlogArticle";
import VoiceAgentsService from "@/pages/services/VoiceAgents";
import ChatbotsService from "@/pages/services/Chatbots";
import GenericService from "@/pages/services/GenericService";
import ServicePageTemplate, { servicePages } from "@/pages/services/ServicePageTemplate";
import DentalAgent from "@/pages/DentalAgent";
import NotFound from "@/pages/NotFound";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import Careers from "@/pages/Careers";
import CaseStudies from "@/pages/CaseStudies";
import CaseStudyDetail from "@/pages/CaseStudyDetail";
import DentalClinics from "@/pages/DentalClinics";
import ChiropractorClinics from "@/pages/ChiropractorClinics";
import BookDemo from "@/pages/BookDemo";
import {
  ChiropractorFAQ,
  ChiropractorFeatures,
  ChiropractorHowItWorks,
  ChiropractorPricing,
} from "@/pages/ChiropractorInfoPages";
import { trackAnalyticsEvent } from "@/lib/analytics";

export default function AnimatedRoutes() {
  const location = useLocation();
  const previousPageLocation = useRef<string | null>(null);

  // Instant scroll to top on route change (works on mobile too)
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      return;
    }

    const targetId = location.hash.slice(1);
    const observer = new MutationObserver(() => {
      const target = document.getElementById(targetId);
      if (!target) return;

      target.scrollIntoView({ block: "start" });
      observer.disconnect();
    });
    const target = document.getElementById(targetId);

    if (target) target.scrollIntoView({ block: "start" });
    else observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const pagePath = `${location.pathname}${location.search}`;
    const pageLocation = `${window.location.origin}${pagePath}`;
    const frame = window.requestAnimationFrame(() => {
      trackAnalyticsEvent("page_view", {
        page_title: document.title,
        page_location: pageLocation,
        page_path: pagePath,
        page_referrer: previousPageLocation.current ?? document.referrer,
      });
      previousPageLocation.current = pageLocation;
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname, location.search]);

  useEffect(() => {
    const handleBookingClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;

      const destination = new URL(anchor.href, window.location.origin);
      if (destination.pathname !== "/book-demo") return;

      trackAnalyticsEvent("booking_click", {
        page_path: window.location.pathname,
        link_url: `${destination.pathname}${destination.search}`,
      });
    };

    document.addEventListener("click", handleBookingClick, true);
    return () => document.removeEventListener("click", handleBookingClick, true);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Index />
            </PageTransition>
          }
        />
        <Route path="/features" element={<PageTransition><ChiropractorFeatures /></PageTransition>} />
        <Route path="/how-it-works" element={<PageTransition><ChiropractorHowItWorks /></PageTransition>} />
        <Route path="/pricing" element={<PageTransition><ChiropractorPricing /></PageTransition>} />
        <Route path="/faq" element={<PageTransition><ChiropractorFAQ /></PageTransition>} />
        <Route path="/book-demo" element={<PageTransition><BookDemo /></PageTransition>} />
        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
        <Route
          path="/portfolio"
          element={
            <PageTransition>
              <Portfolio />
            </PageTransition>
          }
        />
        <Route
          path="/case-studies"
          element={
            <PageTransition>
              <CaseStudies />
            </PageTransition>
          }
        />
        <Route
          path="/case-studies/:slug"
          element={
            <PageTransition>
              <CaseStudyDetail />
            </PageTransition>
          }
        />
        <Route
          path="/blog"
          element={
            <PageTransition>
              <Blog />
            </PageTransition>
          }
        />
        <Route
          path="/blog/:id"
          element={
            <PageTransition>
              <BlogArticle />
            </PageTransition>
          }
        />
        <Route
          path="/services"
          element={
            <PageTransition>
              <Services />
            </PageTransition>
          }
        />
        <Route path="/ai-receptionist-for-dental-clinics" element={<PageTransition><DentalClinics /></PageTransition>} />
        <Route path="/ai-receptionist-for-chiropractors" element={<PageTransition><ChiropractorClinics /></PageTransition>} />
        <Route
          path="/services/ai-receptionist"
          element={
            <PageTransition>
              <ServicePageTemplate service={servicePages["ai-receptionist"]} />
            </PageTransition>
          }
        />
        <Route
          path="/services/ai-lead-generation"
          element={<PageTransition><ServicePageTemplate service={servicePages["ai-lead-generation"]} /></PageTransition>}
        />
        <Route
          path="/services/linkedin-bdr"
          element={<PageTransition><ServicePageTemplate service={servicePages["linkedin-bdr"]} /></PageTransition>}
        />
        <Route
          path="/services/automated-follow-ups"
          element={<PageTransition><ServicePageTemplate service={servicePages["automated-follow-ups"]} /></PageTransition>}
        />
        <Route
          path="/services/outbound-ai-calling"
          element={<PageTransition><ServicePageTemplate service={servicePages["outbound-ai-calling"]} /></PageTransition>}
        />
        <Route
          path="/services/whatsapp-and-chat-agents"
          element={<PageTransition><ServicePageTemplate service={servicePages["whatsapp-and-chat-agents"]} /></PageTransition>}
        />
        <Route
          path="/services/crm-and-workflow-setup"
          element={<PageTransition><ServicePageTemplate service={servicePages["crm-and-workflow-setup"]} /></PageTransition>}
        />
        <Route
          path="/services/voice-agents"
          element={
            <PageTransition>
              <VoiceAgentsService />
            </PageTransition>
          }
        />
        <Route
          path="/services/chatbots"
          element={
            <PageTransition>
              <ChatbotsService />
            </PageTransition>
          }
        />
        <Route
          path="/services/ai-receptionist"
          element={
            <PageTransition>
              <ServicePageTemplate service={servicePages["ai-receptionist"]} />
            </PageTransition>
          }
        />
        <Route
          path="/services/ai-lead-generation"
          element={<PageTransition><ServicePageTemplate service={servicePages["ai-lead-generation"]} /></PageTransition>}
        />
        <Route
          path="/services/linkedin-bdr"
          element={<PageTransition><ServicePageTemplate service={servicePages["linkedin-bdr"]} /></PageTransition>}
        />
        <Route
          path="/services/automated-follow-ups"
          element={<PageTransition><ServicePageTemplate service={servicePages["automated-follow-ups"]} /></PageTransition>}
        />
        <Route
          path="/services/outbound-ai-calling"
          element={<PageTransition><ServicePageTemplate service={servicePages["outbound-ai-calling"]} /></PageTransition>}
        />
        <Route
          path="/services/whatsapp-and-chat-agents"
          element={<PageTransition><ServicePageTemplate service={servicePages["whatsapp-and-chat-agents"]} /></PageTransition>}
        />
        <Route
          path="/services/crm-and-workflow-setup"
          element={<PageTransition><ServicePageTemplate service={servicePages["crm-and-workflow-setup"]} /></PageTransition>}
        />
        <Route
          path="/dental-agent"
          element={
            <PageTransition>
              <DentalAgent />
            </PageTransition>
          }
        />
        <Route
          path="/privacy"
          element={
            <PageTransition>
              <PrivacyPolicy />
            </PageTransition>
          }
        />
        <Route
          path="/terms"
          element={
            <PageTransition>
              <TermsOfService />
            </PageTransition>
          }
        />
        <Route
          path="/careers"
          element={
            <PageTransition>
              <Careers />
            </PageTransition>
          }
        />
        <Route
          path="/services/:slug"
          element={
            <PageTransition>
              <GenericService />
            </PageTransition>
          }
        />
        <Route
          path="*"
          element={
            <PageTransition>
              <NotFound />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}
