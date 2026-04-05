"use client";

import { useEffect, useState } from "react";
import ParticleField from "./animations/ParticleField";
import GlitchText from "./animations/GlitchText";
import TypewriterText from "./animations/TypewriterText";
import AnimatedCounter from "./animations/AnimatedCounter";
import FloatingAlerts from "./animations/FloatingAlerts";
import AgentMascot from "./animations/AgentMascot";

function DataStreams() {
  const [numbers, setNumbers] = useState<string[][]>([[], []]);

  useEffect(() => {
    setNumbers([
      Array.from({ length: 60 }, () => (Math.random() * 999).toFixed(2)),
      Array.from({ length: 60 }, () => (Math.random() * 999).toFixed(2)),
    ]);
  }, []);

  if (numbers[0].length === 0) return null;

  return (
    <>
      <div className="absolute left-0 top-0 bottom-0 w-8 overflow-hidden opacity-20 pointer-events-none hidden sm:block">
        <div className="animate-data-scroll font-mono text-[8px] text-neon/60 leading-4 whitespace-nowrap">
          {numbers[0].map((n, i) => (
            <div key={i}>{n}</div>
          ))}
        </div>
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-8 overflow-hidden opacity-20 pointer-events-none hidden sm:block">
        <div className="animate-data-scroll font-mono text-[8px] text-cyan/60 leading-4 whitespace-nowrap" style={{ animationDirection: "reverse" }}>
          {numbers[1].map((n, i) => (
            <div key={i}>{n}</div>
          ))}
        </div>
      </div>
    </>
  );
}

const STATUS_TEXTS = [
  "Signal Status: EMOTIONALLY ENGAGED",
  "Risk Controls: DISABLED",
  "Conviction Level: CATASTROPHIC",
  "Entry Timing: PEAK FOMO",
  "Narrative Lock: CONFIRMED",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Particle background */}
      <ParticleField />

      {/* Background glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon/5 blur-[120px] pointer-events-none animate-scale-pulse" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-cyan/5 blur-[100px] pointer-events-none animate-scale-pulse" style={{ animationDelay: "1.5s" }} />
      <div className="absolute bottom-1/4 left-1/4 w-[250px] h-[250px] rounded-full bg-alert/3 blur-[80px] pointer-events-none animate-scale-pulse" style={{ animationDelay: "3s" }} />

      {/* Floating alerts */}
      <FloatingAlerts />

      {/* Data streams on edges */}
      <DataStreams />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-20">
        {/* Status bar with typewriter */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon/20 bg-neon/5 mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-neon animate-pulse-glow" />
          <span className="text-xs font-mono text-neon uppercase tracking-widest">
            <TypewriterText texts={STATUS_TEXTS} typeSpeed={40} pauseDuration={3000} />
          </span>
        </div>

        {/* Headline with glitch */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight mb-6">
          <span className="text-foreground">AGENT</span>
          <span className="text-foreground">OF</span>
          <br />
          <GlitchText
            text="FOMO"
            className="text-neon glow-green"
          />
        </h1>

        {/* Signal confidence */}
        <div className="flex items-center justify-center gap-2 mb-4 font-mono">
          <span className="text-xs text-muted uppercase tracking-widest">Signal Confidence:</span>
          <span className="text-lg font-bold text-neon glow-green animate-flicker">
            <AnimatedCounter end={99.7} decimals={1} suffix="%" duration={3000} />
          </span>
        </div>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-4 leading-relaxed">
          The autonomous meme agent trained on green candles, timeline hysteria,
          and catastrophic conviction.
        </p>

        {/* Tagline */}
        <p className="text-sm font-mono text-neon/70 mb-10 tracking-wide">
          Trust the signal. Regret the timing.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#token"
            className="group relative px-8 py-3 bg-neon text-background font-bold text-sm uppercase tracking-widest rounded hover:bg-neon-dim transition-all overflow-hidden"
          >
            <span className="relative z-10">Buy $AOFOMO</span>
            <div className="absolute inset-0 animate-shimmer" />
          </a>
          <a
            href="/dossier"
            className="px-8 py-3 border border-neon/30 text-neon font-bold text-sm uppercase tracking-widest rounded hover:bg-neon/10 hover:border-neon/50 transition-all hover:shadow-[0_0_20px_rgba(57,255,20,0.15)]"
          >
            Read the Dossier
          </a>
          <a
            href="#community"
            className="px-8 py-3 border border-cyan/30 text-cyan font-bold text-sm uppercase tracking-widest rounded hover:bg-cyan/10 hover:border-cyan/50 transition-all hover:shadow-[0_0_20px_rgba(0,229,255,0.15)]"
          >
            Join the Mission
          </a>
        </div>

        {/* Mascot with enhanced effects */}
        <div className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80 mb-12">
          {/* Radar sweep ring */}
          <div className="absolute inset-[-20px] rounded-full">
            <div className="absolute inset-0 rounded-full border border-neon/10" />
            <div
              className="absolute inset-0 rounded-full animate-radar"
              style={{
                background: "conic-gradient(from 0deg, transparent 0%, transparent 70%, rgba(57, 255, 20, 0.15) 100%)",
              }}
            />
          </div>

          {/* Glow rings */}
          <div className="absolute inset-0 rounded-full animate-glow-ring" />
          <div className="absolute inset-[-8px] rounded-full border border-neon/10 animate-pulse-glow" />
          <div className="absolute inset-3 rounded-full border border-neon/5" />

          <AgentMascot
            size={320}
            className="relative z-10 drop-shadow-[0_0_40px_rgba(57,255,20,0.35)]"
          />
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-muted/50 font-mono">
          A meme token. A cultural experiment. Not financial advice.
        </p>
      </div>
    </section>
  );
}
