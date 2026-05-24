import type { Dictionary } from "./types";

const fr: Dictionary = {
  metadata: {
    title: "Mostefai Mounir Sofiane — Ingénieur IA & Front-End",
    description:
      "Étudiant en ingénierie informatique à l'ESI Alger. Systèmes IA/ML, vision par ordinateur, NLP et développement web moderne. De la donnée et des modèles aux API déployées et interfaces soignées.",
    keywords: [
      "IA",
      "Machine Learning",
      "Front-End",
      "React",
      "Next.js",
      "Vision par ordinateur",
      "NLP",
      "Portfolio",
      "ESI Alger",
    ],
    openGraphLocale: "fr_FR",
  },
  navigation: {
    links: [
      { label: "À propos", href: "#about" },
      { label: "Expérience", href: "#experience" },
      { label: "Projets", href: "#projects" },
      { label: "Hackathons", href: "#hackathons" },
      { label: "Compétences", href: "#skills" },
      { label: "Contact", href: "#contact" },
    ],
    languageLabel: "Langue",
    languageOptions: {
      en: "English",
      fr: "Français",
    },
    toggleNavigation: "Afficher/masquer la navigation",
  },
  hero: {
    ctaProjects: "Voir les projets",
    github: "GitHub",
    linkedin: "LinkedIn",
    typingRoles: ["Passionné IA/ML", "Développeur Front-End", "Designer UI/UX"],
  },
  about: {
    eyebrow: "À propos",
    title: "Qui je suis",
  },
  experience: {
    eyebrow: "Expérience",
    title: "Où j'ai travaillé",
    educationLabel: "Formation",
    certificationsLabel: "Certifications",
    communityLabel: "Communauté",
  },
  projects: {
    eyebrow: "Projets",
    title: "Ce que j'ai construit",
    filters: {
      all: "Tous",
      ai: "IA / ML",
      frontend: "Front-End",
      hpc: "HPC / Systèmes",
      tools: "Outils",
    },
    viewOnGitHubPrefix: "Voir",
    viewOnGitHubSuffix: "sur GitHub",
  },
  hackathons: {
    eyebrow: "Compétitions",
    title: "Hackathons & Datathons",
    subtitle:
      "2 victoires, plus de 4 podiums en IA, NLP, optimisation et vision par ordinateur.",
  },
  skills: {
    eyebrow: "Compétences",
    title: "Stack technique",
  },
  contact: {
    eyebrow: "Contact",
    title: "Entrons en contact",
    subtitle:
      "Ouvert aux stages IA / Edge AI, projets de fin d'études (PFE), hackathons, collaborations de recherche et missions freelance front-end / UI-UX.",
    emailLabel: "Email",
    phoneLabel: "Téléphone",
    copied: "Copié !",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  footer: {
    builtWith: "Conçu avec Next.js, Tailwind CSS et Framer Motion",
  },
};

export default fr;
