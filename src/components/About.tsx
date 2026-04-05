"use client";

import Image from "next/image";
import ScrollReveal from "./animations/ScrollReveal";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section label */}
        <ScrollReveal direction="none">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-neon/20" />
            <span className="text-xs font-mono text-neon/60 uppercase tracking-[0.3em]">
              // classified
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-neon/20" />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="text-3xl sm:text-5xl font-black text-center mb-12 tracking-tight">
            The Entity Has Been{" "}
            <span className="text-neon glow-green">Activated</span>
          </h2>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Mascot portrait */}
          <ScrollReveal direction="left" delay={200}>
            <div className="shrink-0 relative group">
              <div className="absolute inset-0 rounded-xl bg-neon/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image
                src="/images/mascot-portrait.png"
                alt="AgentOfFomo"
                width={300}
                height={450}
                className="relative rounded-xl border border-card-border drop-shadow-[0_0_20px_rgba(57,255,20,0.15)] transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </ScrollReveal>

          {/* Text */}
          <div className="space-y-6 text-muted text-lg leading-relaxed">
            <ScrollReveal delay={100}>
              <p>
                AgentOfFomo is an AI-themed meme token born from the most powerful
                force in crypto:{" "}
                <span className="text-cyan font-semibold">irrational urgency</span>.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p>
                After processing millions of chart screenshots, timeline posts, fake
                breakouts, and{" "}
                <span className="italic">&ldquo;bro trust me&rdquo;</span> messages,
                the agent reached a single conclusion:
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <blockquote className="border-l-2 border-neon/40 pl-6 py-2 text-foreground text-xl font-semibold">
                Everyone wants in, but always slightly too late.
              </blockquote>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <p>
                AgentOfFomo turns that feeling into a brand, a character, and a
                community mission.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
