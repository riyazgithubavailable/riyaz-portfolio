# Riyaz Sheikh — Portfolio

React + TypeScript + Vite + Tailwind CSS portfolio website.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx        # Fixed nav with smooth scroll + active highlight
│   ├── BackToTop.tsx     # Floating back-to-top button
│   ├── SectionTag.tsx    # Reusable section label component
│   └── Footer.tsx        # Footer
│
├── sections/
│   ├── Hero.tsx          # Hero with code card + CTA buttons
│   ├── StatsBar.tsx      # Animated stats bar
│   ├── Skills.tsx        # Skills grid with animated bars
│   ├── Experience.tsx    # Work experience timeline
│   ├── Projects.tsx      # Project cards
│   ├── Education.tsx     # Education cards
│   └── Contact.tsx       # Contact links grid
│
├── hooks/
│   ├── useScrollTo.ts    # Smooth scroll to section by ID
│   ├── useScrollSpy.ts   # Highlights active nav link on scroll
│   └── useInView.ts      # Triggers animation when section enters view
│
├── data/
│   └── data.ts           # All portfolio content (easy to edit)
│
├── App.tsx
├── main.tsx
└── index.css             # Tailwind + global styles
```

## ✏️ How to Customize

### Update your info:
Edit `src/data/data.ts` — all content is in one place:
- Skills, Projects, Contact links, Stats

### Update live project URLs:
In `src/data/data.ts`, replace `liveUrl: '#'` with your actual URLs.

### Update LinkedIn/GitHub:
In `src/data/data.ts`, update the `href` in `CONTACT_ITEMS`.

## 🌐 Deploy (Free)

### GitHub Pages:
```bash
npm run build
# Push the dist/ folder to gh-pages branch
```

### Netlify (Recommended):
1. Push code to GitHub
2. Connect repo on netlify.app
3. Set build command: `npm run build`
4. Set publish dir: `dist`
5. Deploy! ✅

### Vercel:
```bash
npx vercel
```

## 🎨 Functionalities Included

- ✅ Navbar smooth scroll to sections (Skills, Experience, Projects, Contact)
- ✅ Active nav link highlight based on scroll position
- ✅ Mobile hamburger menu
- ✅ "View Projects" button → scrolls to Projects section
- ✅ "Get in Touch" button → scrolls to Contact section
- ✅ Back to Top floating button (appears after scrolling 400px)
- ✅ Scroll-triggered fade-in animations on all sections
- ✅ Skill bar animations on scroll
- ✅ Responsive design (mobile + tablet + desktop)
