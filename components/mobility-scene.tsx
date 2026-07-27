import { assetPath } from "@/lib/paths";

export function MobilityHeroScene() {
  return (
    <div className="mobility-hero-scene" aria-hidden="true">
      <svg viewBox="0 0 320 360" className="mobility-hero-scene__svg">
        <defs>
          <linearGradient id="hero-flow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.5" />
            <stop offset="55%" stopColor="#10b981" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.35" />
          </linearGradient>
        </defs>

        <circle cx="160" cy="180" r="130" fill="none" stroke="url(#hero-flow)" strokeWidth="1" opacity="0.35" />
        <path
          d="M 30 250 C 90 150, 170 290, 250 120 S 300 80, 290 60"
          fill="none"
          stroke="url(#hero-flow)"
          strokeWidth="2"
          strokeLinecap="round"
          className="mobility-route mobility-route--hero"
        />
        <path
          d="M 40 300 L 280 300"
          fill="none"
          stroke="rgba(37, 99, 235, 0.2)"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <g transform="translate(248, 88)">
          <circle r="14" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" strokeWidth="1.5" />
          <path d="M0 -5 L-3 4 H-1 L-2 9 L4 2 H1 Z" fill="#10b981" />
        </g>

        <g transform="translate(52, 248)">
          <rect
            x="-11"
            y="-14"
            width="22"
            height="28"
            rx="5"
            fill="rgba(37, 99, 235, 0.1)"
            stroke="#2563eb"
            strokeWidth="1.5"
          />
          <path d="M0 -6 L-4 2 H-1 V8 H1 V2 H4 Z" fill="#2563eb" />
        </g>

        <circle cx="160" cy="180" r="4" fill="#6366f1" className="mobility-node-pulse" />
      </svg>
    </div>
  );
}

export function MobilityPageHeader() {
  return (
    <div className="mobility-page-header-bg" aria-hidden="true">
      <img
        src={assetPath("/mobility-header.svg")}
        alt=""
        className="mobility-page-header-bg__img"
      />
    </div>
  );
}
