# UI Consistency Rules

## 🎨 Spacing System
- **Container max-width**: `max-w-6xl` (homepage), `max-w-5xl` (forms), `max-w-4xl` (content pages)
- **Section spacing**: `!pt-0` for first section, `!pt-8` or `!pt-12` for subsequent
- **Card spacing**: `space-y-4` (sm), `space-y-6` (md), `space-y-8` (lg)
- **Gap**: `gap-4` (sm), `gap-6` (md), `gap-8` or `gap-12` (lg)

## 📝 Typography Scale
- **Hero Title**: `text-5xl sm:text-6xl lg:text-7xl font-bold`
- **Page Title**: `text-3xl sm:text-4xl lg:text-5xl font-bold`
- **Section Title**: `text-2xl sm:text-3xl font-bold` or `text-xl sm:text-xl lg:text-2xl font-medium`
- **Card Title**: `text-lg font-bold` or `text-xl font-bold`
- **Body Text**: `text-base` or `text-md`
- **Muted Text**: `text-sm text-muted` or `text-xs text-muted`

## 🎨 Color Usage
- **Primary**: CTAs, links, highlights
- **Success**: Positive actions, status
- **Info**: Informational badges
- **Neutral**: Default state, tags
- **Destructive**: Errors, warnings

## 📦 Component Sizes
- **Buttons**: `size="lg"` (forms, CTAs), `size="md"` (default), `size="sm"` or `size="xs"` (secondary)
- **Inputs**: `size="lg"` or `size="xl"` (forms), `size="md"` (default)
- **Icons**: `size-4` (xs), `size-5` (sm), `size-6` (md), `size-8` or `size-10` (lg), `size-12` or `size-14` (xl)
- **Avatars/Icon Boxes**: `size-9` or `size-10` (sm), `size-12` or `size-14` (md), `size-16` or `size-20` (lg)

## 🎭 Animations
- **Duration**: 0.3s (quick), 0.5-0.6s (normal), 1s (slow)
- **Delay**: Stagger with `0.1 * index` or `0.2 * index`
- **Common transitions**: `opacity`, `transform: translateY()`, `transform: scale()`
- **Hover effects**: `hover:scale-105`, `hover:shadow-lg`, `hover:-translate-y-1`

## 📱 Responsive Breakpoints
- **Mobile**: Default (< 640px)
- **Tablet**: `sm:` (≥ 640px), `md:` (≥ 768px)
- **Desktop**: `lg:` (≥ 1024px), `xl:` (≥ 1280px)

## ✨ Dark Mode
- All components must support dark mode
- Use Nuxt UI color tokens: `text-muted`, `bg-muted`, `border-gray-200 dark:border-gray-800`
- Test dark mode with color mode toggle in navigation

## 🎯 Accessibility
- All images must have `alt` text
- All buttons must have meaningful labels
- Form inputs must have labels or placeholders
- Keyboard navigation support
- Sufficient color contrast

