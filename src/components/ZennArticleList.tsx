"use client";

import { motion } from "framer-motion";

type ZennArticle = {
  id: number;
  title: string;
  slug: string;
  emoji: string;
  liked_count: number;
  published_at: string;
};

export default function ZennArticleList({ articles }: { articles: ZennArticle[] }) {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      {articles.map((article, index) => (
        <motion.a
          key={article.id}
          href={`https://zenn.dev/keita2399/articles/${article.slug}`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: "flex", alignItems: "center", gap: 16,
            padding: "14px 20px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 4,
            textDecoration: "none",
            transition: "border-color 0.2s, background 0.2s",
          }}
          whileHover={{ borderColor: "rgba(96,165,250,0.4)", backgroundColor: "rgba(255,255,255,0.07)" }}
        >
          <span style={{ fontSize: 24, flexShrink: 0 }}>{article.emoji}</span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              fontSize: 13, color: "#e2e8f0", fontWeight: 500,
              overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
            }}>
              {article.title}
            </div>
            <div style={{ fontSize: 11, color: "#64748b", marginTop: 4 }}>
              {new Date(article.published_at).toLocaleDateString("ja-JP", { year: "numeric", month: "short", day: "numeric" })}
              {article.liked_count > 0 && (
                <span style={{ marginLeft: 12, color: "#94a3b8" }}>♥ {article.liked_count}</span>
              )}
            </div>
          </div>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(148,163,184,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </motion.a>
      ))}
    </div>
  );
}
