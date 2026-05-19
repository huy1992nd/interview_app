import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const PAGE_META = {
  "/prep": { title: "Ôn tập sâu", sub: "Câu hỏi → Ý chính → Trả lời" },
  "/quiz": { title: "Kiểm tra", sub: "Trắc nghiệm & tự luận" },
  "/vocab": { title: "Từ vựng", sub: "Nghe · Đoán · Ghi nhớ" },
};

export default function Layout() {
  const { pathname } = useLocation();
  const [theme, setTheme] = useState(
    () => localStorage.getItem("interview-prep-theme") || "dark"
  );
  const meta = PAGE_META[pathname] || PAGE_META["/prep"];

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme === "light" ? "light" : ""
    );
    localStorage.setItem("interview-prep-theme", theme);
  }, [theme]);

  return (
    <>
      <header className="app-header">
        <div className="app-header-inner">
          <div className="brand">
            <div className="brand-icon">🎯</div>
            <div className="brand-text">
              <h1>Interview Prep</h1>
              <span>{meta.sub}</span>
            </div>
          </div>
          <button
            type="button"
            className="icon-btn"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Đổi giao diện"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </header>

      <div className="app-shell">
        <main className="main-content">
          <Outlet context={{ theme, setTheme, pageTitle: meta.title }} />
        </main>
      </div>

      <nav className="bottom-nav" aria-label="Điều hướng chính">
        <div className="bottom-nav-inner">
          <NavLink to="/prep" className={({ isActive }) => (isActive ? "active" : "")}>
            <span className="nav-icon">📖</span>
            <span>Ôn tập</span>
          </NavLink>
          <NavLink to="/quiz" className={({ isActive }) => (isActive ? "active quiz-tab" : "")}>
            <span className="nav-icon">📝</span>
            <span>Quiz</span>
          </NavLink>
          <NavLink to="/vocab" className={({ isActive }) => (isActive ? "active vocab-tab" : "")}>
            <span className="nav-icon">📚</span>
            <span>Từ vựng</span>
          </NavLink>
        </div>
      </nav>
    </>
  );
}
