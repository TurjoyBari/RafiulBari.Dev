"use client";

import { AnimatePresence, motion } from "framer-motion";
import ArrowUp from "@gravity-ui/icons/ArrowUp";
import { useScrollToTop } from "@/hooks/useScrollPosition";

export default function BackToTop({ threshold = 400 }) {
  const { showBackToTop, scrollToTop } = useScrollToTop(threshold);

  return (
    <AnimatePresence>
      {showBackToTop && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{
            y: -3,
            scale: 1.02,
            boxShadow: "0 6px 20px rgba(191, 161, 129, 0.2)",
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-2xl gradient-btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BFA181] focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary md:bottom-8 md:right-8"
        >
          <ArrowUp width={20} height={20} className="text-[#1C1C1C]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
