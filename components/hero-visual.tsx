import Link from "next/link";
import { site } from "@/lib/content";

const pillars = [
  {
    label: "01",
    title: "EV Infrastructure",
    text: "Forecasting & optimization for multi-unit residential charging — production algorithms with Elocity.",
    href: "/projects",
  },
  {
    label: "02",
    title: "Transit Intelligence",
    text: "Digital twin demand forecasting for public transit — published in Future Generation Computer Systems.",
    href: "/research",
  },
  {
    label: "03",
    title: "AI & Urban Systems",
    text: "Data-driven models that help cities plan smarter, not just react faster.",
    href: "/research",
  },
];

export function HeroVisual() {
  return (
    <aside className="hero-aside" aria-label="Research focus areas">
      <div className="hero-mesh" aria-hidden="true">
        <svg viewBox="0 0 360 360" className="hero-mesh__svg">
          <defs>
            <linearGradient id="flow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0d9488" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <circle cx="180" cy="180" r="120" fill="none" stroke="url(#flow)" strokeWidth="1" opacity="0.4" />
          <circle cx="180" cy="180" r="80" fill="none" stroke="#0d9488" strokeWidth="0.5" opacity="0.25" />
          <path
            d="M 60 220 C 120 120, 200 280, 300 140"
            fill="none"
            stroke="url(#flow)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="60" cy="220" r="4" fill="#0d9488" />
          <circle cx="180" cy="200" r="5" fill="#0284c7" />
          <circle cx="300" cy="140" r="4" fill="#0d9488" />
        </svg>
      </div>

      <div className="focus-stack">
        {pillars.map((item) => (
          <Link key={item.label} href={item.href} className="focus-card">
            <span className="focus-card__label">{item.label}</span>
            <h3 className="focus-card__title">{item.title}</h3>
            <p className="focus-card__text">{item.text}</p>
          </Link>
        ))}
      </div>

      <div className="hero-cta-row">
        <Link href="/projects" className="hero-cta">Projects</Link>
        <Link href="/research" className="hero-cta">Research</Link>
        <a href={`mailto:${site.email}`} className="hero-cta hero-cta--primary">
          Say hello
        </a>
      </div>
    </aside>
  );
}
