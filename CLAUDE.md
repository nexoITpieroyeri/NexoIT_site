# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Dev server with hot reload
npm run build     # Production build → /dist
npm run preview   # Preview production build locally
```

No linting or test tooling is configured.

## Architecture

**Astro 6 static site** — fully static output, no backend, no SSR. Deployed to Cloudflare Pages at `https://nexoit-site.pages.dev`.

The site is a corporate landing page for NexoIT (Peruvian software agency). Its primary goal is converting visitors into WhatsApp/email quote requests. The site itself is the main proof of technical capability.

### Content layer

All dynamic content lives in a single file: `src/data/constants.ts`. Every section (services, portfolio, pricing, team, testimonials, FAQs, process steps, tech logos, nav links, contact info) is exported from there. To add or change any copy, images, or data, edit `constants.ts` — do not scatter content across components.

### Page structure

One main landing page (`src/pages/index.astro`) that imports 12 section components in order. Additional pages: `casos-exito.astro`, `privacidad.astro`, `terminos.astro`, and `proyectos/[slug].astro` (dynamic detail pages for portfolio projects).

Layout wrapper is `src/layouts/Layout.astro` — it handles `<head>`, fonts, global styles, and loads the global script.

### JavaScript architecture

Two-layer JS to avoid duplicate event listeners across Astro page navigations:

1. **`/public/js/main.js`** — Global singleton, loaded once. Guarded by `window.nexoInitialized`. Handles: smooth scroll, sticky header, Intersection Observer reveals, WhatsApp modal, lightbox, typewriter effect.
2. **Component `<script>` tags** — Only component-specific logic: Portfolio filter, Testimonials carousel, FAQ accordion, Contact form validation, Pricing tab toggle, `[slug].astro` gallery lightbox.

Never add global navigation/scroll logic inside component scripts — it will duplicate the singleton and cause intermittent failures.

### Styling

No Tailwind. CSS custom properties (design tokens) defined in `src/styles/styles.css` (919 lines). Animations in `src/styles/animations.css`. Components use scoped `<style>` blocks for local styles.

## Design System

### Colors

Committed single-accent strategy: cobalt blue (`--brand: #3D7BFF`) is the only saturated color. Everything else is cold graphite neutrals.

| Token | Value | Role |
|---|---|---|
| `--bg` | `#0A0C10` | Page base background |
| `--bg-2` | `#0E1117` | Alternate section background |
| `--surface` | `#13171F` | Cards, elevated panels |
| `--surface-2` | `#1A2030` | Card hover, nested panels |
| `--border` | `#232A38` | Hairline borders |
| `--border-strong` | `#33405A` | Active/emphasized borders |
| `--ink` | `#E9EDF4` | Primary text |
| `--ink-muted` | `#A2AEC2` | Secondary text (≥7:1 on `--bg`) |
| `--ink-faint` | `#6B7688` | Labels/metadata only (text large) |
| `--brand` | `#3D7BFF` | CTAs, links, signal |
| `--brand-hi` | `#6AA1FF` | Hover, halos |
| `--ok` | `#3DDC97` | Success states only |

Halos/glows: use `color-mix(in oklch, var(--brand) N%, transparent)`. Never introduce a second saturated accent color.

### Typography

Three families from Google Fonts:
- **Sora** (`--font-display`) — Headings. 600/700 weight. `letter-spacing: -0.02 to -0.035em` at large sizes. `text-wrap: balance`.
- **Geist** (`--font-body`) — Body, nav, UI labels. 400/500 weight.
- **Geist Mono** (`--font-mono`) — Technical labels, numbers, kickers. 400/500 weight. Use sparingly.

Type scale uses `clamp()` for fluid sizing. Body `line-height: 1.65`.

### Motion

- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out exponential). No bounce or elastic curves.
- Hover: `transform: translateY(-2px)` + border/halo change, 180–220ms.
- On-scroll reveals via Intersection Observer with stagger; each reveal tailored to its section.
- `@media (prefers-reduced-motion: reduce)`: all animations degrade to crossfade/instant; canvas hero freezes or shows static grid.

### Layout

- Container max: `1200px`. Text max: `68ch`.
- Section `padding-block: clamp(4.5rem, 9vw, 8rem)`.
- Sections alternate `--bg` / `--bg-2` for vertical rhythm.
- Responsive grids without explicit breakpoints: `repeat(auto-fit, minmax(280px, 1fr))`.
- z-index: dropdown 100 · sticky 200 · backdrop 300 · modal 400 · toast 500 · tooltip 600.
- Glassmorphism (`backdrop-blur`) only on the sticky header — never decorative on cards.

### Do / Don't

**Do:** Use cobalt only for interactive/signal elements. Use graphite neutrals for everything else. Always provide `prefers-reduced-motion` fallbacks. Use Geist Mono for technical labels and numbers.

**Don't:** No green/violet/fuchsia (leftover from previous design). No all-caps eyebrow labels above every section. No decorative `01/02/03` numbers (only in the Process section where sequence is real). No gradient-text. No side-stripe borders. No decorative glassmorphism. No nested cards. No second saturated color competing with cobalt.

## Brand Context

NexoIT targets PYMEs, entrepreneurs, and professionals in Peru (base in Piura, remote clients). Visitors arrive evaluating providers — often non-technical — and decide to reach out based on perceived trustworthiness. The site IS the portfolio: impeccable execution signals that client projects will be equally well-executed.

Voice: direct, no fluff, states what it does, how much, and how long. Professional but approachable. Reference: Linear, Vercel, Stripe clarity. Three words: **capaz, claro, confiable**.

Content language is `es-PE`. Accessibility target: WCAG 2.1 AA (text contrast ≥4.5:1, keyboard navigation, visible focus, content visible by default before animations run).
