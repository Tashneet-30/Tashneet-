export function MobilityBackdrop() {
  return (
    <div className="tech-backdrop" aria-hidden="true">
      <div className="tech-backdrop__glow tech-backdrop__glow--cyan" />
      <div className="tech-backdrop__glow tech-backdrop__glow--violet" />
      <div className="tech-backdrop__grid" />
      <svg
        className="tech-backdrop__circuit"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" strokeWidth="1">
          <path
            className="tech-backdrop__trace tech-backdrop__trace--a"
            d="M-40 120 H 260 L 320 180 H 620 L 680 120 H 980 L 1040 180 H 1480"
          />
          <path
            className="tech-backdrop__trace tech-backdrop__trace--b"
            d="M-40 760 H 220 L 280 700 H 560 L 620 760 H 940 L 1000 700 H 1480"
          />
          <path
            className="tech-backdrop__trace tech-backdrop__trace--c"
            d="M120 -40 V 220 L 180 280 V 560 L 120 620 V 940"
          />
          <path
            className="tech-backdrop__trace tech-backdrop__trace--d"
            d="M1320 -40 V 260 L 1260 320 V 600 L 1320 660 V 940"
          />
          <circle className="tech-backdrop__node" cx="320" cy="180" r="3.5" />
          <circle className="tech-backdrop__node" cx="680" cy="120" r="3.5" />
          <circle className="tech-backdrop__node" cx="1040" cy="180" r="3.5" />
          <circle className="tech-backdrop__node" cx="280" cy="700" r="3.5" />
          <circle className="tech-backdrop__node" cx="620" cy="760" r="3.5" />
          <circle className="tech-backdrop__node" cx="1000" cy="700" r="3.5" />
          <circle className="tech-backdrop__node" cx="180" cy="280" r="3.5" />
          <circle className="tech-backdrop__node" cx="1260" cy="320" r="3.5" />
        </g>
      </svg>
      <div className="tech-backdrop__scanline" />
      <div className="tech-backdrop__vignette" />
      <div className="tech-backdrop__grain" />
    </div>
  );
}
