import React, { useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/signin"); // ✅ After signup, go to signin page
    } catch (err) {
      if (err.code === "auth/weak-password") {
        setError("⚠️ Password should be at least 6 characters.");
      } else if (err.code === "auth/email-already-in-use") {
        setError("⚠️ Email already in use.");
      } else {
        setError("❌ Something went wrong. Try again.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-2xl transform transition duration-300 hover:scale-105">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-800">
          Create Account
        </h2>

        <form onSubmit={handleSignUp} className="space-y-5">
          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none text-gray-700"
          />
          <input
            type="password"
            placeholder="Create a Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none text-gray-700"
          />
          <button
            type="submit"
            className="w-full py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition"
          >
            Sign Up
          </button>
        </form>

        {error && (
          <p className="mt-4 text-center text-red-500 text-sm font-medium">
            {error}
          </p>
        )}

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/signin" className="text-green-600 font-medium hover:underline">
            Sign In
          </Link>
        </p>

        <div className="mt-6 text-center">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
          >
            ⬅️ Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
