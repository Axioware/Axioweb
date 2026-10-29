import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useState, useEffect } from "react";
import PageLoader from "./PageLoader";
import { useIsInitialPrerender } from "@/contexts/PrerenderContext";

interface PageTransitionProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.25,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

export default function PageTransition({ children }: PageTransitionProps) {
  const isInitialPrerender = useIsInitialPrerender();
  const [isLoading, setIsLoading] = useState(!isInitialPrerender);

  useEffect(() => {
    if (isInitialPrerender) return;

    // Brief loading state for smooth transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [isInitialPrerender]);

  return (
    <>
      <AnimatePresence>
        {isLoading && <PageLoader />}
      </AnimatePresence>
      
      <motion.div
        variants={pageVariants}
        initial={isInitialPrerender ? false : "initial"}
        animate={isLoading ? "initial" : "animate"}
        exit="exit"
      >
        {children}
      </motion.div>
    </>
  );
}
