"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import FadeIn from "./FadeIn";
import { projects, getFlagshipProjects, getDemoProjects, getAllTags, type Project } from "@/data/projects";

function WorkCard({ project }: { project: Project }) {
  const router = useRouter();
  const isInternal = !project.externalUrl || project.externalUrl.startsWith("/");
  const href = project.externalUrl || `/works/${project.slug}`;
  const Wrapper = isInternal
    ? ({ children }: { children: React.ReactNode }) => (
        <Link href={href} style={{ textDecoration: "none", color: "inherit" }}>
          {children}
        </Link>
      )
    : ({ children }: { children: React.ReactNode }) => (
        <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
          {children}
        </a>
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
  const flagshipProjects = useMemo(() => getFlagshipProjects(), []);
  const demoProjects = useMemo(() => getDemoProjects(), []);
  const [showDemos, setShowDemos] = useState(false);

  return (
    <section id="works" className="section-inner">
      <FadeIn>
        <div style={{ fontSize: 10, color: "var(--accent)", letterSpacing: 4, marginBottom: 12 }}>
          // 04 — WORKS
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
            業務を理解して設計し、<span style={{ color: "#c8860a", fontWeight: 600 }}>一人で事業を形にしてきた実績</span>
          </div>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 24,
          }}>
            {[
              { value: "1人", label: "SaaS構築", sub: "企画〜本番運用" },
              { value: "40年", label: "業務システム", sub: "金融・建設・B2B" },
              { value: "41万行", label: "レガシー変換", sub: "10言語対応" },
              { value: "AI", label: "協働開発", sub: "設計〜運用を一貫" },
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

      {/* 主要実績 */}
      <FadeIn>
        <div style={{ marginBottom: 16 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#1a1a1a", marginBottom: 6 }}>
            主要実績
          </h3>
          <p className="font-serif-jp" style={{ fontSize: 12, color: "var(--text-light)", lineHeight: 1.8 }}>
            本番稼働・業務利用された案件を中心に、企画から運用まで一貫して担当したプロジェクト
          </p>
        </div>
      </FadeIn>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20, marginBottom: 48 }}>
        {flagshipProjects.map((p) => (
          <WorkCard key={p.title} project={p} />
        ))}
      </div>

      {/* 技術デモ（折りたたみ） */}
      <FadeIn>
        <div style={{ borderTop: "1px solid var(--border)", paddingTop: 32 }}>
          <button
            onClick={() => setShowDemos(!showDemos)}
            style={{
              display: "flex", alignItems: "center", gap: 12,
              background: "none", border: "1px solid var(--border)", borderRadius: 4,
              padding: "12px 24px", cursor: "pointer", width: "100%",
              justifyContent: "space-between",
              transition: "all 0.2s",
            }}
          >
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: 15, fontWeight: 600, color: "#1a1a1a", marginBottom: 4 }}>
                技術デモ・実験的プロジェクト
              </div>
              <div className="font-serif-jp" style={{ fontSize: 11, color: "var(--text-light)" }}>
                AI活用・API連携などの技術検証として制作したデモアプリ（{demoProjects.length}件）
              </div>
            </div>
            <div style={{
              fontSize: 18, color: "var(--accent)", transition: "transform 0.2s",
              transform: showDemos ? "rotate(180deg)" : "rotate(0deg)",
            }}>
              ▼
            </div>
          </button>

          {showDemos && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20, marginTop: 24 }}>
              {demoProjects.map((p) => (
                <WorkCard key={p.title} project={p} />
              ))}
            </div>
          )}
        </div>
      </FadeIn>
    </section>
  );
}
