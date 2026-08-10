# Accredian Enterprise — Full Website Implementation

A responsive enterprise landing page built with Next.js App Router, React, TypeScript and clean CSS. The project focuses on reusable components, responsive behavior, smooth section navigation, interactive FAQ, and a working Next.js API lead-capture route.

## Live Demo

Add your Vercel URL here after deployment.

## Tech Stack

- Next.js App Router
- React + TypeScript
- Clean CSS (responsive, component-friendly)
- Next.js Route Handler for enquiry API
- Vercel-ready

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Approach

The reference experience was decomposed into reusable sections: navigation, hero, proof/statistics, partnerships, capability proposition, domains, programs, audience, CAT framework, testimonials, FAQ, enquiry form, and footer. Layout and styling were rebuilt from scratch rather than copying a template. The UI uses a restrained editorial visual system with strong typography, cards, grids and responsive breakpoints.

## Functional features

- Responsive desktop/tablet/mobile navigation
- Smooth anchor navigation
- FAQ accordion
- Required-field and email validation through native form controls
- POST `/api/enquiry` route with JSON response
- Success/error form feedback
- Reusable React components

## AI usage

AI tools were used during development for:

- Project architecture and component planning
- Initial React/Next.js scaffolding
- CSS/layout ideation
- Responsive breakpoint suggestions
- FAQ and form interaction logic
- Debugging and documentation structure

### Manual improvements

The generated ideas/code were manually reviewed and adapted to:

- Keep the project original instead of copying a template
- Refine spacing, typography and responsive layouts
- Split the page into reusable components
- Add accessible labels and button behavior
- Add the enquiry API route and success states
- Remove unnecessary dependencies
- Tune mobile layouts and visual hierarchy

## Improvements with more time

- Persist enquiries in Supabase/Postgres/MongoDB
- Add analytics and conversion tracking
- Add CMS-driven content
- Add automated tests
- Improve SEO/OpenGraph metadata
- Add optimized local imagery and richer motion
- Add an admin view for enquiries
