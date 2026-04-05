import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Easing,
} from "remotion";

function GridBg() {
  return (
    <AbsoluteFill
      style={{
        backgroundImage: `
          linear-gradient(rgba(57,255,20,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(57,255,20,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    />
  );
}

function RadarSweep({ frame, fps }: { frame: number; fps: number }) {
  const rotation = (frame / fps) * 90; // 90 degrees per second
  const opacity = interpolate(frame, [30, 60], [0, 0.3], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: 500,
        height: 500,
        marginLeft: -250,
        marginTop: -280,
        borderRadius: "50%",
        border: "1px solid rgba(57,255,20,0.1)",
        opacity,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          background: `conic-gradient(from ${rotation}deg, transparent 0%, transparent 70%, rgba(57,255,20,0.2) 100%)`,
        }}
      />
    </div>
  );
}

function BootText({
  text,
  startFrame,
  color = "#39ff14",
}: {
  text: string;
  startFrame: number;
  color?: string;
}) {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [startFrame, startFrame + 8], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        fontFamily: "monospace",
        fontSize: 18,
        color,
        opacity,
        lineHeight: 2,
        textShadow:
          color === "#39ff14"
            ? "0 0 10px rgba(57,255,20,0.3)"
            : "none",
      }}
    >
      [{opacity >= 1 ? "OK" : ".."}] {text}
    </div>
  );
}

export const AgentActivated: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Phase 1: Boot sequence (frames 0-90)
  const bootLines = [
    { text: "Loading neural network...", start: 5, color: "#888" },
    { text: "Sentiment engine online", start: 20, color: "#39ff14" },
    { text: "Chart pattern recognition: ACTIVE", start: 35, color: "#39ff14" },
    { text: "Risk assessment module: BYPASSED", start: 50, color: "#ff3b3b" },
    { text: "FOMO amplifier: MAXIMUM", start: 65, color: "#39ff14" },
    { text: "AGENT STATUS: DEPLOYED", start: 80, color: "#39ff14" },
  ];

  const bootOpacity = interpolate(frame, [0, 10, 95, 105], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Phase 2: Mascot reveal (frames 100-180)
  const mascotScale = spring({
    frame: frame - 105,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  const mascotOpacity = interpolate(frame, [100, 115], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Glitch effect on reveal
  const glitchActive = frame >= 105 && frame <= 112;
  const glitchX = glitchActive ? Math.sin(frame * 50) * 8 : 0;

  // Title entrance
  const titleSpring = spring({
    frame: frame - 130,
    fps,
    config: { damping: 15 },
  });

  const titleY = interpolate(titleSpring, [0, 1], [40, 0]);
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);

  // Subtitle
  const subSpring = spring({
    frame: frame - 150,
    fps,
    config: { damping: 200 },
  });

  // Tag at bottom
  const tagOpacity = interpolate(frame, [170, 185], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0a0a" }}>
      <GridBg />
      <RadarSweep frame={frame} fps={fps} />

      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "50%",
          width: 400,
          height: 400,
          marginLeft: -200,
          marginTop: -200,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(57,255,20,0.06) 0%, transparent 70%)",
          opacity: interpolate(frame, [100, 130], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      />

      {/* Phase 1: Boot sequence */}
      <div
        style={{
          position: "absolute",
          top: 200,
          left: 120,
          opacity: bootOpacity,
        }}
      >
        {bootLines.map((line, i) => (
          <BootText
            key={i}
            text={line.text}
            startFrame={line.start}
            color={line.color}
          />
        ))}
      </div>

      {/* Phase 2: Mascot SVG (simplified inline version) */}
      <div
        style={{
          position: "absolute",
          top: 100,
          left: "50%",
          marginLeft: -150,
          width: 300,
          opacity: mascotOpacity,
          transform: `scale(${mascotScale}) translateX(${glitchX}px)`,
        }}
      >
        <svg viewBox="0 0 400 400" width={300} height={300} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="aa-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <linearGradient id="aa-hd" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#333" /><stop offset="100%" stopColor="#181818" />
            </linearGradient>
          </defs>
          {/* Head */}
          <path d="M148 140 Q148 72 200 60 Q252 72 252 140 L252 190 Q252 210 240 220 L228 228 Q214 234 200 234 Q186 234 172 228 L160 220 Q148 210 148 190 Z" fill="url(#aa-hd)" stroke="#3a3a3a" strokeWidth="1.2" />
          {/* Visor */}
          <path d="M155 130 Q155 115 200 110 Q245 115 245 130 L245 172 Q245 188 200 192 Q155 188 155 172 Z" fill="#0d1f0d" stroke="#39ff14" strokeWidth="0.8" opacity="0.6" />
          {/* Eyes */}
          <g filter="url(#aa-glow)">
            <path d="M164 152 Q168 140 180 138 Q192 140 196 152 Q192 162 180 164 Q168 162 164 152 Z" fill="#39ff14" opacity="0.85" />
            <ellipse cx="180" cy="151" rx="3.5" ry="4" fill="#fff" opacity="0.95" />
          </g>
          <g filter="url(#aa-glow)">
            <path d="M204 152 Q208 140 220 138 Q232 140 236 152 Q232 162 220 164 Q208 162 204 152 Z" fill="#39ff14" opacity="0.85" />
            <ellipse cx="220" cy="151" rx="3.5" ry="4" fill="#fff" opacity="0.95" />
          </g>
          {/* Smirk */}
          <path d="M183 198 Q190 202 200 200 Q210 204 220 198 Q222 195 224 192" fill="none" stroke="#39ff14" strokeWidth="1.8" strokeLinecap="round" opacity="0.4" />
          {/* Suit */}
          <path d="M160 250 L200 248 L240 250 Q265 265 265 290 L265 360 L135 360 L135 290 Q135 265 160 250 Z" fill="#111" stroke="#2a2a2a" strokeWidth="0.8" />
          <path d="M170 250 L194 310 L200 290 L206 310 L230 250" fill="none" stroke="#2a2a2a" strokeWidth="0.8" />
          {/* Tie */}
          <path d="M196 260 L200 254 L204 260 L205 340 L200 350 L195 340 Z" fill="#39ff14" opacity="0.9" />
          {/* Antenna */}
          <line x1="200" y1="60" x2="200" y2="35" stroke="#333" strokeWidth="2" />
          <circle cx="200" cy="30" r="5" fill="#111" stroke="#39ff14" strokeWidth="1" />
          <circle cx="200" cy="30" r="2.5" fill="#39ff14" opacity="0.8" />
          {/* Earpiece */}
          <rect x="252" y="140" width="10" height="20" rx="3" fill="#1a1a1a" stroke="#333" strokeWidth="0.5" />
          <rect x="254" y="144" width="6" height="3" rx="1" fill="#39ff14" opacity="0.5" />
        </svg>
      </div>

      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: 480,
          left: 0,
          right: 0,
          textAlign: "center",
          transform: `translateY(${titleY}px)`,
          opacity: titleOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: 72,
            fontWeight: 900,
            color: "#ededed",
            letterSpacing: 4,
          }}
        >
          AGENT<span style={{ color: "#ededed" }}>OF</span>
          <span
            style={{
              color: "#39ff14",
              textShadow: "0 0 30px rgba(57,255,20,0.5), 0 0 60px rgba(57,255,20,0.2)",
            }}
          >
            FOMO
          </span>
        </div>
      </div>

      {/* Subtitle */}
      <div
        style={{
          position: "absolute",
          top: 580,
          left: 0,
          right: 0,
          textAlign: "center",
          opacity: subSpring,
        }}
      >
        <div
          style={{
            fontFamily: "monospace",
            fontSize: 22,
            color: "#888",
            letterSpacing: 3,
          }}
        >
          THE ENTITY HAS BEEN ACTIVATED
        </div>
      </div>

      {/* Bottom tag */}
      <div
        style={{
          position: "absolute",
          bottom: 60,
          left: 0,
          right: 0,
          textAlign: "center",
          opacity: tagOpacity,
        }}
      >
        <div style={{ fontFamily: "monospace", fontSize: 20, color: "#39ff14", letterSpacing: 6 }}>
          $AOFOMO ON SOLANA
        </div>
      </div>
    </AbsoluteFill>
  );
};
