"use client";

import { motion } from "framer-motion";
import SectionCTA from "./SectionCTA";

const serviceTypes = [
  {
    title: "「こんなサービスを作りたい」を形にする",
    desc: "アイデア段階から入り、要件を一緒に整理して、動くシステムとして本番稼働させます。SaaS・業務アプリ・管理画面など。",
    example: "例: 建設業向けマッチングSaaSを企画から3ヶ月で本番稼働",
    icon: "01",
  },
  {
    title: "古いシステムを、今の技術で作り直す",
    desc: "COBOL・VB6・RPG等の既存システムを、仕様書がなくてもソースコードから業務を読み解き、モダンWebに移行します。",
    example: "例: 10言語・41万行のレガシーコードをモダン化",
    icon: "02",
  },
  {
    title: "業務の手作業を、AIで自動化する",
    desc: "書類のOCR、データの自動分類、見積もり生成など、人手で行っている業務にAIを組み込み、工数を削減します。",
    example: "例: 許可証のOCR検証、契約書のリスク自動判定",
    icon: "03",
  },
  {
    title: "今あるシステムを改善・拡張する",
    desc: "既存システムへの機能追加や改修。業務を理解した上で、影響範囲を見極めて対応します。",
    example: "例: Spring Boot業務システムの追加開発・保守（20ヶ月）",
    icon: "04",
  },
];

const conditions = [
  { label: "稼働形態", value: "フルタイム / パートタイム（週3日〜）" },
  { label: "契約形態", value: "準委任 / 請負" },
  { label: "勤務地", value: "フルリモート（山梨県在住）" },
  { label: "即日対応", value: "相談可" },
];

export default function Services() {
  return (
    <section id="services" style={{ padding: "100px 32px", position: "relative", overflow: "hidden" }}>
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1576057122708-9608db46b2f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, rgba(15,23,42,0.92) 0%, rgba(30,58,138,0.87) 50%, rgba(15,23,42,0.92) 100%)",
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
            // 05 — SERVICES
          </div>
          <h2 style={{ fontSize: "clamp(24px, 5vw, 42px)", fontWeight: 700, marginBottom: 12, color: "#fff" }}>
            Services
          </h2>
          <p className="font-serif-jp" style={{ fontSize: 13, color: "rgba(219,234,254,0.7)", lineHeight: 1.8, marginBottom: 40 }}>
            業務を理解した上で、企画から本番運用まで一貫して対応します
          </p>
        </motion.div>

        {/* Service cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 40 }}>
          {serviceTypes.map((s, index) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                padding: "28px 28px",
                background: "rgba(255,255,255,0.07)", backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 4,
                display: "flex", flexDirection: "column",
                transition: "all 0.3s",
              }}
              whileHover={{ scale: 1.02, borderColor: "rgba(96,165,250,0.5)" }}
            >
              <div style={{ fontSize: 28, fontWeight: 800, color: "#93c5fd", opacity: 0.4, marginBottom: 12 }}>
                {s.icon}
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#fff", marginBottom: 10 }}>
                {s.title}
              </div>
              <div className="font-serif-jp" style={{ fontSize: 12, color: "rgba(219,234,254,0.75)", lineHeight: 1.8, marginBottom: 14, flex: 1 }}>
                {s.desc}
              </div>
              <div style={{ fontSize: 11, color: "rgba(147,197,253,0.6)", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 12 }}>
                {s.example}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Conditions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            padding: "24px 28px",
            background: "rgba(255,255,255,0.07)", backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderLeft: "3px solid #60a5fa",
            borderRadius: 4,
          }}
        >
          <div style={{ fontSize: 13, fontWeight: 700, color: "#fff", marginBottom: 20 }}>
            稼働条件
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
            {conditions.map((c) => (
              <div key={c.label} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#60a5fa", marginTop: 6, flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: 11, color: "rgba(147,197,253,0.7)", marginBottom: 3 }}>{c.label}</div>
                  <div style={{ fontSize: 13, color: "#fff", fontWeight: 500 }}>{c.value}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <SectionCTA />
    </section>
  );
}
