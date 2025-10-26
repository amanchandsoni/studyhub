import React from "react";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 flex flex-col">
      
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-6 md:px-16 py-4 bg-white/70 backdrop-blur-md shadow-sm fixed top-0 left-0 z-20">
        <div className="text-gray-800 text-2xl font-bold">EduMaster</div>
        <Link
          to="/"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition"
        >
          Home
        </Link>
      </nav>

      {/* About Section */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-28 md:pt-36">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-800 mb-6">
          About EduMaster
        </h1>
        <p className="max-w-3xl text-lg md:text-xl text-blue-900/80 leading-relaxed mb-10">
          EduMaster is designed to help students from Class 9 to 10 learn smarter with 
          <span className="font-semibold"> structured notes</span>, 
          <span className="font-semibold"> practice questions</span>, 
          and a <span className="font-semibold">progress tracker</span>. 
          Our goal is to make learning simple, engaging, and effective 🚀.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">📘 Structured Notes</h2>
            <p className="text-blue-900/80">Clear explanations for every chapter so you never feel lost.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">📝 Practice Questions</h2>
            <p className="text-blue-900/80">Test your knowledge with instant feedback to improve faster.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">📊 Progress Tracker</h2>
            <p className="text-blue-900/80">Stay motivated by tracking your daily learning journey.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex gap-6">
          <Link
  to="/get-started"
  className="px-8 py-4 bg-blue-500 text-white font-bold rounded-2xl shadow-md transform hover:scale-105 hover:bg-blue-600 transition duration-300"
>
  Get Started
</Link>

       
          <Link
            to="/"
            className="px-8 py-4 border-2 border-blue-500 text-blue-600 font-bold rounded-2xl hover:bg-blue-500 hover:text-white transition"
          >
            Back to Home
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-blue-800/70 py-6 text-sm">
        &copy; {new Date().getFullYear()} Aman Kumar Soni. All rights reserved.
      </div>
    </div>
  );
}
