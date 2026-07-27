import { TagList } from "./site";

export function BentoProjectCard({
  title,
  description,
  tags,
  awards,
  links,
  index,
}: {
  title: string;
  description: string;
  tags: string[];
  awards?: string[];
  links?: { href: string; label: string }[];
  index: number;
}) {
  const featured = index === 0;

  return (
    <article
      className={`bento-card bento-card--project${featured ? " bento-card--featured" : ""}`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="bento-card__inner">
        {awards && awards.length > 0 && (
          <p className="bento-card__badge">{awards[0]}</p>
        )}
        <h2 className="bento-card__title">{title}</h2>
        <p className="bento-card__desc">{description}</p>
        <TagList tags={tags} />
        {links && links.length > 0 && (
          <div className="bento-card__links">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export function BentoResearchCard({
  title,
  venue,
  year,
  status,
  description,
  links,
  index,
}: {
  title: string;
  venue: string;
  year: string;
  status?: string;
  description?: string;
  links?: { href: string; label: string }[];
  index: number;
}) {
  return (
    <article
      className="bento-card bento-card--research"
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <div className="bento-card__inner">
        <div className="bento-card__meta">
          <span className="bento-card__year">{year}</span>
          {status && <span className="bento-card__status">{status}</span>}
        </div>
        <h2 className="bento-card__title">{title}</h2>
        <p className="bento-card__venue">{venue}</p>
        {description && <p className="bento-card__desc">{description}</p>}
        {links && links.length > 0 && (
          <div className="bento-card__links">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export function ConnectPanel() {
  return (
    <section className="connect-panel">
      <h2>Connect with me</h2>
      <p>
        When I&apos;m not thinking about transit networks or EV adoption curves,
        you&apos;ll probably find me on a badminton court, exploring a new city,
        curled up with a book, or painting something that has nothing to do with
        code. I also love making tech feel human — through videos, posts, and
        conversations that demystify what researchers actually do.
      </p>
      <p>
        I&apos;m always glad to connect with people who care about smarter cities,
        thoughtful AI, open source, or just fun experiments at the intersection
        of technology and everyday life.
      </p>
    </section>
  );
}
