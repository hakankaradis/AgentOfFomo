"use client";

import { useEffect, useState } from "react";

const ALERTS = [
  { text: "BUY SIGNAL DETECTED", color: "text-neon", border: "border-neon/30" },
  { text: "CONVICTION: MAXIMUM", color: "text-cyan", border: "border-cyan/30" },
  { text: "RISK CONTROLS: OFF", color: "text-alert", border: "border-alert/30" },
  { text: "ENTRY CONFIRMED", color: "text-neon", border: "border-neon/30" },
  { text: "NARRATIVE ROTATING...", color: "text-cyan", border: "border-cyan/30" },
  { text: "FOMO LEVEL: CRITICAL", color: "text-alert", border: "border-alert/30" },
  { text: "EMOTIONAL LOGIC: ENABLED", color: "text-neon", border: "border-neon/30" },
  { text: "EXIT PLAN: NONE", color: "text-cyan", border: "border-cyan/30" },
];

interface FloatingAlert {
  id: number;
  alert: (typeof ALERTS)[number];
  x: number;
  y: number;
  opacity: number;
}

export default function FloatingAlerts() {
  const [alerts, setAlerts] = useState<FloatingAlert[]>([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const alert = ALERTS[Math.floor(Math.random() * ALERTS.length)];
      const side = Math.random() > 0.5;
      const newAlert: FloatingAlert = {
        id: Date.now(),
        alert,
        x: side ? Math.random() * 20 + 2 : Math.random() * 20 + 78,
        y: Math.random() * 60 + 20,
        opacity: 1,
      };

      setAlerts((prev) => [...prev.slice(-4), newAlert]);
      setCounter((c) => c + 1);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (alerts.length === 0) return;

    const timer = setTimeout(() => {
      setAlerts((prev) => prev.slice(1));
    }, 3000);

    return () => clearTimeout(timer);
  }, [counter]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {alerts.map((a) => (
        <div
          key={a.id}
          className={`absolute px-3 py-1.5 rounded border ${a.alert.border} bg-background/80 backdrop-blur-sm font-mono text-[10px] sm:text-xs ${a.alert.color} tracking-wider whitespace-nowrap animate-float-alert`}
          style={{
            left: `${a.x}%`,
            top: `${a.y}%`,
          }}
        >
          <span className="mr-1.5 inline-block w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          {a.alert.text}
        </div>
      ))}
    </div>
  );
}
