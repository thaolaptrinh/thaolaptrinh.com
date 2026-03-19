# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server at http://localhost:3000
pnpm build      # Build for production
pnpm generate   # Generate static site
pnpm preview    # Preview production build locally
```

No test or lint commands are configured.

## Architecture

Minimal **Nuxt 4** project with Vue 3 and TypeScript.

- **Entry point:** `app/app.vue` — root Vue component
- **Config:** `nuxt.config.ts` — Nuxt configuration (devtools enabled, compatibilityDate: 2025-07-15)
- **Package manager:** pnpm

Nuxt handles routing via file-based conventions in `pages/` (not yet created), auto-imports components from `components/`, and auto-imports composables from `composables/`. Static assets go in `public/`.
