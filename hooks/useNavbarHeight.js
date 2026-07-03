"use client";

import { useEffect, useRef } from "react";

function getScrollGapPx() {
  if (typeof window === "undefined") return 32;

  const gap = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("--scroll-gap")
  );

  return Number.isFinite(gap) ? gap : 32;
}

export function useNavbarHeight(deps = []) {
  const headerRef = useRef(null);

  useEffect(() => {
    const element = headerRef.current;
    if (!element) return;

    const updateHeight = () => {
      const height = Math.ceil(element.getBoundingClientRect().height);
      const scrollGap = getScrollGapPx();
      const scrollOffset = height + scrollGap;

      document.documentElement.style.setProperty("--navbar-height", `${height}px`);
      document.documentElement.style.setProperty("--scroll-offset", `${scrollOffset}px`);
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(element);
    window.addEventListener("resize", updateHeight, { passive: true });

    const rafId = requestAnimationFrame(updateHeight);
    const postNavTimer = setTimeout(updateHeight, 700);
    const fontTimer = setTimeout(updateHeight, 100);

    if (document.fonts?.ready) {
      document.fonts.ready.then(updateHeight);
    }

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(postNavTimer);
      clearTimeout(fontTimer);
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, deps);

  return headerRef;
}
