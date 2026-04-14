"use client";

import { useState } from "react";

type ProjectRow = {
  no: number;
  industry: string;
  system: string;
  role: string;
  period: string;
  tech: string;
};

const PREVIEW_COUNT = 6;

const td: React.CSSProperties = {
  padding: "10px 14px",
  verticalAlign: "top",
  color: "#374151",
  fontSize: 13,
  lineHeight: 1.5,
};

export default function CollapsibleProjectList({ projectList }: { projectList: ProjectRow[] }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? projectList : projectList.slice(0, PREVIEW_COUNT);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 32 }}>
        <div>
          <p style={{ fontSize: 11, color: "#9ca3af", letterSpacing: 3, marginBottom: 8, textTransform: "uppercase" }}>
            Experience
          </p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#111827" }}>
            業務経歴一覧
          </h2>
        </div>
        <button
          className="no-print"
          onClick={() => setExpanded(!expanded)}
          style={{
            fontSize: 12,
            padding: "8px 18px",
            border: "2px solid #111827",
            borderRadius: 6,
            background: expanded ? "#111827" : "transparent",
            color: expanded ? "#fff" : "#111827",
            cursor: "pointer",
            fontWeight: 600,
            transition: "all 0.2s",
            whiteSpace: "nowrap",
          }}
        >
          {expanded ? "閉じる ▲" : `全 ${projectList.length} 件を表示 ▼`}
        </button>
      </div>

      <div className="collapsible-content">
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #111827" }}>
                {["No", "業種", "システム名", "役割", "期間", "技術"].map((h) => (
                  <th
                    key={h}
                    style={{
                      padding: "10px 14px",
                      textAlign: "left",
                      fontWeight: 700,
                      fontSize: 12,
                      color: "#111827",
                      whiteSpace: "nowrap",
                      letterSpacing: 0.5,
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {visible.map((p, i) => (
                <tr
                  key={p.no}
                  style={{
                    borderBottom: "1px solid #e5e7eb",
                    background: i % 2 === 0 ? "#fff" : "#f9fafb",
                  }}
                >
                  <td style={{ ...td, color: "#9ca3af", fontWeight: 600 }}>{p.no}</td>
                  <td style={{ ...td, whiteSpace: "nowrap" }}>{p.industry}</td>
                  <td style={{ ...td, fontWeight: 500, color: "#111827" }}>{p.system}</td>
                  <td style={{ ...td, whiteSpace: "nowrap" }}>{p.role}</td>
                  <td style={{ ...td, whiteSpace: "nowrap", color: "#6b7280" }}>{p.period}</td>
                  <td style={{ ...td, color: "#9ca3af", fontSize: 11 }}>{p.tech}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {!expanded && (
          <div
            className="no-print"
            style={{
              textAlign: "center",
              padding: "24px 0 8px",
              borderTop: "1px solid #e5e7eb",
              marginTop: 0,
            }}
          >
            <button
              onClick={() => setExpanded(true)}
              style={{
                fontSize: 13,
                color: "#6b7280",
                background: "none",
                border: "none",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              他 {projectList.length - PREVIEW_COUNT} 件を表示…
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
