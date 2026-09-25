# cub-doc

Documentation site for [**Cub**](https://github.com/arthurlch/cub), a fast,
modern terminal text editor. Built with [VitePress](https://vitepress.dev/).

## Develop

```bash
npm install
npm run docs:dev      # local dev server with hot reload
```

## Build

```bash
npm run docs:build    # output to .vitepress/dist
npm run docs:preview  # preview the production build
```

## Structure

```
.
├─ index.md                 # landing page (home hero)
├─ guide/                   # guide pages
├─ reference/               # keybinding & config reference
├─ public/                  # static assets (logo, favicon)
└─ .vitepress/
   ├─ config.mjs            # site config: nav, sidebar, theme
   └─ theme/                # brand colors & custom CSS
```

## Deployment

Pushing to `master` builds and deploys to GitHub Pages via
`.github/workflows/deploy.yml`. The site is served under `/cub-doc/` — if you
deploy at a domain root instead, set `base: '/'` in `.vitepress/config.mjs`.
