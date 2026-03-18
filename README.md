# Frontend SPA Template

A production-ready React template built with Mantine, TanStack Router, and Vite. The app is shipped as a static single-page application: `pnpm build` generates deployable assets in `dist/` without any server runtime.

## Features

- React 19 + TypeScript
- Mantine v8 UI components and theming
- TanStack Router with file-based routing
- TanStack Query for server-state management
- TanStack Table for complex data grids
- Vite for development and production builds
- Vitest unit tests and Browser Mode component tests
- ESLint + Prettier
- Sonner toast notifications
- Zod v4 for validation
- Day.js for date utilities

## Quick Start

### Prerequisites

- Node.js >= 22
- pnpm 10+

### Install and run

```bash
pnpm install
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000).

## Available Scripts

| Script              | Description                                     |
| ------------------- | ----------------------------------------------- |
| `pnpm dev`          | Start the Vite dev server on port 3000          |
| `pnpm build`        | Build the static production bundle into `dist/` |
| `pnpm preview`      | Serve the production bundle locally with Vite   |
| `pnpm test`         | Run all Vitest projects                         |
| `pnpm test:unit`    | Run the `unit` Vitest project                   |
| `pnpm test:browser` | Run the Browser Mode Vitest project             |
| `pnpm lint`         | Run ESLint                                      |
| `pnpm format`       | Run Prettier and ESLint auto-fixes              |
| `pnpm check:types`  | Run `tsc --noEmit`                              |

## Project Structure

```text
.
├── index.html                # Vite HTML entry
├── public/                   # Static files copied to dist/
├── src/
│   ├── components/           # Shared React components
│   ├── routes/               # File-based TanStack Router routes
│   │   ├── __root.tsx        # Root layout and providers
│   │   ├── index.tsx         # Landing page
│   │   └── 404.tsx           # 404 route
│   ├── ui/                   # Theme definitions and UI primitives
│   ├── main.tsx              # React entry point
│   ├── router.tsx            # Router and QueryClient setup
│   ├── routeTree.gen.ts      # Generated route tree (do not edit)
│   └── styles.css            # Global styles
├── docs/
│   └── spa-mode.md           # Static deployment notes
├── AGENTS.md                 # AI assistant guidelines
└── vite.config.ts            # Vite + TanStack Router plugin config
```

## Routing

This template uses `@tanstack/router-plugin/vite` for file-based routing. Route modules live in `src/routes/`, and the generated `src/routeTree.gen.ts` file is refreshed automatically during `pnpm dev` and `pnpm build`.

Example route:

```tsx
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: AboutPage,
});

function AboutPage() {
  return <div>About</div>;
}
```

## Environment Variables

Use Vite environment variables through `import.meta.env`:

```tsx
const apiUrl = import.meta.env.VITE_API_URL;
```

Only variables prefixed with `VITE_` are exposed to client-side code. Put local secrets and overrides in `.env.local`.

## Testing

Vitest is configured with two projects in `vitest.config.ts`:

- `unit`: Node environment for pure logic tests
- `browser`: Browser Mode with Playwright for React component tests

Browser test files should match `src/**/*.browser.{test,spec}.{ts,tsx}`. If Chromium is missing locally, run:

```bash
pnpm exec playwright install chromium
```

## Build and Deploy

Build the app:

```bash
pnpm build
```

The output in `dist/` contains only static assets such as:

- `index.html`
- JavaScript and CSS chunks in `dist/assets/`
- Files copied from `public/`

Deploy `dist/` to any static host. Because routing is client-side, configure your host to rewrite non-asset requests to `/index.html`.

## Documentation

- [Mantine Documentation](https://mantine.dev/)
- [TanStack Router Documentation](https://tanstack.com/router/latest)
- [TanStack Query Documentation](https://tanstack.com/query/latest)
- [Vite Documentation](https://vitejs.dev/)
- [Vitest Documentation](https://vitest.dev/)

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE).
