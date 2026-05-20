# Cupertino UI

shadcn-compatible component registry, re-skinned to follow **Apple Human Interface Guidelines** — pill buttons, 44pt targets, San Francisco typography, system blue.

Drop-in replacement for shadcn primitives: same variant names, same props, same `data-slot` API. Existing shadcn blocks and templates keep working.

## Install a component

```bash
npx shadcn@latest add https://cupertino-ui.vercel.app/r/button.json
```

Target end-state once published as a namespaced registry:

```bash
npx shadcn@latest add @cupertino-ui/button
```

## Develop locally

```bash
npm install
npm run dev              # docs site at http://localhost:3000
npm run registry:build   # rebuild public/r/*.json
npm run build            # registry build + Next.js build
```

## Project docs

- [docs/PROJECT.md](docs/PROJECT.md) — goals, philosophy, conventions, and the workflow for adding a new component.

## License

MIT
