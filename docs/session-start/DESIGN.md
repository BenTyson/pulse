# Design System

> Luxury monochrome. Apple-level restraint.

## Philosophy

- Typography as primary design element
- Restraint over decoration
- No emojis, no colorful badges
- Subtle depth through grayscale layering
- Every pixel intentional

## Color Palette

### Backgrounds

```css
--color-bg-primary: #0d0d0d;      /* Main background */
--color-bg-surface: #141414;       /* Cards, elevated */
--color-bg-surface-light: #1f1f1f; /* Hover states */
--color-bg-elevated: #262626;      /* Modals, dropdowns */
```

### Text

```css
--color-text-primary: #f5f5f5;     /* Headings, emphasis */
--color-text-secondary: #a3a3a3;   /* Body text */
--color-text-muted: #525252;       /* Captions, labels */
--color-white: #ffffff;            /* High emphasis */
```

### Accents

```css
--color-silver-bright: #f5f5f5;
--color-silver-light: #e0e0e0;
--color-silver: #a3a3a3;
--color-silver-dark: #737373;
```

### Borders

```css
--color-border: #262626;
--color-border-light: #333333;
```

## Typography

| Element | Font | Weight | Size |
|---------|------|--------|------|
| H1 | Inter | 700 | 48-64px |
| H2 | Inter | 600 | 32-40px |
| H3 | Inter | 600 | 20-24px |
| Body | Inter | 400 | 16px |
| Caption | Inter | 500 | 14px, uppercase |
| Mono | JetBrains Mono | 400 | 14px |

## Component Patterns

### Buttons

**Primary (CTA):**
```html
<a class="bg-white text-bg-primary font-medium rounded-md hover:bg-silver-light">
```

**Secondary (Outlined):**
```html
<a class="border border-border text-text-secondary hover:border-silver-dark hover:text-white">
```

### Badges

Use the global `.badge` class:
```css
.badge {
  display: inline-flex;
  padding: 0.25rem 0.625rem;
  font-size: 0.6875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-secondary);
  background-color: var(--color-bg-surface);
  border: 1px solid var(--color-border);
  border-radius: 4px;
}
```

### Grids

Use 1px border separation instead of gaps:
```html
<div class="grid grid-cols-3 gap-px bg-border">
  <div class="bg-bg-primary p-6">Item</div>
  <div class="bg-bg-primary p-6">Item</div>
  <div class="bg-bg-primary p-6">Item</div>
</div>
```

### Gradients (Subtle)

```css
.hero-gradient {
  background: linear-gradient(180deg, #141414 0%, #0d0d0d 100%);
}

.cta-gradient {
  background: linear-gradient(135deg, #141414 0%, #1a1a1a 50%, #141414 100%);
}
```

## Spacing

- Container max-width: `max-w-5xl`
- Page padding: `px-6`
- Section padding: `py-16`
- Card padding: `p-6` or `p-8`

## Anti-Patterns

| Don't | Do Instead |
|-------|------------|
| `bg-silver text-bg-primary` | `bg-white text-bg-primary` |
| Colorful category badges | Monochrome `.badge` class |
| Emojis anywhere | Text or subtle SVG icons |
| `rounded-xl`, `rounded-2xl` | `rounded-md`, `rounded-lg` |
| Heavy shadows | Subtle `border-border` |
| Gradients with color | Grayscale gradients only |

## File Reference

Design tokens defined in: `src/styles/global.css`

## Related Docs

- [README.md](./README.md) - Quick start
- [STATUS.md](./STATUS.md) - Current progress
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Technical details
