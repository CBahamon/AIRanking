# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AI tools directory and comparison dashboard built for Colombian users. Displays AI tool cards, side-by-side comparisons with radar charts, a recommendation wizard, and a prompts library. Pricing is shown in both USD and COP.

## Tech Stack

- **Astro 5** with React 19 islands (`client:load` hydration)
- **Tailwind CSS 4** via `@tailwindcss/vite` plugin (uses `@import "tailwindcss"` syntax, not v3 `@tailwind` directives)
- **TypeScript** (strict mode, extends `astro/tsconfigs/strict`)
- **Lucide React** for icons, **clsx + tailwind-merge** for class utilities

## Commands

```bash
npm run dev       # Dev server at localhost:4321
npm run build     # Production build to ./dist/
npm run preview   # Preview production build locally
```

No test runner or linter is configured.

## Architecture

**Astro pages** (`src/pages/`) define routes and import **React island components** (`src/components/ia-hub/`). Astro handles static rendering; React handles interactive UI.

### Routing

- `/` → `index.astro` → `IAHub.tsx` (search, filters, card grid, recommendation wizard)
- `/compare` → `compare.astro` → `CompareView.tsx` → `Comparador.tsx` (multi-select up to 3 AIs, radar charts, feature matrix)
- `/prompts` → `prompts.astro` → `PromptsView.tsx`
- `/tool/[id]` → `tool/[id].astro` → `ToolDetailView.tsx` (dynamic route using `getStaticPaths()`)

### Layout

`Layout.astro` provides the HTML shell. `DashboardLayout.tsx` renders the persistent sidebar navigation and mobile-responsive menu used by all pages.

### Data Layer

All AI tool data is **hardcoded** in `src/lib/data.ts` as an array of `IAData` objects (defined in `src/lib/types.ts`). There is no database or API. To add a new AI tool, add an entry to the `ias` array in `data.ts` following the `IAData` interface.

The `IAData` type includes: pricing (free tier + paid plans), benchmarks (spanish/code/creativity/speed/free scores 0-100), availability in Colombia (VPN needed, payment methods, platforms), strengths/limitations, and category tags.

### Internationalization

`src/lib/i18n.ts` provides ES/EN translations for UI strings. Default language is Spanish. Language is determined from the URL path segment.

### Theme

Dark/light mode toggle in `ThemeToggle.tsx`, persisted via `localStorage` and applied through `classList` on the document element.
