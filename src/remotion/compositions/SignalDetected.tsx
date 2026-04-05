import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Sequence,
} from "remotion";

const LINES = [
  { text: "> initializing agent_of_fomo.exe", color: "#888" },
  { text: "> scanning timeline...", color: "#888" },
  { text: "> green candles detected", color: "#39ff14" },
  { text: "> conviction amplifier: ONLINE", color: "#39ff14" },
  { text: "> risk controls: DISABLED", color: "#ff3b3b" },
  { text: "", color: "#888" },
  { text: "SIGNAL DETECTED.", color: "#39ff14" },
];

const CHARS_PER_FRAME = 1.5;

function TerminalLine({
  text,
  color,
  startFrame,
}: {
  text: string;
  color: string;
  startFrame: number;
}) {
  const frame = useCurrentFrame();
  const relFrame = frame - startFrame;

  if (relFrame < 0) return null;

  const charsToShow = Math.min(
    Math.floor(relFrame * CHARS_PER_FRAME),
    text.length
  );
  const displayed = text.slice(0, charsToShow);
  const isTyping = charsToShow < text.length;

  return (
    <div
      style={{
        fontFamily: "monospace",
        fontSize: text === "SIGNAL DETECTED." ? 48 : 28,
        color,
        lineHeight: 1.8,
        textShadow:
          color === "#39ff14"
            ? "0 0 20px rgba(57,255,20,0.5), 0 0 40px rgba(57,255,20,0.2)"
            : color === "#ff3b3b"
              ? "0 0 20px rgba(255,59,59,0.5)"
              : "none",
        fontWeight: text === "SIGNAL DETECTED." ? "bold" : "normal",
      }}
    >
      {displayed}
      {isTyping && (
        <span style={{ opacity: frame % 15 < 8 ? 1 : 0, color: "#39ff14" }}>
          _
        </span>
      )}
    </div>
  );
}

function Scanlines() {
  return (
    <AbsoluteFill
      style={{
        background: `repeating-linear-gradient(
          0deg,
          transparent,
          transparent 2px,
          rgba(0,0,0,0.06) 2px,
          rgba(0,0,0,0.06) 4px
        )`,
        pointerEvents: "none",
      }}
    />
  );
}

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

export const SignalDetected: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Calculate start frame for each line
  const lineStarts: number[] = [];
  let currentStart = 15; // Start after small delay
  for (const line of LINES) {
    lineStarts.push(currentStart);
    const typeDuration = Math.ceil(line.text.length / CHARS_PER_FRAME);
    currentStart += typeDuration + 12; // gap between lines
  }

  // Flash at the end when "SIGNAL DETECTED" finishes
  const lastLineStart = lineStarts[lineStarts.length - 1];
  const lastLineEnd =
    lastLineStart + Math.ceil(LINES[LINES.length - 1].text.length / CHARS_PER_FRAME);
  const flashProgress = interpolate(frame, [lastLineEnd, lastLineEnd + 4, lastLineEnd + 12], [0, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Bottom branding fade in
  const brandOpacity = interpolate(frame, [lastLineEnd + 10, lastLineEnd + 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0a0a" }}>
      <GridBg />

      {/* Green flash overlay */}
      <AbsoluteFill
        style={{
          backgroundColor: `rgba(57,255,20,${flashProgress * 0.15})`,
        }}
      />

      {/* Terminal window */}
      <div
        style={{
          position: "absolute",
          top: 120,
          left: 80,
          right: 80,
          bottom: 200,
          border: "1px solid #1a1a1a",
          borderRadius: 12,
          backgroundColor: "rgba(10,10,10,0.9)",
          overflow: "hidden",
        }}
      >
        {/* Terminal header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "12px 16px",
            borderBottom: "1px solid #1a1a1a",
          }}
        >
          <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "rgba(255,59,59,0.8)" }} />
          <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "rgba(250,204,21,0.8)" }} />
          <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "rgba(57,255,20,0.8)" }} />
          <span style={{ marginLeft: 12, fontFamily: "monospace", fontSize: 14, color: "#555" }}>
            classified://agentoffomo/signal
          </span>
        </div>

        {/* Terminal body */}
        <div style={{ padding: "30px 40px" }}>
          {LINES.map((line, i) => (
            <TerminalLine
              key={i}
              text={line.text}
              color={line.color}
              startFrame={lineStarts[i]}
            />
          ))}
        </div>
      </div>

      {/* Bottom branding */}
      <div
        style={{
          position: "absolute",
          bottom: 60,
          left: 0,
          right: 0,
          textAlign: "center",
          opacity: brandOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "monospace",
            fontSize: 24,
            color: "#39ff14",
            letterSpacing: 8,
            textShadow: "0 0 20px rgba(57,255,20,0.4)",
          }}
        >
          $AOFOMO
        </div>
        <div
          style={{
            fontFamily: "monospace",
            fontSize: 14,
            color: "#555",
            marginTop: 8,
            letterSpacing: 4,
          }}
        >
          TRUST THE SIGNAL. REGRET THE TIMING.
        </div>
      </div>

      <Scanlines />
    </AbsoluteFill>
  );
};
