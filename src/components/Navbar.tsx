"use client";

const links = [
  { href: "#timeline", label: "キャリア" },
  { href: "#skills", label: "スキル" },
  { href: "#works", label: "実績" },
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
      background: "rgba(250,249,246,0.92)", backdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--border)",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "0 32px", height: 56,
    }}>
      <span style={{ color: "var(--accent)", fontSize: 15, fontWeight: 700, letterSpacing: 3 }}>
        KM_
      </span>
      <div style={{ display: "flex", gap: 28 }}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => scrollTo(e, link.href)}
            className="nav-link"
            style={{
              color: "var(--text-muted)", fontSize: 12, letterSpacing: 1,
              textDecoration: "none", padding: 4, cursor: "pointer",
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
