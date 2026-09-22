# Project Guidelines

## Architecture

- Astro provides the static site and routes in `src/pages/`.
- Shared layout and UI live in `src/layouts/` and `src/components/`.
- Project content is authored as Markdown in `src/content/projects/` and validated by `src/content.config.ts`.
- Static artwork belongs in `public/gallery/`.

## Build and Test

```sh
npm install
npm run dev
npm run build
```

Run `npm run build` after source changes.

## Conventions

- Keep pages responsive and preserve the existing Tailwind utility style.
- Use the shared palette: background `#ffffff`, text `#413652`, accent `#90c0a0`, muted text `#706878`, borders `#d2c9c1`.
- Prefer reusable Astro components over duplicating layout markup.
- Keep decorative artwork non-interactive and behind readable content.
