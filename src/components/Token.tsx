"use client";

import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./animations/ScrollReveal";

const ALLOCATIONS = [
  { label: "Community Reserve", pct: 40, color: "bg-neon", barColor: "#39ff14" },
  { label: "Liquidity Shield", pct: 25, color: "bg-cyan", barColor: "#00e5ff" },
  { label: "Mission Operations", pct: 15, color: "bg-yellow-400", barColor: "#facc15" },
  { label: "Signal Expansion", pct: 10, color: "bg-purple-400", barColor: "#c084fc" },
  { label: "Intel Treasury", pct: 10, color: "bg-alert", barColor: "#ff3b3b" },
];

function AnimatedBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex rounded-full overflow-hidden h-4 mb-8 border border-card-border">
      {ALLOCATIONS.map((a, i) => (
        <div
          key={a.label}
          className={`${a.color} transition-all ease-out`}
          style={{
            width: visible ? `${a.pct}%` : "0%",
            transitionDuration: "1200ms",
            transitionDelay: `${i * 150}ms`,
          }}
          title={`${a.label}: ${a.pct}%`}
        />
      ))}
    </div>
  );
}

function AllocationCard({ alloc, index }: { alloc: typeof ALLOCATIONS[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative flex items-center gap-3 p-3 rounded-lg border border-card-border bg-card overflow-hidden group hover:border-white/10 transition-all duration-300"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(20px)",
        transition: `opacity 0.5s ease-out ${index * 100}ms, transform 0.5s ease-out ${index * 100}ms`,
      }}
    >
      {/* Animated fill background */}
      <div
        className="absolute inset-y-0 left-0 opacity-[0.07] transition-all duration-1000 ease-out"
        style={{
          width: visible ? `${alloc.pct}%` : "0%",
          backgroundColor: alloc.barColor,
          transitionDelay: `${index * 100 + 500}ms`,
        }}
      />
      <div className={`w-3 h-3 rounded-full ${alloc.color} shrink-0 relative z-10`} />
      <div className="relative z-10">
        <div className="text-xs text-muted">{alloc.label}</div>
        <div className="text-lg font-bold font-mono">{alloc.pct}%</div>
      </div>
    </div>
  );
}

export default function Token() {
  return (
    <section id="token" className="relative py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-4">
        <ScrollReveal direction="none">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-neon/20" />
            <span className="text-xs font-mono text-neon/60 uppercase tracking-[0.3em]">
              // mission asset
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-neon/20" />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="text-3xl sm:text-5xl font-black text-center mb-4 tracking-tight">
            Mission Asset:{" "}
            <span className="text-neon glow-green">$AOFOMO</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="text-center text-muted mb-12 max-w-2xl mx-auto space-y-4">
            <p>
              $AOFOMO is the meme token of the AgentOfFomo brand.
            </p>
            <p className="text-sm">
              It does not promise enlightenment. It does not eliminate volatility.
              It does not fix human behavior. It simply connects a community
              around one shared joke:
            </p>
            <p className="text-foreground font-bold text-lg">
              We all know the feeling.
            </p>
          </div>
        </ScrollReveal>

        {/* Mint address box */}
        <ScrollReveal delay={200}>
          <div className="rounded-xl border border-neon/20 bg-card p-6 mb-12 glow-box hover:shadow-[0_0_30px_rgba(57,255,20,0.2)] transition-shadow duration-500">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-mono">
              <div>
                <span className="text-muted">Chain:</span>{" "}
                <span className="text-foreground">Solana</span>
              </div>
              <div>
                <span className="text-muted">Ticker:</span>{" "}
                <span className="text-neon">$AOFOMO</span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-muted">Mint Address:</span>{" "}
                <span className="text-cyan break-all">C3B5ncGtTks7VmeyuenjWxY3kwYJnt2WnAbn4nvs2F1Q</span>
              </div>
              <div>
                <span className="text-muted">Status:</span>{" "}
                <span className="text-neon">Live — Mint & Freeze Authority Revoked</span>
              </div>
              <div>
                <span className="text-muted">Liquidity:</span>{" "}
                <span className="text-foreground">Raydium (at launch)</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Tokenomics */}
        <ScrollReveal delay={300}>
          <h3 className="text-xl font-bold text-center mb-8 font-mono text-foreground">
            Token Allocation
          </h3>
        </ScrollReveal>

        {/* Animated bar visualization */}
        <AnimatedBar />

        {/* Legend */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {ALLOCATIONS.map((a, i) => (
            <AllocationCard key={a.label} alloc={a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
