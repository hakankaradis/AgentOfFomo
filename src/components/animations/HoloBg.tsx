"use client";

export default function HoloBg({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 600"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
    >
      <defs>
        <filter id="hb-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Radar circles */}
      <g opacity="0.4">
        <circle cx="200" cy="300" r="180" fill="none" stroke="#39ff14" strokeWidth="0.5" />
        <circle cx="200" cy="300" r="120" fill="none" stroke="#39ff14" strokeWidth="0.3" />
        <circle cx="200" cy="300" r="60" fill="none" stroke="#39ff14" strokeWidth="0.2" />
        {/* Sweep */}
        <line x1="200" y1="300" x2="200" y2="120" stroke="#39ff14" strokeWidth="0.5" opacity="0.5">
          <animateTransform attributeName="transform" type="rotate" from="0 200 300" to="360 200 300" dur="8s" repeatCount="indefinite" />
        </line>
        {/* Cross */}
        <line x1="20" y1="300" x2="380" y2="300" stroke="#39ff14" strokeWidth="0.15" />
        <line x1="200" y1="120" x2="200" y2="480" stroke="#39ff14" strokeWidth="0.15" />
      </g>

      {/* Second radar */}
      <g opacity="0.2">
        <circle cx="950" cy="250" r="140" fill="none" stroke="#00e5ff" strokeWidth="0.4" />
        <circle cx="950" cy="250" r="90" fill="none" stroke="#00e5ff" strokeWidth="0.25" />
        <circle cx="950" cy="250" r="40" fill="none" stroke="#00e5ff" strokeWidth="0.2" />
        <line x1="950" y1="250" x2="950" y2="110" stroke="#00e5ff" strokeWidth="0.4" opacity="0.4">
          <animateTransform attributeName="transform" type="rotate" from="0 950 250" to="360 950 250" dur="10s" repeatCount="indefinite" />
        </line>
      </g>

      {/* Grid overlay */}
      <g opacity="0.06">
        {Array.from({ length: 30 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 20} x2="1200" y2={i * 20} stroke="#39ff14" strokeWidth="0.3" />
        ))}
        {Array.from({ length: 60 }, (_, i) => (
          <line key={`v${i}`} x1={i * 20} y1="0" x2={i * 20} y2="600" stroke="#39ff14" strokeWidth="0.3" />
        ))}
      </g>

      {/* Candlestick chart silhouette */}
      <g transform="translate(450, 150)" opacity="0.15">
        {[
          { x: 0, h: 60, body: 30, bodyY: 15, green: false },
          { x: 30, h: 70, body: 35, bodyY: 10, green: true },
          { x: 60, h: 80, body: 40, bodyY: 5, green: true },
          { x: 90, h: 50, body: 25, bodyY: 20, green: false },
          { x: 120, h: 90, body: 50, bodyY: 0, green: true },
          { x: 150, h: 75, body: 35, bodyY: 8, green: true },
          { x: 180, h: 60, body: 30, bodyY: 15, green: false },
          { x: 210, h: 100, body: 55, bodyY: 0, green: true },
          { x: 240, h: 85, body: 40, bodyY: 5, green: true },
          { x: 270, h: 110, body: 60, bodyY: 0, green: true },
        ].map((c, i) => (
          <g key={i}>
            <line x1={c.x + 8} y1={100 - c.h} x2={c.x + 8} y2={100} stroke={c.green ? "#39ff14" : "#ff3b3b"} strokeWidth="1" />
            <rect x={c.x} y={100 - c.h + c.bodyY} width="16" height={c.body} fill={c.green ? "#39ff14" : "#ff3b3b"} opacity="0.5" />
          </g>
        ))}
        {/* Price line */}
        <polyline points="8,70 38,50 68,35 98,55 128,15 158,30 188,50 218,8 248,20 278,0" fill="none" stroke="#39ff14" strokeWidth="0.5" opacity="0.3" />
      </g>

      {/* Scattered data points */}
      <g opacity="0.12">
        {[
          { x: 100, y: 150 }, { x: 350, y: 80 }, { x: 500, y: 450 },
          { x: 700, y: 120 }, { x: 850, y: 400 }, { x: 1050, y: 180 },
          { x: 150, y: 480 }, { x: 600, y: 350 }, { x: 900, y: 520 },
          { x: 400, y: 250 }, { x: 750, y: 300 }, { x: 1100, y: 450 },
        ].map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r="2" fill="#39ff14" opacity="0.6">
              <animate attributeName="opacity" values="0.6;0.15;0.6" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
            </circle>
            <circle cx={p.x} cy={p.y} r="6" fill="none" stroke="#39ff14" strokeWidth="0.3" opacity="0.3" />
          </g>
        ))}
      </g>

      {/* Warning triangles */}
      <g opacity="0.1">
        <path d="M680 80 L690 95 L670 95 Z" fill="none" stroke="#ff3b3b" strokeWidth="0.8" />
        <path d="M1100 350 L1110 365 L1090 365 Z" fill="none" stroke="#ff3b3b" strokeWidth="0.8" />
        <path d="M80 500 L90 515 L70 515 Z" fill="none" stroke="#ff3b3b" strokeWidth="0.8" />
      </g>

      {/* Data text fragments */}
      <g opacity="0.08" fontFamily="monospace" fontSize="8" fill="#39ff14">
        <text x="420" y="520">ENTRY: CONFIRMED</text>
        <text x="800" y="80">SIGNAL ACTIVE</text>
        <text x="50" y="50">AOF-001</text>
        <text x="1000" y="550">CLASSIFIED</text>
      </g>
    </svg>
  );
}
