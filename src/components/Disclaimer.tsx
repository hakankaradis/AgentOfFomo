"use client";

import ScrollReveal from "./animations/ScrollReveal";

export default function Disclaimer() {
  return (
    <section className="relative py-16 border-t border-card-border">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <ScrollReveal>
          <h3 className="text-sm font-mono text-muted/60 uppercase tracking-[0.3em] mb-6">
            Signal Integrity Notice
          </h3>

          <div className="space-y-4 text-sm text-muted/70 leading-relaxed">
            <p>
              AgentOfFomo is a meme token and cultural brand. It is speculative,
              volatile, and driven by community participation, not guaranteed
              outcomes. The value of $AOFOMO may go to zero. Do not spend more
              than you can afford to lose entirely.
            </p>
            <p>
              No promises of profit. No guaranteed returns. No fake utility
              claims. Nothing on this website constitutes financial, investment,
              or legal advice.
            </p>
            <p>
              The brand is built on humor, identity, internet culture, and
              transparent meme-first positioning.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 pt-8 border-t border-card-border flex flex-col items-center gap-4">
          <div className="flex items-center gap-4 text-xs font-mono text-muted/50">
            <a
              href="/terms"
              className="hover:text-neon transition-colors"
            >
              Terms of Service
            </a>
            <span>|</span>
            <a
              href="/privacy"
              className="hover:text-neon transition-colors"
            >
              Privacy Policy
            </a>
            <span>|</span>
            <a
              href="/dossier"
              className="hover:text-neon transition-colors"
            >
              The Dossier
            </a>
          </div>
          <p className="text-xs font-mono text-muted/40">
            &copy; {new Date().getFullYear()} AgentOfFomo. All signals reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
