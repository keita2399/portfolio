"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { type Project } from "@/data/projects";
import FadeIn from "@/components/FadeIn";

function ScreenshotGallery({ screenshots, badgeColor }: { screenshots: { src: string; caption: string }[]; badgeColor: string }) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
        {screenshots.map((ss, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            style={{
              cursor: "pointer", border: "1px solid var(--border)", borderRadius: 4,
              overflow: "hidden", background: "#fff", padding: 0, textAlign: "left",
              transition: "box-shadow 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 4px 16px ${badgeColor}22`)}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
          >
            <div style={{ position: "relative", width: "100%", aspectRatio: "16/10", background: "#f5f5f5" }}>
              <Image src={ss.src} alt={ss.caption} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div style={{ padding: "10px 12px", fontSize: 11, color: "var(--text-muted)", lineHeight: 1.5 }}>
              {ss.caption}
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "rgba(0,0,0,0.85)", display: "flex",
            alignItems: "center", justifyContent: "center",
            cursor: "zoom-out", padding: 24,
          }}
        >
          <div style={{ position: "relative", maxWidth: "90vw", maxHeight: "85vh", width: "100%" }}>
            <Image
              src={screenshots[selected].src}
              alt={screenshots[selected].caption}
              width={1280}
              height={800}
              style={{ width: "100%", height: "auto", maxHeight: "85vh", objectFit: "contain", borderRadius: 4 }}
            />
            <div style={{
              position: "absolute", bottom: -36, left: 0, right: 0,
              textAlign: "center", color: "#ccc", fontSize: 13,
            }}>
              {screenshots[selected].caption}
            </div>
          </div>
          {/* Prev/Next */}
          {selected > 0 && (
            <button
              onClick={e => { e.stopPropagation(); setSelected(selected - 1); }}
              style={{
                position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)",
                background: "rgba(255,255,255,0.15)", border: "none", color: "#fff",
                fontSize: 28, width: 44, height: 44, borderRadius: "50%", cursor: "pointer",
              }}
            >
              ‹
            </button>
          )}
          {selected < screenshots.length - 1 && (
            <button
              onClick={e => { e.stopPropagation(); setSelected(selected + 1); }}
              style={{
                position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)",
                background: "rgba(255,255,255,0.15)", border: "none", color: "#fff",
                fontSize: 28, width: 44, height: 44, borderRadius: "50%", cursor: "pointer",
              }}
            >
              ›
            </button>
          )}
        </div>
      )}
    </>
  );
}

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
            <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap", marginBottom: 20 }}>
              <span style={{
                fontSize: 12, padding: "4px 12px", background: project.badgeColor,
                color: "#fff", borderRadius: 2, fontWeight: 600, letterSpacing: 1,
              }}>
                {project.badge}
              </span>
              {project.externalUrl && project.externalUrl.startsWith("http") && (
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    fontSize: 12, color: project.badgeColor, textDecoration: "none",
                    padding: "4px 12px", border: `1px solid ${project.badgeColor}`, borderRadius: 2,
                    fontWeight: 600, transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = project.badgeColor;
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = project.badgeColor;
                  }}
                >
                  {project.externalUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")} ↗
                </a>
              )}
              {project.stats.map((stat, i) => (
                <span key={i} style={{ fontSize: 12, color: "var(--text-muted)" }}>{stat}</span>
              ))}
              {project.lineAccounts && project.lineAccounts.map((acc) => (
                <a
                  key={acc.url}
                  href={acc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    fontSize: 12, color: "#1a1a1a", textDecoration: "none",
                    padding: "4px 12px", border: "1px solid #ddd", borderRadius: 2,
                    fontWeight: 500, transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#06C755";
                    e.currentTarget.style.color = "#06C755";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#ddd";
                    e.currentTarget.style.color = "#1a1a1a";
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.070 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                  </svg>
                  {acc.label}を友だち追加
                </a>
              ))}
              {project.githubRepo && project.githubPublic && (
                <a
                  href={`https://github.com/${project.githubRepo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    fontSize: 12, color: "#1a1a1a", textDecoration: "none",
                    padding: "4px 12px", border: "1px solid #ddd", borderRadius: 2,
                    fontWeight: 500, transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = project.badgeColor;
                    e.currentTarget.style.color = project.badgeColor;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#ddd";
                    e.currentTarget.style.color = "#1a1a1a";
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub でコードを見る
                </a>
              )}
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

        {/* Results summary box */}
        <FadeIn>
          <section style={{ marginBottom: 48 }}>
            <div style={{
              padding: "28px 32px",
              background: `linear-gradient(135deg, ${project.badgeColor}0d, ${project.badgeColor}05)`,
              border: `1px solid ${project.badgeColor}33`,
              borderLeft: `4px solid ${project.badgeColor}`,
              borderRadius: 4,
            }}>
              <div style={{ fontSize: 11, color: project.badgeColor, letterSpacing: 3, marginBottom: 16, fontWeight: 700 }}>
                このプロジェクトで実現できたこと
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {project.detail.results.map((item, i) => (
                  <li key={i} style={{
                    display: "flex", gap: 12,
                    marginBottom: i < project.detail.results.length - 1 ? 10 : 0,
                    fontSize: 13, color: "#1a1a1a", lineHeight: 1.7, fontWeight: 500,
                  }}>
                    <span style={{ color: project.badgeColor, fontSize: 16, flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
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

        {/* Screenshots */}
        {project.screenshots && project.screenshots.length > 0 && (
          <FadeIn>
            <section style={{ marginBottom: 48 }}>
              <h2 style={{ fontSize: 18, fontWeight: 700, color: "#1a1a1a", marginBottom: 16, paddingBottom: 8, borderBottom: `2px solid ${project.borderColor}` }}>
                画面イメージ
              </h2>
              <ScreenshotGallery screenshots={project.screenshots} badgeColor={project.badgeColor} />
            </section>
          </FadeIn>
        )}

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

        {/* Challenges */}
        <FadeIn>
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "#1a1a1a", marginBottom: 16, paddingBottom: 8, borderBottom: "2px solid #ddd" }}>
              技術的な取り組み
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

        {/* Design Doc */}
        {project.detail.designDoc && (
          <>
            <FadeIn>
              <section style={{ marginBottom: 48 }}>
                <div style={{ fontSize: 10, color: project.badgeColor, letterSpacing: 4, marginBottom: 20 }}>
                  // DESIGN DOCUMENT
                </div>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: "#1a1a1a", marginBottom: 16, paddingBottom: 8, borderBottom: `2px solid ${project.borderColor}` }}>
                  アーキテクチャ
                </h2>
                <div style={{
                  padding: "20px 24px", background: "#1a1a1a", color: "#e0e0e0",
                  borderRadius: 4, fontSize: 12, lineHeight: 1.6,
                  fontFamily: "inherit", whiteSpace: "pre", overflowX: "auto",
                }}>
                  {project.detail.designDoc.architecture}
                </div>
              </section>
            </FadeIn>

            <FadeIn>
              <section style={{ marginBottom: 48 }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: "#1a1a1a", marginBottom: 16, paddingBottom: 8, borderBottom: "2px solid #ddd" }}>
                  処理フロー
                </h2>
                <div style={{ display: "grid", gap: 12 }}>
                  {project.detail.designDoc.dataFlow.map((item, i) => (
                    <div key={i} style={{
                      display: "flex", gap: 16, padding: "14px 20px",
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

            {project.detail.designDoc.apiSpecs && (
              <FadeIn>
                <section style={{ marginBottom: 48 }}>
                  <h2 style={{ fontSize: 18, fontWeight: 700, color: "#1a1a1a", marginBottom: 16, paddingBottom: 8, borderBottom: "2px solid #ddd" }}>
                    API仕様
                  </h2>
                  <div style={{ overflowX: "auto" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                      <thead>
                        <tr style={{ borderBottom: `2px solid ${project.borderColor}` }}>
                          <th style={{ textAlign: "left", padding: "8px 12px", color: "#1a1a1a", fontWeight: 600 }}>メソッド</th>
                          <th style={{ textAlign: "left", padding: "8px 12px", color: "#1a1a1a", fontWeight: 600 }}>パス</th>
                          <th style={{ textAlign: "left", padding: "8px 12px", color: "#1a1a1a", fontWeight: 600 }}>説明</th>
                        </tr>
                      </thead>
                      <tbody>
                        {project.detail.designDoc.apiSpecs.map((api, i) => (
                          <tr key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                            <td style={{ padding: "10px 12px" }}>
                              <span style={{
                                fontSize: 11, padding: "2px 8px", background: project.badgeColor,
                                color: "#fff", borderRadius: 2, fontWeight: 600,
                              }}>
                                {api.method}
                              </span>
                            </td>
                            <td style={{ padding: "10px 12px", fontFamily: "inherit", color: "var(--text)" }}>
                              {api.path}
                            </td>
                            <td style={{ padding: "10px 12px", color: "var(--text-light)" }}>
                              {api.description}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              </FadeIn>
            )}

            {project.detail.designDoc.dataModels && (
              <FadeIn>
                <section style={{ marginBottom: 48 }}>
                  <h2 style={{ fontSize: 18, fontWeight: 700, color: "#1a1a1a", marginBottom: 16, paddingBottom: 8, borderBottom: "2px solid #ddd" }}>
                    データモデル
                  </h2>
                  <div style={{
                    padding: "20px 24px", background: "#1a1a1a", color: "#e0e0e0",
                    borderRadius: 4, fontSize: 12, lineHeight: 1.7,
                    fontFamily: "inherit", whiteSpace: "pre", overflowX: "auto",
                  }}>
                    {project.detail.designDoc.dataModels}
                  </div>
                </section>
              </FadeIn>
            )}

            {project.detail.designDoc.envVars && (
              <FadeIn>
                <section style={{ marginBottom: 48 }}>
                  <h2 style={{ fontSize: 18, fontWeight: 700, color: "#1a1a1a", marginBottom: 16, paddingBottom: 8, borderBottom: "2px solid #ddd" }}>
                    環境変数
                  </h2>
                  <div style={{ overflowX: "auto" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                      <thead>
                        <tr style={{ borderBottom: `2px solid ${project.borderColor}` }}>
                          <th style={{ textAlign: "left", padding: "8px 12px", color: "#1a1a1a", fontWeight: 600 }}>変数名</th>
                          <th style={{ textAlign: "left", padding: "8px 12px", color: "#1a1a1a", fontWeight: 600 }}>必須</th>
                          <th style={{ textAlign: "left", padding: "8px 12px", color: "#1a1a1a", fontWeight: 600 }}>説明</th>
                        </tr>
                      </thead>
                      <tbody>
                        {project.detail.designDoc.envVars.map((env, i) => (
                          <tr key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                            <td style={{ padding: "10px 12px", fontFamily: "inherit", color: "var(--text)", fontWeight: 500 }}>
                              {env.name}
                            </td>
                            <td style={{ padding: "10px 12px" }}>
                              <span style={{
                                fontSize: 11, padding: "2px 8px", borderRadius: 2,
                                background: env.required ? project.badgeColor : "var(--bg-alt)",
                                color: env.required ? "#fff" : "var(--text-muted)",
                                fontWeight: 600,
                              }}>
                                {env.required ? "必須" : "任意"}
                              </span>
                            </td>
                            <td style={{ padding: "10px 12px", color: "var(--text-light)" }}>
                              {env.description}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              </FadeIn>
            )}
          </>
        )}

        {/* CTA */}
        <FadeIn>
          <div style={{
            textAlign: "center", padding: "48px 32px",
            background: `linear-gradient(135deg, ${project.badgeColor}0d, ${project.badgeColor}05)`,
            border: `1px solid ${project.badgeColor}22`,
            borderRadius: 4, marginBottom: 32,
          }}>
            <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 8 }}>
              同様の案件・類似する課題をお持ちの方へ
            </div>
            <div style={{ fontSize: 20, fontWeight: 700, color: "#1a1a1a", marginBottom: 24, lineHeight: 1.5 }}>
              まずはお気軽にご相談ください
            </div>
            <Link
              href="/#contact"
              style={{
                display: "inline-block", padding: "14px 48px",
                background: project.badgeColor, color: "#fff",
                borderRadius: 2, fontSize: 14, letterSpacing: 2,
                fontWeight: 700, textDecoration: "none",
                boxShadow: `0 4px 20px ${project.badgeColor}44`,
                transition: "all 0.2s",
              }}
            >
              相談する →
            </Link>
          </div>
        </FadeIn>

        {/* Back link */}
        <FadeIn>
          <div style={{ textAlign: "center", paddingTop: 8 }}>
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
