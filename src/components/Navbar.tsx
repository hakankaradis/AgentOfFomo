"use client";

import { useState } from "react";
import AgentLogo from "./animations/AgentLogo";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#lore", label: "Lore" },
  { href: "#token", label: "Token" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#community", label: "Community" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <AgentLogo size={32} />
            <span className="text-neon font-bold text-lg tracking-wider font-mono">
              AGENT<span className="text-foreground">OF</span>FOMO
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-neon transition-colors font-mono uppercase tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#token"
              className="ml-2 px-4 py-2 bg-neon/10 border border-neon/30 text-neon text-sm font-mono uppercase tracking-wide rounded hover:bg-neon/20 transition-colors"
            >
              Buy $AOFOMO
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-muted hover:text-neon transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-card-border bg-background/95 backdrop-blur-md">
          <div className="px-4 py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-sm text-muted hover:text-neon transition-colors font-mono uppercase tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#token"
              onClick={() => setOpen(false)}
              className="block px-4 py-2 bg-neon/10 border border-neon/30 text-neon text-sm font-mono uppercase tracking-wide rounded text-center"
            >
              Buy $AOFOMO
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
