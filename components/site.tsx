import Link from "next/link";
import { nav, site } from "@/lib/content";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="site-logo">
          {site.name}
        </Link>
        <nav className="site-nav" aria-label="Main navigation">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          {new Date().getFullYear()} © {site.name}
        </p>
        <p className="footer-location">{site.location}</p>
      </div>
    </footer>
  );
}

export function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="tag-list">
      {tags.map((tag) => (
        <span key={tag} className="tag">
          {tag}
        </span>
      ))}
    </div>
  );
}

export function AwardList({ awards }: { awards: string[] }) {
  return (
    <div className="award-list">
      {awards.map((award) => (
        <span key={award} className="award">
          🏆 {award}
        </span>
      ))}
    </div>
  );
}

export function ProjectCard({
  title,
  description,
  tags,
  awards,
  links,
}: {
  title: string;
  description: string;
  tags: string[];
  awards?: string[];
  links?: { href: string; label: string }[];
}) {
  return (
    <article className="project-card">
      <h2 className="project-title">{title}</h2>
      <p className="project-description">{description}</p>
      {awards && awards.length > 0 && <AwardList awards={awards} />}
      <TagList tags={tags} />
      {links && links.length > 0 && (
        <div className="project-links">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-link"
            >
              {link.label} →
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

export function MobilityVisual() {
  return (
    <figure className="mobility-visual" aria-hidden="true">
      <svg viewBox="0 0 720 200" className="mobility-svg">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0d9488" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#0d9488" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <path
          d="M 40 140 Q 180 60, 320 120 T 600 80 T 680 100"
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth="2"
          strokeDasharray="6 4"
        />
        <circle cx="120" cy="100" r="5" fill="#0d9488" />
        <circle cx="320" cy="120" r="5" fill="#0d9488" />
        <circle cx="520" cy="90" r="6" fill="#2563eb" />
        <circle cx="640" cy="95" r="4" fill="#0d9488" opacity="0.6" />
        <rect x="500" y="130" width="28" height="14" rx="3" fill="none" stroke="#0d9488" strokeWidth="1.5" />
        <path d="M 508 130 L 512 122 L 520 122 L 524 130" fill="none" stroke="#0d9488" strokeWidth="1.5" />
        <text x="360" y="185" textAnchor="middle" className="svg-label">
          AI · EV Infrastructure · Urban Mobility · Waterloo Region
        </text>
      </svg>
      <figcaption className="visual-caption">
        Building the models behind smarter charging and mobility systems.
      </figcaption>
    </figure>
  );
}
