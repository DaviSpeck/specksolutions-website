# Speck Tech Solutions Website

Institutional website for Speck Tech Solutions, focused on positioning the company around software architecture, scalable systems, payment platforms, and senior technology consulting.

Production URL: [speck-solutions.com.br](https://speck-solutions.com.br)

## Overview

This repository contains the public-facing company website built to:

- present Speck Tech Solutions as a senior engineering and architecture partner
- support bilingual discovery in Portuguese and English
- reinforce trust with clear technical positioning, structured metadata, and clean deployment
- leave room for future products on subdomains such as `nexo.speck-solutions.com.br`

## Core Highlights

- Next.js 16 with App Router
- React 19 and TypeScript
- Tailwind CSS 4
- English and Portuguese localized routes
- Search-friendly metadata, sitemap, robots, and structured data
- Google Analytics 4 integration via `@next/third-parties`
- Persistent light/dark theme

## Project Structure

```text
src/app             App Router pages, metadata routes, and layouts
src/components      Shared UI building blocks
src/lib             Site config, i18n, and content source
src/sections        Homepage sections and positioning content
public              Brand assets, favicon, and social image
```

## Getting Started

1. Install dependencies.

```bash
npm install
```

2. Create the local environment file.

```bash
cp .env.example .env.local
```

3. Start the development server.

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

If `NEXT_PUBLIC_GA_ID` is not defined, analytics stays disabled.

## SEO Notes

The project includes:

- canonical and alternate language metadata
- Open Graph and Twitter metadata for link previews
- `robots.txt` and `sitemap.xml`
- JSON-LD structured data for organization, website, and service context
- localized metadata for `/pt` and `/en`

To keep SEO strong as the site evolves, update the copy in [src/lib/content.ts](/Users/davispeck/Documents/Pessoal/specksolutions-website/src/lib/content.ts) and the global settings in [src/lib/site.ts](/Users/davispeck/Documents/Pessoal/specksolutions-website/src/lib/site.ts).

## Deployment

The project is ready for Vercel deployment.

- Framework preset: `Next.js`
- Build command: `npm run build`
- Output: default Next.js output
- Required variable for analytics: `NEXT_PUBLIC_GA_ID`

## License

This repository is proprietary.

All rights are reserved by the author. The code, content, branding, and assets
in this project may not be reused, copied, modified, or redistributed without
prior written permission.
