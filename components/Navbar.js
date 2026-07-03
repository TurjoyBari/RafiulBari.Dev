"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Bars from "@gravity-ui/icons/Bars";
import Xmark from "@gravity-ui/icons/Xmark";
import { SITE, NAV_LINKS } from "@/constants/site";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useNavbarHeight } from "@/hooks/useNavbarHeight";
import { drawerSlide, fadeUp, staggerContainerFast } from "@/utils/animations";
import AnimatedButton from "@/components/ui/AnimatedButton";
import Logo from "@/components/ui/Logo";

export default function Navbar() {
  const { isScrolled } = useScrollPosition(50);
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useNavbarHeight([isScrolled]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = () => setIsOpen(false);

  return (
    <>
      <motion.header
        ref={headerRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-2.5 nav-glass-scrolled"
            : "py-4 nav-glass"
        }`}
      >
        <nav
          aria-label="Main navigation"
          className="section-container flex items-center justify-between"
        >
          {/* Logo */}
          <motion.a
            href="#home"
            aria-label={`${SITE.name} — Home`}
            className="group relative flex items-center"
            whileTap={{ scale: 0.98 }}
          >
            <Logo size="md" className="drop-shadow-[0_0_8px_rgba(191,161,129,0.15)] transition-all duration-300 ease-out group-hover:drop-shadow-[0_0_12px_rgba(191,161,129,0.28)]" />
          </motion.a>

          {/* Desktop nav links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <motion.a
                  href={link.href}
                  className="nav-link px-4 py-2 text-sm font-medium"
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.25 }}
                >
                  {link.label}
                </motion.a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <AnimatedButton href="#contact" size="sm">
                Hire Me
              </AnimatedButton>
            </div>

            <motion.button
              type="button"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
              className="relative flex h-10 w-10 items-center justify-center rounded-2xl glass-btn text-white lg:hidden"
              whileTap={{ scale: 0.98 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Xmark width={20} height={20} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Bars width={20} height={20} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-[2px] lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              variants={drawerSlide}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 z-50 flex h-full w-[min(320px,85vw)] flex-col nav-glass-scrolled shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-white/10 p-6">
                <Logo size="sm" />
                <motion.button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setIsOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-text-secondary hover:text-white"
                  whileTap={{ scale: 0.98 }}
                >
                  <Xmark width={18} height={18} />
                </motion.button>
              </div>

              <motion.ul
                variants={staggerContainerFast}
                initial="hidden"
                animate="visible"
                className="flex flex-1 flex-col gap-1 p-6"
              >
                {NAV_LINKS.map((link) => (
                  <motion.li key={link.href} variants={fadeUp}>
                    <a
                      href={link.href}
                      onClick={handleNavClick}
                      className="block rounded-xl px-4 py-3.5 text-base font-medium text-text-secondary transition-colors hover:bg-white/5 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>

              <div className="border-t border-white/10 p-6">
                <AnimatedButton
                  href="#contact"
                  size="md"
                  className="w-full"
                  onClick={handleNavClick}
                >
                  Hire Me
                </AnimatedButton>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
