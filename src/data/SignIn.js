import React, { useState } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); // login ke baad home page pe redirect
    } catch (err) {
      if (err.code === "auth/invalid-email") {
        setError("Invalid email address.");
      } else if (err.code === "auth/user-not-found") {
        setError("No account found with this email.");
      } else if (err.code === "auth/wrong-password") {
        setError("Incorrect password.");
      } else {
        setError("Something went wrong. Try again.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-100 via-white to-green-200">
      <div className="relative w-full max-w-md p-8 bg-white/70 backdrop-blur-xl rounded-2xl shadow-2xl border border-green-200 transition-all duration-300 hover:shadow-green-300">
        <h2 className="text-3xl font-extrabold text-center text-green-700 mb-6 tracking-wide">
          Welcome Back 👋
        </h2>

        <form onSubmit={handleSignIn} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-2 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 hover:shadow-md transition-all duration-200"
          >
            Sign In
          </button>
        </form>

        {error && <p className="mt-4 text-center text-red-500 text-sm">{error}</p>}

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-green-600 font-semibold hover:underline">
              Sign Up
            </Link>
          </p>
        </div>

        {/* Back to Home Button */}
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 text-green-700 border border-green-400 rounded-lg hover:bg-green-500 hover:text-white transition-all duration-200"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
