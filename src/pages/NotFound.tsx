import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-[calc(100svh-4rem)] flex items-center bg-background py-20">
        <div className="container-custom text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-primary">404</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-5">Page not found</h1>
          <p className="mx-auto mb-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            This page is not available yet. For now, use the main navigation to continue exploring Axioware.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button asChild className="rounded-full px-6">
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Return Home
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-6">
              <Link to="/contact">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
