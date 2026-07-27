import {
  ConnectPanel,
  ContentStrip,
  CurrentWork,
  PastWork,
  RecognitionList,
} from "@/components/site";
import { HeroDoodles } from "@/components/hero-doodles";
import { site } from "@/lib/content";

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="hero-block">
        <div className="hero-layout container-wide">
          <div className="hero-content">
            <p className="location-pill">{site.location}</p>
            <h1 className="page-title">{site.name}</h1>
            <p className="page-headline">{site.headline}</p>
            <p className="page-tagline-pills">{site.tagline}</p>

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
                approaches — helping create cities that are more intelligent,
                efficient, and sustainable.
              </p>
            </div>
          </div>
          <HeroDoodles />
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
