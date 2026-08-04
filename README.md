# Viverst Global — Website (Step 1: Parent Site Shell + Home)

## Run it
```
npm install
npm run dev
```
Then open the local URL it prints (usually http://localhost:5173).

To build for production:
```
npm run build
```
Output goes to `dist/`.

## What's built so far
- `/` — Home (fully designed)
- `/about`, `/companies`, `/contact`, `/agro`, `/studio` — placeholder
  "under construction" pages so navigation never breaks. These get
  designed in upcoming steps.

## Structure
- `src/components/` — Navbar (split site-nav / brand-switcher), Footer,
  MorphField (ambient background), Reveal (scroll-in animation wrapper),
  ScrollToTop
- `src/pages/Home.jsx` — the full homepage
- `src/index.css` — design tokens (colors, type, glass, buttons)

## Design tokens (current palette)
- `--bg-1` #f5faff / `--bg-2` #8cff89 — backgrounds
- `--ink-headline` #0464de — headlines, links, primary emphasis
- `--ink-strong` #06065d — body copy, footer, high-contrast text
- `--ink-soft` #a2dae0 — used on chips/borders (not as body text — too
  low-contrast against white to read reliably as text)
- `--red` #ed0101 / `--red-deep` #a70107 — buttons and small accents
- Typeface: Bricolage Grotesque (display + body via its optical-size
  axis) + JetBrains Mono (labels/eyebrows)

Note: the Agro/Studio nav pills and homepage cards currently use
placeholder tint colors (soft green / soft violet) since we don't have
the final Agro/Studio brand colors yet — swap these once provided.

## Brand assets (logo / favicon / icons)
Real logo and favicon are wired in. To update them later, replace:
- `src/assets/brand/favicon-source.png` (the icon mark)
- `src/assets/brand/logo-source.png` (the wordmark)

Then regenerate every size automatically:
```
npm run icons
```
This trims whitespace, pads the favicon to a true square (no stretch),
and outputs everything into `public/`: all favicon sizes, `favicon.ico`,
`apple-touch-icon.png`, `site.webmanifest`, and `logo.png` / `logo-light.png`
(for the dark footer). Nothing is ever stretched — every resize preserves
the source aspect ratio.

## SEO
`index.html` has full meta tags: title, description, keywords, robots,
canonical, Open Graph, and Twitter card. **Two things to update once you
have them**: the `viverst.com` placeholder URLs in `og:url`/`og:image`/
`canonical` need your real domain, and per-page titles/descriptions
(About, Contact, Agro, Studio) need `react-helmet-async` once those
pages are built, since this is a client-rendered single-page app and
every route currently shares the one `<title>` in `index.html`.

## Known non-issue
`npm audit` flags a high-severity react-router advisory — it's about
React Server Components (RSC) mode, which this project doesn't use
(plain client-side `BrowserRouter`), so it doesn't apply here.
