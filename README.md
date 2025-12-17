# 🚀 Task Manager – MERN Stack

A modern full-stack task management application built using **MongoDB, Express, React (Vite), Node.js**, and deployed on **Vercel**.

👉 **Live Demo:**
🔗 [https://task-manager-mern-stack-puaxt9koi-priyankasharma1603s-projects.vercel.app/](https://task-manager-mern-stack-puaxt9koi-priyankasharma1603s-projects.vercel.app/)

---

## 📌 Overview

This application allows users to:
✔ Add new tasks
✔ Mark tasks as complete/incomplete
✔ Delete tasks
✔ View all tasks in a clean UI
✔ Data persists using MongoDB

The goal of this project is to demonstrate:

* Scalable MERN architecture
* REST API development
* CRUD operations
* React state management
* Deployment-ready production build

---

## 🖥️ Tech Stack

### 🌐 Frontend

* React (Vite)
* JSX + Hooks
* Axios API calls
* Styled UI

### 💾 Backend

* Node.js + Express
* REST API endpoints
* Mongoose
* MongoDB Atlas

### ☁️ Deployment

* Frontend → Vercel
* Backend → Node server (local / cloud ready)

---

## 📂 Project Structure

```
task-manager-mern-stack/
│
├── backend/
│   ├── server.js
│   ├── routes/taskRoutes.js
│   ├── models/taskModel.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddTask.jsx
│   │   │   └── TaskList.jsx
│   │   ├── api.js
│   │   └── App.jsx
│   ├── vite.config.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Running the Project Locally

### 1️⃣ Clone Repository

```
git clone https://github.com/priyankasharma1603/task-manager-MERN-STACK.git
```

---

### 2️⃣ Setup Backend

```
cd backend
npm install

```

📌 Create `.env` file:

```
MONGO_URI=your_mongo_uri_here
PORT=5000
```

📌 Start backend:

```
npm run dev
```

---

### 3️⃣ Setup Frontend

```
cd frontend
npm install
npm run dev
```

---

## 🧠 API Endpoints

### 👉 Create Task

```
POST /tasks
```

Request body:

```json
{
  "title": "My task name"
}
```

### 👉 Get All Tasks

```
GET /tasks
```

### 👉 Update Task

```
PUT /tasks/:id
```

### 👉 Delete Task

```
DELETE /tasks/:id
```

---

## 🖼️ UI Features

✔ Instant Add/Remove Tasks
✔ Click to toggle task state
✔ Strike-through completed tasks
✔ Smooth layout & usability

---

## 🌍 Live Deployment

Frontend deployed on **Vercel**
🔗
[https://task-manager-mern-stack-puaxt9koi-priyankasharma1603s-projects.vercel.app/](https://task-manager-mern-stack-puaxt9koi-priyankasharma1603s-projects.vercel.app/)

---

## 🧾 Future Enhancements

🚀 JWT Authentication
🚀 User accounts + roles
🚀 Real-time sync using Socket.io
🚀 Task priorities + deadlines
🚀 Filtering + search
🚀 Beautiful dashboard UI
🚀 Deploy backend to Render / Railway
🚀 Optimistic UI state
🚀 Testing with Jest

---

## 🤝 Contributions

Pull requests are welcome!

---

## 🧑‍💻 Author

**Priyanka Sharma**
GitHub → [https://github.com/priyankasharma1603](https://github.com/priyankasharma1603)
LinkedIn → [https://www.linkedin.com/in/priyankasharma1603](https://www.linkedin.com/in/priyankasharma1603)

---

If you want, I can:
✔ add screenshots
✔ improve UI
✔ deploy backend
✔ add authentication
✔ add task filtering
✔ add socket real-time updates

Just say the word 😊
