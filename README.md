# Enago Japan — Frontend Assignment

> **Crimson Interactive Pvt. Ltd. — Frontend Developer Intern Assignment**

A pixel-accurate, responsive recreation of the [Enago Japan](https://www.enago.jp/) academic proofreading services website, built with **Next.js 16**, **TypeScript**, and **CSS Modules**.

🔗 **Live Demo:** [crimson-assignment-enago.vercel.app](https://crimson-assignment-enago.vercel.app/)

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| **Data-Driven Navigation** | Reusable `NavDropdown` & `MobileNavSection` components rendered via `.map()` from a centralized data array |
| **Responsive Header** | Desktop dropdowns + mobile hamburger with collapsible sections and `aria-expanded` accessibility |
| **Hero Section** | CSS/SVG animated globe with network nodes, A-PRAS certification badge, fully selectable text |
| **Discount Banner** | Copy-to-clipboard with visual feedback ("Copied!"), pulse animation, clipboard API with fallback |
| **Service Tabs** | Interactive tabbed interface comparing three editing tiers with feature lists |
| **Pricing Cards** | VIP Editor badges, green ✓ checkmarks, red "おすすめ" highlight pill, after-service sections |
| **Video Testimonials** | YouTube embed replaces professor banner at the same aspect ratio on click |
| **Footer** | 4-column link grid with reusable `FooterColumnBlock` component, A-PRAS badge, responsive collapse |

---

## 🏗️ Architecture

```
components/
├── Navbar.tsx              # Data-driven nav with NavDropdown + MobileNavSection
├── Navbar.module.css
├── HeroSection.tsx         # A-PRAS logo + CSS/SVG globe with animations
├── HeroSection.module.css
├── DiscountBanner.tsx      # Copy-to-clipboard with fallback
├── DiscountBanner.module.css
├── TabSection.tsx          # Tabbed service comparison
├── TabSection.module.css
├── PricingCards.tsx         # Data array → PricingCard components
├── PricingCard.tsx          # Reusable card with props
├── PricingCard.module.css
├── Testimonials.tsx        # YouTube embed + professor banner
├── Testimonials.module.css
├── Footer.tsx              # Data-driven FooterColumnBlock
└── Footer.module.css

app/
├── page.tsx                # Component composition
├── layout.tsx              # Root layout with metadata
└── globals.css             # Design system (CSS variables)

public/assets/
├── hero/                   # A-PRAS logo, hero banner
├── professors/             # Professor images (3)
├── vip-editor.svg          # VIP Editor badge
└── quality-seal.svg        # Quality certification
```

---

## 🧩 React Patterns Demonstrated

- **Reusable Components** — `NavDropdown`, `MobileNavSection`, `PricingCard`, `FooterColumnBlock`
- **Props & Interfaces** — TypeScript interfaces (`NavItem`, `NavCategory`, `PricingCardProps`, `FooterLink`)
- **Data Arrays + `.map()`** — Navigation, pricing tiers, testimonials, footer columns all rendered from data
- **State Management** — `useState` for video toggle, mobile menu, clipboard feedback, tab selection
- **Side Effects** — `useEffect` for scroll detection, body scroll lock
- **Memoization** — `useCallback` for toggle handlers

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 16** | App Router, SSR/SSG, file-based routing |
| **TypeScript** | Type safety, interfaces for props |
| **CSS Modules** | Scoped styling, no class conflicts |
| **React 19** | Components, hooks, state management |
| **Vercel** | Deployment, CI/CD |

---

## 📱 Responsive Design

- **Desktop** (1200px+) — Full navigation, 3-column pricing grid, side-by-side hero
- **Tablet** (769–1200px) — Compressed nav, 2-column pricing, adjusted spacing
- **Mobile** (< 768px) — Hamburger menu with collapsible sections, single-column layout, stacked components

---

## 📝 Notes

- All navigation links point to verified **enago.jp** URLs
- YouTube video (testimonials) uses the embed API with autoplay on click
- Copy button uses `navigator.clipboard.writeText()` with `document.execCommand` fallback
- Globe animation uses pure CSS/SVG — no external libraries
- The design is inspired by [enago.jp](https://www.enago.jp/) but is not an exact copy — original design touches include the animated CSS globe, gradient discount banner, and frosted-glass play button

---

## 👤 Author

**Sagar Ghanate**
Frontend Developer Intern Candidate — Crimson Interactive Pvt. Ltd.

---

*Built with ❤️ for the Crimson Interactive interview assignment*
