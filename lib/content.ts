export const site = {
  name: "Tashneet Kaur",
  title: "Tashneet Kaur",
  tagline: "Algorithms for cities that move.",
  description:
    "Graduate researcher building production-ready algorithms for EV infrastructure, transit systems, and smart urban mobility.",
  url: "https://tashneet-30.github.io/Tashneet-",
  email: "kaur6910@mylaurier.ca",
  location: "Waterloo, Ontario",
  lab: "SPIN Lab, Wilfrid Laurier University",
  links: {
    github: "https://github.com/Tashneet-30",
    linkedin: "https://www.linkedin.com/in/tashneetkaur343/",
    scholar: "https://scholar.google.com/citations?hl=en&user=53ldLF4AAAAJ",
    leetcode: "https://leetcode.com/u/Tashneetkaur/",
    topmate: "https://topmate.io/tashneet_kaur",
  },
};

export const nav = [
  { href: "/", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
];

export type WorkItem = {
  text: string;
  link?: { href: string; label: string };
  suffix?: string;
};

export const currentWork: WorkItem[] = [
  {
    text: "Thesis research with ",
    link: { href: "https://elocitytech.com/", label: "Elocity Technologies" },
    suffix:
      " on HIEV-AI — designing forecasting and optimization algorithms for EV charging in multi-unit residential buildings, built to ship into a production platform used by property owners and developers across Ontario.",
  },
  {
    text: "Graduate Teaching Assistant at Laurier (CP363 & CP373) — databases, programming, and making technical ideas approachable for students.",
  },
  {
    text: "Graduate International Student Leader with Laurier International — supporting international students through their transition to campus life.",
  },
];

export const pastWork: WorkItem[] = [
  {
    text: "Digital twin framework for public transit demand forecasting in New York City — published in ",
    link: {
      href: "https://doi.org/10.1016/j.future.2026.108583",
      label: "Future Generation Computer Systems",
    },
    suffix: " (Q1, IF 6.1).",
  },
  {
    text: "WayWise — intelligent route optimization to help emergency vehicles reach destinations faster. ",
    link: { href: "https://github.com/Tashneet-30/WayWise", label: "GitHub" },
    suffix:
      ". Presented at the CSIR–CRRI Young Researchers' Conclave (New Delhi) — 3rd place in Innovative Poster Presentation, Traffic & Transportation category.",
  },
  {
    text: "Open-source developer with the ",
    link: { href: "https://www.khalisfoundation.org/", label: "Khalis Foundation" },
    suffix:
      " — contributed AI features to Hazoor on SikhiToTheMax, shipping code with a distributed international team.",
  },
  {
    text: "Service Delivery Manager, then SOC Analyst at SafeAeon Inc. — client operations, incident response, and security monitoring before returning to research full-time.",
  },
  {
    text: "Parallel path-planning research (Quad-RRT + OpenMP) from CP631 — accepted at CCIDSA 2026, Lakehead University.",
  },
];

export type Recognition = {
  title: string;
  detail: string;
};

export const recognition: Recognition[] = [
  {
    title: "William Nikolaus Martin Science Scholarship",
    detail:
      "Merit-based award for outstanding applicants in Computer Science — academic excellence, research potential, and leadership.",
  },
  {
    title: "OCI Collaborate 2 Commercialize Grant",
    detail:
      "Industry research funding for HIEV-AI — bridging Laurier's applied research with Elocity's EV charging deployments.",
  },
  {
    title: "CSIR-CRRI Young Researchers' Conclave",
    detail:
      "3rd place nationally for an innovative poster on emergency vehicle routing — Traffic & Transportation category, New Delhi.",
  },
];

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  awards?: string[];
  links?: { href: string; label: string }[];
};

export const projects: Project[] = [
  {
    slug: "hiev-ai",
    title: "HIEV-AI — EV Infrastructure Analytics",
    description:
      "OCI-funded Laurier × Elocity collaboration. I build the core algorithms — demand forecasting, capacity modeling, ROI estimation — that power a production platform helping MURB owners plan EV charging before costly upgrades lock them in.",
    tags: [
      "Algorithms",
      "EV Infrastructure",
      "MURBs",
      "Python",
      "Production ML",
    ],
    awards: ["OCI C2C Grant"],
    links: [
      {
        href: "https://elocitytech.com/elocity-laurier-hiev-ai-ev-charging/",
        label: "Press release",
      },
      { href: "https://elocitytech.com/", label: "Elocity" },
    ],
  },
  {
    slug: "digital-twin-transit",
    title: "Digital Twin Transit Demand Forecasting",
    description:
      "Multi-horizon passenger demand forecasting for public transit using a digital twin of NYC's network — first-author publication in a Q1 journal.",
    tags: ["Digital Twins", "Deep Learning", "Transit", "Forecasting"],
    awards: ["FGCS (Elsevier), 2026"],
    links: [
      {
        href: "https://doi.org/10.1016/j.future.2026.108583",
        label: "Paper (DOI)",
      },
      {
        href: "https://scholar.google.com/citations?hl=en&user=53ldLF4AAAAJ",
        label: "Google Scholar",
      },
    ],
  },
  {
    slug: "waywise",
    title: "WayWise — Emergency Vehicle Routing",
    description:
      "AI-driven route optimization for emergency vehicles in smart cities. National poster award at CSIR-CRRI under Traffic & Transportation.",
    tags: ["Routing", "AI", "Smart Cities", "Python"],
    awards: ["CSIR-CRRI 3rd Place — Traffic & Transportation"],
    links: [
      { href: "https://github.com/Tashneet-30/WayWise", label: "GitHub" },
      {
        href: "https://scholar.google.com/citations?hl=en&user=53ldLF4AAAAJ",
        label: "Google Scholar",
      },
    ],
  },
  {
    slug: "quad-rrt",
    title: "Quad-RRT Path Planning (CP631)",
    description:
      "Parallelized inter-tree matching in Quad-RRT using OpenMP — exploring autonomous navigation and high-performance path planning.",
    tags: ["OpenMP", "C", "Path Planning", "Parallel Computing"],
    awards: ["Accepted at CCIDSA 2026"],
    links: [
      { href: "https://github.com/Tashneet-30/cp631project", label: "GitHub" },
    ],
  },
  {
    slug: "hazur",
    title: "Hazoor — Khalis Foundation (Open Source)",
    description:
      "AI-powered spiritual Q&A grounded in Gurbani, integrated into SikhiToTheMax. Built with an international open-source team using FastAPI, React, and PostgreSQL.",
    tags: ["Open Source", "FastAPI", "React", "Generative AI"],
    links: [
      { href: "https://www.khalisfoundation.org/", label: "Khalis Foundation" },
      { href: "https://www.sikhitothemax.org/", label: "SikhiToTheMax" },
    ],
  },
  {
    slug: "money-minded",
    title: "Money Minded",
    description:
      "Monte Carlo simulations for investment analysis — backend-focused, built for scalable real-time financial data processing.",
    tags: ["Monte Carlo", "Python", "Backend"],
    links: [
      { href: "https://github.com/Tashneet-30/Money-Minded", label: "GitHub" },
      {
        href: "https://scholar.google.com/citations?hl=en&user=53ldLF4AAAAJ",
        label: "Google Scholar",
      },
    ],
  },
];

export type Publication = {
  title: string;
  venue: string;
  year: string;
  status?: string;
  description?: string;
  links?: { href: string; label: string }[];
};

export const publications: Publication[] = [
  {
    title:
      "A Digital Twin-Based Multi-Horizon Passenger Demand Forecasting Framework for Public Transits",
    venue: "Future Generation Computer Systems (Elsevier)",
    year: "2026",
    status: "Published",
    description:
      "Digital twin framework forecasting transit passenger demand across multiple planning horizons for NYC.",
    links: [
      { href: "https://doi.org/10.1016/j.future.2026.108583", label: "DOI" },
      {
        href: "https://scholar.google.com/citations?hl=en&user=53ldLF4AAAAJ",
        label: "Google Scholar",
      },
    ],
  },
  {
    title:
      "Parallelization of the Inter-Tree Matching Step in Quad-RRT with OpenMP",
    venue: "CCIDSA 2026, Lakehead University",
    year: "2026",
    status: "Accepted",
    description:
      "Course project (CP631) on autonomous navigation — accelerating path planning with parallel computing.",
    links: [{ href: "https://github.com/Tashneet-30/cp631project", label: "GitHub" }],
  },
  {
    title:
      "From Haze and Smoke to Clarity: An Integration of Deep Learning and Atmospheric Models for Enhanced Visual Clarity",
    venue: "CICBA, NIT Patna",
    year: "2024",
    links: [
      {
        href: "https://scholar.google.com/citations?hl=en&user=53ldLF4AAAAJ",
        label: "Google Scholar",
      },
    ],
  },
  {
    title:
      "GPU-Accelerated Monte Carlo Simulations for Real-time Financial Risk Analysis",
    venue: "ICDMIS",
    year: "2025",
    links: [
      {
        href: "https://scholar.google.com/citations?hl=en&user=53ldLF4AAAAJ",
        label: "Google Scholar",
      },
      { href: "https://github.com/Tashneet-30/Money-Minded", label: "GitHub" },
    ],
  },
  {
    title:
      "Deep Scene Fusion: A Hybrid Deep Learning-CNN Approach for Scene Recognition",
    venue: "ICDAM",
    year: "2024",
    links: [
      {
        href: "https://scholar.google.com/citations?hl=en&user=53ldLF4AAAAJ",
        label: "Google Scholar",
      },
    ],
  },
];
