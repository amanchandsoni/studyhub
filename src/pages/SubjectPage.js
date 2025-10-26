import React from "react";
import { useParams, Link } from "react-router-dom";
import { BookOpen, Home } from "lucide-react";
import { CLASS_9_CHAPTERS, CLASS_10_CHAPTERS } from "../data/chapters";

export default function SubjectPage() {
  const { classId, subjectId } = useParams();

  // Select dataset
  let chapters = [];
  if (classId === "9") {
    chapters = CLASS_9_CHAPTERS[subjectId] || [];
  } else if (classId === "10") {
    chapters = CLASS_10_CHAPTERS[subjectId] || [];
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 px-6 py-12 flex flex-col">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-indigo-800 mb-10 text-center">
        Class {classId} - {subjectId.toUpperCase()}
      </h1>

      {/* Back to Home Button */}
      <div className="flex justify-center mb-8">
        <Link
          to="/"
          className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl text-lg font-medium shadow hover:bg-indigo-700 transition"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </Link>
      </div>

      {/* Chapters Grid */}
      {chapters.length === 0 ? (
        <p className="text-gray-500 text-center">No chapters found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {chapters.map((ch) => (
            <Link
              key={ch.id}
              to={`/class/${classId}/subject/${subjectId}/chapter/${ch.id}`}
              className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition flex flex-col items-center justify-center text-center"
            >
              <BookOpen className="w-10 h-10 text-indigo-600 mb-4 group-hover:text-indigo-800 transition" />
              <h2 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-700 transition">
                {ch.name}
              </h2>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
