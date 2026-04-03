"use client";

import FadeIn from "./FadeIn";

const tools = [
  {
    title: "DX提案アシスタント",
    desc: "業務の流れを言葉で説明するだけで、AIが業務フロー図を自動生成し、ボトルネックを分析、システム化の提案書を作成します。",
    tags: ["業務フロー図", "ボトルネック分析", "システム化提案", "要件定義書"],
    color: "#2563EB",
    videoPlaceholder: "DX提案アシスタントのデモ動画",
  },
  {
    title: "Excel→Web/GAS化",
    desc: "Excelファイルをアップロードするだけで、Webアプリ化またはGAS化の提案を自動生成します。VBA・ActiveXにも対応し、動くプロトタイプも出力します。",
    tags: ["Webアプリ化", "GAS化", "VBA/ActiveX対応", "プロトタイプ生成"],
    color: "#059669",
    videoPlaceholder: "Excel→Web/GAS化のデモ動画",
  },
  {
    title: "AI見積もりアシスタント",
    desc: "作りたいアプリを説明するだけで、画面設計・技術選定・工数見積もりを自動生成。一般的な開発会社の見積もりとAI活用開発の見積もりを比較できます。",
    tags: ["画面設計", "技術選定", "工数見積", "製造資料生成"],
    color: "#4F46E5",
    videoPlaceholder: "AI見積もりアシスタントのデモ動画",
  },
  {
    title: "AI書類分析ツール",
    desc: "書類の画像をアップロードすると、AIが文書の種類を判別し、記載内容を自動で読み取り・構造化します。",
    tags: ["書類判別", "OCR", "Gemini Vision", "データ抽出"],
    color: "#D97706",
    videoPlaceholder: "AI書類分析ツールのデモ動画",
  },
  {
    title: "AI契約書チェッカー",
    desc: "契約書をアップロードすると、AIがリスク条項の検出、不利な条件の指摘、修正案の提示を行います。",
    tags: ["リスク検出", "条項分析", "修正案提示", "PDF対応"],
    color: "#DC2626",
    videoPlaceholder: "AI契約書チェッカーのデモ動画",
  },
  {
    title: "AIレシートスキャナー",
    desc: "レシートを撮影するだけで、店名・日付・金額・品目を自動で読み取り、データ化します。",
    tags: ["レシート読取", "自動分類", "金額抽出", "経費管理"],
    color: "#7C3AED",
    videoPlaceholder: "AIレシートスキャナーのデモ動画",
  },
  {
    title: "LINE×Claude連携ボット",
    desc: "LINEでの会話をClaude AIが応答。モバイルとデスクトップで会話履歴を同期し、どこからでもAIアシスタントを利用できます。",
    tags: ["LINE連携", "Claude AI", "会話同期", "モバイル対応"],
    color: "#06B6D4",
    videoPlaceholder: "LINE×Claude連携ボットのデモ動画",
  },
];

export default function Tools() {
  return (
    <section id="tools" style={{ padding: "100px 32px", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ fontSize: 10, color: "var(--accent)", letterSpacing: 4, marginBottom: 12 }}>
            // TOOLS
          </div>
          <h2 style={{ fontSize: "clamp(24px, 5vw, 42px)", fontWeight: 700, marginBottom: 12, color: "#1a1a1a" }}>
            自社開発の<span style={{ color: "var(--accent)" }}>AIツール</span>
          </h2>
          <p className="font-serif-jp" style={{ fontSize: 13, color: "var(--text-light)", lineHeight: 1.8, marginBottom: 48 }}>
            業務分析・見積もり・開発を加速するツールを自社開発しています
          </p>
        </FadeIn>

        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {tools.map((tool) => (
            <FadeIn key={tool.title}>
              <div style={{
                border: "1px solid var(--border)", borderRadius: 4,
                overflow: "hidden", background: "#fff",
              }}>
                {/* ヘッダー */}
                <div style={{
                  padding: "20px 28px",
                  borderBottom: "1px solid var(--border)",
                  display: "flex", alignItems: "center", gap: 16,
                }}>
                  <div style={{
                    width: 8, height: 8, borderRadius: "50%",
                    background: tool.color, flexShrink: 0,
                  }} />
                  <div style={{ fontSize: 16, fontWeight: 700, color: "#1a1a1a" }}>
                    {tool.title}
                  </div>
                </div>

                {/* コンテンツ */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
                  {/* 左: 動画プレースホルダー */}
                  <div style={{
                    aspectRatio: "16/10",
                    background: "#f5f5f0",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    borderRight: "1px solid var(--border)",
                    padding: 24,
                  }}>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: 32, marginBottom: 8, opacity: 0.3 }}>▶</div>
                      <div style={{ fontSize: 11, color: "var(--text-faint)" }}>
                        {tool.videoPlaceholder}
                      </div>
                      <div style={{ fontSize: 10, color: "var(--text-faint)", marginTop: 4 }}>
                        準備中
                      </div>
                    </div>
                  </div>

                  {/* 右: 説明 */}
                  <div style={{ padding: "24px 28px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <div className="font-serif-jp" style={{ fontSize: 13, color: "var(--text-light)", lineHeight: 1.8, marginBottom: 16 }}>
                        {tool.desc}
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {tool.tags.map((tag) => (
                          <span key={tag} style={{
                            fontSize: 10, color: tool.color,
                            background: `${tool.color}10`,
                            border: `1px solid ${tool.color}30`,
                            borderRadius: 3, padding: "2px 8px",
                          }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div style={{ marginTop: 16, fontSize: 11, color: "var(--text-faint)" }}>
                      デモをお試しになりたい方は<a href="#contact" style={{ color: "var(--accent)", textDecoration: "underline" }}>お問い合わせ</a>ください
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
