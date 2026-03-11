"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import FadeIn from "./FadeIn";
import { projects, getAllTags, type Project } from "@/data/projects";

function WorkCard({ project }: { project: Project }) {
  return (
    <FadeIn>
      <Link href={`/works/${project.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
        <div
          className="work-card"
          style={{
            padding: 28, border: "1px solid var(--border)", borderTop: `3px solid ${project.borderColor}`,
            borderRadius: 4, background: "#fff", cursor: "pointer", height: "100%",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12 }}>
            <div style={{ fontSize: 15, fontWeight: 600, color: "#1a1a1a" }}>{project.title}</div>
            <div style={{ fontSize: 10, color: project.badgeColor, letterSpacing: 1, fontWeight: 600 }}>{project.badge}</div>
          </div>

          <div className="font-serif-jp" style={{ fontSize: 12, color: "var(--text-light)", lineHeight: 1.8, marginBottom: 12, fontWeight: 300 }}>
            {project.description}
          </div>

          <div style={{ marginBottom: 14 }}>
            <div style={{ display: "flex", gap: 24, fontSize: 11, color: "var(--text-faint)" }}>
              {project.stats.map((stat, i) => (
                <span
                  key={i}
                  dangerouslySetInnerHTML={{
                    __html: stat.replace(
                      /→\s*(.+)/,
                      `→ <span style="color:${project.badgeColor};font-weight:600">$1</span>`
                    ),
                  }}
                />
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: 10, padding: "2px 8px",
                  border: `1px solid ${project.badgeColor}44`,
                  color: project.badgeColor, borderRadius: 2,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div style={{ marginTop: 16, fontSize: 11, color: project.badgeColor, letterSpacing: 1 }}>
            詳細を見る →
          </div>
        </div>
      </Link>
    </FadeIn>
  );
}

export default function Works() {
  const allTags = useMemo(() => getAllTags(), []);
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag
    ? projects.filter((p) => p.tags.includes(activeTag))
    : projects;

  return (
    <section id="works" className="section-inner">
      <FadeIn>
        <div style={{ fontSize: 10, color: "var(--accent)", letterSpacing: 4, marginBottom: 12 }}>
          // 03 — WORKS
        </div>
        <h2 style={{ fontSize: "clamp(24px, 5vw, 42px)", fontWeight: 700, marginBottom: 32, color: "#1a1a1a" }}>
          実績・<span style={{ color: "var(--accent)" }}>プロジェクト</span>
        </h2>
      </FadeIn>

      {/* Tag filter */}
      <FadeIn>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 40 }}>
          <button
            onClick={() => setActiveTag(null)}
            style={{
              fontSize: 11, padding: "5px 14px", borderRadius: 2, cursor: "pointer",
              letterSpacing: 0.5, transition: "all 0.2s",
              background: activeTag === null ? "var(--accent)" : "transparent",
              color: activeTag === null ? "#fff" : "var(--text-muted)",
              border: activeTag === null ? "1px solid var(--accent)" : "1px solid #ddd",
            }}
          >
            すべて
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              style={{
                fontSize: 11, padding: "5px 14px", borderRadius: 2, cursor: "pointer",
                letterSpacing: 0.5, transition: "all 0.2s",
                background: activeTag === tag ? "var(--accent)" : "transparent",
                color: activeTag === tag ? "#fff" : "var(--text-muted)",
                border: activeTag === tag ? "1px solid var(--accent)" : "1px solid #ddd",
              }}
            >
              {tag}
            </button>
          ))}
        </div>
      </FadeIn>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
        {filtered.map((p) => (
          <WorkCard key={p.title} project={p} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: "center", padding: 60, color: "var(--text-muted)", fontSize: 14 }}>
          該当するプロジェクトがありません
        </div>
      )}
    </section>
  );
}
