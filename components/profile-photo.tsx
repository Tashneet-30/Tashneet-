"use client";

import Image from "next/image";
import { useState } from "react";
import { site } from "@/lib/content";

export function ProfilePhoto() {
  const [missing, setMissing] = useState(false);

  return (
    <figure className="profile-photo">
      <div className="profile-photo__frame">
        {!missing ? (
          <Image
            src={site.photo}
            alt={`Portrait of ${site.name}`}
            width={300}
            height={360}
            className="profile-photo__img"
            onError={() => setMissing(true)}
            priority
          />
        ) : (
          <div className="profile-photo__fallback" aria-hidden="true">
            TK
          </div>
        )}
      </div>
    </figure>
  );
}
