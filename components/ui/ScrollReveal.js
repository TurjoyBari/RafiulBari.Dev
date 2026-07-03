"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  fadeIn,
  fadeDown,
  slideInLeft,
  slideInRight,
  scaleIn,
  staggerContainer,
  staggerContainerFast,
  staggerContainerSlow,
  scrollRevealViewport,
} from "@/utils/animations";

const ANIMATION_MAP = {
  fadeUp,
  fadeIn,
  fadeDown,
  slideInLeft,
  slideInRight,
  scaleIn,
};

const STAGGER_MAP = {
  default: staggerContainer,
  fast: staggerContainerFast,
  slow: staggerContainerSlow,
};

export default function ScrollReveal({
  children,
  animation = "fadeUp",
  stagger = false,
  staggerSpeed = "default",
  delay = 0,
  className = "",
  as = "div",
  once = true,
  amount = 0.2,
  ...props
}) {
  const Component = motion[as] || motion.div;
  const variant = ANIMATION_MAP[animation] || fadeUp;

  if (stagger) {
    const containerVariant = STAGGER_MAP[staggerSpeed] || staggerContainer;

    return (
      <Component
        initial="hidden"
        whileInView="visible"
        viewport={{ ...scrollRevealViewport, once, amount }}
        variants={containerVariant}
        className={className}
        {...props}
      >
        {children}
      </Component>
    );
  }

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ ...scrollRevealViewport, once, amount }}
      variants={variant}
      transition={{ delay }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}

export function ScrollRevealItem({
  children,
  animation = "fadeUp",
  delay = 0,
  className = "",
  as = "div",
  ...props
}) {
  const Component = motion[as] || motion.div;
  const variant = ANIMATION_MAP[animation] || fadeUp;

  return (
    <Component
      variants={variant}
      transition={{ delay }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}
