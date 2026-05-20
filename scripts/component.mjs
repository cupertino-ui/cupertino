#!/usr/bin/env node
// Cupertino UI — component sync helper
//
// Usage:
//   node scripts/component.mjs init <name>   # scaffold registry/<name>/ from components/ui/<name>.tsx
//   node scripts/component.mjs sync <name>   # copy registry/<name>/<name>.tsx → components/ui/<name>.tsx
//   node scripts/component.mjs sync          # sync ALL components

import { mkdirSync, copyFileSync, existsSync, readdirSync } from "node:fs";
import { dirname } from "node:path";

const [, , cmd, name] = process.argv;
const REGISTRY = "registry";
const UI = "components/ui";

function fail(msg) {
  console.error(`✗ ${msg}`);
  process.exit(1);
}

function copy(from, to) {
  if (!existsSync(from)) fail(`Source not found: ${from}`);
  mkdirSync(dirname(to), { recursive: true });
  copyFileSync(from, to);
  console.log(`✓ ${from} → ${to}`);
}

if (cmd === "init") {
  if (!name) fail("Component name required: node scripts/component.mjs init <name>");
  copy(`${UI}/${name}.tsx`, `${REGISTRY}/${name}/${name}.tsx`);
  console.log(`\nNext: edit ${REGISTRY}/${name}/${name}.tsx with HIG classes,`);
  console.log(`then register it in registry.json, then run: npm run component:sync ${name}`);
} else if (cmd === "sync") {
  const names = name
    ? [name]
    : readdirSync(REGISTRY, { withFileTypes: true })
        .filter((d) => d.isDirectory())
        .map((d) => d.name);
  if (names.length === 0) fail("No components found in registry/");
  for (const n of names) copy(`${REGISTRY}/${n}/${n}.tsx`, `${UI}/${n}.tsx`);
} else {
  console.log(`Usage:
  node scripts/component.mjs init <name>   scaffold registry/<name>/ from components/ui/<name>.tsx
  node scripts/component.mjs sync <name>   copy registry/<name>/<name>.tsx → components/ui/<name>.tsx
  node scripts/component.mjs sync          sync ALL components`);
  process.exit(cmd ? 1 : 0);
}
