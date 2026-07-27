import { ProjectCard } from "@/components/site";
import { projects } from "@/lib/content";

export const metadata = {
  title: "Projects — Tashneet Kaur",
  description:
    "AI and smart mobility projects including HIEV-AI, digital twin transit forecasting, and WayWise.",
};

export default function ProjectsPage() {
  return (
    <div className="container">
      <h1 className="page-title">Projects</h1>
      <p style={{ color: "var(--text-muted)", marginTop: "-0.5rem", marginBottom: "1.5rem" }}>
        Applied AI for EV infrastructure, transit systems, and urban mobility.
      </p>
      {projects.map((project) => (
        <ProjectCard key={project.slug} {...project} />
      ))}
    </div>
  );
}
