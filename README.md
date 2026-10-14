# Coffee Shop Landing Page

A landing page for a coffee shop, built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com) v4.

## Tech Stack

- Astro 7
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- Node >= 22.12.0

## Getting Started

```sh
npm install
npm run dev
```

The dev server runs at `localhost:4321`.

## Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Builds the production site to `./dist/`          |
| `npm run preview`         | Previews the build locally, before deploying     |
| `npm run astro ...`       | Runs CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Shows help for the Astro CLI                     |

## Project Structure

```text
/
├── public/          Static assets (favicon, images)
├── src/
│   ├── pages/       Routes; each file becomes a page
│   ├── components/  Reusable Astro components
│   ├── layouts/     Page layouts
│   ├── styles/      Global styles (global.css imports Tailwind)
│   ├── scripts/     Client-side scripts
│   ├── types/       Shared types
│   ├── utils/       Helper functions
│   └── config/      Site configuration
└── package.json
```

Some of these folders are created as the project grows.

## Learn More

- [Astro documentation](https://docs.astro.build)
- [Tailwind CSS documentation](https://tailwindcss.com/docs)
