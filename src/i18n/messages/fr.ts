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
    primaryAriaLabel: "Navigation principale",
    skipToContent: "Aller au contenu",
    languageOptions: {
      en: "Anglais",
      fr: "Français",
    },
    toggleNavigation: "Afficher/masquer la navigation",
  },
  hero: {
    ctaProjects: "Voir les projets",
    github: "GitHub",
    linkedin: "LinkedIn",
    school: "ESI Alger (ex-INI)",
    location: "Alger, Algérie",
    typingRoles: ["Passionné d'IA/ML", "Développeur Front-End", "Designer UI/UX"],
  },
  about: {
    eyebrow: "À propos",
    title: "Qui je suis",
    summary:
      "Étudiant en ingénierie informatique à l'ESI Alger, à l'intersection du machine learning, de la vision par ordinateur et du développement web moderne. Je construis des systèmes IA de l'exploration des données jusqu'au déploiement d'API, je livre des interfaces front-end en production et je participe à des datathons et hackathons.",
    tracks: [
      {
        name: "IA / Machine Learning",
        accent: "cyan",
        description:
          "Conception de systèmes orientés données de bout en bout : exploration, modélisation, évaluation et déploiement sous forme d'API. Fort intérêt pour la vision par ordinateur, le NLP, les systèmes de recommandation, l'IA adversariale, l'optimisation et l'inférence en edge / sur appareil.",
      },
      {
        name: "Front-End & UI/UX",
        accent: "violet",
        description:
          "Conception et mise en production d'interfaces avec React, Next.js, Angular, TypeScript et Tailwind, avec une expérience freelance solide : sites vitrines, refontes et outils internes.",
      },
    ],
    sideTrack:
      "J'ai aussi un fort intérêt pour le HPC, les réseaux et le DevOps : parallélisation CUDA, conception de datacenters (spine-leaf, eBGP, ECMP), virtualisation et systèmes Linux.",
  },
  experience: {
    eyebrow: "Expérience",
    title: "Où j'ai travaillé",
    educationLabel: "Formation",
    certificationsLabel: "Certifications",
    communityLabel: "Communauté",
    items: [
      {
        role: "Stagiaire Data Science & IA",
        company: "Student Spec Insights — ESI Alger",
        period: "Sept. – Oct. 2025",
        bullets: [
          "Conception d'un système de recommandation IA de bout en bout pour l'orientation en 4e année, utilisé par plus de 750 étudiants.",
          "Collecte et analyse de plus de 5 années de données académiques ; implémentation de modules PCA et clustering.",
          "Livraison de tableaux de bord interactifs ayant réduit de 80 % le temps d'analyse pour les enseignants et chercheurs.",
        ],
        stack: "Python, FastAPI, SQLAlchemy, React, TypeScript, Tailwind",
      },
      {
        role: "Refonte UI/UX Freelance",
        company: "Windsor School",
        period: "Fév. 2025",
        bullets: [
          "Refonte UI/UX complète du site vitrine de l'école.",
          "Reconstruction de l'architecture de l'information, du parcours utilisateur et de l'intégration front-end responsive.",
        ],
      },
      {
        role: "Développeur Front-End Freelance",
        company: "EURL Ksentini",
        period: "Sept. 2024",
        bullets: [
          "Conception et livraison clé en main d'un site vitrine avec Next.js, optimisé pour le SEO et les performances.",
          "Gestion technique de bout en bout : hébergement, DNS et emails professionnels.",
          "Atteinte du Top 3 sur Google et d'un score Lighthouse de 94 %.",
        ],
        stack: "Next.js, SEO, DNS",
      },
    ],
    education: {
      school: "École Nationale Supérieure d'Informatique (ESI, ex-INI)",
      degree: "Diplôme d'ingénieur en informatique",
      period: "Septembre 2022 → 2027 (en cours)",
      coursework: [
        "Calcul haute performance",
        "Architectures des processeurs",
        "Algorithmes et complexité",
        "Systèmes d'exploitation",
        "Réseaux informatiques",
        "Bases de données / SQL",
        "Compilation (JavaCC / JFlex)",
        "Analyse statistique de données (R, MCA/ACM)",
      ],
    },
    certifications: [
      { name: "Cisco Academy CCNA", date: "Mars 2026" },
      { name: "Containerization and Virtualization", date: "Août 2025" },
    ],
    community: {
      role: "Vice-président",
      org: "Club Shellmates",
      period: "Août 2025 – Présent",
      description:
        "Gestion globale du club et supervision de l'aspect technique (cybersécurité & développement). Pilotage de la plateforme WriteUps Bank pour le partage interne de connaissances CTF.",
    },
  },
  projects: {
    eyebrow: "Projets",
    title: "Ce que j'ai construit",
    filtersAriaLabel: "Filtres de projets",
    filters: {
      all: "Tous",
      ai: "IA / ML",
      frontend: "Front-End",
      hpc: "HPC / Systèmes",
      tools: "Outils",
    },
    viewOnGitHubPrefix: "Voir",
    viewOnGitHubSuffix: "sur GitHub",
    items: [
      {
        title: "Détection de panneaux routiers",
        period: "Avr. 2026 → Présent",
        description:
          "Pipeline de deep learning pour des scénarios de conduite autonome. Optimisation de la taille du modèle et de la vitesse d'inférence pour un déploiement IoT sur appareils de classe ESP32.",
        tags: ["Vision par ordinateur", "Edge AI", "IoT", "Deep Learning"],
        track: "ai",
      },
      {
        title: "Attaque par patch adversarial",
        period: "Mars 2026",
        description:
          "Attaque universelle par patch adversarial sur ResNet-50 avec Expectation over Transformation (EOT), entraînée sur des images réelles pour tromper des classifieurs ImageNet.",
        tags: ["IA adversariale", "ResNet-50", "EOT", "Python"],
        track: "ai",
        link: "https://github.com/mounir19000/adversarial-patch-attack",
      },
      {
        title: "Génération d'alertes cliniques",
        period: "Fév. 2026",
        description:
          "Modèle NLP générant des alertes cliniques à partir des prescriptions médicamenteuses des patients avec 85 % de précision.",
        tags: ["NLP", "Santé", "Python"],
        track: "ai",
        highlight: "3e — CSE DataHack 2026",
      },
      {
        title: "Routage de véhicules avec fenêtres temporelles",
        period: "2026",
        description:
          "Défi d'optimisation : itinéraires, capacité, fenêtres de temps et coût de trajet équilibrés via heuristiques et métaheuristiques.",
        tags: ["Optimisation", "Heuristiques", "Python"],
        track: "ai",
        highlight: "3e — SOAI Haick 2026",
      },
      {
        title: "Recommandation de repas par IA & Voice Chef",
        period: "Sept. 2025",
        description:
          "Moteur de recommandation de repas et interface vocale pour chefs, avec reconnaissance de la parole et classification d'intention. Services prêts pour intégration API.",
        tags: ["Systèmes de recommandation", "Voix", "FastAPI", "React"],
        track: "ai",
        highlight: "Vainqueur — Future Caravane 2025",
        link: "https://github.com/208-FutureCaravane/Recommendation_system_for_meals",
      },
      {
        title: "BookAise — Recherche & recommandation de livres",
        period: "2025",
        description:
          "Plateforme de découverte de livres : front-end Flutter, service IA FastAPI pour recherche et recommandation, appariement sémantique via vector database.",
        tags: ["NLP", "Flutter", "FastAPI", "Vector DB"],
        track: "ai",
        highlight: "4e — MobAI Hackathon",
        link: "https://github.com/mounir19000/BookAise",
      },
      {
        title: "API de mouvement des poissons & comptage de bactéries",
        period: "Juil. 2025",
        description:
          "Services de vision par ordinateur pour mesurer la vitesse de nage des poissons en vidéo et détecter des bactéries via YOLOv8 sur images microscopiques.",
        tags: ["YOLOv8", "FastAPI", "Vision par ordinateur", "IoT"],
        track: "ai",
        link: "https://github.com/junction-DataVim/FishMovement-Speed",
      },
      {
        title: "Reconnaissance faciale pour la présence",
        period: "2024",
        description:
          "Prototype de suivi de présence en temps réel utilisant YOLOv8 pour la détection et ResNet pour la reconnaissance faciale.",
        tags: ["YOLOv8", "ResNet", "Reconnaissance faciale", "Temps réel"],
        track: "ai",
        highlight: "1re — Training Camp 2024",
      },
      {
        title: "Student Specialty Insight System",
        period: "2025",
        description:
          "Application full-stack d'analyse de données étudiantes avec recommandations intelligentes de spécialité basées sur le machine learning.",
        tags: ["React", "FastAPI", "ML", "PCA", "Clustering"],
        track: "ai",
        link: "https://github.com/mounir19000/StudentSpecialtyInsightSystem",
      },
      {
        title: "Analyse de données MPG (R)",
        period: "2025",
        description:
          "Analyse statistique de 234 véhicules : analyses univariée et bivariée, puis Analyse des Correspondances Multiples.",
        tags: ["R", "Statistiques", "MCA"],
        track: "ai",
        link: "https://github.com/mounir19000/mpg-data-analysis-r",
      },
      {
        title: "Datacenter moderne pour l'ESI",
        period: "Fév. 2026 → Présent",
        description:
          "Topologie spine-leaf avec eBGP et ECMP. 5 anneaux de sécurité avec pare-feux, IDS/IPS et segmentation. NaaS pour la gestion des accès utilisateurs.",
        tags: ["Spine-leaf", "eBGP", "ECMP", "IDS/IPS", "NaaS"],
        track: "hpc",
      },
      {
        title: "Parallélisation GPU pour réseaux de neurones",
        period: "Janv. 2026",
        description:
          "Analyse des goulets d'étranglement mémoire et optimisation de kernels via tiling, mémoire partagée, transposition et fusion de kernels en CUDA.",
        tags: ["CUDA", "HPC", "GPU", "Optimisation mémoire"],
        track: "hpc",
        link: "https://github.com/amine-kherroubi/snn-gpu-memory-optimization",
      },
      {
        title: "Simulations réseau",
        period: "Déc. 2024 – Fév. 2025",
        description:
          "Déploiement d'OpenSSH et de vsftpd, simulation de réseaux filaires sous Mininet avec contrôle de bande passante, latence et perte de paquets.",
        tags: ["Mininet", "OpenSSH", "Réseaux", "Linux"],
        track: "hpc",
      },
      {
        title: "AR Food Gallery",
        period: "Sept. 2025",
        description:
          "Galerie culinaire interactive en réalité augmentée mobile. Projet vainqueur du hackathon Future Caravane.",
        tags: ["React", "Vite", "WebXR", "AR"],
        track: "frontend",
        highlight: "Vainqueur — Future Caravane 2025",
      },
      {
        title: "WriteUps Bank — Shellmates",
        period: "Avr. – Mai 2025",
        description:
          "Plateforme interne référençant plus de 50 write-ups CTF, avec filtres dynamiques avancés, routage et rendu Markdown optimisé. Déployée sur Vercel.",
        tags: ["Next.js", "TypeScript", "Vercel"],
        track: "frontend",
        link: "https://github.com/mounir19000/ShellmatesWriteUpBank",
      },
      {
        title: "Dossier médical électronique",
        period: "Déc. 2024 – Janv. 2025",
        description:
          "Lead technique front-end sur un prototype de dossier médical avec intégration API complète et mise en place du workflow Git.",
        tags: ["Angular", "Django", "REST API"],
        track: "frontend",
      },
      {
        title: "Scraper PFE ESI Talents",
        period: "2025",
        description:
          "Scraper Python qui extrait les sujets PFE, décode des emails d'encadrants protégés et exporte les données en CSV.",
        tags: ["Python", "Scraping", "CSV"],
        track: "tools",
        link: "https://github.com/mounir19000/talents-esi-pfe-scraper",
      },
      {
        title: "Atelier parseur JavaCC",
        period: "2025",
        description:
          "Analyse lexicale et développement de parseur avec JavaCC et JFlex : parsing d'expressions et architecture modulaire du parseur.",
        tags: ["JavaCC", "JFlex", "Compilation"],
        track: "tools",
        link: "https://github.com/mounir19000/javacc-parser",
      },
    ],
  },
  hackathons: {
    eyebrow: "Compétitions",
    title: "Hackathons & Datathons",
    subtitle:
      "2 victoires, plus de 4 podiums en IA, NLP, optimisation et vision par ordinateur.",
    items: [
      {
        year: 2025,
        event: "Future Caravane 2025",
        result: "Vainqueur",
        rank: 1,
        description:
          "Hackathon Djezzy (100+ participants) — Développeur IA : recommandation de repas + Voice Chef + AR Food Gallery",
      },
      {
        year: 2024,
        event: "Training Camp 2024",
        result: "1re place",
        rank: 1,
        description: "Système de reconnaissance faciale pour la présence des employés",
      },
      {
        year: 2026,
        event: "CSE DataHack 2026",
        result: "3e place",
        rank: 3,
        description: "NLP en santé — génération d'alertes cliniques",
      },
      {
        year: 2026,
        event: "SOAI Haick 2026",
        result: "3e place",
        rank: 3,
        description: "Défi de routage de véhicules / optimisation",
      },
      {
        year: 2025,
        event: "MobAI Hackathon",
        result: "4e place",
        rank: 4,
        description: "BookAise — Recherche & recommandation de livres",
      },
    ],
  },
  skills: {
    eyebrow: "Compétences",
    title: "Stack technique",
    categories: [
      {
        name: "Langages de programmation",
        accent: "cyan",
        items: [
          "Python",
          "C",
          "C++",
          "Java",
          "JavaScript",
          "TypeScript",
          "SQL",
          "Bash",
          "R",
        ],
      },
      {
        name: "Front-End / Web",
        accent: "violet",
        items: [
          "React.js",
          "Next.js",
          "Angular",
          "Node.js",
          "Tailwind CSS",
          "HTML5",
          "CSS3",
          "WebXR",
          "Vite",
        ],
      },
      {
        name: "ML / IA",
        accent: "cyan",
        items: [
          "Apprentissage supervisé",
          "Clustering",
          "PCA",
          "Systèmes de recommandation",
          "NLP",
          "Vision par ordinateur",
          "IA adversariale",
          "Reconnaissance vocale",
          "Bases de données vectorielles",
        ],
      },
      {
        name: "Stack CV / DL",
        accent: "cyan",
        items: [
          "OpenCV",
          "YOLOv8",
          "ResNet",
          "Détection d'objets",
          "Reconnaissance faciale",
          "Traitement d'images",
        ],
      },
      {
        name: "HPC / Systèmes",
        accent: "cyan",
        items: [
          "CUDA",
          "Optimisation mémoire",
          "Spine-leaf / eBGP",
          "IDS/IPS",
          "GNS3",
          "Wireshark",
          "Mininet",
        ],
      },
      {
        name: "DevOps & Outils",
        accent: "neutral",
        items: [
          "Docker",
          "KVM",
          "VMware",
          "Linux",
          "Git",
          "FastAPI",
          "Django",
          "Postman",
        ],
      },
      {
        name: "Design / UI-UX",
        accent: "violet",
        items: [
          "UI/UX Design",
          "Figma",
          "Photoshop",
          "Illustrator",
          "Architecture de l'information",
          "Responsive Design",
        ],
      },
    ],
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
