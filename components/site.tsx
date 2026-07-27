import Link from "next/link";
import { nav, recognition, site, currentWork, pastWork } from "@/lib/content";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <Link href="/" className="site-logo">
            {site.name}
          </Link>
          <span className="site-tagline">{site.tagline}</span>
        </div>
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
        <p>{new Date().getFullYear()} · {site.name} · {site.location}</p>
        <div className="footer-links">
          <a href={site.links.scholar} target="_blank" rel="noopener noreferrer">
            Scholar
          </a>
          <a href={site.links.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

function WorkItems({ items }: { items: typeof currentWork }) {
  return (
    <ul className="work-list">
      {items.map((item, i) => (
        <li key={i}>
          {item.text}
          {item.link && (
            <a
              href={item.link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.link.label}
            </a>
          )}
          {item.suffix}
        </li>
      ))}
    </ul>
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
      {awards && awards.length > 0 && (
        <p className="project-awards">{awards.join(" · ")}</p>
      )}
      <TagList tags={tags} />
      {links && links.length > 0 && (
        <div className="project-links">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

export function CurrentWork() {
  return <WorkItems items={currentWork} />;
}

export function PastWork() {
  return <WorkItems items={pastWork} />;
}

export function RecognitionList() {
  return (
    <section className="recognition-section">
      <h2>Awards &amp; support</h2>
      <div className="recognition-grid">
        {recognition.map((item) => (
          <div key={item.title} className="recognition-card">
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
