"use client";

import { useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Xmark from "@gravity-ui/icons/Xmark";
import Check from "@gravity-ui/icons/Check";
import ArrowUpRightFromSquare from "@gravity-ui/icons/ArrowUpRightFromSquare";
import LogoGithub from "@gravity-ui/icons/LogoGithub";
import { modalBackdrop, modalContent } from "@/utils/animations";
import AnimatedButton from "@/components/ui/AnimatedButton";
import ProjectImageSlider from "@/components/ui/ProjectImageSlider";

function getProjectGallery(project) {
  return [project.image, ...(project.screenshots || [])];
}

export default function ProjectModal({ project, onClose }) {
  const gallery = useMemo(
    () => (project ? getProjectGallery(project) : []),
    [project]
  );

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.button
            type="button"
            aria-label="Close modal backdrop"
            variants={modalBackdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            variants={modalContent}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl modal-glass"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full glass-btn text-white transition-all duration-300 ease-out hover:-translate-y-0.5"
            >
              <Xmark width={18} height={18} />
            </button>

            <div className="overflow-y-auto" data-lenis-prevent>
              <ProjectImageSlider
                key={project.id}
                images={gallery}
                projectName={project.name}
              />

              <div className="space-y-7 px-6 pb-8 pt-2 sm:px-8 sm:pb-10">
                <div>
                  <h2
                    id="project-modal-title"
                    className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
                  >
                    {project.name}
                  </h2>
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#BFA181]">
                    Project Overview
                  </h3>
                  <p className="leading-[1.75] text-text-secondary">
                    {project.overview}
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#BFA181]">
                    Key Features
                  </h3>
                  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {project.keyFeatures.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-text-secondary"
                      >
                        <Check
                          width={16}
                          height={16}
                          className="mt-0.5 shrink-0 text-[#BFA181]"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="glass-card rounded-xl p-4">
                    <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
                      Date
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      {project.date}
                    </p>
                  </div>
                  <div className="glass-card rounded-xl p-4">
                    <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
                      My Role
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      {project.role}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#BFA181]">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-[#BFA181]/15 bg-[#BFA181]/5 px-3 py-1.5 text-xs font-medium text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#BFA181]">
                    Description
                  </h3>
                  <p className="leading-[1.75] text-text-secondary">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 border-t border-white/10 pt-6">
                  {project.links?.live && (
                    <AnimatedButton
                      href={project.links.live}
                      external
                      size="sm"
                      icon={<ArrowUpRightFromSquare width={16} height={16} />}
                    >
                      Launch Live Site
                    </AnimatedButton>
                  )}
                  {project.links?.clientRepo && (
                    <AnimatedButton
                      variant="outline"
                      href={project.links.clientRepo}
                      external
                      size="sm"
                      icon={<LogoGithub width={16} height={16} />}
                    >
                      Client Repository
                    </AnimatedButton>
                  )}
                  {project.links?.serverRepo && (
                    <AnimatedButton
                      variant="outline"
                      href={project.links.serverRepo}
                      external
                      size="sm"
                      icon={<LogoGithub width={16} height={16} />}
                    >
                      Server Repository
                    </AnimatedButton>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
