# solyto landing page

Marketing and entry page for [solyto.app](https://solyto.app) — a productivity hub that brings tasks, notes, calendars, and personal organization tools into one place.

Built with SvelteKit, Tailwind CSS v4, and TypeScript.

## Development

Install dependencies:

```sh
npm install
```

Start the dev server:

```sh
npm run dev
```

Runs on [http://localhost:5174](http://localhost:5174) when using the local Docker setup. Running `npm run dev` directly will use the default Vite port instead.

## Other commands

```sh
npm run build       # production build
npm run preview     # preview the production build locally
npm run check       # type-check with svelte-check
npm run lint        # prettier + eslint
npm run format      # auto-format
```

## Deployment

Handled via Ansible in [solyto/deployment](https://codeberg.org/solyto/deployment).
