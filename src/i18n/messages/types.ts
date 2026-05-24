export interface Dictionary {
  metadata: {
    title: string;
    description: string;
    keywords: string[];
    openGraphLocale: string;
  };
  navigation: {
    links: Array<{ label: string; href: string }>;
    languageLabel: string;
    languageOptions: {
      en: string;
      fr: string;
    };
    toggleNavigation: string;
  };
  hero: {
    ctaProjects: string;
    github: string;
    linkedin: string;
  };
  about: {
    eyebrow: string;
    title: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    educationLabel: string;
    certificationsLabel: string;
    communityLabel: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    filters: {
      all: string;
      ai: string;
      frontend: string;
      hpc: string;
      tools: string;
    };
    viewOnGitHubPrefix: string;
    viewOnGitHubSuffix: string;
  };
  hackathons: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  skills: {
    eyebrow: string;
    title: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    emailLabel: string;
    phoneLabel: string;
    copied: string;
    github: string;
    linkedin: string;
  };
  footer: {
    builtWith: string;
  };
}
