import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Easing,
} from "remotion";

// Candlestick data — tells a story: dip, then massive pump
const CANDLES = [
  { o: 60, c: 55, h: 62, l: 53, green: false },
  { o: 55, c: 52, h: 57, l: 50, green: false },
  { o: 52, c: 48, h: 54, l: 46, green: false },
  { o: 48, c: 53, h: 55, l: 47, green: true },
  { o: 53, c: 50, h: 54, l: 48, green: false },
  { o: 50, c: 56, h: 58, l: 49, green: true },
  { o: 56, c: 62, h: 64, l: 55, green: true },
  { o: 62, c: 68, h: 70, l: 60, green: true },
  { o: 68, c: 65, h: 72, l: 63, green: false },
  { o: 65, c: 74, h: 76, l: 64, green: true },
  { o: 74, c: 82, h: 84, l: 72, green: true },
  { o: 82, c: 88, h: 92, l: 80, green: true },
  { o: 88, c: 95, h: 98, l: 86, green: true },
];

function Candle({
  candle,
  index,
  totalCandles,
  chartX,
  chartY,
  chartW,
  chartH,
}: {
  candle: (typeof CANDLES)[number];
  index: number;
  totalCandles: number;
  chartX: number;
  chartY: number;
  chartW: number;
  chartH: number;
}) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const candleDelay = 15 + index * 8;
  const progress = spring({
    frame: frame - candleDelay,
    fps,
    config: { damping: 15, stiffness: 120 },
  });

  const candleWidth = (chartW / totalCandles) * 0.6;
  const gap = chartW / totalCandles;
  const x = chartX + index * gap + gap * 0.2;

  const scaleY = (val: number) =>
    chartY + chartH - ((val - 40) / 60) * chartH;

  const bodyTop = scaleY(Math.max(candle.o, candle.c));
  const bodyBot = scaleY(Math.min(candle.o, candle.c));
  const bodyH = Math.max(bodyBot - bodyTop, 2);
  const wickTop = scaleY(candle.h);
  const wickBot = scaleY(candle.l);
  const color = candle.green ? "#39ff14" : "#ff3b3b";
  const wickX = x + candleWidth / 2;

  return (
    <g style={{ opacity: progress }}>
      {/* Wick */}
      <line
        x1={wickX}
        y1={wickTop * progress + chartY * (1 - progress)}
        x2={wickX}
        y2={wickBot * progress + (chartY + chartH) * (1 - progress)}
        stroke={color}
        strokeWidth={2}
        opacity={0.7}
      />
      {/* Body */}
      <rect
        x={x}
        y={bodyTop * progress + (chartY + chartH / 2) * (1 - progress)}
        width={candleWidth}
        height={bodyH * progress}
        fill={color}
        opacity={0.85}
        rx={1}
      />
    </g>
  );
}

function AlertBadge({
  text,
  x,
  y,
  startFrame,
  color = "#ff3b3b",
}: {
  text: string;
  x: number;
  y: number;
  startFrame: number;
  color?: string;
}) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame: frame - startFrame,
    fps,
    config: { damping: 10, stiffness: 150 },
  });

  const opacity = interpolate(frame, [startFrame, startFrame + 10], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Pulse
  const pulse = interpolate(
    Math.sin(((frame - startFrame) / fps) * Math.PI * 3),
    [-1, 1],
    [0.8, 1],
  );

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        transform: `scale(${scale * pulse})`,
        opacity,
        fontFamily: "monospace",
        fontSize: 20,
        color,
        padding: "8px 16px",
        border: `1px solid ${color}`,
        borderRadius: 6,
        backgroundColor: `${color}10`,
        whiteSpace: "nowrap",
        textShadow: `0 0 10px ${color}80`,
      }}
    >
      {text}
    </div>
  );
}

export const FomoAlert: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // Chart area
  const chartX = 100;
  const chartY = 200;
  const chartW = width - 200;
  const chartH = 450;

  // Title
  const titleSpring = spring({ frame, fps, config: { damping: 200 } });

  // Confidence counter
  const counterStart = 90;
  const counterValue = interpolate(
    frame,
    [counterStart, counterStart + 60],
    [42.3, 99.7],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.inOut(Easing.quad) },
  );

  // Final flash
  const flashFrame = 150;
  const flash = interpolate(frame, [flashFrame, flashFrame + 3, flashFrame + 15], [0, 0.2, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Bottom tag
  const tagOpacity = interpolate(frame, [155, 170], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0a0a" }}>
      {/* Grid bg */}
      <AbsoluteFill
        style={{
          backgroundImage: `
            linear-gradient(rgba(57,255,20,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(57,255,20,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Flash */}
      <AbsoluteFill style={{ backgroundColor: `rgba(57,255,20,${flash})` }} />

      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: 50,
          left: 0,
          right: 0,
          textAlign: "center",
          opacity: titleSpring,
        }}
      >
        <div
          style={{
            fontFamily: "monospace",
            fontSize: 18,
            color: "#ff3b3b",
            letterSpacing: 6,
            marginBottom: 8,
          }}
        >
          CLASSIFIED MARKET ANALYSIS
        </div>
        <div
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: 52,
            fontWeight: 900,
            color: "#ededed",
          }}
        >
          AOFOMO / SOL
        </div>
      </div>

      {/* Chart */}
      <svg
        width={width}
        height={height}
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        {/* Chart grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((pct) => (
          <line
            key={pct}
            x1={chartX}
            y1={chartY + chartH * pct}
            x2={chartX + chartW}
            y2={chartY + chartH * pct}
            stroke="rgba(57,255,20,0.05)"
            strokeWidth={1}
          />
        ))}

        {/* Candles */}
        {CANDLES.map((candle, i) => (
          <Candle
            key={i}
            candle={candle}
            index={i}
            totalCandles={CANDLES.length}
            chartX={chartX}
            chartY={chartY}
            chartW={chartW}
            chartH={chartH}
          />
        ))}
      </svg>

      {/* Signal confidence */}
      <div
        style={{
          position: "absolute",
          top: 140,
          right: 100,
          textAlign: "right",
          opacity: interpolate(frame, [counterStart, counterStart + 15], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        <div style={{ fontFamily: "monospace", fontSize: 14, color: "#555", letterSpacing: 3 }}>
          SIGNAL CONFIDENCE
        </div>
        <div
          style={{
            fontFamily: "monospace",
            fontSize: 48,
            fontWeight: "bold",
            color: counterValue > 90 ? "#39ff14" : counterValue > 70 ? "#00e5ff" : "#888",
            textShadow:
              counterValue > 90
                ? "0 0 20px rgba(57,255,20,0.5)"
                : "none",
          }}
        >
          {counterValue.toFixed(1)}%
        </div>
      </div>

      {/* Alert badges */}
      <AlertBadge text="FOMO LEVEL: CRITICAL" x={80} y={730} startFrame={100} />
      <AlertBadge text="ENTRY: NOW" x={650} y={350} startFrame={120} color="#39ff14" />
      <AlertBadge text="RISK CONTROLS: OFF" x={120} y={380} startFrame={135} />
      <AlertBadge text="CONVICTION: MAXIMUM" x={580} y={730} startFrame={145} color="#00e5ff" />

      {/* Bottom branding */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: 0,
          right: 0,
          textAlign: "center",
          opacity: tagOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "monospace",
            fontSize: 28,
            color: "#39ff14",
            letterSpacing: 8,
            textShadow: "0 0 20px rgba(57,255,20,0.4)",
          }}
        >
          $AOFOMO
        </div>
        <div style={{ fontFamily: "monospace", fontSize: 13, color: "#555", marginTop: 6, letterSpacing: 3 }}>
          DEPLOYED DIRECTLY INTO THE TOP
        </div>
      </div>

      {/* Scanlines */}
      <AbsoluteFill
        style={{
          background: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.04) 2px, rgba(0,0,0,0.04) 4px)`,
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};
