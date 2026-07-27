import { assetPath } from "@/lib/paths";
import { site } from "@/lib/content";

export function ProfilePhoto() {
  return (
    <figure className="profile-photo">
      <div className="profile-photo__frame">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetPath(site.photo)}
          alt={`Portrait of ${site.name}`}
          width={300}
          height={360}
          className="profile-photo__img"
          loading="eager"
          decoding="async"
        />
      </div>
      <figcaption className="profile-photo__caption">
        <strong>Smart Mobility Research</strong>
        EV infrastructure · Transit AI · Urban systems
      </figcaption>
    </figure>
  );
}
