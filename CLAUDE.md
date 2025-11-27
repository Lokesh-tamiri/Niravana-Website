# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Start Commands

```bash
npm run dev       # Start development server (localhost:3000)
npm run build     # Production build
npm start         # Run production server
npm run lint      # Run ESLint
```

## Project Overview

**Niravana** is a Next.js 13 portfolio/services website for a digital agency. It showcases web solutions, mobile solutions, AI services, and branding services. The site features advanced animations (GSAP, WebGL), SEO optimization, contact forms with email delivery, and a modern UI built with Tailwind CSS.

**Key Stats:**
- Next.js 13.4.8 (App Router)
- React 18.2.0
- TypeScript + PropTypes
- Hybrid Tailwind CSS + SCSS styling
- GSAP 3.12.2 + OGL 1.0.11 for animations
- ~20 main pages/routes, 40+ components

## Architecture & Code Organization

### Directory Structure

```
src/
├── app/
│   ├── layout.js                    # Root layout with metadata, Google Analytics
│   ├── page.js                      # Home page (imports sections)
│   ├── globals.scss                 # Global styles
│   ├── sitemap.js                   # Dynamic sitemap generation
│   ├── components/                  # Feature-specific and utility components
│   │   ├── web-solutions/           # Web services solution components
│   │   ├── mobile-solutions/        # Mobile services solution components
│   │   ├── ai-solutions/            # AI services solution components
│   │   ├── branding-solutions/      # Branding services solution components
│   │   ├── MagneticButton.jsx       # Interactive button with mouse tracking
│   │   ├── Bubble.jsx               # Animated gradient bubble
│   │   ├── Gsap.jsx                 # Reusable GSAP animation wrapper
│   │   ├── WorkCarousel.jsx         # Swiper-based portfolio carousel
│   │   ├── TabsNav.jsx              # Tab navigation component
│   │   ├── FloatingInput.jsx        # Form input with floating label
│   │   └── [10+ other components]
│   ├── sections/                    # Page section components
│   │   ├── HomeBanner.jsx           # Hero banner with Orb effect
│   │   ├── OurExpertise.jsx         # Expertise showcase
│   │   ├── HomeContact.jsx          # Contact form section
│   │   ├── HomeFAQpage.jsx          # FAQ section
│   │   └── [7+ other sections]
│   ├── layouts/
│   │   ├── Header.jsx               # Navigation (scroll detection, prefetch)
│   │   └── Footer.jsx               # Footer
│   ├── api/
│   │   ├── mail/route.js            # POST endpoint for contact form emails
│   │   ├── seo/                     # SEO-related API routes
│   │   └── analytics/               # Analytics endpoints
│   ├── [routes]/                    # Page routes: about/, contact/, work/, blog/[slug]/, etc.
│   ├── data/
│   │   ├── tabNav.js                # Tab data for tech stacks
│   │   └── gridImage.js             # Image grid data
│   └── scss/
│       ├── components/              # Component-scoped styles
│       ├── sections/                # Section-scoped styles
│       └── grid/                    # Bootstrap grid system
│
├── components/                      # Global reusable components
│   ├── Orb.tsx                      # WebGL shader-based Orb effect
│   ├── SEO/
│   │   ├── SEOHead.jsx              # Meta tag management
│   │   └── structuredData.js        # JSON-LD structured data
│   └── [other global utilities]
│
└── lib/
    ├── utils.ts                     # cn() - Tailwind class merging utility
    ├── seo.js                       # SEO config, page metadata helpers
    └── [analytics, blog, performance utilities]
```

### Component Architecture

The codebase uses a **multi-tier component organization**:

1. **Page Components** (`src/app/[routes]/page.js`)
   - Full pages with layouts
   - Import sections and compose page structure
   - Export metadata object for SEO

2. **Section Components** (`src/app/sections/`)
   - Reusable page sections (HomeBanner, OurExpertise, HomeContact, etc.)
   - Large self-contained units that appear on multiple pages
   - Contain animations and interactive behavior
   - `"use client"` for client-side interactivity

3. **Feature Components** (`src/app/components/[feature]/`)
   - Solution-specific components (web-solutions/, mobile-solutions/, etc.)
   - Used within sections to build out feature pages
   - Provide scoped styling and functionality

4. **Utility Components** (`src/app/components/`)
   - Generic interactive components: MagneticButton, Bubble, Gsap, WorkCarousel, TabsNav, FloatingInput, etc.
   - Reusable across sections
   - Heavy animation usage

5. **Global Components** (`src/components/`)
   - Cross-cutting concerns: Orb (WebGL), SEO, Analytics
   - Used in root layout or multiple pages
   - TypeScript (Orb.tsx)

**Client vs Server Components:**
- Most components use `"use client"` for interactivity (animations, form handling, menu toggles)
- Layout.js and specific page routes are server components by default
- Mix provides good performance while enabling rich interactions

### Styling System

**Hybrid Approach:**

1. **Tailwind CSS (Primary)**
   - `tailwind.config.js` defines design tokens:
     - **Screens**: Mobile-first max-width breakpoints (`xs`, `sm`, `md`, `lg`, `xl`, `mxl`)
     - **Colors**: 13 semantic tokens from CSS variables (primary, secondary, accent, destructive, etc.)
     - **Custom Keyframes**: slideDown, slideUp animations (300ms)
   - Utility-first for rapid UI development
   - Used in 95% of components

2. **SCSS/SASS (Secondary)**
   - Component-scoped styles in `src/app/scss/components/`
   - Section-specific styles in `src/app/scss/sections/`
   - Bootstrap grid system in `src/app/scss/grid/`
   - Complex animations and media queries when needed

3. **CSS Variables**
   - Dynamic theming via custom properties
   - Examples: `--bubble-bg`, `--radius`, `--font-poppins`, `--font-nunitosans`
   - Can be switched at runtime for dark mode or customization

**Key Utility:**
- `src/lib/utils.ts`: `cn()` function merges Tailwind classes while resolving conflicts (uses clsx + tailwind-merge)

### State Management

**Minimal, Localized:**
- **No global state library** (Redux, Zustand, Context)
- Uses **React Hooks**:
  - `useState`: UI toggles (menu open, tabs, form inputs)
  - `useRef`: DOM refs for GSAP animations and IntersectionObserver
  - `useEffect`: Side effects (scroll listeners, initialization)
  - `useRouter`: Next.js navigation and prefetch
- **URL-based state**: Page routes and parameters

**Notable Patterns:**
- Header.jsx: Manages menu state, scroll detection, responsive behavior
- Section components: Use refs to trigger GSAP animations on scroll
- Form components: Local state for input values and validation

### Animation & Interactive Libraries

1. **GSAP 3.12.2** - Timeline animations
   - Used in MagneticButton, Gsap wrapper component, scroll-triggered effects
   - Easing: Power3, Elastic, Back, etc.
   - Pattern: Refs to DOM elements, timeline creation in useEffect

2. **OGL 1.0.11** - WebGL library
   - Orb.tsx component uses GLSL shaders
   - Vertex and fragment shaders for visual effects
   - Color manipulation (hue shift, RGB/YIQ conversion)

3. **Swiper 10.0.4** - Carousel library
   - WorkCarousel component for portfolio slides

4. **Tailwind Animate** - CSS animations
   - Pre-built animations (slideDown, slideUp)

### SEO & Metadata

**Centralized Configuration:**
- `src/lib/seo.js`: seoConfig object with site metadata, company info, page-specific configs
- `src/app/layout.js`: Root metadata, Google Analytics, Open Graph, Twitter cards
- Each page exports metadata object (title, description, keywords, Open Graph)

**Structure Data:**
- `src/components/SEO/structuredData.js`: JSON-LD schemas
  - organizationSchema, localBusinessSchema, faqSchema
  - Used by search engines and social platforms

**Google Analytics:**
- Google Tag Manager script in root layout
- Tracking ID: G-CCPBR741MP
- Auto page tracking via Next.js router integration

### API Routes (Backend Endpoints)

**`src/app/api/mail/route.js`**
- POST /api/mail
- Handles contact form submissions
- Uses Nodemailer for SMTP (Gmail configured)
- Uses Handlebars template (`email/email-template.html`)
- Returns: `{ success: true/false, message: string }`
- **Security Note**: Email credentials currently hardcoded—should move to environment variables

**`src/app/api/seo/`**
- Multiple SEO-related endpoints (audit, health-check, submit-indexing, dashboard)

**`src/app/api/analytics/`**
- Web Vitals tracking endpoints

### Performance Features

**Image Optimization:**
- Next.js Image component throughout
- Remote image domains whitelisted: placehold.co, vectorlogo.zone, wikimedia, sanity.io, astro.build
- Automatic responsive images, lazy loading, format conversion

**Code Splitting:**
- Per-page JavaScript bundles (Next.js App Router automatic)
- Dynamic imports for heavy components

**Font Optimization:**
- Google Fonts (Poppins, Nunito Sans) via Next.js font API
- CSS variables: `--font-poppins`, `--font-nunitosans`

**Route Prefetching:**
- Header.jsx prefetches main routes on mount
- Reduces navigation latency

### Configuration Files

**Key Configuration:**

| File | Purpose |
|------|---------|
| `next.config.js` | Remote image patterns, webpack loaders, redirects |
| `tsconfig.json` | TypeScript config, path aliases (@/* -> ./src/*) |
| `tailwind.config.js` | Design tokens, animations, dark mode |
| `postcss.config.js` | Tailwind, autoprefixer |
| `package.json` | Dependencies, scripts, version 1.1.7 |

**Environment Variables (Expected):**
```
HOST              # SMTP host (defaults to 'smtp.gmail.com')
SUBJECT           # Email subject line
```

### Utilities & Helpers

**`src/lib/utils.ts`**
```typescript
export function cn(...inputs: ClassValue[]): string
```
- Merges Tailwind classes while removing conflicts
- Used everywhere to combine Tailwind utilities conditionally

**`src/lib/seo.js`**
- `seoConfig`: Site metadata, company info, page-specific SEO
- `generatePageMetadata()`: Consistent metadata across pages
- Service-specific metadata exports

**Component Utilities:**
- **MagneticButton.jsx**: Mouse-tracking with GSAP Elastic easing
- **Gsap.jsx**: IntersectionObserver wrapper for scroll-triggered animations
- **Bubble.jsx**: Gradient bubble backgrounds with CSS variables
- **WorkCarousel.jsx**: Swiper carousel for portfolio
- **TabsNav.jsx**: Tab navigation component
- **FloatingInput.jsx**: Form input with floating label animation

**Custom Hooks:**
- `@react-hook/window-scroll`: Window scroll position (used in Header)

### Data & Static Configuration

**`src/app/data/tabNav.js`**
- Tab data for technology stacks (Frontend, Backend, Database)
- Used by TabsNav and ImageGrid components

**`src/app/data/gridImage.js`**
- Image data for grid layouts
- Categories: frontend, backend, database
- Grid configuration (rows, cols, specific positioning)

### Dynamic Routes & Blog

**Blog Route:**
- `src/app/blog/[slug]/page.js`: Dynamic blog post page
- Slug-based routing for individual posts
- Metadata exported per post

**Service Feature Routes:**
- `/web-innovations/`: Web innovation showcase pages
- `/mobile-innovations/`: Mobile innovation showcase
- `/ai-innovations/`: AI innovation showcase
- `/branding-innovations/`: Branding innovation showcase

**Main Routes:**
- `/`: Home
- `/about/`: About page with team showcase
- `/contact/`: Contact page with contact form
- `/work/`: Portfolio
- `/blog/`: Blog listing
- `/privacy/`: Privacy policy
- `/terms/`: Terms of service

## Common Development Tasks

### Adding a New Page

1. Create route directory: `src/app/new-page/page.js`
2. Export metadata object at top of file
3. Create or import section components
4. Compose page structure
5. Export default component
6. (Optional) Add to navigation in Header.jsx

**Example:**
```javascript
export const metadata = {
  title: "Page Title",
  description: "Page description"
};

import Section1 from "@/app/sections/Section1";
import Section2 from "@/app/sections/Section2";

export default function Page() {
  return (
    <main>
      <Section1 />
      <Section2 />
    </main>
  );
}
```

### Adding an Animated Component

1. Create component in `src/app/components/`
2. Add `"use client"` at top
3. Use `useRef` and `useEffect` for GSAP animations
4. Wrap animations in useEffect cleanup
5. Use `cn()` for Tailwind classes

**Example Pattern:**
```javascript
"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

export default function AnimatedComponent({ className }) {
  const ref = useRef(null);

  useEffect(() => {
    gsap.to(ref.current, {
      opacity: 1,
      duration: 1,
      ease: "power3.inOut"
    });
  }, []);

  return <div ref={ref} className={cn("opacity-0", className)} />;
}
```

### Modifying Styles

**For Tailwind-only changes:**
- Edit component className directly
- Reference `tailwind.config.js` for available tokens
- Use semantic color names: `text-primary`, `bg-secondary`, etc.

**For complex styling (animations, media queries):**
- Create SCSS file in `src/app/scss/components/` or `sections/`
- Import in component: `import "./ComponentName.scss"`
- Combine with Tailwind classes using `cn()`

**For design tokens:**
- Edit `tailwind.config.js` extend section
- Use CSS variables for runtime switching
- Update `globals.scss` if adding new CSS variables

### Updating SEO

**Page-level metadata:**
- Export metadata object in page.js
- Use `generatePageMetadata()` from `src/lib/seo.js` for consistency
- Include: title, description, keywords, openGraph

**Site-wide metadata:**
- Edit `src/lib/seo.js` seoConfig object
- Update root layout for company-wide changes

**Structured data:**
- Add JSON-LD schema in `src/components/SEO/structuredData.js`
- Reference in pages or layout via `<Script>` tag

### Handling Form Submissions

**Contact Form Pattern:**
- Create form component with `"use client"`
- Use `useState` for form state and validation
- POST to `/api/mail` endpoint
- Handle success/error responses

**Backend:**
- Edit `src/app/api/mail/route.js`
- Current: Uses Nodemailer with Handlebars template
- Template: `email/email-template.html`

### Adding Routes & Navigation

**Update Header Navigation:**
- Edit `src/app/layouts/Header.jsx`
- Add route to prefetch list (useEffect, router.prefetch)
- Add navigation link to rendered menu
- Ensure responsive menu update

## Important Patterns & Conventions

### Client Components for Interactivity
- Start with `"use client"` when component needs state, events, or animations
- Keep server components for static content to reduce JS bundle
- Prefer small, focused client components

### Conditional Styling with cn()
Always use the `cn()` function when conditionally applying Tailwind classes:
```javascript
// Good
<div className={cn("base-class", isActive && "active-class")} />

// Avoid
<div className={isActive ? "active-class" : ""} />
```

### Animation References
Use refs for GSAP animations, not state:
```javascript
const animRef = useRef(null);
useEffect(() => {
  gsap.to(animRef.current, { /* ... */ });
}, []);
```

### TypeScript vs JavaScript
- Most files are .jsx/.js (PropTypes for validation)
- Global/complex components may use .tsx (e.g., Orb.tsx)
- Loose TypeScript settings (strict: false) in tsconfig.json

### Mobile-First Responsive Design
- Tailwind screens are max-width based and mobile-first
- Breakpoints: xs, sm, md, lg, xl, mxl
- Example: `text-sm md:text-base lg:text-lg` (small by default, grows on larger screens)

## Testing & Linting

**Run ESLint:**
```bash
npm run lint
```

**Build Check:**
```bash
npm run build
```
This validates TypeScript, builds all pages, and catches errors before production.

## Performance Considerations

### Bundle Size
- Lazy-load heavy animations (GSAP, OGL) where possible
- Check built bundle: `npm run build` shows build output
- Use dynamic imports for page-specific libraries

### Animation Performance
- Use refs instead of state updates in animations
- Avoid animating layout properties (top, left); use transform instead
- Use `will-change` CSS for expensive animations
- Profile with Chrome DevTools Performance tab

### Image Optimization
- Always use Next.js Image component
- Optimize source images before uploading
- Use appropriate sizes prop for responsive images

## Security Notes

**Current Issues:**
1. **Email Credentials**: Currently hardcoded in `src/app/api/mail/route.js`
   - Move HOST and credentials to environment variables
   - Use OAuth2 instead of SMTP username/password

2. **API Routes**: No authentication on email endpoint
   - Consider adding rate limiting
   - Validate form inputs server-side

3. **Sensitive Data**: Never commit .env files or credentials

## Common Gotchas

### Image Import Issues
- Must whitelist remote image domains in next.config.js
- Use `next/image` Image component, not HTML img tag
- Error: "Invalid src prop" → add domain to remotePatterns

### Tailwind Classes Not Working
- Run `npm run build` to regenerate CSS
- Check class names are not dynamically constructed
- Use `cn()` for conditional classes
- Clear `.next/` cache if needed: `rm -rf .next/`

### GSAP Animations Not Running
- Ensure component is mounted before animation
- Use refs, not DOM queries
- Cleanup with `return () => animation.kill()` if needed
- Check z-index for visibility issues

### TypeScript Errors
- Check tsconfig.json (loose settings: strict: false)
- Use PropTypes for runtime validation
- // @ts-ignore as last resort (avoid in production)

## Deployment

**Vercel (Recommended):**
1. Push to GitHub
2. Connect repo to Vercel
3. Set environment variables (HOST, SUBJECT for email)
4. Deploy on push

**Environment Variables for Production:**
```
HOST=smtp.gmail.com
SUBJECT=New Contact Form Submission
```

## Useful Resources

- [Next.js 13 Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [GSAP Docs](https://greensock.com/docs)
- [React Docs](https://react.dev)
