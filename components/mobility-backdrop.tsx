export function MobilityBackdrop() {
  return (
    <div className="mobility-backdrop" aria-hidden="true">
      <svg
        className="mobility-backdrop__svg"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="route-a" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0" />
            <stop offset="35%" stopColor="#2563eb" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="route-b" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.45" />
          </linearGradient>
          <pattern id="city-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path
              d="M48 0H0V48"
              fill="none"
              stroke="rgba(37, 99, 235, 0.07)"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        <rect width="1200" height="800" fill="url(#city-grid)" />

        {/* City blocks */}
        <g opacity="0.35" fill="rgba(37, 99, 235, 0.08)">
          <rect x="80" y="520" width="120" height="90" rx="4" />
          <rect x="220" y="500" width="90" height="110" rx="4" />
          <rect x="340" y="540" width="140" height="70" rx="4" />
          <rect x="720" y="510" width="110" height="100" rx="4" />
          <rect x="860" y="530" width="130" height="80" rx="4" />
          <rect x="1020" y="500" width="100" height="110" rx="4" />
        </g>

        {/* Transit / road network */}
        <path
          d="M0 620 C 180 580, 320 660, 480 600 S 760 560, 920 610 S 1080 640, 1200 590"
          fill="none"
          stroke="url(#route-a)"
          strokeWidth="3"
          strokeLinecap="round"
          className="mobility-route mobility-route--primary"
        />
        <path
          d="M120 420 C 280 460, 420 380, 580 430 S 820 470, 980 400 S 1100 360, 1200 390"
          fill="none"
          stroke="url(#route-b)"
          strokeWidth="2"
          strokeLinecap="round"
          className="mobility-route mobility-route--secondary"
        />
        <path
          d="M0 700 L 1200 700"
          fill="none"
          stroke="rgba(37, 99, 235, 0.12)"
          strokeWidth="8"
          strokeLinecap="round"
        />

        {/* AI data nodes */}
        {[
          [200, 560],
          [480, 600],
          [760, 570],
          [980, 410],
          [620, 430],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="7" fill="#fff" stroke="#2563eb" strokeWidth="2" />
            <circle cx={cx} cy={cy} r="3" fill="#10b981" className="mobility-node-pulse" />
          </g>
        ))}

        {/* EV charging stations */}
        {[
          [340, 620],
          [860, 620],
        ].map(([cx, cy], i) => (
          <g key={`ev-${i}`} transform={`translate(${cx - 12}, ${cy - 18})`}>
            <rect
              x="0"
              y="0"
              width="24"
              height="30"
              rx="6"
              fill="rgba(16, 185, 129, 0.12)"
              stroke="rgba(16, 185, 129, 0.45)"
              strokeWidth="1.5"
            />
            <path
              d="M12 7 L8 16 H11 L10 23 L16 13 H13 Z"
              fill="#10b981"
              opacity="0.9"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
