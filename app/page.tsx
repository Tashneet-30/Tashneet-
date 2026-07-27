import {
  CurrentWork,
  PastWork,
  RecognitionList,
} from "@/components/site";
import { site } from "@/lib/content";

export default function AboutPage() {
  return (
    <div className="container about-page">
      <header className="about-hero">
        <p className="location-pill">{site.location}</p>
        <h1 className="page-title">{site.name}</h1>
        <blockquote className="hook-quote">
          I moved to Canada for graduate school and, one cold winter morning in
          Waterloo, watched commuters waiting for a bus that never came on time.
          That small moment stayed with me — I had always been curious about how
          transportation systems work, and suddenly I wanted to build tools that
          anticipate disruption instead of just reacting to it.
        </blockquote>
      </header>

      <div className="prose">
        <p>
          I&apos;m pursuing a Master of Applied Computing (Thesis) at{" "}
          <a
            href="https://www.wlu.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wilfrid Laurier University
          </a>
          , working in{" "}
          <a
            href="https://www.wlu.ca/academics/faculties/faculty-of-science/departments-and-programs/computer-science/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dr. Sukhjit Singh Sehra&apos;s SPIN Lab
          </a>
          . My research sits where <strong>AI</strong>,{" "}
          <strong>algorithms</strong>, and <strong>urban mobility</strong> meet —
          from forecasting transit demand to planning EV charging infrastructure
          for the one in three Canadians who live in apartments and condos.
        </p>

        <p>
          Before Laurier, I completed my B.Tech in Computer Science in India,
          spent time in cybersecurity and client operations at SafeAeon, and
          contributed to open-source projects with global teams. Each step taught
          me something different about building systems that actually ship — and
          that&apos;s what I bring to research now.
        </p>
      </div>

      <section className="work-section work-section--current">
        <h2>Currently working on</h2>
        <CurrentWork />
      </section>

      <section className="work-section">
        <h2>What I&apos;ve worked on</h2>
        <PastWork />
      </section>

      <RecognitionList />

      <section className="prose closing-section">
        <h2>Outside the lab</h2>
        <p>
          Track and field, badminton, mentoring students, and making technical
          ideas easier to understand — whether in a classroom, on campus, or
          through content. I care about representation in computing and hope to
          keep working where clean technology, data, and transportation planning
          shape how North American cities move.
        </p>

        <div className="connect-block">
          <p>
            <a href="/projects">Projects</a>
            {" · "}
            <a href="/research">Research</a>
            {" · "}
            <a
              href={site.links.scholar}
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Scholar
            </a>
            {" · "}
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
          <p className="connect-email">
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
      </section>
    </div>
  );
}
