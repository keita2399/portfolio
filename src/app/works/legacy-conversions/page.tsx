import Link from "next/link";
import type { Metadata } from "next";
import { legacyProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "レガシーコード変換プロジェクト",
  description: "COBOL・PL/I・VB6・RPGなど10言語・41万行のレガシーシステム変換実績。松井慶太によるレガシー現代化プロジェクト一覧。",
  alternates: {
    canonical: "https://portfolio-two-orpin-45.vercel.app/works/legacy-conversions",
  },
  openGraph: {
    title: "レガシーコード変換プロジェクト — 松井 慶太",
    description: "COBOL・PL/I・VB6・RPGなど10言語・41万行のレガシーシステム変換実績。",
    url: "https://portfolio-two-orpin-45.vercel.app/works/legacy-conversions",
    type: "website",
  },
};

export default function LegacyConversionsPage() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "100px 32px 60px" }}>
      <Link
        href="/#works"
        style={{ fontSize: 12, color: "var(--accent)", textDecoration: "none", letterSpacing: 1 }}
      >
        ← 実績一覧に戻る
      </Link>

      <h1 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 700, marginTop: 24, marginBottom: 12 }}>
        レガシーコード<span style={{ color: "var(--accent)" }}>変換</span>プロジェクト
      </h1>

      <p className="font-serif-jp" style={{ fontSize: 14, color: "var(--text-light)", lineHeight: 1.8, marginBottom: 40, maxWidth: 600 }}>
        COBOL・PL/I・RPG・VB6・MUMPS・Fortran など、動かなくなった古いシステムを
        ソースコード読解のみでモダンWebアプリに変換するPoCを実施しました。
      </p>

      {/* Impact numbers */}
      <div style={{
        background: "linear-gradient(135deg, #1a1a1a 0%, #2a2520 100%)",
        borderRadius: 8, padding: "28px 32px", marginBottom: 48,
        border: "1px solid rgba(200,134,10,0.2)",
      }}>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: 24,
        }}>
          {[
            { value: "10", label: "言語", sub: "対応" },
            { value: "41万行", label: "変換実績", sub: "→ 2.7万行" },
            { value: "85%", label: "平均削減率", sub: "コード量" },
            { value: "383K", label: "コメント", sub: "収集・感情分析" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 800, color: "#c8860a", lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: 11, color: "#b0a594", marginTop: 6 }}>{s.label}</div>
              <div style={{ fontSize: 10, color: "#666", marginTop: 2 }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Project list */}
      <div style={{ display: "grid", gap: 16 }}>
        {legacyProjects.map((p) => (
          <Link
            key={p.slug}
            href={`/works/${p.slug}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              className="work-card"
              style={{
                display: "flex", gap: 20, alignItems: "center",
                border: "1px solid var(--border)", borderLeft: `3px solid ${p.borderColor}`,
                borderRadius: 4, background: "#fff", padding: "20px 24px",
                cursor: "pointer",
              }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
                  <div style={{ fontSize: 15, fontWeight: 600, color: "#1a1a1a" }}>{p.title}</div>
                  <div style={{ fontSize: 10, color: p.badgeColor, letterSpacing: 1, fontWeight: 600, flexShrink: 0, marginLeft: 12 }}>{p.badge}</div>
                </div>
                <div className="font-serif-jp" style={{ fontSize: 12, color: "var(--text-light)", lineHeight: 1.7 }}>
                  {p.description}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 }}>
                  {p.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: 10, padding: "2px 8px",
                        border: `1px solid ${p.badgeColor}44`,
                        color: p.badgeColor, borderRadius: 2,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {p.externalUrl && (
                <div style={{ fontSize: 10, color: "#10b981", fontWeight: 600, flexShrink: 0 }}>
                  DEMO ↗
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
