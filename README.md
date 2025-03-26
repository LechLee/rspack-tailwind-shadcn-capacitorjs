# Rsbuild project

## Setup

Install the dependencies:

```bash
pnpm install
```

## Get started

Start the dev server:

```bash
pnpm dev
```

Build the app for production:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

nvm use --lts
npm run build && npx cap sync && npx cap run ios --target=A22FDE86-3ADA-4F34-9D93-6FB5D859F653
npx cap run ios --target=A22FDE86-3ADA-4F34-9D93-6FB5D859F653 --host=localhost --port=3000 -l