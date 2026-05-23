export type Track = "ai" | "frontend" | "hpc" | "tools";

export interface Project {
  title: string;
  period: string;
  description: string;
  tags: string[];
  track: Track;
  link?: string;
  highlight?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  bullets: string[];
  stack?: string;
}

export interface Hackathon {
  year: number;
  event: string;
  result: string;
  rank: 1 | 3 | 4;
  description?: string;
}

export const identity = {
  name: "Mostefai Mounir Sofiane",
  handle: "mounir19000",
  location: "Algiers, Algeria",
  email: "mostefaimounir@gmail.com",
  phone: "+213 541 93 94 10",
  github: "https://github.com/mounir19000",
  linkedin:
    "https://www.linkedin.com/in/mostefai-mounir-sofiane-4130742a7/",
  oneLiner:
    "AI + Front-End engineer in training. From data and models to deployed APIs and polished interfaces.",
  role: "AI & ML Engineer · Front-End Developer · UI/UX Designer",
  school: "ESI Algiers (ex-INI)",
};

export const aboutShort =
  "Computer Science engineering student at ESI Algiers, working at the intersection of machine learning, computer vision, and modern web development. I build AI systems from data exploration to API deployment, ship production front-ends, and compete in datathons and hackathons.";

export const tracks = [
  {
    name: "AI / Machine Learning",
    accent: "cyan" as const,
    description:
      "Building data-driven systems end-to-end: exploration, modelling, evaluation, and deployment as APIs. Strong interests in computer vision, NLP, recommender systems, adversarial ML, optimization, and edge / on-device inference.",
  },
  {
    name: "Front-End & UI/UX",
    accent: "violet" as const,
    description:
      "Designing and shipping production interfaces with React, Next.js, Angular, TypeScript, and Tailwind, with a freelance track record — showcase sites, redesigns, and internal tools.",
  },
];

export const sideTrack =
  "I also have a serious side track in HPC, networking, and DevOps: CUDA parallelization, datacenter design (spine-leaf, eBGP, ECMP), virtualization, and Linux systems.";

export const experience: Experience[] = [
  {
    role: "Data Science & AI Intern",
    company: "Student Spec Insights — ESI Algiers",
    period: "Sept. – Oct. 2025",
    bullets: [
      "Built an end-to-end AI recommendation system for 4th-year specialization choices, used by 750+ students.",
      "Collected and analyzed 5+ years of academic data; implemented PCA and clustering modules.",
      "Delivered interactive dashboards that reduced analysis time by 80% for teachers and researchers.",
    ],
    stack: "Python, FastAPI, SQLAlchemy, React, TypeScript, Tailwind",
  },
  {
    role: "Freelance UI/UX Redesign",
    company: "Windsor School",
    period: "Feb. 2025",
    bullets: [
      "Complete UI/UX redesign of the school's showcase website.",
      "Reconstructed the information architecture, user journey, and responsive front-end integration.",
    ],
  },
  {
    role: "Freelance Front-End Developer",
    company: "EURL Ksentini",
    period: "Sept. 2024",
    bullets: [
      "Designed and delivered a turnkey showcase website with Next.js, optimized for SEO and performance.",
      "Handled end-to-end technical management: hosting, DNS, professional emails.",
      "Achieved Top 3 Google ranking and Lighthouse 94%.",
    ],
    stack: "Next.js, SEO, DNS",
  },
];

export const projects: Project[] = [
  {
    title: "Road Sign Detection",
    period: "Apr. 2026 → Present",
    description:
      "Deep learning pipeline for autonomous-driving scenarios. Optimizing model size and inference speed for IoT deployment on ESP32-class devices.",
    tags: ["Computer Vision", "Edge AI", "IoT", "Deep Learning"],
    track: "ai",
  },
  {
    title: "Adversarial Patch Attack",
    period: "Mar. 2026",
    description:
      "Universal adversarial patch attack on ResNet-50 using Expectation over Transformation (EOT), trained on real images to fool ImageNet classifiers.",
    tags: ["Adversarial ML", "ResNet-50", "EOT", "Python"],
    track: "ai",
    link: "https://github.com/mounir19000/adversarial-patch-attack",
  },
  {
    title: "Clinical Alert Generation",
    period: "Feb. 2026",
    description:
      "NLP model that generates clinical alerts from patient drug prescriptions with 85% accuracy.",
    tags: ["NLP", "Healthcare", "Python"],
    track: "ai",
    highlight: "3rd — CSE DataHack 2026",
  },
  {
    title: "Vehicle Routing with Time Windows",
    period: "2026",
    description:
      "Optimization challenge: routes, capacity, time windows, and travel cost balanced via heuristics and metaheuristics.",
    tags: ["Optimization", "Heuristics", "Python"],
    track: "ai",
    highlight: "3rd — SOAI Haick 2026",
  },
  {
    title: "AI-Powered Meal Recommendation & Voice Chef",
    period: "Sept. 2025",
    description:
      "Meal recommendation engine and a voice interface for chefs using speech recognition and intent classification. API-ready services.",
    tags: ["Recommender Systems", "Speech", "FastAPI", "React"],
    track: "ai",
    highlight: "Winner — Future Caravane 2025",
    link: "https://github.com/208-FutureCaravane/Recommendation_system_for_meals",
  },
  {
    title: "BookAise — Book Search & Recommendation",
    period: "2025",
    description:
      "Book discovery platform: Flutter frontend, FastAPI AI search and recommendation service, semantic book matching with vector-database retrieval.",
    tags: ["NLP", "Flutter", "FastAPI", "Vector DB"],
    track: "ai",
    highlight: "4th — MobAI Hackathon",
    link: "https://github.com/mounir19000/BookAise",
  },
  {
    title: "Fish Movement API & Bacteria Counting",
    period: "Jul. 2025",
    description:
      "Computer-vision services for fish swimming-speed tracking in videos and bacteria detection via YOLOv8 on microscopy images.",
    tags: ["YOLOv8", "FastAPI", "Computer Vision", "IoT"],
    track: "ai",
    link: "https://github.com/junction-DataVim/FishMovement-Speed",
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
  {
    title: "Student Specialty Insight System",
    period: "2025",
    description:
      "Full-stack application for analyzing student data and providing intelligent specialty recommendations using machine learning.",
    tags: ["React", "FastAPI", "ML", "PCA", "Clustering"],
    track: "ai",
    link: "https://github.com/mounir19000/StudentSpecialtyInsightSystem",
  },
  {
    title: "MPG Data Analysis (R)",
    period: "2025",
    description:
      "Statistical analysis of 234 vehicles: univariate, bivariate analysis, and Multiple Correspondence Analysis.",
    tags: ["R", "Statistics", "MCA"],
    track: "ai",
    link: "https://github.com/mounir19000/mpg-data-analysis-r",
  },
  {
    title: "Modern Datacenter for ESI",
    period: "Feb. 2026 → Present",
    description:
      "Spine-leaf topology with eBGP and ECMP. 5 security rings with firewalls, IDS/IPS, and segmentation. NaaS for user access management.",
    tags: ["Spine-leaf", "eBGP", "ECMP", "IDS/IPS", "NaaS"],
    track: "hpc",
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
    title: "Networking Simulations",
    period: "Dec. 2024 – Feb. 2025",
    description:
      "Deployed OpenSSH and vsftpd, simulated wired networks in Mininet with bandwidth, latency, and packet loss control.",
    tags: ["Mininet", "OpenSSH", "Networking", "Linux"],
    track: "hpc",
  },
  {
    title: "AR Food Gallery",
    period: "Sept. 2025",
    description:
      "Interactive culinary gallery in mobile augmented reality. Winner of Future Caravane hackathon.",
    tags: ["React", "Vite", "WebXR", "AR"],
    track: "frontend",
    highlight: "Winner — Future Caravane 2025",
  },
  {
    title: "WriteUps Bank — Shellmates",
    period: "Apr. – May 2025",
    description:
      "Internal platform referencing 50+ CTF write-ups with advanced dynamic filters, routing, and optimized Markdown rendering. Deployed on Vercel.",
    tags: ["Next.js", "TypeScript", "Vercel"],
    track: "frontend",
    link: "https://github.com/mounir19000/ShellmatesWriteUpBank",
  },
  {
    title: "Electronic Health Record",
    period: "Dec. 2024 – Jan. 2025",
    description:
      "Front-end Technical Lead on a medical-records prototype with full API integration and Git workflow setup.",
    tags: ["Angular", "Django", "REST API"],
    track: "frontend",
  },
  {
    title: "ESI Talents PFE Scraper",
    period: "2025",
    description:
      "Python scraper that extracts PFE projects, decodes protected promoter emails, and exports to CSV.",
    tags: ["Python", "Scraping", "CSV"],
    track: "tools",
    link: "https://github.com/mounir19000/talents-esi-pfe-scraper",
  },
  {
    title: "JavaCC Parser Workshop",
    period: "2025",
    description:
      "Lexical analysis and parser development with JavaCC and JFlex: expression parsing, modular parser design.",
    tags: ["JavaCC", "JFlex", "Compilation"],
    track: "tools",
    link: "https://github.com/mounir19000/javacc-parser",
  },
];

export const hackathons: Hackathon[] = [
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
    description: "Face Recognition for Worker Attendance system",
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
    description: "Vehicle Routing / Optimization challenge",
  },
  {
    year: 2025,
    event: "MobAI Hackathon",
    result: "4th Place",
    rank: 4,
    description: "BookAise — Book Search & Recommendation",
  },
];

export const skills = {
  "Programming Languages": [
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
  "Front-End / Web": [
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
  "ML / AI": [
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
  "CV / DL Stack": [
    "OpenCV",
    "YOLOv8",
    "ResNet",
    "Object Detection",
    "Face Recognition",
    "Image Processing",
  ],
  "HPC / Systems": [
    "CUDA",
    "Memory Optimization",
    "Spine-leaf / eBGP",
    "IDS/IPS",
    "GNS3",
    "Wireshark",
    "Mininet",
  ],
  "DevOps & Tools": [
    "Docker",
    "KVM",
    "VMware",
    "Linux",
    "Git",
    "FastAPI",
    "Django",
    "Postman",
  ],
  "Design / UI-UX": [
    "UI/UX Design",
    "Figma",
    "Photoshop",
    "Illustrator",
    "Information Architecture",
    "Responsive Design",
  ],
};

export const certifications = [
  { name: "Cisco Academy CCNA", date: "Mar. 2026" },
  {
    name: "Containerization and Virtualization",
    date: "Aug. 2025",
    issuer: "DataCamp",
  },
];

export const education = {
  school: "National Higher School of Computer Science (ESI, ex-INI)",
  location: "Algiers, Algeria",
  degree: "Engineering Degree in Computer Science",
  period: "September 2022 → 2027 (in progress)",
  coursework: [
    "High-Performance Computing",
    "Processor Architectures",
    "Algorithms and Complexity",
    "Operating Systems",
    "Computer Networks",
    "Databases / SQL",
    "Compilation (JavaCC / JFlex)",
    "Statistical Data Analysis (R, MCA/ACM)",
  ],
};

export const volunteering = {
  role: "Vice-President",
  org: "Shellmates Club",
  orgDescription: "ESI's Cybersecurity & Dev club",
  period: "Aug. 2025 – Present",
  description:
    "Overall club management and supervision of the technical aspect (cybersecurity & development). Drove the WriteUps Bank platform for internal CTF knowledge sharing.",
};
