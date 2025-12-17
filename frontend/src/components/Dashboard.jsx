import { useEffect, useState } from "react";
import { API } from "../api";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const loadTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const stats = {
    total: tasks.length,
    completed: tasks.filter(t => t.status === "completed").length,
    inProgress: tasks.filter(t => t.status === "in-progress").length,
    pending: tasks.filter(t => t.status === "pending").length,
  };

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.heading}>Hi, User 👋</h1>

      <div style={styles.grid}>
        <StatCard title="Total" value={stats.total} color="#38bdf8" />
        <StatCard title="Completed" value={stats.completed} color="#22c55e" />
        <StatCard title="In Progress" value={stats.inProgress} color="#facc15" />
        <StatCard title="Pending" value={stats.pending} color="#f87171" />
      </div>

      <AddTask onSuccess={loadTasks} />

      <TaskList
        tasks={tasks}
        filter={filter}
        setFilter={setFilter}
        onChange={loadTasks}
      />
    </div>
  );
}

/* ---------- STAT CARD ---------- */
function StatCard({ title, value, color }) {
  return (
    <div
      style={styles.card}
      onMouseEnter={(e) =>
        (e.currentTarget.style.boxShadow = `0 0 20px ${color}`)
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.boxShadow = "none")
      }
    >
      <p style={styles.cardTitle}>{title}</p>
      <h2 style={{ color }}>{value}</h2>
    </div>
  );
}

/* ---------- STYLES ---------- */
const styles = {
  wrapper: {
    minHeight: "100vh",
    background: "radial-gradient(circle at top, #111827, #020617)",
    padding: 30,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 25,
    color: "#fff",
  },

  heading: {
    fontSize: 28,
    fontWeight: 600,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: 16,
    width: "100%",
    maxWidth: 700,
  },

  card: {
    background: "#020617",
    border: "1px solid #1e293b",
    padding: 18,
    borderRadius: 14,
    textAlign: "center",
    transition: "0.3s",
  },

  cardTitle: {
    color: "#94a3b8",
    marginBottom: 6,
  },
};
