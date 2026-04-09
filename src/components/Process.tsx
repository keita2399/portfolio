"use client";

import { motion } from "framer-motion";
import SectionCTA from "./SectionCTA";

const steps = [
  {
    phase: "01",
    title: "課題の整理",
    desc: "「こんなことがしたい」を聞き取り、業務の流れ・課題・ゴールを一緒に整理します。40年の業務システム経験から、実現可能性やリスクもこの段階で見極めます。",
    detail: "建設業マッチングSaaSの場合：電話・FAXによる土のマッチング業務をヒアリングし、Web化で解決すべき課題を特定",
  },
  {
    phase: "02",
    title: "企画・設計",
    desc: "業務フロー・画面構成・DB設計・API設計をまとめます。AIを設計パートナーとして活用し、短期間で精度の高い設計を行います。",
    detail: "24テーブル・40APIの設計を1週間で完了。地図検索・決済・LINE連携の技術選定も同時に実施",
  },
  {
    phase: "03",
    title: "実装・レビュー",
    desc: "AI協働開発で、一人でもチーム規模のスピードと品質を両立します。セキュリティレビュー・ドキュメント整合性チェックもAIと連携して実施。",
    detail: "当初見積もり136人日の機能を約3ヶ月で実装。HMAC認証・CSRF対策・XSS防止などセキュリティ対策も徹底",
  },
  {
    phase: "04",
    title: "本番稼働・運用",
    desc: "デプロイして終わりではなく、実際に使われる状態まで責任を持ちます。運用手順書・操作マニュアルの整備、改善対応も含めて対応します。",
    detail: "Vercel + Neonのサーバーレス構成で運用コストを最小化。cronによる自動通知・メンテナンスモードも実装",
  },
];

export default function Process() {
  return (
    <section id="process" style={{ padding: "100px 32px", position: "relative", overflow: "hidden" }}>
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(30,58,138,0.90) 50%, rgba(15,23,42,0.95) 100%)",
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
            // HOW I WORK
          </div>
          <h2 style={{ fontSize: "clamp(24px, 5vw, 42px)", fontWeight: 700, marginBottom: 12, color: "#fff" }}>
            アイデアから<span style={{ color: "#93c5fd" }}>プロダクト</span>へ
          </h2>
          <p className="font-serif-jp" style={{ fontSize: 13, color: "rgba(219,234,254,0.7)", lineHeight: 1.8, marginBottom: 48 }}>
            建設業向けマッチングSaaSを3ヶ月で本番稼働させた実例をもとに、進め方をご紹介します
          </p>
        </motion.div>

        <div style={{ display: "grid", gap: 0, position: "relative" }}>
          {/* Vertical line */}
          <div style={{
            position: "absolute", left: 23, top: 24, bottom: 24,
            width: 1, background: "linear-gradient(to bottom, #60a5fa, #2563eb, #1e3a8a)", zIndex: 0,
          }} />

          {steps.map((s, i) => (
            <motion.div
              key={s.phase}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: "flex", gap: 24, position: "relative", zIndex: 1, paddingBottom: i < steps.length - 1 ? 40 : 0 }}
            >
              {/* Phase circle */}
              <div style={{
                width: 48, height: 48, borderRadius: "50%", flexShrink: 0,
                background: "rgba(37,99,235,0.3)", border: "2px solid #60a5fa",
                backdropFilter: "blur(8px)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 14, fontWeight: 700, color: "#93c5fd",
              }}>
                {s.phase}
              </div>

              {/* Content */}
              <div style={{
                flex: 1,
                background: "rgba(255,255,255,0.07)", backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 4, padding: "20px 24px",
              }}>
                <div style={{ fontSize: 15, fontWeight: 600, color: "#fff", marginBottom: 8 }}>
                  {s.title}
                </div>
                <div className="font-serif-jp" style={{ fontSize: 13, color: "rgba(219,234,254,0.8)", lineHeight: 1.8, marginBottom: 12 }}>
                  {s.desc}
                </div>
                <div style={{
                  fontSize: 12, color: "rgba(147,197,253,0.6)", borderTop: "1px solid rgba(255,255,255,0.1)",
                  paddingTop: 10, lineHeight: 1.7,
                }}>
                  <span style={{ color: "#60a5fa", fontWeight: 600, marginRight: 8 }}>実例:</span>
                  {s.detail}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            marginTop: 48, padding: "20px 28px",
            background: "rgba(255,255,255,0.07)", backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderLeft: "3px solid #60a5fa",
            borderRadius: 4, textAlign: "center",
          }}
        >
          <div className="font-serif-jp" style={{ fontSize: 14, color: "rgba(219,234,254,0.9)", lineHeight: 1.8 }}>
            この全工程を<span style={{ color: "#93c5fd", fontWeight: 600 }}>一人で完結</span>できるのが、
            40年の業務経験 × AI協働開発の強みです
          </div>
        </motion.div>

        <SectionCTA />
      </div>
    </section>
  );
}
