"use client";

import { useState, useEffect, useCallback } from "react";
import { useLenis } from "lenis/react";
import { scrollToHash } from "@/utils/scrollOffset";

export function useScrollPosition(threshold = 50) {
  const [isScrolled, setIsScrolled] = useState(false);
  const lenis = useLenis();

  useLenis(
    (instance) => {
      const y = instance.scroll;
      setIsScrolled((prev) => {
        const next = y > threshold;
        return prev !== next ? next : prev;
      });
    },
    [threshold]
  );

  useEffect(() => {
    if (lenis) return;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lenis, threshold]);

  return { isScrolled };
}

export function useScrollToTop(threshold = 400) {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const lenis = useLenis();

  useLenis(
    (instance) => {
      setShowBackToTop((prev) => {
        const next = instance.scroll > threshold;
        return prev !== next ? next : prev;
      });
    },
    [threshold]
  );

  useEffect(() => {
    if (lenis) return;

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lenis, threshold]);

  const scrollToTop = useCallback(() => {
    scrollToHash("#home", { lenis, duration: 1.2 });
  }, [lenis]);

  return { showBackToTop, scrollToTop };
}
