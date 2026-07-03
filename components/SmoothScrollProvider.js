"use client";

import { useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import AnchorScrollHandler from "@/components/AnchorScrollHandler";

const LENIS_OPTIONS = {
  lerp: 0.1,
  duration: 1.2,
  smoothWheel: true,
  syncTouch: false,
  autoRaf: true,
  autoToggle: true,
  anchors: false,
};

export default function SmoothScrollProvider({ children }) {
  const [enabled, setEnabled] = useState(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => setEnabled(!mediaQuery.matches);
    update();

    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  if (enabled === null) {
    return (
      <>
        <AnchorScrollHandler />
        {children}
      </>
    );
  }

  if (!enabled) {
    return (
      <>
        <AnchorScrollHandler />
        {children}
      </>
    );
  }

  return (
    <ReactLenis root options={LENIS_OPTIONS}>
      <AnchorScrollHandler />
      {children}
    </ReactLenis>
  );
}
