"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ArrowDownToLine from "@gravity-ui/icons/ArrowDownToLine";
import CirclePlay from "@gravity-ui/icons/CirclePlay";
import { SITE, PROFESSIONS, DISPLAY_SOCIAL, HERO_INTRO, HERO_TECH_BADGES } from "@/constants/site";
import { useTypewriter } from "@/hooks/useTypewriter";
import {
  fadeUp,
  slideInRight,
  staggerContainer,
  floatingAnimation,
  floatingAnimationSlow,
  typewriterCursor,
  pageEntrance,
} from "@/utils/animations";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { SocialIconGroup } from "@/components/ui/SocialIcon";
import IntroVideoModal from "@/components/IntroVideoModal";

const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: `${(i * 17 + 5) % 95}%`,
  y: `${(i * 23 + 10) % 85}%`,
  size: (i % 3) + 2,
  delay: (i % 5) * 0.4,
  duration: 4 + (i % 4),
}));

const INTRO_VIDEO_TITLE = `${SITE.name} — Intro`;

export default function Hero() {
  const [introOpen, setIntroOpen] = useState(false);
  const handleOpenIntro = useCallback(() => setIntroOpen(true), []);
  const handleCloseIntro = useCallback(() => setIntroOpen(false), []);
  const typedProfession = useTypewriter(PROFESSIONS, {
    typingSpeed: 75,
    deletingSpeed: 35,
    pauseDuration: 2200,
  });

  return (
    <section id="home" aria-label="Hero" className="hero-section">
      {/* Floating particles */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {PARTICLES.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute rounded-full bg-[#BFA181]/15 shadow-[0_0_8px_rgba(191,161,129,0.2)]"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="hero-section__inner section-container relative z-10 w-full">
        <motion.div
          variants={pageEntrance}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16"
        >
          {/* Left column */}
          <motion.div variants={staggerContainer} className="flex flex-col gap-6">
            <motion.div variants={fadeUp}>
              <span className="hero-badge inline-flex items-center gap-2.5 rounded-full px-5 py-2 text-xs font-semibold tracking-wide">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 animate-pulse rounded-full bg-[#BFA181] shadow-[0_0_8px_rgba(191,161,129,0.5)]"
                />
                {SITE.availability}
              </span>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-3">
              <p className="text-text-secondary text-lg font-medium tracking-wide">
                Hi, I&apos;m
              </p>
              <h1 className="text-4xl font-bold leading-[1.05] tracking-tighter sm:text-5xl lg:text-[3.75rem]">
                <span className="gradient-text">{SITE.name}</span>
              </h1>
            </motion.div>

            <motion.div variants={fadeUp} className="min-h-[2.5rem] sm:min-h-[3rem]">
              <p className="text-xl font-semibold text-text-secondary sm:text-2xl">
                <span className="gradient-text">{typedProfession}</span>
                <motion.span
                  variants={typewriterCursor}
                  animate="animate"
                  aria-hidden="true"
                  className="ml-0.5 inline-block h-6 w-0.5 translate-y-0.5 bg-[#BFA181] sm:h-7"
                />
              </p>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="max-w-xl text-base leading-[1.8] text-text-secondary sm:text-lg"
            >
              {HERO_INTRO}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
              <AnimatedButton
                href={SITE.cvUrl}
                external
                icon={<ArrowDownToLine width={18} height={18} />}
              >
                Download CV
              </AnimatedButton>
              <AnimatedButton
                variant="outline"
                onClick={handleOpenIntro}
                icon={
                  <motion.span
                    aria-hidden="true"
                    className="inline-flex"
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <CirclePlay width={18} height={18} />
                  </motion.span>
                }
              >
                Watch Intro
              </AnimatedButton>
            </motion.div>

            <motion.div variants={fadeUp} className="pt-4">
              <p className="mb-3 text-sm font-medium text-text-muted">Follow me</p>
              <SocialIconGroup links={DISPLAY_SOCIAL} />
            </motion.div>
          </motion.div>

          {/* Right column — portrait */}
          <motion.div
            variants={slideInRight}
            className="relative mx-auto w-full max-w-md lg:max-w-none lg:mx-0"
          >
            <div className="relative mx-auto aspect-square w-full max-w-[440px]">
              <div aria-hidden="true" className="hero-orbit" />
              <div aria-hidden="true" className="hero-orbit-inner" />

              <motion.div
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-gradient-to-br from-[#BFA181]/20 via-[#D4C5B0]/10 to-[#BFA181]/15 blur-3xl"
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="gradient-border hero-ring-glow relative h-full w-full rounded-full p-[3px]">
                <div className="glass-strong relative h-full w-full overflow-hidden rounded-full">
                  <Image
                    src="https://i.ibb.co.com/1Jn8TLv1/Rafi-Ul-Bari.png"
                    alt={`${SITE.name} — Professional portrait`}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover object-center"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 via-transparent to-transparent"
                  />
                </div>
              </div>

              {/* Floating tech badges */}
              {HERO_TECH_BADGES.map((badge, index) => (
                <motion.div
                  key={badge.label}
                  className={`absolute ${badge.position} z-10`}
                  variants={index % 2 === 0 ? floatingAnimation : floatingAnimationSlow}
                  animate="animate"
                >
                  <span className="glass-card inline-flex items-center rounded-2xl px-4 py-2.5 text-xs font-semibold text-white shadow-xl backdrop-blur-xl sm:text-sm">
                    {badge.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <IntroVideoModal
        isOpen={introOpen}
        onClose={handleCloseIntro}
        videoUrl={SITE.introVideoUrl}
        title={INTRO_VIDEO_TITLE}
      />
    </section>
  );
}
