"use client";

import { motion } from "framer-motion";
import Timeline3D from "./Timeline3D";

const entries = [
  {
    era: "1985–99",
    dotColor: "#60a5fa",
    title: "金融の基幹業務を支えるシステムを設計・構築",
    desc: "生命保険・人事管理など、止まることが許されない基幹システムを開発。業務の根幹を理解する力はこの時期に培われた。",
    tech: "COBOL / PL/I / IBM Assembler",
    showLine: true,
  },
  {
    era: "2000–19",
    dotColor: "#2563eb",
    title: "数万人が使う業務システムのPM・リーダー",
    desc: "証券・保険・B2B取引・ECなど多業種で、要件定義から本番リリースまでチームを率いて遂行。業務理解 × 技術判断の両輪で20年。",
    tech: "Java / Spring Boot / Oracle / AWS / Azure",
    showLine: true,
  },
  {
    era: "2020–",
    dotColor: "#1e3a8a",
    isAccent: true,
    title: "一人で事業を形にするスタイルを確立",
    desc: "AI協働開発により、企画段階から設計・実装・運用まで単独で完結。建設業向けSaaSを3ヶ月で本番稼働させた実績を持つ。",
    tech: "TypeScript / React / Next.js / AI協働開発",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" style={{ padding: "100px 32px", background: "#fff" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div style={{ fontSize: 10, color: "#2563eb", letterSpacing: 4, marginBottom: 12 }}>
            // 02 — CAREER
          </div>
          <h2 style={{ fontSize: "clamp(24px, 5vw, 42px)", fontWeight: 700, marginBottom: 40, color: "#1a1a1a" }}>
            Career
          </h2>
        </motion.div>

        {/* 3D Timeline Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 48 }}
        >
          <Timeline3D
            items={[
              { period: "1985–99",  title: "金融基幹システム構築",        description: "生命保険・人事管理など止まることが許されない基幹システムを開発。", tech: "COBOL / PL/I", index: 0 },
              { period: "2000–19",  title: "PM・リードエンジニア",         description: "証券・保険・B2B取引など多業種で要件定義から本番リリースまでを牽引。",  tech: "Java / Spring Boot / Oracle", index: 1 },
              { period: "2020–",    title: "AI協働フルスタック開発",       description: "Claude Codeを活用し、一人でチーム規模の成果を実現。",             tech: "TypeScript / Next.js / Claude", index: 2 },
            ]}
          />
        </motion.div>

        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div style={{
            position: "absolute", left: 90, top: 8, bottom: 0, width: 1,
            background: "linear-gradient(to bottom, #60a5fa, #2563eb, #1e3a8a)",
          }} />

          {entries.map((e, index) => (
            <motion.div
              key={e.era}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: "flex", gap: 0, marginBottom: 56, position: "relative" }}
            >
              {/* Era */}
              <div style={{ width: 90, flexShrink: 0, paddingTop: 2 }}>
                <div style={{ fontSize: 11, color: e.isAccent ? "#2563eb" : "#999", fontWeight: 700, letterSpacing: 1 }}>
                  {e.era}
                </div>
              </div>

              {/* Dot */}
              <div style={{ position: "relative", flexShrink: 0, marginRight: 28 }}>
                <div style={{
                  width: 14, height: 14, borderRadius: "50%",
                  background: e.dotColor,
                  border: "3px solid #fff",
                  boxShadow: e.isAccent ? `0 0 16px ${e.dotColor}66` : `0 0 0 1px ${e.dotColor}44`,
                  marginTop: 2,
                }} />
              </div>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "clamp(15px, 2.5vw, 20px)", fontWeight: 600, color: e.isAccent ? "#1e3a8a" : "#1a1a1a", marginBottom: 8 }}>
                  {e.title}
                </div>
                <div className="font-serif-jp" style={{ fontSize: 13, color: "#666", marginBottom: 10, lineHeight: 1.8, maxWidth: 560 }}>
                  {e.desc}
                </div>
                <div style={{ fontSize: 11, color: "#999", letterSpacing: 0.5 }}>
                  {e.tech}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
