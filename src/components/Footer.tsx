export default function Footer() {
  return (
    <footer style={{
      padding: 32, borderTop: "1px solid var(--border)",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      flexWrap: "wrap", gap: 12,
    }}>
      <span style={{ fontSize: 11, color: "#bbb", letterSpacing: 2 }}>KM_ © 2025</span>
      <span style={{ fontSize: 11, color: "#bbb" }}>Built with Next.js + Vercel</span>
    </footer>
  );
}
