# Portfolio Blog Project Summary

## Project Overview

This is a multilingual (English/Spanish) portfolio and blog site built with Astro, featuring dark mode support and optimized for performance. The site is designed to showcase development work and technical writing, with a focus on AWS and web development.

## Current Project Structure

```
project-root/
├── src/
│   ├── content/
│   │   ├── config.ts           # Content collection configuration
│   │   └── blog/
│   │       ├── en/            # English blog posts
│   │       │   └── first-post.mdx
│   │       └── es/            # Spanish blog posts (to be added)
│   ├── layouts/
│   │   ├── BaseLayout.astro    # Main layout with dark mode and i18n
│   │   └── BlogPost.astro      # Blog post layout
│   └── pages/
│       ├── index.astro         # Main landing page
│       └── blog/
│           ├── index.astro     # Blog listing page
│           └── [lang]/         # Dynamic routes for blog posts
│               └── [...slug].astro
├── public/                     # Static assets (to be added)
├── astro.config.mjs           # Astro configuration
├── package.json
└── tailwind.config.mjs        # Tailwind configuration
```

## Key Features Implemented

1. Dark mode support with system preference detection and manual toggle
2. i18n structure for English and Spanish
3. Blog system with MDX support
4. Responsive layout with Tailwind CSS
5. Type-safe content collections

## Technology Stack

- Astro 4.x
- Tailwind CSS
- TypeScript
- MDX for blog posts
- Node.js v20.3.0+

## Configuration Files

### astro.config.mjs

```javascript
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";

export default defineConfig({
  integrations: [mdx(), tailwind(), prefetch()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
```

### tailwind.config.mjs

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
```

## Dependencies

```json
{
  "dependencies": {
    "@astrojs/mdx": "^3.1.0",
    "@astrojs/prefetch": "^3.0.0",
    "@astrojs/tailwind": "^5.0.0",
    "astro": "^4.16.0",
    "date-fns": "^2.30.0"
  },
  "devDependencies": {
    "@tailwindcss/typography": "^0.5.10",
    "tailwindcss": "^3.3.0"
  }
}
```

## Current Functionality

- Home page with basic structure
- Blog index page showing English posts
- Individual blog post pages with MDX support
- Dark mode toggle
- Language switching structure
- Responsive design

## Next Steps

1. Content Creation

   - Create Spanish versions of existing pages
   - Add more blog posts in both languages
   - Create portfolio section

2. Design & UI

   - Add navigation menu
   - Create project cards for portfolio
   - Implement search functionality for blog posts
   - Add tags/categories filtering

3. Features

   - Set up RSS feed
   - Add social sharing buttons
   - Implement blog post comments (if desired)
   - Add contact form

4. Performance & SEO

   - Add meta tags
   - Implement OpenGraph tags
   - Add sitemap
   - Set up robots.txt

5. Deployment
   - Set up AWS Amplify
   - Configure CI/CD
   - Set up custom domain

## Usage Notes

- Blog posts should be placed in `src/content/blog/[lang]/` with the appropriate language prefix
- Each post requires frontmatter with title, description, publishDate, and optional tags
- Dark mode is handled automatically but can be toggled manually
- Language switching is URL-based (/en/_ or /es/_)

## Commands

```bash
# Development
npm run dev

# Build
npm run build

# Preview production build
npm run preview

# Clear cache (if needed)
rm -rf .astro
```

## Important URLs

- Home: `http://localhost:4321`
- Blog: `http://localhost:4321/blog`
- Individual posts: `http://localhost:4321/blog/[lang]/[slug]`

## Notes

- The project uses TypeScript for type safety
- Content collections are type-safe and schema-validated
- All UI strings should be internationalized
- Dark mode preferences are persisted in localStorage
- The project is set up for AWS Amplify deployment

This documentation provides the foundation for continuing development. The next immediate priority should be creating the portfolio section and adding more content in both languages.
