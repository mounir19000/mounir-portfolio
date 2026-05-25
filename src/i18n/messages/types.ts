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
    primaryAriaLabel: string;
    skipToContent: string;
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
    school: string;
    location: string;
    typingRoles: string[];
  };
  about: {
    eyebrow: string;
    title: string;
    summary: string;
    tracks: Array<{
      name: string;
      accent: "cyan" | "violet";
      description: string;
    }>;
    sideTrack: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    educationLabel: string;
    certificationsLabel: string;
    communityLabel: string;
    items: Array<{
      role: string;
      company: string;
      period: string;
      bullets: string[];
      stack?: string;
    }>;
    education: {
      school: string;
      degree: string;
      period: string;
      coursework: string[];
    };
    certifications: Array<{
      name: string;
      date: string;
    }>;
    community: {
      role: string;
      org: string;
      period: string;
      description: string;
    };
  };
  projects: {
    eyebrow: string;
    title: string;
    filtersAriaLabel: string;
    filters: {
      all: string;
      ai: string;
      frontend: string;
      hpc: string;
      tools: string;
    };
    viewOnGitHubPrefix: string;
    viewOnGitHubSuffix: string;
    items: Array<{
      title: string;
      period: string;
      description: string;
      tags: string[];
      track: "ai" | "frontend" | "hpc" | "tools";
      link?: string;
      highlight?: string;
    }>;
  };
  hackathons: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Array<{
      year: number;
      event: string;
      result: string;
      rank: 1 | 3 | 4;
      description?: string;
    }>;
  };
  skills: {
    eyebrow: string;
    title: string;
    categories: Array<{
      name: string;
      accent: "cyan" | "violet" | "neutral";
      items: string[];
    }>;
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
