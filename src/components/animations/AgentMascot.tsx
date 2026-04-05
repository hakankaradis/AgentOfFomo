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
      viewBox="0 0 400 400"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Neon green glow */}
        <filter id="glow-green" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Stronger glow for eyes */}
        <filter id="glow-eyes" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Cyan glow */}
        <filter id="glow-cyan" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Head gradient */}
        <linearGradient id="head-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>

        {/* Suit gradient */}
        <linearGradient id="suit-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0d0d0d" />
        </linearGradient>

        {/* Visor gradient */}
        <linearGradient id="visor-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#111" />
          <stop offset="50%" stopColor="#0a1a0a" />
          <stop offset="100%" stopColor="#111" />
        </linearGradient>

        {/* Screen reflection */}
        <linearGradient id="screen-reflect" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.06)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>

      {/* === BODY / SUIT === */}
      <g>
        {/* Shoulders */}
        <path
          d="M140 290 Q140 260 160 250 L240 250 Q260 260 260 290 L260 360 Q260 380 240 380 L160 380 Q140 380 140 360 Z"
          fill="url(#suit-grad)"
          stroke="#333"
          strokeWidth="1"
        />

        {/* Suit lapels */}
        <path
          d="M160 250 L195 310 L200 290 L205 310 L240 250"
          fill="none"
          stroke="#333"
          strokeWidth="1.5"
        />

        {/* Left lapel fill */}
        <path
          d="M160 250 L195 310 L200 290 L200 250 Z"
          fill="#1e1e1e"
        />
        {/* Right lapel fill */}
        <path
          d="M240 250 L205 310 L200 290 L200 250 Z"
          fill="#1e1e1e"
        />

        {/* Tie */}
        <path
          d="M197 260 L200 255 L203 260 L205 330 L200 340 L195 330 Z"
          fill="#39ff14"
          filter="url(#glow-green)"
          opacity="0.9"
        >
          {animated && (
            <animate
              attributeName="opacity"
              values="0.9;1;0.9"
              dur="2s"
              repeatCount="indefinite"
            />
          )}
        </path>

        {/* Tie knot */}
        <ellipse cx="200" cy="258" rx="5" ry="3" fill="#2bcc0f" />

        {/* Shirt collar */}
        <path
          d="M185 248 L200 260 L215 248"
          fill="none"
          stroke="#444"
          strokeWidth="1"
        />
        <line x1="185" y1="248" x2="190" y2="255" stroke="#333" strokeWidth="0.5" />
        <line x1="215" y1="248" x2="210" y2="255" stroke="#333" strokeWidth="0.5" />
      </g>

      {/* === NECK === */}
      <rect x="188" y="235" width="24" height="20" rx="4" fill="#2a2a2a" stroke="#333" strokeWidth="0.5" />

      {/* === HEAD === */}
      <g>
        {/* Head shape — slightly angular robot head */}
        <path
          d="M145 140 Q145 80 200 70 Q255 80 255 140 L255 200 Q255 240 200 245 Q145 240 145 200 Z"
          fill="url(#head-grad)"
          stroke="#3a3a3a"
          strokeWidth="1.5"
        />

        {/* Head highlight edge */}
        <path
          d="M150 140 Q150 85 200 76 Q250 85 250 140"
          fill="none"
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="2"
        />

        {/* Forehead panel line */}
        <path
          d="M165 110 L235 110"
          stroke="#333"
          strokeWidth="0.5"
          opacity="0.5"
        />

        {/* Side panels */}
        <path d="M148 130 L148 190" stroke="#333" strokeWidth="0.5" opacity="0.3" />
        <path d="M252 130 L252 190" stroke="#333" strokeWidth="0.5" opacity="0.3" />
      </g>

      {/* === VISOR / EYE AREA === */}
      <g>
        {/* Visor background */}
        <path
          d="M160 135 Q160 125 200 122 Q240 125 240 135 L240 170 Q240 180 200 183 Q160 180 160 170 Z"
          fill="url(#visor-grad)"
          stroke="#39ff14"
          strokeWidth="0.8"
          opacity="0.6"
        />

        {/* Visor reflection */}
        <path
          d="M165 135 Q165 128 200 126 Q235 128 235 135 L235 148"
          fill="url(#screen-reflect)"
        />

        {/* Left eye */}
        <g filter="url(#glow-eyes)">
          <ellipse cx="180" cy="152" rx="14" ry="10" fill="#39ff14" opacity="0.15" />
          <ellipse cx="180" cy="152" rx="10" ry="7" fill="#39ff14" opacity="0.9">
            {animated && (
              <animate
                attributeName="opacity"
                values="0.9;0.6;0.9"
                dur="3s"
                repeatCount="indefinite"
              />
            )}
          </ellipse>
          {/* Pupil */}
          <ellipse cx="180" cy="152" rx="4" ry="4" fill="#fff" opacity="0.9" />
          {/* Eye highlight */}
          <circle cx="176" cy="149" r="2" fill="#fff" opacity="0.4" />
        </g>

        {/* Right eye */}
        <g filter="url(#glow-eyes)">
          <ellipse cx="220" cy="152" rx="14" ry="10" fill="#39ff14" opacity="0.15" />
          <ellipse cx="220" cy="152" rx="10" ry="7" fill="#39ff14" opacity="0.9">
            {animated && (
              <animate
                attributeName="opacity"
                values="0.9;0.6;0.9"
                dur="3s"
                repeatCount="indefinite"
              />
            )}
          </ellipse>
          {/* Pupil */}
          <ellipse cx="220" cy="152" rx="4" ry="4" fill="#fff" opacity="0.9" />
          {/* Eye highlight */}
          <circle cx="216" cy="149" r="2" fill="#fff" opacity="0.4" />
        </g>
      </g>

      {/* === SMIRK === */}
      <path
        d="M185 195 Q193 200 200 198 Q210 202 218 195"
        fill="none"
        stroke="#39ff14"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
        filter="url(#glow-green)"
      />

      {/* === EARPIECE (right side) === */}
      <g>
        <rect x="252" y="140" width="12" height="24" rx="4" fill="#222" stroke="#333" strokeWidth="0.5" />
        <rect x="254" y="144" width="8" height="4" rx="1" fill="#39ff14" opacity="0.4">
          {animated && (
            <animate
              attributeName="opacity"
              values="0.4;0.8;0.4"
              dur="1.5s"
              repeatCount="indefinite"
            />
          )}
        </rect>
        {/* Earpiece arm */}
        <path d="M258 140 Q260 130 255 125" stroke="#333" strokeWidth="1.5" fill="none" />
        {/* Mic */}
        <circle cx="255" cy="123" r="3" fill="#222" stroke="#39ff14" strokeWidth="0.5" opacity="0.6" />
      </g>

      {/* === ANTENNA / SENSOR on top === */}
      <g>
        <line x1="200" y1="70" x2="200" y2="48" stroke="#333" strokeWidth="1.5" />
        <circle cx="200" cy="44" r="4" fill="#111" stroke="#39ff14" strokeWidth="1" filter="url(#glow-green)">
          {animated && (
            <animate
              attributeName="r"
              values="4;5;4"
              dur="2s"
              repeatCount="indefinite"
            />
          )}
        </circle>
        <circle cx="200" cy="44" r="2" fill="#39ff14" opacity="0.8">
          {animated && (
            <animate
              attributeName="opacity"
              values="0.8;0.3;0.8"
              dur="1s"
              repeatCount="indefinite"
            />
          )}
        </circle>
      </g>

      {/* === HUD ELEMENTS floating around === */}
      {animated && (
        <g opacity="0.4">
          {/* Left mini chart */}
          <g transform="translate(60, 100)">
            <rect x="0" y="0" width="50" height="30" rx="3" fill="none" stroke="#39ff14" strokeWidth="0.5" opacity="0.3" />
            <polyline
              points="5,25 12,20 18,22 25,12 32,15 38,8 45,10"
              fill="none"
              stroke="#39ff14"
              strokeWidth="1"
            >
              <animate
                attributeName="opacity"
                values="0.6;0.2;0.6"
                dur="4s"
                repeatCount="indefinite"
              />
            </polyline>
          </g>

          {/* Right warning badge */}
          <g transform="translate(290, 90)">
            <rect x="0" y="0" width="55" height="18" rx="2" fill="rgba(255,59,59,0.1)" stroke="#ff3b3b" strokeWidth="0.5" />
            <text x="27" y="13" textAnchor="middle" fill="#ff3b3b" fontSize="7" fontFamily="monospace">
              BUY ALERT
            </text>
            <animate
              attributeName="opacity"
              values="0.5;0.1;0.5"
              dur="2s"
              repeatCount="indefinite"
            />
          </g>

          {/* Bottom data readout */}
          <g transform="translate(80, 320)">
            <text fill="#00e5ff" fontSize="7" fontFamily="monospace" opacity="0.4">
              SIG: 99.7% | RISK: NULL | ENTRY: NOW
              <animate
                attributeName="opacity"
                values="0.4;0.15;0.4"
                dur="3s"
                repeatCount="indefinite"
              />
            </text>
          </g>

          {/* Top-right signal bars */}
          <g transform="translate(300, 130)">
            {[0, 1, 2, 3, 4].map((i) => (
              <rect
                key={i}
                x={i * 6}
                y={20 - (i + 1) * 4}
                width="4"
                height={(i + 1) * 4}
                fill="#39ff14"
                opacity="0.5"
                rx="0.5"
              >
                <animate
                  attributeName="opacity"
                  values="0.5;0.2;0.5"
                  dur={`${1.5 + i * 0.3}s`}
                  repeatCount="indefinite"
                />
              </rect>
            ))}
          </g>
        </g>
      )}
    </svg>
  );
}
