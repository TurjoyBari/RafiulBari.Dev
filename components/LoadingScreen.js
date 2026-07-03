"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/ui/Logo";

const LOADER_DURATION = 1800;

export default function LoadingScreen({ onComplete }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
      onComplete?.();
    }, LOADER_DURATION);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#1C1C1C]"
          aria-label="Loading"
          role="status"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-radial-overlay"
          />
          <div
            aria-hidden="true"
            className="glow-blob glow-blob-gold absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2"
          />

          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="drop-shadow-[0_0_30px_rgba(191,161,129,0.35)]"
            >
              <Logo size="xl" asMotion />
            </motion.div>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="h-px bg-gradient-to-r from-transparent via-[#BFA181] to-transparent"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-xs font-medium uppercase tracking-[0.25em] text-[#D4C5B0]"
            >
              Loading Portfolio
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
