# Planning Guide

A visually breathtaking, immersive Aurora Tech-Noir showcase for Pcnaid - a full-service technology solutions provider featuring dark, atmospheric design with vibrant aurora gradients, glassmorphism, and dynamic micro-interactions that create a living, breathing digital experience.

**Experience Qualities**:
1. **Immersive** - Users should feel transported into a futuristic tech-noir atmosphere where every element pulses with life through animated aurora backgrounds, twinkling particles, and fluid gradient transitions.
2. **Alive** - The interface breathes through constant subtle motion: hover glows, light sweeps, shimmering gradients, orbiting particles, and magnetic button interactions that respond to user proximity.
3. **Sophisticated** - Premium glassmorphism with translucent panels, hairline borders, LED-style edge lighting, and high-contrast neon accents convey enterprise-grade quality and cutting-edge innovation.

**Complexity Level**: Light Application (multiple features with basic state)
  - Multi-section single-page application with animated hero, solutions grid, metrics counter, testimonials, FAQ accordion, and persistent navigation with smooth scroll-to-section functionality and basic state management for theme preferences.

## Essential Features

### Animated Aurora Hero
- **Functionality**: Full-viewport hero section with animated multi-color aurora background, twinkling star particles, gradient-filled headline with shimmer effect, trust badges (PCI/SOC2/ISO/Gov-Ready), and dual CTAs
- **Purpose**: Immediately captivate visitors, establish credibility with compliance badges, and communicate Pcnaid's innovative positioning
- **Trigger**: Automatic on page load with continuous subtle animations
- **Progression**: Page loads → Aurora gradients drift across background → Particles twinkle → Headline text reveals with gradient shimmer → Trust badges display → CTAs present clear actions
- **Success criteria**: Hero captures attention within 1 second, animations run smoothly at 60fps, prefers-reduced-motion honored, trust badges immediately visible

### Problem → Outcome Teaser
- **Functionality**: Four glass-morphic cards showing pain points with corresponding business outcomes (cost reduction, uptime improvement, deployment speed, compliance)
- **Purpose**: Quickly communicate value proposition by mapping client challenges to measurable results
- **Trigger**: Scroll into viewport
- **Progression**: User scrolls → Section visible → Cards display problem-to-outcome mapping → Visual arrows indicate transformation
- **Success criteria**: Clear problem-outcome mapping, immediately scannable, encourages further exploration

### Solutions Grid
- **Functionality**: Eight glass-morphic cards showcasing Pcnaid's service offerings (Payments & POS, Energy, Telecom, Web+Marketing, Accounting+Taxes, Strategy+Formation, Cloud Infrastructure, E-Commerce) with hover interactions
- **Purpose**: Clearly present complete service portfolio while maintaining visual consistency with tech-noir aesthetic
- **Trigger**: Scroll into viewport
- **Progression**: User scrolls → Cards display in 4-column grid → Hover activates edge glow → "Learn More" indicates deeper content available
- **Success criteria**: All eight solutions clearly readable, hover states obvious, grid responsive on all screen sizes

### Industries We Serve
- **Functionality**: Six industry tiles (Retail, Government/Defense, Energy, Telecom, Financial Services, SMB/Startups) with icons and descriptions
- **Purpose**: Demonstrate vertical expertise and help prospects identify relevant experience
- **Trigger**: Scroll into viewport
- **Progression**: User scrolls → Industry tiles display → Hover shows additional detail → Prospect identifies their sector
- **Success criteria**: Clear industry categorization, recognizable icons, hover states provide context

### Case Study Highlight
- **Functionality**: Featured case study card with outcome headline, three key bullets, and CTA to full story
- **Purpose**: Provide concrete proof of results with specific metrics and timeline
- **Trigger**: Scroll into viewport
- **Progression**: User scrolls → Case study appears → Headline grabs attention → Bullets provide detail → CTA offers deeper dive
- **Success criteria**: Compelling headline with specific metrics, scannable bullets, clear CTA

### Process / How We Work
- **Functionality**: Four-step process visualization (Assess → Architect → Implement → Operate) with connecting lines and icons
- **Purpose**: Build confidence by showing structured, repeatable methodology
- **Trigger**: Scroll into viewport
- **Progression**: User scrolls → Steps display left-to-right → Connecting lines show flow → Icons reinforce meaning
- **Success criteria**: Linear flow clear, each step distinct, methodology feels professional

### Security & Compliance
- **Functionality**: Four categories of security features (Industry Compliance, Data Protection, Privacy & Governance, Infrastructure Security) with bullet lists and link to Trust Center
- **Purpose**: Address security concerns upfront and demonstrate enterprise-readiness
- **Trigger**: Scroll into viewport
- **Progression**: User scrolls → Security categories display → Compliance badges visible → Trust Center CTA available
- **Success criteria**: Key compliance standards prominent, comprehensive coverage, link to deeper technical details

### Integrations & Platforms
- **Functionality**: Grid of 12+ integration logos/names organized by category
- **Purpose**: Show ecosystem compatibility and reduce integration concerns
- **Trigger**: Scroll into viewport
- **Progression**: User scrolls → Platform grid displays → Categories help scanning → Recognizable names build confidence
- **Success criteria**: Major platforms visible, categories clear, extensibility implied

### Engagement Models / Pricing
- **Functionality**: Four pricing model cards (Project-Based, Managed Services, Retainer, Performance-Based) with features and CTA for custom quote
- **Purpose**: Set expectations on how to work together and initiate pricing discussions
- **Trigger**: Scroll into viewport
- **Progression**: User scrolls → Models display → Features clarify differences → CTA prompts quote request
- **Success criteria**: Models clearly differentiated, features help selection, low-friction quote request

### Final CTA Band
- **Functionality**: Prominent glass-panel CTA section with single action (Book a Strategy Call) and reassurance copy
- **Purpose**: Convert engaged visitors with clear, low-pressure call to action
- **Trigger**: Scroll into viewport or reached at page end
- **Progression**: User scrolls → CTA appears → Value proposition reinforced → No-obligation messaging reduces friction → Button drives conversion
- **Success criteria**: Single focused action, reassurance copy reduces hesitation, visually prominent

### KPI Metrics Counter
- **Functionality**: Animated count-up statistics with glowing number displays and neon accent borders
- **Purpose**: Build credibility through quantified achievements while adding dynamic visual interest
- **Trigger**: Scroll into viewport
- **Progression**: Section visible → Numbers animate from 0 to target value with easing → Glow pulses on completion
- **Success criteria**: Numbers count smoothly over 1.5-2s, accessible to screen readers with final values

### Interactive FAQ Accordion
- **Functionality**: Expandable question panels with smooth height transitions, active-state glow, and large tap targets
- **Purpose**: Address common questions while maintaining clean visual hierarchy
- **Trigger**: Click/tap on question header
- **Progression**: User clicks question → Panel expands with smooth animation → Content fades in → Active indicator glows → Click again to collapse
- **Success criteria**: Minimum 44px tap targets, keyboard navigable, smooth expand/collapse under 300ms

### Floating Glass Navigation
- **Functionality**: Persistent glassmorphic navbar with blur effect, active section highlighting in brand blue, and smooth scroll-to-section links
- **Purpose**: Enable easy navigation while remaining visually cohesive with the glass aesthetic
- **Trigger**: Always visible, updates on scroll
- **Progression**: User scrolls → Active nav item updates based on viewport position → Click nav item → Smooth scroll to section → Active state moves to clicked item
- **Success criteria**: Nav remains readable over all backgrounds, active state always correct, scroll smooth

## Edge Case Handling
- **Motion sensitivity**: Detect `prefers-reduced-motion` and disable/reduce all animations (aurora drift, particles, sweeps, shimmers) while maintaining static beauty
- **Slow connections**: Show skeleton states for images/content with glass panel structure intact; critical above-fold content loads first
- **Small screens**: All glass cards stack vertically, maintain minimum tap targets of 44px, hero scales proportionally, particles reduce density on mobile
- **Keyboard navigation**: All interactive elements receive visible focus rings (2px brand blue + 1px white inner), logical tab order, Enter/Space activate buttons/accordions
- **High contrast mode**: Ensure borders and text remain visible, increase opacity of glass panels, boost text contrast ratios

## Design Direction

The design should feel like entering a futuristic command center at night - sophisticated, cutting-edge, and alive with energy. Think Blade Runner meets premium SaaS: dark atmospheric canvases illuminated by vibrant aurora gradients that continuously drift and evolve, combined with precise glassmorphic UI elements that feel both ethereal and professional. A minimal interface serves the content, with generous negative space allowing the aurora and glass effects to breathe while neon accents and micro-interactions reward exploration and engagement.

## Color Selection

**Triadic with Brand Anchor** - Three equally-spaced vibrant colors (violet/magenta, cyan/teal, peach/orange) create dynamic aurora gradients while Pcnaid's brand blue #003DA5 anchors key interactive elements and focus states, establishing trust within an exciting palette.

- **Primary Color**: Pcnaid Brand Blue `oklch(0.35 0.15 254)` #003DA5 - Communicates trust, professionalism, and corporate identity; used for primary CTAs, focus rings, active navigation states, and key outlines
- **Secondary Colors**: 
  - Aurora Violet `oklch(0.55 0.25 290)` #7B61FF - Represents innovation and creativity
  - Aurora Cyan `oklch(0.75 0.18 195)` #22D3EE - Conveys technology and clarity
  - Aurora Magenta `oklch(0.65 0.28 340)` #FF6BCD - Adds energy and vibrance
  - Aurora Peach `oklch(0.80 0.15 65)` #FFD873 - Provides warmth and optimism
- **Accent Color**: Neon Cyan `oklch(0.80 0.20 195)` #60A5FA - Highlight color for interactive hover states, active elements, and attention-grabbing micro-interactions
- **Foreground/Background Pairings**:
  - Background (Deep Ink `oklch(0.10 0.02 254)` #0B0F1A): White text `oklch(0.98 0 0)` #F8FAFC - Ratio 18.2:1 ✓
  - Card (Glass Dark `oklch(0.12 0.02 254)` #0E1528): White text `oklch(0.98 0 0)` - Ratio 16.8:1 ✓
  - Primary (Brand Blue `oklch(0.35 0.15 254)`): White text `oklch(0.98 0 0)` - Ratio 8.5:1 ✓
  - Accent (Neon Cyan `oklch(0.80 0.20 195)`): Deep Ink text `oklch(0.10 0.02 254)` - Ratio 14.2:1 ✓
  - Muted (Subdued Glass `oklch(0.20 0.02 254)`): Light Gray text `oklch(0.70 0 0)` - Ratio 6.8:1 ✓

## Font Selection

Typefaces should feel modern, technical, and premium - balancing futuristic aesthetics with professional readability through a clean geometric sans-serif for headings that projects confidence and innovation, paired with a highly-legible humanist sans for body text.

- **Typographic Hierarchy**:
  - H1 (Hero Title): Inter Bold / 56px / -0.02em letter-spacing / Gradient fill (--grad-primary) with text-shadow glow
  - H2 (Section Titles): Inter Bold / 40px / -0.01em / Gradient accent or solid white
  - H3 (Card Titles): Inter SemiBold / 24px / -0.01em / White
  - Body (Paragraph): Inter Regular / 16px / 1.6 line-height / oklch(0.70 0 0) muted text
  - Button Text: Inter SemiBold / 16px / 0.01em / High contrast
  - Caption/Label: Inter Medium / 14px / 1.5 line-height / oklch(0.65 0 0)

## Animations

Animations should feel like living energy flowing through the interface - purposeful, smooth, and responsive while never obstructing or delaying user actions, with each motion serving to guide attention, confirm interactions, or enhance spatial understanding.

- **Purposeful Meaning**: Motion communicates life and responsiveness - aurora gradients drift to show continuous activity, particles twinkle to suggest data flow, hover glows confirm interactivity, and light sweeps reward engagement
- **Hierarchy of Movement**: Hero aurora and particles (continuous subtle motion) → Scroll-triggered card reveals (medium importance) → Hover micro-interactions (immediate feedback) → Metric count-ups (celebratory moments)

## Component Selection

- **Components**: 
  - `Button` (gradient fills with inner shine and magnetic hover effects)
  - `Card` (custom glass panels with backdrop-blur and edge lighting)
  - `Accordion` (FAQ with smooth height transitions)
  - `Separator` (subtle dividers with gradient accents)
  - `Badge` (neon chips for tags/categories)
  - Custom animated background canvas for aurora effect
  - Custom particle system for twinkling stars
  - Custom counter component for KPI metrics

- **Customizations**: 
  - All cards custom-styled with glassmorphism (rgba background + backdrop-filter:blur + hairline borders + corner highlights)
  - Buttons receive gradient backgrounds, inner stroke highlights, magnetic hover (subtle transform toward cursor), and animated light sweep overlays
  - Custom ScrollProgress component for navigation active states
  - Custom AnimatedCounter for metrics section

- **States**: 
  - Buttons: default (gradient + glow) → hover (brightness increase + light sweep + magnetic pull) → active (scale 0.98 + deeper glow) → focus (2px brand ring + 1px white inner)
  - Cards: default (soft glow) → hover (enhanced edge glow + corner streaks) → focus-within (brand blue outline)
  - Accordion: closed (neutral) → open (active glow on header + expanded content with fade-in)

- **Icon Selection**: 
  - `Sparkle` for innovation/features
  - `Lightning` for speed/energy solutions
  - `Globe` for telecom/web services
  - `CreditCard` for payments/POS
  - `ChartBar` for accounting/metrics
  - `Strategy` for business strategy
  - `CaretDown` for accordion expand indicators
  - `ArrowRight` for CTAs and navigation

- **Spacing**: 
  - Section padding: py-24 (mobile) / py-32 (desktop)
  - Card padding: p-6 (mobile) / p-8 (desktop)
  - Grid gaps: gap-6 (mobile) / gap-8 (desktop)
  - Button padding: px-6 py-3 (standard) / px-8 py-4 (hero CTA)
  - Heading margins: mb-4 (h3) / mb-6 (h2) / mb-8 (h1)

- **Mobile**: 
  - Hero height reduces from 100vh to 70vh on mobile
  - Solutions grid changes from 3-column to 1-column stack
  - Navbar collapses to hamburger menu on screens < 768px
  - Particle density reduces by 60% on mobile for performance
  - Font sizes scale down using clamp() functions
  - All interactions remain touch-friendly with 44px minimum tap targets
  - Glass blur effect reduces from 14px to 8px on mobile for performance
