# Smart Choice Solar Website

A premium marketing website for Smart Choice Solar built with Next.js, TypeScript, Tailwind CSS, and the App Router.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` starts local development
- `npm run build` creates a production build
- `npm run start` runs the production server
- `npm run typecheck` runs TypeScript checks

## Project Structure

- `app/` contains all routes, metadata, SEO assets, and the quote API route
- `components/` contains reusable marketing UI components
- `content/blog/` contains markdown blog content for English and Spanish posts
- `lib/site.ts` contains branding, contact details, testimonials, services, service areas, and core site copy
- `lib/metadata.ts` centralizes page metadata generation
- `lib/schema.ts` contains the local business JSON-LD schema

## Where To Edit Branding

Update `lib/site.ts` for:

- business name
- phone number
- email
- address
- service areas
- social links
- default site description

Update `components/logo.tsx` for:

- logo initials
- wordmark styling

Update `app/globals.css` and `tailwind.config.ts` for:

- color palette
- gradients
- shadows
- shared design tokens

## Where To Edit Copy

- Homepage content: `app/page.tsx`
- Service and company pages: `app/solar/page.tsx`, `app/battery-storage/page.tsx`, `app/roofing/page.tsx`, `app/about/page.tsx`, `app/reviews/page.tsx`, `app/service-areas/page.tsx`, `app/contact/page.tsx`
- Blog content: `content/blog/en/*.md` and `content/blog/es/*.md`
- Blog parsing and publishing logic: `lib/blog.ts`
- Footer copy and links: `components/site-footer.tsx`
- Reusable CTA copy: `components/cta-section.tsx`

## Where To Edit SEO

- Global metadata defaults: `app/layout.tsx`
- Per-page metadata helper: `lib/metadata.ts`
- Local business JSON-LD schema: `lib/schema.ts`
- Sitemap: `app/sitemap.ts`
- Robots rules: `app/robots.ts`

## Blog Publishing

Each blog post lives in its own markdown file inside `content/blog/en/` or `content/blog/es/`.

Required frontmatter:

```md
---
title: "Post title"
description: "Short SEO description"
publishDate: "2026-04-05"
author: "Smart Choice Solar"
category: "Solar"
slug: "post-slug"
featuredImage: "/brand/example-image.svg"
---
```

Then write the article body in markdown below the frontmatter. The blog index, blog post pages, sitemap entries, and article structured data are generated from these files automatically.

## Lead Form Notes

The quote form posts to `app/api/quote/route.ts` and the estimator posts to `app/api/estimate/route.ts`.

## GoHighLevel Integration

The fastest GoHighLevel setup for this project is a Workflow webhook.

Add this to `.env.local`:

```bash
GHL_WEBHOOK_URL="https://services.leadconnectorhq.com/hooks/your-workflow-webhook"
```

Then create a GoHighLevel workflow webhook that accepts the site payload.

The site sends:

- `formType`
- `source`
- `submittedAt`
- `firstName`
- `lastName`
- `email`
- `phone`
- `address`
- `zip`
- `message`
- `language`
- `pagePath`
- `estimate` for calculator submissions
- `estimatorAnswers` for calculator submissions
- `tags`

Current form paths:

- contact / assessment form: `app/api/quote/route.ts`
- estimator and out-of-area waitlist: `app/api/estimate/route.ts`

If GoHighLevel returns a non-200 response, the form returns an error instead of pretending the lead was captured.

To connect it to a different CRM, email service, or database:

- replace the placeholder response logic in `app/api/quote/route.ts`
- replace the placeholder response logic in `app/api/estimate/route.ts`
- optionally add environment variables for your integration

## Deployment

This project is ready for deployment on Vercel or any platform that supports Next.js.
