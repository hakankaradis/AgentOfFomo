"use client";

import ScrollReveal from "./animations/ScrollReveal";

const CAPABILITIES = [
  {
    icon: "📡",
    title: "Top Signal Detection",
    description:
      "Identifies peak emotional entry opportunities with terrifying precision.",
    accent: "neon",
  },
  {
    icon: "⚡",
    title: "Conviction Amplification",
    description:
      "Transforms hesitation into immediate and poorly timed confidence.",
    accent: "cyan",
  },
  {
    icon: "🔇",
    title: "Risk Control Suppression",
    description:
      "Temporarily mutes rational thought during high-velocity narrative events.",
    accent: "alert",
  },
  {
    icon: "🔄",
    title: "Narrative Rotation Engine",
    description:
      "Rapidly adapts from AI to memes to cats to macro to whatever is pumping.",
    accent: "neon",
  },
  {
    icon: "🚪",
    title: "Exit Liquidity Forecasting",
    description:
      "Lets you know, deep in your soul, that someone is exit liquidity. Possibly you.",
    accent: "cyan",
  },
  {
    icon: "👁",
    title: "24/7 FOMO Monitoring",
    description:
      "Continuously scans the timeline for opportunity, hype, and regrettable enthusiasm.",
    accent: "alert",
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal direction="none">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan/20" />
            <span className="text-xs font-mono text-cyan/60 uppercase tracking-[0.3em]">
              // capabilities
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan/20" />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="text-3xl sm:text-5xl font-black text-center mb-4 tracking-tight">
            Core <span className="text-cyan">Systems</span>
          </h2>
          <p className="text-center text-muted mb-16 max-w-xl mx-auto">
            Advanced emotional intelligence modules deployed for maximum conviction
            at minimum accuracy.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES.map((cap, i) => (
            <ScrollReveal key={cap.title} delay={i * 100}>
              <div
                className={`group relative p-6 rounded-xl border border-card-border bg-card hover:border-${cap.accent}/30 transition-all duration-500 hover:translate-y-[-4px]`}
                style={{
                  // Inline style for dynamic hover glow since Tailwind can't do dynamic classes
                }}
              >
                {/* Hover glow background */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-b from-${cap.accent}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className="text-3xl mb-4 transition-transform duration-300 group-hover:scale-110 inline-block">
                    {cap.icon}
                  </div>
                  <h3 className={`text-lg font-bold mb-2 text-foreground group-hover:text-${cap.accent} transition-colors duration-300`}>
                    {cap.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {cap.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-3/4 bg-gradient-to-r from-transparent via-${cap.accent}/50 to-transparent transition-all duration-500`} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
