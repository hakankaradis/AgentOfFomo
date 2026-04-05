import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AgentOfFomo | Autonomous Meme Agent for Maximum Emotional Entry Timing",
  description:
    "AgentOfFomo is an AI-themed meme brand and token built around the universal crypto instinct to buy too late, believe too hard, and call it strategy. $AOFOMO on Solana.",
  keywords: ["AgentOfFomo", "AOFOMO", "meme token", "Solana", "crypto", "FOMO", "AI agent"],
  openGraph: {
    title: "AgentOfFomo | $AOFOMO",
    description: "Trust the signal. Regret the timing.",
    type: "website",
    url: "https://agentoffomo.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "AgentOfFomo | $AOFOMO",
    description: "Trust the signal. Regret the timing.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
