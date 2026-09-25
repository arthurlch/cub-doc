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

Deployed on [Vercel](https://vercel.com/) — pushing to the production branch
triggers a build. The build settings live in `vercel.json`:

- **Build command:** `npm run docs:build`
- **Output directory:** `.vitepress/dist`

The site is served at a domain root, so `base` is `/` in
`.vitepress/config.mjs`. If you host under a sub-path (e.g. a GitHub Pages
project site), set `base` to `'/cub-doc/'`.
