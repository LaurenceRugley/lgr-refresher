# HANDOFF — Interactive Political Economy & American Government Sites

**From:** claude.ai (architecture, scaffold)
**To:** Claude Code (build-out, iteration, deploy)
**Date:** 2026-05-11
**For:** Laurence A. Rugley, LGR Capital Investments

---

## TL;DR

Two interactive long-form websites to be built from the existing V2 .docx files. **One repo is scaffolded and proven to build** (this one). The second is unscaffolded. Both share design language and ~70% of components.

- `lgr-refresher` — scholarly version (this repo). Scaffold complete, one section migrated.
- `savs-poli-econ` — warm/plain-English version. Not yet scaffolded; instructions below.

Decisions already locked: two separate repos, full React + Vite, "go big" interactivity (quizzes, progress tracking, full reading layer + interactive layer), LGR brand tokens throughout.

---

## What's already done (this repo)

### Architecture
- Vite + React 18 + TS + Tailwind, building cleanly (3.77s, 326KB JS / 108KB gzipped)
- MDX content pipeline working with custom React components inline
- LGR brand tokens wired into Tailwind config + CSS vars + dark mode hook
- React Router with `BrowserRouter` and `basename` set to `/lgr-refresher/` for GitHub Pages

### Working components
- **`CitationSystem.tsx`** — `<Cite id="..." />` chips render inline; clicking opens a modal with abstract + DOI link. Context provider wraps the whole app.
- **`ScotusTimeline.tsx`** — filterable horizontal timeline of all 18 cases. Topic-color-coded pills filter cases in/out with framer-motion enter/exit. Click any case for a detail modal showing the long summary and overrules / overruled-by relationships.
- **`Quiz.tsx`** — multi-question component with reveal-on-answer logic, correct/incorrect feedback, explanations, persistent state via `useProgress`. Renders score and message at end.
- **`useProgress.ts`** — localStorage hook tracking section completion, quiz results (with answers replayed on revisit), citations viewed, last visited section.
- **`ReadingProgress.tsx`** — top scroll progress bar.
- **`Header.tsx`** — sticky nav with active-route highlighting.
- **`mdxComponents.tsx`** — MDX → React mapping with `<PullQuote>`, `<Callout>`, styled headings/lists/blockquotes.

### Data
- **`citations.ts`** — 30 peer-reviewed sources from the research packet (Lawson 2024, Callais & Young 2023, Gilens et al 2021, Hooghe et al 2023, Sunstein 2025, Vermeule 2024, Metzger 2026, etc.) — keyed by short ID for inline reference.
- **`scotusCases.ts`** — 18 major structural cases from Marbury (1803) to the 2024 quartet, with topic tags, short and long summaries, overrules relationships.

### Content
- **`part-one-capitalism.mdx`** — first section migrated as proof-of-pattern. Shows citations inline, a PullQuote, a Callout, and an integrated 3-question Quiz with explanations. Pulls from the V2 .docx.

### Verified working
- `npm run build` succeeds
- Path alias `@/*` configured in both `tsconfig.json` and `vite.config.ts`
- MDX files with React components compile (407 modules transformed)

### Verified NOT yet tested (do this first when you pick up)
- Actual browser rendering wasn't smoke-tested before handoff (smoke test was mid-flight). **Run `npm run dev` and open the home page first.** If anything crashes, the most likely culprits are:
  - MDX provider not picking up the `providerImportSource` — fix is to wrap `<App />` in `<MDXProvider>` instead of doing it per-page in `PartOne.tsx`
  - Framer Motion exit animations in the timeline needing `AnimatePresence mode="popLayout"` for grid-style layouts

---

## What to build next (lgr-refresher)

### Phase 1 — finish the content migration

Source: `~/Desktop/lgr-clients/_internal/poli-econ-v2/LGR_Refresher_PoliticalEconomy_v2.docx`
(if it's not there, regenerate from the .docx in claude.ai outputs, or use `extract-text` from the docx skill)

Sections to migrate to MDX files in `src/content/`:

1. **Preface** → `preface.mdx`
2. **Capitalism** ✅ already migrated (note: needs Varieties of Capitalism subsection added — uses `<VocQuadrant />`, see Phase 2)
3. **Keynes & Macroeconomic Management** → `part-one-keynes.mdx` — cite `blanchard-2019`, `kelton-2020`, `cochrane-2023`
4. **Socialism** → `part-one-socialism.mdx` — cite `boettke-candela-2023`, `dapprich-cockshott-2023`, `nguyen-2024`, `lopes-2021`
5. **Communism** → `part-one-communism.mdx` — include the 21st-century revival subsection
6. **Article I (Legislative)** → `part-two-article-1.mdx` — uses `<BillToLaw />` interactive
7. **Article II (Executive)** → `part-two-article-2.mdx`
8. **Article III (Judicial)** → `part-two-article-3.mdx` — uses `<CourtHierarchy />`
9. **The 2024 Admin-Law Revolution** → `part-two-admin-law.mdx` — uses `<AdminLawQuartet />` interactive, cite all four scholars: `sunstein-2025`, `vermeule-2024`, `metzger-2026`, `desai-2025`
10. **Checks and Balances** → `part-two-checks-balances.mdx` — uses `<ChecksBalances />`
11. **Federalism** → `part-two-federalism.mdx` — cite all federalism sources: `garlick-2022`, `tyler-gerken-2021`, `volden-2002`, `woods-2021`, `bollyky-2023`, `montez-2019`, `gluck-huberfeld-2018`
12. **Elections & Parties** → `part-two-elections.mdx` — cite electoral-college and campaign-finance sources
13. **Glossary** → migrate to a structured data file `src/data/glossary.ts` + a searchable `<GlossaryPage />` with hover-tooltips back-referenced from prose

For each section: write 2–4 quiz questions at the end. Keep the prose voice from the .docx — it's already correct.

### Phase 2 — build the remaining interactive diagrams

Convert each PNG diagram from the .docx to an interactive React/SVG component. Reference designs are in `~/Desktop/lgr-clients/_internal/poli-econ-v2/figs/`.

Components to build (each goes in `src/components/diagrams/`):

| Component | Source PNG | Interactive features |
|---|---|---|
| `ThreeBranches` | `three_branches.png` | Hover each branch → reveal sample powers; click for full job description |
| `ChecksBalances` | `checks_balances.png` | Hover an arrow → highlight the relationship; click for examples |
| `SystemsMatrix` | `systems_matrix.png` | Sortable rows; click any cell for nuance / examples |
| `EconTimeline` | `econ_timeline.png` | Scroll-triggered animation; click event for book excerpt or citation |
| `CourtHierarchy` | `court_hierarchy.png` | Hover a tier → show counts and example cases; click for the appeals flow animation |
| `VocQuadrant` | `voc_2x2.png` | Hover quadrant → countries float in; click for institutional details |
| `BillToLaw` | `bill_to_law.png` | Click step-by-step "walk through" mode; current step highlights, gold rule animates |
| `AdminLawQuartet` | `admin_law_quartet.png` | Already partially in ScotusTimeline. Make this its own scrollytelling section where each case slides in with its scholarly response |

Follow `ScotusTimeline.tsx` as the pattern — `framer-motion` for animation, modals via the same overlay class, topic colors from a small color map.

### Phase 3 — site-wide polish

1. **Dark mode** — `[data-theme='dark']` is already in CSS; add a toggle in `Header.tsx` that sets `document.documentElement.setAttribute('data-theme', ...)` and persists in localStorage.
2. **Sticky TOC** — `.toc-link` classes already in CSS. Add a `<TOC />` component that reads heading IDs from the rendered MDX and uses IntersectionObserver to highlight the active section.
3. **"Resume reading"** — `state.lastVisited` already tracked; wire it into the Home page card.
4. **Citation index page** — `/citations` listing all 30 sources grouped by topic, with backlinks to where they're cited.
5. **Search** — local Lunr or Fuse.js search across MDX content, citations, and SCOTUS cases.
6. **Reading-time estimates** per section.
7. **Print stylesheet** — strip animations and modals, render citations as footnotes.

### Phase 4 — deploy

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
      - uses: actions/deploy-pages@v4
```

Repo settings → Pages → Source: GitHub Actions.

---

## Building the sister site (savs-poli-econ)

After this site is shipping, scaffold the Savs version. **Do not copy this whole repo** — fork the patterns instead.

### Differences from this site
- **Source:** `Savs_Intro_PoliticalEconomy_v2.docx` (much shorter — 6 pages vs 26)
- **Tone:** plain-English, warm, "Hi Savs — Love you, L" framing preserved
- **No citation chips** — Savs doesn't need 30 peer-reviewed sources
- **Simpler quizzes** — 2 questions per section max, conceptual not technical
- **No SCOTUS browser, no Glossary page**
- **Plain-language tooltips on jargon** — `<Word definition="..."/>` that pops on hover/tap
- **"Test what you remember" mini-quiz** at the end of each Part
- **"Ask Laurence" button** — opens a pre-filled SMS with `sms:909-753-2601?body=...`
- **Slightly softer color treatment** — keep the LGR brand but lean into Limestone more, Ink less

### What to fork
- All design tokens (Tailwind config, global.css)
- `useProgress.ts`
- `ReadingProgress.tsx`
- `Header.tsx` (different nav links)
- `Quiz.tsx` (drop the "Worth a re-read" / score language for something warmer)
- `ThreeBranches`, `SystemsMatrix` (simpler version), `FederalState` from the diagrams folder

### What's new
- `<Word>` jargon tooltip component
- `<AskLaurence>` button component
- Lighter `<PartCard>` style for the Home page

### Suggested structure (Savs)
- `/` — Home with "Hi Savs" greeting and resume link
- `/part-one` — Three Economic Systems
- `/part-two` — How Our Government Works
- That's it. No glossary, no SCOTUS page, no /citations.

---

## Brand & design conventions (apply everywhere)

These are the LGR house style — already baked into both repos' tokens but worth restating so you don't drift:

- **Colors:** Ink #2A2218 (body text, dark surfaces), Gold #B89968 (rules, accents, links, citations), Limestone #FAF7F2 (background), Limestone-dark #EFE9DE (alt rows, callouts), Gold-light #D4BC93 (subtle borders).
- **Typography:** Cormorant Garamond for display/headings (serif), Inter for body and UI (sans). Loaded from Google Fonts. The .ttf falls back gracefully.
- **Spacing:** generous. Long-form should feel like a print magazine, not a tech docs site.
- **Animation:** subtle, never gimmicky. Framer Motion fade-up entries (0.6s), hover transitions 150ms, no bouncy springs unless we have a specific reason.
- **Buttons:** primary = Ink bg with Limestone text, hover to Gold. Ghost = transparent with Gold border. Both: 0.25rem radius, never fully rounded.
- **Citations:** always render as the gold-bordered chip, never as raw text or footnote numbers.

---

## Files to be aware of in this repo

```
HANDOFF.md              ← you are here
README.md               ← user-facing overview
package.json            ← Node 20+, run `npm install`
vite.config.ts          ← MDX plugin, @ path alias, base path
tsconfig.json           ← strict TS, @/* paths
tailwind.config.js      ← LGR brand tokens
src/styles/global.css   ← CSS vars, component classes, dark-mode hook
src/main.tsx            ← entry point
src/App.tsx             ← router + providers
```

---

## Workflow recommendation

1. `npm install`
2. `npm run dev` — verify the home page renders and `/part-one` shows the migrated MDX with working citations + quiz + timeline
3. Fix anything broken (see "Verified NOT yet tested" above)
4. **Migrate content section-by-section** in MDX files, committing after each section — small commits, atomic progress
5. **Build diagrams** in parallel as separate components, then drop them into MDX where needed
6. Once content is migrated, do site-wide polish (Phase 3)
7. Set up GitHub Actions deploy (Phase 4)
8. Then fork patterns into `savs-poli-econ`

Standard LGR commit message style: short imperative, no emoji.

---

## When you're done

Send Laurence the URLs:
- `https://laurencerugley.github.io/lgr-refresher/`
- `https://laurencerugley.github.io/savs-poli-econ/`

And update memory:
- Add: "lgr-refresher and savs-poli-econ interactive sites shipped"
- Note: candidate for `savs.lgrweb.studio` / `refresher.lgrweb.studio` subdomains once worth the Cloudflare DNS work

---

## Open questions for Laurence

Leave these as comments/issues in the repo, don't try to answer them yourself:

1. Custom domain (subdomains under lgrweb.studio) or stick with github.io?
2. Should the SCOTUS browser eventually link out to actual case PDFs on supremecourt.gov, or stay self-contained?
3. Savs site — is the "Ask Laurence" SMS button something she'd actually use, or feels weird?
4. Analytics? Plausible / Umami / nothing?
