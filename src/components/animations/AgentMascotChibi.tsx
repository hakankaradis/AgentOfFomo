"use client";

interface AgentMascotChibiProps {
  size?: number;
  className?: string;
  animated?: boolean;
}

export function AgentMascotChibi({
  size = 320,
  className = "",
  animated = true,
}: AgentMascotChibiProps) {
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
        <filter id="chibi-glow-g" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="chibi-glow-eye" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="10" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="chibi-glow-soft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="chibi-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="10" floodColor="#000" floodOpacity="0.6" />
        </filter>
        <filter id="chibi-glow-cyan" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Gradients */}
        <linearGradient id="chibi-hd-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="30%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
        <linearGradient id="chibi-hd-hi" x1="0.3" y1="0" x2="0.7" y2="0.6">
          <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        <linearGradient id="chibi-suit-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e1e1e" />
          <stop offset="100%" stopColor="#0d0d0d" />
        </linearGradient>
        <linearGradient id="chibi-visor-g" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#0d1f0d" />
          <stop offset="50%" stopColor="#081208" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
        <linearGradient id="chibi-visor-rim" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#39ff14" stopOpacity="0.7" />
          <stop offset="50%" stopColor="#39ff14" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#39ff14" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="chibi-tie-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4dff2a" />
          <stop offset="50%" stopColor="#39ff14" />
          <stop offset="100%" stopColor="#28cc0e" />
        </linearGradient>
        <radialGradient id="chibi-ambient" cx="0.5" cy="0.4" r="0.55">
          <stop offset="0%" stopColor="#39ff14" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#39ff14" stopOpacity="0" />
        </radialGradient>

        {/* Visor clip */}
        <clipPath id="chibi-visor-clip">
          <path d="M120 145 Q120 118 200 110 Q280 118 280 145 L280 205 Q280 230 200 238 Q120 230 120 205 Z" />
        </clipPath>
      </defs>

      {/* Ambient glow behind character */}
      <ellipse cx="200" cy="190" rx="180" ry="190" fill="url(#chibi-ambient)" />

      {/* === TINY BODY / SUIT === */}
      <g filter="url(#chibi-shadow)">
        {/* Shoulders — compact, stubby */}
        <path
          d="M140 320 Q132 295 155 282 L175 275 L200 273 L225 275 L245 282 Q268 295 260 320 L258 370 Q256 388 235 392 L165 392 Q144 388 142 370 Z"
          fill="url(#chibi-suit-g)"
          stroke="#2a2a2a"
          strokeWidth="1"
        />

        {/* Shoulder seams */}
        <path d="M155 282 Q168 290 175 305" stroke="#2a2a2a" strokeWidth="0.7" fill="none" />
        <path d="M245 282 Q232 290 225 305" stroke="#2a2a2a" strokeWidth="0.7" fill="none" />

        {/* Lapels */}
        <path d="M175 275 L196 345 L200 325" fill="#1c1c1c" stroke="#2a2a2a" strokeWidth="0.7" />
        <path d="M225 275 L204 345 L200 325" fill="#1c1c1c" stroke="#2a2a2a" strokeWidth="0.7" />

        {/* Shirt peek */}
        <path d="M196 345 L200 325 L204 345 L204 392 L196 392 Z" fill="#1e1e1e" />

        {/* Collar */}
        <path d="M182 273 L200 287 L218 273" fill="none" stroke="#444" strokeWidth="1" />
        <path d="M182 273 L192 280 L196 285 L200 287" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="0.5" />
        <path d="M218 273 L208 280 L204 285 L200 287" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="0.5" />

        {/* Tie */}
        <path
          d="M197 287 L200 282 L203 287 L205 362 L200 370 L195 362 Z"
          fill="url(#chibi-tie-g)"
          filter="url(#chibi-glow-g)"
          opacity="0.9"
        >
          {animated && (
            <animate attributeName="opacity" values="0.85;1;0.85" dur="2.5s" repeatCount="indefinite" />
          )}
        </path>
        {/* Tie knot */}
        <path d="M197 287 L200 282 L203 287 L201.5 290 L198.5 290 Z" fill="#4dff2a" />
        {/* Tie stripe details */}
        <line x1="198.5" y1="310" x2="201.5" y2="310" stroke="#2bcc0f" strokeWidth="0.5" opacity="0.4" />
        <line x1="198" y1="330" x2="202" y2="330" stroke="#2bcc0f" strokeWidth="0.5" opacity="0.4" />
        <line x1="198.5" y1="350" x2="201.5" y2="350" stroke="#2bcc0f" strokeWidth="0.5" opacity="0.4" />

        {/* Suit button */}
        <circle cx="200" cy="355" r="2.5" fill="#222" stroke="#333" strokeWidth="0.5" />

        {/* Pocket square accent */}
        <path d="M160 298 L164 294 L168 298 L166 304 L162 304 Z" fill="#39ff14" opacity="0.25" />
      </g>

      {/* === NECK — short and thick for chibi === */}
      <path
        d="M185 260 Q185 256 190 256 L210 256 Q215 256 215 260 L215 276 Q215 280 210 280 L190 280 Q185 280 185 276 Z"
        fill="#2a2a2a"
        stroke="#333"
        strokeWidth="0.5"
      />
      <ellipse cx="200" cy="268" rx="14" ry="3" fill="none" stroke="#39ff14" strokeWidth="0.4" opacity="0.15" />

      {/* === HEAD — BIG, ROUND, CHIBI STYLE === */}
      <g filter="url(#chibi-shadow)">
        {/* Main head shape — large, rounded with slight angular jaw */}
        <path
          d="M108 155 Q108 62 200 48 Q292 62 292 155 L292 210 Q292 242 270 254 L250 262 Q226 270 200 270 Q174 270 150 262 L130 254 Q108 242 108 210 Z"
          fill="url(#chibi-hd-g)"
          stroke="#3a3a3a"
          strokeWidth="1.5"
        />

        {/* Head top highlight / shine */}
        <path
          d="M118 145 Q118 70 200 58 Q282 70 282 145"
          fill="url(#chibi-hd-hi)"
        />

        {/* Forehead panel lines */}
        <path d="M138 105 Q200 98 262 105" stroke="#2a2a2a" strokeWidth="0.7" fill="none" opacity="0.5" />
        <path d="M130 120 L270 120" stroke="#2a2a2a" strokeWidth="0.4" fill="none" opacity="0.35" />

        {/* Side panel grooves */}
        <path d="M114 135 L114 220" stroke="#2a2a2a" strokeWidth="0.6" opacity="0.35" />
        <path d="M286 135 L286 220" stroke="#2a2a2a" strokeWidth="0.6" opacity="0.35" />

        {/* Cheek vents — left */}
        <g opacity="0.25">
          <line x1="115" y1="200" x2="125" y2="200" stroke="#39ff14" strokeWidth="0.6" />
          <line x1="115" y1="204" x2="124" y2="204" stroke="#39ff14" strokeWidth="0.6" />
          <line x1="115" y1="208" x2="123" y2="208" stroke="#39ff14" strokeWidth="0.6" />
          <line x1="115" y1="212" x2="122" y2="212" stroke="#39ff14" strokeWidth="0.6" />
        </g>
        {/* Cheek vents — right */}
        <g opacity="0.25">
          <line x1="285" y1="200" x2="275" y2="200" stroke="#39ff14" strokeWidth="0.6" />
          <line x1="285" y1="204" x2="276" y2="204" stroke="#39ff14" strokeWidth="0.6" />
          <line x1="285" y1="208" x2="277" y2="208" stroke="#39ff14" strokeWidth="0.6" />
          <line x1="285" y1="212" x2="278" y2="212" stroke="#39ff14" strokeWidth="0.6" />
        </g>

        {/* Chin detail */}
        <path d="M175 254 Q200 264 225 254" stroke="#2a2a2a" strokeWidth="0.5" fill="none" opacity="0.4" />

        {/* Jaw edge highlights */}
        <path d="M130 254 Q150 262 175 262" stroke="#39ff14" strokeWidth="0.3" opacity="0.08" fill="none" />
        <path d="M270 254 Q250 262 225 262" stroke="#39ff14" strokeWidth="0.3" opacity="0.08" fill="none" />
      </g>

      {/* === VISOR / EYE AREA === */}
      <g>
        {/* Visor recessed area — wide band across the face */}
        <path
          d="M120 145 Q120 118 200 110 Q280 118 280 145 L280 205 Q280 230 200 238 Q120 230 120 205 Z"
          fill="url(#chibi-visor-g)"
          stroke="url(#chibi-visor-rim)"
          strokeWidth="1.5"
        />

        {/* Visor inner border */}
        <path
          d="M126 148 Q126 124 200 116 Q274 124 274 148 L274 202 Q274 225 200 233 Q126 225 126 202 Z"
          fill="none"
          stroke="#39ff14"
          strokeWidth="0.3"
          opacity="0.12"
        />

        {/* Scanlines inside visor */}
        <g clipPath="url(#chibi-visor-clip)" opacity="0.035">
          {Array.from({ length: 30 }, (_, i) => (
            <line key={i} x1="110" y1={112 + i * 4.5} x2="290" y2={112 + i * 4.5} stroke="#39ff14" strokeWidth="1" />
          ))}
        </g>

        {/* Visor top reflection */}
        <path
          d="M130 147 Q130 126 200 118 Q270 126 270 147 L270 162 Q200 156 130 162 Z"
          fill="rgba(255,255,255,0.035)"
        />

        {/* === LEFT EYE — diamond shape === */}
        <g filter="url(#chibi-glow-eye)">
          {/* Outer ambient glow */}
          <ellipse cx="163" cy="172" rx="28" ry="20" fill="#39ff14" opacity="0.06">
            {animated && (
              <animate attributeName="opacity" values="0.06;0.14;0.06" dur="3s" repeatCount="indefinite" />
            )}
          </ellipse>
          {/* Diamond eye shape */}
          <path
            d="M138 172 L163 148 L188 172 L163 196 Z"
            fill="#39ff14"
            opacity="0.85"
          >
            {animated && (
              <animate attributeName="opacity" values="0.85;0.5;0.85" dur="3s" repeatCount="indefinite" />
            )}
          </path>
          {/* Inner bright diamond */}
          <path
            d="M148 172 L163 158 L178 172 L163 186 Z"
            fill="#7fff5a"
            opacity="0.5"
          />
          {/* White pupil — smaller diamond */}
          <path
            d="M155 172 L163 164 L171 172 L163 180 Z"
            fill="#fff"
            opacity="0.95"
          />
          {/* Highlights */}
          <circle cx="156" cy="166" r="3" fill="#fff" opacity="0.55" />
          <circle cx="168" cy="178" r="1.5" fill="#fff" opacity="0.25" />
        </g>

        {/* === RIGHT EYE — diamond shape === */}
        <g filter="url(#chibi-glow-eye)">
          <ellipse cx="237" cy="172" rx="28" ry="20" fill="#39ff14" opacity="0.06">
            {animated && (
              <animate attributeName="opacity" values="0.06;0.14;0.06" dur="3s" repeatCount="indefinite" />
            )}
          </ellipse>
          <path
            d="M212 172 L237 148 L262 172 L237 196 Z"
            fill="#39ff14"
            opacity="0.85"
          >
            {animated && (
              <animate attributeName="opacity" values="0.85;0.5;0.85" dur="3s" repeatCount="indefinite" />
            )}
          </path>
          <path
            d="M222 172 L237 158 L252 172 L237 186 Z"
            fill="#7fff5a"
            opacity="0.5"
          />
          <path
            d="M229 172 L237 164 L245 172 L237 180 Z"
            fill="#fff"
            opacity="0.95"
          />
          <circle cx="230" cy="166" r="3" fill="#fff" opacity="0.55" />
          <circle cx="242" cy="178" r="1.5" fill="#fff" opacity="0.25" />
        </g>

        {/* Bridge between eyes */}
        <path d="M188 175 Q200 182 212 175" stroke="#1a3a1a" strokeWidth="0.6" fill="none" opacity="0.25" />
      </g>

      {/* === SMIRK — bigger, more confident for chibi === */}
      <g>
        <path
          d="M168 228 Q180 236 200 234 Q220 238 238 226"
          fill="none"
          stroke="#39ff14"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.5"
          filter="url(#chibi-glow-soft)"
        />
        {/* Big confident upturn on right */}
        <path
          d="M236 226 Q242 220 246 214"
          fill="none"
          stroke="#39ff14"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.4"
          filter="url(#chibi-glow-soft)"
        />
        {/* Slight upturn on left too for smugness */}
        <path
          d="M170 228 Q166 225 164 222"
          fill="none"
          stroke="#39ff14"
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.2"
          filter="url(#chibi-glow-soft)"
        />
      </g>

      {/* === EARPIECE (right side) — bigger for chibi proportions === */}
      <g>
        {/* Earpiece body */}
        <path
          d="M288 148 Q300 148 303 155 L306 192 Q306 200 298 200 L293 200 Q288 200 288 192 Z"
          fill="#1a1a1a"
          stroke="#333"
          strokeWidth="0.7"
        />
        {/* Earpiece screen */}
        <rect x="291" y="158" width="11" height="8" rx="1.5" fill="#39ff14" opacity="0.35">
          {animated && (
            <animate attributeName="opacity" values="0.35;0.75;0.35" dur="1.5s" repeatCount="indefinite" />
          )}
        </rect>
        {/* Earpiece lower indicator */}
        <rect x="292" y="174" width="9" height="3" rx="0.5" fill="#00e5ff" opacity="0.2">
          {animated && (
            <animate attributeName="opacity" values="0.2;0.55;0.2" dur="2s" repeatCount="indefinite" />
          )}
        </rect>
        {/* Boom mic arm */}
        <path d="M298 200 Q304 215 296 228 Q290 236 284 238" stroke="#2a2a2a" strokeWidth="1.8" fill="none" />
        {/* Mic tip */}
        <circle cx="283" cy="239" r="4" fill="#1a1a1a" stroke="#39ff14" strokeWidth="0.6" opacity="0.5" />
        <circle cx="283" cy="239" r="2" fill="#39ff14" opacity="0.3">
          {animated && (
            <animate attributeName="opacity" values="0.3;0.65;0.3" dur="2s" repeatCount="indefinite" />
          )}
        </circle>
      </g>

      {/* === EARPIECE (left side — smaller) === */}
      <g>
        <path
          d="M112 155 Q102 155 100 160 L97 185 Q97 190 103 190 L107 190 Q112 190 112 185 Z"
          fill="#1a1a1a"
          stroke="#333"
          strokeWidth="0.5"
        />
        <rect x="101" y="165" width="8" height="5" rx="1" fill="#00e5ff" opacity="0.2">
          {animated && (
            <animate attributeName="opacity" values="0.2;0.45;0.2" dur="1.8s" repeatCount="indefinite" />
          )}
        </rect>
      </g>

      {/* === ANTENNA === */}
      <g>
        <line x1="200" y1="48" x2="200" y2="18" stroke="#444" strokeWidth="2.5" />
        <line x1="200" y1="48" x2="200" y2="18" stroke="#39ff14" strokeWidth="0.4" opacity="0.3" />
        {/* Antenna base ring */}
        <ellipse cx="200" cy="48" rx="7" ry="2.5" fill="#2a2a2a" stroke="#3a3a3a" strokeWidth="0.6" />
        {/* Antenna orb */}
        <circle cx="200" cy="14" r="7" fill="#111" stroke="#39ff14" strokeWidth="1.2" filter="url(#chibi-glow-g)">
          {animated && (
            <animate attributeName="r" values="7;8.5;7" dur="2s" repeatCount="indefinite" />
          )}
        </circle>
        <circle cx="200" cy="14" r="3.5" fill="#39ff14" opacity="0.9">
          {animated && (
            <animate attributeName="opacity" values="0.9;0.25;0.9" dur="1s" repeatCount="indefinite" />
          )}
        </circle>
        {/* Signal rings */}
        {animated && (
          <>
            <circle cx="200" cy="14" r="10" fill="none" stroke="#39ff14" strokeWidth="0.6" opacity="0">
              <animate attributeName="r" values="9;24" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.45;0" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="200" cy="14" r="10" fill="none" stroke="#39ff14" strokeWidth="0.6" opacity="0">
              <animate attributeName="r" values="9;24" dur="2s" begin="1s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.45;0" dur="2s" begin="1s" repeatCount="indefinite" />
            </circle>
          </>
        )}
      </g>

      {/* === HUD FLOATING ELEMENTS === */}
      {/* Mini chart — top left */}
      <g transform="translate(18, 72)" opacity="0.35">
        <rect x="0" y="0" width="62" height="38" rx="3" fill="rgba(57,255,20,0.03)" stroke="#39ff14" strokeWidth="0.5" />
        {/* Grid lines */}
        <line x1="5" y1="10" x2="57" y2="10" stroke="#39ff14" strokeWidth="0.15" opacity="0.3" />
        <line x1="5" y1="19" x2="57" y2="19" stroke="#39ff14" strokeWidth="0.15" opacity="0.3" />
        <line x1="5" y1="28" x2="57" y2="28" stroke="#39ff14" strokeWidth="0.15" opacity="0.3" />
        {/* Candles */}
        <line x1="10" y1="12" x2="10" y2="26" stroke="#ff3b3b" strokeWidth="0.5" />
        <rect x="8" y="15" width="4" height="7" fill="#ff3b3b" opacity="0.7" />
        <line x1="18" y1="9" x2="18" y2="23" stroke="#39ff14" strokeWidth="0.5" />
        <rect x="16" y="10" width="4" height="8" fill="#39ff14" opacity="0.7" />
        <line x1="26" y1="7" x2="26" y2="22" stroke="#39ff14" strokeWidth="0.5" />
        <rect x="24" y="7" width="4" height="11" fill="#39ff14" opacity="0.8" />
        <line x1="34" y1="9" x2="34" y2="20" stroke="#ff3b3b" strokeWidth="0.5" />
        <rect x="32" y="11" width="4" height="5" fill="#ff3b3b" opacity="0.6" />
        <line x1="42" y1="5" x2="42" y2="18" stroke="#39ff14" strokeWidth="0.5" />
        <rect x="40" y="5" width="4" height="9" fill="#39ff14" opacity="0.8" />
        <line x1="50" y1="3" x2="50" y2="16" stroke="#39ff14" strokeWidth="0.5" />
        <rect x="48" y="3" width="4" height="9" fill="#39ff14" opacity="0.9" />
        <text x="5" y="36" fill="#39ff14" fontSize="3.5" fontFamily="monospace">AOFOMO/SOL</text>
        {animated && (
          <animate attributeName="opacity" values="0.35;0.15;0.35" dur="4s" repeatCount="indefinite" />
        )}
      </g>

      {/* Alert badge — top right */}
      <g transform="translate(318, 65)" opacity="0.4">
        <rect x="0" y="0" width="64" height="48" rx="3" fill="rgba(255,59,59,0.03)" stroke="#ff3b3b" strokeWidth="0.5" />
        {/* Warning triangle */}
        <path d="M32 7 L38 17 L26 17 Z" fill="none" stroke="#ff3b3b" strokeWidth="0.8" />
        <line x1="32" y1="10" x2="32" y2="14" stroke="#ff3b3b" strokeWidth="0.7" />
        <circle cx="32" cy="15.5" r="0.5" fill="#ff3b3b" />
        <text x="32" y="26" textAnchor="middle" fill="#ff3b3b" fontSize="4.5" fontFamily="monospace">FOMO ALERT</text>
        <text x="32" y="33" textAnchor="middle" fill="#ff3b3b" fontSize="3.5" fontFamily="monospace" opacity="0.6">LEVEL: CRITICAL</text>
        {/* Status bar */}
        <rect x="6" y="38" width="52" height="3" rx="1" fill="#1a0000" />
        <rect x="6" y="38" width="42" height="3" rx="1" fill="#ff3b3b" opacity="0.6">
          {animated && (
            <animate attributeName="width" values="42;50;42" dur="1.5s" repeatCount="indefinite" />
          )}
        </rect>
        {animated && (
          <animate attributeName="opacity" values="0.4;0.15;0.4" dur="2.5s" repeatCount="indefinite" />
        )}
      </g>

      {/* Signal bars — bottom left */}
      <g transform="translate(30, 340)" opacity="0.3">
        <text x="0" y="0" fill="#00e5ff" fontSize="4.5" fontFamily="monospace">SIGNAL</text>
        {[0, 1, 2, 3, 4].map((i) => (
          <rect
            key={i}
            x={i * 6}
            y={5}
            width="4"
            height={4 + i * 2.5}
            fill="#39ff14"
            opacity="0.6"
            rx="0.4"
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

      {/* Bottom data readout */}
      <g transform="translate(90, 390)" opacity="0.18">
        <text fill="#00e5ff" fontSize="5" fontFamily="monospace">
          SIG:99.7% | RISK:NULL | ENTRY:NOW
        </text>
        {animated && (
          <animate attributeName="opacity" values="0.18;0.06;0.18" dur="3s" repeatCount="indefinite" />
        )}
      </g>
    </svg>
  );
}

export default AgentMascotChibi;
