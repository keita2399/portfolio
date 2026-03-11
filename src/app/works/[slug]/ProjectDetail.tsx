"use client";

import Link from "next/link";
import { type Project } from "@/data/projects";
import FadeIn from "@/components/FadeIn";

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      {/* Header */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(250,249,246,0.92)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "0 32px", height: 56,
      }}>
        <Link href="/#works" style={{ color: "var(--accent)", fontSize: 15, fontWeight: 700, letterSpacing: 3, textDecoration: "none" }}>
          KM_
        </Link>
        <Link
          href="/#works"
          className="nav-link"
          style={{ color: "var(--text-muted)", fontSize: 12, letterSpacing: 1, textDecoration: "none" }}
        >
          ← 実績一覧に戻る
        </Link>
      </nav>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "60px 32px 100px" }}>
        {/* Title */}
        <FadeIn>
          <div style={{ marginBottom: 48 }}>
            <div style={{ fontSize: 10, color: project.badgeColor, letterSpacing: 4, marginBottom: 12 }}>
              // PROJECT DETAIL
            </div>
            <h1 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 700, color: "#1a1a1a", marginBottom: 12 }}>
              {project.title}
            </h1>
            <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 20 }}>
              <span style={{
                fontSize: 12, padding: "4px 12px", background: project.badgeColor,
                color: "#fff", borderRadius: 2, fontWeight: 600, letterSpacing: 1,
              }}>
                {project.badge}
              </span>
              {project.stats.map((stat, i) => (
                <span key={i} style={{ fontSize: 12, color: "var(--text-muted)" }}>{stat}</span>
              ))}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {project.tags.map((tag) => (
                <span key={tag} style={{
                  fontSize: 11, padding: "4px 12px",
                  border: `1px solid ${project.badgeColor}`,
                  color: project.badgeColor, borderRadius: 2,
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Overview */}
        <FadeIn>
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "#1a1a1a", marginBottom: 16, paddingBottom: 8, borderBottom: `2px solid ${project.borderColor}` }}>
              概要
            </h2>
            <p className="font-serif-jp" style={{ fontSize: 14, color: "var(--text-light)", lineHeight: 2 }}>
              {project.detail.overview}
            </p>
          </section>
        </FadeIn>

        {/* Challenges */}
        <FadeIn>
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "#1a1a1a", marginBottom: 16, paddingBottom: 8, borderBottom: "2px solid #ddd" }}>
              課題
            </h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {project.detail.challenges.map((item, i) => (
                <li key={i} style={{ display: "flex", gap: 12, marginBottom: 12, fontSize: 13, color: "var(--text-light)", lineHeight: 1.7 }}>
                  <span style={{ color: project.badgeColor, fontWeight: 700, flexShrink: 0 }}>▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </FadeIn>

        {/* Approach */}
        <FadeIn>
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "#1a1a1a", marginBottom: 16, paddingBottom: 8, borderBottom: "2px solid #ddd" }}>
              アプローチ
            </h2>
            <div style={{ display: "grid", gap: 16 }}>
              {project.detail.approach.map((item, i) => (
                <div key={i} style={{
                  display: "flex", gap: 16, padding: "16px 20px",
                  background: "#fff", border: "1px solid var(--border)", borderRadius: 4,
                  fontSize: 13, color: "var(--text-light)", lineHeight: 1.7,
                }}>
                  <span style={{
                    color: "#fff", background: project.badgeColor,
                    width: 24, height: 24, borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 11, fontWeight: 700, flexShrink: 0,
                  }}>
                    {i + 1}
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* Results */}
        <FadeIn>
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "#1a1a1a", marginBottom: 16, paddingBottom: 8, borderBottom: `2px solid ${project.borderColor}` }}>
              成果
            </h2>
            <div style={{
              padding: 24, background: "#fff", border: "1px solid var(--border)",
              borderLeft: `4px solid ${project.borderColor}`, borderRadius: 4,
            }}>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {project.detail.results.map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: 12, marginBottom: i < project.detail.results.length - 1 ? 12 : 0, fontSize: 13, color: "var(--text)", lineHeight: 1.7 }}>
                    <span style={{ color: project.badgeColor, fontSize: 16 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </FadeIn>

        {/* Tech Detail */}
        <FadeIn>
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "#1a1a1a", marginBottom: 16, paddingBottom: 8, borderBottom: "2px solid #ddd" }}>
              技術スタック詳細
            </h2>
            <div style={{
              padding: "16px 20px", background: "#1a1a1a", color: "#e0e0e0",
              borderRadius: 4, fontSize: 13, lineHeight: 1.8, fontFamily: "inherit",
            }}>
              <span style={{ color: "var(--accent)" }}>$</span> {project.detail.techDetail}
            </div>
          </section>
        </FadeIn>

        {/* Back link */}
        <FadeIn>
          <div style={{ textAlign: "center", paddingTop: 24 }}>
            <Link
              href="/#works"
              style={{
                display: "inline-block", padding: "12px 28px",
                border: "1px solid var(--border)", borderRadius: 2,
                color: "var(--text-muted)", fontSize: 12, letterSpacing: 2,
                textDecoration: "none", transition: "all 0.2s",
              }}
            >
              ← 実績一覧に戻る
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
