import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import { io } from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
	return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
	const { authUser } = useAuthContext();
	const [socket, setSocket] = useState(null);
	const [onlineUsers, setOnlineUsers] = useState([]);

	useEffect(() => {
		// ✅ connect ONLY when user is fully logged in
		if (!authUser?._id) return;

		console.log("🟢 Frontend attempting socket connection...");

		const socketInstance = io("https://chat-app-8gqa.onrender.com", {
			withCredentials: true,
			query: {
				userId: authUser._id,
			},
		});

		setSocket(socketInstance);

		socketInstance.on("getOnlineUsers", (users) => {
			setOnlineUsers(users);
		});

		return () => {
			console.log("🔴 Frontend socket disconnected");
			socketInstance.disconnect();
			setSocket(null);
		};
	}, [authUser]);

	return (
		<SocketContext.Provider value={{ socket, onlineUsers }}>
			{children}
		</SocketContext.Provider>
	);
};
