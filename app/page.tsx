import {
  ConnectPanel,
  ContentStrip,
  CurrentWork,
  PastWork,
  RecognitionList,
} from "@/components/site";
import { HeroVisual } from "@/components/hero-visual";
import { site } from "@/lib/content";

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="hero-block">
        <div className="hero-layout container-wide">
          <div className="hero-content">
            <p className="hero-eyebrow">
              <span className="status-dot" aria-hidden="true" />
              Graduate Scholar · Waterloo, Canada
            </p>
            <h1 className="hero-title">
              Building AI for cities that{" "}
              <span className="hero-title__accent">move smarter.</span>
            </h1>
            <p className="hero-lead">
              I&apos;m Tashneet Kaur, a Graduate Scholar at{" "}
              <a href={site.links.laurier} target="_blank" rel="noopener noreferrer">
                Wilfrid Laurier University
              </a>
              , working across EV infrastructure, transit forecasting, digital
              twins, and intelligent urban mobility.
            </p>
            <div className="hero-actions">
              <a href="/projects" className="button button--primary">
                Explore my work <span aria-hidden="true">↗</span>
              </a>
              <a href={site.links.scholar} target="_blank" rel="noopener noreferrer" className="button button--ghost">
                Google Scholar
              </a>
            </div>
            <div className="hero-trust" aria-label="Selected credentials">
              <div>
                <strong>5</strong>
                <span>Research papers</span>
              </div>
              <div>
                <strong>Q1</strong>
                <span>Elsevier publication</span>
              </div>
              <div>
                <strong>OCI</strong>
                <span>Industry-backed research</span>
              </div>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <div className="container">
        <section className="story-intro">
          <p className="section-kicker">Research with real-world direction</p>
          <h2>
            From predicting passenger demand to planning where cities need EV
            chargers next.
          </h2>
          <p>
            My work turns complex mobility data into practical systems for
            more efficient, resilient, and sustainable communities.
          </p>
        </section>

        <section className="work-section work-section--current">
          <p className="section-kicker">Now</p>
          <h2>Currently building, researching &amp; contributing</h2>
          <CurrentWork />
        </section>

        <section className="work-section">
          <p className="section-kicker">Selected impact</p>
          <h2>Work that connects AI to the physical world</h2>
          <PastWork />
        </section>

        <RecognitionList />
        <ContentStrip />
        <ConnectPanel />

        <div className="connect-footer">
          <p>
            Explore my <a href="/research">research</a>,{" "}
            <a href="/projects">projects</a>, and ideas — or just say hello.
          </p>
          <p className="connect-email">
            My inbox is always open:{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
      </div>
    </div>
  );
}
