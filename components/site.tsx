import Link from "next/link";
import { nav, recognition, site, currentWork, pastWork, socialLinks } from "@/lib/content";

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
        <p>
          {new Date().getFullYear()} · {site.name} · {site.location}
        </p>
        <div className="footer-links">
          {socialLinks.slice(0, 4).map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          ))}
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
          <span className="work-list__num">{String(i + 1).padStart(2, "0")}</span>
          <span className="work-list__text">
            {item.text}
            {item.link && (
              <a href={item.link.href} target="_blank" rel="noopener noreferrer">
                {item.link.label}
              </a>
            )}
            {item.suffix}
          </span>
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

export function ContentStrip() {
  return (
    <section className="content-strip">
      <div className="content-strip__label">Also creating</div>
      <h2>Tech, stories &amp; the human side of research</h2>
      <p>
        I share what I&apos;m learning — emerging tech, student life in Canada,
        and the quieter moments behind research — on social media and video.
      </p>
      <div className="content-strip__links">
        <a href={site.links.instagram} target="_blank" rel="noopener noreferrer" className="social-chip">
          Instagram
        </a>
        <a href={site.links.youtube} target="_blank" rel="noopener noreferrer" className="social-chip">
          YouTube
        </a>
        <a href={site.links.linktree} target="_blank" rel="noopener noreferrer" className="social-chip social-chip--ghost">
          All links
        </a>
      </div>
    </section>
  );
}

export { ConnectPanel } from "./bento";
