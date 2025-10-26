// src/pages/Class9Page.js
import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, Calculator, FileText, Globe, Home } from "lucide-react";

export default function Class9Page() {
  const subjects = [
    { id: "science", name: "Science", icon: BookOpen, color: "from-green-400 to-emerald-600" },
    { id: "maths", name: "Mathematics", icon: Calculator, color: "from-blue-400 to-indigo-600" },
    { id: "english", name: "English", icon: FileText, color: "from-pink-400 to-rose-600" },
    { id: "sst", name: "Social Science", icon: Globe, color: "from-yellow-400 to-orange-600" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 flex flex-col items-center py-12 px-6">

      {/* Back to Home Button */}
      <div className="w-full max-w-4xl mb-6 flex justify-start">
        <Link
          to="/"
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl font-medium shadow hover:bg-indigo-700 transition"
        >
          <Home className="w-5 h-5" />
          Home
        </Link>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-extrabold text-indigo-700 mb-10 drop-shadow-lg">
        📚 Class 9 Subjects
      </h1>

      {/* Subjects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-4xl">
        {subjects.map(({ id, name, icon: Icon, color }) => (
          <Link
            key={id}
            to={`/class/9/subject/${id}`}
            className={`group p-8 rounded-2xl shadow-lg bg-gradient-to-r ${color} text-white flex flex-col items-center justify-center transform transition duration-300 hover:scale-105 hover:shadow-2xl`}
          >
            <Icon className="w-12 h-12 mb-4 drop-shadow-md group-hover:rotate-12 transition-transform" />
            <h2 className="text-2xl font-semibold">{name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
