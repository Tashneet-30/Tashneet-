import { ProfileAvatar } from "./profile-avatar";

export function HeroDoodles() {
  return (
    <div className="hero-doodles" aria-hidden="true">
      <svg className="hero-doodles__map" viewBox="0 0 400 400" fill="none">
        {/* Map grid */}
        <defs>
          <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#0d9488" strokeWidth="0.4" opacity="0.2" />
          </pattern>
        </defs>
        <rect width="400" height="400" fill="url(#grid)" rx="20" />

        {/* Transit route */}
        <path
          d="M 40 280 Q 120 200, 200 240 T 360 180"
          stroke="#0d9488"
          strokeWidth="2.5"
          strokeDasharray="6 4"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M 60 120 L 180 160 L 280 100 L 340 200"
          stroke="#38bdf8"
          strokeWidth="1.5"
          fill="none"
          opacity="0.35"
        />

        {/* Bus stop */}
        <rect x="175" y="225" width="14" height="8" rx="2" fill="#0d9488" opacity="0.7" />
        <circle cx="182" cy="238" r="3" fill="#0d9488" />

        {/* EV charger */}
        <rect x="290" y="155" width="6" height="14" rx="1" fill="#f59e0b" opacity="0.8" />
        <path d="M293 150 L295 155 L291 155 Z" fill="#f59e0b" opacity="0.8" />

        {/* Floating labels */}
        <text x="50" y="60" className="doodle-label">Transit</text>
        <text x="300" y="140" className="doodle-label">EV</text>
        <text x="200" y="350" className="doodle-label">Waterloo</text>
      </svg>

      <ProfileAvatar />
    </div>
  );
}
