import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import PrepPage from "./pages/PrepPage";
import QuizPage from "./pages/QuizPage";
import VocabPage from "./pages/VocabPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/prep" replace />} />
        <Route path="prep" element={<PrepPage />} />
        <Route path="quiz" element={<QuizPage />} />
        <Route path="vocab" element={<VocabPage />} />
      </Route>
    </Routes>
  );
}
