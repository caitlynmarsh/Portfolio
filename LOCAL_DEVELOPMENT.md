# Local development

How to run this portfolio site on your machine.

## Requirements

- **Node.js** 20 or newer (matches [GitHub Actions](.github/workflows/deploy.yml))
- **pnpm** (recommended; the repo has a `pnpm-lock.yaml`) or **npm**

## First-time setup

From the project root:

```bash
pnpm install
```

If you use npm instead:

```bash
npm install
```

## Start the dev server

```bash
pnpm dev
```

or:

```bash
npm run dev
```

When Next.js is ready, open:

**http://localhost:3000**

Use **http**, not **https**. The dev server does not serve TLS; using `https://` in the browser often shows errors like “invalid response.”

### If localhost:3000 is not this site (or “page isn’t working”)

Something else on your machine may already be using port **3000** (for example another Next.js app). In that case you will see the wrong project, a broken page, or connection errors.

Start this repo on a free port:

```bash
pnpm dev:alt
```

Then open **http://localhost:3020**

You can also pick any port: `pnpm exec next dev -p 3456` and open that URL.

## What you get

- **Hot reload** via Next.js (Turbopack).
- In development, the app is served from the **site root** (`/`). Production builds for GitHub Pages use the `/Portfolio` base path; local dev is configured so you do not need that prefix in the URL.

## Preview the static export (optional)

To mimic the GitHub Pages layout locally after a production build:

```bash
pnpm build
pnpm preview
```

Then open **http://localhost:3000/Portfolio/** (note the `/Portfolio` path for this preview).

## Troubleshooting

| Issue | What to try |
|--------|-------------|
| **Wrong site or broken page on :3000** | Another app may be bound to 3000. Run `pnpm dev:alt` and use **http://localhost:3020**, or `lsof -i :3000` to see which process owns the port. |
| **Port 3000 in use** | Stop the other process, run `pnpm dev:alt`, or `pnpm exec next dev -p <port>`. |
| **`EMFILE: too many open files` (macOS)** | In the same terminal, run `ulimit -n 10240` (or higher), then start the dev server again. |
| **Page or assets look wrong** | Restart the dev server after changing `next.config.mjs`. |
