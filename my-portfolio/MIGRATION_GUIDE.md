# 🚀 Migration Guide: Tailwind CSS + Framer Motion + Responsive Layout
### React + Vite Portfolio — Plain CSS/CSS Modules → Tailwind v4 + Framer Motion

---

## 📋 Pre-Migration Checklist

Before starting, make sure you have:
- [ ] Node.js >= 18 installed
- [ ] Project running locally (`npm run dev`)
- [ ] Git repo initialized — **commit all current changes before starting**
- [ ] Know your component file structure (e.g., `src/components/`, `src/pages/`)

---

## PHASE 1 — Install Dependencies

### Step 1.1 — Install Tailwind CSS v4 for Vite

```bash
npm install tailwindcss @tailwindcss/vite
```

### Step 1.2 — Install Framer Motion

```bash
npm install framer-motion
```

### Step 1.3 — (Optional but recommended) Install clsx for conditional classes

```bash
npm install clsx
```

---

## PHASE 2 — Configure Tailwind CSS

### Step 2.1 — Update `vite.config.js`

Open `vite.config.js` and add the Tailwind plugin:

```js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),   // ← ADD THIS
  ],
})
```

### Step 2.2 — Update your global CSS entry file

Open your main CSS file (usually `src/index.css`) and **replace all existing content** with:

```css
/* src/index.css */
@import "tailwindcss";

/* Keep any global resets or custom font imports below */
```

> ⚠️ **Note:** If you have global font-face declarations or CSS variables you want to keep,
> add them **below** the `@import "tailwindcss"` line, not above.

### Step 2.3 — Verify `main.jsx` imports the CSS

```jsx
// src/main.jsx
import './index.css'  // ← Make sure this line exists
```

### Step 2.4 — Smoke test

Run `npm run dev` and confirm the app loads without errors.
If styles look broken — that's expected, we'll fix them in Phase 4.

---

## PHASE 3 — Set Up Responsive Breakpoints (Tailwind Defaults)

Tailwind's responsive breakpoints you'll use throughout the migration:

| Prefix | Min Width | Usage Example         |
|--------|-----------|-----------------------|
| `sm:`  | 640px     | Mobile landscape      |
| `md:`  | 768px     | Tablets               |
| `lg:`  | 1024px    | Small desktops        |
| `xl:`  | 1280px    | Large desktops        |
| `2xl:` | 1536px    | Wide screens          |

**Pattern to follow for every component:**
```
mobile-first → then override with sm:, md:, lg:
```

Example:
```jsx
<div className="flex flex-col md:flex-row gap-4 px-4 md:px-8 lg:px-16">
```

---

## PHASE 4 — Migrate CSS to Tailwind (Component by Component)

> 🔑 **Strategy:** Do one component at a time. Delete its `.module.css` file only after
> the Tailwind version looks correct in the browser.

### Step 4.1 — Migrate Layout / Wrapper components first

These set the foundation. Look for components like `Layout.jsx`, `Navbar.jsx`, `Footer.jsx`.

**Common CSS → Tailwind conversions:**

| Old CSS                        | Tailwind Class                        |
|-------------------------------|---------------------------------------|
| `display: flex`               | `flex`                                |
| `flex-direction: column`      | `flex-col`                            |
| `justify-content: center`     | `justify-center`                      |
| `align-items: center`         | `items-center`                        |
| `gap: 1rem`                   | `gap-4`                               |
| `padding: 1rem 2rem`          | `px-8 py-4`                           |
| `margin: 0 auto`              | `mx-auto`                             |
| `max-width: 1200px`           | `max-w-6xl`                           |
| `width: 100%`                 | `w-full`                              |
| `background-color: #111`      | `bg-[#111]` or a semantic token       |
| `color: white`                | `text-white`                          |
| `font-size: 2rem`             | `text-4xl` (approx)                   |
| `font-weight: bold`           | `font-bold`                           |
| `border-radius: 8px`          | `rounded-lg`                          |
| `position: fixed`             | `fixed`                               |
| `z-index: 50`                 | `z-50`                                |
| `overflow: hidden`            | `overflow-hidden`                     |
| `grid; grid-template-columns` | `grid grid-cols-1 md:grid-cols-3`     |
| `transition: all 0.3s ease`   | `transition-all duration-300 ease-in-out` |

### Step 4.2 — Migrate Section components

For sections like `Hero`, `About`, `Projects`, `Skills`, `Contact`:

```jsx
// Before (CSS Modules)
<section className={styles.hero}>
  <h1 className={styles.title}>Hello, I'm Kiruthik</h1>
  <p className={styles.subtitle}>AI/ML Engineer & Full-Stack Developer</p>
</section>

// After (Tailwind)
<section className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 text-center">
  <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
    Hello, I'm Kiruthik
  </h1>
  <p className="text-lg md:text-xl text-gray-400 max-w-2xl">
    AI/ML Engineer & Full-Stack Developer
  </p>
</section>
```

### Step 4.3 — Migrate Card components (Project cards, Skill cards)

```jsx
// After (Tailwind responsive card)
<div className="
  bg-gray-900 border border-gray-800
  rounded-xl p-6
  flex flex-col gap-3
  hover:border-blue-500
  transition-all duration-300
  w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)]
">
```

### Step 4.4 — Migrate Navbar

```jsx
<nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md">
  <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
    <span className="text-white font-bold text-xl">Kiruthik</span>

    {/* Desktop nav */}
    <ul className="hidden md:flex gap-8 text-gray-400">
      <li className="hover:text-white transition-colors cursor-pointer">About</li>
      <li className="hover:text-white transition-colors cursor-pointer">Projects</li>
      <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
    </ul>

    {/* Mobile hamburger (implement toggle with useState) */}
    <button className="md:hidden text-white">☰</button>
  </div>
</nav>
```

### Step 4.5 — Remove old CSS Module imports

Once each component is fully migrated, delete:
```jsx
// Remove this line from each component
import styles from './ComponentName.module.css'
```
Then delete the `.module.css` file from disk.

---

## PHASE 5 — Add Framer Motion Animations

### Step 5.1 — Wrap your app's page transitions

In your main layout or `App.jsx`, wrap pages with `AnimatePresence`:

```jsx
import { AnimatePresence } from 'framer-motion'

function App() {
  return (
    <AnimatePresence mode="wait">
      {/* your routes or pages */}
    </AnimatePresence>
  )
}
```

### Step 5.2 — Hero Section — Staggered entrance animation

```jsx
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

function Hero() {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center px-4 text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold text-white mb-4">
        Hello, I'm Kiruthik
      </motion.h1>
      <motion.p variants={itemVariants} className="text-xl text-gray-400 max-w-2xl mb-8">
        AI/ML Engineer & Full-Stack Developer
      </motion.p>
      <motion.button
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-500 transition-colors"
      >
        View My Work
      </motion.button>
    </motion.section>
  )
}
```

### Step 5.3 — Scroll-triggered reveal for sections

```jsx
import { motion } from 'framer-motion'

// Reusable scroll reveal wrapper — create this as src/components/ScrollReveal.jsx
function ScrollReveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal
```

Usage in any section:
```jsx
import ScrollReveal from '../components/ScrollReveal'

<ScrollReveal delay={0.1}>
  <ProjectCard ... />
</ScrollReveal>
```

### Step 5.4 — Project Cards — Hover animation

```jsx
<motion.div
  className="bg-gray-900 border border-gray-800 rounded-xl p-6"
  whileHover={{
    y: -6,
    borderColor: 'rgb(59 130 246)',  // blue-500
    transition: { duration: 0.2 }
  }}
>
  {/* card content */}
</motion.div>
```

### Step 5.5 — Navbar — Slide down on mount

```jsx
<motion.nav
  className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md"
  initial={{ y: -80, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5, ease: 'easeOut' }}
>
```

### Step 5.6 — Skills section — Progress bar animation

```jsx
function SkillBar({ name, level }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm text-gray-400 mb-1">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2">
        <motion.div
          className="bg-blue-500 h-2 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        />
      </div>
    </div>
  )
}
```

### Step 5.7 — Page transition (if using React Router)

```jsx
// Wrap each page component
const pageVariants = {
  initial: { opacity: 0, x: -20 },
  in:      { opacity: 1, x: 0 },
  out:     { opacity: 0, x: 20 }
}

function AboutPage() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 0.4 }}
    >
      {/* page content */}
    </motion.div>
  )
}
```

---

## PHASE 6 — Responsive Layout Audit

### Step 6.1 — Responsive grid for Projects section

```jsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {projects.map((project, i) => (
    <ScrollReveal key={project.id} delay={i * 0.1}>
      <ProjectCard {...project} />
    </ScrollReveal>
  ))}
</div>
```

### Step 6.2 — Responsive typography scale

Apply these across the portfolio for consistent sizing:

```
Heading 1 (name/hero):  text-4xl md:text-6xl lg:text-7xl
Heading 2 (sections):   text-2xl md:text-4xl
Heading 3 (card title): text-lg md:text-xl
Body text:              text-sm md:text-base
Small/meta:             text-xs md:text-sm
```

### Step 6.3 — Responsive spacing

```
Section padding:        py-16 md:py-24 lg:py-32
Container padding:      px-4 md:px-8 lg:px-16
Max width container:    max-w-6xl mx-auto
Card padding:           p-4 md:p-6
```

### Step 6.4 — Mobile navigation (hamburger menu)

```jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <span className="text-white font-bold text-xl">Kiruthik</span>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8 text-gray-400 text-sm">
          {['About', 'Projects', 'Skills', 'Contact'].map(link => (
            <li key={link} className="hover:text-white transition-colors cursor-pointer">{link}</li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white text-2xl">
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-black border-t border-gray-800 flex flex-col overflow-hidden"
          >
            {['About', 'Projects', 'Skills', 'Contact'].map(link => (
              <li key={link}
                onClick={() => setIsOpen(false)}
                className="px-6 py-4 text-gray-400 hover:text-white hover:bg-gray-900 cursor-pointer transition-colors"
              >
                {link}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  )
}
```

---

## PHASE 7 — Accessibility & Performance

### Step 7.1 — Respect reduced motion preference

Framer Motion handles this automatically, but double-check your config:

```jsx
import { useReducedMotion } from 'framer-motion'

function AnimatedSection({ children }) {
  const shouldReduce = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduce ? 0 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}
```

### Step 7.2 — Lazy load heavy sections

```jsx
import { lazy, Suspense } from 'react'

const ProjectsSection = lazy(() => import('./sections/Projects'))

// In App.jsx
<Suspense fallback={<div className="min-h-screen" />}>
  <ProjectsSection />
</Suspense>
```

---

## PHASE 8 — Final QA Checklist

Test on these breakpoints before considering migration done:

- [ ] **Mobile** — 375px (iPhone SE size) — single column, hamburger works
- [ ] **Tablet** — 768px — 2-column grid, nav visible
- [ ] **Desktop** — 1280px — full layout, animations smooth
- [ ] **Wide** — 1536px — content doesn't stretch too wide

Animation checks:
- [ ] Hero entrance animates on page load
- [ ] Sections reveal on scroll (not on first mount)
- [ ] Cards animate on hover
- [ ] Navbar slides in on load
- [ ] Mobile menu opens/closes with animation
- [ ] Reduced motion users see no jarring movement

CSS cleanup:
- [ ] All `.module.css` files deleted
- [ ] No leftover `className={styles.xxx}` references
- [ ] No conflicting global styles in `index.css`

---

## 📁 Final Project Structure (after migration)

```
src/
├── components/
│   ├── ScrollReveal.jsx       ← new reusable animation wrapper
│   ├── Navbar.jsx             ← migrated + animated
│   └── Footer.jsx             ← migrated
├── sections/
│   ├── Hero.jsx               ← staggered entrance
│   ├── About.jsx              ← scroll reveal
│   ├── Projects.jsx           ← card grid + hover animations
│   ├── Skills.jsx             ← animated progress bars
│   └── Contact.jsx            ← scroll reveal
├── App.jsx                    ← AnimatePresence wrapper
├── main.jsx
└── index.css                  ← only: @import "tailwindcss"
```

---

## 🔗 Key References

- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind Vite Plugin](https://tailwindcss.com/docs/installation/using-vite)
- [Framer Motion — useInView](https://www.framer.com/motion/use-in-view/)
- [Framer Motion — Variants](https://www.framer.com/motion/animation/#variants)
