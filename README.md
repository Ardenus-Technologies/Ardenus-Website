# Next.js Animation Starter

A production-ready Next.js 14 starter template with beautiful animations using Framer Motion, GSAP with ScrollTrigger, and Lenis smooth scrolling.

## Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** with custom theme and CSS variables
- **Framer Motion** for declarative animations
- **GSAP + ScrollTrigger** for scroll-based animations
- **Lenis** for buttery smooth scrolling
- **Fully accessible** - respects `prefers-reduced-motion`
- **Mobile responsive** from the start
- **Performance optimized** for Core Web Vitals

## Animation Components

### `<FadeIn>`

Fades children in when they enter the viewport.

```tsx
<FadeIn direction="up" delay={0.2}>
  <p>This content fades in from below</p>
</FadeIn>
```

### `<SlideIn>`

Slides content from any direction using GSAP ScrollTrigger.

```tsx
<SlideIn direction="left" duration={0.8}>
  <Card>Slides in from the left</Card>
</SlideIn>
```

### `<Parallax>`

Creates parallax scrolling effects.

```tsx
<Parallax speed={0.5}>
  <Image src="/hero.jpg" ... />
</Parallax>
```

### `<MagneticButton>`

Button that subtly follows the cursor on hover.

```tsx
<MagneticButton onClick={handleClick}>Get Started</MagneticButton>
```

### `<TextReveal>`

Reveals text character by character or word by word.

```tsx
<TextReveal type="words" variant="slide" as="h1">
  Welcome to the future
</TextReveal>
```

### `<SmoothScrollProvider>`

Wraps your app with Lenis smooth scrolling.

```tsx
<SmoothScrollProvider lerp={0.1}>{children}</SmoothScrollProvider>
```

### `<PageTransition>`

Animates page transitions (use in template.tsx).

```tsx
<PageTransition variant="fade">{children}</PageTransition>
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Customization

### Brand Colors

Edit the CSS variables in `app/globals.css`:

```css
:root {
  --primary-500: #0ea5e9; /* Your brand color */
  --accent-500: #d946ef; /* Accent color */
}
```

### Fonts

Change fonts in `lib/fonts.ts`:

```ts
export const fontSans = Inter({ ... });
export const fontHeading = Playfair_Display({ ... });
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format with Prettier

## Deployment

This project is configured for Vercel deployment. Simply push to your repository and connect to Vercel.

## License

MIT
