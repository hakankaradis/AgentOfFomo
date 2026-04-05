"use client";

interface AgentMascotOrbProps {
  size?: number;
  className?: string;
  animated?: boolean;
}

export default function AgentMascotOrb({
  size = 384,
  className = "",
  animated = true,
}: AgentMascotOrbProps) {
  return (
    <svg
      viewBox="0 0 400 400"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Glow filters */}
        <filter id="orb-glow-g" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="orb-glow-eye" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="8" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="orb-glow-soft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="orb-glow-strong" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="12" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="orb-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000" floodOpacity="0.6" />
        </filter>
        <filter id="orb-hud-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Head gradients */}
        <linearGradient id="orb-hd-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="35%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#181818" />
        </linearGradient>
        <linearGradient id="orb-hd-hi" x1="0.3" y1="0" x2="0.7" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        <linearGradient id="orb-visor-g" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#0d1f0d" />
          <stop offset="50%" stopColor="#081208" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
        <linearGradient id="orb-visor-rim" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#39ff14" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#39ff14" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#39ff14" stopOpacity="0.5" />
        </linearGradient>

        {/* Floating glow beneath head */}
        <radialGradient id="orb-float-glow" cx="0.5" cy="0.3" r="0.7">
          <stop offset="0%" stopColor="#39ff14" stopOpacity="0.25" />
          <stop offset="40%" stopColor="#39ff14" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#39ff14" stopOpacity="0" />
        </radialGradient>

        {/* Ambient aura around head */}
        <radialGradient id="orb-ambient" cx="0.5" cy="0.45" r="0.5">
          <stop offset="0%" stopColor="#39ff14" stopOpacity="0.04" />
          <stop offset="70%" stopColor="#39ff14" stopOpacity="0.02" />
          <stop offset="100%" stopColor="#39ff14" stopOpacity="0" />
        </radialGradient>

        {/* Visor clip */}
        <clipPath id="orb-visor-clip">
          <path d="M145 155 Q145 138 200 132 Q255 138 255 155 L255 202 Q255 220 200 225 Q145 220 145 202 Z" />
        </clipPath>
      </defs>

      {/* === AMBIENT AURA === */}
      <ellipse cx="200" cy="195" rx="190" ry="190" fill="url(#orb-ambient)" />

      {/* === FLOATING ENERGY FIELD BENEATH HEAD === */}
      <ellipse cx="200" cy="310" rx="80" ry="25" fill="url(#orb-float-glow)">
        {animated && (
          <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
        )}
      </ellipse>
      {/* Secondary energy wisps */}
      <ellipse cx="200" cy="305" rx="55" ry="12" fill="none" stroke="#39ff14" strokeWidth="0.5" opacity="0.12">
        {animated && (
          <animate attributeName="opacity" values="0.12;0.25;0.12" dur="2.5s" repeatCount="indefinite" />
        )}
      </ellipse>
      <ellipse cx="200" cy="315" rx="65" ry="15" fill="none" stroke="#39ff14" strokeWidth="0.3" opacity="0.08">
        {animated && (
          <animate attributeName="opacity" values="0.08;0.18;0.08" dur="3.5s" repeatCount="indefinite" />
        )}
      </ellipse>

      {/* === ORBIT RINGS === */}
      {/* Outer tech orbit ring */}
      <g>
        <ellipse cx="200" cy="200" rx="175" ry="60" fill="none" stroke="#39ff14" strokeWidth="0.6" opacity="0.15" strokeDasharray="4 8">
          {animated && (
            <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="25s" repeatCount="indefinite" />
          )}
        </ellipse>
      </g>
      {/* Inner tech orbit ring — counter rotation */}
      <g>
        <ellipse cx="200" cy="200" rx="155" ry="45" fill="none" stroke="#00e5ff" strokeWidth="0.4" opacity="0.1" strokeDasharray="2 12">
          {animated && (
            <animateTransform attributeName="transform" type="rotate" from="360 200 200" to="0 200 200" dur="20s" repeatCount="indefinite" />
          )}
        </ellipse>
      </g>
      {/* Tilted orbit ring */}
      <g transform="rotate(-15 200 200)">
        <ellipse cx="200" cy="200" rx="165" ry="52" fill="none" stroke="#39ff14" strokeWidth="0.3" opacity="0.08" strokeDasharray="6 6">
          {animated && (
            <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="30s" repeatCount="indefinite" />
          )}
        </ellipse>
      </g>

      {/* === ORBITING DATA BADGES === */}
      {/* "BUY" badge — orbits on outer ring */}
      <g opacity="0.5">
        {animated && (
          <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="25s" repeatCount="indefinite" />
        )}
        <g transform="translate(375, 200)">
          <rect x="-16" y="-8" width="32" height="16" rx="2" fill="rgba(57,255,20,0.08)" stroke="#39ff14" strokeWidth="0.6" />
          <text x="0" y="4" textAnchor="middle" fill="#39ff14" fontSize="8" fontFamily="monospace" fontWeight="bold">BUY</text>
        </g>
      </g>

      {/* "99.7%" badge — orbits on outer ring offset */}
      <g opacity="0.4">
        {animated && (
          <animateTransform attributeName="transform" type="rotate" from="120 200 200" to="480 200 200" dur="25s" repeatCount="indefinite" />
        )}
        <g transform="translate(375, 200)">
          <rect x="-20" y="-8" width="40" height="16" rx="2" fill="rgba(0,229,255,0.06)" stroke="#00e5ff" strokeWidth="0.5" />
          <text x="0" y="4" textAnchor="middle" fill="#00e5ff" fontSize="7" fontFamily="monospace">99.7%</text>
        </g>
      </g>

      {/* Warning triangle badge — orbits on outer ring */}
      <g opacity="0.45">
        {animated && (
          <animateTransform attributeName="transform" type="rotate" from="240 200 200" to="600 200 200" dur="25s" repeatCount="indefinite" />
        )}
        <g transform="translate(375, 200)">
          <path d="M0 -8 L8 6 L-8 6 Z" fill="none" stroke="#ff3b3b" strokeWidth="0.8" />
          <line x1="0" y1="-4" x2="0" y2="2" stroke="#ff3b3b" strokeWidth="0.8" />
          <circle cx="0" cy="4" r="0.8" fill="#ff3b3b" />
        </g>
      </g>

      {/* === ORBITING MINI CHART PANELS === */}
      {/* Chart panel 1 — orbits inner ring */}
      <g opacity="0.35">
        {animated && (
          <animateTransform attributeName="transform" type="rotate" from="60 200 200" to="420 200 200" dur="20s" repeatCount="indefinite" />
        )}
        <g transform="translate(355, 200)">
          <rect x="-22" y="-14" width="44" height="28" rx="2" fill="rgba(57,255,20,0.04)" stroke="#39ff14" strokeWidth="0.4" />
          {/* Mini candlesticks */}
          <line x1="-14" y1="-6" x2="-14" y2="8" stroke="#ff3b3b" strokeWidth="0.5" />
          <rect x="-16" y="-2" width="4" height="6" fill="#ff3b3b" opacity="0.7" />
          <line x1="-6" y1="-8" x2="-6" y2="4" stroke="#39ff14" strokeWidth="0.5" />
          <rect x="-8" y="-8" width="4" height="8" fill="#39ff14" opacity="0.7" />
          <line x1="2" y1="-4" x2="2" y2="6" stroke="#39ff14" strokeWidth="0.5" />
          <rect x="0" y="-4" width="4" height="6" fill="#39ff14" opacity="0.8" />
          <line x1="10" y1="-10" x2="10" y2="2" stroke="#39ff14" strokeWidth="0.5" />
          <rect x="8" y="-10" width="4" height="8" fill="#39ff14" opacity="0.9" />
          <text x="0" y="12" textAnchor="middle" fill="#39ff14" fontSize="3.5" fontFamily="monospace">AOFOMO</text>
        </g>
      </g>

      {/* Chart panel 2 — orbits inner ring opposite side */}
      <g opacity="0.3">
        {animated && (
          <animateTransform attributeName="transform" type="rotate" from="240 200 200" to="600 200 200" dur="20s" repeatCount="indefinite" />
        )}
        <g transform="translate(355, 200)">
          <rect x="-22" y="-14" width="44" height="28" rx="2" fill="rgba(0,229,255,0.04)" stroke="#00e5ff" strokeWidth="0.4" />
          {/* Mini line chart */}
          <polyline points="-16,8 -10,4 -4,6 0,-2 6,-6 12,-10 18,-8" fill="none" stroke="#00e5ff" strokeWidth="0.8" />
          <text x="0" y="12" textAnchor="middle" fill="#00e5ff" fontSize="3.5" fontFamily="monospace">SIGNAL</text>
        </g>
      </g>

      {/* === HEAD === */}
      <g filter="url(#orb-shadow)">
        {/* Head shape — larger, angular, floating */}
        <path
          d="M138 160 Q138 82 200 68 Q262 82 262 160 L262 220 Q262 245 248 255 L234 263 Q218 270 200 270 Q182 270 166 263 L152 255 Q138 245 138 220 Z"
          fill="url(#orb-hd-g)"
          stroke="#3a3a3a"
          strokeWidth="1.2"
        />

        {/* Head top highlight */}
        <path
          d="M145 150 Q145 88 200 76 Q255 88 255 150"
          fill="url(#orb-hd-hi)"
        />

        {/* Forehead panel lines */}
        <path d="M158 115 Q200 109 242 115" stroke="#2a2a2a" strokeWidth="0.6" fill="none" opacity="0.6" />
        <path d="M152 128 L248 128" stroke="#2a2a2a" strokeWidth="0.4" fill="none" opacity="0.4" />

        {/* Side panel grooves */}
        <path d="M142 145 L142 230" stroke="#2a2a2a" strokeWidth="0.5" opacity="0.4" />
        <path d="M258 145 L258 230" stroke="#2a2a2a" strokeWidth="0.5" opacity="0.4" />

        {/* Cheek vents — left */}
        <g opacity="0.25">
          <line x1="145" y1="210" x2="153" y2="210" stroke="#39ff14" strokeWidth="0.5" />
          <line x1="145" y1="213" x2="152" y2="213" stroke="#39ff14" strokeWidth="0.5" />
          <line x1="145" y1="216" x2="151" y2="216" stroke="#39ff14" strokeWidth="0.5" />
          <line x1="145" y1="219" x2="150" y2="219" stroke="#39ff14" strokeWidth="0.5" />
        </g>
        {/* Cheek vents — right */}
        <g opacity="0.25">
          <line x1="255" y1="210" x2="247" y2="210" stroke="#39ff14" strokeWidth="0.5" />
          <line x1="255" y1="213" x2="248" y2="213" stroke="#39ff14" strokeWidth="0.5" />
          <line x1="255" y1="216" x2="249" y2="216" stroke="#39ff14" strokeWidth="0.5" />
          <line x1="255" y1="219" x2="250" y2="219" stroke="#39ff14" strokeWidth="0.5" />
        </g>

        {/* Jaw edge highlights */}
        <path d="M152 255 L166 263 Q182 270 200 270" stroke="#39ff14" strokeWidth="0.3" fill="none" opacity="0.08" />
        <path d="M248 255 L234 263 Q218 270 200 270" stroke="#39ff14" strokeWidth="0.3" fill="none" opacity="0.08" />

        {/* Chin detail */}
        <path d="M180 258 Q200 266 220 258" stroke="#2a2a2a" strokeWidth="0.5" fill="none" opacity="0.4" />

        {/* Subtle bottom edge glow — floating effect */}
        <path
          d="M160 260 Q180 275 200 275 Q220 275 240 260"
          fill="none"
          stroke="#39ff14"
          strokeWidth="0.8"
          opacity="0.06"
          filter="url(#orb-glow-soft)"
        />
      </g>

      {/* === VISOR / EYE AREA === */}
      <g>
        {/* Visor recessed area */}
        <path
          d="M145 155 Q145 138 200 132 Q255 138 255 155 L255 202 Q255 220 200 225 Q145 220 145 202 Z"
          fill="url(#orb-visor-g)"
          stroke="url(#orb-visor-rim)"
          strokeWidth="1.2"
        />

        {/* Visor inner border */}
        <path
          d="M149 158 Q149 142 200 137 Q251 142 251 158 L251 200 Q251 216 200 221 Q149 216 149 200 Z"
          fill="none"
          stroke="#39ff14"
          strokeWidth="0.3"
          opacity="0.15"
        />

        {/* Scanline effect inside visor */}
        <g clipPath="url(#orb-visor-clip)" opacity="0.04">
          {Array.from({ length: 24 }, (_, i) => (
            <line key={i} x1="140" y1={134 + i * 4} x2="260" y2={134 + i * 4} stroke="#39ff14" strokeWidth="0.8" />
          ))}
        </g>

        {/* Visor top reflection */}
        <path
          d="M152 157 Q152 143 200 138 Q248 143 248 157 L248 168 Q200 163 152 168 Z"
          fill="rgba(255,255,255,0.04)"
        />

        {/* === LEFT EYE — Diamond shaped === */}
        <g filter="url(#orb-glow-eye)">
          {/* Outer glow */}
          <path d="M160 178 L178 162 L196 178 L178 194 Z" fill="#39ff14" opacity="0.06">
            {animated && (
              <animate attributeName="opacity" values="0.06;0.14;0.06" dur="3s" repeatCount="indefinite" />
            )}
          </path>
          {/* Diamond eye shape */}
          <path
            d="M163 178 L178 165 L193 178 L178 191 Z"
            fill="#39ff14"
            opacity="0.85"
          >
            {animated && (
              <animate attributeName="opacity" values="0.85;0.5;0.85" dur="3s" repeatCount="indefinite" />
            )}
          </path>
          {/* Inner bright core */}
          <path d="M169 178 L178 170 L187 178 L178 186 Z" fill="#7fff5a" opacity="0.6" />
          {/* White pupil */}
          <ellipse cx="178" cy="178" rx="4" ry="5" fill="#fff" opacity="0.95" />
          {/* Highlights */}
          <circle cx="174" cy="174" r="2" fill="#fff" opacity="0.5" />
          <circle cx="181" cy="182" r="1" fill="#fff" opacity="0.25" />
        </g>

        {/* === RIGHT EYE — Diamond shaped === */}
        <g filter="url(#orb-glow-eye)">
          <path d="M204 178 L222 162 L240 178 L222 194 Z" fill="#39ff14" opacity="0.06">
            {animated && (
              <animate attributeName="opacity" values="0.06;0.14;0.06" dur="3s" repeatCount="indefinite" />
            )}
          </path>
          <path
            d="M207 178 L222 165 L237 178 L222 191 Z"
            fill="#39ff14"
            opacity="0.85"
          >
            {animated && (
              <animate attributeName="opacity" values="0.85;0.5;0.85" dur="3s" repeatCount="indefinite" />
            )}
          </path>
          <path d="M213 178 L222 170 L231 178 L222 186 Z" fill="#7fff5a" opacity="0.6" />
          <ellipse cx="222" cy="178" rx="4" ry="5" fill="#fff" opacity="0.95" />
          <circle cx="218" cy="174" r="2" fill="#fff" opacity="0.5" />
          <circle cx="225" cy="182" r="1" fill="#fff" opacity="0.25" />
        </g>

        {/* Bridge between eyes */}
        <path d="M192 182 Q200 188 208 182" stroke="#1a3a1a" strokeWidth="0.5" fill="none" opacity="0.3" />
      </g>

      {/* === SMIRK === */}
      <g>
        <path
          d="M178 232 Q188 237 200 235 Q212 239 224 232"
          fill="none"
          stroke="#39ff14"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.45"
          filter="url(#orb-glow-soft)"
        />
        {/* Confident upturn on right side */}
        <path
          d="M222 232 Q226 229 228 225"
          fill="none"
          stroke="#39ff14"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.35"
          filter="url(#orb-glow-soft)"
        />
      </g>

      {/* === EARPIECE (right side) === */}
      <g>
        <path
          d="M260 155 Q270 155 272 160 L274 192 Q274 198 268 198 L264 198 Q260 198 260 192 Z"
          fill="#1a1a1a"
          stroke="#333"
          strokeWidth="0.6"
        />
        {/* Earpiece screen */}
        <rect x="262" y="166" width="9" height="6" rx="1" fill="#39ff14" opacity="0.35">
          {animated && (
            <animate attributeName="opacity" values="0.35;0.7;0.35" dur="1.5s" repeatCount="indefinite" />
          )}
        </rect>
        {/* Earpiece lower light */}
        <rect x="263" y="180" width="7" height="2" rx="0.5" fill="#00e5ff" opacity="0.2">
          {animated && (
            <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
          )}
        </rect>
        {/* Boom mic arm */}
        <path d="M268 198 Q272 210 266 222 Q262 228 258 230" stroke="#2a2a2a" strokeWidth="1.5" fill="none" />
        {/* Mic tip */}
        <circle cx="257" cy="231" r="3.5" fill="#1a1a1a" stroke="#39ff14" strokeWidth="0.5" opacity="0.5" />
        <circle cx="257" cy="231" r="1.5" fill="#39ff14" opacity="0.3">
          {animated && (
            <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
          )}
        </circle>
      </g>

      {/* === LEFT EARPIECE (smaller) === */}
      <g>
        <path
          d="M140 160 Q132 160 130 165 L128 186 Q128 190 133 190 L136 190 Q140 190 140 186 Z"
          fill="#1a1a1a"
          stroke="#333"
          strokeWidth="0.5"
        />
        <rect x="131" y="172" width="6" height="4" rx="1" fill="#00e5ff" opacity="0.2">
          {animated && (
            <animate attributeName="opacity" values="0.2;0.4;0.2" dur="1.8s" repeatCount="indefinite" />
          )}
        </rect>
      </g>

      {/* === ANTENNA === */}
      <g>
        <line x1="200" y1="68" x2="200" y2="32" stroke="#333" strokeWidth="2.2" />
        <line x1="200" y1="68" x2="200" y2="32" stroke="#39ff14" strokeWidth="0.3" opacity="0.3" />
        {/* Antenna base ring */}
        <ellipse cx="200" cy="68" rx="7" ry="2.5" fill="#2a2a2a" stroke="#333" strokeWidth="0.5" />
        {/* Antenna orb */}
        <circle cx="200" cy="28" r="7" fill="#111" stroke="#39ff14" strokeWidth="1.2" filter="url(#orb-glow-g)">
          {animated && (
            <animate attributeName="r" values="7;8;7" dur="2s" repeatCount="indefinite" />
          )}
        </circle>
        <circle cx="200" cy="28" r="3.5" fill="#39ff14" opacity="0.85">
          {animated && (
            <animate attributeName="opacity" values="0.85;0.3;0.85" dur="1s" repeatCount="indefinite" />
          )}
        </circle>
        {/* Signal rings beacon */}
        {animated && (
          <>
            <circle cx="200" cy="28" r="10" fill="none" stroke="#39ff14" strokeWidth="0.6" opacity="0">
              <animate attributeName="r" values="9;24" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.5;0" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="200" cy="28" r="10" fill="none" stroke="#39ff14" strokeWidth="0.6" opacity="0">
              <animate attributeName="r" values="9;24" dur="2s" begin="1s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.5;0" dur="2s" begin="1s" repeatCount="indefinite" />
            </circle>
          </>
        )}
      </g>

      {/* === FLOATING HUD ELEMENTS (non-orbiting) === */}
      {/* Small floating "ENTRY" badge top-left */}
      <g opacity="0.3" filter="url(#orb-hud-glow)">
        <rect x="52" y="92" width="46" height="16" rx="2" fill="rgba(57,255,20,0.05)" stroke="#39ff14" strokeWidth="0.5" />
        <text x="75" y="103" textAnchor="middle" fill="#39ff14" fontSize="6" fontFamily="monospace">ENTRY</text>
        {animated && (
          <animate attributeName="opacity" values="0.3;0.15;0.3" dur="4s" repeatCount="indefinite" />
        )}
      </g>

      {/* Signal strength bars — top right */}
      <g transform="translate(310, 90)" opacity="0.25">
        <text x="0" y="0" fill="#00e5ff" fontSize="5" fontFamily="monospace">SIG</text>
        {[0, 1, 2, 3, 4].map((i) => (
          <rect
            key={i}
            x={i * 5.5}
            y={5}
            width="4"
            height={3 + i * 2.5}
            fill="#39ff14"
            opacity="0.6"
            rx="0.3"
          >
            {animated && (
              <animate
                attributeName="opacity"
                values="0.6;0.2;0.6"
                dur={`${1.2 + i * 0.2}s`}
                repeatCount="indefinite"
              />
            )}
          </rect>
        ))}
      </g>

      {/* Bottom status readout */}
      <g opacity="0.15">
        <text x="200" y="365" textAnchor="middle" fill="#00e5ff" fontSize="5" fontFamily="monospace">
          SIG:99.7% | RISK:NULL | CONV:MAX
        </text>
        {animated && (
          <animate attributeName="opacity" values="0.15;0.06;0.15" dur="3s" repeatCount="indefinite" />
        )}
      </g>

      {/* Small "FOMO" badge bottom-right */}
      <g opacity="0.35" filter="url(#orb-hud-glow)">
        <rect x="300" y="285" width="46" height="16" rx="2" fill="rgba(255,59,59,0.05)" stroke="#ff3b3b" strokeWidth="0.5" />
        <text x="323" y="296" textAnchor="middle" fill="#ff3b3b" fontSize="6" fontFamily="monospace">FOMO</text>
        {animated && (
          <animate attributeName="opacity" values="0.35;0.15;0.35" dur="2.5s" repeatCount="indefinite" />
        )}
      </g>
    </svg>
  );
}
