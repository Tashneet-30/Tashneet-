export function HeroVisual() {
  return (
    <aside className="hero-visual" aria-label="AI and urban mobility illustration">
      <div className="visual-glow" aria-hidden="true" />
      <div className="visual-orbit visual-orbit--outer" aria-hidden="true" />
      <div className="visual-orbit visual-orbit--inner" aria-hidden="true" />

      <div className="visual-core" aria-hidden="true">
        <svg viewBox="0 0 120 120" role="img">
          <defs>
            <linearGradient id="coreFace" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7dd3fc" />
              <stop offset="55%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#312e81" />
            </linearGradient>
          </defs>
          <path d="M60 10 103 35v50L60 110 17 85V35Z" fill="url(#coreFace)" />
          <path d="M17 35 60 60l43-25M60 60v50" fill="none" stroke="#fff" strokeOpacity=".38" strokeWidth="2" />
          <circle cx="60" cy="58" r="15" fill="#fff" fillOpacity=".16" stroke="#fff" strokeOpacity=".65" />
          <path d="M52 59h16M60 51v16" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
        </svg>
        <span>AI</span>
      </div>

      <div className="float-card float-card--ev">
        <span className="icon-cube icon-cube--green" aria-hidden="true">
          <svg viewBox="0 0 32 32">
            <path d="M18 3 9 17h7l-2 12 9-15h-7l2-11Z" fill="currentColor" />
          </svg>
        </span>
        <span><strong>EV systems</strong>Infrastructure planning</span>
      </div>
      <div className="float-card float-card--transit">
        <span className="icon-cube icon-cube--cyan" aria-hidden="true">
          <svg viewBox="0 0 32 32">
            <rect x="7" y="5" width="18" height="20" rx="5" fill="none" stroke="currentColor" strokeWidth="2.5" />
            <path d="M10 10h12v7H10zM11 25l-2 4m12-4 2 4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="12" cy="21" r="1.5" fill="currentColor" /><circle cx="20" cy="21" r="1.5" fill="currentColor" />
          </svg>
        </span>
        <span><strong>Transit AI</strong>Demand forecasting</span>
      </div>
      <div className="float-card float-card--twin">
        <span className="icon-cube icon-cube--violet" aria-hidden="true">
          <svg viewBox="0 0 32 32">
            <path d="m16 4 11 6-11 6L5 10l11-6Zm-11 12 11 6 11-6M5 22l11 6 11-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
          </svg>
        </span>
        <span><strong>Digital twins</strong>Urban intelligence</span>
      </div>

      <div className="signal-pill signal-pill--one" aria-hidden="true">01</div>
      <div className="signal-pill signal-pill--two" aria-hidden="true">101</div>
    </aside>
  );
}
