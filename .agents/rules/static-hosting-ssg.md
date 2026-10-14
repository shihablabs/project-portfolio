# Rule: Static Site Generation (SSG) for Cheap Shared Hosting

## Principle
The site must be fully exportable as static files (`out/`) that can be hosted on standard Apache/Nginx shared hosting (e.g. cPanel) with zero Node.js server dependency.

## Requirements
1. **Next.js Config**:
   - `output: 'export'`
   - `trailingSlash: true`
   - `images: { unoptimized: true }`
2. **No Dynamic Server APIs**:
   - Do NOT use `next/headers`, `cookies()`, or server actions requiring a live backend.
   - Dynamic parameters must use `generateStaticParams()` in `[slug]/page.tsx`.
3. **Data Layer**:
   - All data resides in `src/data/` as typed TypeScript objects.
   - Adding or editing content is done via these data files.
4. **Client-side Interactivity**:
   - Category filtering, project image galleries, carousel sliders, and light/dark theme toggles must execute purely in the browser using React state.
