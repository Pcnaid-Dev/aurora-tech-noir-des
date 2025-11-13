# Full-Bleed Grid System Documentation

## Overview

This application uses a full-bleed grid system that provides a professional layout structure with proper content containment while allowing certain elements (like backgrounds and images) to extend to the viewport edges.

## Grid Structure

```
[full-start] gutter [content-start] ← 12 columns → [content-end] gutter [full-end]
```

### Specifications

**Mobile (< 768px):**
- Gutters: 1rem each side
- Content columns: 12 columns × 5rem max-width
- Column gap: 1.5rem

**Desktop (≥ 768px):**
- Gutters: 2rem each side
- Content columns: 12 columns × 6rem max-width
- Column gap: 2rem

## CSS Classes

### `.full-bleed-grid`
Apply to any section to establish the grid container.

```tsx
<section className="full-bleed-grid">
  {/* content */}
</section>
```

### `.grid-content`
Content spans the content columns only (stays within gutters).

```tsx
<section className="full-bleed-grid">
  <div className="grid-content">
    <h1>This content stays within the content area</h1>
  </div>
</section>
```

### `.grid-full`
Content spans full viewport width (extends to edges).

```tsx
<section className="full-bleed-grid">
  <div className="grid-full bg-blue-500">
    <p>This background extends to viewport edges</p>
  </div>
</section>
```

## Section Component

The `Section` component is the recommended way to use the grid system.

### Props

```typescript
interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  fullBleed?: boolean           // Background extends to full width
  contentAlign?: 'left' | 'center' | 'right'  // Content alignment
  noPadding?: boolean           // Remove default py-24 md:py-32
}
```

### Basic Usage

**Standard centered section:**
```tsx
import { Section } from '@/components/Section'

<Section id="features" contentAlign="center">
  <h2>Features</h2>
  <p>Content is centered and contained within content columns</p>
</Section>
```

**Full-bleed background section:**
```tsx
<Section fullBleed className="bg-gray-900">
  <h2>This has a full-width dark background</h2>
  <p>But the content itself stays within the content columns</p>
</Section>
```

**Left-aligned section:**
```tsx
<Section contentAlign="left">
  <h2>This content is aligned left</h2>
  <p>Creates visual variety and rhythm</p>
</Section>
```

**Custom section without padding:**
```tsx
<Section noPadding className="min-h-screen flex items-center">
  <div>Hero content</div>
</Section>
```

## Layout Patterns

### Pattern 1: Centered Content (Default)
Use for most text-heavy sections like features, benefits, FAQ.

```tsx
<Section contentAlign="center">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-center">Heading</h2>
    <p className="text-center">Description</p>
  </div>
</Section>
```

### Pattern 2: Full-Bleed Colored Band
Background extends full width, content stays contained.

```tsx
<Section fullBleed className="bg-gradient-to-r from-blue-900 to-purple-900">
  <h2>Vibrant Background</h2>
  <p>Content within the grid</p>
</Section>
```

### Pattern 3: Alternating Alignment
Create visual rhythm by alternating left and center alignment.

```tsx
<Section contentAlign="left">
  <h2>Feature One</h2>
</Section>

<Section contentAlign="center">
  <h2>Feature Two</h2>
</Section>

<Section contentAlign="left">
  <h2>Feature Three</h2>
</Section>
```

### Pattern 4: Asymmetric Layout with Full Bleed
Content on one side, image extending to edge.

```tsx
<Section fullBleed>
  <div className="grid grid-cols-2 gap-8">
    <div>
      <h2>Content</h2>
      <p>Text content</p>
    </div>
    <div className="relative">
      <img src="..." className="absolute inset-0 w-full h-full object-cover" />
    </div>
  </div>
</Section>
```

### Pattern 5: Footer with Full-Bleed Background
Background extends, but inner content stays within grid.

```tsx
<footer className="full-bleed-grid py-20 bg-gray-950">
  <div className="grid-full absolute inset-0 bg-gradient-to-t from-black/50" />
  
  <div className="relative z-10 grid-content">
    <div className="grid grid-cols-4 gap-8">
      {/* Footer columns */}
    </div>
  </div>
</footer>
```

## Vertical Rhythm

The `Section` component automatically applies consistent vertical spacing:
- `py-24` on mobile
- `py-32` on desktop

This creates a harmonious vertical rhythm throughout the page.

To override, use `noPadding` prop:

```tsx
<Section noPadding>
  {/* Custom padding */}
</Section>
```

## Responsive Behavior

The grid automatically adapts:
- Mobile: Smaller gutters, narrower columns, tighter gaps
- Desktop: Larger gutters, wider columns, more breathing room

Content within `.grid-content` will always maintain appropriate margins on all screen sizes.

## Best Practices

1. **Use `Section` component** - Prefer the Section component over raw HTML sections
2. **Consistent rhythm** - Let Section handle vertical spacing unless you have a specific reason to override
3. **Stagger alignment** - Don't center-align every section; create visual variety
4. **Full-bleed backgrounds** - Use `fullBleed` for colored bands, gradients, or images that should extend to edges
5. **Content containment** - Even with full-bleed backgrounds, keep text content within the content columns for readability
6. **Semantic sections** - Always provide an `id` prop for navigation and accessibility

## Examples from the App

**Hero Section:**
```tsx
<Section id="hero" noPadding contentAlign="center" className="min-h-screen flex items-center">
  <div className="text-center">
    <h1>Hero Headline</h1>
    <p>Subtitle</p>
  </div>
</Section>
```

**Trusted Partners with Full-Bleed Background:**
```tsx
<Section fullBleed contentAlign="center" className="bg-[var(--bg-900)]">
  <h3>Trusted by leading organizations</h3>
  <LogoMarquee />
</Section>
```

**Problem/Outcome Section:**
```tsx
<Section id="problem-outcome" contentAlign="center">
  <div className="text-center mb-16">
    <h2>Transform Challenges Into Results</h2>
  </div>
  <div className="grid grid-cols-2 gap-6">
    {/* Cards */}
  </div>
</Section>
```

**Footer with Full-Bleed Background:**
```tsx
<footer className="full-bleed-grid py-20 border-t">
  <div className="grid-full absolute inset-0 bg-[var(--bg-950)]" />
  
  <div className="relative z-10 grid-content">
    <div className="grid grid-cols-5 gap-12">
      {/* Footer content */}
    </div>
  </div>
</footer>
```

## Migration Guide

To migrate existing sections to the new grid system:

**Before:**
```tsx
<section className="py-24 px-4">
  <div className="container mx-auto max-w-7xl">
    {content}
  </div>
</section>
```

**After:**
```tsx
<Section contentAlign="center">
  {content}
</Section>
```

For full-bleed backgrounds:

**Before:**
```tsx
<section className="py-24 px-4 bg-gray-900">
  <div className="container mx-auto max-w-7xl">
    {content}
  </div>
</section>
```

**After:**
```tsx
<Section fullBleed className="bg-gray-900">
  {content}
</Section>
```
