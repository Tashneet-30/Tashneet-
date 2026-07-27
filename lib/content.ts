export const site = {
  name: "Tashneet Kaur",
  title: "Tashneet Kaur",
  tagline: "AI · Mobility · Systems that scale",
  description:
    "Graduate researcher building algorithms for EV infrastructure, transit forecasting, and sustainable urban mobility.",
  url: "https://tashneet-30.github.io/Tashneet-",
  email: "kaur6910@mylaurier.ca",
  location: "Waterloo, Ontario",
  lab: "SPIN Lab, Wilfrid Laurier University",
  links: {
    github: "https://github.com/Tashneet-30",
    linkedin: "https://www.linkedin.com/in/tashneetkaur343/",
    scholar: "https://scholar.google.com/citations?hl=en&user=53ldLF4AAAAJ",
    instagram: "https://www.instagram.com/tashneet_30/",
    youtube: "https://www.youtube.com/@tashneetkaur",
    leetcode: "https://leetcode.com/u/Tashneetkaur/",
    topmate: "https://topmate.io/tashneet_kaur",
    linktree: "https://linktr.ee/tashneetkaur",
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
      " on HIEV-AI — designing forecasting and optimization algorithms for EV charging in multi-unit residential buildings, built for production deployment.",
  },
  {
    text: "AI-based EV adoption forecasting and charging infrastructure planning as part of my MAC thesis in the SPIN Lab.",
  },
  {
    text: "Graduate Teaching Assistant at Laurier (CP363 & CP373) — databases, programming, and student mentorship.",
  },
  {
    text: "Graduate International Student Leader with Laurier International — supporting international students on campus.",
  },
];

export const pastWork: WorkItem[] = [
  {
    text: "Digital twin framework for public transit demand forecasting in New York City — published in ",
    link: {
      href: "https://doi.org/10.1016/j.future.2026.108583",
      label: "Future Generation Computer Systems",
    },
    suffix: " (Q1).",
  },
  {
    text: "WayWise — intelligent route optimization for emergency vehicles. ",
    link: { href: "https://github.com/Tashneet-30/WayWise", label: "GitHub" },
    suffix:
      ". 3rd place, Innovative Poster Presentation — Traffic & Transportation, CSIR-CRRI Young Researchers' Conclave, New Delhi.",
  },
  {
    text: "Open-source developer with the ",
    link: { href: "https://www.khalisfoundation.org/", label: "Khalis Foundation" },
    suffix:
      " — contributed AI features to the Hazoor app with an international development team.",
  },
  {
    text: "Service Delivery Manager, then SOC Analyst at SafeAeon Inc. — client operations, incident response, and security monitoring.",
  },
  {
    text: "Quad-RRT path planning with OpenMP (CP631) — accepted at CCIDSA 2026, Lakehead University.",
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
      "Wilfrid Laurier University — merit award for outstanding applicants in Computer Science with strong research potential.",
  },
  {
    title: "GNDEC Alumni Scholarship (1996 Batch)",
    detail:
      "Awarded by the 1996 alumni of Guru Nanak Dev Engineering College — supporting meritorious students during my undergraduate studies in India.",
  },
  {
    title: "OCI Collaborate 2 Commercialize Grant",
    detail:
      "Industry research funding for HIEV-AI with Elocity Technologies — applied AI for real-world EV infrastructure planning.",
  },
  {
    title: "CSIR-CRRI Young Researchers' Conclave",
    detail:
      "3rd place nationally — Innovative Poster Presentation, Traffic & Transportation category, New Delhi.",
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
      "OCI-funded Laurier × Elocity collaboration. I build the core algorithms — demand forecasting, capacity modeling, ROI estimation — headed for production on a platform helping MURB owners plan EV charging intelligently.",
    tags: ["Algorithms", "EV Infrastructure", "MURBs", "Python"],
    awards: ["OCI C2C · In production"],
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
    title: "Digital Twin Transit Forecasting",
    description:
      "Multi-horizon passenger demand forecasting for public transit using a digital twin of NYC's network — first-author Q1 publication.",
    tags: ["Digital Twins", "Deep Learning", "Transit"],
    awards: ["FGCS · Published 2026"],
    links: [
      { href: "https://doi.org/10.1016/j.future.2026.108583", label: "DOI" },
      {
        href: "https://scholar.google.com/citations?hl=en&user=53ldLF4AAAAJ",
        label: "Scholar",
      },
    ],
  },
  {
    slug: "waywise",
    title: "WayWise — Emergency Routing",
    description:
      "AI-driven route optimization for emergency vehicles in smart cities. Recognized nationally at CSIR-CRRI.",
    tags: ["Routing", "AI", "Smart Cities"],
    awards: ["CSIR-CRRI 3rd · Traffic & Transportation"],
    links: [
      { href: "https://github.com/Tashneet-30/WayWise", label: "GitHub" },
      {
        href: "https://scholar.google.com/citations?hl=en&user=53ldLF4AAAAJ",
        label: "Scholar",
      },
    ],
  },
  {
    slug: "quad-rrt",
    title: "Quad-RRT + OpenMP",
    description:
      "Parallelized inter-tree matching for autonomous navigation — high-performance path planning from CP631.",
    tags: ["OpenMP", "C", "Path Planning"],
    awards: ["CCIDSA 2026"],
    links: [
      { href: "https://github.com/Tashneet-30/cp631project", label: "GitHub" },
    ],
  },
  {
    slug: "hazoor",
    title: "Hazoor — Khalis Foundation",
    description:
      "Open-source AI features for the Hazoor app — Gurbani-grounded Q&A, built with FastAPI, React, and PostgreSQL alongside a global volunteer team.",
    tags: ["Open Source", "FastAPI", "Generative AI"],
    links: [
      { href: "https://www.khalisfoundation.org/", label: "Khalis Foundation" },
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
      "Forecasting transit passenger demand across multiple planning horizons for NYC.",
    links: [
      { href: "https://doi.org/10.1016/j.future.2026.108583", label: "DOI" },
      {
        href: "https://scholar.google.com/citations?hl=en&user=53ldLF4AAAAJ",
        label: "Scholar",
      },
    ],
  },
  {
    title:
      "Parallelization of the Inter-Tree Matching Step in Quad-RRT with OpenMP",
    venue: "CCIDSA 2026, Lakehead University",
    year: "2026",
    status: "Accepted",
    description: "Parallel computing for autonomous navigation path planning.",
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
        label: "Scholar",
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
        label: "Scholar",
      },
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
        label: "Scholar",
      },
    ],
  },
];

export const socialLinks = [
  { href: site.links.instagram, label: "Instagram" },
  { href: site.links.youtube, label: "YouTube" },
  { href: site.links.linkedin, label: "LinkedIn" },
  { href: site.links.github, label: "GitHub" },
  { href: site.links.scholar, label: "Google Scholar" },
];
