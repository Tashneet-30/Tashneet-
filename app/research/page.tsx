import { publications } from "@/lib/content";

export const metadata = {
  title: "Research — Tashneet Kaur",
  description:
    "Publications and research in AI, digital twins, EV infrastructure, and smart mobility.",
};

export default function ResearchPage() {
  return (
    <div className="container">
      <h1 className="page-title">Research</h1>
      <p style={{ color: "var(--text-muted)", marginTop: "-0.5rem", marginBottom: "1.5rem" }}>
        Peer-reviewed work and ongoing thesis research at the intersection of AI and mobility.
      </p>

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
        </article>
      ))}

      <div className="thesis-block" style={{ marginTop: "2rem" }}>
        <h2 style={{ marginTop: 0 }}>Ongoing Thesis</h2>
        <p className="research-description" style={{ margin: 0 }}>
          EV charging infrastructure planning for multi-unit residential
          buildings — ML developer on{" "}
          <a
            href="https://elocitytech.com/elocity-laurier-hiev-ai-ev-charging/"
            target="_blank"
            rel="noopener noreferrer"
          >
            HIEV-AI
          </a>{" "}
          with{" "}
          <a
            href="https://elocitytech.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Elocity Technologies
          </a>
          , funded by the Ontario Centre of Innovation. Wilfrid Laurier
          University · 2025–2027.
        </p>
      </div>
    </div>
  );
}
