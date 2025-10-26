import React from "react";
import { useParams, Link } from "react-router-dom";
import { BookOpen, ArrowLeft, FileText } from "lucide-react";
import { CLASS_9_CHAPTERS, CLASS_10_CHAPTERS } from "../data/chapters";

function ChapterPage() {
  const { classId, subjectId, chapterId } = useParams();

  // Select dataset
  const chapters =
    classId === "9" ? CLASS_9_CHAPTERS[subjectId] : CLASS_10_CHAPTERS[subjectId];

  // Find chapter by id
  const chapter = chapters?.find((ch) => ch.id === chapterId);
  const chapterName = chapter ? chapter.name : chapterId;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 px-6 py-12">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-indigo-700 mb-10 flex items-center gap-3">
        <BookOpen className="w-10 h-10 text-indigo-600" />
        {chapterName}
      </h1>

      {/* Card */}
      <div className="max-w-xl w-full bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
        <p className="text-gray-700 text-lg leading-relaxed mb-8 text-center">
          You are viewing <span className="font-semibold">{chapterName}</span>{" "}
          from <span className="capitalize font-semibold">{subjectId}</span> (Class {classId}).
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={`/class/${classId}/subject/${subjectId}/chapter/${chapterId}/notes`}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white rounded-xl text-lg font-medium shadow hover:bg-green-600 transition"
          >
            <FileText className="w-5 h-5" />
            View Notes
          </Link>

          <Link
            to={`/class/${classId}/subject/${subjectId}`}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-200 text-gray-700 rounded-xl text-lg font-medium shadow hover:bg-gray-300 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Subject
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ChapterPage;
