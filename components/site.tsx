import Link from "next/link";
import { nav, recognition, site, currentWork, pastWork, socialLinks } from "@/lib/content";
import { WorkCardList } from "./work-card";

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="site-logo">
          <span className="site-logo__mark" aria-hidden="true">TK</span>
          <span>
            {site.name}
            <small>AI · Mobility · Cities</small>
          </span>
        </Link>
        <nav className="site-nav" aria-label="Main navigation">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
          <a className="nav-contact" href={`mailto:${site.email}`}>Let&apos;s connect</a>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
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

export function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="tag-list">
      {tags.map((tag) => (
        <span key={tag} className="tag">{tag}</span>
      ))}
    </div>
  );
}

export function CurrentWork() {
  return <WorkCardList items={currentWork} />;
}

export function PastWork() {
  return <WorkCardList items={pastWork} />;
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
      <h2>Research, technology, and the stories behind the code</h2>
      <p>
        I create content around AI, emerging technologies, student life, and the
        experiences that come with building and learning in a constantly evolving
        world.
      </p>
      <p>
        From explaining technical concepts to sharing everyday moments as a
        graduate researcher in Canada, I enjoy turning ideas into stories that
        are easier to understand and connect with.
      </p>
      <div className="content-strip__links">
        <a href={site.links.instagram} target="_blank" rel="noopener noreferrer" className="social-chip">
          Instagram
        </a>
        <a href={site.links.youtube} target="_blank" rel="noopener noreferrer" className="social-chip">
          YouTube
        </a>
      </div>
    </section>
  );
}

export function ConnectPanel() {
  return (
    <section className="connect-panel">
      <h2>Connect with me</h2>
      <p>
        When I&apos;m away from my research, I&apos;m usually exploring the world
        in different ways — creating content, getting lost in a good book,
        discovering new places, spending time outdoors, or playing a competitive
        game of badminton. I enjoy experiences that spark curiosity, whether
        that means learning something new, visiting a new city, or working on
        something creative just for fun.
      </p>
      <p>
        I love making technology feel more human by sharing ideas, breaking down
        complex concepts, and connecting with people who are curious about the
        future.
      </p>
      <p>
        If you&apos;re interested in AI, sustainable cities, open-source projects,
        creative experiments, or conversations that bring technology closer to
        everyday life, I&apos;d love to connect.
      </p>
    </section>
  );
}
