"use client";

import { useEffect } from "react";
import { useLenis } from "lenis/react";
import { scrollToHash } from "@/utils/scrollOffset";

export default function AnchorScrollHandler() {
  const lenis = useLenis();

  useEffect(() => {
    const handleClick = (event) => {
      const link = event.target.closest('a[href^="#"]');
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href) return;

      const targetId = href === "#" ? "#home" : href;
      if (!document.querySelector(targetId)) return;

      event.preventDefault();
      scrollToHash(href, { lenis });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [lenis]);

  return null;
}
