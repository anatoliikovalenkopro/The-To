# The To! — website

**Website for music Artist**
https://thetomusic.com

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

## Deploy

### GitHub Pages (current)

Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the site and publishes it to https://thetomusic.com.
Setup: repo **Settings → Pages → Source: GitHub Actions**, custom domain `thetomusic.com`,
DNS at Squarespace (A records to GitHub Pages, `www` CNAME to `anatoliikovalenkopro.github.io`).

### Vercel (alternative)

Import the repo on [vercel.com](https://vercel.com) — Vite is auto-detected, no settings needed.
`vercel.json` rewrites all paths to `index.html`, so `/music` and `/videos` work on refresh.
