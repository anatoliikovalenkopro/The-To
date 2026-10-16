# The To! — website

React + Vite single-page site. Pages: Home, Videos, Music.

## Run locally

```bash
npm install
npm run dev
```

## Add content

Everything is in [`src/data/site.js`](src/data/site.js):

- **New video** — add its YouTube ID (the part after `watch?v=`) to the top of `videos`.
- **New album** — put a square cover in `src/assets/` (≈640px, `.webp` or `.jpg`),
  import it at the top of the file and add an entry to `albums`.
- Links, marquee text and interests are in the same file.

## Deploy (Vercel — free)

1. Push this repo to GitHub.
2. On [vercel.com](https://vercel.com) → **Add New → Project** → import `The-To`.
3. Framework preset: **Vite** (auto-detected). Build command `npm run build`, output `dist`.
4. Deploy. Every push to `main` redeploys automatically.
5. Optional: **Settings → Domains** to attach your own domain (e.g. `theto.band`).

`vercel.json` rewrites all paths to `index.html`, so `/music` and `/videos` work on refresh.
Netlify works the same way (build `npm run build`, publish `dist`, add a `_redirects`
file with `/* /index.html 200`).
