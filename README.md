# Mostefai Mounir Sofiane — Portfolio

High-performance developer portfolio built with **Next.js 16**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

---

## Quick Start

### Prerequisites

- **Node.js** ≥ 20.x
- **npm** ≥ 10.x

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

The optimized output is generated in the `.next/` directory.

### Start Production Server (locally)

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## Deploy to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — click **Deploy**. No extra configuration needed.

### Deploy to Netlify

1. Push this repo to GitHub.
2. Go to [app.netlify.com](https://app.netlify.com/) and import the repository.
3. Set build command: `npm run build`
4. Set publish directory: `.next`
5. Or use the **Next.js runtime** plugin for full SSR support.

---

## Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css        # Tailwind v4 theme + design tokens
│   │   ├── layout.tsx         # Root layout, fonts, metadata/SEO
│   │   └── page.tsx           # Main page composing all sections
│   ├── components/
│   │   ├── Navigation.tsx     # Sticky nav with mobile hamburger
│   │   ├── Hero.tsx           # Full-viewport hero with grid background
│   │   ├── About.tsx          # Bio + dual-track cards (AI & Frontend)
│   │   ├── Experience.tsx     # Work timeline + education + certs
│   │   ├── Projects.tsx       # Filterable project grid (dual-track toggle)
│   │   ├── Hackathons.tsx     # Trophy cards with podium styling
│   │   ├── Skills.tsx         # Categorized skill badges
│   │   ├── Contact.tsx        # Click-to-copy contact info
│   │   ├── Footer.tsx         # Minimal footer
│   │   └── SectionReveal.tsx  # Scroll-triggered animation wrapper
│   └── data/
│       └── portfolio.ts       # All portfolio content (edit here to update)
├── public/                    # Static assets
├── package.json
├── tsconfig.json
├── postcss.config.mjs
└── next.config.ts
```

---

## Customization

All portfolio content lives in **`src/data/portfolio.ts`**. Edit this file to update:

- Personal info (name, email, links)
- Work experience
- Projects
- Hackathon results
- Skills
- Education & certifications

The design system tokens (colors, fonts, shadows) are in **`src/app/globals.css`** inside the `@theme inline` block.

---

## Tech Stack

| Layer        | Technology                              |
| ------------ | --------------------------------------- |
| Framework    | Next.js 16 (App Router, static export) |
| Language     | TypeScript                              |
| Styling      | Tailwind CSS v4                         |
| Animations   | Framer Motion                           |
| Fonts        | Plus Jakarta Sans, Inter, JetBrains Mono (via `next/font`) |
| Deployment   | Vercel / Netlify                        |

---

## Design System

- **Background**: Rich Obsidian (`#070A12`)
- **Surfaces**: Matrix Slate (`#131A2A`)
- **Borders**: Grid Line (`#1E293B`)
- **AI/HPC accent**: Kinetic Cyan (`#00F2FE`)
- **Frontend accent**: Neon Violet (`#9D4EDD`)
- **Primary text**: Pure White (`#FFFFFF`)
- **Secondary text**: Muted Ash (`#94A3B8`)

---

## License

MIT
