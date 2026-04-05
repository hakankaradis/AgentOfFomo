"use client";

import ScrollReveal from "./animations/ScrollReveal";

const SOCIALS = [
  {
    name: "X (Twitter)",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    href: "https://x.com/agentoffomo",
    description: "Follow for signal updates",
    accent: "neon",
  },
  {
    name: "Telegram",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
    href: "#",
    description: "Join mission briefings",
    accent: "cyan",
  },
  {
    name: "Discord",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
      </svg>
    ),
    href: "#",
    description: "HQ operations",
    accent: "cyan",
  },
];

export default function Community() {
  return (
    <section id="community" className="relative py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-4">
        <ScrollReveal direction="none">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-neon/20" />
            <span className="text-xs font-mono text-neon/60 uppercase tracking-[0.3em]">
              // recruitment
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-neon/20" />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="text-3xl sm:text-5xl font-black text-center mb-4 tracking-tight">
            Join the <span className="text-neon glow-green">Mission</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="text-center text-muted mb-4 max-w-xl mx-auto">
            AgentOfFomo is not built by spectators. It is powered by holders,
            memers, creators, editors, and terminally online operatives.
          </p>
          <p className="text-center text-sm text-neon/60 font-mono mb-12">
            Create. Post. Recruit. Spread the signal.
          </p>
        </ScrollReveal>

        {/* Social cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {SOCIALS.map((s, i) => (
            <ScrollReveal key={s.name} delay={i * 150}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-6 rounded-xl border border-card-border bg-card hover:border-neon/30 transition-all duration-500 hover:translate-y-[-4px] hover:glow-box"
              >
                <div className="text-muted group-hover:text-neon transition-all duration-300 mb-3 group-hover:scale-110">
                  {s.icon}
                </div>
                <h3 className="font-bold mb-1 group-hover:text-neon transition-colors duration-300">{s.name}</h3>
                <p className="text-xs text-muted">{s.description}</p>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
