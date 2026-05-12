# LGR Refresher — Political Economy & American Government

An interactive long-form reference covering capitalism / socialism / communism, the structure of American government, and the 2024 administrative-law revolution. Built around peer-reviewed research and the major doctrinal Supreme Court cases.

> Companion site: **Savs Intro** — same content, plain-English voice, lighter interactions. See the sister repo `savs-poli-econ`.

## Stack

- **Vite** + **React 18** + **TypeScript**
- **MDX** for long-form content with React components inline
- **Tailwind CSS** with LGR brand tokens wired through CSS variables (light + dark)
- **Framer Motion** for animations
- **React Router** for client-side routing
- **localStorage** for progress tracking
- Static deploy to **GitHub Pages** via Actions

No backend.

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173/lgr-refresher/
npm run build    # → dist/
npm run preview  # serve dist locally
```

## Routes

- `/` — Home, with progress card and "resume reading"
- `/preface` — Version 2 preface
- `/part-one` — Political Economy (capitalism → Keynes → socialism → communism)
- `/part-two` — American Government (Articles I/II/III + admin law + checks + federalism + elections)
- `/scotus` — Filterable SCOTUS Case Browser (18 cases, 1803–2024)
- `/glossary` — Searchable working glossary (27 terms)

## Content sources

Long-form content originates from the V2 `.docx` files in `../_reference/`:

- `LGR_Refresher_PoliticalEconomy_v2.docx` → this site
- `Savs_Intro_PoliticalEconomy_v2.docx` → sister site (`savs-poli-econ`)

## Deploy

```bash
# Push to main on the github.com/LaurenceRugley/lgr-refresher repo.
git push origin main
```

Settings → Pages → Source: **GitHub Actions** (one-time setup).
Then `.github/workflows/deploy.yml` runs `npm ci && npm run build` and publishes `dist/`.

The `base` path is `/lgr-refresher/` in `vite.config.ts`. If you change the repo name or use a custom domain, update both `base` and `BrowserRouter basename` in `src/App.tsx`.

A `dist/404.html` (copy of `index.html`) is created so SPA routes survive direct loads / refreshes on GitHub Pages.

## Project structure

```
src/
├── components/
│   ├── diagrams/             # Interactive React/SVG figures
│   │   ├── ThreeBranches.tsx
│   │   ├── ChecksBalances.tsx
│   │   └── AdminLawQuartet.tsx
│   ├── CitationSystem.tsx    # <Cite/> chips + modal
│   ├── ScotusTimeline.tsx    # Filterable case browser
│   ├── Quiz.tsx              # Knowledge check
│   ├── ReadingProgress.tsx   # Top scroll bar
│   ├── Header.tsx            # Sticky nav + theme toggle
│   ├── mdxComponents.tsx     # MDX → React mapping
│   └── mdx-exports.ts        # Components available in MDX
├── content/                  # MDX long-form
│   ├── preface.mdx
│   ├── part-one-capitalism.mdx
│   ├── part-one-keynes.mdx
│   ├── part-one-socialism.mdx
│   ├── part-one-communism.mdx
│   ├── part-two-article-1.mdx
│   ├── part-two-article-2.mdx
│   ├── part-two-article-3.mdx
│   ├── part-two-admin-law.mdx
│   ├── part-two-checks-balances.mdx
│   ├── part-two-federalism.mdx
│   └── part-two-elections.mdx
├── data/
│   ├── citations.ts          # 30 peer-reviewed sources
│   ├── scotusCases.ts        # 18 major SCOTUS cases
│   └── glossary.ts           # 27 working terms
├── hooks/
│   └── useProgress.ts        # localStorage progress state
├── pages/
│   ├── Home.tsx
│   ├── PartOne.tsx
│   ├── ScotusPage.tsx
│   ├── GlossaryPage.tsx
│   └── Stubs.tsx             # PrefacePage + PartTwo
├── styles/global.css         # LGR design tokens (CSS vars)
└── types/mdx.d.ts            # MDX TS shim
```

## Status

- Phase 1 (content migration) — complete; 12 MDX files, full V2 content
- Phase 2 (interactive diagrams) — 3 core diagrams in place (ThreeBranches, ChecksBalances, AdminLawQuartet); remaining diagrams from HANDOFF.md still pending (BillToLaw, VocQuadrant, EconTimeline, SystemsMatrix, CourtHierarchy)
- Phase 3 (polish) — dark mode toggle + CSS-var theming landed; sticky TOC, citations index page, search, and print stylesheet still pending
- Phase 4 (deploy) — GitHub Actions workflow ready; needs repo on GitHub + Pages source set to "GitHub Actions"

See `HANDOFF.md` for the original architecture decisions and the remaining task list.
