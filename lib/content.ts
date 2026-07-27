export const site = {
  name: "Tashneet Kaur",
  title: "Tashneet Kaur",
  headline: "Building intelligent systems for smarter, more sustainable cities.",
  tagline: "AI Researcher • Intelligent Transportation Systems • Smart Cities",
  description:
    "AI researcher focused on intelligent transportation systems, smart cities, and data-driven urban mobility.",
  url: "https://tashneet-30.github.io/Tashneet-",
  email: "kaur6910@mylaurier.ca",
  location: "Waterloo, Ontario",
  links: {
    github: "https://github.com/Tashneet-30",
    linkedin: "https://www.linkedin.com/in/tashneetkaur343/",
    scholar: "https://scholar.google.com/citations?hl=en&user=53ldLF4AAAAJ",
    instagram: "https://www.instagram.com/tshntkaur/",
    youtube: "https://www.youtube.com/channel/UCznokDABEgccqoKNjWL-aDw",
    elocity: "https://elocitytech.com/",
    oci: "https://www.oc-innovation.ca/",
    laurier: "https://www.wlu.ca/",
    spinLab: "https://www.linkedin.com/in/sukhjitsehra/",
    gradStudentLeaders:
      "https://students.wlu.ca/support-and-wellness/international-student-support/international-student-leaders.html",
    ccidsa: "https://ccidsa.com/",
    gndec: "https://gndec.ac.in/",
  },
};

export const nav = [
  { href: "/", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
];

export type ContentPart =
  | { type: "text"; value: string }
  | { type: "link"; value: string; href: string };

export type WorkItem = {
  title: string;
  parts: ContentPart[];
};

export const currentWork: WorkItem[] = [
  {
    title: "AI-Driven Solutions for Sustainable Urban Mobility",
    parts: [
      { type: "text", value: "Pursuing my Master's thesis research in the " },
      { type: "link", value: "SPIN Lab", href: site.links.spinLab },
      { type: "text", value: " at " },
      { type: "link", value: "Wilfrid Laurier University", href: site.links.laurier },
      { type: "text", value: " in collaboration with " },
      { type: "link", value: "Elocity Technologies", href: site.links.elocity },
      { type: "text", value: " through an " },
      { type: "link", value: "OCI-funded project", href: site.links.oci },
      {
        type: "text",
        value:
          ". I am developing AI-based forecasting and optimization models for EV adoption and charging infrastructure planning in multi-unit residential buildings, creating data-driven decision-support tools to help cities and communities prepare for the transition to electric mobility.",
      },
    ],
  },
  {
    title: "Teaching & Mentorship at Laurier",
    parts: [
      { type: "text", value: "Serving as a Graduate Teaching Assistant at " },
      { type: "link", value: "Wilfrid Laurier University", href: site.links.laurier },
      {
        type: "text",
        value:
          " for courses including Databases and Operating Systems, supporting students through technical instruction, programming guidance, and hands-on problem-solving.",
      },
    ],
  },
  {
    title: "Graduate International Student Leadership",
    parts: [
      {
        type: "text",
        value:
          "Serving as a ",
      },
      {
        type: "link",
        value: "Graduate International Student Leader",
        href: site.links.gradStudentLeaders,
      },
      {
        type: "text",
        value:
          " with Laurier International — supporting international students through mentorship, community-building initiatives, and creating a more connected graduate experience.",
      },
    ],
  },
];

export const pastWork: WorkItem[] = [
  {
    title: "Digital Twin Framework for Urban Mobility",
    parts: [
      {
        type: "text",
        value:
          "Developed a digital twin-based multi-horizon passenger demand forecasting framework for public transit systems, combining data-driven modelling and predictive analytics to support smarter transportation planning in New York City. Published in ",
      },
      {
        type: "link",
        value: "Future Generation Computer Systems (Elsevier, Q1)",
        href: "https://doi.org/10.1016/j.future.2026.108583",
      },
      { type: "text", value: "." },
    ],
  },
  {
    title: "WayWise: AI-Powered Emergency Vehicle Routing for Smart Cities",
    parts: [
      {
        type: "text",
        value:
          "Built an intelligent routing system that integrates AI, traffic analysis, and optimization algorithms to improve emergency vehicle response times. Won 3rd place in the CSIR-CRRI poster presentation (Traffic & Transportation) at the Young Researchers' Conclave 2023, New Delhi. ",
      },
      { type: "link", value: "View on GitHub", href: "https://github.com/Tashneet-30/WayWise" },
    ],
  },
  {
    title: "Cybersecurity Operations & Technology Delivery at SafeAeon",
    parts: [
      {
        type: "text",
        value:
          "Started as a SOC Analyst, monitoring security incidents, analyzing threats, and supporting incident response using SIEM and EDR platforms. Later transitioned into a Service Delivery Manager role, leading client communication, operational coordination, and technical service delivery.",
      },
    ],
  },
  {
    title: "Parallel Motion Planning with OpenMP",
    parts: [
      {
        type: "text",
        value:
          "Researched parallel optimization techniques for Quad-RRT path planning, improving computational efficiency through OpenMP-based parallelization. Accepted at ",
      },
      { type: "link", value: "CCIDSA 2026", href: site.links.ccidsa },
      { type: "text", value: ", Lakehead University." },
    ],
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
      "3rd place — Poster Presentation, Traffic & Transportation category, Young Researchers' Conclave 2023, New Delhi.",
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
      "OCI-funded Laurier × Elocity collaboration. Forecasting and optimization algorithms for EV adoption and charging infrastructure in multi-unit residential buildings — built for production deployment.",
    tags: ["AI Forecasting", "EV Infrastructure", "MURBs", "Python"],
    awards: ["OCI C2C · Elocity Partnership"],
    links: [
      {
        href: "https://elocitytech.com/elocity-laurier-hiev-ai-ev-charging/",
        label: "Press release",
      },
      { href: site.links.elocity, label: "Elocity" },
    ],
  },
  {
    slug: "digital-twin-transit",
    title: "Digital Twin Transit Forecasting",
    description:
      "Multi-horizon passenger demand forecasting for public transit using a digital twin of NYC's network — first-author Q1 publication.",
    tags: ["Digital Twins", "Deep Learning", "Transit", "NYC"],
    awards: ["FGCS · Published 2026"],
    links: [
      { href: "https://doi.org/10.1016/j.future.2026.108583", label: "DOI" },
      { href: site.links.scholar, label: "Scholar" },
    ],
  },
  {
    slug: "waywise",
    title: "WayWise — Emergency Vehicle Routing",
    description:
      "AI-driven route optimization integrating traffic analysis to improve emergency response times in smart cities. Won 3rd place in the CSIR-CRRI poster presentation (Traffic & Transportation) at the Young Researchers' Conclave 2023, New Delhi.",
    tags: ["Routing", "AI", "Smart Cities", "Python"],
    awards: ["CSIR-CRRI 3rd · Poster · YRC 2023, New Delhi"],
    links: [
      { href: "https://github.com/Tashneet-30/WayWise", label: "GitHub" },
      { href: site.links.scholar, label: "Scholar" },
    ],
  },
  {
    slug: "quad-rrt",
    title: "Quad-RRT + OpenMP",
    description:
      "Parallelized inter-tree matching for autonomous navigation — high-performance path planning research from CP631.",
    tags: ["OpenMP", "C", "Path Planning", "Parallel Computing"],
    awards: ["CCIDSA 2026"],
    links: [
      { href: "https://github.com/Tashneet-30/cp631project", label: "GitHub" },
      { href: site.links.ccidsa, label: "CCIDSA" },
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
      { href: site.links.scholar, label: "Scholar" },
    ],
  },
  {
    title:
      "Parallelization of the Inter-Tree Matching Step in Quad-RRT with OpenMP",
    venue: "CCIDSA 2026, Lakehead University",
    year: "2026",
    status: "Accepted",
    description: "Parallel computing for autonomous navigation path planning.",
    links: [
      { href: site.links.scholar, label: "Scholar" },
      { href: site.links.ccidsa, label: "CCIDSA" },
    ],
  },
  {
    title:
      "From Haze and Smoke to Clarity: An Integration of Deep Learning and Atmospheric Models for Enhanced Visual Clarity",
    venue: "CICBA, NIT Patna",
    year: "2024",
    links: [{ href: site.links.scholar, label: "Scholar" }],
  },
  {
    title:
      "GPU-Accelerated Monte Carlo Simulations for Real-time Financial Risk Analysis",
    venue: "ICDMIS",
    year: "2025",
    links: [{ href: site.links.scholar, label: "Scholar" }],
  },
  {
    title:
      "Deep Scene Fusion: A Hybrid Deep Learning-CNN Approach for Scene Recognition",
    venue: "ICDAM",
    year: "2024",
    links: [{ href: site.links.scholar, label: "Scholar" }],
  },
];

export const socialLinks = [
  { href: site.links.instagram, label: "Instagram" },
  { href: site.links.youtube, label: "YouTube" },
  { href: site.links.linkedin, label: "LinkedIn" },
  { href: site.links.github, label: "GitHub" },
  { href: site.links.scholar, label: "Scholar" },
];
