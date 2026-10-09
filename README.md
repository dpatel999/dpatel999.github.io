# Clew

Senior Shopify studio. Canada first. The public site is [dpatel999.github.io](https://dpatel999.github.io).

## Where the pages are

| What | File |
|---|---|
| Home | `src/routes/index.tsx` |
| Services | `src/routes/services/index.tsx` and `src/routes/services/$slug.tsx` |
| Work, pricing, approach, Canada, about, start | `src/routes/*.tsx` |
| Notes | `src/routes/insights/` |
| Service copy and ranges | `src/lib/content.ts` |
| Brief math | `src/lib/estimate.ts` |
| Articles | `src/lib/articles.ts` |
| Name, email, city | `src/lib/brand.ts` |
| Header and footer | `src/components/site/shell.tsx` |

## Hosting

GitHub Pages serves the static build from `main`. Pushes run `.github/workflows/pages.yml`.

```bash
npm run build:pages
```

Output lands in `.output/public`. Do not point this repo at GitHub Pages from the `main` branch itself. The workflow uploads the built site.
