import type { ContentPart, WorkItem } from "@/lib/content";

function renderParts(parts: ContentPart[]) {
  return parts.map((part, i) =>
    part.type === "link" ? (
      <a key={i} href={part.href} target="_blank" rel="noopener noreferrer">
        {part.value}
      </a>
    ) : (
      <span key={i}>{part.value}</span>
    )
  );
}

export function WorkCardList({ items }: { items: WorkItem[] }) {
  return (
    <ul className="work-cards">
      {items.map((item, i) => (
        <li key={item.title} className="work-card">
          <span className="work-card__num">{String(i + 1).padStart(2, "0")}</span>
          <div className="work-card__body">
            <h3 className="work-card__title">{item.title}</h3>
            <p className="work-card__desc">{renderParts(item.parts)}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
