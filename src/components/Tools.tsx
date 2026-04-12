"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

// --- モックスクリーン定義 ---
type MockScreen = { title: string; content: React.ReactNode };

function ToolSlideshow({ screens, color }: { screens: MockScreen[]; color: string }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIdx(i => (i + 1) % screens.length), 4000);
    return () => clearInterval(timer);
  }, [screens.length]);

  return (
    <div style={{ position: "relative", height: "100%", overflow: "hidden", background: "#f8faff" }}>
      <div style={{ padding: "16px 20px", height: "calc(100% - 28px)", display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 10, color, fontWeight: 700, marginBottom: 8, letterSpacing: 1 }}>
          {screens[idx].title}
        </div>
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {screens[idx].content}
        </div>
      </div>
      {/* ドットインジケーター */}
      <div style={{ position: "absolute", bottom: 8, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 6 }}>
        {screens.map((_, i) => (
          <button key={i} onClick={() => setIdx(i)} style={{
            width: 6, height: 6, borderRadius: "50%", border: "none", cursor: "pointer",
            background: i === idx ? color : "#d1d5db", transition: "background 0.3s",
          }} />
        ))}
      </div>
    </div>
  );
}

// ヘルパー
const Box = ({ bg, border, children, style }: { bg: string; border: string; children: React.ReactNode; style?: React.CSSProperties }) => (
  <div style={{ background: bg, border: `1px solid ${border}`, borderRadius: 4, padding: "6px 10px", fontSize: 9, ...style }}>{children}</div>
);
const Tag = ({ color, children }: { color: string; children: React.ReactNode }) => (
  <span style={{ fontSize: 8, color, background: `${color}15`, border: `1px solid ${color}30`, borderRadius: 3, padding: "1px 6px" }}>{children}</span>
);
const Bar = ({ w, color }: { w: string; color: string }) => (
  <div style={{ height: 6, borderRadius: 3, background: "#eee", width: "100%" }}>
    <div style={{ height: 6, borderRadius: 3, background: color, width: w, transition: "width 1s" }} />
  </div>
);

// --- 各ツールのモック ---
function flowScreens(): MockScreen[] {
  return [
    { title: "STEP 1 — 業務内容を入力", content: (
      <div style={{ width: "100%", maxWidth: 260 }}>
        <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 6, padding: 12 }}>
          <div style={{ fontSize: 9, color: "#999", marginBottom: 6 }}>業務の流れを入力してください</div>
          <div style={{ fontSize: 8, color: "#666", lineHeight: 1.6 }}>各店舗の店長が在庫を確認し、不足分を本部にFAXで発注...</div>
          <div style={{ marginTop: 8, background: "#2563EB", color: "#fff", borderRadius: 4, padding: "4px 0", fontSize: 9, textAlign: "center" }}>分析する</div>
        </div>
      </div>
    )},
    { title: "STEP 2 — フロー図を自動生成", content: (
      <div style={{ width: "100%", maxWidth: 240 }}>
        {["在庫確認", "発注リスト作成", "FAX送信", "検品・照合"].map((s, i) => (
          <div key={i}>
            <div style={{ background: "#DBEAFE", border: "1px solid #93C5FD", borderRadius: 4, padding: "4px 8px", fontSize: 8, textAlign: "center", color: "#1E3A5F", fontWeight: 600 }}>{s}</div>
            {i < 3 && <div style={{ textAlign: "center", color: "#9CA3AF", fontSize: 10 }}>↓</div>}
          </div>
        ))}
      </div>
    )},
    { title: "STEP 3 — システム化提案", content: (
      <div style={{ width: "100%", maxWidth: 260, display: "flex", flexDirection: "column", gap: 6 }}>
        {[["発注のデジタル化", "高"], ["在庫のリアルタイム管理", "中"], ["納品書の電子化", "中"]].map(([name, pri], i) => (
          <Box key={i} bg="#fff" border="#e5e7eb">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontWeight: 600, color: "#1a1a1a" }}>{name}</span>
              <Tag color={pri === "高" ? "#DC2626" : "#D97706"}>{pri}</Tag>
            </div>
          </Box>
        ))}
      </div>
    )},
  ];
}

function excelScreens(): MockScreen[] {
  return [
    { title: "STEP 1 — Excelをアップロード", content: (
      <div style={{ width: "100%", maxWidth: 240, border: "2px dashed #059669", borderRadius: 8, padding: 20, textAlign: "center", background: "#ECFDF5" }}>
        <div style={{ fontSize: 24, marginBottom: 4 }}>📊</div>
        <div style={{ fontSize: 9, color: "#059669", fontWeight: 600 }}>Excel / .xlsm をドロップ</div>
        <div style={{ fontSize: 8, color: "#999", marginTop: 4 }}>VBA・ActiveX対応</div>
      </div>
    )},
    { title: "STEP 2 — Web化 vs GAS化を比較", content: (
      <div style={{ width: "100%", maxWidth: 260, display: "flex", gap: 8 }}>
        {[["Webアプリ化", "★★★★★", "#2563EB"], ["GAS化", "★★★★☆", "#059669"]].map(([name, rating, color], i) => (
          <Box key={i} bg="#fff" border="#e5e7eb" style={{ flex: 1, textAlign: "center" }}>
            <div style={{ fontWeight: 700, color: color as string, marginBottom: 4 }}>{name}</div>
            <div style={{ fontSize: 8, color: "#D97706" }}>{rating}</div>
          </Box>
        ))}
      </div>
    )},
    { title: "STEP 3 — プロトタイプ生成", content: (
      <div style={{ width: "100%", maxWidth: 260, background: "#fff", border: "1px solid #e5e7eb", borderRadius: 6, overflow: "hidden" }}>
        <div style={{ background: "#059669", color: "#fff", padding: "4px 10px", fontSize: 8 }}>プロトタイプ プレビュー</div>
        <div style={{ padding: 10 }}>
          {["店舗一覧", "在庫管理", "発注履歴"].map((s, i) => (
            <div key={i} style={{ background: "#f3f4f6", borderRadius: 3, padding: "3px 8px", fontSize: 8, marginBottom: 3, color: "#374151" }}>{s}</div>
          ))}
        </div>
      </div>
    )},
  ];
}

function estimateScreens(): MockScreen[] {
  return [
    { title: "STEP 1 — 要件を入力", content: (
      <div style={{ width: "100%", maxWidth: 260 }}>
        <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 6, padding: 12 }}>
          <div style={{ fontSize: 9, color: "#999", marginBottom: 6 }}>どんなアプリを作りたいですか？</div>
          <div style={{ fontSize: 8, color: "#666", lineHeight: 1.6 }}>食材の発注をスマホから...</div>
          <div style={{ marginTop: 8, background: "#4F46E5", color: "#fff", borderRadius: 4, padding: "4px 0", fontSize: 9, textAlign: "center" }}>画面設計へ</div>
        </div>
      </div>
    )},
    { title: "STEP 2 — 画面を自動設計", content: (
      <div style={{ width: "100%", maxWidth: 260, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
        {["ログイン", "ダッシュボード", "発注画面", "在庫一覧"].map((s, i) => (
          <Box key={i} bg="#EEF2FF" border="#C7D2FE" style={{ textAlign: "center" }}>
            <div style={{ fontSize: 14, marginBottom: 2 }}>📱</div>
            <div style={{ fontWeight: 600, color: "#4F46E5" }}>{s}</div>
          </Box>
        ))}
      </div>
    )},
    { title: "STEP 3 — 見積もりを自動生成", content: (
      <div style={{ width: "100%", maxWidth: 260 }}>
        <Box bg="#EEF2FF" border="#C7D2FE" style={{ textAlign: "center", marginBottom: 8 }}>
          <div style={{ fontSize: 8, color: "#4F46E5" }}>概算費用</div>
          <div style={{ fontSize: 16, fontWeight: 800, color: "#4F46E5" }}>¥240万〜¥472万</div>
          <div style={{ fontSize: 8, color: "#666" }}>38〜74日</div>
        </Box>
        {[["ユーザー認証", "¥3〜6万"], ["発注機能", "¥19〜32万"]].map(([name, cost], i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: 8, padding: "3px 0", borderBottom: "1px solid #f3f4f6" }}>
            <span style={{ color: "#374151" }}>{name}</span><span style={{ color: "#4F46E5", fontWeight: 600 }}>{cost}</span>
          </div>
        ))}
      </div>
    )},
  ];
}

function documentScreens(): MockScreen[] {
  return [
    { title: "書類をアップロード", content: (
      <div style={{ width: "100%", maxWidth: 240, border: "2px dashed #4F46E5", borderRadius: 8, padding: 20, textAlign: "center", background: "#EEF2FF" }}>
        <div style={{ fontSize: 24, marginBottom: 4 }}>📄</div>
        <div style={{ fontSize: 9, color: "#4F46E5", fontWeight: 600 }}>書類の画像をドロップ</div>
      </div>
    )},
    { title: "AIが自動分析", content: (
      <div style={{ width: "100%", maxWidth: 260 }}>
        <Box bg="#fff" border="#e5e7eb" style={{ textAlign: "center", marginBottom: 8 }}>
          <div style={{ fontSize: 8, color: "#999" }}>信頼度</div>
          <div style={{ fontSize: 20, fontWeight: 800, color: "#22C55E" }}>94%</div>
          <div style={{ fontSize: 9, fontWeight: 600, color: "#1a1a1a" }}>運転免許証</div>
        </Box>
        {[["氏名", "松井 慶太"], ["生年月日", "1967/xx/xx"]].map(([k, v], i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: 8, padding: "3px 0", borderBottom: "1px solid #f3f4f6" }}>
            <span style={{ color: "#999" }}>{k}</span><span style={{ color: "#1a1a1a", fontWeight: 600 }}>{v}</span>
          </div>
        ))}
      </div>
    )},
  ];
}

function buildScanScreens(): MockScreen[] {
  const color = "#0369a1";
  return [
    { title: "PDF / 画像をアップロード", content: (
      <div style={{ width: "100%", maxWidth: 240, border: `2px dashed ${color}`, borderRadius: 8, padding: 20, textAlign: "center", background: "#f0f9ff" }}>
        <div style={{ fontSize: 24, marginBottom: 4 }}>🏗️</div>
        <div style={{ fontSize: 9, color, fontWeight: 600 }}>見積書 / 工程表 / 仕様書</div>
        <div style={{ fontSize: 8, color: "#999", marginTop: 4 }}>PDF・JPG・PNGに対応</div>
      </div>
    )},
    { title: "Gemini AIが建設書類を解析", content: (
      <div style={{ width: "100%", maxWidth: 260 }}>
        {[["工事名", "新宿オフィスビル改修工事"], ["合計金額", "¥45,800,000"], ["工期", "2026/05 〜 2026/08"]].map(([k, v], i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: 8, padding: "4px 0", borderBottom: "1px solid #f3f4f6" }}>
            <span style={{ color: "#999" }}>{k}</span>
            <span style={{ color: "#1a1a1a", fontWeight: 600 }}>{v}</span>
          </div>
        ))}
      </div>
    )},
    { title: "信頼度スコアで精度を確認", content: (
      <div style={{ width: "100%", maxWidth: 260, display: "flex", flexDirection: "column", gap: 6 }}>
        {[["総合スコア", "92%", "88%"], ["工事名", "95%", "90%"], ["金額", "88%", "85%"], ["工期", "85%", "80%"]].map(([label, w], i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 8, color: "#666", minWidth: 48 }}>{label}</span>
            <Bar w={w as string} color="#22C55E" />
            <span style={{ fontSize: 8, fontWeight: 700, color, minWidth: 24 }}>{w}</span>
          </div>
        ))}
      </div>
    )},
  ];
}

function contractScreens(): MockScreen[] {
  return [
    { title: "契約書をアップロード", content: (
      <div style={{ width: "100%", maxWidth: 240, border: "2px dashed #DC2626", borderRadius: 8, padding: 20, textAlign: "center", background: "#FEF2F2" }}>
        <div style={{ fontSize: 24, marginBottom: 4 }}>📋</div>
        <div style={{ fontSize: 9, color: "#DC2626", fontWeight: 600 }}>PDF / 画像をドロップ</div>
      </div>
    )},
    { title: "リスクを自動検出", content: (
      <div style={{ width: "100%", maxWidth: 260 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <div style={{ fontSize: 9, color: "#999" }}>リスクスコア</div>
          <Bar w="65%" color="#DC2626" />
          <div style={{ fontSize: 10, fontWeight: 700, color: "#DC2626" }}>65%</div>
        </div>
        {[["第5条 損害賠償", "HIGH", "#DC2626"], ["第8条 契約期間", "MEDIUM", "#D97706"], ["第3条 支払条件", "LOW", "#2563EB"]].map(([clause, level, color], i) => (
          <Box key={i} bg={`${color}10`} border={`${color}30`} style={{ marginBottom: 4 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "#1a1a1a", fontWeight: 600 }}>{clause}</span>
              <Tag color={color as string}>{level}</Tag>
            </div>
          </Box>
        ))}
      </div>
    )},
  ];
}

function receiptScreens(): MockScreen[] {
  return [
    { title: "STEP 1 — スキャナー / カメラ / ファイルで取込", content: (
      <div style={{ width: "100%", maxWidth: 260, display: "flex", flexDirection: "column", gap: 6 }}>
        {[["🖨️", "ネットワークスキャナー", "#D97706"], ["📷", "スマホカメラ", "#059669"], ["🗂️", "ファイルアップロード", "#4F46E5"]].map(([icon, label, color], i) => (
          <Box key={i} bg="#fff" border="#e5e7eb">
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 14 }}>{icon}</span>
              <span style={{ fontSize: 9, fontWeight: 600, color: color as string }}>{label}</span>
            </div>
          </Box>
        ))}
      </div>
    )},
    { title: "STEP 2 — Gemini OCRで明細を構造化", content: (
      <div style={{ width: "100%", maxWidth: 260 }}>
        <Box bg="#fff" border="#e5e7eb" style={{ marginBottom: 8 }}>
          <div style={{ fontWeight: 700, color: "#1a1a1a", fontSize: 10 }}>コスモス 下吉田東店</div>
          <div style={{ fontSize: 8, color: "#999" }}>2026-04-01　合計 ¥12,343</div>
        </Box>
        {[["ピュアセレクト マヨネー", "¥238", "8%"], ["ホープス 薄力粉", "¥1,106", "8%"], ["プレミアム消臭アロマン", "¥796", "10%"]].map(([item, price, tax], i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: 8, padding: "3px 0", borderBottom: "1px solid #f3f4f6" }}>
            <span style={{ color: "#374151", maxWidth: 130, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item}</span>
            <span><span style={{ color: "#1a1a1a", fontWeight: 600 }}>{price}</span> <span style={{ color: "#999" }}>{tax}</span></span>
          </div>
        ))}
      </div>
    )},
    { title: "STEP 3 — 仕分け・勘定科目・Drive保存", content: (
      <div style={{ width: "100%", maxWidth: 260 }}>
        {[["おにぎり 鮭", "仕事", "#2563EB"], ["電池", "家庭", "#6B7280"], ["コーヒー", "按分50%", "#D97706"]].map(([item, cls, color], i) => (
          <Box key={i} bg="#fff" border="#e5e7eb" style={{ marginBottom: 4, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 9, color: "#374151" }}>{item}</span>
            <Tag color={color as string}>{cls}</Tag>
          </Box>
        ))}
        <Box bg="#FFFBEB" border="#D97706" style={{ marginTop: 8, textAlign: "center" }}>
          <span style={{ fontSize: 9, color: "#D97706", fontWeight: 700 }}>📥 Google Drive に保存済み</span>
        </Box>
      </div>
    )},
  ];
}

function lineScreens(): MockScreen[] {
  return [
    { title: "LINEで質問", content: (
      <div style={{ width: "100%", maxWidth: 240, background: "#7BBBD2", borderRadius: 8, padding: 12 }}>
        {[
          { from: "user", text: "Next.jsでAPIルートのタイムアウトを設定するには？" },
          { from: "ai", text: "export const maxDuration = 60; をroute.tsに追加してください。" },
        ].map((m, i) => (
          <div key={i} style={{ display: "flex", justifyContent: m.from === "user" ? "flex-end" : "flex-start", marginBottom: 6 }}>
            <div style={{
              background: m.from === "user" ? "#8CE67E" : "#fff",
              borderRadius: 8, padding: "6px 10px", fontSize: 8, maxWidth: "80%",
              color: "#1a1a1a", lineHeight: 1.5,
            }}>{m.text}</div>
          </div>
        ))}
      </div>
    )},
    { title: "デスクトップと同期", content: (
      <div style={{ width: "100%", maxWidth: 260, display: "flex", gap: 8 }}>
        <Box bg="#fff" border="#e5e7eb" style={{ flex: 1, textAlign: "center" }}>
          <div style={{ fontSize: 14, marginBottom: 2 }}>📱</div>
          <div style={{ fontWeight: 600, color: "#06B6D4", fontSize: 8 }}>LINE</div>
        </Box>
        <div style={{ display: "flex", alignItems: "center", fontSize: 12, color: "#06B6D4" }}>⇄</div>
        <Box bg="#fff" border="#e5e7eb" style={{ flex: 1, textAlign: "center" }}>
          <div style={{ fontSize: 14, marginBottom: 2 }}>💻</div>
          <div style={{ fontWeight: 600, color: "#06B6D4", fontSize: 8 }}>Claude Code</div>
        </Box>
      </div>
    )},
  ];
}

function skinDiagnosisScreens(): MockScreen[] {
  return [
    { title: "STEP 1 — カメラで顔を撮影", content: (
      <div style={{ width: "100%", maxWidth: 240, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <div style={{ position: "relative", width: 100, height: 120, background: "#f8f0f5", border: "2px solid #ec4899", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 60, height: 80, border: "2px dashed #ec4899", borderRadius: "50%", opacity: 0.6 }} />
          <div style={{ position: "absolute", top: 6, right: 6, fontSize: 8, background: "#ec4899", color: "#fff", borderRadius: 3, padding: "1px 5px" }}>LIVE</div>
        </div>
        <div style={{ fontSize: 8, color: "#ec4899", fontWeight: 600 }}>顔ガイドに合わせて撮影</div>
      </div>
    )},
    { title: "STEP 2 — 5ステップ問診", content: (
      <div style={{ width: "100%", maxWidth: 260, display: "flex", flexDirection: "column", gap: 5 }}>
        {[
          ["肌の悩み", "毛穴・くすみ・シミ"],
          ["肌の状態", "混合肌"],
          ["気になる部位", "頬・額"],
          ["年齢レンジ", "40代"],
          ["ダウンタイム", "1週間以内"],
        ].map(([label, val], i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: 8, padding: "3px 0", borderBottom: "1px solid #fce7f3" }}>
            <span style={{ color: "#999" }}>{label}</span>
            <span style={{ color: "#ec4899", fontWeight: 600 }}>{val}</span>
          </div>
        ))}
      </div>
    )},
    { title: "STEP 3 — AI診断結果", content: (
      <div style={{ width: "100%", maxWidth: 260 }}>
        <Box bg="#fdf2f8" border="#f9a8d4" style={{ textAlign: "center", marginBottom: 8 }}>
          <div style={{ fontSize: 8, color: "#ec4899" }}>推定肌年齢</div>
          <div style={{ fontSize: 22, fontWeight: 800, color: "#ec4899" }}>38歳</div>
          <div style={{ fontSize: 8, color: "#999" }}>実年齢より若め</div>
        </Box>
        {[["毛穴の開き", "HIGH"], ["乾燥", "MEDIUM"], ["色ムラ", "LOW"]].map(([concern, level], i) => (
          <Box key={i} bg="#fff" border="#fce7f3" style={{ marginBottom: 4, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 9, color: "#374151" }}>{concern}</span>
            <Tag color={level === "HIGH" ? "#DC2626" : level === "MEDIUM" ? "#D97706" : "#059669"}>{level}</Tag>
          </Box>
        ))}
      </div>
    )},
  ];
}

function chatbotScreens(): MockScreen[] {
  return [
    { title: "ポートフォリオに質問", content: (
      <div style={{ width: "100%", maxWidth: 260, background: "#fff", border: "1px solid #e5e7eb", borderRadius: 8, padding: 12 }}>
        {[
          { from: "ai", text: "こんにちは！松井慶太のポートフォリオへようこそ。何でもお聞きください。" },
          { from: "user", text: "得意な技術は？" },
          { from: "ai", text: "Next.js・TypeScript・AI活用開発が得意です。40年の業務システム経験があります。" },
        ].map((m, i) => (
          <div key={i} style={{ display: "flex", justifyContent: m.from === "user" ? "flex-end" : "flex-start", marginBottom: 6 }}>
            <div style={{
              background: m.from === "user" ? "#2563eb" : "#f5f5f0",
              color: m.from === "user" ? "#fff" : "#1a1a1a",
              borderRadius: 8, padding: "5px 10px", fontSize: 8, maxWidth: "80%", lineHeight: 1.5,
            }}>{m.text}</div>
          </div>
        ))}
      </div>
    )},
    { title: "経歴・スキルをAIが回答", content: (
      <div style={{ width: "100%", maxWidth: 260 }}>
        <Box bg="#fff" border="#e5e7eb" style={{ textAlign: "center", marginBottom: 8 }}>
          <div style={{ fontSize: 20, marginBottom: 4 }}>🤖</div>
          <div style={{ fontSize: 9, fontWeight: 700, color: "#1a1a1a" }}>AIチャットボット</div>
          <div style={{ fontSize: 8, color: "#999", marginTop: 2 }}>ポートフォリオの内容をAIが回答</div>
        </Box>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 4, justifyContent: "center" }}>
          {["経歴", "スキル", "実績", "対応案件"].map((t, i) => (
            <span key={i} style={{ fontSize: 8, background: "#f5f5f0", border: "1px solid #e5e7eb", borderRadius: 3, padding: "2px 8px", color: "#666" }}>{t}</span>
          ))}
        </div>
      </div>
    )},
  ];
}

function realEstateScreens(): MockScreen[] {
  return [
    { title: "STEP 1 — PDFアップロード", content: (
      <div style={{ width: "100%", maxWidth: 260, display: "flex", flexDirection: "column", gap: 6 }}>
        <Box bg="#eff6ff" border="#bfdbfe" style={{ textAlign: "center", padding: "10px 0" }}>
          <div style={{ fontSize: 16, marginBottom: 4 }}>📄</div>
          <div style={{ fontSize: 9, color: "#2563eb", fontWeight: 700 }}>PDFをドラッグ＆ドロップ</div>
          <div style={{ fontSize: 8, color: "#999", marginTop: 2 }}>登記簿謄本 / ハザードマップ / 都市計画図</div>
        </Box>
        {["登記簿謄本_全部事項.pdf", "hazardmap_chiyoda.pdf"].map((f, i) => (
          <Box key={i} bg="#fff" border="#bfdbfe" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 8, color: "#374151" }}>{f}</span>
            <Tag color="#2563eb">✓</Tag>
          </Box>
        ))}
      </div>
    )},
    { title: "STEP 2 — AI自動抽出中", content: (
      <div style={{ width: "100%", maxWidth: 260, display: "flex", flexDirection: "column", gap: 5 }}>
        {[
          ["所在", "特別区南都町1丁目"],
          ["地番", "101"],
          ["地目", "宅地"],
          ["所有者氏名", "法務五郎"],
          ["取得原因", "売買"],
        ].map(([label, val], i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: 8, padding: "3px 0", borderBottom: "1px solid #dbeafe" }}>
            <span style={{ color: "#999" }}>{label}</span>
            <span style={{ color: "#2563eb", fontWeight: 600 }}>{val}</span>
          </div>
        ))}
        <div style={{ fontSize: 8, color: "#2563eb", textAlign: "right", marginTop: 2 }}>20 / 34項目 抽出完了</div>
      </div>
    )},
    { title: "STEP 3 — Excelダウンロード", content: (
      <div style={{ width: "100%", maxWidth: 260 }}>
        <Box bg="#eff6ff" border="#bfdbfe" style={{ textAlign: "center", marginBottom: 8 }}>
          <div style={{ fontSize: 9, color: "#2563eb", fontWeight: 700, marginBottom: 4 }}>重要事項説明書.xlsx</div>
          <div style={{ fontSize: 8, color: "#999" }}>34項目中 20項目 自動入力済み</div>
        </Box>
        <Box bg="#2563eb" border="#2563eb" style={{ textAlign: "center", color: "#fff", fontWeight: 700, fontSize: 9, cursor: "pointer" }}>
          ⬇ Excelをダウンロード
        </Box>
      </div>
    )},
  ];
}

// --- ツール定義 ---
const tools = [
  {
    title: "DX提案アシスタント",
    desc: "業務の流れを言葉で説明するだけで、AIが業務フロー図を自動生成し、ボトルネックを分析、システム化の提案書を作成します。",
    tags: ["業務フロー図", "ボトルネック分析", "システム化提案", "要件定義書"],
    color: "#2563EB",
    screens: flowScreens(),
    demoUrl: "https://estimate-ai-xi.vercel.app/flow",
    detailLink: "/works/estimate-ai",
  },
  {
    title: "Excel→Web/GAS化",
    desc: "Excelファイルをアップロードするだけで、Webアプリ化またはGAS化の提案を自動生成します。VBA・ActiveXにも対応し、動くプロトタイプも出力します。",
    tags: ["Webアプリ化", "GAS化", "VBA/ActiveX対応", "プロトタイプ生成"],
    color: "#059669",
    screens: excelScreens(),
    demoUrl: "https://estimate-ai-xi.vercel.app/excel",
    detailLink: "/works/excel-to-web",
  },
  {
    title: "AI見積もりアシスタント",
    desc: "作りたいアプリを説明するだけで、画面設計・技術選定・工数見積もりを自動生成。一般的な開発会社の見積もりとAI活用開発の見積もりを比較できます。",
    tags: ["画面設計", "技術選定", "工数見積", "製造資料生成"],
    color: "#4F46E5",
    screens: estimateScreens(),
    demoUrl: "https://estimate-ai-xi.vercel.app/estimate",
    detailLink: "/works/ai-estimate",
  },
  {
    title: "AI書類分析ツール",
    desc: "書類の画像をアップロードすると、AIが文書の種類を判別し、記載内容を自動で読み取り・構造化します。",
    tags: ["書類判別", "OCR", "Gemini Vision", "データ抽出"],
    color: "#D97706",
    screens: documentScreens(),
    demoUrl: "https://ai-document-checker-keita2399s-projects.vercel.app",
    detailLink: "/works/ai-document-checker",
  },
  {
    title: "BuildScan AI",
    desc: "建設書類（見積書・工程表・仕様書）のPDF・画像をアップロードするだけで、GeminiのマルチモーダルAIが工事名・金額・工期・工事項目を自動抽出し、構造化JSONとCSVで出力します。",
    tags: ["建設書類解析", "Gemini 2.5 Flash", "PDF/画像→JSON", "CSVエクスポート"],
    color: "#0369a1",
    screens: buildScanScreens(),
    demoUrl: "https://buildscan-front.onrender.com",
    detailLink: "/works/buildscan-ai",
    githubRepo: "keita2399/Figmabuildscanaidemoscreen",
  },
  {
    title: "AI契約書チェッカー",
    desc: "契約書をアップロードすると、AIがリスク条項の検出、不利な条件の指摘、修正案の提示を行います。",
    tags: ["リスク検出", "条項分析", "修正案提示", "PDF対応"],
    color: "#DC2626",
    screens: contractScreens(),
    demoUrl: "https://contract-checker-vert.vercel.app",
    detailLink: "/works/contract-checker",
    githubRepo: "keita2399/contract-checker",
  },
  {
    title: "AI 経費仕分けツール",
    desc: "Gemini 2.5 Flashのマルチモーダル機能は「文字を読む」だけでなく「文脈を理解して構造化」する。30品目超のスーパーレシートも軽減税率・勘定科目まで一発判定。スキャナー連携からGoogle Drive保存・確定申告CSVまで一貫対応。",
    tags: ["スキャナー連携", "勘定科目自動判定", "Google Drive保存", "確定申告CSV"],
    color: "#D97706",
    screens: receiptScreens(),
    demoUrl: "https://receipt-scanner-iota.vercel.app",
    detailLink: "/works/receipt-scanner",
    githubRepo: "keita2399/receipt-scanner",
  },
  {
    title: "LINE×Claude連携ボット",
    desc: "LINEでの会話をClaude AIが応答。モバイルとデスクトップで会話履歴を同期し、どこからでもAIアシスタントを利用できます。",
    tags: ["LINE連携", "Claude AI", "会話同期", "モバイル対応"],
    color: "#06B6D4",
    screens: lineScreens(),
    demoUrl: "/demo/chat",
    detailLink: "/works/line-claude-sync",
    githubRepo: "keita2399/line-claude-sync",
  },
  {
    title: "AI肌診断アプリ",
    desc: "美容クリニック向けのAI肌診断Webアプリ。スマホカメラで顔を撮影し、5ステップの問診に答えるだけで、Gemini Vision APIが肌年齢・懸念事項・施術提案3件を生成します。",
    tags: ["Gemini Vision API", "カメラ撮影", "肌年齢診断", "施術提案"],
    color: "#ec4899",
    screens: skinDiagnosisScreens(),
    demoUrl: "https://skin-diagnosis-gold.vercel.app",
    detailLink: "/works/skin-diagnosis",
    githubRepo: "keita2399/skin-diagnosis",
  },
  {
    title: "不動産書類AI自動入力",
    desc: "登記簿謄本・ハザードマップ等のPDFをアップロードするだけで、Gemini AIが34項目を自動抽出し、重要事項説明書のExcelに自動入力します。",
    tags: ["PDF解析", "34項目自動抽出", "Excel自動入力", "Gemini API"],
    color: "#2563EB",
    screens: realEstateScreens(),
    demoUrl: "https://real-estate-ai-zb95.onrender.com",
    detailLink: "/works/real-estate-ai",
    githubRepo: "keita2399/real-estate-ai",
  },
  {
    title: "AIチャットボット",
    desc: "ポートフォリオサイトに組み込んだAIチャットボット。経歴・スキル・実績について、訪問者の質問にAIがリアルタイムで回答します。",
    tags: ["チャットUI", "Gemini AI", "ポートフォリオ連携", "リアルタイム応答"],
    color: "#c8860a",
    screens: chatbotScreens(),
    demoNote: "右下の 💬 ボタンから今すぐ試せます",
    detailLink: "/works/portfolio-chatbot",
    githubRepo: "keita2399/portfolio",
  },
];

export default function Tools() {
  return (
    <section id="tools" style={{ padding: "100px 32px", background: "#fff", borderTop: "1px solid #e5e7eb" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ fontSize: 10, color: "#2563eb", letterSpacing: 4, marginBottom: 12 }}>
            // TOOLS
          </div>
          <h2 style={{ fontSize: "clamp(24px, 5vw, 42px)", fontWeight: 700, marginBottom: 12, color: "#1a1a1a" }}>
            自社開発の<span style={{ color: "#2563eb" }}>AIツール</span>
          </h2>
          <p className="font-serif-jp" style={{ fontSize: 13, color: "#666", lineHeight: 1.8, marginBottom: 48 }}>
            業務分析・見積もり・開発を加速するツールを自社開発しています
          </p>
        </FadeIn>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {tools.map((tool) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0, ease: [0.16, 1, 0.3, 1] }}
              style={{
                border: "1px solid #e5e7eb",
                borderTop: `3px solid ${tool.color}`,
                borderRadius: 4, overflow: "hidden", background: "#fff",
                boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
              }}
            >
              {/* ヘッダー */}
              <div style={{
                padding: "16px 28px",
                borderBottom: "1px solid #f0f0f0",
                display: "flex", alignItems: "center", gap: 16,
              }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: tool.color, flexShrink: 0 }} />
                <div style={{ fontSize: 15, fontWeight: 700, color: "#1a1a1a" }}>{tool.title}</div>
              </div>

              {/* コンテンツ */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 220 }}>
                {/* 左: スライドショー */}
                <div style={{ borderRight: "1px solid #f0f0f0" }}>
                  <ToolSlideshow screens={tool.screens} color={tool.color} />
                </div>

                {/* 右: 説明 */}
                <div style={{ padding: "20px 28px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <div className="font-serif-jp" style={{ fontSize: 12, color: "#555", lineHeight: 1.8, marginBottom: 14 }}>
                      {tool.desc}
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {tool.tags.map((tag) => (
                        <span key={tag} style={{
                          fontSize: 10, color: tool.color,
                          background: `${tool.color}10`,
                          border: `1px solid ${tool.color}30`,
                          borderRadius: 3, padding: "2px 8px",
                        }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div style={{ marginTop: 14, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
                    <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
                      {tool.demoNote ? (
                        <span style={{ fontSize: 11, color: tool.color, fontWeight: 600 }}>
                          {tool.demoNote}
                        </span>
                      ) : tool.demoUrl ? (
                        <a
                          href={tool.demoUrl}
                          target={tool.demoUrl.startsWith("http") ? "_blank" : undefined}
                          rel={tool.demoUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                          style={{ fontSize: 11, color: tool.color, textDecoration: "none", fontWeight: 600 }}
                          onClick={() => {
                            if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
                              (window as any).gtag("event", "demo_click", {
                                tool_name: tool.title,
                                demo_url: tool.demoUrl,
                              });
                            }
                          }}
                        >
                          デモを試す ↗
                        </a>
                      ) : (
                        <span style={{ fontSize: 11, color: "#999" }}>
                          デモをお試しになりたい方は<a href="#contact" style={{ color: "#2563eb", textDecoration: "underline" }}>お問い合わせ</a>ください
                        </span>
                      )}
                      {tool.githubRepo && (
                        <a
                          href={`https://github.com/${tool.githubRepo}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ fontSize: 11, color: "#666", textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}
                          onMouseEnter={(e) => { e.currentTarget.style.color = tool.color; }}
                          onMouseLeave={(e) => { e.currentTarget.style.color = "#666"; }}
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                          </svg>
                          GitHub
                        </a>
                      )}
                    </div>
                    {tool.detailLink && (
                      <a href={tool.detailLink} style={{ fontSize: 11, color: tool.color, textDecoration: "none", fontWeight: 600 }}>
                        詳細を見る →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
