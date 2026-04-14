"use client";

import { motion } from "framer-motion";
import SectionCTA from "./SectionCTA";

const primarySkills = [
  { name: "AI活用 (Claude Code)", pct: 95 },
  { name: "TypeScript", pct: 85 },
  { name: "React / Next.js", pct: 85 },
  { name: "Node.js / Prisma", pct: 80 },
];

const experiencedSkills = [
  { name: "Java / Spring Boot", pct: 85 },
  { name: "PostgreSQL", pct: 80 },
  { name: "Python / FastAPI", pct: 70 },
  { name: "Figma（UIデザイン・仕様書作成）", pct: 70 },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "100px 32px", position: "relative", overflow: "hidden" }}>
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1625645262499-c2a1e2eb09a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, rgba(15,23,42,0.93) 0%, rgba(30,58,138,0.88) 50%, rgba(15,23,42,0.93) 100%)",
        }} />
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div style={{ fontSize: 10, color: "rgba(147,197,253,0.8)", letterSpacing: 4, marginBottom: 12 }}>
            // 03 — SKILLS
          </div>
          <h2 style={{ fontSize: "clamp(24px, 5vw, 42px)", fontWeight: 700, marginBottom: 60, color: "#fff" }}>
            Skills
          </h2>
        </motion.div>

        <div style={{ maxWidth: 600 }}>
          {/* Primary */}
          <div style={{ marginBottom: 40 }}>
            <div style={{ fontSize: 13, color: "#93c5fd", letterSpacing: 1, marginBottom: 24, fontWeight: 600 }}>Primary</div>
            <div style={{ display: "grid", gap: 20 }}>
              {primarySkills.map((s, index) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                    <span style={{ fontSize: 13, color: "#fff" }}>{s.name}</span>
                    <span style={{ fontSize: 10, color: "#93c5fd", letterSpacing: 0.5 }}>主力</span>
                  </div>
                  <div style={{ height: 4, background: "rgba(255,255,255,0.1)", borderRadius: 2, overflow: "hidden" }}>
                    <motion.div
                      style={{ height: "100%", background: "linear-gradient(to right, #60a5fa, #38bdf8)", borderRadius: 2 }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.pct}%` }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 1, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experienced */}
          <div style={{ marginBottom: 40 }}>
            <div style={{ fontSize: 13, color: "rgba(203,213,225,0.8)", letterSpacing: 1, marginBottom: 24, fontWeight: 600 }}>Experienced</div>
            <div style={{ display: "grid", gap: 20 }}>
              {experiencedSkills.map((s, index) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                    <span style={{ fontSize: 13, color: "#cbd5e1" }}>{s.name}</span>
                    <span style={{ fontSize: 10, color: "#94a3b8", letterSpacing: 0.5 }}>実務経験</span>
                  </div>
                  <div style={{ height: 4, background: "rgba(255,255,255,0.1)", borderRadius: 2, overflow: "hidden" }}>
                    <motion.div
                      style={{ height: "100%", background: "linear-gradient(to right, #94a3b8, #cbd5e1)", borderRadius: 2 }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.pct}%` }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 1, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Legacy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              padding: "16px 24px", marginBottom: 16,
              background: "rgba(37,99,235,0.2)", border: "1px solid rgba(96,165,250,0.3)",
              borderRadius: 4, backdropFilter: "blur(8px)",
              display: "flex", alignItems: "baseline", gap: 16,
            }}
          >
            <div style={{ fontSize: 11, color: "#93c5fd", letterSpacing: 1, flexShrink: 0, fontWeight: 600 }}>LEGACY</div>
            <div className="font-serif-jp" style={{ fontSize: 12, color: "rgba(219,234,254,0.8)", lineHeight: 1.8 }}>
              COBOL / PL/I / RPG / VB6 / Fortran — レガシーシステム移行案件で、既存コードの読解・仕様理解に直接活かせる知見（13言語・44万行超の変換実績）
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              padding: "20px 24px",
              background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
              borderLeft: "3px solid #60a5fa",
              borderRadius: 4, backdropFilter: "blur(8px)",
            }}
          >
            <div style={{ fontSize: 11, color: "#93c5fd", marginBottom: 8, letterSpacing: 1 }}>NOTE</div>
            <div className="font-serif-jp" style={{ fontSize: 12, color: "rgba(219,234,254,0.8)", lineHeight: 1.8 }}>
              AIエージェント（Claude Code）との協働開発を標準ワークフローとし、設計・実装・レビュー・ドキュメント作成を一人で完結。直近ではSaaSプラットフォームを3ヶ月で本番稼働させた実績があります。40年の業務理解力 × AIの開発速度で、一人でチーム規模の成果を出すスタイルです。
            </div>
          </motion.div>
        </div>

        <SectionCTA />
      </div>
    </section>
  );
}
