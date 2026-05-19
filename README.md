# Interview Prep — React Web App

App React (Vite) ôn phỏng vấn Full-Stack — deploy **Vercel**.

- **Ôn tập** — 35 câu Q&A + đọc aloud
- **Quiz** — trắc nghiệm (1 / nhiều đáp án) + tự luận
- **Từ vựng** — flashcard + phát âm

## Chạy local

```bash
cd interview-web
npm install
npm run dev
```

Mở http://localhost:5173

## Cập nhật dữ liệu từ file HTML gốc

Sau khi sửa `interview-prep.html`, `interview-quiz.html`, `interview-vocab.html` ở thư mục `cv/`:

```bash
npm run extract
```

## Deploy Vercel

### Cách 1 — GitHub (khuyên dùng)

1. Push repo lên GitHub (thư mục `interview-web` hoặc cả repo `cv`)
2. Vào [vercel.com](https://vercel.com) → **Add New Project**
3. Import repo → **Root Directory**: `interview-web`
4. **Framework Preset**: Vite
5. Build: `npm run build` · Output: `dist`
6. **Deploy**

### Cách 2 — CLI

```bash
npm i -g vercel
cd interview-web
npm run build
vercel
```

Lần đầu chọn link project → production URL dạng `https://interview-prep-xxx.vercel.app`

## Cấu trúc

```
interview-web/
  src/
    data/          # Tự sinh từ HTML (npm run extract)
    pages/         # Prep, Quiz, Vocab
    components/    # Layout + bottom nav
  vercel.json      # SPA routing
```

## So với iOS

| | React + Vercel | Capacitor iOS |
|---|----------------|---------------|
| Cần Xcode | ❌ | ✅ |
| Mở trên iPhone | Trình duyệt / Add to Home Screen | App native |
| Deploy | Vài phút | Phức tạp hơn |

Trên iPhone: mở link Vercel → Safari → **Share → Add to Home Screen** để dùng như app.
