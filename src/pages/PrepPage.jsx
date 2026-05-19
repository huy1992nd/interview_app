import { useMemo, useState } from "react";
import { useOutletContext } from "react-router-dom";
import DATA from "../data/prepData";
import { useSpeech } from "../hooks/useSpeech";
import "./PrepPage.css";

const CATEGORIES = {
  all: "Tất cả",
  intro: "Giới thiệu",
  react: "React",
  js: "JavaScript",
  node: "Node.js",
  db: "Database",
  devops: "DevOps",
  arch: "Architecture",
  aws: "AWS",
};

const STORAGE_KEY = "interview-prep-done";

export default function PrepPage() {
  const { pageTitle } = useOutletContext();
  const { speak, stop } = useSpeech();
  const [doneSet, setDoneSet] = useState(() => {
    try {
      return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"));
    } catch {
      return new Set();
    }
  });
  const [openId, setOpenId] = useState(null);
  const [focusMode, setFocusMode] = useState(true);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return DATA.filter((d) => {
      if (filter !== "all" && d.category !== filter) return false;
      if (!q) return true;
      return `${d.q} ${d.a} ${d.keys.join(" ")}`.toLowerCase().includes(q);
    });
  }, [filter, search]);

  const sections = useMemo(() => {
    const map = new Map();
    filtered.forEach((d) => {
      if (!map.has(d.section)) map.set(d.section, []);
      map.get(d.section).push(d);
    });
    return [...map.entries()];
  }, [filtered]);

  const pct = Math.round((doneSet.size / DATA.length) * 100);

  const toggleDone = (id, e) => {
    e?.stopPropagation();
    setDoneSet((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
      return next;
    });
  };

  const openCard = (id) => {
    setOpenId((cur) => {
      const next = cur === id ? null : id;
      return focusMode ? (next === null ? null : id) : next;
    });
  };

  return (
    <>
      <div className="page-hero">
        <h2>{pageTitle || "Ôn tập sâu"}</h2>
        <p>Mở từng câu: đọc câu hỏi → thuộc ý chính → đọc câu trả lời đầy đủ.</p>
      </div>

      <div className="progress-card">
        <div className="progress-top">
          <div>
            <strong>{pct}%</strong>
            <span> hoàn thành</span>
          </div>
          <span>{doneSet.size} / {DATA.length} câu</span>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${pct}%` }} />
        </div>
      </div>

      <div className="control-bar">
        <div className="search-wrap">
          <input
            className="search-input"
            type="search"
            placeholder="Tìm câu hỏi, từ khóa..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="filter-scroll">
          {Object.entries(CATEGORIES).map(([k, label]) => (
            <button
              key={k}
              type="button"
              className={`filter-tag${filter === k ? " active" : ""}`}
              onClick={() => setFilter(k)}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="tool-row">
          <button
            type="button"
            className={`btn btn-toggle${focusMode ? " active" : ""}`}
            onClick={() => setFocusMode((f) => !f)}
          >
            {focusMode ? "🎯 Chế độ tập trung" : "Mở nhiều câu"}
          </button>
          <button type="button" className="btn" onClick={stop}>
            ⏹ Dừng đọc
          </button>
        </div>
      </div>

      {filtered.length === 0 && (
        <div className="empty-state card">
          <p>Không tìm thấy câu phù hợp.</p>
        </div>
      )}

      {sections.map(([section, items]) => (
        <section key={section}>
          <h3 className="section-label">{section}</h3>
          {items.map((d) => {
            const open = openId === d.id;
            const done = doneSet.has(d.id);
            return (
              <article
                key={d.id}
                className={`learn-card card${open ? " is-open" : ""}${done ? " is-done" : ""}`}
                id={`card-${d.id}`}
              >
                <header
                  className="learn-card-header"
                  onClick={() => openCard(d.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && openCard(d.id)}
                >
                  <div className="learn-card-left">
                    <span className="learn-num">{d.id}</span>
                    <div>
                      <p className="learn-q">{d.q}</p>
                      <span className={`learn-badge badge-${d.category}`}>
                        {CATEGORIES[d.category] || d.category}
                      </span>
                    </div>
                  </div>
                  <div className="learn-card-actions">
                    <button
                      type="button"
                      className={`done-btn${done ? " done" : ""}`}
                      onClick={(e) => toggleDone(d.id, e)}
                      title="Đã thuộc"
                    >
                      {done ? "✓" : "○"}
                    </button>
                    <span className="chevron">{open ? "▲" : "▼"}</span>
                  </div>
                </header>

                {open && (
                  <div className="learn-card-body">
                    <div className="learn-steps">
                      <span className="step-label">Cách học</span>
                      <div className="step-pills">
                        <span>1. Câu hỏi</span>
                        <span>2. Ý chính</span>
                        <span>3. Trả lời</span>
                      </div>
                    </div>

                    <div className="learn-block block-q">
                      <div className="block-head">
                        <span className="block-tag">Bước 1</span>
                        <button type="button" className="speak-chip" onClick={() => speak(d.q)}>
                          🔊 Nghe
                        </button>
                      </div>
                      <p className="block-q-text">{d.q}</p>
                    </div>

                    <div className="learn-block block-keys">
                      <div className="block-head">
                        <span className="block-tag block-tag-gold">Bước 2 · Ý phải nhớ</span>
                        <button
                          type="button"
                          className="speak-chip"
                          onClick={() => speak(`Key points. ${d.keys.join(". ")}`)}
                        >
                          🔊 Nghe
                        </button>
                      </div>
                      <ul className="key-chips">
                        {d.keys.map((k) => (
                          <li key={k}>{k}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="learn-block block-answer">
                      <div className="block-head">
                        <span className="block-tag block-tag-accent">Bước 3 · Câu trả lời</span>
                        <button
                          type="button"
                          className="speak-chip speak-chip-primary"
                          onClick={() => speak(d.a.replace(/\n+/g, " "))}
                        >
                          🔊 Đọc đáp án
                        </button>
                      </div>
                      <div className="reader">
                        {d.a.split(/\n\n+/).map((p, i) => (
                          <p key={i}>{p}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </section>
      ))}
    </>
  );
}
