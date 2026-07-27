import { ProjectCard } from "@/components/site";
import { projects, site } from "@/lib/content";

export const metadata = {
  title: "Projects — Tashneet Kaur",
  description:
    "Algorithms and systems for EV infrastructure, transit forecasting, and urban mobility.",
};

export default function ProjectsPage() {
  return (
    <div className="container">
      <header className="page-header">
        <h1 className="page-title">Projects</h1>
        <p className="page-subtitle">
          Research and engineering work — with links to code and papers.{" "}
          <a
            href={site.links.scholar}
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Scholar →
          </a>
        </p>
      </header>
      {projects.map((project) => (
        <ProjectCard key={project.slug} {...project} />
      ))}
    </div>
  );
}
