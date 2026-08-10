export function MobilityBackdrop() {
  return (
    <div className="mobility-backdrop" aria-hidden="true">
      <div className="mobility-backdrop__wash" />
      <svg
        className="mobility-backdrop__contours"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" stroke="#1c1a17" strokeWidth="0.75">
          <path
            strokeOpacity="0.05"
            d="M-120 180 C 180 140, 420 220, 720 170 S 1260 120, 1560 200"
          />
          <path
            strokeOpacity="0.044"
            d="M-120 310 C 240 270, 520 350, 820 300 S 1300 250, 1560 330"
          />
          <path
            strokeOpacity="0.038"
            d="M-120 440 C 200 400, 480 480, 780 430 S 1280 380, 1560 460"
          />
          <path
            strokeOpacity="0.032"
            d="M-120 570 C 160 530, 440 610, 740 560 S 1240 510, 1560 590"
          />
          <path
            strokeOpacity="0.028"
            d="M-120 700 C 220 660, 500 740, 800 690 S 1320 640, 1560 720"
          />
          <path
            strokeOpacity="0.024"
            d="M280 -80 C 260 200, 300 420, 320 640 S 360 880, 340 980"
          />
          <path
            strokeOpacity="0.02"
            d="M720 -80 C 700 180, 740 400, 760 620 S 800 860, 780 980"
          />
          <path
            strokeOpacity="0.018"
            d="M1160 -80 C 1140 200, 1180 420, 1200 640 S 1240 880, 1220 980"
          />
        </g>
      </svg>
      <div className="mobility-backdrop__grain" />
    </div>
  );
}
