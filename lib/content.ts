export const site = {
  name: "Tashneet Kaur",
  title: "Tashneet Kaur — AI & Smart Mobility",
  description:
    "Graduate researcher building AI systems for EV infrastructure planning, transit demand forecasting, and sustainable urban mobility.",
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

export const highlights = [
  {
    text: "HIEV-AI — building machine learning models for EV charging infrastructure planning in multi-unit residential buildings (MURBs), in collaboration with ",
    link: { href: "https://elocitytech.com/", label: "Elocity Technologies" },
    suffix:
      " and supported by the Ontario Centre of Innovation (OCI).",
  },
  {
    text: "Digital twin–based multi-horizon passenger demand forecasting for public transit — manuscript accepted in ",
    link: {
      href: "https://www.sciencedirect.com/journal/future-generation-computer-systems",
      label: "Future Generation Computer Systems (Elsevier)",
    },
    suffix: ".",
  },
  {
    text: "WayWise — real-time AI-driven emergency vehicle routing and traffic analysis for smart cities.",
  },
  {
    text: "Graduate Teaching Assistant at Wilfrid Laurier University (CP363 & CP373) — databases, programming, and student mentorship.",
  },
  {
    text: "Open-source contributions to the Hazur platform at Khalis Foundation — AI features with FastAPI, React, and PostgreSQL.",
  },
  {
    text: "CSIR-CRRI Young Researchers' Conclave — 3rd place nationally for transportation-related research (New Delhi, 2023).",
  },
];

export const recognition = [
  "William Nikolaus Martin Science Scholarship — Wilfrid Laurier University (2025)",
  "OCI Collaborate 2 Commercialize (C2C) — HIEV-AI research funding with Elocity Technologies",
  "CSIR-CRRI Young Researchers' Conclave — 3rd Place, National Level (2023)",
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
      "OCI-funded collaboration between Laurier and Elocity Technologies. I lead machine learning development on a modular, data-driven analytics platform for EV infrastructure planning and optimization in multi-unit residential buildings — forecasting demand, estimating ROI, modeling capacity constraints, and integrating rebate and utility data to help developers and property managers make smarter charging investments.",
    tags: [
      "Machine Learning",
      "EV Infrastructure",
      "MURBs",
      "ROI Modeling",
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
      "A digital twin–based multi-horizon framework for forecasting passenger demand on public transit networks. Combines historical ridership patterns, spatial data, and deep learning to support planning decisions at multiple time horizons.",
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
      "Real-time AI system integrating traffic analysis and smart city infrastructure to optimize emergency vehicle routing. Designed to reduce response times through intelligent path planning and low-level software processing.",
    tags: ["AI", "Real-time Systems", "Smart Cities", "Routing", "Python"],
  },
  {
    slug: "hazur",
    title: "Hazur — Open Source at Khalis Foundation",
    description:
      "Contributed AI-powered features to the Hazur application as part of an international open-source team. Built with JavaScript, FastAPI, HTML/CSS, and PostgreSQL — shipping features through pull requests and collaborative development.",
    tags: ["FastAPI", "React", "PostgreSQL", "Open Source", "Generative AI"],
    links: [{ href: "https://github.com/Tashneet-30", label: "GitHub" }],
  },
  {
    slug: "money-minded",
    title: "Money Minded — Monte Carlo Investment Analysis",
    description:
      "Finance management application using Monte Carlo simulations for investment decision-making. Focused on backend optimization and scalable performance for real-time stock data analysis.",
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

export const thesisPhases = [
  {
    phase: "Planning Phase",
    period: "Months 1–12",
    focus:
      "EV infrastructure forecasting, capacity analysis, and financial modeling — helping stakeholders determine charger capacity, CapEx/OpEx, ROI, payback periods, and applicable rebates.",
  },
  {
    phase: "Expansion & Operations",
    period: "Months 13–18",
    focus:
      "Real-time utilization analytics, predictive maintenance, dynamic load balancing, and V2G integration — including shared-use configurations and demand forecasting for equitable scheduling.",
  },
  {
    phase: "Testing & Validation",
    period: "Months 19–24",
    focus:
      "Real-world pilots at three Ontario sites with Elocity and stakeholders — validating platform performance, user satisfaction, and commercialization readiness.",
  },
];
