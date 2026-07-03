"use client";

import { motion } from "framer-motion";
import LogoGithub from "@gravity-ui/icons/LogoGithub";
import LogoNodejs from "@gravity-ui/icons/LogoNodejs";
import AbbrApi from "@gravity-ui/icons/AbbrApi";
import FaceRobotSmile from "@gravity-ui/icons/FaceRobotSmile";
import BranchesDown from "@gravity-ui/icons/BranchesDown";
import { SKILLS } from "@/data/skills";
import { fadeUp, hoverLift, progressBar, scrollRevealViewport } from "@/utils/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal, { ScrollRevealItem } from "@/components/ui/ScrollReveal";

function ReactIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.47-1.02-.97-1.51-1.5-.82.28-1.63.48-2.39.62-.72.13-1.38.19-1.97.17-.6-.03-1.05-.12-1.33-.3-.28-.18-.42-.4-.42-.66 0-.26.14-.48.42-.66.28-.18.73-.27 1.33-.3.59-.02 1.25.04 1.97.17.76.14 1.57.34 2.39.62.49-.53.99-1.03 1.51-1.5-1.59-1.5-2.97-2.08-3.6-1.7-.63.38-.63 1.22 0 2.08.63.86 1.97 1.86 3.6 2.54 1.63.68 3.23 1.02 4.63 1.02 1.4 0 3-.34 4.63-1.02 1.63-.68 2.97-1.68 3.6-2.54.63-.86.63-1.7 0-2.08-.63-.38-2.01.2-3.6 1.7.52.47 1.02.97 1.51 1.5.82-.28 1.63-.48 2.39-.62.72-.13 1.38-.19 1.97-.17.6.03 1.05.12 1.33.3.28.18.42.4.42.66 0 .26-.14.48-.42.66-.28.18-.73.27-1.33.3-.59.02-1.25-.04-1.97-.17-.76-.14-1.57-.34-2.39-.62-.49.53-.99 1.03-1.51 1.5 1.59 1.5 2.97 2.08 3.6 1.7.63-.38.63-1.22 0-2.08C18.97 14.86 17.63 13.86 16 13.18 14.37 12.5 12.77 12.16 11.37 12.16c-1.4 0-3 .34-4.63 1.02C5.11 13.86 3.77 14.86 3.14 15.72c-.63.86-.63 1.7 0 2.08M12 4.16c1.4 0 3 .34 4.63 1.02 1.63.68 2.97 1.68 3.6 2.54.63.86.63 1.7 0 2.08-.63.38-2.01-.2-3.6-1.7.52-.47 1.02-.97 1.51-1.5-.82-.28-1.63-.48-2.39-.62-.72-.13-1.38-.19-1.97-.17-.6.03-1.05.12-1.33.3-.28.18-.42.4-.42.66 0 .26.14.48.42.66.28.18.73.27 1.33.3.59.02 1.25-.04 1.97-.17.76-.14 1.57-.34 2.39-.62.49.53.99 1.03 1.51 1.5-1.59 1.5-2.97 2.08-3.6 1.7-.63-.38-.63-1.22 0-2.08.63-.86 1.97-1.86 3.6-2.54C9 4.5 10.6 4.16 12 4.16M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Z" />
    </svg>
  );
}

function NextjsIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.251 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.901-1.192-1.957-2.62l-1.919-2.592-2.404-3.558-.003-.002c-.667-.978-1.913-2.789-2.768-4.02L12.558 0h-.986zm3.036 13.27a.363.363 0 0 1 .407.006l2.916 2.085a.24.24 0 0 1-.133.431h-1.263l-2.019-1.444a.363.363 0 0 1-.164-.311V13.27z" />
    </svg>
  );
}

function TypescriptIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .19.053.37.156.537.104.166.252.304.443.413.19.109.413.228.668.354.304.15.599.296.886.436.588.279 1.126.571 1.612.875.486.304.905.633 1.257.986.352.354.627.765.825 1.235.197.47.296 1.004.296 1.602 0 .813-.187 1.532-.561 2.156-.374.624-.905 1.141-1.592 1.551a7.019 7.019 0 0 1-2.428.928 11.383 11.383 0 0 1-3.056.392c-.619 0-1.228-.043-1.826-.129a7.218 7.218 0 0 1-1.711-.456v-2.615a5.893 5.893 0 0 0 3.237 1.02c.333.015.664-.045.978-.175a1.65 1.65 0 0 0 .784-.756 2.255 2.255 0 0 0-.001-1.713 1.901 1.901 0 0 0-.784-.755 7.734 7.734 0 0 0-1.022-.392 19.47 19.47 0 0 1-1.612-.875 8.128 8.128 0 0 1-1.257-.986 3.894 3.894 0 0 1-.825-1.235 3.985 3.985 0 0 1-.296-1.602c0-.813.187-1.532.561-2.156.374-.624.905-1.141 1.592-1.551a6.875 6.875 0 0 1 2.428-.928c.864-.086 1.728-.129 2.592-.129zM15.75 3.375V14.25h-2.578V5.578h-3.656V3.375z" />
    </svg>
  );
}

function TailwindIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
    </svg>
  );
}

function ExpressIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.862.808l5.918-7.922L12.9 4.267a1.466 1.466 0 0 1 1.862-.808l3.45 4.771 3.45-4.771a1.466 1.466 0 0 1 1.862.808l-5.918 7.922 5.918 7.922a1.529 1.529 0 0 1-.724 1.891zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.773H1.116C.972 15.987.764 18.523 2.86 20.13c2.13 1.634 4.868.673 5.777-1.367l1.634 1.25c-2.065 3.626-7.718 4.746-10.812 1.768C-1.18 18.452-.213 13.973 0 11.576h.002z" />
    </svg>
  );
}

function MongodbIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.675c.001-.608-.079-1.274-.297-1.707z" />
    </svg>
  );
}

function PostgresqlIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M23.559 10.724c-.304-.155-1.063-.537-1.855-.768-.028-.008-.056-.016-.084-.024-1.457-.408-2.648-.6-3.768-.6-1.12 0-2.311.192-3.768.6-.028.008-.056.016-.084.024-.792.231-1.551.613-1.855.768-.304.155-.608.463-.608.924v1.232c0 .461.304.769.608.924.304.155 1.063.537 1.855.768.028.008.056.016.084.024 1.457.408 2.648.6 3.768.6 1.12 0 2.311-.192 3.768-.6.028-.008.056-.016.084-.024.792-.231 1.551-.613 1.855-.768.304-.155.608-.463.608-.924v-1.232c0-.461-.304-.769-.608-.924zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
    </svg>
  );
}

const SKILL_ICONS = {
  react: ReactIcon,
  nextjs: NextjsIcon,
  typescript: TypescriptIcon,
  tailwind: TailwindIcon,
  nodejs: LogoNodejs,
  express: ExpressIcon,
  mongodb: MongodbIcon,
  postgresql: PostgresqlIcon,
  api: AbbrApi,
  git: BranchesDown,
  github: LogoGithub,
  ai: FaceRobotSmile,
};

function SkillCard({ skill }) {
  const Icon = SKILL_ICONS[skill.icon] || AbbrApi;

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
        className="glass-card flex h-full flex-col gap-5 p-5 sm:p-6"
        style={{ "--skill-color": skill.color }}
      >
        <div className="flex items-center justify-between">
          <div
            className="icon-container h-12 w-12 transition-all duration-[400ms]"
            style={{ color: skill.color }}
          >
            <Icon width={22} height={22} />
          </div>
          <span className="text-sm font-bold text-text-muted">
            {skill.proficiency}%
          </span>
        </div>

        <h3 className="text-sm font-semibold text-white sm:text-base">{skill.name}</h3>

        <div className="mt-auto">
          <div className="h-2 w-full overflow-hidden rounded-full bg-white/[0.04]">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: `linear-gradient(90deg, ${skill.color}, ${skill.color}66)`,
                boxShadow: `0 0 12px ${skill.color}40`,
              }}
              initial="hidden"
              whileInView="visible"
              viewport={scrollRevealViewport}
              variants={progressBar(skill.proficiency)}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" aria-label="Tech Stack and Expertise" className="section-padding relative">
      <div aria-hidden="true" className="section-divider" />
      <div className="section-container">
        <SectionHeading title="Tech Stack & Expertise" />

        <ScrollReveal stagger staggerSpeed="fast">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {SKILLS.map((skill) => (
              <ScrollRevealItem key={skill.id}>
                <SkillCard skill={skill} />
              </ScrollRevealItem>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
