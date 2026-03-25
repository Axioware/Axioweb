import { useEffect, lazy, Suspense } from "react";
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
import RestaurantAgent from "@/pages/RestaurantAgent";
import NotFound from "@/pages/NotFound";

export default function AnimatedRoutes() {
  const location = useLocation();

  // Instant scroll to top on route change (works on mobile too)
  useEffect(() => {
    // Use instant scroll to ensure it works on all devices
    window.scrollTo(0, 0);
    
    // Also try scrolling the document element for mobile browsers
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [location.pathname]);

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
          path="/restaurant-agent"
          element={
            <PageTransition>
              <RestaurantAgent />
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
