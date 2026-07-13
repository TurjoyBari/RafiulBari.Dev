"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ArrowUpRightFromSquare from "@gravity-ui/icons/ArrowUpRightFromSquare";
import LogoGithub from "@gravity-ui/icons/LogoGithub";
import Calendar from "@gravity-ui/icons/Calendar";
import Persons from "@gravity-ui/icons/Persons";
import Clock from "@gravity-ui/icons/Clock";
import FolderOpen from "@gravity-ui/icons/FolderOpen";
import ChevronLeft from "@gravity-ui/icons/ChevronLeft";
import ChevronRight from "@gravity-ui/icons/ChevronRight";
import { PROJECTS, PROJECT_CATEGORIES } from "@/data/projects";
import { fadeUp, hoverLift } from "@/utils/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal, { ScrollRevealItem } from "@/components/ui/ScrollReveal";
import AnimatedButton from "@/components/ui/AnimatedButton";
import ProjectModal from "@/components/ProjectModal";

const PROJECTS_PER_PAGE = 6;

function getCategoryLabel(categoryId) {
  return PROJECT_CATEGORIES.find((c) => c.id === categoryId)?.label ?? categoryId;
}

function parseProjectMeta(dateString = "") {
  const yearMatch = dateString.match(/(\d{4})/);
  const durationMatch = dateString.match(/\(([^)]+)\)/);
  return {
    year: yearMatch?.[1] ?? null,
    duration: durationMatch?.[1] ?? null,
  };
}

function ProjectCard({ project, onSelect }) {
  const categoryLabel = getCategoryLabel(project.category);
  const { year, duration } = parseProjectMeta(project.date);
  const techPreview = project.technologies?.slice(0, 4) ?? [];
  const extraTechCount = Math.max((project.technologies?.length ?? 0) - techPreview.length, 0);
  const liveUrl = project.links?.live;
  const githubUrl = project.links?.clientRepo;

  return (
    <motion.article
      variants={fadeUp}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="group h-full"
    >
      <motion.div
        variants={hoverLift}
        className="relative flex h-full flex-col overflow-hidden rounded-[24px] border border-[#BFA181]/20 bg-[rgba(36,36,36,0.72)] shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-[border-color,box-shadow] duration-400 ease-out group-hover:border-[#BFA181]/45 group-hover:shadow-[0_20px_48px_rgba(0,0,0,0.42),0_0_28px_rgba(191,161,129,0.14)]"
      >
        {/* Preview image */}
        <div className="relative aspect-video overflow-hidden rounded-t-[24px]">
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-[transform,filter] duration-500 ease-out group-hover:scale-105 group-hover:brightness-110"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-[#1C1C1C]/45 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90"
          />

          <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-4">
            <span className="max-w-[70%] truncate rounded-full border border-[#BFA181]/30 bg-[rgba(28,28,28,0.7)] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#D4C5B0] backdrop-blur-md sm:text-[11px]">
              {categoryLabel}
            </span>
            {liveUrl && (
              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-300 backdrop-blur-md sm:text-[11px]">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"
                />
                Live
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-5 p-6 sm:p-7">
          <div className="space-y-2.5">
            <h3 className="text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-[#BFA181]">
              {project.name}
            </h3>
            <p className="text-sm leading-relaxed text-text-secondary line-clamp-2">
              {project.shortDescription}
            </p>
          </div>

          {/* Tech stack */}
          {techPreview.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {techPreview.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[#BFA181]/25 bg-[rgba(191,161,129,0.08)] px-2.5 py-1 text-[11px] font-medium text-[#D4C5B0] backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
              {extraTechCount > 0 && (
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-text-muted">
                  +{extraTechCount}
                </span>
              )}
            </div>
          )}

          {/* Project stats */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-white/[0.06] py-3 text-[11px] text-text-muted sm:text-xs">
            {year && (
              <span className="inline-flex items-center gap-1.5">
                <Calendar width={13} height={13} className="text-[#BFA181]/80" />
                {year}
              </span>
            )}
            {project.role && (
              <span className="inline-flex items-center gap-1.5">
                <Persons width={13} height={13} className="text-[#BFA181]/80" />
                <span className="max-w-[140px] truncate">{project.role}</span>
              </span>
            )}
            {duration && (
              <span className="inline-flex items-center gap-1.5">
                <Clock width={13} height={13} className="text-[#BFA181]/80" />
                {duration}
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="mt-auto flex items-center gap-2.5 pt-1">
            <AnimatedButton
              variant="primary"
              size="sm"
              onClick={() => onSelect(project)}
              icon={<ArrowUpRightFromSquare width={14} height={14} />}
              iconPosition="right"
              className="flex-1"
            >
              View Details
            </AnimatedButton>

            {liveUrl && (
              <AnimatedButton
                variant="outline"
                size="sm"
                href={liveUrl}
                external
                aria-label={`Open live demo of ${project.name}`}
                className="!px-3"
                icon={<ArrowUpRightFromSquare width={15} height={15} />}
              />
            )}

            {githubUrl && (
              <AnimatedButton
                variant="outline"
                size="sm"
                href={githubUrl}
                external
                aria-label={`View ${project.name} on GitHub`}
                className="!px-3"
                icon={<LogoGithub width={15} height={15} />}
              />
            )}
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}

function EmptyState() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center gap-4 rounded-[24px] border border-[#BFA181]/15 bg-[rgba(36,36,36,0.55)] px-8 py-16 text-center backdrop-blur-xl">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#BFA181]/25 bg-[rgba(191,161,129,0.08)]">
        <FolderOpen width={24} height={24} className="text-[#BFA181]" />
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-white">No projects found</h3>
        <p className="text-sm leading-relaxed text-text-secondary">
          Nothing matches this category yet. Try another filter to explore more
          work from the portfolio.
        </p>
      </div>
    </div>
  );
}

function PaginationControls({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const baseBtn =
    "inline-flex h-10 min-w-10 items-center justify-center rounded-xl border text-sm font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BFA181] focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary";

  return (
    <nav
      aria-label="Project pagination"
      className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:mt-12 sm:gap-2.5"
    >
      <motion.button
        type="button"
        aria-label="Previous page"
        disabled={isFirstPage}
        onClick={() => onPageChange(currentPage - 1)}
        whileHover={isFirstPage ? undefined : { y: -2 }}
        whileTap={isFirstPage ? undefined : { scale: 0.97 }}
        className={`${baseBtn} gap-1.5 px-3.5 ${
          isFirstPage
            ? "cursor-not-allowed border-white/5 bg-white/[0.02] text-text-muted/40"
            : "glass-btn border-[#BFA181]/20 text-text-secondary shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:border-[#BFA181]/40 hover:text-white hover:shadow-[0_8px_24px_rgba(191,161,129,0.12)]"
        }`}
      >
        <ChevronLeft width={16} height={16} />
        <span className="hidden sm:inline">Prev</span>
      </motion.button>

      <div className="flex items-center gap-1.5 rounded-2xl border border-[#BFA181]/15 bg-[rgba(36,36,36,0.55)] p-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.25)] backdrop-blur-xl">
        {pages.map((page) => {
          const isActive = page === currentPage;
          return (
            <motion.button
              key={page}
              type="button"
              aria-label={`Go to page ${page}`}
              aria-current={isActive ? "page" : undefined}
              onClick={() => onPageChange(page)}
              whileHover={isActive ? undefined : { y: -1 }}
              whileTap={{ scale: 0.96 }}
              className={`${baseBtn} ${
                isActive
                  ? "border-transparent bg-[#BFA181] text-[#1C1C1C] shadow-[0_4px_16px_rgba(191,161,129,0.35)]"
                  : "border-transparent bg-transparent text-text-secondary hover:bg-[rgba(191,161,129,0.1)] hover:text-white"
              }`}
            >
              {page}
            </motion.button>
          );
        })}
      </div>

      <motion.button
        type="button"
        aria-label="Next page"
        disabled={isLastPage}
        onClick={() => onPageChange(currentPage + 1)}
        whileHover={isLastPage ? undefined : { y: -2 }}
        whileTap={isLastPage ? undefined : { scale: 0.97 }}
        className={`${baseBtn} gap-1.5 px-3.5 ${
          isLastPage
            ? "cursor-not-allowed border-white/5 bg-white/[0.02] text-text-muted/40"
            : "glass-btn border-[#BFA181]/20 text-text-secondary shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:border-[#BFA181]/40 hover:text-white hover:shadow-[0_8px_24px_rgba(191,161,129,0.12)]"
        }`}
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight width={16} height={16} />
      </motion.button>
    </nav>
  );
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return PROJECTS;
    return PROJECTS.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE)),
    [filteredProjects.length]
  );

  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * PROJECTS_PER_PAGE;
    return filteredProjects.slice(start, start + PROJECTS_PER_PAGE);
  }, [filteredProjects, currentPage]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    setCurrentPage(page);
  };

  const hasProjects = filteredProjects.length > 0;

  return (
    <section id="portfolio" aria-label="Featured Projects" className="section-padding relative">
      <div aria-hidden="true" className="section-divider" />
      <div className="section-container">
        <SectionHeading
          badge="Portfolio"
          title="Featured Projects"
          subtitle="A collection of carefully crafted web applications focused on performance, scalability, and user experience."
        />

        {/* Category filter tabs */}
        <ScrollReveal animation="fadeUp" className="mb-10 md:mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {PROJECT_CATEGORIES.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <motion.button
                  key={category.id}
                  type="button"
                  onClick={() => handleCategoryChange(category.id)}
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
            key={`${activeCategory}-${currentPage}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {hasProjects ? (
              <ScrollReveal stagger staggerSpeed="fast">
                <div className="grid min-h-[480px] auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
                  {paginatedProjects.map((project) => (
                    <ScrollRevealItem key={project.id} className="h-full">
                      <ProjectCard
                        project={project}
                        onSelect={setSelectedProject}
                      />
                    </ScrollRevealItem>
                  ))}
                </div>
              </ScrollReveal>
            ) : (
              <EmptyState />
            )}
          </motion.div>
        </AnimatePresence>

        {hasProjects && (
          <PaginationControls
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
