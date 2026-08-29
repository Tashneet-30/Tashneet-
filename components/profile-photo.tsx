import { assetPath } from "@/lib/paths";
import { site } from "@/lib/content";

export function ProfilePhoto() {
  return (
    <figure className="profile-photo">
      <div className="profile-photo__frame">
        <span className="profile-photo__corner profile-photo__corner--tl" />
        <span className="profile-photo__corner profile-photo__corner--tr" />
        <span className="profile-photo__corner profile-photo__corner--bl" />
        <span className="profile-photo__corner profile-photo__corner--br" />
        <span className="profile-photo__status">
          <span className="profile-photo__status-dot" />
          online
        </span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetPath(site.photo)}
          alt={`Portrait of ${site.name}`}
          className="profile-photo__img"
          loading="eager"
          decoding="async"
        />
      </div>
      <figcaption className="profile-photo__caption">
        <strong>Smart Mobility Research</strong>
        EV infrastructure // Transit AI
      </figcaption>
    </figure>
  );
}
