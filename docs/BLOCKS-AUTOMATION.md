# Cupertino Blocks — Install Automation Brief

Self-contained prompt for a **fresh Sonnet chat**. Goal: bulk-install upstream shadcn blocks (sidebar / login / signup), wire them into `app/blocks`, and re-sync the HIG primitives that `shadcn add` will overwrite.

> Heads-up: this repo is the registry itself. `shadcn add` here installs *into our own `components/`* — so it will overwrite `components/ui/*` with stock shadcn versions and clobber the HIG skin. The sync step at the end is **mandatory**, not optional.

## 0. Bootstrap (read before doing anything)

1. [AGENTS.md](../AGENTS.md) — this project pins a custom Next.js with breaking changes. Check `node_modules/next/dist/docs/` before touching route/config code.
2. [docs/PROJECT.md](./PROJECT.md) — registry workflow, drop-in rules, the **"Sync dengan Shadcn Upstream"** section. The golden rule applies here verbatim: source of truth is `registry/`, `components/ui/` is disposable.
3. [app/blocks/_registry.ts](../app/blocks/_registry.ts) and [app/blocks/[slug]/page.tsx](../app/blocks/[slug]/page.tsx) — current wiring pattern (see `login-01` as the reference example).
4. [app/blocks/page.tsx](../app/blocks/page.tsx) and [app/blocks/_components/block-preview.tsx](../app/blocks/_components/block-preview.tsx) — index + iframe preview shell.

## 1. Safety net

```bash
git status                 # must be clean before starting
git checkout -b feat/blocks-bulk-install
```

If `components/ui/` has uncommitted edits, **stop** and ask the user — they may be hand-tuning a primitive.

## 2. Install all blocks (one batch per category)

Run from repo root. Use `--yes --overwrite` so each command is non-interactive and consistent with the existing workflow in `PROJECT.md`.

### Sidebar (16)

```bash
npx shadcn@latest add sidebar-01 sidebar-02 sidebar-03 sidebar-04 sidebar-05 sidebar-06 sidebar-07 sidebar-08 --yes --overwrite
npx shadcn@latest add sidebar-09 sidebar-10 sidebar-11 sidebar-12 sidebar-13 sidebar-14 sidebar-15 sidebar-16 --yes --overwrite
```

### Login (5)

```bash
npx shadcn@latest add login-01 login-02 login-03 login-04 login-05 --yes --overwrite
```

### Signup (5)

```bash
npx shadcn@latest add signup-01 signup-02 signup-03 signup-04 signup-05 --yes --overwrite
```

> If any command fails, run it standalone to see the error. Common cause: a missing primitive in `registry/` — install that single primitive first via the standard workflow in `PROJECT.md`, then retry.

## 3. **Re-sync HIG primitives (DO NOT SKIP)**

Step 2 overwrote `components/ui/button.tsx`, `card.tsx`, `sidebar.tsx`, `field.tsx`, etc. with stock shadcn versions. The HIG skin lives in `registry/` and is restored with one command:

```bash
npm run component:sync       # syncs ALL components in registry/ → components/ui/
npm run registry:build       # regenerates public/r/*.json
```

Sanity check the diff:

```bash
git diff components/ui/button.tsx       # should be empty (sync restored HIG version)
git diff components/ui/sidebar.tsx      # should be empty
```

If any `components/ui/<name>.tsx` still differs after `component:sync`, that means it does **not** exist in `registry/` yet. Decide:
- It's a primitive we own → port it into `registry/<name>/` following `PROJECT.md` "Workflow Menambah Komponen" (4 steps).
- It's an unowned upstream primitive → leave the stock shadcn version in `components/ui/` and add it to the roadmap.

## 4. Inventory what landed

Each `shadcn add <block>` typically drops:
- One **block file** under `components/` (e.g. `components/login-form.tsx`, or a folder like `components/sidebar-07/`).
- New **page route(s)** under `app/` from the block's source (delete or relocate — we own `app/` already).
- Updates to `components/ui/*` for any primitives the block depends on (handled by step 3).

```bash
git status                              # see everything that landed
git diff --stat components/             # block files
git diff --stat app/                    # unwanted routes from upstream blocks
```

**Move or delete any `app/` files added by the installer** — they will collide with the existing site. Block source belongs under `components/` only.

## 5. Wire each block into the preview shell

For every installed block, two edits in `app/blocks/`:

### 5a. Add an entry to [app/blocks/_registry.ts](../app/blocks/_registry.ts)

```ts
{
  slug: "sidebar-07",
  name: "Sidebar 07",
  title: "<short title from upstream>",
  description: "<one-line description>",
  category: "sidebar",                // "sidebar" | "login" | "signup" | "featured"
  installCommand: "npx shadcn add sidebar-07",
  status: "ready",
}
```

### 5b. Add a renderer in [app/blocks/[slug]/page.tsx](../app/blocks/[slug]/page.tsx)

Import the block's exported component and register it in `BLOCK_RENDERERS`:

```ts
import { SidebarSeven } from "@/components/sidebar-07";   // adjust import to actual export

const BLOCK_RENDERERS: Record<string, () => React.ReactNode> = {
  "login-01": () => (<div className="w-full max-w-sm"><LoginForm /></div>),
  "sidebar-07": () => <SidebarSeven />,
  // …one entry per installed block
};
```

Container hint by category:
- `login-*` / `signup-*` → wrap in `<div className="w-full max-w-sm">…</div>` (matches `login-01`).
- `sidebar-*` → render the block at full width; the iframe in `block-preview.tsx` already provides device framing.

## 6. Verify

```bash
npm run lint
npm run build
```

Then `npm run dev` and visit:
- `/blocks?category=sidebar`
- `/blocks?category=login`
- `/blocks?category=signup`

Confirm each tile renders in the iframe and that opening `/blocks/<slug>` full-screen works.

## 7. Commit style

[Project commit memory](../../C:/Users/AmarAlFatah/.claude/projects/d--Projects-cupertino/memory/feedback_commit_style.md): **single short line, no body, no trailers**. One commit per logical chunk:

```
feat: install sidebar blocks 01-16
feat: install login blocks 01-05
feat: install signup blocks 01-05
chore: resync HIG primitives after block install
```

## Hard rules

- **Never edit `components/ui/*` to keep HIG styling.** Edit `registry/<name>/<name>.tsx` and re-run `npm run component:sync`. This is the golden rule from `PROJECT.md`.
- **Don't invent new categories** in `_registry.ts` — stick to `login | signup | sidebar | featured`.
- **Don't import one block from another.** Each block stays standalone (see [docs/blocks-plan.md](./blocks-plan.md)).
- **Stop on ambiguity** — if an upstream block adds a primitive we don't have in `registry/` yet, pause and ask whether to port it or leave it stock.

## Done check

- [ ] All 26 blocks installed (16 sidebar + 5 login + 5 signup).
- [ ] `git diff components/ui/` is empty after `npm run component:sync` (HIG primitives restored).
- [ ] Every installed block has an entry in `_registry.ts` and a renderer in `[slug]/page.tsx`.
- [ ] No stray files under `app/` from the installer.
- [ ] `npm run lint && npm run build` pass.
- [ ] `public/r/*.json` regenerated.
