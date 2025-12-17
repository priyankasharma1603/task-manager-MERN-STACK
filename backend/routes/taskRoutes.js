const express = require("express");
const Task = require("../models/Task");

const router = express.Router();

/* ---------------- GET ALL TASKS ---------------- */
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
});

/* ---------------- CREATE TASK ---------------- */
router.post("/", async (req, res) => {
  try {
    const { title, status } = req.body;

    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    const task = await Task.create({
      title,
      status: status || "pending",
    });

    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: "Failed to create task" });
  }
});

/* ---------------- UPDATE TASK ---------------- */
router.put("/:id", async (req, res) => {
  try {
    const { status, title } = req.body;

    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { status, title },
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.json(task);
  } catch (err) {
    res.status(500).json({ error: "Failed to update task" });
  }
});

/* ---------------- DELETE TASK ---------------- */
router.delete("/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete task" });
  }
});

module.exports = router;
