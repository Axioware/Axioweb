import { motion } from "framer-motion";

export default function PageLoader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
    >
      <div className="flex flex-col items-center gap-4">
        {/* Animated logo/spinner */}
        <div className="relative">
          <motion.div
            className="w-16 h-16 rounded-full border-4 border-primary/20"
            style={{ borderTopColor: "hsl(var(--accent))" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-2 rounded-full border-4 border-accent/20"
            style={{ borderBottomColor: "hsl(var(--primary))" }}
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
        
        {/* Loading text with shimmer */}
        <motion.p
          className="text-sm font-medium text-muted-foreground"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          Loading...
        </motion.p>
      </div>
    </motion.div>
  );
}
