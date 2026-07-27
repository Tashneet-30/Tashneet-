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
        <p className="research-title" style={{ fontSize: "1rem" }}>
          EV Charging Infrastructure Planning &amp; Optimization for Multi-Unit Residential Buildings
        </p>
        <p className="research-meta">
          Wilfrid Laurier University · Master of Applied Computing (Thesis) · 2025–2027
        </p>
        <p className="research-description">
          Developing machine learning models and analytics for HIEV-AI — forecasting charging
          demand, optimizing charger placement, estimating financial returns, and supporting
          capacity planning under real electrical and spatial constraints. Industry partner:{" "}
          <a
            href="https://elocitytech.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Elocity Technologies
          </a>
          . Funded by the{" "}
          <a
            href="https://www.oc-innovation.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ontario Centre of Innovation
          </a>
          .
        </p>
      </div>
    </div>
  );
}
