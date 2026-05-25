# Mounir Portfolio

Modern personal portfolio built with Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion.

## Features

- Localized routes (`/en`, `/fr`)
- Responsive sections for hero, experience, projects, skills, and contact
- Typing effect with reduced-motion support
- Accessible navigation and language switcher
- SEO metadata per locale

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Open `http://localhost:3000`.

### Lint

```bash
npm run lint
```

### Production Build

```bash
npm run build
npm run start
```

## Project Structure

```text
src/
  app/
    [lang]/
      layout.tsx
      page.tsx
    globals.css
    layout.tsx
  components/
  data/
  i18n/
```

## Deployment

Deploy on Vercel by importing this repository and using the default Next.js settings.

## License

MIT
