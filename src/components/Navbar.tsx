"use client";

import Link from "next/link";

const links = [
  { href: "#process", label: "進め方" },
  { href: "#timeline", label: "キャリア" },
  { href: "#works", label: "実績" },
  { href: "#tools", label: "AIツール" },
  { href: "#services", label: "対応案件" },
  { href: "#contact", label: "連絡" },
];

export default function Navbar() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "rgba(15,23,42,0.92)", backdropFilter: "blur(12px)",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
      display: "flex", justifyContent: "center", alignItems: "center",
      padding: "0 32px", height: 56,
    }}>
      <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => scrollTo(e, link.href)}
            className="nav-link"
            style={{
              color: "rgba(203,213,225,0.8)", fontSize: 12, letterSpacing: 1,
              textDecoration: "none", padding: 4, cursor: "pointer",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#93c5fd"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(203,213,225,0.8)"; }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="https://zenn.dev/keita2399"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
          style={{
            color: "rgba(203,213,225,0.8)", fontSize: 12, letterSpacing: 1,
            textDecoration: "none", padding: 4, cursor: "pointer",
            display: "inline-flex", alignItems: "center", gap: 5,
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = "#93c5fd"; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(203,213,225,0.8)"; }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          </svg>
          記事
          <span style={{
            fontSize: 9, background: "#2563eb", color: "#fff",
            padding: "1px 6px", borderRadius: 8, fontWeight: 600, lineHeight: 1.4,
          }}>
            Zenn
          </span>
        </a>
        <Link
          href="/resume"
          style={{
            color: "#fff", fontSize: 11, letterSpacing: 1, fontWeight: 600,
            textDecoration: "none", padding: "5px 14px", cursor: "pointer",
            background: "#2563eb", borderRadius: 3,
            display: "inline-flex", alignItems: "center", gap: 5,
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#1d4ed8"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#2563eb"; }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </svg>
          経歴書
        </Link>
      </div>
    </nav>
  );
}
