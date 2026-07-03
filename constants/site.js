export const SITE = {
  name: "Rafiul Bari Turjo",
  shortName: "R.Dev",
  title: "Software Engineer & Full Stack Developer",
  email: "hello@rafiulbari.dev",
  phone: "+880 1XXX-XXXXXX",
  location: "Bangladesh",
  availability: "Available for Freelance Work",
  cvUrl: "https://drive.google.com/file/d/1dr8pPTZvX_16pAAtZFDwnW6ptNXQcBzK/view?usp=drive_link",
  introVideoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  githubUsername: "TurjoyBari",
  whatsappUrl: "https://wa.me/8801767743402",
  website: "https://rafiulbari.dev",
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const PROFESSIONS = [
  "Software Engineer",
  "React.js Developer",
  "Next.js Developer",
  "Frontend Developer",
  "Backend Developer",
  "Web Developer",
  "AI Integration Specialist",
  "Full Stack Developer",
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com/TurjoyBari",
    icon: "github",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rafiul-bari-turjo-b37001212",
    icon: "linkedin",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/rafiulbari.dev/",
    icon: "instagram",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@RafiulBari-dev",
    icon: "youtube",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/rafiulbariturjo",
    icon: "twitter",
  },
  {
    name: "Discord",
    href: "https://discord.com/users/rafiulbariturjo",
    icon: "discord",
  },
  {
    name: "WhatsApp",
    href: SITE.whatsappUrl,
    icon: "whatsapp",
  },
];

export const DISPLAY_SOCIAL = SOCIAL_LINKS.filter(
  (link) => link.icon !== "twitter"
);

export const HERO_INTRO =
  "Passionate about building scalable systems, clean architecture, and modern UI. I craft high-performance web applications and AI-powered products that deliver exceptional user experiences.";

export const ABOUT_BIO =
  "I'm a dedicated Software Engineer with a deep passion for turning complex problems into elegant, scalable solutions. With expertise spanning frontend and backend development, I specialize in building robust applications using React, Next.js, and Node.js. My approach combines clean architecture principles with performance optimization to deliver products that not only look stunning but perform flawlessly at scale. I thrive on solving challenging technical problems and continuously exploring cutting-edge technologies to stay ahead in this ever-evolving field.";

export const ABOUT_FEATURES = [
  {
    id: "clean-code",
    title: "Clean Code",
    description: "Write scalable, maintainable and readable code.",
    icon: "code",
  },
  {
    id: "performance",
    title: "Performance",
    description: "Build highly optimized fast-loading applications.",
    icon: "rocket",
  },
  {
    id: "collaboration",
    title: "Collaboration",
    description: "Work effectively with teams and clients.",
    icon: "users",
  },
  {
    id: "innovation",
    title: "Innovation",
    description: "Continuously explore cutting-edge technologies.",
    icon: "lightbulb",
  },
  {
    id: "problem-solver",
    title: "Problem Solver",
    description: "Love solving complex technical challenges.",
    icon: "puzzle",
  },
];

export const FOOTER_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const FLOATING_TECH_LABELS = ["React", "Next.js", "Node.js", "AI"];

export const HERO_TECH_BADGES = [
  { label: "React", position: "top-4 -left-4" },
  { label: "Next.js", position: "top-1/4 -right-6" },
  { label: "Node.js", position: "bottom-1/4 -left-8" },
  { label: "AI", position: "bottom-8 -right-4" },
];
