// ✅ src/pages/NotesPage.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { motion } from "framer-motion";
import { BookOpen, ArrowLeft } from "lucide-react";

// ---------- Class 9 Notes ----------
import { CLASS_9_SCIENCE_NOTES } from "../data/class9science";
import { CLASS_9_SST_NOTES } from "../data/sst";
import { CLASS_9_ENGLISH_NOTES } from "../data/english";
import { CLASS_9_MATHS_NOTES } from "../data/class9maths";

// ---------- Class 10 Notes ----------
import { CLASS_10_SCIENCE_NOTES } from "../data/class10science";
import { CLASS_10_SST_NOTES } from "../data/class10sst";
import { CLASS_10_ENGLISH_NOTES } from "../data/class10english";
import { CLASS_10_MATHS_NOTES } from "../data/class10maths";

export default function NotesPage() {
  const { classId, subjectId, chapterId } = useParams();

  // ---------- Select Notes Data ----------
  let notesData;
  switch (subjectId.toLowerCase()) {
    case "science":
      notesData = classId === "9" ? CLASS_9_SCIENCE_NOTES : CLASS_10_SCIENCE_NOTES;
      break;
    case "sst":
      notesData = classId === "9" ? CLASS_9_SST_NOTES : CLASS_10_SST_NOTES;
      break;
    case "english":
      notesData = classId === "9" ? CLASS_9_ENGLISH_NOTES : CLASS_10_ENGLISH_NOTES;
      // handle nested english key
      if (notesData && notesData.english) {
        notesData = notesData.english;
      }
      break;
    case "maths":
      notesData = classId === "9" ? CLASS_9_MATHS_NOTES : CLASS_10_MATHS_NOTES;
      break;
    default:
      return <NoNotesMessage subjectId={subjectId} />;
  }

  // ---------- Detect Structure ----------
  const isArray = Array.isArray(notesData);

  // ---------- Select Chapter ----------
  let chapter;
  if (isArray) {
    chapter = notesData.find(
      (c) => c.id?.toLowerCase() === chapterId.toLowerCase()
    );
  } else {
    const key = chapterId.startsWith("ch") ? chapterId.replace("ch", "") : chapterId;
    chapter = notesData[key];
  }

  if (!chapter) return <NoNotesMessage subjectId={subjectId} />;

  // ---------- UI ----------
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto bg-white/5 backdrop-blur-lg border border-white/20 rounded-3xl shadow-xl p-8 md:p-12"
      >
        {/* Header */}
        <div className="flex flex-col items-center gap-2 mb-8">
          <BookOpen className="text-indigo-400" size={40} />
          <h1 className="text-2xl md:text-4xl font-bold text-white text-center drop-shadow-md">
            {chapter.title}
          </h1>
        </div>

        {/* Notes Content */}
        <div className="prose prose-invert lg:prose-lg max-w-none text-gray-100 leading-relaxed md:px-4">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ node, ...props }) => (
                <h1 className="text-3xl font-bold mt-6 mb-4" {...props} />
              ),
              h2: ({ node, ...props }) => (
                <h2 className="text-2xl font-semibold mt-5 mb-3 text-indigo-300" {...props} />
              ),
              h3: ({ node, ...props }) => (
                <h3 className="text-xl font-semibold mt-4 mb-2 text-indigo-200" {...props} />
              ),
              p: ({ node, ...props }) => (
                <p className="mb-3 text-gray-200 text-base md:text-lg" {...props} />
              ),
              li: ({ node, ...props }) => (
                <li className="mb-2 ml-6 list-disc text-gray-300" {...props} />
              ),
              table: ({ node, ...props }) => (
                <table className="table-auto border border-gray-400 mb-4 w-full text-gray-100" {...props} />
              ),
              th: ({ node, ...props }) => (
                <th className="border border-gray-500 px-3 py-2 bg-indigo-600 text-white" {...props} />
              ),
              td: ({ node, ...props }) => (
                <td className="border border-gray-500 px-3 py-2" {...props} />
              ),
              blockquote: ({ node, ...props }) => (
                <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-gray-300 my-4" {...props} />
              ),
              img: ({ node, ...props }) => (
                <img className="rounded-lg my-4 shadow-md border border-white/20 w-full md:w-auto" {...props} />
              ),
              code: ({ node, inline, className, children, ...props }) => (
                <code
                  className={`bg-gray-800 text-yellow-300 px-1 py-0.5 rounded ${
                    inline ? "text-sm" : "block p-3 my-2 overflow-x-auto"
                  }`}
                  {...props}
                >
                  {children}
                </code>
              ),
            }}
          >
            {chapter.content}
          </ReactMarkdown>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-white/20"></div>

        {/* Back Button */}
        <div className="flex justify-center">
          <Link
            to={`/class/${classId}/subject/${subjectId}`}
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600/90 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-700 transition transform hover:scale-105"
          >
            <ArrowLeft size={18} /> Back to {subjectId.toUpperCase()}
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

// ---------- No Notes Component ----------
function NoNotesMessage({ subjectId }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 p-4 md:p-8">
      <h1 className="text-white text-2xl md:text-3xl font-semibold text-center">
        ❌ {subjectId ? `Notes not available for ${subjectId}` : "Notes not available yet."}
      </h1>
    </div>
  );
}
