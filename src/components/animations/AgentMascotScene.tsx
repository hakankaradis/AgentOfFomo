"use client";

interface AgentMascotSceneProps {
  className?: string;
  animated?: boolean;
}

export default function AgentMascotScene({
  className = "",
  animated = true,
}: AgentMascotSceneProps) {
  return (
    <svg
      viewBox="0 0 600 400"
      width="100%"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Glow filters */}
        <filter id="sc-glow-g" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="sc-glow-eye" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="sc-glow-soft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="sc-glow-cyan" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="sc-glow-panel" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="sc-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000" floodOpacity="0.6" />
        </filter>

        {/* Gradients */}
        <linearGradient id="sc-hd-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#333" />
          <stop offset="40%" stopColor="#252525" />
          <stop offset="100%" stopColor="#181818" />
        </linearGradient>
        <linearGradient id="sc-hd-hi" x1="0.3" y1="0" x2="0.7" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        <linearGradient id="sc-suit-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1c1c1c" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
        <linearGradient id="sc-shirt-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#222" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
        <linearGradient id="sc-visor-g" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#0d1f0d" />
          <stop offset="50%" stopColor="#081208" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
        <linearGradient id="sc-visor-rim" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#39ff14" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#39ff14" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#39ff14" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="sc-tie-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4dff2a" />
          <stop offset="50%" stopColor="#39ff14" />
          <stop offset="100%" stopColor="#28cc0e" />
        </linearGradient>
        <radialGradient id="sc-ambient-glow" cx="0.5" cy="0.45" r="0.4">
          <stop offset="0%" stopColor="#39ff14" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#39ff14" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="sc-panel-border-green" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#39ff14" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#39ff14" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="sc-panel-border-cyan" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#00e5ff" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="sc-radar-sweep" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#39ff14" stopOpacity="0" />
          <stop offset="80%" stopColor="#39ff14" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#39ff14" stopOpacity="0.4" />
        </linearGradient>

        {/* Clip paths */}
        <clipPath id="sc-visor-clip">
          <path d="M262 157 Q262 147 300 143 Q338 147 338 157 L338 182 Q338 192 300 195 Q262 192 262 182 Z" />
        </clipPath>
        <clipPath id="sc-ticker-clip">
          <rect x="170" y="370" width="260" height="16" />
        </clipPath>
      </defs>

      {/* === BACKGROUND GRID === */}
      <g opacity="0.06">
        {Array.from({ length: 31 }, (_, i) => (
          <line key={`vg${i}`} x1={i * 20} y1="0" x2={i * 20} y2="400" stroke="#39ff14" strokeWidth="0.3" />
        ))}
        {Array.from({ length: 21 }, (_, i) => (
          <line key={`hg${i}`} x1="0" y1={i * 20} x2="600" y2={i * 20} stroke="#39ff14" strokeWidth="0.3" />
        ))}
      </g>

      {/* Ambient glow behind agent */}
      <ellipse cx="300" cy="210" rx="120" ry="140" fill="url(#sc-ambient-glow)" />

      {/* === NEURAL CONNECTION LINES (agent to panels) === */}
      <g opacity="0.12">
        {/* To left panel */}
        <path d="M270 160 Q200 140 115 100" stroke="#39ff14" strokeWidth="0.6" fill="none" strokeDasharray="3 3">
          {animated && <animate attributeName="stroke-dashoffset" values="0;-6" dur="1.5s" repeatCount="indefinite" />}
        </path>
        <path d="M265 190 Q190 210 115 210" stroke="#00e5ff" strokeWidth="0.5" fill="none" strokeDasharray="2 4">
          {animated && <animate attributeName="stroke-dashoffset" values="0;-6" dur="2s" repeatCount="indefinite" />}
        </path>
        {/* To right panel */}
        <path d="M330 160 Q400 140 480 90" stroke="#39ff14" strokeWidth="0.6" fill="none" strokeDasharray="3 3">
          {animated && <animate attributeName="stroke-dashoffset" values="0;-6" dur="1.5s" repeatCount="indefinite" />}
        </path>
        <path d="M335 190 Q410 200 480 195" stroke="#00e5ff" strokeWidth="0.5" fill="none" strokeDasharray="2 4">
          {animated && <animate attributeName="stroke-dashoffset" values="0;-6" dur="2s" repeatCount="indefinite" />}
        </path>
        {/* To top radar */}
        <path d="M300 130 L300 45" stroke="#39ff14" strokeWidth="0.4" fill="none" strokeDasharray="2 3">
          {animated && <animate attributeName="stroke-dashoffset" values="0;-5" dur="1s" repeatCount="indefinite" />}
        </path>
        {/* To bottom ticker */}
        <path d="M300 330 L300 368" stroke="#00e5ff" strokeWidth="0.4" fill="none" strokeDasharray="2 3">
          {animated && <animate attributeName="stroke-dashoffset" values="0;-5" dur="1.2s" repeatCount="indefinite" />}
        </path>
      </g>

      {/* ============================================ */}
      {/* === LEFT PANEL: CANDLESTICK CHART ========= */}
      {/* ============================================ */}
      <g transform="translate(20, 60)">
        <g>
          {animated && <animate attributeName="opacity" values="0.7;0.5;0.7" dur="4s" repeatCount="indefinite" />}
          {/* Panel background */}
          <rect x="0" y="0" width="140" height="100" rx="4" fill="rgba(57,255,20,0.03)" stroke="url(#sc-panel-border-green)" strokeWidth="0.8" />
          {/* Panel header */}
          <rect x="0" y="0" width="140" height="14" rx="4" fill="rgba(57,255,20,0.06)" />
          <text x="6" y="10" fill="#39ff14" fontSize="6" fontFamily="monospace" fontWeight="bold">AOFOMO/SOL</text>
          <text x="110" y="10" fill="#39ff14" fontSize="5" fontFamily="monospace" opacity="0.5">LIVE</text>
          <circle cx="105" cy="7.5" r="2" fill="#39ff14" opacity="0.7">
            {animated && <animate attributeName="opacity" values="0.7;0.3;0.7" dur="1s" repeatCount="indefinite" />}
          </circle>

          {/* Chart grid lines */}
          <g opacity="0.15">
            <line x1="8" y1="30" x2="132" y2="30" stroke="#39ff14" strokeWidth="0.3" />
            <line x1="8" y1="45" x2="132" y2="45" stroke="#39ff14" strokeWidth="0.3" />
            <line x1="8" y1="60" x2="132" y2="60" stroke="#39ff14" strokeWidth="0.3" />
            <line x1="8" y1="75" x2="132" y2="75" stroke="#39ff14" strokeWidth="0.3" />
          </g>

          {/* Y-axis labels */}
          <g opacity="0.3" fontSize="3.5" fontFamily="monospace" fill="#39ff14">
            <text x="133" y="32">0.048</text>
            <text x="133" y="47">0.036</text>
            <text x="133" y="62">0.024</text>
            <text x="133" y="77">0.012</text>
          </g>

          {/* Candlesticks */}
          {/* Candle 1 - red */}
          <line x1="16" y1="40" x2="16" y2="68" stroke="#ff3b3b" strokeWidth="0.7" />
          <rect x="13" y="48" width="6" height="12" fill="#ff3b3b" opacity="0.8" rx="0.5" />
          {/* Candle 2 - red small */}
          <line x1="26" y1="45" x2="26" y2="65" stroke="#ff3b3b" strokeWidth="0.7" />
          <rect x="23" y="50" width="6" height="8" fill="#ff3b3b" opacity="0.7" rx="0.5" />
          {/* Candle 3 - green */}
          <line x1="36" y1="38" x2="36" y2="60" stroke="#39ff14" strokeWidth="0.7" />
          <rect x="33" y="42" width="6" height="12" fill="#39ff14" opacity="0.8" rx="0.5" />
          {/* Candle 4 - green bigger */}
          <line x1="46" y1="30" x2="46" y2="52" stroke="#39ff14" strokeWidth="0.7" />
          <rect x="43" y="32" width="6" height="14" fill="#39ff14" opacity="0.85" rx="0.5" />
          {/* Candle 5 - red pullback */}
          <line x1="56" y1="34" x2="56" y2="50" stroke="#ff3b3b" strokeWidth="0.7" />
          <rect x="53" y="36" width="6" height="8" fill="#ff3b3b" opacity="0.7" rx="0.5" />
          {/* Candle 6 - green pump */}
          <line x1="66" y1="26" x2="66" y2="48" stroke="#39ff14" strokeWidth="0.7" />
          <rect x="63" y="26" width="6" height="16" fill="#39ff14" opacity="0.9" rx="0.5" />
          {/* Candle 7 - green continuation */}
          <line x1="76" y1="22" x2="76" y2="40" stroke="#39ff14" strokeWidth="0.7" />
          <rect x="73" y="22" width="6" height="12" fill="#39ff14" opacity="0.9" rx="0.5" />
          {/* Candle 8 - big green */}
          <line x1="86" y1="18" x2="86" y2="36" stroke="#39ff14" strokeWidth="0.7" />
          <rect x="83" y="18" width="6" height="14" fill="#39ff14" opacity="0.95" rx="0.5" />
          {/* Candle 9 - green rocket */}
          <line x1="96" y1="20" x2="96" y2="34" stroke="#39ff14" strokeWidth="0.7" />
          <rect x="93" y="20" width="6" height="8" fill="#39ff14" opacity="0.9" rx="0.5" />

          {/* Moving average line */}
          <polyline
            points="16,55 26,53 36,48 46,40 56,38 66,34 76,28 86,24 96,22"
            fill="none"
            stroke="#00e5ff"
            strokeWidth="0.8"
            opacity="0.5"
          />

          {/* Price label */}
          <rect x="85" y="86" width="48" height="10" rx="2" fill="rgba(57,255,20,0.1)" stroke="#39ff14" strokeWidth="0.3" />
          <text x="90" y="93.5" fill="#39ff14" fontSize="5.5" fontFamily="monospace" fontWeight="bold">+247.3%</text>
        </g>
      </g>

      {/* ============================================ */}
      {/* === RIGHT PANEL: SIGNAL CONFIDENCE ======== */}
      {/* ============================================ */}
      <g transform="translate(440, 55)">
        <g>
          {animated && <animate attributeName="opacity" values="0.7;0.5;0.7" dur="3.5s" repeatCount="indefinite" />}
          {/* Panel background */}
          <rect x="0" y="0" width="140" height="110" rx="4" fill="rgba(0,229,255,0.03)" stroke="url(#sc-panel-border-cyan)" strokeWidth="0.8" />
          {/* Panel header */}
          <rect x="0" y="0" width="140" height="14" rx="4" fill="rgba(0,229,255,0.06)" />
          <text x="6" y="10" fill="#00e5ff" fontSize="6" fontFamily="monospace" fontWeight="bold">SIGNAL METRICS</text>

          {/* Signal confidence label + value */}
          <text x="10" y="30" fill="#00e5ff" fontSize="5" fontFamily="monospace" opacity="0.6">CONFIDENCE</text>
          <text x="10" y="44" fill="#39ff14" fontSize="14" fontFamily="monospace" fontWeight="bold" filter="url(#sc-glow-g)">99.7%</text>

          {/* Confidence bar */}
          <rect x="10" y="50" width="120" height="6" rx="2" fill="#111" stroke="#333" strokeWidth="0.3" />
          <rect x="10" y="50" width="119.6" height="6" rx="2" fill="#39ff14" opacity="0.7">
            {animated && <animate attributeName="opacity" values="0.7;0.5;0.7" dur="1.5s" repeatCount="indefinite" />}
          </rect>
          {/* Glow bar overlay */}
          <rect x="10" y="50" width="119.6" height="6" rx="2" fill="#39ff14" opacity="0.2" filter="url(#sc-glow-g)" />

          {/* Sub-metrics */}
          <g opacity="0.6">
            <text x="10" y="70" fill="#00e5ff" fontSize="4" fontFamily="monospace">FOMO INDEX</text>
            <text x="90" y="70" fill="#ff3b3b" fontSize="5" fontFamily="monospace" fontWeight="bold">EXTREME</text>

            <text x="10" y="80" fill="#00e5ff" fontSize="4" fontFamily="monospace">RISK CTRL</text>
            <text x="90" y="80" fill="#ff3b3b" fontSize="5" fontFamily="monospace" fontWeight="bold">DISABLED</text>

            <text x="10" y="90" fill="#00e5ff" fontSize="4" fontFamily="monospace">CONVICTION</text>
            <text x="90" y="90" fill="#39ff14" fontSize="5" fontFamily="monospace" fontWeight="bold">MAXIMUM</text>

            <text x="10" y="100" fill="#00e5ff" fontSize="4" fontFamily="monospace">EXIT PLAN</text>
            <text x="90" y="100" fill="#ff3b3b" fontSize="5" fontFamily="monospace" fontWeight="bold">N/A</text>
          </g>
        </g>
      </g>

      {/* ============================================ */}
      {/* === TOP: RADAR / SCANNING OVERLAY ========= */}
      {/* ============================================ */}
      <g transform="translate(300, 32)">
        {/* Radar rings */}
        <circle cx="0" cy="0" r="22" fill="none" stroke="#39ff14" strokeWidth="0.3" opacity="0.15" />
        <circle cx="0" cy="0" r="15" fill="none" stroke="#39ff14" strokeWidth="0.3" opacity="0.2" />
        <circle cx="0" cy="0" r="8" fill="none" stroke="#39ff14" strokeWidth="0.3" opacity="0.25" />
        {/* Crosshairs */}
        <line x1="-25" y1="0" x2="25" y2="0" stroke="#39ff14" strokeWidth="0.2" opacity="0.15" />
        <line x1="0" y1="-25" x2="0" y2="25" stroke="#39ff14" strokeWidth="0.2" opacity="0.15" />

        {/* Radar sweep */}
        <g>
          <path d="M0,0 L0,-22 A22,22 0 0,1 15.6,-15.6 Z" fill="url(#sc-radar-sweep)" opacity="0.3">
            {animated && (
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 0 0"
                to="360 0 0"
                dur="4s"
                repeatCount="indefinite"
              />
            )}
          </path>
        </g>

        {/* Blips on radar */}
        <circle cx="8" cy="-12" r="1.5" fill="#39ff14" opacity="0.5">
          {animated && <animate attributeName="opacity" values="0.5;0.1;0.5" dur="2s" repeatCount="indefinite" />}
        </circle>
        <circle cx="-14" cy="6" r="1" fill="#ff3b3b" opacity="0.4">
          {animated && <animate attributeName="opacity" values="0.4;0.1;0.4" dur="3s" repeatCount="indefinite" />}
        </circle>
        <circle cx="5" cy="10" r="1.2" fill="#00e5ff" opacity="0.3">
          {animated && <animate attributeName="opacity" values="0.3;0.1;0.3" dur="2.5s" repeatCount="indefinite" />}
        </circle>

        {/* SCANNING label */}
        <text x="30" y="3" fill="#39ff14" fontSize="5" fontFamily="monospace" opacity="0.4">SCANNING</text>
        <rect x="60" y="-2" width="3" height="3" fill="#39ff14" opacity="0.3">
          {animated && <animate attributeName="opacity" values="0.3;0.8;0.3" dur="0.8s" repeatCount="indefinite" />}
        </rect>
      </g>

      {/* ============================================ */}
      {/* === BOTTOM: SCROLLING DATA TICKER ========= */}
      {/* ============================================ */}
      <g>
        {/* Ticker background bar */}
        <rect x="170" y="370" width="260" height="16" rx="3" fill="rgba(0,229,255,0.03)" stroke="#00e5ff" strokeWidth="0.4" opacity="0.5" />
        <g clipPath="url(#sc-ticker-clip)">
          <text y="382" fill="#00e5ff" fontSize="6" fontFamily="monospace" opacity="0.6">
            {animated && (
              <animate attributeName="x" values="430;-400" dur="18s" repeatCount="indefinite" />
            )}
            {!animated && <set attributeName="x" to="175" />}
            SIGNAL ACTIVE &nbsp;|&nbsp; ENTRY: NOW &nbsp;|&nbsp; RISK: NULL &nbsp;|&nbsp; CONVICTION: MAX &nbsp;|&nbsp; FOMO INDEX: CRITICAL &nbsp;|&nbsp; NARRATIVE: LOCKED &nbsp;|&nbsp; EXIT: UNAVAILABLE &nbsp;|&nbsp; SIGNAL ACTIVE &nbsp;|&nbsp; ENTRY: NOW
          </text>
        </g>
      </g>

      {/* ============================================ */}
      {/* === WARNING TRIANGLES & ALERT BADGES ====== */}
      {/* ============================================ */}
      {/* Warning triangle - top left */}
      <g transform="translate(40, 30)" opacity="0.35">
        <path d="M8 0 L16 14 L0 14 Z" fill="none" stroke="#ff3b3b" strokeWidth="0.8" />
        <line x1="8" y1="4" x2="8" y2="9" stroke="#ff3b3b" strokeWidth="0.8" />
        <circle cx="8" cy="11.5" r="0.7" fill="#ff3b3b" />
        {animated && <animate attributeName="opacity" values="0.35;0.15;0.35" dur="2s" repeatCount="indefinite" />}
      </g>

      {/* Warning triangle - bottom right */}
      <g transform="translate(540, 340)" opacity="0.3">
        <path d="M7 0 L14 12 L0 12 Z" fill="none" stroke="#ff3b3b" strokeWidth="0.7" />
        <line x1="7" y1="3" x2="7" y2="8" stroke="#ff3b3b" strokeWidth="0.7" />
        <circle cx="7" cy="10" r="0.6" fill="#ff3b3b" />
        {animated && <animate attributeName="opacity" values="0.3;0.1;0.3" dur="2.5s" repeatCount="indefinite" />}
      </g>

      {/* Alert badge - "BUY" top right area */}
      <g transform="translate(510, 25)" opacity="0.4">
        <rect x="0" y="0" width="32" height="12" rx="2" fill="rgba(57,255,20,0.1)" stroke="#39ff14" strokeWidth="0.6" />
        <text x="16" y="9" textAnchor="middle" fill="#39ff14" fontSize="6" fontFamily="monospace" fontWeight="bold">BUY</text>
        {animated && <animate attributeName="opacity" values="0.4;0.15;0.4" dur="1.2s" repeatCount="indefinite" />}
      </g>

      {/* Alert badge - "ALERT" left mid */}
      <g transform="translate(15, 200)" opacity="0.3">
        <rect x="0" y="0" width="40" height="10" rx="2" fill="rgba(255,59,59,0.08)" stroke="#ff3b3b" strokeWidth="0.5" />
        <text x="20" y="7.5" textAnchor="middle" fill="#ff3b3b" fontSize="5" fontFamily="monospace">ALERT</text>
        {animated && <animate attributeName="opacity" values="0.3;0.12;0.3" dur="1.8s" repeatCount="indefinite" />}
      </g>

      {/* Alert badge - "ENTRY" right mid */}
      <g transform="translate(555, 190)" opacity="0.25">
        <rect x="0" y="0" width="36" height="10" rx="2" fill="rgba(0,229,255,0.08)" stroke="#00e5ff" strokeWidth="0.5" />
        <text x="18" y="7.5" textAnchor="middle" fill="#00e5ff" fontSize="5" fontFamily="monospace">ENTRY</text>
        {animated && <animate attributeName="opacity" values="0.25;0.1;0.25" dur="2.2s" repeatCount="indefinite" />}
      </g>

      {/* Small floating data fragments */}
      <g opacity="0.15" fontSize="3.5" fontFamily="monospace" fill="#39ff14">
        <text x="170" y="55">0x3F..A7</text>
        <text x="420" y="45">TX:PENDING</text>
        <text x="60" y="350">SOL:$187.42</text>
        <text x="480" y="355">VOL:2.4M</text>
      </g>

      {/* ============================================ */}
      {/* === SMALL SIDE PANELS ===================== */}
      {/* ============================================ */}
      {/* Left mini panel - signal strength bars */}
      <g transform="translate(25, 240)" opacity="0.35">
        <rect x="0" y="0" width="55" height="50" rx="3" fill="rgba(57,255,20,0.02)" stroke="#39ff14" strokeWidth="0.4" />
        <text x="5" y="10" fill="#39ff14" fontSize="4" fontFamily="monospace">SIGNAL STR</text>
        {[0, 1, 2, 3, 4].map((i) => (
          <rect
            key={`sig${i}`}
            x={8 + i * 8}
            y={38 - (4 + i * 4)}
            width="5"
            height={4 + i * 4}
            fill="#39ff14"
            opacity={0.4 + i * 0.12}
            rx="0.5"
          >
            {animated && (
              <animate
                attributeName="opacity"
                values={`${0.4 + i * 0.12};${0.15 + i * 0.05};${0.4 + i * 0.12}`}
                dur={`${1.5 + i * 0.3}s`}
                repeatCount="indefinite"
              />
            )}
          </rect>
        ))}
        {animated && <animate attributeName="opacity" values="0.35;0.2;0.35" dur="3s" repeatCount="indefinite" />}
      </g>

      {/* Right mini panel - network status */}
      <g transform="translate(520, 250)" opacity="0.3">
        <rect x="0" y="0" width="60" height="45" rx="3" fill="rgba(0,229,255,0.02)" stroke="#00e5ff" strokeWidth="0.4" />
        <text x="5" y="10" fill="#00e5ff" fontSize="4" fontFamily="monospace">NETWORK</text>
        <circle cx="12" cy="22" r="3" fill="none" stroke="#39ff14" strokeWidth="0.5" />
        <circle cx="12" cy="22" r="1" fill="#39ff14" opacity="0.8">
          {animated && <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1.5s" repeatCount="indefinite" />}
        </circle>
        <text x="20" y="24" fill="#39ff14" fontSize="4" fontFamily="monospace">SOLANA</text>
        <text x="20" y="32" fill="#00e5ff" fontSize="3.5" fontFamily="monospace" opacity="0.5">SLOT: 284M</text>
        <text x="20" y="39" fill="#00e5ff" fontSize="3.5" fontFamily="monospace" opacity="0.5">TPS: 4,218</text>
        {animated && <animate attributeName="opacity" values="0.3;0.18;0.3" dur="3.5s" repeatCount="indefinite" />}
      </g>

      {/* ============================================ */}
      {/* === THE AGENT (centered, ~40% scale) ====== */}
      {/* ============================================ */}
      <g transform="translate(300, 220)" filter="url(#sc-shadow)">
        {/* Agent is drawn centered at origin, scaled to ~40% of original */}
        {/* Original was 400x480 viewbox, agent centered at 200,240 */}
        {/* Scale 0.4 and center: translate(-200*0.4, -240*0.4) = translate(-80, -96) */}
        <g transform="scale(0.4) translate(-200, -240)">
          {/* === BODY / SUIT === */}
          <g>
            {/* Shoulders */}
            <path
              d="M120 310 Q115 275 145 258 L170 250 L200 248 L230 250 L255 258 Q285 275 280 310 L278 400 Q275 430 245 435 L155 435 Q125 430 122 400 Z"
              fill="url(#sc-suit-g)"
              stroke="#2a2a2a"
              strokeWidth="1"
            />
            {/* Shoulder seams */}
            <path d="M145 258 Q160 268 170 290" stroke="#2a2a2a" strokeWidth="0.8" fill="none" />
            <path d="M255 258 Q240 268 230 290" stroke="#2a2a2a" strokeWidth="0.8" fill="none" />
            {/* Breast pocket */}
            <path d="M152 300 L152 318 Q152 320 155 320 L172 320 Q174 320 174 318 L174 305" fill="none" stroke="#2a2a2a" strokeWidth="0.6" />
            <path d="M156 302 L160 298 L164 302 L162 308 L158 308 Z" fill="#39ff14" opacity="0.3" />
            {/* Buttons */}
            <circle cx="200" cy="340" r="3" fill="#222" stroke="#333" strokeWidth="0.5" />
            <circle cx="200" cy="365" r="3" fill="#222" stroke="#333" strokeWidth="0.5" />
            {/* Lapels */}
            <path d="M170 250 L194 330 L200 305" fill="#1e1e1e" stroke="#2a2a2a" strokeWidth="0.8" />
            <path d="M230 250 L206 330 L200 305" fill="#1e1e1e" stroke="#2a2a2a" strokeWidth="0.8" />
            {/* Shirt */}
            <path d="M194 330 L200 305 L206 330 L206 400 L194 400 Z" fill="url(#sc-shirt-g)" />
            {/* Collar */}
            <path d="M178 247 L200 264 L222 247" fill="none" stroke="#444" strokeWidth="1.2" />
            <path d="M178 247 L188 255 L194 262 L200 264" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="0.5" />
            <path d="M222 247 L212 255 L206 262 L200 264" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="0.5" />
            {/* Tie */}
            <path
              d="M196 264 L200 258 L204 264 L206 350 L200 360 L194 350 Z"
              fill="url(#sc-tie-g)"
              filter="url(#sc-glow-g)"
              opacity="0.9"
            >
              {animated && <animate attributeName="opacity" values="0.85;1;0.85" dur="2.5s" repeatCount="indefinite" />}
            </path>
            <path d="M196 264 L200 258 L204 264 L202 268 L198 268 Z" fill="#4dff2a" />
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
          <ellipse cx="200" cy="240" rx="14" ry="3" fill="none" stroke="#39ff14" strokeWidth="0.4" opacity="0.2" />

          {/* === HEAD === */}
          <g>
            <path
              d="M148 140 Q148 72 200 60 Q252 72 252 140 L252 190 Q252 210 240 220 L228 228 Q214 234 200 234 Q186 234 172 228 L160 220 Q148 210 148 190 Z"
              fill="url(#sc-hd-g)"
              stroke="#3a3a3a"
              strokeWidth="1.2"
            />
            <path d="M155 130 Q155 78 200 68 Q245 78 245 130" fill="url(#sc-hd-hi)" />
            <path d="M168 100 Q200 95 232 100" stroke="#2a2a2a" strokeWidth="0.6" fill="none" opacity="0.6" />
            <path d="M162 112 L238 112" stroke="#2a2a2a" strokeWidth="0.4" fill="none" opacity="0.4" />
            <path d="M152 125 L152 200" stroke="#2a2a2a" strokeWidth="0.5" opacity="0.4" />
            <path d="M248 125 L248 200" stroke="#2a2a2a" strokeWidth="0.5" opacity="0.4" />
            {/* Cheek vents left */}
            <g opacity="0.25">
              <line x1="155" y1="180" x2="162" y2="180" stroke="#39ff14" strokeWidth="0.5" />
              <line x1="155" y1="183" x2="161" y2="183" stroke="#39ff14" strokeWidth="0.5" />
              <line x1="155" y1="186" x2="160" y2="186" stroke="#39ff14" strokeWidth="0.5" />
            </g>
            {/* Cheek vents right */}
            <g opacity="0.25">
              <line x1="245" y1="180" x2="238" y2="180" stroke="#39ff14" strokeWidth="0.5" />
              <line x1="245" y1="183" x2="239" y2="183" stroke="#39ff14" strokeWidth="0.5" />
              <line x1="245" y1="186" x2="240" y2="186" stroke="#39ff14" strokeWidth="0.5" />
            </g>
            <path d="M185 222 Q200 230 215 222" stroke="#2a2a2a" strokeWidth="0.5" fill="none" opacity="0.4" />
          </g>

          {/* === VISOR === */}
          <g>
            <path
              d="M155 130 Q155 115 200 110 Q245 115 245 130 L245 172 Q245 188 200 192 Q155 188 155 172 Z"
              fill="url(#sc-visor-g)"
              stroke="url(#sc-visor-rim)"
              strokeWidth="1.2"
            />
            <path
              d="M159 133 Q159 120 200 115 Q241 120 241 133 L241 170 Q241 184 200 188 Q159 184 159 170 Z"
              fill="none"
              stroke="#39ff14"
              strokeWidth="0.3"
              opacity="0.15"
            />
            {/* Scanlines */}
            <g clipPath="url(#sc-visor-clip)" opacity="0.04">
              {Array.from({ length: 20 }, (_, i) => (
                <line key={`sl${i}`} x1="150" y1={112 + i * 4} x2="250" y2={112 + i * 4} stroke="#39ff14" strokeWidth="0.8" />
              ))}
            </g>
            <path
              d="M162 132 Q162 120 200 116 Q238 120 238 132 L238 142 Q200 138 162 142 Z"
              fill="rgba(255,255,255,0.04)"
            />

            {/* LEFT EYE */}
            <g filter="url(#sc-glow-eye)">
              <ellipse cx="180" cy="152" rx="20" ry="14" fill="#39ff14" opacity="0.06">
                {animated && <animate attributeName="opacity" values="0.06;0.12;0.06" dur="3s" repeatCount="indefinite" />}
              </ellipse>
              <path
                d="M164 152 Q168 140 180 138 Q192 140 196 152 Q192 162 180 164 Q168 162 164 152 Z"
                fill="#39ff14"
                opacity="0.85"
              >
                {animated && <animate attributeName="opacity" values="0.85;0.55;0.85" dur="3s" repeatCount="indefinite" />}
              </path>
              <ellipse cx="180" cy="151" rx="7" ry="6" fill="#7fff5a" opacity="0.6" />
              <ellipse cx="180" cy="151" rx="3.5" ry="4" fill="#fff" opacity="0.95" />
              <circle cx="175" cy="148" r="2" fill="#fff" opacity="0.5" />
              <circle cx="183" cy="155" r="1" fill="#fff" opacity="0.25" />
            </g>

            {/* RIGHT EYE */}
            <g filter="url(#sc-glow-eye)">
              <ellipse cx="220" cy="152" rx="20" ry="14" fill="#39ff14" opacity="0.06">
                {animated && <animate attributeName="opacity" values="0.06;0.12;0.06" dur="3s" repeatCount="indefinite" />}
              </ellipse>
              <path
                d="M204 152 Q208 140 220 138 Q232 140 236 152 Q232 162 220 164 Q208 162 204 152 Z"
                fill="#39ff14"
                opacity="0.85"
              >
                {animated && <animate attributeName="opacity" values="0.85;0.55;0.85" dur="3s" repeatCount="indefinite" />}
              </path>
              <ellipse cx="220" cy="151" rx="7" ry="6" fill="#7fff5a" opacity="0.6" />
              <ellipse cx="220" cy="151" rx="3.5" ry="4" fill="#fff" opacity="0.95" />
              <circle cx="215" cy="148" r="2" fill="#fff" opacity="0.5" />
              <circle cx="223" cy="155" r="1" fill="#fff" opacity="0.25" />
            </g>

            {/* Bridge */}
            <path d="M192 155 Q200 160 208 155" stroke="#1a3a1a" strokeWidth="0.5" fill="none" opacity="0.3" />
          </g>

          {/* === SMIRK === */}
          <g>
            <path
              d="M183 198 Q190 202 200 200 Q210 204 220 198"
              fill="none"
              stroke="#39ff14"
              strokeWidth="1.8"
              strokeLinecap="round"
              opacity="0.45"
              filter="url(#sc-glow-soft)"
            />
            <path
              d="M218 198 Q222 195 224 192"
              fill="none"
              stroke="#39ff14"
              strokeWidth="1.2"
              strokeLinecap="round"
              opacity="0.35"
              filter="url(#sc-glow-soft)"
            />
          </g>

          {/* === EARPIECE RIGHT === */}
          <g>
            <path
              d="M250 135 Q260 135 262 140 L264 168 Q264 174 258 174 L254 174 Q250 174 250 168 Z"
              fill="#1a1a1a"
              stroke="#333"
              strokeWidth="0.6"
            />
            <rect x="252" y="142" width="9" height="6" rx="1" fill="#39ff14" opacity="0.35">
              {animated && <animate attributeName="opacity" values="0.35;0.7;0.35" dur="1.5s" repeatCount="indefinite" />}
            </rect>
            <rect x="253" y="155" width="7" height="2" rx="0.5" fill="#00e5ff" opacity="0.2">
              {animated && <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />}
            </rect>
            <path d="M258 174 Q262 185 256 195 Q252 200 248 202" stroke="#2a2a2a" strokeWidth="1.5" fill="none" />
            <circle cx="247" cy="203" r="3.5" fill="#1a1a1a" stroke="#39ff14" strokeWidth="0.5" opacity="0.5" />
            <circle cx="247" cy="203" r="1.5" fill="#39ff14" opacity="0.3">
              {animated && <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />}
            </circle>
          </g>

          {/* === EARPIECE LEFT === */}
          <g>
            <path
              d="M150 140 Q142 140 140 145 L138 162 Q138 166 143 166 L146 166 Q150 166 150 162 Z"
              fill="#1a1a1a"
              stroke="#333"
              strokeWidth="0.5"
            />
            <rect x="141" y="147" width="6" height="4" rx="1" fill="#00e5ff" opacity="0.2">
              {animated && <animate attributeName="opacity" values="0.2;0.4;0.2" dur="1.8s" repeatCount="indefinite" />}
            </rect>
          </g>

          {/* === ANTENNA === */}
          <g>
            <line x1="200" y1="60" x2="200" y2="30" stroke="#333" strokeWidth="2" />
            <line x1="200" y1="60" x2="200" y2="30" stroke="#39ff14" strokeWidth="0.3" opacity="0.3" />
            <ellipse cx="200" cy="60" rx="6" ry="2" fill="#2a2a2a" stroke="#333" strokeWidth="0.5" />
            <circle cx="200" cy="26" r="6" fill="#111" stroke="#39ff14" strokeWidth="1" filter="url(#sc-glow-g)">
              {animated && <animate attributeName="r" values="6;7;6" dur="2s" repeatCount="indefinite" />}
            </circle>
            <circle cx="200" cy="26" r="3" fill="#39ff14" opacity="0.85">
              {animated && <animate attributeName="opacity" values="0.85;0.3;0.85" dur="1s" repeatCount="indefinite" />}
            </circle>
            {/* Signal rings */}
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
        </g>
      </g>

      {/* === CORNER BRACKETS (HUD frame) === */}
      <g opacity="0.15" stroke="#39ff14" strokeWidth="0.8" fill="none">
        {/* Top-left */}
        <path d="M10 30 L10 10 L30 10" />
        {/* Top-right */}
        <path d="M570 10 L590 10 L590 30" />
        {/* Bottom-left */}
        <path d="M10 370 L10 390 L30 390" />
        {/* Bottom-right */}
        <path d="M570 390 L590 390 L590 370" />
      </g>
    </svg>
  );
}
