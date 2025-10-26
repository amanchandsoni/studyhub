import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-blue-200 to-blue-400 flex flex-col">
      
      {/* Top Navbar */}
      <nav className="w-full flex justify-between items-center px-6 md:px-16 py-4 bg-white/50 backdrop-blur-md fixed top-0 left-0 z-20 shadow-sm">
        <div className="text-gray-800 text-2xl font-bold">EduMaster</div>
        <div className="flex gap-4">
          <Link
            to="/signin"
            className="px-4 py-2 border-2 border-blue-500 text-blue-600 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:bg-blue-600 transition"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center flex-1 text-center px-6 pt-32 md:pt-40">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-800 mb-4">
          Learn Smarter, Not Harder
        </h1>
        <p className="text-lg md:text-xl text-blue-900/80 mb-8 max-w-2xl">
          Access structured notes, practice questions, and resources for Class 9 to 12 students. Start improving today!
        </p>

        <div className="flex gap-6 flex-wrap justify-center">
          <Link
            to="/get-started"
            className="px-8 py-4 bg-blue-500 text-white font-bold rounded-2xl shadow-md transform hover:scale-105 hover:bg-blue-600 transition duration-300"
          >
            Get Started
          </Link>
          <Link
            to="/about"
            className="px-8 py-4 border-2 border-blue-500 text-blue-600 font-bold rounded-2xl hover:bg-blue-500 hover:text-white transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-blue-50 py-16 px-6 md:px-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300">
            <h2 className="text-2xl font-bold mb-2 text-blue-700">Structured Notes</h2>
            <p className="text-blue-900/80">Comprehensive notes for every chapter with clear explanations.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300">
            <h2 className="text-2xl font-bold mb-2 text-blue-700">Practice Questions</h2>
            <p className="text-blue-900/80">Test your knowledge with questions and instant feedback.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300">
            <h2 className="text-2xl font-bold mb-2 text-blue-700">Progress Tracker</h2>
            <p className="text-blue-900/80">Track your learning progress and improve every day.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-blue-800/70 py-6 text-sm">
        &copy; {new Date().getFullYear()} Aman Kumar Soni. All rights reserved.
      </div>
    </div>
  );
}
