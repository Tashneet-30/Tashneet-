import { site } from "@/lib/content";

const signals = [
  { value: "MASc", label: "Thesis research at Laurier" },
  { value: "Q1", label: "First-author journal publication" },
  { value: "4", label: "Scholarships & national awards" },
  { value: "OCI", label: "Industry-funded AI research" },
];

export function StatusBanner() {
  return (
    <div className="status-banner">
      <p className="status-banner__pill">
        <span className="status-banner__dot" />
        Actively researching AI for sustainable mobility — open to
        collaborations, PhD supervision, and scholarship opportunities
      </p>

      <dl className="signal-grid">
        {signals.map((item) => (
          <div key={item.label} className="signal">
            <dt className="signal__value">{item.value}</dt>
            <dd className="signal__label">{item.label}</dd>
          </div>
        ))}
      </dl>

      <p className="status-banner__note">
        Reach me at <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
    </div>
  );
}
