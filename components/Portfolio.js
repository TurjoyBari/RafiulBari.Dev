"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ArrowUpRightFromSquare from "@gravity-ui/icons/ArrowUpRightFromSquare";
import { PROJECTS, PROJECT_CATEGORIES } from "@/data/projects";
import { fadeUp, hoverScale } from "@/utils/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal, { ScrollRevealItem } from "@/components/ui/ScrollReveal";
import AnimatedButton from "@/components/ui/AnimatedButton";
import ProjectModal from "@/components/ProjectModal";

function ProjectCard({ project, onSelect }) {
  return (
    <motion.article
      variants={fadeUp}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="group"
    >
      <motion.div
        variants={hoverScale}
        className="glass-card glass-card-lg flex h-full flex-col overflow-hidden"
      >
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/30 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{ boxShadow: "inset 0 0 60px rgba(191, 161, 129, 0.1)" }}
          />
        </div>

        <div className="flex flex-1 flex-col gap-4 p-6">
          <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-[#BFA181]">
            {project.name}
          </h3>
          <p className="flex-1 text-sm leading-relaxed text-text-secondary line-clamp-2">
            {project.shortDescription}
          </p>
          <AnimatedButton
            variant="outline"
            size="sm"
            onClick={() => onSelect(project)}
            icon={<ArrowUpRightFromSquare width={16} height={16} />}
            iconPosition="right"
            className="w-full"
          >
            View Details
          </AnimatedButton>
        </div>
      </motion.div>
    </motion.article>
  );
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return PROJECTS;
    return PROJECTS.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="portfolio" aria-label="Featured Projects" className="section-padding relative">
      <div aria-hidden="true" className="section-divider" />
      <div className="section-container">
        <SectionHeading title="Featured Projects" />

        {/* Category filter tabs */}
        <ScrollReveal animation="fadeUp" className="mb-10 md:mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {PROJECT_CATEGORIES.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <motion.button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  whileTap={{ scale: 0.98 }}
                  className={`rounded-2xl px-4 py-2.5 text-xs font-medium transition-all duration-[400ms] sm:text-sm ${
                    isActive
                      ? "gradient-btn text-white"
                      : "glass-btn text-text-secondary hover:text-white"
                  }`}
                >
                  {category.label}
                </motion.button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <ScrollReveal stagger staggerSpeed="fast">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((project) => (
                  <ScrollRevealItem key={project.id}>
                    <ProjectCard
                      project={project}
                      onSelect={setSelectedProject}
                    />
                  </ScrollRevealItem>
                ))}
              </div>
            </ScrollReveal>

            {filteredProjects.length === 0 && (
              <p className="py-12 text-center text-text-muted">
                No projects found in this category.
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
