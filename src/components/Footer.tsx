export default function Footer() {
  return (
    <footer style={{
      padding: "24px 32px",
      background: "#0f172a",
      borderTop: "1px solid rgba(255,255,255,0.08)",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      flexWrap: "wrap", gap: 12,
    }}>
      <span style={{ fontSize: 11, color: "rgba(147,197,253,0.5)", letterSpacing: 2 }}>KM_ © 2026</span>
      <span style={{ fontSize: 11, color: "rgba(147,197,253,0.4)" }}>Built with Next.js + Vercel</span>
    </footer>
  );
}
