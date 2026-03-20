# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server at http://localhost:3000
pnpm build      # Build for production
pnpm generate   # Generate static site
pnpm preview    # Preview production build locally
pnpm lint       # Biome check
pnpm format     # Biome check --write (auto-fix)
pnpm typecheck  # vue-tsc type checking
```

Always run `pnpm format` and `pnpm typecheck` after making changes.

## Architecture

**Nuxt 4** blog with Nuxt Content v3, Tailwind CSS v4, and @nuxt/ui. Uses `app/` directory structure (Nuxt 4 convention).

### Routing & Pages

Pages live in `app/pages/` — file-based routing. Current routes:
- `/` → `app/pages/index.vue` — article listing
- `/articles/[slug]` → `app/pages/articles/[slug].vue` — article detail

### Content

Markdown files in `content/articles/`. Collections and schemas defined in `content.config.ts` using Zod.

Always use **Content v3 API** (`queryCollection`), never v2 (`queryContent`):

```ts
const { data: articles } = await useAsyncData('key', () =>
  queryCollection('articles')
    .where('status', '=', 'published')
    .order('date', 'DESC')
    .select('title', 'path', 'description', 'date')
    .all()
)
```

Use `.path(route.path).first()` for single article pages. Always `.select()` only needed fields.

### SEO & OG Images

Every page uses `useSeoMeta()` for meta tags and `defineOgImage('OgImageBlog', { title, description })` for social previews. The `OgImageBlog` Satori component is in `app/components/OgImageBlog.satori.vue`. JSON-LD structured data is set via `useHead({ script: [...] })` on article pages.

Sitemap is generated dynamically from `server/api/__sitemap__/urls.ts`.

### Styling

- Global styles in `app/assets/css/main.css` — Tailwind imports, IBM Plex fonts, dark grid background (`#0a0a0a`)
- Prose/code block styling customized in `app/app.config.ts` (Nuxt UI prose slots + code icons)
- Design tokens: text `#e5e5e5`, neutrals (`neutral-400` through `neutral-800`), dark bg `#0a0a0a`
- `font-mono` = IBM Plex Mono (applied via CSS to `code`, `pre`, `.font-mono`)

## Code Style

Enforced by Biome: **tabs**, **double quotes**, **no semicolons**.

- Vue components: `<script setup lang="ts">` only
- Fetch data with `useAsyncData` in script setup (not in methods/lifecycle hooks)
- Throw proper errors on missing content: `throw createError({ statusCode: 404 })`
- Internal links always use `<NuxtLink>`, not `<a>`

## Key Notes

- **Nuxt 4, not 3** — `app/` directory, not root-level `pages/`
- **Content v3, not v2** — `queryCollection()` not `queryContent()`
- **Biome, not ESLint** — `pnpm format` not `eslint --fix`
- **No tests** — manual testing only
