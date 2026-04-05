"use client";

import ScrollReveal from "./animations/ScrollReveal";

const PHASES = [
  {
    phase: "01",
    title: "Activation",
    status: "current",
    items: [
      "Brand deployment",
      "Website online",
      "Dossier released",
      "Social channels opened",
      "First meme packs distributed",
    ],
  },
  {
    phase: "02",
    title: "Infiltration",
    status: "upcoming",
    items: [
      "Community engagement pushes",
      "Animated content drops",
      "Sticker packs",
      "Meme contests",
      "Leaderboard / mission roles",
    ],
  },
  {
    phase: "03",
    title: "Escalation",
    status: "upcoming",
    items: [
      "Fake signal terminal",
      "Meme generator",
      "Agent response bot",
      "Creator collaborations",
      "Expanded lore universe",
    ],
  },
  {
    phase: "04",
    title: "Full FOMO",
    status: "upcoming",
    items: [
      "Mini interactive missions",
      "Short-form animated episodes",
      "Merch",
      "Community classified files",
      "Cultural takeover attempt",
    ],
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-4">
        <ScrollReveal direction="none">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan/20" />
            <span className="text-xs font-mono text-cyan/60 uppercase tracking-[0.3em]">
              // timeline
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan/20" />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="text-3xl sm:text-5xl font-black text-center mb-16 tracking-tight">
            Mission <span className="text-cyan">Timeline</span>
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon/40 via-cyan/20 to-transparent" />

          <div className="space-y-12">
            {PHASES.map((phase, i) => (
              <ScrollReveal
                key={phase.phase}
                delay={i * 150}
                direction={i % 2 === 0 ? "left" : "right"}
              >
                <div
                  className={`relative flex flex-col sm:flex-row items-start gap-6 ${
                    i % 2 === 1 ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Dot on timeline */}
                  <div className={`absolute left-4 sm:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-neon bg-background z-10 mt-1.5 ${phase.status === "current" ? "animate-glow-ring" : ""}`} />

                  {/* Content card */}
                  <div
                    className={`ml-10 sm:ml-0 sm:w-[calc(50%-2rem)] ${
                      i % 2 === 0 ? "sm:mr-auto sm:pr-8" : "sm:ml-auto sm:pl-8"
                    }`}
                  >
                    <div className="p-6 rounded-xl border border-card-border bg-card hover:border-neon/20 transition-all duration-500 hover:translate-y-[-2px] group">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-mono px-2 py-1 rounded bg-neon/10 text-neon border border-neon/20">
                          Phase {phase.phase}
                        </span>
                        {phase.status === "current" && (
                          <span className="text-xs font-mono px-2 py-1 rounded bg-cyan/10 text-cyan border border-cyan/20 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse-glow" />
                            Active
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold mb-4 group-hover:text-neon transition-colors duration-300">
                        {phase.title}
                      </h3>
                      <ul className="space-y-2">
                        {phase.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-muted"
                          >
                            <span className="text-neon/60 mt-0.5">{">"}</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
