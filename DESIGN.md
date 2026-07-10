name: Eurekma! Warm Pedagogy
colors:
  primary: '#308479'
  primary-foreground: '#fafafa'
  primary-container: '#056a60'
  primary-foreground-container: '#93e4d7'
  inverse-primary: '#85d5c8'
  secondary: '#8e4e14'
  secondary-foreground: '#ffffff'
  secondary-container: '#fca867'
  secondary-foreground-container: '#763b00'
  tertiary: '#004d4f'
  tertiary-foreground: '#ffffff'
  tertiary-container: '#00676a'
  tertiary-foreground-container: '#95e2e5'
  accent: '#f4a462'
  background: '#f1f8f6'
  card: '#f4fbf9'
  card-primary: '#e8efed'
  card-foreground: '#161d1c'
  card-foreground-variant: '#3e4947'
  inverse-card: '#2b3231'
  inverse-card-foreground: '#ebf2f0'
  outline: '#6e7977'
  outline-variant: '#bec9c6'
  destructive: '#ba1a1a'
  destructive-foreground: '#ffffff'
  destructive-container: '#ffdad6'
  destructive-foreground-container: '#93000a'
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
  sm: 0.375rem
  md: 0.5rem
  DEFAULT: 0.625rem
  lg: 0.625rem
  xl: 0.875rem
  2xl: 1rem
  4xl: 2rem
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
Eurekma! is an educational platform dedicated to improving the teaching and learning of mathematics for children in Early Childhood and Primary Education.

Rather than providing isolated activities or worksheets, Eurekma! promotes a way of teaching mathematics grounded in scientific evidence, active learning and mathematical reasoning. The platform helps teachers and families create meaningful learning experiences where children understand, discuss, manipulate and enjoy mathematics instead of memorizing procedures.

The brand should always communicate warmth, curiosity and trust. Every interaction should reinforce the idea that mathematics can be taught differently.

The visual identity combines the clarity of a modern educational platform with the friendliness of carefully designed classroom materials. Interfaces should feel calm, approachable and inspiring rather than technical or corporate.

The overall aesthetic is **Modern Tactile**: soft colours, generous spacing, rounded geometry and subtle paper-like layers create an environment that feels human, organised and welcoming.

### Mission
Help teachers and families teach mathematics through understanding, reasoning and play, using methodologies supported by educational research. Children should not simply learn to calculate. They should learn to think mathematically.

### Audience
The primary audience consists of teachers working in Early Childhood and Primary Education. The secondary audience consists of families who actively participate in their children's mathematical learning.

These users usually:
- feel that traditional teaching focuses too much on memorisation;
- want children to understand what they are doing;
- seek practical classroom activities they can immediately apply;
- want greater student participation;
- aspire to become more confident and effective educators;
- value research but need it translated into practical teaching strategies.

The interface should respect their professionalism while remaining accessible and encouraging.

### Illustration Style
Illustrations should feel editorial and educational instead of corporate.
Use compositions inspired by real classroom materials:

- sticky notes
- arrows connecting ideas
- base-ten blocks
- number lines
- geometric shapes
- pattern blocks
- dice
- activity cards
- teacher annotations

These elements may gently overlap and float over soft paper-like backgrounds.

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
- **Bento Logic:** Content modules can be grouped into cards using a Bento-box style layout, allowing for variable-height components that still feel unified.
- **Breakpoints:** Transitions from a single-column stack on mobile to multi-column layouts at the `md` (768px) and `lg` (1024px) markers.

## Elevation & Depth
Depth is conveyed through a mix of **Tonal Layers** and **Subtle Ambient Shadows**.

- **Level 0 (Base):** `canvas-warm` background.
- **Level 1 (Cards):** White (`card`) with a `shadow-sm` and a 1px border of `surface-variant`.
- **Level 2 (Interaction):** On hover, cards use a `lift-hover` effect—a transition that shifts the element -4px on the Y-axis and applies a deeper `shadow-md` or `shadow-xl`.
- **Decorative Depth:** Background plates use rotation (-3 to +2 degrees) and 30% opacity fills to create a "layered paper" effect in the hero area without using traditional drop shadows.

## Shapes
The shape language is consistently **Rounded**, reinforcing the friendly and approachable nature of the brand.

- **Standard Buttons & Inputs:** 0.5rem (8px) corner radius.
- **Content Cards:** 1rem (16px) or 1.5rem (24px) for larger bento-style items.
- **Badges/Chips:** Full pill-shaped (9999px).
- **Special Elements:** Quote bubbles use asymmetric rounding (e.g., `rounded-tl-none` or `rounded-tr-none`) to simulate speech direction.

## Components
Reusing components is key to achieving better visual consistency and shorter, more readable code. Whenever possible, use components that have already been created:
- **Buttons:** DO NOT implement HTML `<button>` or create custom variants. ALWAYS use the global component `<Button />` imported from `@/components/animate-ui/components/buttons/button`. This component unifies the design tokens and injects micro-interactions via `motion/react` (Framer Motion). 
  * **Visual Style:** Fixed variants only (`primary` (default), `secondary`, `outline`, `white`, `destructive`, `ghost`, `link`). To guarantee structural and aesthetic consistency, customizations must be done minimally using `className`, restricting adjustments to colors, layout margins, alignment or padding overrides (e.g., `p-0` for raw inline links).
  * **Semantic Composition (`asChild`):** When the button needs to act as a Next.js navigation link (`<Link>`), the `asChild` prop MUST be provided. This delegates the rendering to the immediate child element (preventing invalid nesting of an `<a>` tag inside a `<button>`), cleanly merging the styling classes, Tailwind v4 variants, and `motion/react` animation events directly onto the `<Link>` component.
  * **Sizing Rules:** Use `size` values: `sm`, `md` (default), `lg`, `xl`. Buttons containing exclusively an icon must use `size="icon"`, `size="icon-sm"`, or `size="icon-lg"`.
  * **Width Constraints:** Use `width="fit"` to avoid container deformation (`stretch`) inside flex/grid containers. Use `width="full"` for fluid block layouts. `width="auto"` (default) add no additional class, and it's convenient when using size="icon" or its variants.
  * **Icons inside Buttons:** Any Lucide SVG element nested inside must use Tailwind utility sizing classes (e.g., `className="size-5"`) instead of the size prop, which will be ignored. This prevents conflicts with the internal CSS reset constraints of the component.
  * **Animations:** The components include scale fluid micro-interactions (`whileHover={{ scale: 1.02}}` and `whileTap={{ scale: 0.98}}`,). It can be disabled when necessary (e.g., loading states or list actions) by passing `animate={false}`.
  * **Disabled States:** Do NOT append manual styles or opacity utilities for disabled states via `className`. Simply apply the native HTML `disabled` attribute; the component's base styles automatically handle states using Tailwind's native `disabled:` modifiers (e.g., handling opacity resets and locking pointer events).

  ### Button Implementation Examples

```tsx
// 1. Standard Button (Native action with default values)
<Button>
  Guardar cambios
</Button>

// 2. Navigation link styled as a button (Mandatory use of asChild)
<Button asChild variant="secondary">
  <Link href="/">
    Ir al Inicio
  </Link>
</Button>

// 3. Link with an integrated icon (asChild + icon with implicit size reset)
<Button asChild variant="outline">
  <Link href="/formacion/online">
    Explora nuestros cursos
    <ArrowRight aria-hidden="true" />
  </Link>
</Button>
```

- **Cards:** White backgrounds with subtle borders. Header cards use a 4px top or left "accent border" in the primary or secondary color to denote category.
- **Badges:** Small, pill-shaped indicators using `label-caps` typography. Often paired with a small icon (16px).
- **Icons:** Use "Lucide Icons". In feature sections, icons are placed inside 64px circular containers with a 10-20% opacity fill of their respective category color.
- **Input Fields:** 12px vertical padding, 16px horizontal, using `body-base` font and a `primary` focus ring.