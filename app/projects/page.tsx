import { BentoProjectCard } from "@/components/bento";
import { projects, site } from "@/lib/content";

export const metadata = {
  title: "Projects — Tashneet Kaur",
  description:
    "Algorithms and systems for EV infrastructure, transit forecasting, and urban mobility.",
};

export default function ProjectsPage() {
  return (
    <div className="container page-wide">
      <header className="page-header">
        <p className="page-eyebrow">Selected work</p>
        <h1 className="page-title">Projects</h1>
        <p className="page-subtitle">
          Research engineering with real-world impact.{" "}
          <a href={site.links.scholar} target="_blank" rel="noopener noreferrer">
            Google Scholar ↗
          </a>
        </p>
      </header>
      <div className="bento-grid bento-grid--projects">
        {projects.map((project, i) => (
          <BentoProjectCard key={project.slug} {...project} index={i} />
        ))}
      </div>
    </div>
  );
}
