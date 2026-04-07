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

export default function ResumeExcelDownload({ projectList, skills, portfolio }: Props) {
  const handleDownload = () => {
    const wb = XLSX.utils.book_new();

    // ── Sheet 1: 業務経歴一覧 ──
    const projectData = [
      ["No", "業種", "システム名", "役割", "期間", "技術"],
      ...projectList.map((p) => [p.no, p.industry, p.system, p.role, p.period, p.tech]),
    ];
    const ws1 = XLSX.utils.aoa_to_sheet(projectData);
    ws1["!cols"] = [{ wch: 4 }, { wch: 10 }, { wch: 24 }, { wch: 18 }, { wch: 20 }, { wch: 50 }];
    XLSX.utils.book_append_sheet(wb, ws1, "業務経歴一覧");

    // ── Sheet 2: スキル ──
    const skillData = [
      ["カテゴリ", "詳細"],
      ...skills.map((s) => [s.category, s.detail]),
    ];
    const ws2 = XLSX.utils.aoa_to_sheet(skillData);
    ws2["!cols"] = [{ wch: 20 }, { wch: 80 }];
    XLSX.utils.book_append_sheet(wb, ws2, "スキル");

    // ── Sheet 3: ポートフォリオ ──
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
