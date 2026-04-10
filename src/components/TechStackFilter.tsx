"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type Project } from "@/data/projects";

// カテゴリ定義
const CATEGORIES: { label: string; color: string; tags: string[] }[] = [
  {
    label: "Frontend",
    color: "#60a5fa",
    tags: [
      "Next.js", "Next.js 14", "React", "TypeScript", "JavaScript",
      "Flutter", "Dart", "Three.js", "GLSL Shader", "Tailwind CSS",
      "HTML/CSS", "PWA", "Service Worker",
    ],
  },
  {
    label: "Backend / DB",
    color: "#34d399",
    tags: [
      "Prisma", "PostgreSQL", "Node.js", "Python", "FastAPI",
      "nodemailer", "Neon DB", "dayjs", "Cookie認証", "SheetJS",
      "Google Sheets API", "Vercel Cron",
    ],
  },
  {
    label: "AI / ML",
    color: "#a78bfa",
    tags: [
      "Gemini API", "Gemini Vision", "Gemini 2.5 Flash", "Claude API",
      "AI活用", "OpenAI API",
    ],
  },
  {
    label: "External API",
    color: "#fb923c",
    tags: [
      "LINE Messaging API", "Google Maps API",
      "Met Museum API", "AIC API", "Cleveland API",
      "Smithsonian API", "Wikidata SPARQL",
    ],
  },
  {
    label: "Infra / Tools",
    color: "#94a3b8",
    tags: ["Vercel", "Playwright", "HMAC", "Python"],
  },
];

// どのカテゴリにも属さないタグの色
const DEFAULT_COLOR = "#64748b";

function getCategoryColor(tag: string): string {
  for (const cat of CATEGORIES) {
    if (cat.tags.includes(tag)) return cat.color;
  }
  return DEFAULT_COLOR;
}

function getCategoryLabel(tag: string): string {
  for (const cat of CATEGORIES) {
    if (cat.tags.includes(tag)) return cat.label;
  }
  return "Other";
}

// タグ→プロジェクト一覧のマップを生成
function buildTagMap(): Map<string, Project[]> {
  const map = new Map<string, Project[]>();
  for (const p of projects) {
    for (const tag of p.tags) {
      if (!map.has(tag)) map.set(tag, []);
      map.get(tag)!.push(p);
    }
  }
  return map;
}

// カテゴリ順にタグをソート（カテゴリ内は使用数降順）
function groupedTags(tagMap: Map<string, Project[]>): { category: string; color: string; tags: string[] }[] {
  const result: { category: string; color: string; tags: string[] }[] = [];
  const usedTags = new Set<string>();

  for (const cat of CATEGORIES) {
    const inCat = cat.tags
      .filter((t) => tagMap.has(t))
      .sort((a, b) => (tagMap.get(b)?.length ?? 0) - (tagMap.get(a)?.length ?? 0));
    if (inCat.length > 0) {
      result.push({ category: cat.label, color: cat.color, tags: inCat });
      inCat.forEach((t) => usedTags.add(t));
    }
  }

  // どのカテゴリにも属さないタグ
  const others = Array.from(tagMap.keys())
    .filter((t) => !usedTags.has(t))
    .sort((a, b) => (tagMap.get(b)?.length ?? 0) - (tagMap.get(a)?.length ?? 0));
  if (others.length > 0) {
    result.push({ category: "Other", color: DEFAULT_COLOR, tags: others });
  }

  return result;
}

// モーダル内のプロジェクトカード（シンプル版）
function ModalProjectCard({ project, highlightTag }: { project: Project; highlightTag: string }) {
  const href = project.externalUrl?.startsWith("/")
    ? project.externalUrl
    : project.externalUrl
    ? project.externalUrl
    : `/works/${project.slug}`;
  const isExternal = !!project.externalUrl && !project.externalUrl.startsWith("/");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : undefined}
      style={{ textDecoration: "none", color: "inherit", display: "block" }}
      onClick={(e) => e.stopPropagation()}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.05)",
          border: `1px solid rgba(255,255,255,0.12)`,
          borderLeft: `3px solid ${project.borderColor}`,
          borderRadius: 4,
          padding: "16px 20px",
          transition: "all 0.2s",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.09)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.05)";
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>{project.title}</div>
          <div style={{ fontSize: 9, color: project.badgeColor, letterSpacing: 1, fontWeight: 600, flexShrink: 0, marginLeft: 12 }}>
            {project.badge}
          </div>
        </div>
        <div
          className="font-serif-jp"
          style={{ fontSize: 11, color: "rgba(219,234,254,0.7)", lineHeight: 1.7, marginBottom: 10, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}
        >
          {project.description}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
          {project.tags.map((t) => {
            const isHighlight = t === highlightTag;
            const color = getCategoryColor(t);
            return (
              <span
                key={t}
                style={{
                  fontSize: 9, padding: "2px 8px",
                  background: isHighlight ? `${color}30` : "transparent",
                  border: `1px solid ${isHighlight ? color : `${color}44`}`,
                  color: isHighlight ? color : `${color}99`,
                  borderRadius: 2,
                  fontWeight: isHighlight ? 700 : 400,
                  boxShadow: isHighlight ? `0 0 6px ${color}55` : "none",
                }}
              >
                {t}
              </span>
            );
          })}
        </div>
      </div>
    </a>
  );
}

export default function TechStackFilter() {
  const tagMap = useMemo(() => buildTagMap(), []);
  const grouped = useMemo(() => groupedTags(tagMap), [tagMap]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const modalProjects = useMemo(
    () => (selectedTag ? (tagMap.get(selectedTag) ?? []) : []),
    [selectedTag, tagMap]
  );

  // ESCで閉じる
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedTag(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // モーダル表示中はスクロールロック
  useEffect(() => {
    document.body.style.overflow = selectedTag ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedTag]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ marginBottom: 40 }}
      >
        <div style={{ fontSize: 11, color: "rgba(148,163,184,0.7)", marginBottom: 16, letterSpacing: 0.5 }}>
          技術タグをクリックすると使用プロジェクトを確認できます
        </div>

        {grouped.map(({ category, color, tags }) => (
          <div key={category} style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 10, color, letterSpacing: 3, marginBottom: 10, fontWeight: 600 }}>
              {category.toUpperCase()}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {tags.map((tag) => {
                const count = tagMap.get(tag)?.length ?? 0;
                return (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    style={{
                      fontSize: 13, padding: "6px 14px",
                      background: `${color}14`,
                      border: `1px solid ${color}44`,
                      color,
                      borderRadius: 3, cursor: "pointer",
                      transition: "all 0.15s",
                      display: "flex", alignItems: "center", gap: 6,
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.background = `${color}28`;
                      el.style.borderColor = `${color}99`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.background = `${color}14`;
                      el.style.borderColor = `${color}44`;
                    }}
                  >
                    {tag}
                    <span style={{ fontSize: 11, opacity: 0.6, fontWeight: 700 }}>×{count}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </motion.div>

      {/* モーダル */}
      <AnimatePresence>
        {selectedTag && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedTag(null)}
            style={{
              position: "fixed", inset: 0, zIndex: 1000,
              background: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)",
              display: "flex", alignItems: "center", justifyContent: "center",
              padding: "24px 16px",
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "rgba(15,23,42,0.97)",
                border: `1px solid ${getCategoryColor(selectedTag)}55`,
                borderTop: `3px solid ${getCategoryColor(selectedTag)}`,
                borderRadius: 6,
                width: "100%", maxWidth: 640,
                maxHeight: "80vh", overflow: "hidden",
                display: "flex", flexDirection: "column",
              }}
            >
              {/* ヘッダー */}
              <div style={{
                padding: "20px 24px 16px",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0,
              }}>
                <div>
                  <div style={{ fontSize: 9, color: getCategoryColor(selectedTag), letterSpacing: 3, marginBottom: 6, fontWeight: 600 }}>
                    {getCategoryLabel(selectedTag).toUpperCase()}
                  </div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: "#fff" }}>{selectedTag}</div>
                  <div style={{ fontSize: 11, color: "rgba(148,163,184,0.7)", marginTop: 4 }}>
                    {modalProjects.length} プロジェクトで使用
                  </div>
                </div>
                <button
                  onClick={() => setSelectedTag(null)}
                  style={{
                    background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)",
                    color: "rgba(203,213,225,0.7)", width: 32, height: 32, borderRadius: 4,
                    cursor: "pointer", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  ✕
                </button>
              </div>

              {/* プロジェクト一覧 */}
              <div style={{ overflowY: "auto", padding: "16px 24px 24px", display: "flex", flexDirection: "column", gap: 10 }}>
                {modalProjects.map((p) => (
                  <ModalProjectCard key={p.slug} project={p} highlightTag={selectedTag!} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
