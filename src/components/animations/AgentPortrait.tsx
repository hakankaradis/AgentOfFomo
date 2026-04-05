"use client";

interface AgentPortraitProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function AgentPortrait({
  width = 300,
  height = 450,
  className = "",
}: AgentPortraitProps) {
  return (
    <svg
      viewBox="0 0 300 450"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="p-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="p-eye" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="p-soft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="p-hd" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#333" />
          <stop offset="40%" stopColor="#282828" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
        <linearGradient id="p-suit" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1c1c1c" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
        <linearGradient id="p-tie" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4dff2a" />
          <stop offset="50%" stopColor="#39ff14" />
          <stop offset="100%" stopColor="#28cc0e" />
        </linearGradient>
        <linearGradient id="p-visor" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#0d1f0d" />
          <stop offset="50%" stopColor="#081208" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
        <radialGradient id="p-ambient" cx="0.5" cy="0.35" r="0.5">
          <stop offset="0%" stopColor="#39ff14" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#39ff14" stopOpacity="0" />
        </radialGradient>
        <clipPath id="p-visor-clip">
          <path d="M108 115 Q108 103 150 99 Q192 103 192 115 L192 148 Q192 160 150 163 Q108 160 108 148 Z" />
        </clipPath>
      </defs>

      {/* Ambient glow */}
      <ellipse cx="150" cy="160" rx="140" ry="180" fill="url(#p-ambient)" />

      {/* === BACKGROUND HUD ELEMENTS === */}
      <g opacity="0.15">
        {/* Radar circles */}
        <circle cx="150" cy="140" r="120" fill="none" stroke="#39ff14" strokeWidth="0.3" />
        <circle cx="150" cy="140" r="85" fill="none" stroke="#39ff14" strokeWidth="0.2" />
        <circle cx="150" cy="140" r="50" fill="none" stroke="#39ff14" strokeWidth="0.2" />
        {/* Radar sweep */}
        <path d="M150 140 L150 20" stroke="#39ff14" strokeWidth="0.3" opacity="0.4">
          <animateTransform attributeName="transform" type="rotate" from="0 150 140" to="360 150 140" dur="6s" repeatCount="indefinite" />
        </path>
        {/* Cross lines */}
        <line x1="30" y1="140" x2="270" y2="140" stroke="#39ff14" strokeWidth="0.15" />
        <line x1="150" y1="20" x2="150" y2="260" stroke="#39ff14" strokeWidth="0.15" />
      </g>

      {/* === HUD: Left chart panel === */}
      <g transform="translate(8, 80)" opacity="0.25">
        <rect x="0" y="0" width="55" height="35" rx="2" fill="rgba(57,255,20,0.02)" stroke="#39ff14" strokeWidth="0.4" />
        {/* Mini candlesticks */}
        <line x1="8" y1="8" x2="8" y2="25" stroke="#ff3b3b" strokeWidth="0.5" />
        <rect x="6" y="12" width="4" height="8" fill="#ff3b3b" opacity="0.6" />
        <line x1="16" y1="6" x2="16" y2="22" stroke="#39ff14" strokeWidth="0.5" />
        <rect x="14" y="6" width="4" height="10" fill="#39ff14" opacity="0.6" />
        <line x1="24" y1="4" x2="24" y2="20" stroke="#39ff14" strokeWidth="0.5" />
        <rect x="22" y="4" width="4" height="10" fill="#39ff14" opacity="0.7" />
        <line x1="32" y1="8" x2="32" y2="22" stroke="#ff3b3b" strokeWidth="0.5" />
        <rect x="30" y="10" width="4" height="6" fill="#ff3b3b" opacity="0.5" />
        <line x1="40" y1="3" x2="40" y2="18" stroke="#39ff14" strokeWidth="0.5" />
        <rect x="38" y="3" width="4" height="10" fill="#39ff14" opacity="0.8" />
        <text x="4" y="33" fill="#39ff14" fontSize="3.5" fontFamily="monospace">AOFOMO/SOL</text>
        <animate attributeName="opacity" values="0.25;0.1;0.25" dur="4s" repeatCount="indefinite" />
      </g>

      {/* === HUD: Right signal panel === */}
      <g transform="translate(238, 75)" opacity="0.2">
        <rect x="0" y="0" width="52" height="40" rx="2" fill="rgba(255,59,59,0.02)" stroke="#ff3b3b" strokeWidth="0.4" />
        <path d="M26 7 L31 15 L21 15 Z" fill="none" stroke="#ff3b3b" strokeWidth="0.6" />
        <text x="26" y="24" textAnchor="middle" fill="#ff3b3b" fontSize="4" fontFamily="monospace">FOMO</text>
        <text x="26" y="30" textAnchor="middle" fill="#ff3b3b" fontSize="3.5" fontFamily="monospace" opacity="0.6">CRITICAL</text>
        <rect x="6" y="34" width="40" height="2.5" rx="1" fill="#1a0000" />
        <rect x="6" y="34" width="32" height="2.5" rx="1" fill="#ff3b3b" opacity="0.5">
          <animate attributeName="width" values="32;38;32" dur="1.5s" repeatCount="indefinite" />
        </rect>
        <animate attributeName="opacity" values="0.2;0.08;0.2" dur="2.5s" repeatCount="indefinite" />
      </g>

      {/* === HUD: Bottom data === */}
      <g transform="translate(30, 395)" opacity="0.15">
        <text fill="#00e5ff" fontSize="5" fontFamily="monospace">
          SIG:99.7% | RISK:NULL | CONV:MAX
        </text>
        <animate attributeName="opacity" values="0.15;0.06;0.15" dur="3s" repeatCount="indefinite" />
      </g>

      {/* === BODY / SUIT === */}
      <g>
        {/* Shoulders — wide, imposing */}
        <path
          d="M60 310 Q55 280 80 265 L110 255 L150 252 L190 255 L220 265 Q245 280 240 310 L238 440 Q236 455 210 455 L90 455 Q64 455 62 440 Z"
          fill="url(#p-suit)"
          stroke="#2a2a2a"
          strokeWidth="0.8"
        />
        {/* Shoulder seams */}
        <path d="M80 265 Q95 275 105 295" stroke="#2a2a2a" strokeWidth="0.6" fill="none" />
        <path d="M220 265 Q205 275 195 295" stroke="#2a2a2a" strokeWidth="0.6" fill="none" />

        {/* Breast pocket */}
        <path d="M88 305 L88 320 Q88 321 90 321 L105 321 Q107 321 107 320 L107 310" fill="none" stroke="#2a2a2a" strokeWidth="0.4" />
        <path d="M92 307 L95 304 L98 307 L96 312 L93 312 Z" fill="#39ff14" opacity="0.25" />

        {/* Buttons */}
        <circle cx="150" cy="345" r="2.5" fill="#1a1a1a" stroke="#333" strokeWidth="0.4" />
        <circle cx="150" cy="368" r="2.5" fill="#1a1a1a" stroke="#333" strokeWidth="0.4" />
        <circle cx="150" cy="391" r="2.5" fill="#1a1a1a" stroke="#333" strokeWidth="0.4" />

        {/* Lapels */}
        <path d="M110 255 L144 335 L150 310" fill="#1e1e1e" stroke="#2a2a2a" strokeWidth="0.6" />
        <path d="M190 255 L156 335 L150 310" fill="#1e1e1e" stroke="#2a2a2a" strokeWidth="0.6" />

        {/* Shirt */}
        <path d="M144 335 L150 310 L156 335 L156 440 L144 440 Z" fill="#1a1a1a" />

        {/* Collar */}
        <path d="M125 252 L150 268 L175 252" fill="none" stroke="#444" strokeWidth="1" />
        <path d="M125 252 L138 260 L144 266 L150 268" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="0.4" />
        <path d="M175 252 L162 260 L156 266 L150 268" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="0.4" />

        {/* Tie */}
        <path d="M147 268 L150 262 L153 268 L155 370 L150 380 L145 370 Z" fill="url(#p-tie)" filter="url(#p-glow)" opacity="0.9">
          <animate attributeName="opacity" values="0.85;1;0.85" dur="2.5s" repeatCount="indefinite" />
        </path>
        <path d="M147 268 L150 262 L153 268 L152 272 L148 272 Z" fill="#4dff2a" />
        {/* Tie stripes */}
        <line x1="148.5" y1="295" x2="151.5" y2="295" stroke="#2bcc0f" strokeWidth="0.4" opacity="0.3" />
        <line x1="148" y1="320" x2="152" y2="320" stroke="#2bcc0f" strokeWidth="0.4" opacity="0.3" />
        <line x1="147.5" y1="345" x2="152.5" y2="345" stroke="#2bcc0f" strokeWidth="0.4" opacity="0.3" />
      </g>

      {/* === NECK === */}
      <path d="M137 238 Q137 234 140 234 L160 234 Q163 234 163 238 L163 255 Q163 258 160 258 L140 258 Q137 258 137 255 Z" fill="#2a2a2a" stroke="#333" strokeWidth="0.4" />
      <ellipse cx="150" cy="245" rx="12" ry="2.5" fill="none" stroke="#39ff14" strokeWidth="0.3" opacity="0.15" />

      {/* === HEAD === */}
      <g>
        <path
          d="M100 118 Q100 55 150 44 Q200 55 200 118 L200 170 Q200 188 190 196 L180 204 Q168 210 150 210 Q132 210 120 204 L110 196 Q100 188 100 170 Z"
          fill="url(#p-hd)"
          stroke="#3a3a3a"
          strokeWidth="1"
        />
        {/* Head highlight */}
        <path d="M106 112 Q106 60 150 50 Q194 60 194 112" fill="rgba(255,255,255,0.04)" />
        {/* Panel lines */}
        <path d="M115 82 Q150 78 185 82" stroke="#2a2a2a" strokeWidth="0.5" fill="none" opacity="0.5" />
        <path d="M112 92 L188 92" stroke="#2a2a2a" strokeWidth="0.3" fill="none" opacity="0.3" />
        {/* Side grooves */}
        <path d="M103 105 L103 175" stroke="#2a2a2a" strokeWidth="0.4" opacity="0.3" />
        <path d="M197 105 L197 175" stroke="#2a2a2a" strokeWidth="0.4" opacity="0.3" />

        {/* Cheek vents */}
        <g opacity="0.2">
          <line x1="105" y1="160" x2="112" y2="160" stroke="#39ff14" strokeWidth="0.4" />
          <line x1="105" y1="163" x2="111" y2="163" stroke="#39ff14" strokeWidth="0.4" />
          <line x1="105" y1="166" x2="110" y2="166" stroke="#39ff14" strokeWidth="0.4" />
          <line x1="195" y1="160" x2="188" y2="160" stroke="#39ff14" strokeWidth="0.4" />
          <line x1="195" y1="163" x2="189" y2="163" stroke="#39ff14" strokeWidth="0.4" />
          <line x1="195" y1="166" x2="190" y2="166" stroke="#39ff14" strokeWidth="0.4" />
        </g>

        {/* Chin */}
        <path d="M135 200 Q150 208 165 200" stroke="#2a2a2a" strokeWidth="0.4" fill="none" opacity="0.3" />
      </g>

      {/* === VISOR === */}
      <g>
        <path d="M108 115 Q108 103 150 99 Q192 103 192 115 L192 148 Q192 160 150 163 Q108 160 108 148 Z" fill="url(#p-visor)" stroke="#39ff14" strokeWidth="0.8" opacity="0.55" />
        {/* Inner border */}
        <path d="M112 117 Q112 106 150 103 Q188 106 188 117 L188 146 Q188 157 150 160 Q112 157 112 146 Z" fill="none" stroke="#39ff14" strokeWidth="0.2" opacity="0.12" />
        {/* Scanlines */}
        <g clipPath="url(#p-visor-clip)" opacity="0.04">
          {Array.from({ length: 18 }, (_, i) => (
            <line key={i} x1="105" y1={100 + i * 3.5} x2="195" y2={100 + i * 3.5} stroke="#39ff14" strokeWidth="0.6" />
          ))}
        </g>
        {/* Top reflection */}
        <path d="M114 117 Q114 108 150 105 Q186 108 186 117 L186 126 Q150 122 114 126 Z" fill="rgba(255,255,255,0.03)" />

        {/* Left eye */}
        <g filter="url(#p-eye)">
          <ellipse cx="133" cy="132" rx="16" ry="11" fill="#39ff14" opacity="0.05">
            <animate attributeName="opacity" values="0.05;0.1;0.05" dur="3s" repeatCount="indefinite" />
          </ellipse>
          <path d="M119 132 Q123 122 133 120 Q143 122 147 132 Q143 141 133 143 Q123 141 119 132 Z" fill="#39ff14" opacity="0.85">
            <animate attributeName="opacity" values="0.85;0.55;0.85" dur="3s" repeatCount="indefinite" />
          </path>
          <ellipse cx="133" cy="131.5" rx="5.5" ry="5" fill="#7fff5a" opacity="0.5" />
          <ellipse cx="133" cy="131.5" rx="3" ry="3.5" fill="#fff" opacity="0.95" />
          <circle cx="129" cy="129" r="1.5" fill="#fff" opacity="0.45" />
        </g>

        {/* Right eye */}
        <g filter="url(#p-eye)">
          <ellipse cx="167" cy="132" rx="16" ry="11" fill="#39ff14" opacity="0.05">
            <animate attributeName="opacity" values="0.05;0.1;0.05" dur="3s" repeatCount="indefinite" />
          </ellipse>
          <path d="M153 132 Q157 122 167 120 Q177 122 181 132 Q177 141 167 143 Q157 141 153 132 Z" fill="#39ff14" opacity="0.85">
            <animate attributeName="opacity" values="0.85;0.55;0.85" dur="3s" repeatCount="indefinite" />
          </path>
          <ellipse cx="167" cy="131.5" rx="5.5" ry="5" fill="#7fff5a" opacity="0.5" />
          <ellipse cx="167" cy="131.5" rx="3" ry="3.5" fill="#fff" opacity="0.95" />
          <circle cx="163" cy="129" r="1.5" fill="#fff" opacity="0.45" />
        </g>

        {/* Nose bridge */}
        <path d="M144 134 Q150 138 156 134" stroke="#1a3a1a" strokeWidth="0.4" fill="none" opacity="0.25" />
      </g>

      {/* === SMIRK === */}
      <path d="M133 175 Q140 179 150 177 Q160 181 168 175 Q170 173 172 170" fill="none" stroke="#39ff14" strokeWidth="1.4" strokeLinecap="round" opacity="0.4" filter="url(#p-soft)" />

      {/* === EARPIECE RIGHT === */}
      <g>
        <path d="M198 115 Q206 115 208 120 L210 145 Q210 150 205 150 L202 150 Q198 150 198 145 Z" fill="#1a1a1a" stroke="#333" strokeWidth="0.5" />
        <rect x="200" y="122" width="7" height="5" rx="1" fill="#39ff14" opacity="0.35">
          <animate attributeName="opacity" values="0.35;0.7;0.35" dur="1.5s" repeatCount="indefinite" />
        </rect>
        <rect x="200.5" y="133" width="6" height="2" rx="0.5" fill="#00e5ff" opacity="0.2">
          <animate attributeName="opacity" values="0.2;0.45;0.2" dur="2s" repeatCount="indefinite" />
        </rect>
        {/* Boom mic */}
        <path d="M205 150 Q208 160 204 170 Q200 176 197 178" stroke="#2a2a2a" strokeWidth="1.2" fill="none" />
        <circle cx="196" cy="179" r="3" fill="#1a1a1a" stroke="#39ff14" strokeWidth="0.4" opacity="0.45" />
        <circle cx="196" cy="179" r="1.2" fill="#39ff14" opacity="0.3">
          <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* === EARPIECE LEFT === */}
      <g>
        <path d="M102 118 Q96 118 94 122 L92 140 Q92 144 96 144 L98 144 Q102 144 102 140 Z" fill="#1a1a1a" stroke="#333" strokeWidth="0.4" />
        <rect x="94.5" y="126" width="5" height="3.5" rx="0.8" fill="#00e5ff" opacity="0.18">
          <animate attributeName="opacity" values="0.18;0.35;0.18" dur="1.8s" repeatCount="indefinite" />
        </rect>
      </g>

      {/* === ANTENNA === */}
      <g>
        <line x1="150" y1="44" x2="150" y2="18" stroke="#333" strokeWidth="1.5" />
        <line x1="150" y1="44" x2="150" y2="18" stroke="#39ff14" strokeWidth="0.2" opacity="0.25" />
        <ellipse cx="150" cy="44" rx="5" ry="1.8" fill="#2a2a2a" stroke="#333" strokeWidth="0.4" />
        <circle cx="150" cy="14" r="5" fill="#111" stroke="#39ff14" strokeWidth="0.8" filter="url(#p-glow)">
          <animate attributeName="r" values="5;6;5" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="150" cy="14" r="2.5" fill="#39ff14" opacity="0.85">
          <animate attributeName="opacity" values="0.85;0.3;0.85" dur="1s" repeatCount="indefinite" />
        </circle>
        {/* Signal rings */}
        <circle cx="150" cy="14" r="8" fill="none" stroke="#39ff14" strokeWidth="0.4" opacity="0">
          <animate attributeName="r" values="7;16" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.35;0" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="150" cy="14" r="8" fill="none" stroke="#39ff14" strokeWidth="0.4" opacity="0">
          <animate attributeName="r" values="7;16" dur="2s" begin="1s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.35;0" dur="2s" begin="1s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* === HUD: Signal bars top-right === */}
      <g transform="translate(245, 42)" opacity="0.2">
        <text x="0" y="0" fill="#00e5ff" fontSize="3.5" fontFamily="monospace">SIG</text>
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={i} x={i * 4.5} y={4} width="3" height={2.5 + i * 1.8} fill="#39ff14" opacity="0.5" rx="0.3">
            <animate attributeName="opacity" values="0.5;0.15;0.5" dur={`${1.2 + i * 0.2}s`} repeatCount="indefinite" />
          </rect>
        ))}
      </g>
    </svg>
  );
}
