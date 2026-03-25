import { motion } from "framer-motion";
import { ReactNode } from "react";

interface IPhoneMockupProps {
  children: ReactNode;
  className?: string;
}

export default function IPhoneMockup({ children, className = "" }: IPhoneMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative ${className}`}
    >
      {/* iPhone Frame */}
      <div className="relative mx-auto w-[280px] sm:w-[320px] h-[580px] sm:h-[660px]">
        {/* Outer frame with gradient */}
        <div className="absolute inset-0 rounded-[50px] bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 p-[3px] shadow-2xl">
          {/* Inner frame */}
          <div className="relative h-full w-full rounded-[47px] bg-black overflow-hidden">
            {/* Dynamic Island */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[100px] h-[30px] bg-black rounded-full z-20" />
            
            {/* Screen Content */}
            <div className="absolute inset-[8px] rounded-[40px] overflow-hidden bg-gray-900">
              {children}
            </div>
            
            {/* Screen reflection */}
            <div className="absolute inset-0 rounded-[47px] bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
          </div>
        </div>
        
        {/* Side buttons */}
        <div className="absolute right-[-2px] top-[120px] w-[3px] h-[40px] bg-gray-700 rounded-l-sm" />
        <div className="absolute left-[-2px] top-[100px] w-[3px] h-[25px] bg-gray-700 rounded-r-sm" />
        <div className="absolute left-[-2px] top-[140px] w-[3px] h-[50px] bg-gray-700 rounded-r-sm" />
        <div className="absolute left-[-2px] top-[200px] w-[3px] h-[50px] bg-gray-700 rounded-r-sm" />
      </div>
    </motion.div>
  );
}