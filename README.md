# Tashneet Kaur — Portfolio

Personal portfolio website showcasing work in **AI**, **transportation**, and **smart urban mobility** — with a focus on EV infrastructure planning for multi-unit residential buildings (MURBs).

**Live site:** [https://tashneet-30.github.io/Tashneet-/](https://tashneet-30.github.io/Tashneet-/)

### One-time hosting setup (required)

GitHub Pages must be enabled once in your repo:

1. Go to [github.com/Tashneet-30/Tashneet-/settings/pages](https://github.com/Tashneet-30/Tashneet-/settings/pages)
2. Under **Build and deployment → Source**, choose **Deploy from a branch**
3. Set **Branch** to `gh-pages` and folder to `/ (root)`
4. Click **Save**

The site will be live at the URL above within 1–2 minutes. Future pushes to `main` auto-deploy via GitHub Actions.

## Stack

- [Next.js](https://nextjs.org/) (App Router, static export)
- TypeScript
- Deployed via GitHub Pages

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
# Local build (no base path)
npm run build

# GitHub Pages build (with /Tashneet- base path)
GITHUB_PAGES=true npm run build
```

## Pages

- **About** — bio, HIEV-AI thesis work, recognition, contact
- **Projects** — HIEV-AI, digital twin transit forecasting, WayWise, and more
- **Research** — publications and ongoing thesis

## Custom domain

To use a custom domain (e.g. `tashneetkaur.ca`), add a `CNAME` file in `public/` and configure DNS with your registrar.

## License

© Tashneet Kaur
