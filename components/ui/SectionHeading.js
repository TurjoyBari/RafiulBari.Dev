"use client";

import { motion } from "framer-motion";
import { fadeUp, scrollRevealViewport } from "@/utils/animations";

export default function SectionHeading({
  title,
  subtitle,
  description,
  align = "center",
  badge,
  className = "",
}) {
  const alignment = {
    center: "text-center items-center mx-auto",
    left: "text-left items-start",
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={scrollRevealViewport}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1, delayChildren: 0.05 },
        },
      }}
      className={`flex flex-col gap-5 mb-14 md:mb-20 ${alignment[align]} ${className}`}
    >
      {badge && (
        <motion.span variants={fadeUp} className={`section-label ${align === "center" ? "mx-auto" : ""}`}>
          {badge}
        </motion.span>
      )}

      <motion.h2 variants={fadeUp} className="section-heading">
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={fadeUp}
          className={`section-subheading ${align === "center" ? "mx-auto" : ""}`}
        >
          {subtitle}
        </motion.p>
      )}

      {description && (
        <motion.p
          variants={fadeUp}
          className={`text-text-muted text-base leading-relaxed max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </motion.p>
      )}

      <motion.div
        variants={fadeUp}
        aria-hidden="true"
        className={`h-px w-24 bg-gradient-to-r from-transparent via-[#BFA181]/40 to-transparent ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}
