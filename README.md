# Speck Tech Solutions Website

Institutional website for Speck Tech Solutions, built with Next.js App Router, TypeScript, and Tailwind CSS.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React
- Google Analytics 4 via `@next/third-parties`
- Localized routes in English and Portuguese
- Persistent light/dark theme

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Configure environment variables:

```bash
cp .env.example .env.local
```

3. Start the development server:

```bash
npm run dev
```

## Environment Variables

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

If `NEXT_PUBLIC_GA_ID` is omitted, analytics stays disabled.

## Deployment

The project is ready for Vercel deployment:

- Framework preset: `Next.js`
- Build command: `npm run build`
- Output: default Next.js output
- Environment variable: `NEXT_PUBLIC_GA_ID`

The root domain is intended for the institutional company site, while future products can be served from subdomains such as `nexo.speck-solutions.com.br`.
