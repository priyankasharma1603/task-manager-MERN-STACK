function StatCard({ title, value, color }) {
  return (
    <div
      style={{
        background: "var(--card)",
        padding: 18,
        borderRadius: 16,
        textAlign: "center",
        border: `1px solid ${color}`,
        minWidth: 150,
        transition: "0.3s",
      }}
    >
      <p style={{ color: "var(--muted)", marginBottom: 6 }}>{title}</p>
      <h2 style={{ color, fontSize: 28 }}>{value}</h2>
    </div>
  );
}
