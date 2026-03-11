"use client";

import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) setVisible(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 transition-opacity duration-500"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div className="text-[10px] text-gray-400 tracking-[2px]">SCROLL DOWN</div>
      <svg width="20" height="28" viewBox="0 0 20 28" fill="none" className="mt-1">
        <rect x="1" y="1" width="18" height="26" rx="9" stroke="#bbb" strokeWidth="1.5" />
        <circle cx="10" cy="8" r="2" fill="#c8860a">
          <animate attributeName="cy" values="8;18;8" dur="2s" repeatCount="indefinite" />
        </circle>
      </svg>
      <div className="mt-1 text-gray-400 text-lg">↓</div>
    </div>
  );
}
