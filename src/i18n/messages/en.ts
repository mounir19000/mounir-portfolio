import type { Dictionary } from "./types";

const en: Dictionary = {
  metadata: {
    title: "Mostefai Mounir Sofiane — AI & Front-end Engineer",
    description:
      "Engineering student in computer science at ESI Algiers, focused on AI/ML systems, computer vision, NLP, and modern web development. I take projects from data exploration and modeling to deployed APIs and polished interfaces.",
    keywords: [
      "AI",
      "Machine Learning",
      "Front-end",
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
    primaryAriaLabel: "Primary navigation",
    skipToContent: "Skip to content",
    languageOptions: {
      en: "English",
      fr: "Français",
    },
    toggleNavigation: "Toggle navigation",
  },
  hero: {
    ctaProjects: "View projects",
    github: "GitHub",
    linkedin: "LinkedIn",
    school: "ESI Algiers (ex-INI)",
    location: "Algiers, Algeria",
    typingRoles: [
      "AI/ML Engineer in Training",
      "Front-end Developer",
      "UI/UX Designer",
    ],
  },
  about: {
    eyebrow: "About",
    title: "Who I Am",
    summary:
      "Engineering student in computer science at ESI Algiers, working at the intersection of machine learning, computer vision, and modern web development. I build AI systems from data exploration to API deployment, ship production front-end interfaces, and compete in datathons and hackathons.",
    tracks: [
      {
        name: "AI / Machine Learning",
        accent: "cyan",
        description:
          "Building data-driven systems end to end: exploration, modeling, evaluation, and deployment as APIs. Strong interests in computer vision, NLP, recommender systems, adversarial ML, optimization, and edge/on-device inference.",
      },
      {
        name: "Front-end & UI/UX",
        accent: "violet",
        description:
          "Designing and shipping production interfaces with React, Next.js, Angular, TypeScript, and Tailwind, backed by freelance experience across showcase sites, redesigns, and internal tools.",
      },
    ],
    sideTrack:
      "I also work across HPC, networking, and DevOps: CUDA parallelization, data center design (spine-leaf, eBGP, ECMP), virtualization, and Linux systems.",
  },
  experience: {
    eyebrow: "Experience",
    title: "Experience & Education",
    educationLabel: "Education",
    certificationsLabel: "Certifications",
    communityLabel: "Community",
    items: [
      {
        role: "Data Science & AI Intern",
        company: "Student Spec Insights — ESI Algiers",
        period: "Sept. – Oct. 2025",
        bullets: [
          "Built an end-to-end AI recommendation system for fourth-year specialization choices, used by 750+ students.",
          "Collected and analyzed 5+ years of academic data; implemented PCA and clustering modules.",
          "Delivered interactive dashboards that reduced analysis time by 80% for instructors and researchers.",
        ],
        stack: "Python, FastAPI, SQLAlchemy, React, TypeScript, Tailwind",
      },
      {
        role: "Freelance UI/UX Redesign",
        company: "Windsor School",
        period: "Feb. 2025",
        bullets: [
          "Completed a full UI/UX redesign of the school's showcase website.",
          "Reconstructed the information architecture, user journey, and responsive front-end integration.",
        ],
      },
      {
        role: "Freelance Front-end Developer",
        company: "EURL Ksentini",
        period: "Sept. 2024",
        bullets: [
          "Designed and delivered a turnkey showcase website with Next.js, optimized for SEO and performance.",
          "Handled end-to-end technical management: hosting, DNS, and professional email setup.",
          "Achieved a top-three Google ranking and a Lighthouse score of 94/100.",
        ],
        stack: "Next.js, SEO, DNS",
      },
    ],
    education: {
      school: "National Higher School of Computer Science (ESI, ex-INI)",
      degree: "Engineering degree in computer science",
      period: "September 2022 → 2027 (in progress)",
      coursework: [
        "High-Performance Computing",
        "Processor Architectures",
        "Algorithms and Complexity",
        "Operating Systems",
        "Computer Networks",
        "Databases / SQL",
        "Compilation (JavaCC / JFlex)",
        "Statistical Data Analysis (R, MCA)",
      ],
    },
    certifications: [
      { name: "Cisco Academy CCNA", date: "Mar. 2026" },
      { name: "Containerization and Virtualization", date: "Aug. 2025" },
    ],
    community: {
      role: "Vice-President",
      org: "Shellmates Club",
      period: "Aug. 2025 – Jul. 2026",
      description:
        "Managed club operations and supervised technical workstreams in cybersecurity and development. Led the WriteUps Bank platform for internal CTF knowledge sharing.",
    },
  },
  projects: {
    eyebrow: "Projects",
    title: "What I've Built",
    filtersAriaLabel: "Project filters",
    filters: {
      all: "All",
      ai: "AI / ML",
      frontend: "Front-end",
      hpc: "HPC / Systems",
      tools: "Tools",
    },
    viewOnGitHubPrefix: "View",
    viewOnGitHubSuffix: "on GitHub",
    items: [
      {
        title: "ESI Data Center Architecture Simulation",
        period: "Mar. – Jul. 2026",
        description:
          "Working ContainerLab redesign of ESI's data center: spine-leaf/EVPN-VXLAN fabric, five security domains, QoS, observability, NaaS, and Arista Ansible automation.",
        tags: ["ContainerLab", "EVPN/VXLAN", "Arista", "Ansible", "NaaS"],
        track: "hpc",
        link: "https://github.com/squareone-team/esi-containerlab-simulation",
      },
      {
        title: "Semantic Log Search & Analytics",
        period: "May – Jun. 2026",
        description:
          "Big-data search pipeline for 638k OpenSSH logs: Spark preprocessing, PostgreSQL/pgvector indexing, sentence-transformer embeddings, FastAPI API, and Streamlit dashboard.",
        tags: ["Spark", "pgvector", "FastAPI", "Streamlit", "NLP"],
        track: "ai",
        link: "https://github.com/TatiYoucef/tp5-log-semantic-search",
      },
      {
        title: "RL-HGGA Bin Packing Optimization",
        period: "Apr. – Jun. 2026",
        description:
          "Academic 1D bin-packing optimization project comparing FFD, HGGA, RL-HGGA, and ML-HCSGA, with Q-learning operator selection and BPPLIB benchmarks.",
        tags: ["Optimization", "Q-learning", "Genetic Algorithms", "BPPLIB"],
        track: "ai",
        link: "https://github.com/mounir19000/rl-hgga-bin-packing",
      },
      {
        title: "Road Sign Detection",
        period: "Apr. – Jun. 2026",
        description:
          "Deep learning pipeline for autonomous driving scenarios, optimized for model size and inference speed on ESP32-class IoT devices.",
        tags: ["Computer Vision", "Edge AI", "IoT", "Deep Learning"],
        track: "ai",
      },
      {
        title: "Adversarial Patch Attack",
        period: "Mar. 2026",
        description:
          "Universal adversarial patch attack on ResNet-50 using Expectation over Transformation (EOT), trained on real images to mislead ImageNet classifiers.",
        tags: ["Adversarial ML", "ResNet-50", "EOT", "Python"],
        track: "ai",
        link: "https://github.com/mounir19000/adversarial-patch-attack",
      },
      {
        title: "Clinical Alert Generation",
        period: "Feb. 2026",
        description:
          "NLP model that generates clinical alerts from patient medication prescriptions with 85% accuracy.",
        tags: ["NLP", "Healthcare", "Python"],
        track: "ai",
        highlight: "3rd — CSE DataHack 2026",
      },
      {
        title: "GPU Parallelization for Neural Networks",
        period: "Jan. 2026",
        description:
          "Analyzed memory bottlenecks and optimized kernels via tiling, shared memory, transposition, and kernel fusion in CUDA.",
        tags: ["CUDA", "HPC", "GPU", "Memory Optimization"],
        track: "hpc",
        link: "https://github.com/amine-kherroubi/snn-gpu-memory-optimization",
      },
      {
        title: "Vehicle Routing with Time Windows",
        period: "2026",
        description:
          "Optimization challenge balancing routes, capacity, time windows, and travel costs through heuristics and metaheuristics.",
        tags: ["Optimization", "Heuristics", "Python"],
        track: "ai",
        highlight: "3rd — SOAI Haick 2026",
      },
      {
        title: "AI-Powered Meal Recommendation & Voice Chef",
        period: "Sept. 2025",
        description:
          "Meal recommendation engine and voice interface for chefs, using speech recognition and intent classification with API-ready services.",
        tags: ["Recommender Systems", "Speech", "FastAPI", "React"],
        track: "ai",
        highlight: "Winner — Future Caravane 2025",
        link: "https://github.com/208-FutureCaravane/Recommendation_system_for_meals",
      },
      {
        title: "AR Food Gallery",
        period: "Sept. 2025",
        description:
          "Interactive culinary gallery in mobile augmented reality. Winner of the Future Caravane hackathon.",
        tags: ["React", "Vite", "WebXR", "AR"],
        track: "frontend",
        highlight: "Winner — Future Caravane 2025",
      },
      {
        title: "Fish Movement API & Bacteria Counting",
        period: "Jul. 2025",
        description:
          "Computer vision services for tracking fish swimming speed in videos and detecting bacteria in microscopy images with YOLOv8.",
        tags: ["YOLOv8", "FastAPI", "Computer Vision", "IoT"],
        track: "ai",
        link: "https://github.com/junction-DataVim/FishMovement-Speed",
      },
      {
        title: "WriteUps Bank — Shellmates",
        period: "Apr. – May 2025",
        description:
          "Internal platform cataloging 50+ CTF write-ups with advanced dynamic filters, routing, and optimized Markdown rendering. Deployed on Vercel.",
        tags: ["Next.js", "TypeScript", "Vercel"],
        track: "frontend",
        link: "https://github.com/mounir19000/ShellmatesWriteUpBank",
      },
      {
        title: "Networking Simulations",
        period: "Dec. 2024 – Feb. 2025",
        description:
          "Deployed OpenSSH and vsftpd, then simulated wired networks in Mininet with bandwidth, latency, and packet loss control.",
        tags: ["Mininet", "OpenSSH", "Networking", "Linux"],
        track: "hpc",
      },
      {
        title: "BookAise — Book Search & Recommendation",
        period: "2025",
        description:
          "Book discovery platform with a Flutter front end, a FastAPI AI search and recommendation service, and semantic book matching through vector database retrieval.",
        tags: ["NLP", "Flutter", "FastAPI", "Vector DB"],
        track: "ai",
        highlight: "4th — MobAI Hackathon",
        link: "https://github.com/mounir19000/BookAise",
      },
      {
        title: "Student Specialty Insight System",
        period: "2025",
        description:
          "Full-stack application for analyzing student data and providing intelligent specialization recommendations using machine learning.",
        tags: ["React", "FastAPI", "ML", "PCA", "Clustering"],
        track: "ai",
        link: "https://github.com/mounir19000/StudentSpecialtyInsightSystem",
      },
      {
        title: "MPG Data Analysis (R)",
        period: "2025",
        description:
          "Statistical analysis of 234 vehicles: univariate and bivariate analyses, plus Multiple Correspondence Analysis.",
        tags: ["R", "Statistics", "MCA"],
        track: "ai",
        link: "https://github.com/mounir19000/mpg-data-analysis-r",
      },
      {
        title: "ESI Talents PFE Scraper",
        period: "2025",
        description:
          "Python scraper that extracts PFE projects, decodes protected supervisor email addresses, and exports the data to CSV.",
        tags: ["Python", "Scraping", "CSV"],
        track: "tools",
        link: "https://github.com/mounir19000/talents-esi-pfe-scraper",
      },
      {
        title: "JavaCC Parser Workshop",
        period: "2025",
        description:
          "Lexical analysis and parser development with JavaCC and JFlex: expression parsing and modular parser design.",
        tags: ["JavaCC", "JFlex", "Compilation"],
        track: "tools",
        link: "https://github.com/mounir19000/javacc-parser",
      },
      {
        title: "Electronic Health Record",
        period: "Dec. 2024 – Jan. 2025",
        description:
          "Served as front-end technical lead on a medical records prototype with full API integration and Git workflow setup.",
        tags: ["Angular", "Django", "REST API"],
        track: "frontend",
      },
      {
        title: "Face Recognition for Attendance",
        period: "2024",
        description:
          "Real-time attendance prototype using YOLOv8 for detection and ResNet for face recognition.",
        tags: ["YOLOv8", "ResNet", "Face Recognition", "Real-time"],
        track: "ai",
        highlight: "1st — Training Camp 2024",
      },
    ],
  },
  hackathons: {
    eyebrow: "Competitions",
    title: "Hackathons & Datathons",
    subtitle:
      "2 wins and 4+ podium finishes across AI, NLP, optimization, and computer vision challenges.",
    items: [
      {
        year: 2025,
        event: "Future Caravane 2025",
        result: "Winner",
        rank: 1,
        description:
          "Djezzy hackathon (100+ participants) — AI Developer: Meal Recommendation + Voice Chef + AR Food Gallery",
      },
      {
        year: 2024,
        event: "Training Camp 2024",
        result: "1st Place",
        rank: 1,
        description: "Face recognition system for worker attendance",
      },
      {
        year: 2026,
        event: "CSE DataHack 2026",
        result: "3rd Place",
        rank: 3,
        description: "Healthcare NLP — Clinical alert generation",
      },
      {
        year: 2026,
        event: "SOAI Haick 2026",
        result: "3rd Place",
        rank: 3,
        description: "Vehicle routing and optimization challenge",
      },
      {
        year: 2025,
        event: "MobAI Hackathon",
        result: "4th Place",
        rank: 4,
        description: "BookAise — Book Search & Recommendation",
      },
    ],
  },
  skills: {
    eyebrow: "Skills",
    title: "Tech Stack",
    categories: [
      {
        name: "Programming Languages",
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
        name: "ML / AI",
        accent: "cyan",
        items: [
          "Supervised Learning",
          "Clustering",
          "PCA",
          "Recommender Systems",
          "NLP",
          "Computer Vision",
          "Adversarial ML",
          "Speech Recognition",
          "Vector Databases",
        ],
      },
      {
        name: "CV / DL Stack",
        accent: "cyan",
        items: [
          "OpenCV",
          "YOLOv8",
          "ResNet",
          "Object Detection",
          "Face Recognition",
          "Image Processing",
        ],
      },
      {
        name: "HPC / Systems",
        accent: "cyan",
        items: [
          "CUDA",
          "Memory Optimization",
          "Spine-leaf / eBGP",
          "IDS/IPS",
          "GNS3",
          "Wireshark",
          "Mininet",
        ],
      },
      {
        name: "DevOps and Tools",
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
          "Information Architecture",
          "Responsive Design",
        ],
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Get in Touch",
    subtitle:
      "Open to AI / edge AI internships, final-year projects (PFE), hackathons, research collaborations, and freelance front-end / UI-UX work.",
    emailLabel: "Email",
    phoneLabel: "Phone",
    copied: "Copied!",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  footer: {
    builtWith: "Built with Next.js, Tailwind CSS, and Framer Motion",
  },
};

export default en;
