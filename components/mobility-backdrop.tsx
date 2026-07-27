export function MobilityBackdrop() {
  return (
    <div className="mobility-backdrop" aria-hidden="true">
      <div className="mobility-backdrop__glow mobility-backdrop__glow--blue" />
      <div className="mobility-backdrop__glow mobility-backdrop__glow--ev" />
      <div className="mobility-backdrop__glow mobility-backdrop__glow--warm" />

      <svg
        className="mobility-backdrop__skyline"
        viewBox="0 0 1200 220"
        preserveAspectRatio="xMidYMax slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sky-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f4f8ff" stopOpacity="0" />
            <stop offset="100%" stopColor="#f4f8ff" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Urban skyline — static, minimal */}
        <g fill="rgba(37, 99, 235, 0.06)" stroke="rgba(37, 99, 235, 0.1)" strokeWidth="1">
          <rect x="40" y="80" width="70" height="140" rx="3" />
          <rect x="130" y="50" width="55" height="170" rx="3" />
          <rect x="200" y="95" width="90" height="125" rx="3" />
          <rect x="310" y="60" width="65" height="160" rx="3" />
          <rect x="400" y="110" width="110" height="110" rx="3" />
          <rect x="540" y="40" width="50" height="180" rx="3" />
          <rect x="610" y="75" width="80" height="145" rx="3" />
          <rect x="720" y="55" width="95" height="165" rx="3" />
          <rect x="840" y="100" width="70" height="120" rx="3" />
          <rect x="930" y="65" width="60" height="155" rx="3" />
          <rect x="1010" y="85" width="85" height="135" rx="3" />
          <rect x="1110" y="70" width="70" height="150" rx="3" />
        </g>

        {/* Road */}
        <rect x="0" y="198" width="1200" height="22" fill="rgba(37, 99, 235, 0.05)" />
        <line
          x1="0"
          y1="209"
          x2="1200"
          y2="209"
          stroke="rgba(37, 99, 235, 0.12)"
          strokeWidth="1.5"
        />

        {/* Transit line */}
        <rect x="180" y="204" width="48" height="10" rx="5" fill="rgba(37, 99, 235, 0.14)" />
        <rect x="520" y="204" width="36" height="10" rx="5" fill="rgba(37, 99, 235, 0.1)" />

        {/* EV charging — MURB context */}
        <g transform="translate(420, 168)">
          <rect
            x="0"
            y="0"
            width="20"
            height="26"
            rx="5"
            fill="rgba(16, 185, 129, 0.1)"
            stroke="rgba(16, 185, 129, 0.35)"
            strokeWidth="1.2"
          />
          <path d="M10 6 L7 13 H9 L8.5 18 L13 11 H11 Z" fill="#10b981" opacity="0.85" />
        </g>
        <g transform="translate(780, 168)">
          <rect
            x="0"
            y="0"
            width="20"
            height="26"
            rx="5"
            fill="rgba(16, 185, 129, 0.1)"
            stroke="rgba(16, 185, 129, 0.35)"
            strokeWidth="1.2"
          />
          <path d="M10 6 L7 13 H9 L8.5 18 L13 11 H11 Z" fill="#10b981" opacity="0.85" />
        </g>

        <rect x="0" y="0" width="1200" height="60" fill="url(#sky-fade)" />
      </svg>
    </div>
  );
}
