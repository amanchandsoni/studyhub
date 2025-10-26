import React from "react";
import { Link } from "react-router-dom";

export default function GetEasyNotesPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 px-6 py-12">

      <h1 className="text-5xl font-extrabold text-blue-800 mb-12 text-center">
        GetEasy Notes
      </h1>

      <p className="text-blue-900/80 text-center mb-10 max-w-2xl">
        Access detailed notes, practice questions, and learning resources for Class 9 and Class 10. Choose your class to get started.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl">

        {/* Class 9 Card */}
        <Link
          to="/class9"
          className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 text-center group"
        >
          <div className="text-6xl mb-4">📚</div>
          <h2 className="text-3xl font-bold text-blue-800 mb-2 group-hover:text-blue-600 transition">
            Class 9
          </h2>
          <p className="text-blue-700/80 group-hover:text-blue-900 transition">
            Detailed Notes & Practice Questions
          </p>
        </Link>

        {/* Class 10 Card */}
        <Link
          to="/class10"
          className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 text-center group"
        >
          <div className="text-6xl mb-4">🎓</div>
          <h2 className="text-3xl font-bold text-blue-800 mb-2 group-hover:text-blue-600 transition">
            Class 10
          </h2>
          <p className="text-blue-700/80 group-hover:text-blue-900 transition">
            Detailed Notes & Practice Questions
          </p>
        </Link>

      </div>

      {/* Back to Home Button */}
      <div className="mt-8">
        <Link
          to="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition"
        >
          Back to Home
        </Link>
      </div>

    </div>
  );
}
