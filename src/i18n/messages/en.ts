import type { Dictionary } from "./types";

const en: Dictionary = {
  metadata: {
    title: "Mostefai Mounir Sofiane — AI & Front-End Engineer",
    description:
      "Computer Science engineering student at ESI Algiers. AI/ML systems, computer vision, NLP, and modern web development. From data and models to deployed APIs and polished interfaces.",
    keywords: [
      "AI",
      "Machine Learning",
      "Front-End",
      "React",
      "Next.js",
      "Computer Vision",
      "NLP",
      "Portfolio",
      "ESI Algiers",
    ],
    openGraphLocale: "en_US",
  },
  navigation: {
    links: [
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Hackathons", href: "#hackathons" },
      { label: "Skills", href: "#skills" },
      { label: "Contact", href: "#contact" },
    ],
    languageLabel: "Language",
    languageOptions: {
      en: "English",
      fr: "Français",
    },
    toggleNavigation: "Toggle navigation",
  },
  hero: {
    ctaProjects: "View Projects",
    github: "GitHub",
    linkedin: "LinkedIn",
    typingRoles: ["AI/ML Enthusiast", "Front-End Developer", "UI/UX Designer"],
  },
  about: {
    eyebrow: "About",
    title: "Who I Am",
  },
  experience: {
    eyebrow: "Experience",
    title: "Where I've Worked",
    educationLabel: "Education",
    certificationsLabel: "Certifications",
    communityLabel: "Community",
  },
  projects: {
    eyebrow: "Projects",
    title: "What I've Built",
    filters: {
      all: "All",
      ai: "AI / ML",
      frontend: "Front-End",
      hpc: "HPC / Systems",
      tools: "Tools",
    },
    viewOnGitHubPrefix: "View",
    viewOnGitHubSuffix: "on GitHub",
  },
  hackathons: {
    eyebrow: "Competitions",
    title: "Hackathons & Datathons",
    subtitle:
      "2 wins, 4+ podium finishes across AI, NLP, optimization, and computer vision challenges.",
  },
  skills: {
    eyebrow: "Skills",
    title: "Tech Stack",
  },
  contact: {
    eyebrow: "Contact",
    title: "Get in Touch",
    subtitle:
      "Open to AI / Edge AI internships, end-of-studies projects (PFE), hackathons, research collaborations, and freelance front-end / UI-UX work.",
    emailLabel: "Email",
    phoneLabel: "Phone",
    copied: "Copied!",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  footer: {
    builtWith: "Built with Next.js, Tailwind CSS & Framer Motion",
  },
};

export default en;
