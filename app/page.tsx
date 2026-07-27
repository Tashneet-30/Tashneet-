import { MobilityVisual } from "@/components/site";
import { highlights, recognition, site, thesisPhases } from "@/lib/content";

export default function AboutPage() {
  return (
    <div className="container prose">
      <h1 className="page-title">About</h1>

      <p className="lead">
        Hey, I&apos;m Tashneet! ⚡🚌
      </p>

      <p className="lead">
        I&apos;m a Master of Applied Computing (Thesis) student at{" "}
        <a
          href="https://www.wlu.ca/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wilfrid Laurier University
        </a>{" "}
        in Waterloo, Ontario — building at the intersection of{" "}
        <strong>artificial intelligence</strong>,{" "}
        <strong>transportation</strong>, and{" "}
        <strong>smart urban mobility</strong>.
      </p>

      <p>
        My thesis research focuses on{" "}
        <strong>EV charging infrastructure planning for multi-unit residential buildings (MURBs)</strong>
        . I&apos;m the machine learning developer on{" "}
        <a
          href="https://elocitytech.com/elocity-laurier-hiev-ai-ev-charging/"
          target="_blank"
          rel="noopener noreferrer"
        >
          HIEV-AI
        </a>
        , an OCI-funded collaboration between Laurier and{" "}
        <a
          href="https://elocitytech.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Elocity Technologies
        </a>
        . While the full-stack team brings the platform to life, I design and build the ML models
        behind demand forecasting, capacity analysis, ROI estimation, and charger optimization —
        turning building data, electrical constraints, and adoption trends into decisions developers
        and property managers can actually use.
      </p>

      <p>
        I&apos;m drawn to work where algorithms meet real cities: predicting how people move,
        planning where chargers belong, and building software that makes mobility systems more
        intelligent, equitable, and sustainable. I believe technology — when grounded in good data
        and clear communication — can reshape how communities transition to clean mobility.
      </p>

      <h2>Things I&apos;ve worked on</h2>
      <ul className="highlight-list">
        {highlights.map((item, i) => (
          <li key={i}>
            {item.text}
            {item.link && (
              <a
                href={item.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-link"
              >
                {item.link.label}
              </a>
            )}
            {item.suffix}
          </li>
        ))}
      </ul>

      <div className="thesis-block">
        <h2>HIEV-AI — 24-Month Research Roadmap</h2>
        <p style={{ margin: "0 0 0.5rem", color: "var(--text-muted)", fontSize: "0.95rem" }}>
          A modular, data-driven analytics platform for EV infrastructure planning
          and optimization in MURBs — from design and permitting through operations
          and commercialization.
        </p>
        <div className="phase-grid">
          {thesisPhases.map((phase) => (
            <div key={phase.phase} className="phase-item">
              <span className="phase-label">{phase.phase}</span>
              <span className="phase-period">({phase.period})</span>
              <p className="phase-focus">{phase.focus}</p>
            </div>
          ))}
        </div>
      </div>

      <h2>Recognition</h2>
      <p>
        It matters to acknowledge the organizations that have supported my path into
        AI research and smart mobility:
      </p>
      <ul>
        {recognition.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>Beyond the code</h2>
      <p>
        When I&apos;m not training models or debugging pipelines, you&apos;ll find me exploring
        emerging tech, reading about psychology and human behaviour, creating content, or
        mentoring students as a Graduate International Student Leader at Laurier International.
        I&apos;m always glad to connect with people who care about AI, mobility, or building
        things that make cities work better.
      </p>

      <div className="connect-block">
        <p>
          Feel free to browse my <a href="/projects">projects</a>, read my{" "}
          <a href="/research">research</a>, or reach out directly.
        </p>
        <p>
          My inbox is open:{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
        <div className="connect-links">
          <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={site.links.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={site.links.leetcode} target="_blank" rel="noopener noreferrer">
            LeetCode
          </a>
          <a href={site.links.topmate} target="_blank" rel="noopener noreferrer">
            Book a 1:1
          </a>
        </div>
      </div>

      <MobilityVisual />
    </div>
  );
}
