# thaolaptrinh.com

Personal blog of [Thao Nguyen Van](https://thaolaptrinh.com) — built with Nuxt 4, Nuxt Content v3, and Tailwind CSS v4.

## Tech Stack

- **Framework**: [Nuxt 4](https://nuxt.com) (statically generated)
- **Content**: [Nuxt Content v3](https://content.nuxt.com) with Markdown articles
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) via [@nuxt/ui](https://ui.nuxt.com)
- **Fonts**: IBM Plex Sans / IBM Plex Mono via [@nuxt/fonts](https://fonts.nuxt.com)
- **SEO**: [nuxt-og-image](https://nuxt-og-image.vercel.app), [@nuxtjs/sitemap](https://nuxtseo.com), RSS feed
- **Tooling**: [Biome](https://biomejs.dev) (format/lint), TypeScript, pnpm

## Setup

```bash
pnpm install
```

## Development

```bash
pnpm dev   # http://localhost:3000
```

Studio (visual content editor) is available at `/_studio` when running with `STUDIO=true`:

```bash
STUDIO=true pnpm dev
```

## Build & Preview

```bash
pnpm build       # build for production
pnpm generate    # generate static site
pnpm preview     # preview production build
```

## Code Quality

```bash
pnpm format      # format & auto-fix with Biome
pnpm lint        # check with Biome
pnpm typecheck   # TypeScript type checking
```

## Project Structure

```
app/
  assets/css/     # Global styles
  components/     # Auto-imported Vue components
  pages/          # File-based routing
    index.vue     # Home page
    articles/[slug].vue  # Article page
content/
  articles/       # Markdown articles
content.config.ts # Content collection schema (Zod)
server/
  routes/         # Nitro server routes (RSS, sitemap, OG image)
nuxt.config.ts
```

## Writing Articles

Articles live in `content/articles/*.md` with the frontmatter defined in `content.config.ts`:

```yaml
---
title: "Article Title"
description: Short description for SEO and listings
date: 2026-01-01
status: published      # draft | published | archived
category: PHP
tags:
  - PHP
  - Laravel
---
```

See [AGENTS.md](./AGENTS.md) for the full development guide.
