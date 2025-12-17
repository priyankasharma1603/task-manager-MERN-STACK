import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <div style={styles.app}>
      <h1 style={styles.title}>Task Manager</h1>
      <Dashboard />
    </div>
  );
}

/* ---------- STYLES ---------- */
const styles = {
  app: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",      // ⬅️ horizontal center
    justifyContent: "center",  // ⬅️ vertical center
    background: "radial-gradient(circle at top, #111827, #020617)",
    padding: 20,
  },

  title: {
    marginBottom: 20,
    fontSize: 32,
    fontWeight: 600,
    color: "#fff",
  },
};
