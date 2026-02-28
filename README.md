# Next.js SPA with GSAP Animations

A modern single page application built with Next.js 16, TypeScript, Tailwind CSS, and GSAP (GreenSock Animation Platform) for professional-grade animations.

## Features

- **Next.js 16** - Latest App Router with React Server Components
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework with dark mode support
- **GSAP 3** - Professional animation library with ScrollTrigger
- **Responsive Design** - Mobile-first approach
- **Performance Optimized** - Fast loading and smooth animations

## Getting Started

### Prerequisites

- Node.js 18+ and npm installed on your machine

### Installation

1. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
appupresents/
├── app/
│   ├── globals.css          # Global styles with Tailwind directives
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page with GSAP animations
├── public/                  # Static assets
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── postcss.config.mjs       # PostCSS configuration
└── package.json             # Project dependencies
```

## GSAP Animation Examples

The project includes several GSAP animation patterns:

### 1. Basic Fade In Animation

```tsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Component() {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(elementRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return <div ref={elementRef}>Animated Content</div>;
}
```

### 2. Scroll-Triggered Animations

```tsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Component() {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(elementRef.current, {
      scrollTrigger: {
        trigger: elementRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 60,
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);

  return <div ref={elementRef}>Scroll-animated Content</div>;
}
```

### 3. Stagger Animations

```tsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Component() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".item", {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <div className="item">Item 1</div>
      <div className="item">Item 2</div>
      <div className="item">Item 3</div>
    </div>
  );
}
```

## GSAP Animation Style Guide

For comprehensive GSAP animation patterns and best practices, see [claude-animations-gsap.md](./claude-animations-gsap.md).

This guide includes:
- 12+ animation patterns (Blur Reveal, Fade Up, Scale Bounce, etc.)
- ScrollTrigger configurations
- Component usage examples
- Best practices and performance tips
- Quick reference guide

## Tailwind CSS Customization

Edit `tailwind.config.ts` to customize your theme:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom colors
      },
      animation: {
        // Add custom animations
      },
    },
  },
  plugins: [],
};
export default config;
```

## Best Practices

### GSAP Performance

1. **Use `gsap.context()`** - Clean up animations properly
2. **Register plugins once** - Use `gsap.registerPlugin()` at the top level
3. **Avoid animating in loops** - Use `stagger` for multiple elements
4. **Use CSS transforms** - `x`, `y`, `scale`, `rotation` are GPU-accelerated
5. **Clean up in useEffect** - Return cleanup function to prevent memory leaks

### Component Organization

```tsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AnimatedComponent() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create GSAP context for cleanup
    const ctx = gsap.context(() => {
      // All animations here
      gsap.from(".element", {
        opacity: 0,
        y: 50,
        duration: 1,
      });
    }, containerRef);

    // Cleanup function
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <div className="element">Content</div>
    </div>
  );
}
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [GSAP Documentation](https://gsap.com/docs/v3/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## License

MIT
