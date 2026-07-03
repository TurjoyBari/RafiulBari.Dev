"use client";

import { motion } from "framer-motion";

export default function Logo({ size = "md", className = "", asMotion = false }) {
  const sizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl",
    xl: "text-5xl",
  };

  const content = (
    <span
      className={`inline-flex items-baseline font-bold tracking-tight ${sizes[size]} ${className}`}
    >
      <span className="text-[#BFA181] transition-colors group-hover:text-[#D4C5B0]">
        &lt;
      </span>
      <span className="gradient-text mx-0.5">R.Dev</span>
      <span className="text-[#BFA181] transition-colors group-hover:text-[#D4C5B0]">
        &gt;
      </span>
    </span>
  );

  if (asMotion) {
    return (
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="group inline-flex"
      >
        {content}
      </motion.span>
    );
  }

  return <span className="group inline-flex">{content}</span>;
}
