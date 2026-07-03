"use client";

import { motion } from "framer-motion";
import { SITE, FOOTER_LINKS, DISPLAY_SOCIAL } from "@/constants/site";
import { fadeUp } from "@/utils/animations";
import { SocialIconGroup } from "@/components/ui/SocialIcon";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer aria-label="Site footer" className="relative border-t border-white/[0.06] bg-bg-secondary/30">
      <div className="section-container py-12 md:py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8"
        >
          {/* Brand */}
          <motion.div variants={fadeUp} className="space-y-4">
            <a href="#home" aria-label={`${SITE.name} — Home`} className="group inline-block">
              <Logo size="md" className="transition-all duration-300 group-hover:drop-shadow-[0_0_16px_rgba(191,161,129,0.4)]" />
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-text-secondary">
              {SITE.title}. Building exceptional digital experiences with modern
              technologies.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div variants={fadeUp} className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-[#BFA181]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div variants={fadeUp} className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Connect
            </h3>
            <SocialIconGroup links={DISPLAY_SOCIAL} size={18} />
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-10 sm:flex-row"
        >
          <p className="text-sm text-text-muted">
            &copy; {currentYear}{" "}
            <span className="text-text-secondary">{SITE.name}</span>. All rights
            reserved.
          </p>
          <p className="text-sm text-text-muted">
            Built with{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#BFA181] transition-colors hover:text-[#D4C5B0]"
            >
              Next.js
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
