"use client";

import { useEffect, useState } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchClassName?: string;
  as?: "h1" | "h2" | "h3" | "span" | "div";
}

export default function GlitchText({
  text,
  className = "",
  glitchClassName = "",
  as: Tag = "span",
}: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const scheduleGlitch = () => {
      const delay = Math.random() * 5000 + 3000;
      return setTimeout(() => {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 200);
        timerId = scheduleGlitch();
      }, delay);
    };

    let timerId = scheduleGlitch();
    return () => clearTimeout(timerId);
  }, []);

  return (
    <Tag className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      {isGlitching && (
        <>
          <span
            className={`absolute inset-0 z-20 ${glitchClassName}`}
            style={{
              clipPath: "inset(20% 0 40% 0)",
              transform: "translateX(-3px)",
              color: "#00e5ff",
              opacity: 0.8,
            }}
          >
            {text}
          </span>
          <span
            className={`absolute inset-0 z-20 ${glitchClassName}`}
            style={{
              clipPath: "inset(60% 0 10% 0)",
              transform: "translateX(3px)",
              color: "#ff3b3b",
              opacity: 0.8,
            }}
          >
            {text}
          </span>
        </>
      )}
    </Tag>
  );
}
