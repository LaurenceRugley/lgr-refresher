# LGR Refresher — Political Economy & American Government

An interactive long-form reference covering capitalism / socialism / communism, the structure of American government, and the 2024 administrative-law revolution. Built around peer-reviewed research and the major doctrinal Supreme Court cases.

> Companion site: **Savs Intro** — same content, plain-English voice, lighter interactions. See the sister repo `savs-poli-econ`.

## Stack

- **Vite** + **React 18** + **TypeScript**
- **MDX** for long-form content with React components inline
- **Tailwind CSS** with LGR brand tokens (Ink #2A2218, Gold #B89968, Limestone #FAF7F2, Cormorant Garamond + Inter)
- **Framer Motion** for animations
- **React Router** for client-side routing
- **localStorage** for progress tracking

No backend. Static-deploy to GitHub Pages, Cloudflare Pages, or Netlify.

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173/lgr-refresher/
npm run build    # → dist/
npm run preview  # serve dist locally
```

## Deploy to GitHub Pages

The `base` path is set to `/lgr-refresher/` in `vite.config.ts`. If you change the repo name or use a custom domain, update that.

```bash
# After pushing to GitHub:
# Settings → Pages → Source: GitHub Actions
# Then add .github/workflows/deploy.yml (see HANDOFF.md)
```

## Project structure

```
src/
├── components/           # Reusable UI
│   ├── CitationSystem.tsx    # Cite chip + modal provider
│   ├── ScotusTimeline.tsx    # Filterable case browser
│   ├── Quiz.tsx              # Knowledge-check engine
│   ├── ReadingProgress.tsx   # Top scroll bar
│   ├── Header.tsx            # Sticky nav
│   ├── mdxComponents.tsx     # MDX → React mapping
│   └── mdx-exports.ts        # Components available in MDX
├── content/              # MDX long-form
│   └── part-one-capitalism.mdx
├── data/                 # Static data
│   ├── citations.ts          # ~30 peer-reviewed sources
│   └── scotusCases.ts        # 18 major SCOTUS cases
├── hooks/
│   └── useProgress.ts        # localStorage progress state
├── pages/                # Route components
├── styles/global.css     # LGR design tokens
└── types/mdx.d.ts        # MDX TS shim
```

## Content sources

All long-form content originates from the V2 `.docx` files in `~/Desktop/lgr-clients/_internal/poli-econ-v2/`:

- `LGR_Refresher_PoliticalEconomy_v2.docx` → this site
- `Savs_Intro_PoliticalEconomy_v2.docx` → sister site (`savs-poli-econ`)

Research backing (Perplexity + Consensus outputs) is in the same folder.

## Status

Scaffold complete; **one section migrated** (Capitalism). See `HANDOFF.md` for next steps.
