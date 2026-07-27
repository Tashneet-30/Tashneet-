import {
  ContentStrip,
  ConnectPanel,
  CurrentWork,
  PastWork,
  RecognitionList,
} from "@/components/site";
import { Scene3D } from "@/components/scene-3d";
import { site } from "@/lib/content";

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="hero-block container">
        <Scene3D />
        <div className="hero-content">
          <p className="location-pill">{site.location}</p>
          <h1 className="page-title">{site.name}</h1>
          <div className="hook-prose">
            <p>
              I have always been fascinated by the invisible systems that shape
              everyday life — the roads we travel, the networks that connect us,
              and the infrastructure that supports our communities.
            </p>
            <p>
              After moving to Canada for graduate studies, a delayed bus on a
              winter morning in Waterloo became a small but meaningful reminder
              of how deeply transportation systems influence our daily
              experiences. It sparked a bigger question: how can we use
              technology not only to react to urban challenges, but to predict
              and prepare for them?
            </p>
            <p>
              Today, my work focuses on answering that question through
              artificial intelligence, data-driven modelling, and computational
              approaches. At{" "}
              <a
                href="https://www.wlu.ca/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wilfrid Laurier University
              </a>
              , I am pursuing a Master of Applied Computing (Thesis) with the{" "}
              <strong>SPIN Lab</strong> under{" "}
              <a
                href="https://www.linkedin.com/in/sukhjitsehra/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dr. Sukhjit Singh Sehra
              </a>
              , exploring solutions for smarter mobility and sustainable
              transportation — including AI-based EV adoption forecasting and
              charging infrastructure planning for multi-unit residential
              buildings.
            </p>
            <p>
              My goal is to bridge the gap between emerging technologies and
              real-world urban challenges, helping create cities that are more
              intelligent, efficient, and sustainable.
            </p>
          </div>
        </div>
      </section>

      <div className="container">
        <section className="work-section work-section--current">
          <h2>Currently working on</h2>
          <CurrentWork />
        </section>

        <section className="work-section">
          <h2>What I&apos;ve worked on</h2>
          <PastWork />
        </section>

        <RecognitionList />
        <ContentStrip />
        <ConnectPanel />

        <div className="connect-footer">
          <p>
            Browse my <a href="/projects">projects</a> or{" "}
            <a href="/research">research</a>. My inbox is open:{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
      </div>
    </div>
  );
}
