import { API } from "../api";

export default function TaskList({ tasks, filter, setFilter, onChange }) {
  const filtered =
    filter === "all" ? tasks : tasks.filter(t => t.status === filter);

  const updateStatus = async (id, status) => {
    await API.put(`/tasks/${id}`, { status });
    onChange();
  };

  const removeTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    onChange();
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.filters}>
        {["all", "pending", "in-progress", "completed"].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              ...styles.filterBtn,
              background:
                filter === f ? "linear-gradient(90deg,#22d3ee,#7c5cff)" : "#020617",
            }}
          >
            {f}
          </button>
        ))}
      </div>

      <ul style={styles.list}>
        {filtered.map(task => (
          <li key={task._id} style={styles.item}>
            <span>{task.title}</span>

            <select
              value={task.status}
              onChange={(e) => updateStatus(task._id, e.target.value)}
              style={styles.select}
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>

            <button onClick={() => removeTask(task._id)} style={styles.delete}>
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  wrapper: {
    width: "100%",
    maxWidth: 700,
  },

  filters: {
    display: "flex",
    gap: 8,
    marginBottom: 12,
    justifyContent: "center",
  },

  filterBtn: {
    padding: "6px 14px",
    borderRadius: 20,
    border: "1px solid #1e293b",
    color: "#fff",
    cursor: "pointer",
    transition: "0.3s",
  },

  list: {
    listStyle: "none",
    padding: 0,
  },

  item: {
    background: "#020617",
    border: "1px solid #1e293b",
    padding: 14,
    borderRadius: 12,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  select: {
    background: "#020617",
    color: "#fff",
    border: "1px solid #1e293b",
    borderRadius: 6,
    padding: "4px 6px",
  },

  delete: {
    background: "transparent",
    border: "none",
    color: "#f87171",
    cursor: "pointer",
    fontSize: 16,
  },
};
