"use client";

interface AgentMascotProps {
  size?: number;
  className?: string;
  animated?: boolean;
}

export default function AgentMascot({
  size = 320,
  className = "",
  animated = true,
}: AgentMascotProps) {
  return (
    <svg
      viewBox="0 0 400 480"
      width={size}
      height={size * 1.2}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Glow filters */}
        <filter id="glow-g" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="glow-eye" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="8" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="glow-soft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000" floodOpacity="0.5" />
        </filter>

        {/* Gradients */}
        <linearGradient id="hd-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#333" />
          <stop offset="40%" stopColor="#252525" />
          <stop offset="100%" stopColor="#181818" />
        </linearGradient>
        <linearGradient id="hd-hi" x1="0.3" y1="0" x2="0.7" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        <linearGradient id="suit-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1c1c1c" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
        <linearGradient id="shirt-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#222" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
        <linearGradient id="visor-g" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#0d1f0d" />
          <stop offset="50%" stopColor="#081208" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
        <linearGradient id="visor-rim" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#39ff14" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#39ff14" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#39ff14" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="tie-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4dff2a" />
          <stop offset="50%" stopColor="#39ff14" />
          <stop offset="100%" stopColor="#28cc0e" />
        </linearGradient>
        <radialGradient id="eye-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#39ff14" stopOpacity="1" />
          <stop offset="60%" stopColor="#39ff14" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#39ff14" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="ambient-glow" cx="0.5" cy="0.4" r="0.6">
          <stop offset="0%" stopColor="#39ff14" stopOpacity="0.03" />
          <stop offset="100%" stopColor="#39ff14" stopOpacity="0" />
        </radialGradient>

        {/* Clip for visor reflection */}
        <clipPath id="visor-clip">
          <path d="M155 130 Q155 115 200 110 Q245 115 245 130 L245 172 Q245 188 200 192 Q155 188 155 172 Z" />
        </clipPath>
      </defs>

      {/* Ambient glow behind the character */}
      <ellipse cx="200" cy="240" rx="180" ry="220" fill="url(#ambient-glow)" />

      {/* === BODY / SUIT === */}
      <g filter="url(#shadow)">
        {/* Shoulders — wider, more imposing */}
        <path
          d="M120 310 Q115 275 145 258 L170 250 L200 248 L230 250 L255 258 Q285 275 280 310 L278 400 Q275 430 245 435 L155 435 Q125 430 122 400 Z"
          fill="url(#suit-g)"
          stroke="#2a2a2a"
          strokeWidth="1"
        />

        {/* Shoulder seam lines */}
        <path d="M145 258 Q160 268 170 290" stroke="#2a2a2a" strokeWidth="0.8" fill="none" />
        <path d="M255 258 Q240 268 230 290" stroke="#2a2a2a" strokeWidth="0.8" fill="none" />

        {/* Suit breast pocket — left */}
        <path d="M152 300 L152 318 Q152 320 155 320 L172 320 Q174 320 174 318 L174 305" fill="none" stroke="#2a2a2a" strokeWidth="0.6" />
        {/* Pocket square — tiny neon accent */}
        <path d="M156 302 L160 298 L164 302 L162 308 L158 308 Z" fill="#39ff14" opacity="0.3" />

        {/* Suit buttons */}
        <circle cx="200" cy="340" r="3" fill="#222" stroke="#333" strokeWidth="0.5" />
        <circle cx="200" cy="365" r="3" fill="#222" stroke="#333" strokeWidth="0.5" />

        {/* Lapels */}
        <path d="M170 250 L194 330 L200 305" fill="#1e1e1e" stroke="#2a2a2a" strokeWidth="0.8" />
        <path d="M230 250 L206 330 L200 305" fill="#1e1e1e" stroke="#2a2a2a" strokeWidth="0.8" />

        {/* Shirt visible between lapels */}
        <path d="M194 330 L200 305 L206 330 L206 400 L194 400 Z" fill="url(#shirt-g)" />

        {/* Collar */}
        <path d="M178 247 L200 264 L222 247" fill="none" stroke="#444" strokeWidth="1.2" />
        <path d="M178 247 L188 255 L194 262 L200 264" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="0.5" />
        <path d="M222 247 L212 255 L206 262 L200 264" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="0.5" />

        {/* Tie */}
        <path
          d="M196 264 L200 258 L204 264 L206 350 L200 360 L194 350 Z"
          fill="url(#tie-g)"
          filter="url(#glow-g)"
          opacity="0.9"
        >
          {animated && (
            <animate attributeName="opacity" values="0.85;1;0.85" dur="2.5s" repeatCount="indefinite" />
          )}
        </path>
        {/* Tie knot */}
        <path d="M196 264 L200 258 L204 264 L202 268 L198 268 Z" fill="#4dff2a" />
        {/* Tie stripe detail */}
        <line x1="198.5" y1="285" x2="201.5" y2="285" stroke="#2bcc0f" strokeWidth="0.5" opacity="0.4" />
        <line x1="198" y1="305" x2="202" y2="305" stroke="#2bcc0f" strokeWidth="0.5" opacity="0.4" />
        <line x1="197.5" y1="325" x2="202.5" y2="325" stroke="#2bcc0f" strokeWidth="0.5" opacity="0.4" />
      </g>

      {/* === NECK === */}
      <path
        d="M185 232 Q185 228 190 228 L210 228 Q215 228 215 232 L215 252 Q215 256 210 256 L190 256 Q185 256 185 252 Z"
        fill="#2a2a2a"
        stroke="#333"
        strokeWidth="0.5"
      />
      {/* Neck ring detail */}
      <ellipse cx="200" cy="240" rx="14" ry="3" fill="none" stroke="#39ff14" strokeWidth="0.4" opacity="0.2" />

      {/* === HEAD === */}
      <g filter="url(#shadow)">
        {/* Head shape — more angular with jaw */}
        <path
          d="M148 140 Q148 72 200 60 Q252 72 252 140 L252 190 Q252 210 240 220 L228 228 Q214 234 200 234 Q186 234 172 228 L160 220 Q148 210 148 190 Z"
          fill="url(#hd-g)"
          stroke="#3a3a3a"
          strokeWidth="1.2"
        />

        {/* Head top highlight */}
        <path
          d="M155 130 Q155 78 200 68 Q245 78 245 130"
          fill="url(#hd-hi)"
        />

        {/* Forehead panel lines */}
        <path d="M168 100 Q200 95 232 100" stroke="#2a2a2a" strokeWidth="0.6" fill="none" opacity="0.6" />
        <path d="M162 112 L238 112" stroke="#2a2a2a" strokeWidth="0.4" fill="none" opacity="0.4" />

        {/* Side panel grooves */}
        <path d="M152 125 L152 200" stroke="#2a2a2a" strokeWidth="0.5" opacity="0.4" />
        <path d="M248 125 L248 200" stroke="#2a2a2a" strokeWidth="0.5" opacity="0.4" />

        {/* Cheek vents — left */}
        <g opacity="0.25">
          <line x1="155" y1="180" x2="162" y2="180" stroke="#39ff14" strokeWidth="0.5" />
          <line x1="155" y1="183" x2="161" y2="183" stroke="#39ff14" strokeWidth="0.5" />
          <line x1="155" y1="186" x2="160" y2="186" stroke="#39ff14" strokeWidth="0.5" />
        </g>
        {/* Cheek vents — right */}
        <g opacity="0.25">
          <line x1="245" y1="180" x2="238" y2="180" stroke="#39ff14" strokeWidth="0.5" />
          <line x1="245" y1="183" x2="239" y2="183" stroke="#39ff14" strokeWidth="0.5" />
          <line x1="245" y1="186" x2="240" y2="186" stroke="#39ff14" strokeWidth="0.5" />
        </g>

        {/* Chin detail */}
        <path d="M185 222 Q200 230 215 222" stroke="#2a2a2a" strokeWidth="0.5" fill="none" opacity="0.4" />
      </g>

      {/* === VISOR / EYE AREA === */}
      <g>
        {/* Visor recessed area */}
        <path
          d="M155 130 Q155 115 200 110 Q245 115 245 130 L245 172 Q245 188 200 192 Q155 188 155 172 Z"
          fill="url(#visor-g)"
          stroke="url(#visor-rim)"
          strokeWidth="1.2"
        />

        {/* Visor inner border */}
        <path
          d="M159 133 Q159 120 200 115 Q241 120 241 133 L241 170 Q241 184 200 188 Q159 184 159 170 Z"
          fill="none"
          stroke="#39ff14"
          strokeWidth="0.3"
          opacity="0.15"
        />

        {/* Scanline effect inside visor */}
        <g clipPath="url(#visor-clip)" opacity="0.04">
          {Array.from({ length: 20 }, (_, i) => (
            <line key={i} x1="150" y1={112 + i * 4} x2="250" y2={112 + i * 4} stroke="#39ff14" strokeWidth="0.8" />
          ))}
        </g>

        {/* Visor top reflection */}
        <path
          d="M162 132 Q162 120 200 116 Q238 120 238 132 L238 142 Q200 138 162 142 Z"
          fill="rgba(255,255,255,0.04)"
        />

        {/* === LEFT EYE === */}
        <g filter="url(#glow-eye)">
          {/* Outer glow ring */}
          <ellipse cx="180" cy="152" rx="20" ry="14" fill="#39ff14" opacity="0.06">
            {animated && (
              <animate attributeName="opacity" values="0.06;0.12;0.06" dur="3s" repeatCount="indefinite" />
            )}
          </ellipse>
          {/* Eye shape — angular, menacing */}
          <path
            d="M164 152 Q168 140 180 138 Q192 140 196 152 Q192 162 180 164 Q168 162 164 152 Z"
            fill="#39ff14"
            opacity="0.85"
          >
            {animated && (
              <animate attributeName="opacity" values="0.85;0.55;0.85" dur="3s" repeatCount="indefinite" />
            )}
          </path>
          {/* Inner bright core */}
          <ellipse cx="180" cy="151" rx="7" ry="6" fill="#7fff5a" opacity="0.6" />
          {/* Pupil */}
          <ellipse cx="180" cy="151" rx="3.5" ry="4" fill="#fff" opacity="0.95" />
          {/* Highlight */}
          <circle cx="175" cy="148" r="2" fill="#fff" opacity="0.5" />
          <circle cx="183" cy="155" r="1" fill="#fff" opacity="0.25" />
        </g>

        {/* === RIGHT EYE === */}
        <g filter="url(#glow-eye)">
          <ellipse cx="220" cy="152" rx="20" ry="14" fill="#39ff14" opacity="0.06">
            {animated && (
              <animate attributeName="opacity" values="0.06;0.12;0.06" dur="3s" repeatCount="indefinite" />
            )}
          </ellipse>
          <path
            d="M204 152 Q208 140 220 138 Q232 140 236 152 Q232 162 220 164 Q208 162 204 152 Z"
            fill="#39ff14"
            opacity="0.85"
          >
            {animated && (
              <animate attributeName="opacity" values="0.85;0.55;0.85" dur="3s" repeatCount="indefinite" />
            )}
          </path>
          <ellipse cx="220" cy="151" rx="7" ry="6" fill="#7fff5a" opacity="0.6" />
          <ellipse cx="220" cy="151" rx="3.5" ry="4" fill="#fff" opacity="0.95" />
          <circle cx="215" cy="148" r="2" fill="#fff" opacity="0.5" />
          <circle cx="223" cy="155" r="1" fill="#fff" opacity="0.25" />
        </g>

        {/* Bridge between eyes — subtle nose hint */}
        <path d="M192 155 Q200 160 208 155" stroke="#1a3a1a" strokeWidth="0.5" fill="none" opacity="0.3" />
      </g>

      {/* === SMIRK — more character === */}
      <g>
        <path
          d="M183 198 Q190 202 200 200 Q210 204 220 198"
          fill="none"
          stroke="#39ff14"
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity="0.45"
          filter="url(#glow-soft)"
        />
        {/* Slight upturn on right side for confident smirk */}
        <path
          d="M218 198 Q222 195 224 192"
          fill="none"
          stroke="#39ff14"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.35"
          filter="url(#glow-soft)"
        />
      </g>

      {/* === EARPIECE (right side) === */}
      <g>
        {/* Earpiece body */}
        <path
          d="M250 135 Q260 135 262 140 L264 168 Q264 174 258 174 L254 174 Q250 174 250 168 Z"
          fill="#1a1a1a"
          stroke="#333"
          strokeWidth="0.6"
        />
        {/* Earpiece screen */}
        <rect x="252" y="142" width="9" height="6" rx="1" fill="#39ff14" opacity="0.35">
          {animated && (
            <animate attributeName="opacity" values="0.35;0.7;0.35" dur="1.5s" repeatCount="indefinite" />
          )}
        </rect>
        {/* Earpiece lower light */}
        <rect x="253" y="155" width="7" height="2" rx="0.5" fill="#00e5ff" opacity="0.2">
          {animated && (
            <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
          )}
        </rect>
        {/* Boom mic arm */}
        <path d="M258 174 Q262 185 256 195 Q252 200 248 202" stroke="#2a2a2a" strokeWidth="1.5" fill="none" />
        {/* Mic tip */}
        <circle cx="247" cy="203" r="3.5" fill="#1a1a1a" stroke="#39ff14" strokeWidth="0.5" opacity="0.5" />
        <circle cx="247" cy="203" r="1.5" fill="#39ff14" opacity="0.3">
          {animated && (
            <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
          )}
        </circle>
      </g>

      {/* === EARPIECE (left side — smaller) === */}
      <g>
        <path
          d="M150 140 Q142 140 140 145 L138 162 Q138 166 143 166 L146 166 Q150 166 150 162 Z"
          fill="#1a1a1a"
          stroke="#333"
          strokeWidth="0.5"
        />
        <rect x="141" y="147" width="6" height="4" rx="1" fill="#00e5ff" opacity="0.2">
          {animated && (
            <animate attributeName="opacity" values="0.2;0.4;0.2" dur="1.8s" repeatCount="indefinite" />
          )}
        </rect>
      </g>

      {/* === ANTENNA === */}
      <g>
        <line x1="200" y1="60" x2="200" y2="30" stroke="#333" strokeWidth="2" />
        <line x1="200" y1="60" x2="200" y2="30" stroke="#39ff14" strokeWidth="0.3" opacity="0.3" />
        {/* Antenna base ring */}
        <ellipse cx="200" cy="60" rx="6" ry="2" fill="#2a2a2a" stroke="#333" strokeWidth="0.5" />
        {/* Antenna orb */}
        <circle cx="200" cy="26" r="6" fill="#111" stroke="#39ff14" strokeWidth="1" filter="url(#glow-g)">
          {animated && (
            <animate attributeName="r" values="6;7;6" dur="2s" repeatCount="indefinite" />
          )}
        </circle>
        <circle cx="200" cy="26" r="3" fill="#39ff14" opacity="0.85">
          {animated && (
            <animate attributeName="opacity" values="0.85;0.3;0.85" dur="1s" repeatCount="indefinite" />
          )}
        </circle>
        {/* Signal rings emanating */}
        {animated && (
          <>
            <circle cx="200" cy="26" r="10" fill="none" stroke="#39ff14" strokeWidth="0.5" opacity="0">
              <animate attributeName="r" values="8;20" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.4;0" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="200" cy="26" r="10" fill="none" stroke="#39ff14" strokeWidth="0.5" opacity="0">
              <animate attributeName="r" values="8;20" dur="2s" begin="1s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.4;0" dur="2s" begin="1s" repeatCount="indefinite" />
            </circle>
          </>
        )}
      </g>

      {/* === HUD ELEMENTS === */}
      {animated && (
        <g>
          {/* Left holographic chart panel */}
          <g transform="translate(42, 88)" opacity="0.35">
            <rect x="0" y="0" width="65" height="40" rx="3" fill="rgba(57,255,20,0.03)" stroke="#39ff14" strokeWidth="0.5" />
            {/* Chart grid */}
            <line x1="5" y1="10" x2="60" y2="10" stroke="#39ff14" strokeWidth="0.15" opacity="0.3" />
            <line x1="5" y1="20" x2="60" y2="20" stroke="#39ff14" strokeWidth="0.15" opacity="0.3" />
            <line x1="5" y1="30" x2="60" y2="30" stroke="#39ff14" strokeWidth="0.15" opacity="0.3" />
            {/* Candlestick chart */}
            {/* Candle 1 - red */}
            <line x1="10" y1="12" x2="10" y2="28" stroke="#ff3b3b" strokeWidth="0.5" />
            <rect x="8" y="16" width="4" height="8" fill="#ff3b3b" opacity="0.7" />
            {/* Candle 2 - green */}
            <line x1="18" y1="10" x2="18" y2="26" stroke="#39ff14" strokeWidth="0.5" />
            <rect x="16" y="12" width="4" height="8" fill="#39ff14" opacity="0.7" />
            {/* Candle 3 - green big */}
            <line x1="26" y1="8" x2="26" y2="24" stroke="#39ff14" strokeWidth="0.5" />
            <rect x="24" y="8" width="4" height="12" fill="#39ff14" opacity="0.8" />
            {/* Candle 4 - red small */}
            <line x1="34" y1="10" x2="34" y2="22" stroke="#ff3b3b" strokeWidth="0.5" />
            <rect x="32" y="12" width="4" height="6" fill="#ff3b3b" opacity="0.6" />
            {/* Candle 5 - green */}
            <line x1="42" y1="6" x2="42" y2="20" stroke="#39ff14" strokeWidth="0.5" />
            <rect x="40" y="6" width="4" height="10" fill="#39ff14" opacity="0.8" />
            {/* Candle 6 - big green pump */}
            <line x1="50" y1="4" x2="50" y2="18" stroke="#39ff14" strokeWidth="0.5" />
            <rect x="48" y="4" width="4" height="10" fill="#39ff14" opacity="0.9" />
            {/* Label */}
            <text x="5" y="38" fill="#39ff14" fontSize="4" fontFamily="monospace">AOFOMO/SOL</text>
            <animate attributeName="opacity" values="0.35;0.15;0.35" dur="4s" repeatCount="indefinite" />
          </g>

          {/* Right warning panel */}
          <g transform="translate(290, 80)" opacity="0.4">
            <rect x="0" y="0" width="68" height="50" rx="3" fill="rgba(255,59,59,0.03)" stroke="#ff3b3b" strokeWidth="0.5" />
            {/* Warning icon */}
            <path d="M34 8 L40 18 L28 18 Z" fill="none" stroke="#ff3b3b" strokeWidth="0.8" />
            <line x1="34" y1="11" x2="34" y2="15" stroke="#ff3b3b" strokeWidth="0.7" />
            <circle cx="34" cy="16.5" r="0.5" fill="#ff3b3b" />
            {/* Alert text */}
            <text x="34" y="28" textAnchor="middle" fill="#ff3b3b" fontSize="5" fontFamily="monospace">FOMO ALERT</text>
            <text x="34" y="35" textAnchor="middle" fill="#ff3b3b" fontSize="4" fontFamily="monospace" opacity="0.6">LEVEL: CRITICAL</text>
            {/* Status bar */}
            <rect x="8" y="40" width="52" height="3" rx="1" fill="#1a0000" />
            <rect x="8" y="40" width="42" height="3" rx="1" fill="#ff3b3b" opacity="0.6">
              {animated && (
                <animate attributeName="width" values="42;48;42" dur="1.5s" repeatCount="indefinite" />
              )}
            </rect>
            <animate attributeName="opacity" values="0.4;0.15;0.4" dur="2.5s" repeatCount="indefinite" />
          </g>

          {/* Top-left signal strength */}
          <g transform="translate(65, 60)" opacity="0.3">
            <text x="0" y="0" fill="#00e5ff" fontSize="4.5" fontFamily="monospace">SIGNAL</text>
            {[0, 1, 2, 3, 4].map((i) => (
              <rect
                key={i}
                x={i * 5}
                y={5}
                width="3.5"
                height={3 + i * 2}
                fill="#39ff14"
                opacity="0.6"
                rx="0.3"
              >
                <animate
                  attributeName="opacity"
                  values="0.6;0.2;0.6"
                  dur={`${1.2 + i * 0.2}s`}
                  repeatCount="indefinite"
                />
              </rect>
            ))}
          </g>

          {/* Bottom data readout */}
          <g transform="translate(70, 420)" opacity="0.2">
            <text fill="#00e5ff" fontSize="5.5" fontFamily="monospace">
              SIG:99.7% | RISK:NULL | ENTRY:NOW | CONV:MAX
            </text>
            <animate attributeName="opacity" values="0.2;0.08;0.2" dur="3s" repeatCount="indefinite" />
          </g>

          {/* Right side data ticks */}
          <g transform="translate(365, 140)" opacity="0.15">
            {Array.from({ length: 8 }, (_, i) => (
              <g key={i}>
                <line x1="0" y1={i * 12} x2="8" y2={i * 12} stroke="#39ff14" strokeWidth="0.5" />
                <text x="12" y={i * 12 + 2} fill="#39ff14" fontSize="4" fontFamily="monospace">
                  {(99 - i * 3).toFixed(1)}
                </text>
              </g>
            ))}
          </g>

          {/* Crosshair / target overlay on chest */}
          <g transform="translate(200, 340)" opacity="0.08">
            <circle cx="0" cy="0" r="20" fill="none" stroke="#39ff14" strokeWidth="0.5" />
            <circle cx="0" cy="0" r="12" fill="none" stroke="#39ff14" strokeWidth="0.3" />
            <line x1="-25" y1="0" x2="-8" y2="0" stroke="#39ff14" strokeWidth="0.3" />
            <line x1="8" y1="0" x2="25" y2="0" stroke="#39ff14" strokeWidth="0.3" />
            <line x1="0" y1="-25" x2="0" y2="-8" stroke="#39ff14" strokeWidth="0.3" />
            <line x1="0" y1="8" x2="0" y2="25" stroke="#39ff14" strokeWidth="0.3" />
          </g>
        </g>
      )}
    </svg>
  );
}
