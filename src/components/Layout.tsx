import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
{
  /*import ChatbotButton from "./ChatbotButton";*/
}
import ScrollToTop from "./ScrollToTop";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      {/* Fixed elements outside the main flow to prevent transform issues */}
      <Navbar />
      {/*<ChatbotButton />*/}
      <ScrollToTop />

      <div className="min-h-screen flex flex-col">
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}
