import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useGetConversations = () => {
	const { authUser } = useAuthContext();
	const [loading, setLoading] = useState(false);
	const [conversations, setConversations] = useState([]);

	useEffect(() => {
		if (!authUser) return; // ✅ GUARD

		const getConversations = async () => {
			setLoading(true);
			try {
				const res = await fetch("/api/users", {
					credentials: "include", // ✅ send cookies
				});
				const data = await res.json();

				if (!res.ok) {
					throw new Error(data.error || "Failed to fetch users");
				}

				setConversations(data);
			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};

		getConversations();
	}, [authUser]);

	return { loading, conversations };
};

export default useGetConversations;
