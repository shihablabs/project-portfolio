# AGENTS.md — Sejuti Mehjabin Portfolio Project Guide

This project is a multi-page, high-fidelity portfolio website for **Sejuti Mehjabin** (Multidisciplinary Designer specializing in UX & UI Design).

## Core Project Mandates

1. **100% Figma Fidelity**:
   - The design source of truth is the active Figma file `design portfolio 2025` (Page: `finals`).
   - Every layout, border, line weight, typeface, spacing scale, color token, and graphic element must match the Figma specifications pixel-for-pixel.
   - Key frames:
     - `home_light` (Node `66:3836`) & `home-defult-new` (Node `21:899`)
     - `about` (Node `464:6263`)
     - `work_main_UX` (Node `272:294`) & category listings (`work_UX_websites`, `work_UX_apps`, `work_UX_softwares`, `work_logo_branding`, `work_print_digital_mkt`)
     - `work_case_study` (Node `2003:411`)
     - `blogs_main` (Node `1250:2158`) & `blogs_details` (Node `1853:353`)
     - `contact` (Node `1158:1075`)

2. **Zero-Backend Static Export (`output: 'export'`)**:
   - The site targets cheap shared hosting (cPanel/Apache/Nginx) or static CDNs.
   - Do NOT use server-side runtime features (Node.js API routes, server actions requiring a live server, or dynamic SSR).
   - All pages must pre-render to pure static HTML (`.html`), `.css`, `.js`, and assets via `next build` -> `out/`.
   - Dynamic user actions (category filtering, interactive mockups, carousels, theme toggling) execute client-side.

3. **Decoupled TypeScript Data Layer**:
   - Project case studies, blog posts, testimonials, and category tags are managed in `src/data/` (`projects.ts`, `blogs.ts`, `testimonials.ts`).
   - Dynamic routes use `generateStaticParams()` to pre-render static HTML for every single entry at build time.

4. **SEO Excellence**:
   - Every route must define complete metadata (`generateMetadata` or static `metadata`), including:
     - Page title with brand suffix (`| Sejuti Mehjabin`)
     - Descriptive meta description
     - OpenGraph & Twitter preview card tags
     - Canonical link tags

5. **Visual Validation Workflow**:
   - Always verify components and sections against Figma using `figma_capture_screenshot` or comparing with `figma_take_screenshot`.
   - Never use generic placeholder boxes; extract actual vector assets and images directly from Figma.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
