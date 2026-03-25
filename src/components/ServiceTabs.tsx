import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface TabItem {
  id: string;
  label: string;
  icon?: LucideIcon;
  content: ReactNode;
}

interface ServiceTabsProps {
  tabs: TabItem[];
}

export default function ServiceTabs({ tabs }: ServiceTabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");

  return (
    <div className="w-full">
      {/* Tab Headers */}
      <div className="flex flex-wrap gap-2 mb-8 p-2 bg-secondary/50 rounded-xl">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
              activeTab === tab.id
                ? "text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-card/50"
            }`}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-primary rounded-lg shadow-glow"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            {tab.icon && <tab.icon className="w-4 h-4 relative z-10" />}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {tab.content}
              </motion.div>
            )
        )}
      </AnimatePresence>
    </div>
  );
}
