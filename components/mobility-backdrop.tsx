export function MobilityBackdrop() {
  return (
    <div className="mobility-backdrop" aria-hidden="true">
      <div className="mobility-backdrop__aurora mobility-backdrop__aurora--one" />
      <div className="mobility-backdrop__aurora mobility-backdrop__aurora--two" />
      <div className="mobility-backdrop__aurora mobility-backdrop__aurora--three" />

      <svg
        className="mobility-backdrop__network"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="corridor" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0f766e" stopOpacity="0" />
            <stop offset="50%" stopColor="#0f766e" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#be123c" stopOpacity="0.12" />
          </linearGradient>
        </defs>

        {/* Mobility corridors — isometric network suggestion */}
        <g stroke="url(#corridor)" strokeWidth="1.25" fill="none">
          <path d="M-40 260 L420 260 L620 460 L1480 460" />
          <path d="M-40 620 L300 620 L500 420 L1480 420" />
          <path d="M180 -40 L180 300 L380 500 L380 940" />
          <path d="M1080 -40 L1080 340 L880 540 L880 940" />
        </g>

        {/* Network junctions */}
        {[
          [420, 260],
          [620, 460],
          [300, 620],
          [500, 420],
          [380, 500],
          [1080, 340],
          [880, 540],
        ].map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r="3.5"
            fill="rgba(15, 118, 110, 0.28)"
          />
        ))}
      </svg>
    </div>
  );
}
