"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ScrollIndicator from "./ScrollIndicator";
import ParticleField from "./ParticleField";

function StatCounter({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let startTime: number;
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / (duration * 1000), 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function Hero() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "80px 32px 40px", position: "relative", overflow: "hidden" }}>
      {/* Three.js Particle Field Background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, background: "#000" }}>
        <ParticleField />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, rgba(15,23,42,0.80) 0%, rgba(30,58,138,0.65) 50%, rgba(15,23,42,0.80) 100%)",
          zIndex: 1,
        }} />
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1, width: "100%" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div style={{ fontSize: 11, color: "rgba(147,197,253,0.8)", letterSpacing: 4, marginBottom: 16 }}>
            // 業務委託 / 副業 / 正社員 応募受付中
          </div>

          <h1 style={{ fontSize: "clamp(28px, 6vw, 56px)", fontWeight: 700, lineHeight: 1.15, marginBottom: 20, color: "#fff" }}>
            AI × 40年の業務経験で
            <br />
            <span style={{ color: "#93c5fd" }}>開発チームを即戦力で加速します</span>
          </h1>

          <div className="font-serif-jp" style={{ fontSize: "clamp(13px, 2vw, 17px)", color: "rgba(219,234,254,0.85)", marginBottom: 32, lineHeight: 1.9, maxWidth: 560, fontWeight: 300 }}>
            Claude API・RAG・LangChainを実装で使えるフルスタックエンジニア。<br />
            AIエージェント設計から本番稼働まで、一人でチーム規模の成果を出します。
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 40 }}>
            {["AI / LLM 実装経験", "フルスタック", "リモート対応", "即戦力"].map((t) => (
              <span key={t} style={{
                fontSize: 11, padding: "5px 14px",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: 2, color: "rgba(255,255,255,0.8)",
                letterSpacing: 0.5, backdropFilter: "blur(4px)",
                background: "rgba(255,255,255,0.05)",
              }}>
                {t}
              </span>
            ))}
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 48 }}>
            <a
              href="/resume"
              style={{
                padding: "13px 32px", background: "#2563eb", color: "#fff",
                borderRadius: 2, fontSize: 13, letterSpacing: 2,
                cursor: "pointer", fontWeight: 700, textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#1d4ed8"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#2563eb"; }}
            >
              経歴書を見る
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, "#contact")}
              style={{
                padding: "13px 32px", background: "transparent", color: "#fff",
                border: "2px solid rgba(255,255,255,0.4)", borderRadius: 2, fontSize: 13, letterSpacing: 2,
                cursor: "pointer", fontWeight: 700, textDecoration: "none",
                transition: "all 0.2s", backdropFilter: "blur(4px)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
            >
              連絡する →
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 16, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          {[
            { value: 136, suffix: "人日", label: "通常見積もりの案件を", sub: "2週間強で一人実装（約10倍速）", highlight: true },
            { value: 44, suffix: "万行超", label: "13言語の", sub: "レガシー変換実績", highlight: false },
            { value: 40, suffix: "年", label: "業務システム", sub: "開発経験", highlight: false },
          ].map(({ value, suffix, label, sub, highlight }) => (
            <div key={label} style={{
              background: highlight ? "rgba(37,99,235,0.15)" : "rgba(255,255,255,0.05)",
              backdropFilter: "blur(8px)",
              border: highlight ? "1px solid rgba(37,99,235,0.5)" : "1px solid rgba(255,255,255,0.1)",
              borderRadius: 4, padding: "20px 24px",
            }}>
              <div style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 800, color: highlight ? "#93c5fd" : "#fff", lineHeight: 1, marginBottom: 8 }}>
                <StatCounter end={value} suffix={suffix} />
              </div>
              <div style={{ fontSize: 11, color: "rgba(147,197,253,0.8)", lineHeight: 1.6 }}>
                {label}<br />{sub}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Zenn link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ marginTop: 36, display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}
        >
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", letterSpacing: 1 }}>ARTICLES</span>
          <div style={{ width: 24, height: 1, background: "rgba(255,255,255,0.2)" }} />
          <a
            href="https://zenn.dev/keita2399"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              fontSize: 12, color: "rgba(255,255,255,0.6)", textDecoration: "none",
              padding: "6px 16px", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 2,
              transition: "all 0.3s ease", backdropFilter: "blur(4px)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#93c5fd";
              e.currentTarget.style.color = "#93c5fd";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
              e.currentTarget.style.color = "rgba(255,255,255,0.6)";
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
            Zenn で技術記事を書いています
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
