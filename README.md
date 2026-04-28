# Portfolio Website

Personal portfolio website built with Next.js App Router, TypeScript, Tailwind CSS v4, and custom motion-heavy UI styling.

## Overview

This project is a one-page portfolio experience with structured sections:

- Hero
- About
- Tech Stack
- Education
- Experience
- Portfolio Project Showcase
- Contact Form

The visual style uses a dark base, orange accents, glassmorphism cards, reveal-on-scroll animations, and subtle parallax.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 4
- React Icons

## Project Structure

```text
.
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── assets/
│       ├── images/
│       └── svgs/
├── components/
│   ├── base/
│   └── ui/
├── public/
├── AGENTS.md
├── CLAUDE.md
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+ (or package manager lain yang kompatibel)

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Available Scripts

- `npm run dev`: run local development server
- `npm run build`: create production build
- `npm run start`: run production server
- `npm run lint`: run ESLint

## Main Editing Points

- Content and section layout: `app/page.tsx`
- Global styles, animation, visual effects: `app/globals.css`
- Route-level setup and metadata: `app/layout.tsx`

## Design and Motion Notes

- Reuse existing classes and motion patterns before adding new ones.
- Keep animation accessible with `prefers-reduced-motion` fallback.
- Preserve responsive behavior for mobile and desktop.

## AI Collaboration Files

- `AGENTS.md`: always-on instruction set for coding agents in this repository.
- `CLAUDE.md`: reusable prompt context and templates for task-based requests.

## Deployment

You can deploy on any platform that supports Next.js Node runtime, including Vercel.

Recommended production flow:

1. `npm run lint`
2. `npm run build`
3. `npm run start` (for smoke test)

## Notes

This repository includes custom agent instructions. If an AI agent is used for coding, ensure it respects both `AGENTS.md` and `CLAUDE.md` to keep implementation consistent.
