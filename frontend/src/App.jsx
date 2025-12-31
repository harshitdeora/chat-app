import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
	const { authUser } = useAuthContext();

	return (
		<div className="relative min-h-screen bg-black">
			{/* FLOATING BACKGROUND */}
			<ul className="circles">
				{Array.from({ length: 10 }).map((_, i) => (
					<li key={i}></li>
				))}
			</ul>

			{/* APP CONTENT */}
			<div className="relative z-10 min-h-screen p-4 flex items-center justify-center">
				<Routes>
					<Route
						path="/"
						element={authUser ? <Home /> : <Navigate to="/login" />}
					/>
					<Route
						path="/login"
						element={authUser ? <Navigate to="/" /> : <Login />}
					/>
					<Route
						path="/signup"
						element={authUser ? <Navigate to="/" /> : <SignUp />}
					/>
				</Routes>
				<Toaster />
			</div>
		</div>
	);
}

export default App;
