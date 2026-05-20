# Cupertino UI — Missing Components Automation Brief

Self-contained prompt for a **fresh Sonnet chat**. Goal: complete the remaining shadcn primitives in this registry with Apple HIG styling.

## Bootstrap (do these first)

1. Read `AGENTS.md` — this project pins a custom Next.js with breaking changes. Check `node_modules/next/dist/docs/` before touching route/config code.
2. Read `AUTOMATION.md` — full per-component workflow (install → scaffold → re-skin → register → sync → docs → build → commit). Follow it verbatim.
3. Read these three to learn the house style before writing anything:
   - `registry/button/button.tsx` — pill radius, press feedback, focus ring patterns
   - `registry/switch/switch.tsx` — iOS-native 51×31 toggle
   - `registry/sheet/sheet.tsx` — rounded-3xl surface, grabber, motion
4. Read `docs/PROJECT.md` for product intent.

## What's already done

Present in `registry/`:

accordion, alert, alert-dialog, avatar, badge, breadcrumb, button, card, checkbox, collapsible, dialog, dropdown-menu, hover-card, input, kbd, label, pagination, popover, progress, radio-group, scroll-area, select, separator, sheet, skeleton, slider, switch, tabs, textarea, toggle, toggle-group, tooltip

## What's missing — work order

Tackle in this order. Most-used / highest-impact first. **One component per commit.** Stop after each for review.

### Priority 1 — high-impact primitives

- [ ] `sonner` — toast notifications (very common). HIG: rounded-2xl, subtle shadow, slide-in from top-right or bottom-center, blur background.
- [ ] `command` — command palette (already used by `app/_components/docs-search.tsx` ad-hoc). HIG: rounded-2xl modal, large search input, grouped sections with uppercase 11px labels, ⌘K kbd hint.
- [ ] `context-menu` — right-click menu. Mirror existing `dropdown-menu` styling.
- [ ] `menubar` — top-level menus (macOS pattern). Reuse `dropdown-menu` tokens.
- [ ] `navigation-menu` — horizontal nav with mega-menu support. HIG: tight tracking, rounded-md hover, no underline.
- [ ] `drawer` — bottom sheet on mobile (Vaul-based). HIG: rounded-t-3xl + grabber, already established in `sheet`.
- [ ] `calendar` — date grid. HIG: rounded-2xl container, circular day cells, today highlighted with primary fill, weekend muted. **Pause and ask** if HIG translation is unclear.

### Priority 2 — form & input variants

- [ ] `input-otp` — segmented code input. HIG: rounded-xl cells, h-11, focus ring per cell, active cell pulses caret.
- [ ] `input-group` — input with prefix/suffix (icons, kbd, buttons). HIG: rounded-xl container, dividers as `bg-border/60`.
- [ ] `field` — form field wrapper (label + input + description + error). HIG: text-[15px] label, text-[13px] description, text-destructive for error.
- [ ] `native-select` — wraps native `<select>` for accessibility. Match `select` styling without Radix.
- [ ] `combobox` — input + popover + command. Composed from `command` + `popover` (build those first).

### Priority 3 — layout & composition

- [ ] `aspect-ratio` — pure utility, no visible styling. Trivial port.
- [ ] `resizable` — split panes. HIG: 1px handle that widens to 4px on hover, ring-ring/50 on drag.
- [ ] `sidebar` — collapsible app sidebar. HIG: rounded-2xl items on hover, text-[13.5px] labels, group headers as uppercase 11px. Large API surface — may want to skip if too complex.
- [ ] `carousel` — horizontal scroll with snap. HIG: rounded-2xl slides, dots indicator with rounded-full, smooth scroll.
- [ ] `table` — basic data table. HIG: text-[13px] cells, hairline borders, hover row bg-muted/40.

### Priority 4 — micro UI

- [ ] `button-group` — segmented button cluster. HIG: shared rounded-xl, divider as 1px ring.
- [ ] `spinner` — loading indicator. HIG: rounded-full ring-2 with arc animation, **not** spinning dots. Match iOS activity indicator.
- [ ] `empty` — empty-state pattern. HIG: large muted icon, text-[15px] title, text-[13px] description, action button.
- [ ] `item` — list item primitive (leading icon + title + subtitle + trailing). HIG: min-h-11, rounded-xl on hover, chevron at trailing.
- [ ] `typography` — h1–h6, p, blockquote, code. HIG: tight tracking, SF Pro-style scale (13/15/17/22/28/34/40pt).
- [ ] `toast` — legacy toast (skip if `sonner` is shipped; shadcn deprecated `toast` in favor of `sonner`).

## Hard rules (from AUTOMATION.md)

- **Drop-in compat**: never change exported names/props.
- **No `target` field** in `registry.json` — breaks Laravel installs.
- **Source of truth is `registry/`** — never edit `components/ui/` directly.
- **One component per commit**, conventional-commit single line (e.g. `feat: add HIG sonner component`).
- **Stop on ambiguity** — ask, don't guess.

## Done check after each component

```bash
npm run lint
npm run build
ls public/r/<name>.json
```

Commit only if all three pass.

## Skip / out of scope

- `chart`, `data-table`, `date-picker` — composites, not primitives. Maintainer decides.
- `direction` — RTL utility, not a visible component.
