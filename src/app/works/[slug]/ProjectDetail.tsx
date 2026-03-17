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

        {/* Challenges */}
        <FadeIn>
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "#1a1a1a", marginBottom: 16, paddingBottom: 8, borderBottom: "2px solid #ddd" }}>
              技術的チャレンジ
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
