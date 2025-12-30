import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

console.log("🔥 Socket.IO server file loaded");

const io = new Server(server, {
	cors: {
		origin: "http://localhost:3000",
		methods: ["GET", "POST"],
		credentials: true,
	},
});

const userSocketMap = {}; // { userId: socketId }

export const getReceiverSocketId = (receiverId) => {
	return userSocketMap[receiverId];
};

io.on("connection", (socket) => {
	console.log("🔥 SOCKET CONNECTED:", socket.id);

	const userId = socket.handshake.query.userId;

	if (userId && userId !== "undefined") {
		userSocketMap[userId] = socket.id;
	}

	io.emit("getOnlineUsers", Object.keys(userSocketMap));

	socket.on("disconnect", () => {
		console.log("🔥 SOCKET DISCONNECTED:", socket.id);

		if (userId && userId !== "undefined") {
			delete userSocketMap[userId];
		}

		io.emit("getOnlineUsers", Object.keys(userSocketMap));
	});
});

export { app, io, server };
