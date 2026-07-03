"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const CLICKABLE_SELECTOR = [
  "a",
  "button",
  "[role='button']",
  "input",
  "select",
  "textarea",
  "label",
  ".glass-card",
  ".glass-btn",
  ".tilt-card",
  "[data-cursor='pointer']",
].join(", ");

const TEXT_SELECTOR = "h1, h2, h3, h4, h5, h6, .gradient-text, .stat-value";

function lerp(start, end, factor) {
  return start + (end - start) * factor;
}

function getHoverMode(element) {
  if (!element || element.closest?.("[data-cursor='none']")) return "default";
  if (element.closest(CLICKABLE_SELECTOR)) return "clickable";
  if (element.closest(TEXT_SELECTOR)) return "text";
  return "default";
}

function useCursorEnabled() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const desktop = window.matchMedia("(min-width: 1025px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      setEnabled(
        finePointer.matches && desktop.matches && !reducedMotion.matches
      );
    };

    update();
    finePointer.addEventListener("change", update);
    desktop.addEventListener("change", update);
    reducedMotion.addEventListener("change", update);

    return () => {
      finePointer.removeEventListener("change", update);
      desktop.removeEventListener("change", update);
      reducedMotion.removeEventListener("change", update);
    };
  }, []);

  return enabled;
}

export default function CustomCursor() {
  const enabled = useCursorEnabled();

  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const trailRef = useRef(null);
  const ripplesRef = useRef(null);

  const mouse = useRef({ x: -100, y: -100 });
  const dotPos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const trailPos = useRef({ x: -100, y: -100 });
  const hoverModeRef = useRef("default");
  const rafRef = useRef(null);
  const visibleRef = useRef(false);
  const clickScaleRef = useRef(1);

  const [mode, setMode] = useState("default");
  const [clicking, setClicking] = useState(false);
  const [visible, setVisible] = useState(false);

  const spawnRipple = useCallback((x, y) => {
    const container = ripplesRef.current;
    if (!container) return;

    const ripple = document.createElement("span");
    ripple.className = "custom-cursor-ripple";
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    container.appendChild(ripple);

    ripple.addEventListener("animationend", () => ripple.remove(), {
      once: true,
    });
  }, []);

  useEffect(() => {
    if (!enabled) return;

    document.body.classList.add("custom-cursor-active");

    const setCursorVisible = (show) => {
      if (visibleRef.current === show) return;
      visibleRef.current = show;
      setVisible(show);
    };

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      setCursorVisible(true);

      const target = document.elementFromPoint(e.clientX, e.clientY);
      const nextMode = getHoverMode(target);
      if (nextMode !== hoverModeRef.current) {
        hoverModeRef.current = nextMode;
        setMode(nextMode);
      }
    };

    const handleMouseDown = (e) => {
      setClicking(true);
      clickScaleRef.current = 0.92;
      spawnRipple(e.clientX, e.clientY);
    };

    const handleMouseUp = () => {
      setClicking(false);
      clickScaleRef.current = 1;
    };

    const handleMouseLeave = () => setCursorVisible(false);
    const handleMouseEnter = () => setCursorVisible(true);

    const animate = () => {
      dotPos.current.x = lerp(dotPos.current.x, mouse.current.x, 0.5);
      dotPos.current.y = lerp(dotPos.current.y, mouse.current.y, 0.5);
      ringPos.current.x = lerp(ringPos.current.x, mouse.current.x, 0.13);
      ringPos.current.y = lerp(ringPos.current.y, mouse.current.y, 0.13);
      trailPos.current.x = lerp(trailPos.current.x, mouse.current.x, 0.07);
      trailPos.current.y = lerp(trailPos.current.y, mouse.current.y, 0.07);

      const scale = clickScaleRef.current;

      const dot = dotRef.current;
      const ring = ringRef.current;
      const trail = trailRef.current;

      if (dot) {
        dot.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0) translate(-50%, -50%) scale(${scale})`;
      }
      if (ring) {
        ring.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%) scale(${scale})`;
      }
      if (trail) {
        trail.style.transform = `translate3d(${trailPos.current.x}px, ${trailPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [enabled, spawnRipple]);

  if (!enabled) return null;

  const ringClass = [
    "custom-cursor-ring",
    mode === "clickable" && "custom-cursor-ring--clickable",
    mode === "text" && "custom-cursor-ring--text",
    clicking && "custom-cursor-ring--clicking",
  ]
    .filter(Boolean)
    .join(" ");

  const dotClass = [
    "custom-cursor-dot",
    mode === "clickable" && "custom-cursor-dot--clickable",
    mode === "text" && "custom-cursor-dot--text",
    clicking && "custom-cursor-dot--clicking",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={`custom-cursor ${visible ? "custom-cursor--visible" : ""}`}
      aria-hidden="true"
    >
      <div ref={trailRef} className="custom-cursor-trail" />
      <div ref={ringRef} className={ringClass} />
      <div ref={dotRef} className={dotClass} />
      <div ref={ripplesRef} className="custom-cursor-ripples" />
    </div>
  );
}
