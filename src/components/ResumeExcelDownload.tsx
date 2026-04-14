"use client";

import * as XLSX from "xlsx";

type ProjectRow = { no: number; industry: string; system: string; role: string; period: string; tech: string };
type SkillRow = { category: string; detail: string };
type PortfolioRow = { name: string; desc: string; tech: string; url: string };

type Props = {
  projectList: ProjectRow[];
  skills: SkillRow[];
  portfolio: PortfolioRow[];
};

const profileData = [
  ["項目", "内容"],
  ["氏名", "松井 慶太（Keita Matsui）"],
  ["拠点", "山梨県"],
  ["経験年数", "IT業界 約40年（1985年〜）"],
  [""],
  ["── キャッチコピー ──", ""],
  ["", "AIペア開発で、一人で「チーム」の成果を出すフルスタックエンジニア"],
  [""],
  ["── 強み・PR ──", ""],
  ["設計力", "要件定義から本番運用まで全工程を一人で完遂。136人日見積もりをAI協働開発で2週間強に短縮した実績あり。"],
  ["技術幅", "TypeScript / React / Next.js を軸に、PHP（Laravel）・Ruby（Rails）・Python・Java など多言語対応。フロントからインフラまでフルスタックで担当可能。"],
  ["AI活用", "Claude Code をペアパートナーとして設計・実装・レビュー・ドキュメント整合性検証に一貫活用。AIを補助ツールではなく設計パートナーとして使うスタイルを確立。"],
  ["デザイン", "Figmaで仕様書・UIデザインを作成し、ReactコードとしてエクスポートしてそのままWebアプリに組み込む一気通貫の開発フローを実践。"],
  ["レガシー対応", "COBOL・PL/I・RPG・VB6 等13言語・44万行超のレガシーコードをモダンWebに変換した実績。既存システムのリプレイス案件にも強い。"],
  [""],
  ["── AI協働開発フロー ──", ""],
  ["設計", "要件をAIと壁打ちし、DB設計・API設計・画面構成を短時間で固める"],
  ["実装", "AIとのペアプログラミングで、コード品質を維持しながら高速に実装"],
  ["レビュー", "AIによるコードレビュー・セキュリティチェック・ドキュメント整合性検証"],
  ["ドキュメント", "設計書・運用手順書・操作マニュアルをコードベースと常に同期"],
  [""],
  ["── リンク ──", ""],
  ["ポートフォリオ", "https://portfolio-two-orpin-45.vercel.app"],
  ["GitHub", "https://github.com/keita2399"],
];

export default function ResumeExcelDownload({ projectList, skills, portfolio }: Props) {
  const handleDownload = () => {
    const wb = XLSX.utils.book_new();

    // ── Sheet 1: 自己紹介・PR ──
    const ws0 = XLSX.utils.aoa_to_sheet(profileData);
    ws0["!cols"] = [{ wch: 20 }, { wch: 80 }];
    XLSX.utils.book_append_sheet(wb, ws0, "自己紹介・PR");

    // ── Sheet 2: 業務経歴一覧 ──
    const projectData = [
      ["No", "業種", "システム名", "役割", "期間", "技術"],
      ...projectList.map((p) => [p.no, p.industry, p.system, p.role, p.period, p.tech]),
    ];
    const ws1 = XLSX.utils.aoa_to_sheet(projectData);
    ws1["!cols"] = [{ wch: 4 }, { wch: 10 }, { wch: 24 }, { wch: 18 }, { wch: 20 }, { wch: 50 }];
    XLSX.utils.book_append_sheet(wb, ws1, "業務経歴一覧");

    // ── Sheet 3: スキル ──
    const skillData = [
      ["カテゴリ", "詳細"],
      ...skills.map((s) => [s.category, s.detail]),
    ];
    const ws2 = XLSX.utils.aoa_to_sheet(skillData);
    ws2["!cols"] = [{ wch: 20 }, { wch: 80 }];
    XLSX.utils.book_append_sheet(wb, ws2, "スキル");

    // ── Sheet 4: ポートフォリオ ──
    const portfolioData = [
      ["名称", "説明", "技術スタック", "公開状態 / URL"],
      ...portfolio.map((p) => [p.name, p.desc, p.tech, p.url]),
    ];
    const ws3 = XLSX.utils.aoa_to_sheet(portfolioData);
    ws3["!cols"] = [{ wch: 28 }, { wch: 50 }, { wch: 50 }, { wch: 55 }];
    XLSX.utils.book_append_sheet(wb, ws3, "ポートフォリオ");

    XLSX.writeFile(wb, "業務経歴書_松井慶太.xlsx");
  };

  return (
    <button
      onClick={handleDownload}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "10px 20px",
        fontSize: 13,
        fontWeight: 600,
        background: "#059669",
        color: "#fff",
        borderRadius: 4,
        border: "none",
        cursor: "pointer",
        textDecoration: "none",
      }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      Excel ダウンロード
    </button>
  );
}
