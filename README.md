# Manuel Soler · personal website

Source of <https://www.aerospaceengineering.es>, built with [Astro](https://astro.build) and published with GitHub Pages.

## Working locally

```bash
npm install
npm run dev
```

The site is then at <http://localhost:4321/>. `npm run build` writes the final site to `dist/`.

## Where things are

| What | Where |
|---|---|
| Research lines (text and figures) | `src/content/research/`, `public/figures/` |
| Projects and doctoral theses | `src/data/projects.ts`, `src/data/theses.ts` |
| Home, CV, Books, Outreach, Software | `src/pages/` |
| Teaching pages (carried over from the old site) | `src/content/legacy/` |
| Menu and profile links | `src/lib/site.ts` |
| Old addresses that redirect to new pages | `astro.config.mjs` |
| Colours and typography | `src/styles/global.css` |

Two sections are filled in automatically every time the site is built:

- **News from the Lab** on the home page, from the Aircraft Operations Lab website (`src/lib/labNews.ts`).
- **Publications**, from the public ORCID record (`src/lib/orcid.ts`).

The site is rebuilt on every push to `main` and once a day (`.github/workflows/deploy.yml`).
