import {
  ConnectPanel,
  ContentStrip,
  CurrentWork,
  PastWork,
  RecognitionList,
} from "@/components/site";
import { HeroAside, FocusPillars } from "@/components/hero-visual";
import { site } from "@/lib/content";

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="hero-block hero-block--mobility">
        <div className="container-wide">
          <div className="section-card about-card">
            <div className="hero-layout">
              <div className="hero-content">
                <h1 className="page-title">About</h1>

                <div className="hook-prose story-prose">
                  <p className="page-intro">
                    Hi, I&apos;m Tashneet — a Master of Applied Computing (Thesis)
                    student at{" "}
                    <a
                      href={site.links.laurier}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Wilfrid Laurier University
                    </a>
                    , where I research how artificial intelligence and data-driven
                    technologies can help build smarter, more sustainable cities.
                    Before this, I earned my bachelor&apos;s in Computer Science
                    &amp; Engineering from{" "}
                    <a
                      href={site.links.gndec}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Guru Nanak Dev Engineering College (GNDEC)
                    </a>
                    , India — GPA 9.05/10 — where I first learned to connect code to
                    problems that reach beyond the screen.
                  </p>
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
                    approaches — helping create cities that are more intelligent,
                    efficient, and sustainable.
                  </p>
                </div>
              </div>
              <HeroAside />
            </div>

            <FocusPillars />
          </div>
        </div>
      </section>

      <div className="container">
        <section className="work-section work-section--current section-card">
          <h2>Currently working on</h2>
          <CurrentWork />
        </section>

        <section className="work-section section-card">
          <h2>What I&apos;ve worked on</h2>
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
