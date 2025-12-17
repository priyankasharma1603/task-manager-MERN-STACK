import { useState } from "react";
import { API } from "../api";

export default function AddTask({ onSuccess }) {
  const [title, setTitle] = useState("");

  const addTask = async () => {
    if (!title.trim()) return;

    await API.post("/tasks", {
      title,
      status: "pending",
    });

    setTitle("");
    onSuccess();
  };

  return (
    <div style={styles.wrapper}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task..."
        style={styles.input}
      />
      <button onClick={addTask} style={styles.btn}>
        Add
      </button>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    gap: 10,
    width: "100%",
    maxWidth: 700,
  },

  input: {
    flex: 1,
    padding: "10px 14px",
    borderRadius: 10,
    border: "1px solid #1e293b",
    background: "#020617",
    color: "#fff",
  },

  btn: {
    padding: "10px 18px",
    borderRadius: 10,
    border: "none",
    cursor: "pointer",
    background: "linear-gradient(90deg,#22d3ee,#7c5cff)",
    color: "#000",
    fontWeight: 600,
  },
};
