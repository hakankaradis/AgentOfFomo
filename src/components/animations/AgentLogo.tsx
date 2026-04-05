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
        <filter id="lg" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="lhd" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#333" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
      </defs>

      {/* Head */}
      <path
        d="M24 42 Q24 14 50 8 Q76 14 76 42 L76 58 Q76 68 68 72 L62 75 Q56 78 50 78 Q44 78 38 75 L32 72 Q24 68 24 58 Z"
        fill="url(#lhd)"
        stroke="#3a3a3a"
        strokeWidth="0.8"
      />

      {/* Visor */}
      <path
        d="M31 35 Q31 27 50 24 Q69 27 69 35 L69 50 Q69 57 50 60 Q31 57 31 50 Z"
        fill="#0d1f0d"
        stroke="#39ff14"
        strokeWidth="0.5"
        opacity="0.5"
      />

      {/* Left eye */}
      <path d="M37 44 Q39 37 45 36 Q51 37 53 44 Q51 50 45 51 Q39 50 37 44 Z" fill="#39ff14" opacity="0.85" filter="url(#lg)">
        <animate attributeName="opacity" values="0.85;0.5;0.85" dur="3s" repeatCount="indefinite" />
      </path>
      <ellipse cx="45" cy="43.5" rx="2.5" ry="3" fill="#fff" opacity="0.95" />
      <circle cx="43" cy="42" r="1.2" fill="#fff" opacity="0.4" />

      {/* Right eye */}
      <path d="M47 44 Q49 37 55 36 Q61 37 63 44 Q61 50 55 51 Q49 50 47 44 Z" fill="#39ff14" opacity="0.85" filter="url(#lg)">
        <animate attributeName="opacity" values="0.85;0.5;0.85" dur="3s" repeatCount="indefinite" />
      </path>
      <ellipse cx="55" cy="43.5" rx="2.5" ry="3" fill="#fff" opacity="0.95" />
      <circle cx="53" cy="42" r="1.2" fill="#fff" opacity="0.4" />

      {/* Smirk */}
      <path d="M43 62 Q48 65 53 63 Q57 66 60 63 Q62 61 63 59" fill="none" stroke="#39ff14" strokeWidth="0.8" strokeLinecap="round" opacity="0.35" />

      {/* Tie */}
      <path d="M48.5 78 L50 75 L51.5 78 L52 92 L50 94 L48 92 Z" fill="#39ff14" opacity="0.8" filter="url(#lg)" />

      {/* Earpiece */}
      <rect x="74" y="38" width="5" height="10" rx="1.5" fill="#1a1a1a" stroke="#333" strokeWidth="0.4" />
      <rect x="75" y="40" width="3" height="2" rx="0.5" fill="#39ff14" opacity="0.4">
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="1.5s" repeatCount="indefinite" />
      </rect>

      {/* Antenna */}
      <line x1="50" y1="8" x2="50" y2="0" stroke="#333" strokeWidth="1" />
      <circle cx="50" cy="-1" r="2.5" fill="#111" stroke="#39ff14" strokeWidth="0.6" filter="url(#lg)" />
      <circle cx="50" cy="-1" r="1.2" fill="#39ff14" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
