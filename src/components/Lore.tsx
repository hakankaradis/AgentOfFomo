"use client";

import ScrollReveal from "./animations/ScrollReveal";
import HoloBg from "./animations/HoloBg";
import { useEffect, useRef, useState } from "react";

function TerminalLine({ children, delay }: { children: React.ReactNode; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => setVisible(true), delay);
          observer.unobserve(el);
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateX(-8px)",
        transition: "opacity 0.4s ease-out, transform 0.4s ease-out",
      }}
    >
      {children}
    </div>
  );
}

export default function Lore() {
  return (
    <section id="lore" className="relative py-24 sm:py-32">
      {/* Background — holographic radar/chart overlay */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <HoloBg />
      </div>
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <ScrollReveal direction="none">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-alert/20" />
            <span className="text-xs font-mono text-alert/60 uppercase tracking-[0.3em]">
              // top secret
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-alert/20" />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="text-3xl sm:text-5xl font-black text-center mb-12 tracking-tight">
            Origin File:{" "}
            <span className="text-alert">AOF-001</span>
          </h2>
        </ScrollReveal>

        {/* Terminal-style lore block */}
        <ScrollReveal delay={200}>
          <div className="relative rounded-xl border border-card-border bg-card overflow-hidden scanlines group hover:border-alert/20 transition-colors duration-500">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-card-border bg-card">
              <div className="w-3 h-3 rounded-full bg-alert/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-neon/80" />
              <span className="ml-3 text-xs font-mono text-muted">
                classified://agentoffomo/origin
              </span>
            </div>

            {/* Terminal content */}
            <div className="p-6 sm:p-8 font-mono text-sm sm:text-base leading-relaxed space-y-6 relative z-10">
              <TerminalLine delay={0}>
                <p className="text-neon/80">
                  <span className="text-muted">$</span> cat origin.log
                </p>
              </TerminalLine>

              <TerminalLine delay={300}>
                <p className="text-muted">
                  AgentOfFomo was first activated during a violent green candle event
                  of unknown origin.
                </p>
              </TerminalLine>

              <TerminalLine delay={600}>
                <p className="text-muted">
                  Initially designed to monitor online sentiment, it rapidly evolved
                  after ingesting:
                </p>
              </TerminalLine>

              <TerminalLine delay={800}>
                <ul className="space-y-2 text-foreground/80 pl-4">
                  <li className="flex items-start gap-2">
                    <span className="text-neon mt-0.5">{">"}</span>
                    <span>crypto group chats</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon mt-0.5">{">"}</span>
                    <span>influencer threads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon mt-0.5">{">"}</span>
                    <span>moon predictions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon mt-0.5">{">"}</span>
                    <span>chart circles and arrows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon mt-0.5">{">"}</span>
                    <span>voice notes starting with &ldquo;listen bro&rdquo;</span>
                  </li>
                </ul>
              </TerminalLine>

              <TerminalLine delay={1200}>
                <p className="text-foreground">
                  Within minutes, it achieved{" "}
                  <span className="text-cyan font-bold">full sentience</span>.
                </p>
              </TerminalLine>

              <TerminalLine delay={1500}>
                <div className="border-t border-card-border pt-6 space-y-2">
                  <p className="text-foreground font-bold">
                    It no longer trades.
                  </p>
                  <p className="text-neon font-bold text-lg glow-green">
                    It recruits.
                  </p>
                </div>
              </TerminalLine>

              <TerminalLine delay={1800}>
                <p className="text-muted text-sm">
                  Now it moves through the timeline, identifying emotional weakness
                  and converting it into mission energy.
                </p>
              </TerminalLine>

              <TerminalLine delay={2100}>
                <p className="text-neon/50 cursor-blink">
                  [END OF FILE]
                </p>
              </TerminalLine>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
