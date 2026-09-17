# Hey Maan 👉👈

A tiny interactive letter. Built with React + Vite + Tailwind + Framer Motion, no backend, no tracking, no autoplay music.

Ten scenes: opening → no excuses → debugging myself → the actual sorry → actions over promises → the silly update → the part that matters → take your time → one tiny smile → ending.

---

## Run it locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

Build and check the production version:

```bash
npm run build
npm run preview
```

---

## Put it on GitHub

```bash
git init
git add .
git commit -m "a small thing i built"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

If the repo is public, anyone with the link can read the message — a private repo still deploys fine on Vercel, so use private if you'd rather.

---

## Deploy to Vercel (2 minutes)

1. Go to vercel.com and sign in with GitHub.
2. **Add New → Project**, pick this repo.
3. Vercel detects Vite automatically. Framework: **Vite**, build command `npm run build`, output directory `dist`. Leave the defaults.
4. **Deploy**. You get a link like `https://your-project.vercel.app` — that's what you send on WhatsApp.

Or from the terminal:

```bash
npm i -g vercel
vercel        # preview
vercel --prod # live link
```

### Netlify
Build command `npm run build`, publish directory `dist`.

### GitHub Pages
`vite.config.js` already uses `base: './'`, so the `dist` folder works from any path. Build, then publish `dist` (for example with the `gh-pages` package or a Pages action).

---

## Making it yours

| What | Where |
|---|---|
| Her name, opening lines | `src/sections/Opening.jsx` |
| The four honest cards | `src/sections/Confession.jsx` |
| Terminal script | `LINES` array in `src/components/Terminal.jsx` |
| The apology itself | `src/sections/Apology.jsx` |
| Listen / Improve / Give space | `src/sections/Promise.jsx` |
| Install bars, version easter egg | `src/sections/FunSection.jsx` |
| "You matter to me" | `src/sections/HeartMessage.jsx` |
| "Take your time" + secret heart | `src/sections/GiveSpace.jsx` |
| Smile button + confetti | `src/sections/Smile.jsx`, `src/components/HeartButton.jsx` |
| Signature, footer | `src/sections/Ending.jsx` |
| Colors, fonts | `tailwind.config.js`, fonts loaded in `index.html` |
| Link preview title/description | `index.html` (`og:` meta tags) |

### Easter eggs
1. Tap the laptop screen on the first screen → `console.log("I love you")` and a little note.
2. Tap **2.0** in the update scene three times → a fake changelog.
3. Tap the small heart next to "I'll be here." three times → the secret heart.

---

## What's implemented

- 10 scenes, mobile-first (360–430px), no horizontal scroll at any width
- Opening gate, then progressive reveal on scroll — nothing dumps at once
- Hand-drawn SVG character (sad → smiling), no image files
- Animated fake terminal, line by line, readable at 360px
- Sequential install bars with a real `role="progressbar"`
- Confetti + floating hearts on the smile button, and the page brightens a touch
- 3 easter eggs
- Optional music: a short Web Audio lullaby, off by default, no audio file
- `prefers-reduced-motion` respected everywhere (hearts hidden, terminal shows instantly, no confetti)
- Semantic sections, real buttons, `sr-only` description of the terminal, visible focus rings
- Zero API calls, zero storage, zero tracking — it works offline once loaded

## What's deliberately not here

No "click to forgive", no countdown, no guilt, no "don't leave me", nothing she has to press to get to the end. She can close the tab at any point and the message is already complete.
