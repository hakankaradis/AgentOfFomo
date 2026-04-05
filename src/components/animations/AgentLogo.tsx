"use client";

interface AgentLogoProps {
  size?: number;
  className?: string;
}

export default function AgentLogo({ size = 32, className = "" }: AgentLogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="logo-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="logo-head" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
      </defs>

      {/* Head */}
      <path
        d="M25 40 Q25 15 50 10 Q75 15 75 40 L75 60 Q75 78 50 80 Q25 78 25 60 Z"
        fill="url(#logo-head)"
        stroke="#3a3a3a"
        strokeWidth="1"
      />

      {/* Visor */}
      <path
        d="M32 35 Q32 30 50 28 Q68 30 68 35 L68 50 Q68 55 50 57 Q32 55 32 50 Z"
        fill="#0a1a0a"
        stroke="#39ff14"
        strokeWidth="0.5"
        opacity="0.5"
      />

      {/* Eyes */}
      <ellipse cx="42" cy="43" rx="6" ry="5" fill="#39ff14" opacity="0.9" filter="url(#logo-glow)">
        <animate attributeName="opacity" values="0.9;0.5;0.9" dur="3s" repeatCount="indefinite" />
      </ellipse>
      <ellipse cx="42" cy="43" rx="2.5" ry="2.5" fill="#fff" opacity="0.9" />

      <ellipse cx="58" cy="43" rx="6" ry="5" fill="#39ff14" opacity="0.9" filter="url(#logo-glow)">
        <animate attributeName="opacity" values="0.9;0.5;0.9" dur="3s" repeatCount="indefinite" />
      </ellipse>
      <ellipse cx="58" cy="43" rx="2.5" ry="2.5" fill="#fff" opacity="0.9" />

      {/* Smirk */}
      <path d="M43 62 Q48 65 53 63 Q57 66 62 62" fill="none" stroke="#39ff14" strokeWidth="1" strokeLinecap="round" opacity="0.4" />

      {/* Tie hint */}
      <path d="M48 80 L50 76 L52 80 L51 90 L50 92 L49 90 Z" fill="#39ff14" opacity="0.7" />

      {/* Antenna */}
      <line x1="50" y1="10" x2="50" y2="3" stroke="#333" strokeWidth="1" />
      <circle cx="50" cy="2" r="2" fill="#39ff14" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
