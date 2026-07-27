"use client";

import { useState } from "react";

export function ProfileAvatar() {
  const [hasPhoto, setHasPhoto] = useState(true);

  return (
    <div className="hero-avatar">
      <div className="hero-avatar__ring" />
      <div className="hero-avatar__inner">
        {hasPhoto ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`${process.env.NODE_ENV === "production" ? "/Tashneet-" : ""}/photo.jpg`}
            alt="Tashneet Kaur"
            className="hero-avatar__photo"
            onError={() => setHasPhoto(false)}
          />
        ) : (
          <span className="hero-avatar__initials">TK</span>
        )}
      </div>
      <span className="hero-avatar__doodle hero-avatar__doodle--bus">🚌</span>
      <span className="hero-avatar__doodle hero-avatar__doodle--ev">⚡</span>
      <span className="hero-avatar__doodle hero-avatar__doodle--pin">📍</span>
    </div>
  );
}
