import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { PrerenderProvider } from "@/contexts/PrerenderContext";
import AnalyticsConsent from "@/components/AnalyticsConsent";
import { useState, type ReactNode } from "react";

export function AppProviders({
  children,
  helmetContext,
  prerendered = false,
}: {
  children: ReactNode;
  helmetContext?: object;
  prerendered?: boolean;
}) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <HelmetProvider context={helmetContext as any}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <PrerenderProvider initialValue={prerendered}>
            {children}
          </PrerenderProvider>
          <Toaster />
          <Sonner />
          <AnalyticsConsent />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

const App = ({ prerendered = false }: { prerendered?: boolean }) => (
  <AppProviders prerendered={prerendered}>
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  </AppProviders>
);

export default App;
