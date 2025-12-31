💬 Real-Time Chat Application

A full-stack real-time chat application built using the MERN stack with Socket.IO, featuring user authentication, online status, and instant messaging. The app is fully deployed and production-ready.

🚀 Live Demo:
👉 https://chat-app-8gqa.onrender.com

📦 GitHub Repository:
👉 https://github.com/harshitdeora/chat-app

✨ Features

🔐 JWT-based Authentication (Login & Signup)
💬 Real-time Messaging using Socket.IO
🟢 Online / Offline User Status
🧵 Conversation-based Chat System
📦 MongoDB-backed Message Persistence
🎨 Modern UI with Tailwind CSS & DaisyUI
⚡ Fast Frontend built using Vite + React

🌐 Deployed on Render

🛠️ Tech Stack

Frontend

React
Vite
Tailwind CSS
DaisyUI
Zustand (state management)
Socket.IO Client

Backend

Node.js
Express.js
MongoDB (Mongoose)
Socket.IO
JWT Authentication
bcrypt

Deployment

Render (Full-stack deployment)

📂 Project Structure
chat-app/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── socket/
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── vite.config.js
│
├── .env
├── package.json
└── README.md

⚙️ Environment Variables

Create a .env file in the root directory and add:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development

🚀 Getting Started (Local Setup)
1️⃣ Clone the repository
git clone https://github.com/harshitdeora/chat-app.git
cd chat-app

2️⃣ Install dependencies
npm install
npm install --prefix frontend

3️⃣ Start the backend server
npm run server

4️⃣ Start the frontend
npm run dev --prefix frontend


Frontend runs on:
👉 http://localhost:5173
Backend runs on:
👉 http://localhost:5000

🔄 Real-Time Functionality

Uses Socket.IO for bidirectional communication
Tracks online users in real time
Emits and listens to message events instantly
Syncs messages with MongoDB for persistence

 