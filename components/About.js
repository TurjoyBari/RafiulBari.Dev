"use client";

import { motion } from "framer-motion";
import Code from "@gravity-ui/icons/Code";
import Rocket from "@gravity-ui/icons/Rocket";
import Persons from "@gravity-ui/icons/Persons";
import Bulb from "@gravity-ui/icons/Bulb";
import Puzzle from "@gravity-ui/icons/Puzzle";
import { ABOUT_BIO, ABOUT_FEATURES } from "@/constants/site";
import { fadeUp, hoverLift } from "@/utils/animations";
import ScrollReveal, { ScrollRevealItem } from "@/components/ui/ScrollReveal";

const FEATURE_ICONS = {
  code: Code,
  rocket: Rocket,
  users: Persons,
  lightbulb: Bulb,
  puzzle: Puzzle,
};

const TOP_ROW_FEATURES = ABOUT_FEATURES.slice(0, 3);
const BOTTOM_ROW_FEATURES = ABOUT_FEATURES.slice(3, 5);

function FeatureCard({ feature }) {
  const Icon = FEATURE_ICONS[feature.icon] || Code;

  return (
    <motion.div
      variants={fadeUp}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="group h-full"
    >
      <motion.div
        variants={hoverLift}
        className="about-feature-card flex h-full min-h-[11.5rem] flex-col gap-5 p-6 sm:min-h-[12rem] sm:p-7"
      >
        <div className="about-icon-ring shrink-0">
          <motion.div
            className="about-icon-inner"
            whileHover={{ rotate: 6, scale: 1.04 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Icon width={26} height={26} />
          </motion.div>
        </div>
        <div className="flex flex-1 flex-col gap-2.5">
          <h3 className="text-lg font-semibold tracking-tight text-white">
            {feature.title}
          </h3>
          <p className="text-sm leading-[1.7] text-text-secondary">
            {feature.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" aria-label="About Me" className="section-padding relative overflow-hidden">
      <div aria-hidden="true" className="section-divider" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full bg-[#BFA181]/8 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-[360px] w-[360px] rounded-full bg-[#D4C5B0]/6 blur-[90px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_40%,rgba(191,161,129,0.07),transparent_65%)]"
      />

      <div className="section-container relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          {/* Left — intro */}
          <ScrollReveal
            animation="slideInLeft"
            className="relative lg:col-span-5 xl:col-span-4"
          >
            <div
              aria-hidden="true"
              className="absolute -left-6 top-1/2 hidden h-[72%] w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-[#BFA181]/35 to-transparent lg:block"
            />
            <div
              aria-hidden="true"
              className="absolute -left-[1.625rem] top-1/2 hidden h-2 w-2 -translate-y-1/2 rounded-full bg-[#BFA181] shadow-[0_0_12px_rgba(191,161,129,0.5)] lg:block"
            />

            <div className="flex flex-col justify-center space-y-7 lg:pl-8 lg:py-2 xl:space-y-8">
              <span className="section-label">About Me</span>

              <div className="space-y-5">
                <h2 className="text-[2rem] font-bold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[3rem] lg:leading-[1.1] xl:text-[3.25rem]">
                  About Me
                </h2>
                <p className="max-w-md text-lg font-medium leading-[1.45] text-[#D4C5B0] sm:text-xl sm:leading-[1.5]">
                  Crafting Digital Experiences with Code & Creativity
                </p>
                <div
                  aria-hidden="true"
                  className="h-px w-20 bg-gradient-to-r from-[#BFA181]/60 to-transparent"
                />
              </div>

              <p className="max-w-md text-base leading-[1.85] text-text-secondary sm:text-[1.0625rem] sm:leading-[1.9]">
                {ABOUT_BIO}
              </p>
            </div>
          </ScrollReveal>

          {/* Right — 3 + 2 card grid */}
          <div className="lg:col-span-7 xl:col-span-8">
            <ScrollReveal stagger staggerSpeed="fast" className="about-cards-grid">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
                {TOP_ROW_FEATURES.map((feature) => (
                  <ScrollRevealItem key={feature.id} className="h-full">
                    <FeatureCard feature={feature} />
                  </ScrollRevealItem>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-5 sm:grid-cols-2 sm:gap-5 lg:mt-5 lg:grid-cols-6">
                {BOTTOM_ROW_FEATURES.map((feature, index) => (
                  <ScrollRevealItem
                    key={feature.id}
                    className={`h-full ${
                      index === 0 ? "lg:col-start-2 lg:col-span-2" : "lg:col-span-2"
                    }`}
                  >
                    <FeatureCard feature={feature} />
                  </ScrollRevealItem>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
