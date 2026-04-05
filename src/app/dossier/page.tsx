import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "The Dossier | AgentOfFomo",
  description:
    "Classified briefing document. Autonomous Meme Intelligence for Maximum Emotional Entry Timing.",
};

const SECTIONS = [
  {
    id: "executive-summary",
    title: "1. Executive Summary",
    content: (
      <>
        <p>
          AgentOfFomo is an AI-themed meme token and internet-native cultural
          brand built around one of the most universal experiences in crypto:
          fear of missing out.
        </p>
        <p>
          Rather than pretending to be a serious infrastructure protocol,
          AgentOfFomo embraces its role as a meme-first project with strong
          visual identity, lore, humor, and community participation.
        </p>
        <p>The token serves as the central signal asset for a brand universe built on:</p>
        <ul>
          <li>Satire</li>
          <li>Identity</li>
          <li>Viral content</li>
          <li>Community missions</li>
          <li>Internet coordination through memes</li>
        </ul>
      </>
    ),
  },
  {
    id: "the-problem",
    title: "2. The Problem",
    content: (
      <>
        <p>
          Markets move quickly. Attention fragments. Narratives shift hourly.
          Across every cycle, users face the same emotional trigger: the fear
          that the move is happening without them.
        </p>
        <p>No project has successfully captured the internal voice that says:</p>
        <ul>
          <li>Buy now</li>
          <li>Think later</li>
          <li>This breakout is different</li>
          <li>The chart still has room</li>
        </ul>
        <p className="text-foreground font-semibold">
          That voice is not a bug. It is a force.
        </p>
      </>
    ),
  },
  {
    id: "the-solution",
    title: "3. The Solution",
    content: (
      <>
        <p>
          AgentOfFomo transforms that force into a shared cultural identity.
        </p>
        <p>
          By turning FOMO into a character, a mission framework, and a meme
          community, AgentOfFomo creates a brand people can participate in,
          remix, and spread.
        </p>
        <p className="text-foreground font-semibold">
          It is not a promise engine. It is a meme community.
        </p>
      </>
    ),
  },
  {
    id: "brand-philosophy",
    title: "4. Brand Philosophy",
    content: (
      <>
        <p>AgentOfFomo exists at the intersection of:</p>
        <ul>
          <li>AI aesthetics</li>
          <li>Meme culture</li>
          <li>Trading psychology</li>
          <li>Internet humor</li>
          <li>Community creativity</li>
        </ul>
        <p>
          The project is built on self-awareness. It does not pretend to
          eliminate emotion. It celebrates it, satirizes it, and packages it
          into a recognizable digital identity.
        </p>
      </>
    ),
  },
  {
    id: "project-components",
    title: "5. Project Components",
    content: (
      <>
        <p>Active and planned brand elements (none of these are guaranteed to affect token value):</p>
        <ul>
          <li>$AOFOMO token on Solana</li>
          <li>Website and landing page</li>
          <li>The Dossier (this document)</li>
          <li>Meme asset library</li>
          <li>Community channels (X, Telegram, Discord)</li>
          <li>Sticker packs</li>
          <li>Fake signal terminal</li>
          <li>Lore drops</li>
          <li>Meme generator</li>
          <li>Agent response bot for social content</li>
        </ul>
      </>
    ),
  },
  {
    id: "tokenomics",
    title: "6. Tokenomics",
    content: (
      <>
        <p>$AOFOMO follows a transparent, simple allocation model:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
          {[
            { label: "Community Reserve", pct: "40%", color: "border-neon/40" },
            { label: "Liquidity Shield", pct: "25%", color: "border-cyan/40" },
            { label: "Mission Operations", pct: "15%", color: "border-yellow-400/40" },
            { label: "Signal Expansion", pct: "10%", color: "border-purple-400/40" },
            { label: "Intel Treasury", pct: "10%", color: "border-alert/40" },
          ].map((a) => (
            <div
              key={a.label}
              className={`flex items-center justify-between p-3 rounded border ${a.color} bg-card font-mono text-sm`}
            >
              <span className="text-muted">{a.label}</span>
              <span className="text-foreground font-bold">{a.pct}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted">
          Token structure is designed to be transparent, simple, and easy for
          users to understand. Full wallet addresses and authority status will
          be published at launch.
        </p>
      </>
    ),
  },
  {
    id: "launch-principles",
    title: "7. Launch Principles",
    content: (
      <ul>
        <li>Meme-first positioning</li>
        <li>Transparent tokenomics and wallet separation</li>
        <li>No fake promises or inflated utility claims</li>
        <li>Clear mint address publication</li>
        <li>Visible liquidity setup</li>
        <li>Public branding consistency</li>
        <li>Strong social identity from day one</li>
      </ul>
    ),
  },
  {
    id: "risks",
    title: "8. Risks",
    content: (
      <>
        <p>
          AgentOfFomo is a speculative meme token. Participation involves
          substantial risk, including:
        </p>
        <ul>
          <li>Price volatility and potential loss of value</li>
          <li>Changing market attention and narrative shifts</li>
          <li>Shifting community sentiment</li>
          <li>Regulatory uncertainty</li>
        </ul>
        <p className="text-foreground font-semibold">
          Nothing in this document constitutes financial advice or a guarantee
          of future performance.
        </p>
        <p>
          The project&apos;s long-term relevance depends on continued community
          participation, cultural resonance, and transparent execution.
        </p>
      </>
    ),
  },
  {
    id: "legal",
    title: "9. Legal Notice",
    content: (
      <>
        <ul>
          <li>$AOFOMO does not represent ownership in any company</li>
          <li>No promises of profit or guaranteed returns</li>
          <li>No implied appreciation or income guarantees</li>
          <li>Future community efforts are not guaranteed drivers of token price</li>
          <li>This is a meme token and cultural brand, not a security</li>
        </ul>
        <p className="text-sm text-muted mt-4">
          This project&apos;s messaging has been designed with care. However, meme
          coins may still require fact-specific legal analysis depending on
          jurisdiction and distribution. Consult qualified legal counsel before
          making financial decisions.
        </p>
      </>
    ),
  },
  {
    id: "closing",
    title: "10. Closing Statement",
    content: (
      <div className="space-y-3">
        <p>The market runs on narrative.</p>
        <p>Narrative runs on emotion.</p>
        <p>Emotion runs on FOMO.</p>
        <p className="text-neon font-bold text-xl glow-green pt-4">
          AgentOfFomo is not here to suppress the signal. It is the signal.
        </p>
      </div>
    ),
  },
];

export default function DossierPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4">
          {/* Cover */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-alert/20 bg-alert/5 mb-6">
              <span className="w-2 h-2 rounded-full bg-alert animate-pulse-glow" />
              <span className="text-xs font-mono text-alert uppercase tracking-widest">
                Classified Document
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-4">
              THE <span className="text-neon glow-green">DOSSIER</span>
            </h1>
            <p className="text-muted text-lg max-w-xl mx-auto">
              Autonomous Meme Intelligence for Maximum Emotional Entry Timing
            </p>
            <div className="mt-6 h-px w-32 mx-auto bg-gradient-to-r from-transparent via-neon/40 to-transparent" />
          </div>

          {/* Table of contents */}
          <div className="rounded-xl border border-card-border bg-card p-6 mb-16">
            <h2 className="text-sm font-mono text-neon/60 uppercase tracking-widest mb-4">
              Contents
            </h2>
            <nav className="space-y-2">
              {SECTIONS.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="block text-sm text-muted hover:text-neon transition-colors font-mono"
                >
                  {s.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Sections */}
          <div className="space-y-16">
            {SECTIONS.map((s) => (
              <section key={s.id} id={s.id}>
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  {s.title}
                </h2>
                <div className="prose-custom space-y-4 text-muted leading-relaxed [&_ul]:space-y-2 [&_ul]:pl-4 [&_li]:flex [&_li]:items-start [&_li]:gap-2 [&_li]:before:content-['>'] [&_li]:before:text-neon/60 [&_li]:before:mt-0.5 [&_li]:before:shrink-0">
                  {s.content}
                </div>
              </section>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-20 pt-8 border-t border-card-border text-center">
            <p className="text-xs font-mono text-muted/40">
              AgentOfFomo — The Dossier — v1.0
            </p>
            <a
              href="/"
              className="inline-block mt-4 text-sm text-neon/60 hover:text-neon font-mono transition-colors"
            >
              &larr; Return to Mission HQ
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
