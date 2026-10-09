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

The live site is [https://dpatel999.github.io](https://dpatel999.github.io).

GitHub publishes the root of `main` because this repo is named `dpatel999.github.io`. The built HTML sits next to the source (`index.html`, `about/`, `services/`, `assets/`). That is what visitors get. The pages you edit are still under `src/routes`.

After a copy change:

```bash
npm run build:pages
cp -a .output/public/. .
git add -A && git commit -m "Update the live site" && git push
```

`.nojekyll` must stay at the root so GitHub does not run Jekyll over the built files.

