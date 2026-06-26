name: Eurekma! Warm Pedagogy
colors:
  primary: '#004e46'
  on-primary: '#fafafa'
  primary-container: '#00685e'
  on-primary-container: '#93e4d7'
  inverse-primary: '#85d5c8'
  secondary: '#8e4e14'
  on-secondary: '#ffffff'
  secondary-container: '#fca867'
  on-secondary-container: '#763b00'
  tertiary: '#004d4f'
  on-tertiary: '#ffffff'
  tertiary-container: '#00676a'
  on-tertiary-container: '#95e2e5'
  accent: '#f4a462'
  canvas: '#f1f8f6'
  surface: '#f4fbf9'
  surface-primary: '#e8efed'
  on-surface: '#161d1c'
  on-surface-variant: '#3e4947'
  inverse-surface: '#2b3231'
  inverse-on-surface: '#ebf2f0'
  outline: '#6e7977'
  outline-variant: '#bec9c6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  arithmetic: '#2563eb'
  geometry: '#16a34a'
  problems: '#9333ea'
  measures: '#ea580c'
  probability: '#dc2626'
  level-early: '#047857'
  level-mid: '#0369a1'
  level-high: '#4338ca'
typography:
  display-2xl:
    fontFamily: Inter
    fontSize: 60px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 32px
  body-base:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-bold:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style
Eurekma! embodies a brand personality that is intellectually stimulating yet emotionally nurturing. It target educators and families with a "Warm Pedagogy" (Pedagogía Cálida) approach—bridging the gap between rigorous scientific evidence and the joyful, ludic nature of learning.

The design style is **Modern Tactile**. It utilizes a sophisticated "Canvas Warm" background to avoid the sterile coldness of pure white, paired with soft, organic overlapping shapes (the rotating background plates in the hero section) and gentle elevation. The aesthetic is clean and organized like a modern SaaS platform but infused with friendly, rounded geometry and a rich, nature-inspired palette that feels accessible and human.

## Colors
The color strategy employs a deep "Teal Forest" primary to represent stability and depth of knowledge, contrasted with a "Vibrant Ochre" secondary (#AC662b) that adds a brighter, more energetic warmth and emotional resonance.

The system uses a functional "Categorical Palette" for different mathematical branches (e.g., Green for Geometry, Blue for Arithmetic) to aid navigation. Backgrounds are grounded in "Canvas" (#f1f8f6) to reduce eye strain and create a premium, paper-like feel. Accents utilize light tints of the primary and secondary colors (Fixed variants) for background fills in quotes and highlights.

## Typography
The system relies exclusively on **Inter** to maintain a clean, systematic feel that balances the organic shapes of the layout. 

- **Display levels** use heavy weights (700-800) and tight letter-spacing to create a strong visual anchor for hero statements.
- **Body text** is optimized for readability with a generous 1.5x line-height. 
- **Labels** use uppercase styling with increased letter-spacing (0.05em) to differentiate metadata from instructional content.
- **Interactive elements** (navigation, buttons) use `body-bold` to ensure clear clickability.

## Layout & Spacing
The layout follows a **Fixed-Fluid Hybrid Grid** (max-width: 1280px / 7xl) with a 12-column logic for desktop. 

- **Vertical Rhythm:** Sections are separated by `2xl` (48px) or `xl` (32px) padding to provide breathing room.
- **Bento Logic:** Content modules are grouped into cards using a Bento-box style layout on the "Módulos y Actividades" section, allowing for variable-height components that still feel unified.
- **Breakpoints:** Transitions from a single-column stack on mobile to multi-column layouts at the `md` (768px) and `lg` (1024px) markers.

## Elevation & Depth
Depth is conveyed through a mix of **Tonal Layers** and **Subtle Ambient Shadows**.

- **Level 0 (Base):** `canvas-warm` background.
- **Level 1 (Cards):** White (`surface-container-lowest`) with a `shadow-sm` and a 1px border of `surface-variant`.
- **Level 2 (Interaction):** On hover, cards use a `lift-hover` effect—a transition that shifts the element -4px on the Y-axis and applies a deeper `shadow-md` or `shadow-xl`.
- **Decorative Depth:** Background plates use rotation (-3 to +2 degrees) and 30% opacity fills to create a "layered paper" effect in the hero area without using traditional drop shadows.

## Shapes
The shape language is consistently **Rounded**, reinforcing the friendly and approachable nature of the brand.

- **Standard Buttons & Inputs:** 0.5rem (8px) corner radius.
- **Content Cards:** 1rem (16px) or 1.5rem (24px) for larger bento-style items.
- **Badges/Chips:** Full pill-shaped (9999px).
- **Special Elements:** Quote bubbles use asymmetric rounding (e.g., `rounded-tl-none` or `rounded-tr-none`) to simulate speech direction.

## Components
- **Buttons:** Primary buttons are solid `primary` with `on-primary` text. Secondary buttons use a transparent background with a 2px `primary/20` border. Large CTAs must maintain a minimum height of 44px for accessibility.
- **Cards:** White backgrounds with subtle borders. Header cards use a 4px top or left "accent border" in the primary or secondary color to denote category.
- **Badges:** Small, pill-shaped indicators using `label-caps` typography. Often paired with a small icon (16px).
- **Icons:** Use "Lucide Icons". In feature sections, icons are placed inside 64px circular containers with a 10-20% opacity fill of their respective category color.
- **Input Fields:** 12px vertical padding, 16px horizontal, using `body-base` font and a `primary` focus ring.