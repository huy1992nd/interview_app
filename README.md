# Interview Prep — React Web App

App React (Vite) ôn phỏng vấn Full-Stack — deploy **Vercel**.

- **Ôn tập** — 35 câu Q&A + đọc aloud
- **Quiz** — trắc nghiệm (1 / nhiều đáp án) + tự luận
- **Từ vựng** — flashcard + phát âm

## Chạy local

```bash
npm install
npm run dev
```

Mở http://localhost:5173

## Cập nhật dữ liệu từ file HTML gốc

Sau khi sửa `interview-prep.html`, `interview-quiz.html`, `interview-vocab.html` (thư mục `cv/`):

```bash
npm run extract
```

## Deploy Vercel

Repo GitHub: [huy1992nd/interview_app](https://github.com/huy1992nd/interview_app)

### Bước 1 — Import project

1. Đăng nhập [vercel.com](https://vercel.com) (nên dùng **Continue with GitHub**)
2. **Add New…** → **Project**
3. Import repo **`huy1992nd/interview_app`**
4. **Root Directory**: để trống `/` (repo đã là app React, không cần `interview-web`)

### Bước 2 — Cấu hình build (Vercel tự nhận Vite)

| Mục | Giá trị |
|-----|---------|
| Framework Preset | **Vite** |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

File `vercel.json` trong repo đã khai báo sẵn — thường không cần sửa tay.

### Bước 3 — Deploy

Bấm **Deploy** → chờ 1–2 phút → mở URL dạng `https://interview-app-xxx.vercel.app`

Mỗi lần `git push` lên `main`, Vercel tự build lại (nếu bật Git integration).

### Deploy bằng CLI (tùy chọn)

```bash
npm i -g vercel
npm run build
vercel          # lần đầu: link project
vercel --prod   # production
```

### iPhone — thêm vào màn hình chính

Safari → mở link Vercel → **Share** → **Add to Home Screen**

## File liên quan Vercel

```
vercel.json       # Build + SPA routing (React Router)
.nvmrc            # Node 20 trên Vercel
public/           # favicon, fallback redirects
```

## Cấu trúc

```
src/
  data/          # Tự sinh từ HTML (npm run extract)
  pages/         # Prep, Quiz, Vocab
  components/    # Layout + bottom nav
```
