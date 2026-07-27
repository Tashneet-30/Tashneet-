import { BentoProjectCard } from "@/components/bento";
import { MobilityPageHeader } from "@/components/mobility-scene";
import { projects, site } from "@/lib/content";

export const metadata = {
  title: "Projects — Tashneet Kaur",
  description:
    "Algorithms and systems for EV infrastructure, transit forecasting, and urban mobility.",
};

export default function ProjectsPage() {
  return (
    <div className="container page-wide">
      <header className="page-header page-header--mobility">
        <MobilityPageHeader />
        <div className="page-header__content">
          <p className="page-eyebrow">EV · Transit · Smart Cities</p>
          <h1 className="page-title">Projects</h1>
          <p className="page-subtitle">
            Algorithms and systems for electric mobility, transit forecasting, and
            urban infrastructure.{" "}
            <a href={site.links.scholar} target="_blank" rel="noopener noreferrer">
              Google Scholar ↗
            </a>
          </p>
        </div>
      </header>
      <div className="bento-grid bento-grid--projects">
        {projects.map((project, i) => (
          <BentoProjectCard key={project.slug} {...project} index={i} />
        ))}
      </div>
    </div>
  );
}
