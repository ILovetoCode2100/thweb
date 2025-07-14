# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Professional hypnotherapy website for a sole trader in Scotland, built with Next.js 15, TypeScript, Tailwind CSS v4, and Shadcn/ui components. The site emphasizes trust, calm, and professionalism with a carefully chosen color palette and Scottish cultural touches.

## Development Commands

\`\`\`bash
# Development (uses Bun if available, falls back to npm)
bun dev         # or npm run dev

# Build for production
bun build       # or npm run build

# Start production server
bun start       # or npm run start

# Code quality
bun lint        # ESLint with TypeScript support
bun format      # Prettier formatting

# Testing
bun test        # Run tests with Bun
\`\`\`

## Architecture

### Tech Stack

- **Runtime**: Bun (preferred) or Node.js
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 with custom design system
- **Components**: Shadcn/ui for consistent UI components
- **Animations**: Framer Motion 12 with reduced motion support

### Project Structure

\`\`\`
├── app/                  # Next.js App Router pages
│   ├── layout.tsx       # Root layout with navigation/footer
│   ├── page.tsx         # Homepage
│   └── sitemap.ts       # SEO sitemap generation
├── components/          # React components
│   ├── ui/             # Shadcn/ui components (button, card, accordion)
│   ├── navigation.tsx  # Responsive header navigation
│   ├── footer.tsx      # Site footer
│   ├── hero-section.tsx # Homepage hero
│   └── thistle-divider.tsx # Scottish decorative element
├── lib/                # Utility functions
│   └── utils.ts        # cn() helper for className merging
├── public/             # Static assets
│   └── robots.txt      # SEO robots file
└── Configuration Files
    ├── tailwind.config.ts # Custom colors and theme
    ├── components.json    # Shadcn/ui configuration
    └── .eslintrc.json    # ESLint with TypeScript
\`\`\`

### Current Pages

- **/** - Homepage with hero, services preview, and CTA sections
- **/about** - (To be implemented)
- **/services** - (To be implemented)
- **/how-it-works** - (To be implemented)
- **/testimonials** - (To be implemented)
- **/faq** - (To be implemented)
- **/contact** - (To be implemented)

### Design System

- **Colors**: Primary teal (#0891b2), Secondary lavender (#a78bfa), Accent gold (#fbbf24)
- **Typography**: Inter font family
- **Spacing**: Consistent use of Tailwind spacing scale
- **Accessibility**: WCAG 2.1 AA compliant, full keyboard navigation

## Key Features

1. **Responsive Navigation**: Sticky header with blur effect on scroll
2. **Animated Hero Section**: Framer Motion animations with reduced motion support
3. **Service Cards**: Grid layout showcasing hypnotherapy services
4. **Scottish Elements**: Thistle SVG dividers, Scottish spelling conventions
5. **SEO Optimized**: Sitemap, robots.txt, meta tags configured

## Development Guidelines

- Always use Scottish spelling: "enquiry" not "inquiry", "practise" (verb) not "practice"
- Maintain the calming, professional tone in all content
- Ensure all interactive elements have proper ARIA labels
- Test with keyboard navigation and screen readers
- Use Bun's native TypeScript support (no transpilation needed)
- Images should use Next.js Image component with lazy loading

## Current Components

### Navigation Components

- **Navigation** - Sticky header with glass morphism effect, mobile responsive
- **Footer** - Contact info, quick links, professional affiliations (NCH/GHR)

### Homepage Components

- **HeroSection** - Animated hero with CTAs and stats
- **Service Cards** - Preview cards for 6 main services (anxiety, confidence, weight, smoking, sleep, phobias)
- **ThistleDivider** - Scottish thistle SVG decorative element

### UI Components (Shadcn/ui)

- **Button** - Primary, secondary, and outline variants
- **Card** - Content containers with soft shadows
- **Accordion** - For FAQ and expandable content

## Performance Optimization

- Leverage Bun's fast file I/O for build processes
- Use Next.js Image component with AVIF/WebP formats
- Implement proper lazy loading for below-fold content
- Keep bundle sizes minimal with dynamic imports where appropriate
- Framer Motion animations respect prefers-reduced-motion

## Common Tasks

### Adding a New Page

1. Create new file in `app/[page-name]/page.tsx`
2. Add route to navigation in `components/navigation.tsx`
3. Update sitemap in `app/sitemap.ts`
4. Use consistent layout with page sections and ThistleDivider

### Adding Shadcn/ui Components

\`\`\`bash
npx shadcn@latest add [component-name]
\`\`\`

### Running Type Checks

\`\`\`bash
npx tsc --noEmit
\`\`\`
