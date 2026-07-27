import { BentoResearchCard } from "@/components/bento";
import { MobilityPageHeader } from "@/components/mobility-scene";
import { publications, site } from "@/lib/content";

export const metadata = {
  title: "Research — Tashneet Kaur",
  description:
    "Publications in AI, digital twins, EV infrastructure, and smart mobility.",
};

export default function ResearchPage() {
  return (
    <div className="container page-wide">
      <header className="page-header page-header--mobility">
        <MobilityPageHeader />
        <div className="page-header__content">
          <p className="page-eyebrow">AI · Mobility · Urban Systems</p>
          <h1 className="page-title">Research</h1>
          <p className="page-subtitle">
            Peer-reviewed publications and ongoing thesis work in intelligent
            transportation.{" "}
            <a href={site.links.scholar} target="_blank" rel="noopener noreferrer">
              Google Scholar ↗
            </a>
          </p>
        </div>
      </header>

      <div className="bento-grid bento-grid--research">
        {publications.map((pub, i) => (
          <BentoResearchCard key={pub.title} {...pub} index={i} />
        ))}
      </div>

      <div className="thesis-note">
        <span className="thesis-note__tag">Ongoing</span>
        <h2>Thesis</h2>
        <p>
          EV charging infrastructure planning for multi-unit residential
          buildings — production-bound algorithms for{" "}
          <a
            href="https://elocitytech.com/elocity-laurier-hiev-ai-ev-charging/"
            target="_blank"
            rel="noopener noreferrer"
          >
            HIEV-AI
          </a>{" "}
          with Elocity Technologies, funded by the Ontario Centre of Innovation.
        </p>
      </div>
    </div>
  );
}
