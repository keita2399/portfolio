"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import SectionCTA from "./SectionCTA";
import { getFlagshipProjects, getDemoProjects, getPersonalProjects, type Project } from "@/data/projects";

function WorkCard({ project, index }: { project: Project; index: number }) {
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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Wrapper>
        <motion.div
          whileHover={{ scale: 1.02, borderColor: `${project.badgeColor}66` }}
          style={{
            border: `1px solid rgba(255,255,255,0.15)`,
            borderTop: `3px solid ${project.borderColor}`,
            borderRadius: 4,
            background: "rgba(255,255,255,0.07)", backdropFilter: "blur(12px)",
            cursor: "pointer", height: "100%", overflow: "hidden",
            transition: "all 0.3s",
          }}
        >
          {/* Thumbnail */}
          {project.thumbnail && (
            <div style={{
              position: "relative", width: "100%", aspectRatio: "16 / 9",
              background: `linear-gradient(135deg, ${project.badgeColor}18, ${project.badgeColor}08)`,
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              overflow: "hidden",
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.thumbnail}
                alt={project.title}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
              />
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
              <div style={{ fontSize: 15, fontWeight: 600, color: "#fff" }}>{project.title}</div>
              <div style={{ fontSize: 10, color: project.badgeColor, letterSpacing: 1, fontWeight: 600 }}>{project.badge}</div>
            </div>

            <div className="font-serif-jp" style={{ fontSize: 12, color: "rgba(219,234,254,0.75)", lineHeight: 1.8, marginBottom: 12, fontWeight: 300 }}>
              {project.description}
            </div>

            <div style={{ marginBottom: 14 }}>
              <div style={{ display: "flex", gap: 24, fontSize: 11, color: "rgba(147,197,253,0.6)" }}>
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
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "rgba(219,234,254,0.8)", borderRadius: 2,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div style={{ marginTop: 16, fontSize: 11, letterSpacing: 1, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ color: project.badgeColor, display: "flex", alignItems: "center", gap: 12 }}>
                {project.externalUrl ? (
                  <>
                    <span>デモを試す ↗</span>
                    <span style={{ color: "rgba(255,255,255,0.2)" }}>|</span>
                    <span
                      role="link"
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); router.push(`/works/${project.slug}`); }}
                      style={{ cursor: "pointer" }}
                    >
                      詳細を見る →
                    </span>
                  </>
                ) : (
                  "詳細を見る →"
                )}
                {project.githubRepo && project.githubPublic && (
                  <>
                    <span style={{ color: "rgba(255,255,255,0.2)" }}>|</span>
                    <a
                      href={`https://github.com/${project.githubRepo}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{ color: "rgba(147,197,253,0.7)", textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      GitHub
                    </a>
                  </>
                )}
              </div>
              {project.updatedAt && (
                <div style={{ color: "rgba(147,197,253,0.4)", fontSize: 10 }}>
                  更新 {project.updatedAt}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </Wrapper>
    </motion.div>
  );
}

export default function Works() {
  const flagshipProjects = useMemo(() => getFlagshipProjects(), []);
  const demoProjects = useMemo(() => getDemoProjects(), []);
  const personalProjects = useMemo(() => getPersonalProjects(), []);
  const [showDemos, setShowDemos] = useState(false);

  return (
    <section id="works" style={{ padding: "100px 32px", position: "relative", overflow: "hidden" }}>
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, rgba(15,23,42,0.94) 0%, rgba(30,58,138,0.89) 50%, rgba(15,23,42,0.94) 100%)",
        }} />
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div style={{ fontSize: 10, color: "rgba(147,197,253,0.8)", letterSpacing: 4, marginBottom: 12 }}>
            // 04 — WORKS
          </div>
          <h2 style={{ fontSize: "clamp(24px, 5vw, 42px)", fontWeight: 700, marginBottom: 32, color: "#fff" }}>
            実績・<span style={{ color: "#93c5fd" }}>プロジェクト</span>
          </h2>
        </motion.div>

        {/* Impact banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: "rgba(255,255,255,0.07)", backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderLeft: "3px solid #60a5fa",
            borderRadius: 4, padding: "32px 36px", marginBottom: 40,
          }}
        >
          <div className="font-serif-jp" style={{ textAlign: "center", fontSize: 14, color: "rgba(219,234,254,0.85)", marginBottom: 24, lineHeight: 1.8 }}>
            業務を理解して設計し、<span style={{ color: "#93c5fd", fontWeight: 600 }}>一人で事業を形にしてきた実績</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 24 }}>
            {[
              { value: "1人", label: "SaaS構築", sub: "企画〜本番運用" },
              { value: "40年", label: "業務システム", sub: "金融・建設・B2B" },
              { value: "44万行超", label: "レガシー変換", sub: "13言語対応" },
              { value: "AI", label: "協働開発", sub: "設計〜運用を一貫" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#60a5fa", lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: 11, color: "rgba(147,197,253,0.8)", marginTop: 6 }}>{s.label}</div>
                <div style={{ fontSize: 10, color: "rgba(147,197,253,0.5)", marginTop: 2 }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 主要実績 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 16 }}
        >
          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 6 }}>
            主要実績
          </h3>
          <p className="font-serif-jp" style={{ fontSize: 12, color: "rgba(219,234,254,0.7)", lineHeight: 1.8 }}>
            本番稼働・業務利用された案件を中心に、企画から運用まで一貫して担当したプロジェクト
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20, marginBottom: 48 }}>
          {flagshipProjects.map((p, i) => (
            <WorkCard key={p.title} project={p} index={i} />
          ))}
        </div>

        {/* 技術デモ（折りたたみ） */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 32 }}
        >
          <button
            onClick={() => setShowDemos(!showDemos)}
            style={{
              display: "flex", alignItems: "center", gap: 12,
              background: "rgba(255,255,255,0.05)", backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.15)", borderRadius: 4,
              padding: "12px 24px", cursor: "pointer", width: "100%",
              justifyContent: "space-between",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.1)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.05)"; }}
          >
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: 15, fontWeight: 600, color: "#fff", marginBottom: 4 }}>
                技術検証・個人開発プロジェクト
              </div>
              <div className="font-serif-jp" style={{ fontSize: 11, color: "rgba(219,234,254,0.6)" }}>
                AI活用・API連携などの技術検証・個人開発プロジェクト（{demoProjects.length + personalProjects.length}件）
              </div>
            </div>
            <div style={{
              fontSize: 18, color: "#60a5fa", transition: "transform 0.2s",
              transform: showDemos ? "rotate(180deg)" : "rotate(0deg)",
            }}>
              ▼
            </div>
          </button>

          {showDemos && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20, marginTop: 24 }}>
              {[...personalProjects, ...demoProjects].map((p, i) => (
                <WorkCard key={p.title} project={p} index={i} />
              ))}
            </div>
          )}
        </motion.div>

        <SectionCTA />
      </div>
    </section>
  );
}
