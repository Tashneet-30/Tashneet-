import { publications, site } from "@/lib/content";

export const metadata = {
  title: "Research — Tashneet Kaur",
  description:
    "Publications in AI, digital twins, EV infrastructure, and smart mobility.",
};

export default function ResearchPage() {
  return (
    <div className="container">
      <header className="page-header">
        <h1 className="page-title">Research</h1>
        <p className="page-subtitle">
          Peer-reviewed work from SPIN Lab, Laurier.{" "}
          <a
            href={site.links.scholar}
            target="_blank"
            rel="noopener noreferrer"
          >
            View all on Google Scholar →
          </a>
        </p>
      </header>

      {publications.map((pub) => (
        <article key={pub.title} className="research-card">
          <h2 className="research-title">
            {pub.title}
            {pub.status && <span className="status-badge">{pub.status}</span>}
          </h2>
          <p className="research-meta">
            {pub.venue} · {pub.year}
          </p>
          {pub.description && (
            <p className="research-description">{pub.description}</p>
          )}
          {pub.links && pub.links.length > 0 && (
            <div className="project-links">
              {pub.links.map((link) => (
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
      ))}

      <div className="thesis-note">
        <h2>Ongoing thesis</h2>
        <p>
          EV charging infrastructure planning for multi-unit residential
          buildings — building production-bound algorithms for{" "}
          <a
            href="https://elocitytech.com/elocity-laurier-hiev-ai-ev-charging/"
            target="_blank"
            rel="noopener noreferrer"
          >
            HIEV-AI
          </a>{" "}
          with Elocity Technologies, funded by the Ontario Centre of Innovation.
        </p>
      </div>
    </div>
  );
}
