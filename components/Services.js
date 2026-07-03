"use client";

import { motion } from "framer-motion";
import Display from "@gravity-ui/icons/Display";
import Smartphone from "@gravity-ui/icons/Smartphone";
import Palette from "@gravity-ui/icons/Palette";
import Layers from "@gravity-ui/icons/Layers";
import Thunderbolt from "@gravity-ui/icons/Thunderbolt";
import Magnifier from "@gravity-ui/icons/Magnifier";
import { SERVICES, SERVICES_INTRO } from "@/data/services";
import { fadeUp, hoverLift } from "@/utils/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal, { ScrollRevealItem } from "@/components/ui/ScrollReveal";

const SERVICE_ICONS = {
  monitor: Display,
  smartphone: Smartphone,
  palette: Palette,
  layers: Layers,
  zap: Thunderbolt,
  search: Magnifier,
};

function ServiceCard({ service }) {
  const Icon = SERVICE_ICONS[service.icon] || Display;

  return (
    <motion.div
      variants={fadeUp}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="group"
    >
      <motion.div
        variants={hoverLift}
        className="glass-card relative flex h-full flex-col gap-6 overflow-hidden p-7 sm:p-8"
      >
        <div
          aria-hidden="true"
          className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#BFA181]/5 transition-opacity duration-300 group-hover:opacity-80"
        />

        <div className="icon-container relative h-16 w-16 group-hover:text-[#D4C5B0]">
          <Icon width={28} height={28} />
        </div>

        <div className="relative space-y-2">
          <h3 className="text-lg font-semibold text-white">{service.title}</h3>
          <p className="text-sm leading-relaxed text-text-secondary">
            {service.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" aria-label="Services" className="section-padding relative">
      <div aria-hidden="true" className="section-divider" />
      <div className="section-container">
        <SectionHeading
          badge={SERVICES_INTRO.heading}
          title="Services"
          subtitle={SERVICES_INTRO.subheading}
          description={SERVICES_INTRO.description}
        />

        <ScrollReveal stagger staggerSpeed="fast">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <ScrollRevealItem key={service.id}>
                <ServiceCard service={service} />
              </ScrollRevealItem>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
