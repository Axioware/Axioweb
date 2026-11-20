import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
{
  /*import ChatbotButton from "./ChatbotButton";*/
}
import ScrollToTop from "./ScrollToTop";
import { Link } from "react-router-dom";
import { useBookCallHref } from "@/lib/booking";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const bookingHref = useBookCallHref();

  return (
    <>
      {/* Fixed elements outside the main flow to prevent transform issues */}
      <Navbar />
      {/*<ChatbotButton />*/}
      <ScrollToTop />

      <div className="min-h-screen flex flex-col">
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <Footer />
      </div>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 p-3 shadow-medium backdrop-blur md:hidden">
        <Link
          to={bookingHref}
          className="block rounded-lg bg-[#FFB703] px-5 py-3 text-center font-semibold text-[#102A43] transition-colors hover:bg-[#E6A500]"
        >
          Book a Free Demo
        </Link>
      </div>
    </>
  );
}
