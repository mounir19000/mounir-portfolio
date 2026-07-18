import type { Dictionary } from "./types";

const fr: Dictionary = {
  metadata: {
    title: "Mostefai Mounir Sofiane — Ingénieur IA & front-end",
    description:
      "Élève ingénieur en informatique à l'ESI Alger, spécialisé dans les systèmes d'IA/ML, la vision par ordinateur, le NLP et le développement web moderne. Je transforme les données et les modèles en API déployées et interfaces soignées.",
    keywords: [
      "IA",
      "Machine Learning",
      "front-end",
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
    toggleNavigation: "Ouvrir ou fermer la navigation",
  },
  hero: {
    ctaProjects: "Voir les projets",
    github: "GitHub",
    linkedin: "LinkedIn",
    school: "ESI Alger (ex-INI)",
    location: "Alger, Algérie",
    typingRoles: [
      "Ingénieur IA/ML en formation",
      "Développeur front-end",
      "Designer UI/UX",
    ],
  },
  about: {
    eyebrow: "À propos",
    title: "Qui je suis",
    summary:
      "Élève ingénieur en informatique à l'ESI Alger, à l'intersection du machine learning, de la vision par ordinateur et du développement web moderne. Je conçois des systèmes d'IA, de l'exploration des données au déploiement d'API. Je livre des interfaces front-end en production et je participe à des datathons et hackathons.",
    tracks: [
      {
        name: "IA / Machine Learning",
        accent: "cyan",
        description:
          "Conception de systèmes pilotés par les données, de bout en bout : exploration, modélisation, évaluation et déploiement sous forme d'API. Je m'intéresse particulièrement à la vision par ordinateur, au NLP, aux systèmes de recommandation, à l'IA adversariale, à l'optimisation et à l'inférence edge ou embarquée.",
      },
      {
        name: "Front-end & UI/UX",
        accent: "violet",
        description:
          "Conception et mise en production d'interfaces avec React, Next.js, Angular, TypeScript et Tailwind, avec une solide expérience freelance sur des sites vitrines, des refontes et des outils internes.",
      },
    ],
    sideTrack:
      "Je travaille aussi sur le HPC, les réseaux et le DevOps : parallélisation CUDA, conception de datacenters (spine-leaf, eBGP, ECMP), virtualisation et systèmes Linux.",
  },
  experience: {
    eyebrow: "Expérience",
    title: "Parcours",
    educationLabel: "Formation",
    certificationsLabel: "Certifications",
    communityLabel: "Communauté",
    items: [
      {
        role: "Stagiaire en data science et IA",
        company: "Student Spec Insights — ESI Alger",
        period: "Sept. – Oct. 2025",
        bullets: [
          "Conception d'un système de recommandation IA de bout en bout pour le choix de spécialité en 4e année, utilisé par plus de 750 étudiants.",
          "Collecte et analyse de plus de 5 années de données académiques ; implémentation de modules de PCA et de clustering.",
          "Livraison de tableaux de bord interactifs ayant réduit de 80 % le temps d'analyse pour les enseignants et chercheurs.",
        ],
        stack: "Python, FastAPI, SQLAlchemy, React, TypeScript, Tailwind",
      },
      {
        role: "Refonte UI/UX freelance",
        company: "Windsor School",
        period: "Fév. 2025",
        bullets: [
          "Refonte UI/UX complète du site vitrine de l'école.",
          "Reconstruction de l'architecture de l'information, du parcours utilisateur et de l'intégration front-end adaptative.",
        ],
      },
      {
        role: "Développeur front-end freelance",
        company: "EURL Ksentini",
        period: "Sept. 2024",
        bullets: [
          "Conception et livraison clé en main d'un site vitrine avec Next.js, optimisé pour le SEO et les performances.",
          "Gestion technique de bout en bout : hébergement, DNS et adresses e-mail professionnelles.",
          "Atteinte du top 3 des résultats Google et d'un score Lighthouse de 94/100.",
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
        "Analyse statistique de données (R, ACM)",
      ],
    },
    certifications: [
      { name: "Cisco Academy CCNA", date: "Mars 2026" },
      { name: "Containerization and Virtualization", date: "Août 2025" },
    ],
    community: {
      role: "Vice-président",
      org: "Club Shellmates",
      period: "Août 2025 – aujourd'hui",
      description:
        "Gestion globale du club et supervision des volets techniques en cybersécurité et développement. Pilotage de la plateforme WriteUps Bank pour le partage interne de connaissances CTF.",
    },
  },
  projects: {
    eyebrow: "Projets",
    title: "Ce que j'ai réalisé",
    filtersAriaLabel: "Filtres de projets",
    filters: {
      all: "Tous",
      ai: "IA / ML",
      frontend: "Front-end",
      hpc: "HPC / Systèmes",
      tools: "Outils",
    },
    viewOnGitHubPrefix: "Voir",
    viewOnGitHubSuffix: "sur GitHub",
    items: [
      {
        title: "Détection de panneaux routiers",
        period: "Avr. – Juin 2026",
        description:
          "Pipeline de deep learning pour des scénarios de conduite autonome, optimisé pour réduire la taille du modèle et accélérer l'inférence sur des appareils IoT de classe ESP32.",
        tags: ["Vision par ordinateur", "Edge AI", "IoT", "Deep Learning"],
        track: "ai",
      },
      {
        title: "Attaque par patch adversarial",
        period: "Mars 2026",
        description:
          "Attaque universelle par patch adversarial sur ResNet-50 avec Expectation over Transformation (EOT), entraînée sur des images réelles pour induire en erreur des classifieurs ImageNet.",
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
          "Défi d'optimisation équilibrant itinéraires, capacité, fenêtres temporelles et coûts de trajet grâce à des heuristiques et métaheuristiques.",
        tags: ["Optimisation", "Heuristiques", "Python"],
        track: "ai",
        highlight: "3e — SOAI Haick 2026",
      },
      {
        title: "Recommandation de repas par IA & Voice Chef",
        period: "Sept. 2025",
        description:
          "Moteur de recommandation de repas et interface vocale pour chefs, avec reconnaissance de la parole et classification d'intention. Services prêts à être intégrés via API.",
        tags: ["Systèmes de recommandation", "Voix", "FastAPI", "React"],
        track: "ai",
        highlight: "Vainqueur — Future Caravane 2025",
        link: "https://github.com/208-FutureCaravane/Recommendation_system_for_meals",
      },
      {
        title: "BookAise — Recherche & recommandation de livres",
        period: "2025",
        description:
          "Plateforme de découverte de livres : front-end Flutter, service IA FastAPI de recherche et recommandation, et appariement sémantique via base de données vectorielle.",
        tags: ["NLP", "Flutter", "FastAPI", "Vector DB"],
        track: "ai",
        highlight: "4e — MobAI Hackathon",
        link: "https://github.com/mounir19000/BookAise",
      },
      {
        title: "API de suivi du mouvement des poissons & comptage de bactéries",
        period: "Juil. 2025",
        description:
          "Services de vision par ordinateur pour mesurer la vitesse de nage des poissons en vidéo et détecter des bactéries via YOLOv8 sur images microscopiques.",
        tags: ["YOLOv8", "FastAPI", "Vision par ordinateur", "IoT"],
        track: "ai",
        link: "https://github.com/junction-DataVim/FishMovement-Speed",
      },
      {
        title: "Reconnaissance faciale pour le suivi de présence",
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
          "Application full-stack d'analyse de données étudiantes avec recommandations intelligentes de spécialité fondées sur le machine learning.",
        tags: ["React", "FastAPI", "ML", "PCA", "Clustering"],
        track: "ai",
        link: "https://github.com/mounir19000/StudentSpecialtyInsightSystem",
      },
      {
        title: "Analyse de données MPG (R)",
        period: "2025",
        description:
          "Analyse statistique de 234 véhicules : analyses univariées et bivariées, puis analyse des correspondances multiples.",
        tags: ["R", "Statistiques", "MCA"],
        track: "ai",
        link: "https://github.com/mounir19000/mpg-data-analysis-r",
      },
      {
        title: "Datacenter moderne pour l'ESI",
        period: "Fév. 2026 → aujourd'hui",
        description:
          "Topologie spine-leaf avec eBGP et ECMP. Cinq anneaux de sécurité avec pare-feu, IDS/IPS et segmentation. NaaS pour la gestion des accès utilisateurs.",
        tags: ["Spine-leaf", "eBGP", "ECMP", "IDS/IPS", "NaaS"],
        track: "hpc",
      },
      {
        title: "Parallélisation GPU de réseaux de neurones",
        period: "Janv. 2026",
        description:
          "Analyse des goulets d'étranglement mémoire et optimisation de kernels CUDA via tiling, mémoire partagée, transposition et fusion de kernels.",
        tags: ["CUDA", "HPC", "GPU", "Optimisation mémoire"],
        track: "hpc",
        link: "https://github.com/amine-kherroubi/snn-gpu-memory-optimization",
      },
      {
        title: "Simulations réseau",
        period: "Déc. 2024 – Fév. 2025",
        description:
          "Déploiement d'OpenSSH et de vsftpd, puis simulation de réseaux filaires sous Mininet avec contrôle de la bande passante, de la latence et de la perte de paquets.",
        tags: ["Mininet", "OpenSSH", "Réseaux", "Linux"],
        track: "hpc",
      },
      {
        title: "AR Food Gallery",
        period: "Sept. 2025",
        description:
          "Galerie culinaire interactive en réalité augmentée mobile. Projet lauréat du hackathon Future Caravane.",
        tags: ["React", "Vite", "WebXR", "AR"],
        track: "frontend",
        highlight: "Vainqueur — Future Caravane 2025",
      },
      {
        title: "WriteUps Bank — Shellmates",
        period: "Avr. – Mai 2025",
        description:
          "Plateforme interne répertoriant plus de 50 write-ups CTF, avec filtres dynamiques avancés, routage et rendu Markdown optimisé. Déployée sur Vercel.",
        tags: ["Next.js", "TypeScript", "Vercel"],
        track: "frontend",
        link: "https://github.com/mounir19000/ShellmatesWriteUpBank",
      },
      {
        title: "Dossier médical électronique",
        period: "Déc. 2024 – Janv. 2025",
        description:
          "Responsable technique front-end sur un prototype de dossier médical avec intégration API complète et mise en place du workflow Git.",
        tags: ["Angular", "Django", "REST API"],
        track: "frontend",
      },
      {
        title: "Scraper PFE ESI Talents",
        period: "2025",
        description:
          "Script de scraping Python qui extrait les sujets PFE, décode des adresses e-mail d'encadrants protégées et exporte les données en CSV.",
        tags: ["Python", "Scraping", "CSV"],
        track: "tools",
        link: "https://github.com/mounir19000/talents-esi-pfe-scraper",
      },
      {
        title: "Atelier JavaCC sur les parseurs",
        period: "2025",
        description:
          "Analyse lexicale et développement de parseurs avec JavaCC et JFlex : analyse d'expressions et architecture modulaire du parseur.",
        tags: ["JavaCC", "JFlex", "Compilation"],
        track: "tools",
        link: "https://github.com/mounir19000/javacc-parser",
      },
    ],
  },
  hackathons: {
    eyebrow: "Compétitions",
    title: "Hackathons et datathons",
    subtitle:
      "2 victoires et plus de 4 podiums en IA, NLP, optimisation et vision par ordinateur.",
    items: [
      {
        year: 2025,
        event: "Future Caravane 2025",
        result: "Vainqueur",
        rank: 1,
        description:
          "Hackathon Djezzy (plus de 100 participants) — développeur IA : recommandation de repas + Voice Chef + AR Food Gallery",
      },
      {
        year: 2024,
        event: "Training Camp 2024",
        result: "1re place",
        rank: 1,
        description:
          "Système de reconnaissance faciale pour le suivi de présence des employés",
      },
      {
        year: 2026,
        event: "CSE DataHack 2026",
        result: "3e place",
        rank: 3,
        description: "NLP appliqué à la santé — génération d'alertes cliniques",
      },
      {
        year: 2026,
        event: "SOAI Haick 2026",
        result: "3e place",
        rank: 3,
        description: "Défi d'optimisation et de routage de véhicules",
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
        name: "Front-end / Web",
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
        name: "Vision par ordinateur / Deep learning",
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
        name: "DevOps et outils",
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
          "Design responsive",
        ],
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Me contacter",
    subtitle:
      "Ouvert aux stages en IA / IA embarquée, aux projets de fin d'études (PFE), aux hackathons, aux collaborations de recherche et aux missions freelance en front-end / UI-UX.",
    emailLabel: "Email",
    phoneLabel: "Téléphone",
    copied: "Copié !",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  footer: {
    builtWith: "Développé avec Next.js, Tailwind CSS et Framer Motion",
  },
};

export default fr;
