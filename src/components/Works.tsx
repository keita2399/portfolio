"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import FadeIn from "./FadeIn";
import { projects, getAllTags, type Project } from "@/data/projects";

function WorkCard({ project }: { project: Project }) {
  const router = useRouter();
  const Wrapper = project.externalUrl
    ? ({ children }: { children: React.ReactNode }) => (
        <a href={project.externalUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
          {children}
        </a>
      )
    : ({ children }: { children: React.ReactNode }) => (
        <Link href={`/works/${project.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
          {children}
        </Link>
      );

  return (
    <FadeIn>
      <Wrapper>
        <div
          className="work-card"
          style={{
            border: "1px solid var(--border)", borderTop: `3px solid ${project.borderColor}`,
            borderRadius: 4, background: "#fff", cursor: "pointer", height: "100%",
            overflow: "hidden",
          }}
        >
          {/* Thumbnail */}
          {project.thumbnail && (
            <div style={{
              position: "relative", width: "100%", aspectRatio: "16 / 9",
              background: `linear-gradient(135deg, ${project.badgeColor}18, ${project.badgeColor}08)`,
              borderBottom: "1px solid var(--border)",
              overflow: "hidden",
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.thumbnail}
                alt={project.title}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
              />
              {/* LIVE DEMO badge */}
              <div style={{
                position: "absolute", top: 10, right: 10,
                background: project.badgeColor, color: "#fff",
                fontSize: 9, fontWeight: 700, letterSpacing: 1.5,
                padding: "3px 10px", borderRadius: 2,
              }}>
                LIVE DEMO
              </div>
            </div>
          )}

          <div style={{ padding: 28 }}>
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

          <div style={{ marginTop: 16, fontSize: 11, color: project.badgeColor, letterSpacing: 1, display: "flex", alignItems: "center", gap: 12 }}>
            {project.externalUrl ? (
              <>
                <span>デモを試す ↗</span>
                <span style={{ color: "var(--border)" }}>|</span>
                <span
                  role="link"
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); router.push(`/works/${project.slug}`); }}
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                >
                  詳細を見る →
                </span>
              </>
            ) : (
              "詳細を見る →"
            )}
          </div>
          </div>
        </div>
      </Wrapper>
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

      {/* Impact banner */}
      <FadeIn>
        <div style={{
          background: "linear-gradient(135deg, #1a1a1a 0%, #2a2520 100%)",
          borderRadius: 8, padding: "32px 36px", marginBottom: 40,
          border: "1px solid rgba(200,134,10,0.2)",
        }}>
          <div className="font-serif-jp" style={{ textAlign: "center", fontSize: 14, color: "#b0a594", marginBottom: 24, lineHeight: 1.8 }}>
            COBOL・PL/I・RPG・VB6・MUMPS・Fortran — <span style={{ color: "#c8860a", fontWeight: 600 }}>動かなくなった古いシステムを、動くWebアプリに変換します</span>
          </div>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 24,
          }}>
            {[
              { value: "15", label: "プロジェクト", sub: "完了" },
              { value: "10", label: "言語", sub: "対応" },
              { value: "41万行", label: "変換実績", sub: "→ 2.7万行（平均85%削減）" },
              { value: "383K", label: "コメント", sub: "収集・感情分析" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#c8860a", lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: 11, color: "#b0a594", marginTop: 6 }}>{s.label}</div>
                <div style={{ fontSize: 10, color: "#666", marginTop: 2 }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
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
