import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import MCQ from "../data/quizMcq";
import WRITTEN from "../data/quizWritten";
import "./QuizPage.css";

const CATS = {
  all: "Tất cả",
  intro: "Giới thiệu & Dự án",
  react: "React",
  js: "JavaScript",
  node: "Node.js",
  db: "Database",
  devops: "DevOps",
  arch: "Architecture",
  aws: "AWS",
};

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function isMulti(q) {
  return q.multi === true || Array.isArray(q.correct);
}

function getCorrect(q) {
  return Array.isArray(q.correct) ? [...q.correct].sort((a, b) => a - b) : [q.correct];
}

function getSelected(a) {
  if (Array.isArray(a)) return [...a].sort((x, y) => x - y);
  if (a === null || a === undefined) return [];
  return [a];
}

function gradeMcq(q, answer) {
  const correct = getCorrect(q);
  const selected = getSelected(answer);
  if (!isMulti(q)) {
    const ok = selected.length === 1 && selected[0] === correct[0];
    return { correct: ok, score: ok ? 100 : 0, userAnswer: selected.length ? q.options[selected[0]] : "(không chọn)", rightAnswer: q.options[correct[0]] };
  }
  const set = new Set(correct);
  const hits = selected.filter((i) => set.has(i)).length;
  const extras = selected.filter((i) => !set.has(i)).length;
  const exact = hits === correct.length && extras === 0 && selected.length === correct.length;
  let score = exact ? 100 : hits === 0 ? 0 : Math.max(0, Math.round((hits / correct.length) * 100) - extras * 20);
  return {
    correct: exact || score >= 80,
    score,
    userAnswer: selected.map((i) => q.options[i]).join(" · ") || "(không chọn)",
    rightAnswer: correct.map((i) => q.options[i]).join(" · "),
    multi: true,
  };
}

function gradeWritten(text, keys, minMatch) {
  const t = (text || "").toLowerCase();
  if (t.length < 10) return { correct: false, score: 0, matched: [], missed: keys };
  const matched = keys.filter((kw) => t.includes(kw.toLowerCase()));
  const missed = keys.filter((kw) => !matched.includes(kw));
  const passQ = matched.length >= minMatch;
  const score = passQ ? Math.max(70, Math.round((matched.length / keys.length) * 100)) : Math.round((matched.length / keys.length) * 100);
  return { correct: passQ, score, matched, missed };
}

export default function QuizPage() {
  const { pageTitle } = useOutletContext();
  const [screen, setScreen] = useState("setup");
  const [mode, setMode] = useState("mcq");
  const [category, setCategory] = useState("all");
  const [count, setCount] = useState("15");
  const [threshold, setThreshold] = useState(70);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [optionOrders, setOptionOrders] = useState([]);
  const [current, setCurrent] = useState(0);
  const [results, setResults] = useState(null);

  const start = () => {
    let pool = mode === "mcq" ? [...MCQ] : [...WRITTEN];
    if (category !== "all") pool = pool.filter((q) => q.cat === category);
    if (!pool.length) {
      alert("Không có câu cho chủ đề này.");
      return;
    }
    pool = shuffle(pool);
    if (count !== "all") pool = pool.slice(0, Math.min(+count, pool.length));
    setQuestions(pool);
    setAnswers(pool.map((q) => (mode === "mcq" ? (isMulti(q) ? [] : null) : "")));
    setOptionOrders(
      mode === "mcq" ? pool.map((q) => shuffle(q.options.map((text, idx) => ({ text, idx })))) : []
    );
    setCurrent(0);
    setResults(null);
    setScreen("quiz");
  };

  const finish = () => {
    const res = questions.map((q, i) => {
      if (mode === "mcq") {
        const g = gradeMcq(q, answers[i]);
        return { q: q.q, cat: q.cat, explain: q.explain, ...g };
      }
      const g = gradeWritten(answers[i], q.keys, q.minMatch);
      return {
        q: q.q,
        cat: q.cat,
        correct: g.correct,
        score: g.score,
        userAnswer: answers[i] || "(trống)",
        matched: g.matched,
        missed: g.missed,
      };
    });
    const avg = Math.round(res.reduce((s, r) => s + r.score, 0) / res.length);
    setResults({ items: res, avg, pass: avg >= threshold });
    setScreen("results");
  };

  const q = questions[current];
  const multi = q && mode === "mcq" && isMulti(q);

  if (screen === "setup") {
    return (
      <>
        <div className="page-hero">
          <h2>{pageTitle || "Kiểm tra"}</h2>
          <p>Trắc nghiệm (1 hoặc nhiều đáp án) · Tự luận ngắn — chọn chủ đề rồi làm bài.</p>
        </div>
        <div className="quiz-setup card">
        <label>
          Hình thức
          <select value={mode} onChange={(e) => setMode(e.target.value)}>
            <option value="mcq">Trắc nghiệm</option>
            <option value="written">Tự luận ngắn</option>
          </select>
        </label>
        <label>
          Chủ đề
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            {Object.entries(CATS).map(([k, v]) => (
              <option key={k} value={k}>{v}</option>
            ))}
          </select>
        </label>
        <label>
          Số câu
          <select value={count} onChange={(e) => setCount(e.target.value)}>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="all">Tất cả</option>
          </select>
        </label>
        <label>
          Điểm PASS (%)
          <select value={threshold} onChange={(e) => setThreshold(+e.target.value)}>
            <option value={60}>60%</option>
            <option value={70}>70%</option>
            <option value={80}>80%</option>
            <option value={90}>90%</option>
          </select>
        </label>
        <button type="button" className="btn btn-primary btn-block" onClick={start}>
          Bắt đầu →
        </button>
        </div>
      </>
    );
  }

  if (screen === "results" && results) {
    return (
      <div className="quiz-results">
        <div className={`result-hero ${results.pass ? "pass" : "fail"}`}>
          <h2>{results.pass ? "PASS 🎉" : "FAIL 📚"}</h2>
          <p className="score">{results.avg}%</p>
        </div>
        {results.items.map((r, i) => (
          <div key={i} className={`review card ${r.correct ? "ok" : "bad"}`}>
            <p className="review-q">{i + 1}. {r.q}</p>
            <p>Điểm: {r.score}% · Bạn: {r.userAnswer}</p>
            {!r.correct && r.rightAnswer && <p>Đúng: {r.rightAnswer}</p>}
            {r.explain && <p className="muted"><em>{r.explain}</em></p>}
          </div>
        ))}
        <button type="button" className="btn btn-primary btn-block" onClick={() => setScreen("setup")}>
          Làm lại
        </button>
      </div>
    );
  }

  if (!q) return null;

  const selected = getSelected(answers[current]);

  const quizPct = Math.round(((current + 1) / questions.length) * 100);

  return (
    <div className="quiz-play">
      <div className="page-hero">
        <h2>Câu {current + 1} / {questions.length}</h2>
        {multi && <p>Chọn <strong>tất cả</strong> đáp án đúng</p>}
      </div>
      <div className="progress-card">
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${quizPct}%`, background: "linear-gradient(90deg, #22c55e, var(--quiz))" }} />
        </div>
      </div>
      <div className="card quiz-q-card">
        <p className="q-text">{q.q}</p>
        {mode === "mcq" ? (
          <>
            {multi && <p className="multi-hint">Chọn <strong>tất cả</strong> đáp án đúng</p>}
            <div className="options">
              {optionOrders[current]?.map((o, oi) => {
                const isSel = selected.includes(o.idx);
                return (
                  <label key={o.idx} className={`option${isSel ? " selected" : ""}`}>
                    <input
                      type={multi ? "checkbox" : "radio"}
                      checked={isSel}
                      onChange={() => {
                        if (multi) {
                          let sel = getSelected(answers[current]);
                          if (sel.includes(o.idx)) sel = sel.filter((x) => x !== o.idx);
                          else sel.push(o.idx);
                          const next = [...answers];
                          next[current] = sel.sort((a, b) => a - b);
                          setAnswers(next);
                        } else {
                          const next = [...answers];
                          next[current] = o.idx;
                          setAnswers(next);
                        }
                      }}
                    />
                    <span>{String.fromCharCode(65 + oi)}. {o.text}</span>
                  </label>
                );
              })}
            </div>
          </>
        ) : (
          <textarea
            className="written-input"
            value={answers[current]}
            onChange={(e) => {
              const next = [...answers];
              next[current] = e.target.value;
              setAnswers(next);
            }}
            placeholder="Viết câu trả lời..."
          />
        )}
      </div>
      <div className="quiz-nav">
        <button type="button" className="btn" disabled={current === 0} onClick={() => setCurrent((c) => c - 1)}>
          ← Trước
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            if (current < questions.length - 1) setCurrent((c) => c + 1);
            else finish();
          }}
        >
          {current < questions.length - 1 ? "Tiếp →" : "Nộp bài ✓"}
        </button>
      </div>
    </div>
  );
}
