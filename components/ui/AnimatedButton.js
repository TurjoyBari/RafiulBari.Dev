"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  primary: {
    base: "gradient-btn font-semibold tracking-wide !text-[#1C1C1C]",
    hover: { y: -2, scale: 1.02, boxShadow: "0 8px 24px rgba(191, 161, 129, 0.22)" },
  },
  outline: {
    base: "glass-btn font-medium",
    hover: { y: -2, scale: 1.02, boxShadow: "0 6px 20px rgba(191, 161, 129, 0.1)" },
  },
  ghost: {
    base: "text-text-secondary font-medium hover:text-white hover:bg-white/5 rounded-xl",
    hover: { y: -1, scale: 1.01 },
  },
};

const sizes = {
  sm: "px-5 py-2.5 text-sm rounded-xl gap-2",
  md: "px-7 py-3.5 text-sm rounded-2xl gap-2",
  lg: "px-9 py-4 text-base rounded-2xl gap-2.5",
};

function ButtonContent({ children, loading, loadingText }) {
  if (loading) {
    return (
      <>
        <span
          aria-hidden="true"
          className="h-4 w-4 animate-spin rounded-full border-2 border-[#1C1C1C]/30 border-t-[#1C1C1C]"
        />
        <span>{loadingText || "Loading..."}</span>
      </>
    );
  }
  return children;
}

export default function AnimatedButton({
  children,
  variant = "primary",
  size = "md",
  href,
  external = false,
  loading = false,
  loadingText,
  disabled = false,
  className = "",
  icon,
  iconPosition = "left",
  onClick,
  type = "button",
  ...props
}) {
  const style = variants[variant] || variants.primary;
  const isDisabled = disabled || loading;

  const classes = [
    "inline-flex items-center justify-center transition-all duration-300 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BFA181] focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary",
    sizes[size],
    style.base,
    isDisabled ? "pointer-events-none opacity-60 cursor-not-allowed" : "cursor-pointer",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {icon && iconPosition === "left" && !loading && (
        <span className="shrink-0">{icon}</span>
      )}
      <ButtonContent loading={loading} loadingText={loadingText}>
        {children}
      </ButtonContent>
      {icon && iconPosition === "right" && !loading && (
        <span className="shrink-0">{icon}</span>
      )}
    </>
  );

  if (href && !isDisabled) {
    const linkProps = external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};

    if (external || href.startsWith("http") || href.startsWith("#")) {
      return (
        <motion.a
          href={href}
          className={classes}
          whileHover={style.hover}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          {...linkProps}
          {...props}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <motion.div
        whileHover={style.hover}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="inline-flex"
      >
        <Link href={href} className={classes} {...props}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      disabled={isDisabled}
      onClick={onClick}
      whileHover={isDisabled ? undefined : style.hover}
      whileTap={isDisabled ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      {...props}
    >
      {content}
    </motion.button>
  );
}
