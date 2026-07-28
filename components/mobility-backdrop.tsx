export function MobilityBackdrop() {
  return (
    <div className="mobility-backdrop" aria-hidden="true">
      <svg
        className="mobility-backdrop__lines"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Transit route lines — single hairline weight */}
        <g fill="none" stroke="#1c1a17" strokeWidth="1" strokeOpacity="0.07">
          <path d="M-60 300 H360 L520 460 H1500" />
          <path d="M-60 640 H240 L400 480 H1500" />
          <path d="M220 -60 V240 L380 400 V960" />
          <path d="M1120 -60 V380 L960 540 V960" />
        </g>

        {/* Route stops */}
        <g fill="#1c1a17" fillOpacity="0.1">
          {[
            [360, 300],
            [520, 460],
            [240, 640],
            [400, 480],
            [380, 400],
            [1120, 380],
            [960, 540],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="3" />
          ))}
        </g>
      </svg>
    </div>
  );
}
