import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import VOCAB from "../data/vocabData";
import { useSpeech } from "../hooks/useSpeech";
import "./VocabPage.css";

const CATS = {
  all: "Tất cả",
  interview: "Phỏng vấn",
  react: "React",
  js: "JavaScript",
  backend: "Backend",
  database: "Database",
  devops: "DevOps",
  arch: "Architecture",
  aws: "AWS",
};

const SESSION = 10;
const STORAGE = "interview-vocab-progress";

function shuffle(a) {
  const arr = [...a];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function VocabPage() {
  const { pageTitle } = useOutletContext();
  const { speak, stop } = useSpeech();
  const [cat, setCat] = useState("all");
  const [session, setSession] = useState([]);
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [progress, setProgress] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE) || "{}");
    } catch {
      return {};
    }
  });

  const startSession = () => {
    let pool = cat === "all" ? [...VOCAB] : VOCAB.filter((w) => w.cat === cat);
    const due = pool.filter((w) => {
      const p = progress[w.id];
      return !p?.nextReview || Date.now() >= p.nextReview;
    });
    const rest = pool.filter((w) => !due.includes(w));
    setSession(shuffle([...shuffle(due), ...shuffle(rest)]).slice(0, SESSION));
    setIdx(0);
    setFlipped(false);
  };

  useEffect(() => {
    startSession();
  }, [cat]);

  const word = session[idx];
  const mastered = VOCAB.filter((w) => (progress[w.id]?.level || 0) >= 3).length;
  const sessionPct = session.length ? Math.round(((idx + 1) / session.length) * 100) : 0;

  const rate = (level) => {
    if (!word) return;
    const p = progress[word.id] || { level: 0 };
    const days = level === 0 ? 0 : level === 1 ? 2 : 7;
    p.level = level >= 3 ? 3 : Math.min(2, (p.level || 0) + (level === 1 ? 1 : 0));
    if (level === 0) p.level = 0;
    p.nextReview = Date.now() + days * 86400000;
    const next = { ...progress, [word.id]: p };
    setProgress(next);
    localStorage.setItem(STORAGE, JSON.stringify(next));
    if (idx < session.length - 1) {
      setIdx((i) => i + 1);
      setFlipped(false);
    }
  };

  if (!word) {
    return (
      <div className="page-hero">
        <h2>{pageTitle || "Từ vựng"}</h2>
        <p className="muted">Đang tải phiên học...</p>
      </div>
    );
  }

  return (
    <>
      <div className="page-hero">
        <h2>{pageTitle || "Từ vựng"}</h2>
        <p>Nghe phát âm → đoán nghĩa → lật thẻ → đánh giá mức nhớ.</p>
      </div>

      <div className="vocab-hero-stats">
        <div className="stat-pill">
          <strong>{mastered}</strong>
          <span>đã thuộc / {VOCAB.length}</span>
        </div>
        <div className="stat-pill">
          <strong>{idx + 1}/{session.length}</strong>
          <span>phiên này</span>
        </div>
        <button type="button" className="icon-btn" onClick={stop} aria-label="Dừng đọc">
          ⏹
        </button>
      </div>

      <div className="progress-card">
        <div className="progress-track">
          <div
            className="progress-fill"
            style={{
              width: `${sessionPct}%`,
              background: "linear-gradient(90deg, #7c3aed, var(--vocab))",
            }}
          />
        </div>
      </div>

      <div className="filter-scroll vocab-filters">
        {Object.entries(CATS).map(([k, label]) => (
          <button
            key={k}
            type="button"
            className={`filter-tag${cat === k ? " active" : ""}`}
            onClick={() => setCat(k)}
          >
            {label}
          </button>
        ))}
      </div>

      <div
        className={`flashcard card${flipped ? " flipped" : ""}`}
        onClick={() => setFlipped(!flipped)}
      >
        <div className="flash-front">
          <span className="fc-cat">{CATS[word.cat] || word.cat}</span>
          <button
            type="button"
            className="speak-fab"
            onClick={(e) => {
              e.stopPropagation();
              speak(word.word);
            }}
          >
            🔊
          </button>
          <h2>{word.word}</h2>
          <p className="ipa">{word.ipa}</p>
          <p className="tap">Bấm để xem nghĩa</p>
        </div>
        <div className="flash-back">
          <p className="vi">{word.vi}</p>
          <p className="ex">{word.ex}</p>
        </div>
      </div>

      {flipped && (
        <div className="rate-row">
          <button type="button" className="btn rate again" onClick={() => rate(0)}>
            Chưa thuộc
          </button>
          <button type="button" className="btn rate good" onClick={() => rate(1)}>
            Đang học
          </button>
          <button type="button" className="btn rate easy" onClick={() => rate(3)}>
            Đã thuộc
          </button>
        </div>
      )}

      <div className="vocab-nav">
        <button
          type="button"
          className="btn"
          disabled={idx === 0}
          onClick={() => {
            setIdx((i) => i - 1);
            setFlipped(false);
          }}
        >
          ← Trước
        </button>
        <button type="button" className="btn" onClick={() => setFlipped(!flipped)}>
          Lật thẻ
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            if (idx < session.length - 1) {
              setIdx((i) => i + 1);
              setFlipped(false);
            } else startSession();
          }}
        >
          {idx < session.length - 1 ? "Tiếp →" : "Học tiếp"}
        </button>
      </div>
    </>
  );
}
