export const site = {
  name: "Tashneet Kaur",
  title: "Tashneet Kaur — AI & Smart Mobility",
  description:
    "Graduate researcher and ML developer building AI for EV infrastructure, transit systems, and sustainable urban mobility.",
  url: "https://tashneet-30.github.io/Tashneet-",
  email: "kaur6910@mylaurier.ca",
  location: "Waterloo, Ontario, Canada",
  links: {
    github: "https://github.com/Tashneet-30",
    linkedin: "https://www.linkedin.com/in/tashneetkaur343/",
    leetcode: "https://leetcode.com/u/Tashneetkaur/",
    topmate: "https://topmate.io/tashneet_kaur",
  },
};

export const nav = [
  { href: "/", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
];

export type StoryItem = {
  emoji?: string;
  text: string;
  link?: { href: string; label: string };
  suffix?: string;
};

export const storyItems: StoryItem[] = [
  {
    emoji: "⚡",
    text: "HIEV-AI — the machine learning developer on an OCI-funded platform with ",
    link: { href: "https://elocitytech.com/", label: "Elocity Technologies" },
    suffix:
      " and Laurier, building AI tools that help property developers plan EV charging in multi-unit residential buildings.",
  },
  {
    emoji: "🚆",
    text: "Digital twin–based passenger demand forecasting for public transit — manuscript accepted in ",
    link: {
      href: "https://www.sciencedirect.com/journal/future-generation-computer-systems",
      label: "Future Generation Computer Systems (Elsevier)",
    },
    suffix: ".",
  },
  {
    emoji: "🚨",
    text: "WayWise — a real-time AI system for emergency vehicle routing and smart city traffic analysis.",
  },
  {
    emoji: "🌐",
    text: "Open-source developer at the ",
    link: { href: "https://www.khalisfoundation.org/", label: "Khalis Foundation" },
    suffix:
      ", shipping AI-powered features to the Hazur app with an international team through pull requests and collaborative development.",
  },
  {
    emoji: "🔐",
    text: "SOC Analyst at SafeAeon Inc. — monitoring threats with Rapid7 SIEM and SentinelOne, investigating incidents, and learning how to think under pressure in fast-moving security environments.",
  },
  {
    emoji: "📋",
    text: "Service Delivery Manager at SafeAeon — leading client communication, SLA operations, and cross-functional technical teams before moving into research.",
  },
  {
    emoji: "📚",
    text: "Graduate Teaching Assistant at Laurier (CP363 & CP373) — helping students with programming, SQL, and databases while pursuing my own thesis.",
  },
  {
    emoji: "🤝",
    text: "Graduate International Student Leader at Laurier International — mentoring international students and building inclusive campus communities.",
  },
];

export type Recognition = {
  title: string;
  detail: string;
};

export const recognition: Recognition[] = [
  {
    title: "William Nikolaus Martin Science Scholarship",
    detail: "Wilfrid Laurier University, 2025 — supporting my graduate studies in applied computing and research.",
  },
  {
    title: "OCI Collaborate 2 Commercialize (C2C)",
    detail:
      "Funding the HIEV-AI collaboration between Laurier and Elocity Technologies — taking applied AI research from the lab into real-world EV infrastructure planning.",
  },
  {
    title: "CSIR-CRRI Young Researchers' Conclave — 3rd Place",
    detail:
      "National-level recognition in New Delhi, 2023 — early validation that research at the intersection of computing and transportation was worth pursuing.",
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
    title: "HIEV-AI — EV Infrastructure Planning for MURBs",
    description:
      "I'm the ML developer on this OCI-funded Laurier × Elocity collaboration — building models that forecast charging demand, estimate ROI, and help property managers plan smarter EV infrastructure in multi-unit residential buildings.",
    tags: [
      "Machine Learning",
      "EV Infrastructure",
      "MURBs",
      "Python",
      "Smart Mobility",
    ],
    awards: ["OCI C2C Funding", "Elocity × Laurier Partnership"],
    links: [
      {
        href: "https://elocitytech.com/elocity-laurier-hiev-ai-ev-charging/",
        label: "Press Release",
      },
    ],
  },
  {
    slug: "digital-twin-transit",
    title: "Digital Twin Transit Demand Forecasting",
    description:
      "A digital twin framework for forecasting passenger demand across multiple time horizons on public transit networks — combining spatial data, ridership patterns, and deep learning.",
    tags: [
      "Digital Twins",
      "Deep Learning",
      "Transit",
      "Demand Forecasting",
      "Python",
    ],
    awards: ["Accepted in Future Generation Computer Systems (Elsevier)"],
  },
  {
    slug: "waywise",
    title: "WayWise — Smart Emergency Vehicle Routing",
    description:
      "Real-time AI system that integrates traffic analysis and smart city infrastructure to optimize emergency vehicle routing and reduce response times.",
    tags: ["AI", "Real-time Systems", "Smart Cities", "Routing", "Python"],
  },
  {
    slug: "hazur",
    title: "Hazur — Open Source at Khalis Foundation",
    description:
      "Contributed AI-powered features to Hazur as part of a global open-source team — shipping through pull requests with JavaScript, FastAPI, and PostgreSQL.",
    tags: ["FastAPI", "React", "PostgreSQL", "Open Source", "Generative AI"],
    links: [{ href: "https://github.com/Tashneet-30", label: "GitHub" }],
  },
  {
    slug: "money-minded",
    title: "Money Minded — Monte Carlo Investment Analysis",
    description:
      "Finance app using Monte Carlo simulations for investment decisions — focused on backend performance and scalable data pipelines.",
    tags: ["Monte Carlo", "Python", "Backend", "Data Science"],
  },
];

export type Publication = {
  title: string;
  venue: string;
  year: string;
  status?: string;
  description?: string;
};

export const publications: Publication[] = [
  {
    title:
      "A Digital Twin-Based Multi-Horizon Passenger Demand Forecasting Framework for Public Transits",
    venue: "Future Generation Computer Systems (Elsevier)",
    year: "2025",
    status: "Accepted",
    description:
      "Proposes a digital twin framework that forecasts transit passenger demand across multiple planning horizons using integrated spatial and temporal modeling.",
  },
  {
    title:
      "From Haze and Smoke to Clarity: An Integration of Deep Learning and Atmospheric Models for Enhanced Visual Clarity",
    venue: "CICBA, NIT Patna",
    year: "2024",
    description:
      "Hybrid deep learning and atmospheric modeling approach for image dehazing and visual clarity enhancement.",
  },
  {
    title:
      "GPU-Accelerated Monte Carlo Simulations for Real-time Financial Risk Analysis",
    venue: "ICDMIS",
    year: "2025",
  },
  {
    title:
      "Deep Scene Fusion: A Hybrid Deep Learning-CNN Approach for Scene Recognition",
    venue: "ICDAM",
    year: "2024",
  },
];
