import React from "react";
import { Routes, Route } from "react-router-dom";

// 🌐 Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ChooseClassPage from "./pages/ChooseClassPage";
import Class9Page from "./pages/Class9Page";
import Class10Page from "./pages/Class10Page";
import SubjectPage from "./pages/SubjectPage";
import ChapterPage from "./pages/ChapterPage";
import NotesPage from "./pages/NotesPage";

// 🔐 Auth Pages
import SignIn from "./data/SignIn";
import SignUp from "./data/SignUp";

function App() {
  return (
    <Routes>
      {/* 🌍 General Pages */}
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/get-started" element={<ChooseClassPage />} />

      {/* 🎓 Class Pages */}
      <Route path="/class9" element={<Class9Page />} />
      <Route path="/class10" element={<Class10Page />} />

      {/* 📚 Subject + Chapter + Notes Routes */}
      <Route path="/class/:classId/subject/:subjectId" element={<SubjectPage />} />
      <Route path="/class/:classId/subject/:subjectId/chapter/:chapterId" element={<ChapterPage />} />
      <Route path="/class/:classId/subject/:subjectId/chapter/:chapterId/notes" element={<NotesPage />} />

      {/* 🔐 Auth */}
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
