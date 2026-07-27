import Link from "next/link";
import { ProfilePhoto } from "./profile-photo";
import { MobilityHeroScene } from "./mobility-scene";
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
      <MobilityHeroScene />
      <ProfilePhoto />

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
