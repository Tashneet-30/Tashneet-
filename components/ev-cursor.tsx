"use client";

import { useEffect, useState } from "react";

export function EvCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReduced || isTouch) return;

    document.body.classList.add("ev-cursor-active");

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move);
    document.documentElement.addEventListener("mouseleave", leave);
    document.documentElement.addEventListener("mouseenter", enter);

    return () => {
      document.body.classList.remove("ev-cursor-active");
      window.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
      document.documentElement.removeEventListener("mouseenter", enter);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="ev-cursor"
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      aria-hidden="true"
    >
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="10" width="16" height="10" rx="3" fill="#0d9488" />
        <rect x="6" y="12" width="5" height="4" rx="1" fill="#ccfbf1" opacity="0.9" />
        <rect x="13" y="12" width="5" height="4" rx="1" fill="#ccfbf1" opacity="0.9" />
        <circle cx="8" cy="21" r="2.5" fill="#134e4a" />
        <circle cx="18" cy="21" r="2.5" fill="#134e4a" />
        <path d="M20 10 L24 8 L24 14 L20 12 Z" fill="#f59e0b" />
        <path d="M12 6 L14 10 L10 10 Z" fill="#38bdf8" opacity="0.8" />
      </svg>
    </div>
  );
}
