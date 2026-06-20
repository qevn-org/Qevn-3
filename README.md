# QEVN — AI Business Automation Platform

A high-performance, premium Next.js 14 marketing website and capability-proof platform built for QEVN. The platform utilizes advanced 3D GPU animations, a self-healing chrome layout layout, and programmatic, date-swappable capability-proof highlights.

---

## ⚡ Key Features

- **Dynamic Neural 3D Graphics**: Interactive WebGL neural network scene powered by React Three Fiber, featuring cursor parallax and viewport-scroll scaling.
- **Date-Swappable Announcement Engine**: Programmatic announcement bar that dynamically displays time-boxed campaigns (such as launch weeks) and auto-reverts to standing offers, with 100% hydration-safe client-side mounting.
- **Self-Healing Chrome Layout**: Dynamic `ResizeObserver` tracking in the Navbar and Page Shell that keeps layout elements perfectly aligned relative to the announcement bar's size.
- **AI Capability Proofing**: Seamless external subdomain integrations (pointing to the AI Pitch Generator at `pitch.qevn.in`) designed to build capability trust, embedded in:
  - **Services Mega-Menu Spotlight**: A gradient callout card inside the navigation dropdown right-rail.
  - **ROI Calculator Cross-Link**: A subordinate proof link below the interactive ROI strategy call CTA.
  - **Footer Brand CTA**: A premium, pulsing gradient pill button in the footer's trust column.
- **Interactive ROI Calculator**: A real-time calculator with multi-currency (INR/USD) automation coverage estimation.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **3D Graphics**: Three.js + React Three Fiber + Drei
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS + Custom CSS Variables
- **Scroll Engine**: Lenis Smooth Scroll
- **Typography**: Plus Jakarta Sans (Display headings), DM Sans (Body copy), JetBrains Mono (Technical interfaces)

---

## 📂 Project Architecture

```
qevn/
├── app/
│   ├── globals.css                # CSS variables, base styling, utility animations
│   ├── layout.tsx                 # Root layout, fonts, and scroll providers
│   ├── page.tsx                   # Main landing page composition
│   ├── offer/                     # Landing page for ₹4,999 website offer
│   └── contact/                   # Contact page and Calendly integration
├── components/
│   ├── nav/
│   │   └── Navbar.tsx             # Responsive header with scroll blur + floating badge
│   ├── hero/
│   │   ├── HeroSection.tsx        # Typography layout with stagger transitions
│   │   └── HeroCanvas.tsx         # GPU Neural WebGL R3F canvas
│   ├── sections/
│   │   ├── TrustBar.tsx           # Infinite trust ticker
│   │   ├── Services.tsx           # 2×3 interactive automation services grid
│   │   ├── HowItWorks.tsx         # Operational timeline wrapper
│   │   ├── RoiCalculator.tsx      # Real-time multi-currency calculator
│   │   └── CtaSection.tsx         # Bottom Calendly booking section
│   ├── footer/
│   │   └── Footer.tsx             # 4-column footer + Proof of Capability CTA
│   ├── layout/
│   │   ├── SiteChrome.tsx         # Page wrapper managing dynamic --layout-chrome-top
│   │   └── InnerPageLayout.tsx    # Spacing layout for secondary subpages
│   ├── ui/
│   │   ├── Button.tsx             # Variant button components
│   │   ├── ServiceCard.tsx        # Interactive hover-glow cards
│   │   └── QevnLogo.tsx           # SVG/Image brand identifier wrapper
│   └── providers/
│       └── SmoothScrollProvider.tsx # Lenis smooth scrolling setup
├── lib/
│   ├── data.ts                    # Core mock data structures (Services, Industries)
│   ├── seoData.ts                 # Metadata configurations for SEO optimization
│   └── announcement-bar.config.ts # Date-swappable announcement bar configurations
├── tailwind.config.ts             # Tailwind CSS theme extension
├── tsconfig.json                  # TypeScript compiler options
└── next.config.js                 # Next.js configurations
```

---

## 🎨 Design Tokens & Color System

The website relies on custom HSL tokens to support a sleek dark mode with high-contrast electric accents:

```css
--bg-base:          #08090A;  /* Deep void black */
--bg-surface:       #0F1012;  /* Secondary surface cards */
--bg-elevated:      #16181C;  /* Elevated active modals, hover borders */
--accent-primary:   #C8F04B;  /* Electric Lime - primary branding element */
--accent-secondary: #4B8BF0;  /* Cool Blue - secondary highlight */
--text-primary:     #F2F2F0;  /* Bone white - primary readability */
--text-muted:       #6B7280;  /* Slate gray - description subtext */
--border-subtle:    rgba(255, 255, 255, 0.07);
```

---

## ⚙️ Development Guide

### Setup & Installation
```bash
# Clone the repository and install packages
npm install

# Run the local development server (starts on http://localhost:3000 or 3001)
npm run dev

# Run TypeScript type safety compilation check
npx tsc --noEmit

# Compile production build bundles
npm run build

# Start the compiled production server
npm start
```

### Config: Announcement Bar Scheduling
Banners can be scheduled using `lib/announcement-bar.config.ts`. The bar evaluates banners in order and serves the first one whose date-range overlaps with today's date, automatically falling back to date-free items:

```typescript
export const announcements: AnnouncementBar[] = [
  {
    text: "Try our new AI Pitch Generator — free",
    href: "https://pitch.qevn.in",
    startDate: "2026-07-20", // Launch week start
    endDate: "2026-07-27",   // Launch week end
  },
  {
    text: "LIMITED OFFER: Build or redesign your site from ₹4,999/-",
    href: "/offer",
  },
];
```

---

## 🖥️ Layout & Chrome Mechanics

To ensure that the navigation bar and page content align correctly, QEVN uses a dynamic padding mechanism:
- **`SiteChrome.tsx`** sets the `--layout-chrome-top` global CSS property on the document element.
- **`Navbar.tsx`** sets its `style.top` relative to the height of the banner.
- Both components execute their offset calculations inside a `ResizeObserver` initialized on the client after hydration, ensuring flawless layout transitions when banners are dismissed, screen width is resized, or dynamic campaigns mount.
