# Agent Guidelines for thaolaptrinh.com

This file contains essential information for AI agents working on this codebase.

## Project Overview

Minimal **Nuxt 4** blog with Nuxt Content v3, TypeScript, and Tailwind CSS v4. Uses pnpm as package manager.

## Essential Commands

```bash
# Development
pnpm dev              # Start dev server at http://localhost:3000

# Building & Preview
pnpm build            # Build for production
pnpm generate         # Generate static site
pnpm preview          # Preview production build locally

# Code Quality
pnpm format           # Format code with Biome (auto-fix)
pnpm lint             # Check code with Biome
pnpm typecheck        # TypeScript type checking via vue-tsc
```

**IMPORTANT**: Always run `pnpm format` and `pnpm typecheck` after making changes.

## Code Style Guidelines

### Formatting (Biome)
- **Indentation**: Tabs (not spaces)
- **Quotes**: Double quotes for strings
- **Semicolons**: Not used (avoid)
- **Import organization**: Auto-organized by Biome

### TypeScript & Vue
- Use `<script setup lang="ts">` for Vue components
- Use Composition API with `const { data } = await useAsyncData()` pattern
- Define async data fetching in `<script setup>`, not methods
- Use proper TypeScript types (no `any`)

### Nuxt 4 Conventions
- File-based routing in `app/pages/`
- Auto-imported composables from `app/composables/`
- Auto-imported components from `app/components/`
- Static assets in `public/`
- Use `useSeoMeta()` for SEO metadata
- Use `<NuxtLink>` for internal links (not `<a>`)

### Nuxt Content v3
- Collections defined in `content.config.ts` with Zod schemas
- Use `queryCollection('collectionName')` to fetch content
- Always filter with `.where()` before fetching
- Use `.select()` to specify fields (performance)
- Use `.path(route.path)` to fetch single page
- Use `.order('field', 'DESC')` for sorting
- Use `.all()` for multiple, `.first()` for single item

Example:
```ts
const { data: articles } = await useAsyncData('articles', () =>
  queryCollection('articles')
    .where('status', '=', 'published')
    .order('date', 'DESC')
    .select('title', 'path', 'description')
    .all()
)
```

### Tailwind CSS v4
- Use `@import "tailwindcss"` and `@import "@nuxt/ui"`
- Custom CSS in `app/assets/css/main.css`
- No `@theme` or `@source` directives (v4 only, this project uses v3 via @nuxt/ui)
- Use utility classes in components

### Naming Conventions
- Components: PascalCase (`MyComponent.vue`)
- Composables: camelCase with `use` prefix (`useMyComposable`)
- Pages: lowercase with dashes for nested routes (`posts/[slug].vue`)
- Variables/Functions: camelCase
- Constants: SCREAMING_SNAKE_CASE (rarely needed)

### File Structure
```
app/
  pages/           # File-based routing
    articles/      # Article pages
  components/      # Vue components (auto-imported)
  composables/     # Vue composables (auto-imported)
  assets/
    css/           # Global styles
content/          # Nuxt Content markdown files
  articles/        # Article markdown files
server/           # Server routes
public/           # Static assets
```

### Error Handling
- Use `try/catch` for async operations that may fail
- Handle `null`/`undefined` from Nuxt Content queries with `v-if`
- Use optional chaining (`?.`) for potentially undefined data
- Return early on errors to avoid nested conditions

### Performance Best Practices
- Always select specific fields in Nuxt Content queries
- Use `useAsyncData` with unique keys to prevent refetching
- Lazy load images with `<NuxtImg>` from `@nuxt/image`
- Use `v-if` instead of `v-show` for conditional rendering of heavy components

### CSS Guidelines
- Use Tailwind utility classes in components
- Minimize custom CSS
- Use semantic color tokens from design system when available
- Responsive design: mobile-first approach

### Git Workflow
- Format with `pnpm format` before committing
- No test commands configured (manual testing required)
- Run `pnpm typecheck` if you add TypeScript

## Specific Patterns

### Page Component with Nuxt Content
```vue
<script setup lang="ts">
const { data: page } = await useAsyncData(route.path, () =>
  queryCollection('pages').path(route.path).first()
)
</script>

<template>
  <div v-if="page">
    <h1>{{ page.title }}</h1>
    <ContentRenderer :value="page" />
  </div>
</template>
```

### SEO Meta
```ts
useSeoMeta({
  title: 'Page Title',
  description: 'Page description',
  ogTitle: 'OG Title',
  ogDescription: 'OG Description',
  twitterCard: 'summary_large_image'
})
```

## Important Notes

- **No tests configured** - Manual testing required
- **Biome not ESLint** - Use `pnpm format` not `eslint --fix`
- **Nuxt 4, not 3** - Uses `app/` directory structure
- **Content v3, not v2** - Uses `queryCollection()` not `queryContent()`
- **Tailwind v4** - Different syntax from v3 (via @nuxt/ui integration)
