"use client";

import * as React from "react";
import { Dialog as DialogPrimitive } from "radix-ui";
import { Kbd } from "@/components/ui/kbd";
import { DOC_NAV_GROUPS } from "@/app/_components/docs-registry";
import { cn } from "@/lib/utils";

type Hit = { label: string; href: string; group: string };

const ALL_HITS: Hit[] = DOC_NAV_GROUPS.flatMap((g) =>
  g.items.map((i) => ({ label: i.label, href: i.href, group: g.title }))
);

export function DocsSearch() {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [active, setActive] = React.useState(0);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const listRef = React.useRef<HTMLDivElement>(null);

  const grouped = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = q
      ? ALL_HITS.filter((h) => h.label.toLowerCase().includes(q))
      : ALL_HITS;
    const byGroup = new Map<string, Hit[]>();
    for (const h of filtered) {
      if (!byGroup.has(h.group)) byGroup.set(h.group, []);
      byGroup.get(h.group)!.push(h);
    }
    return Array.from(byGroup, ([title, items]) => ({ title, items }));
  }, [query]);

  const flat = React.useMemo(
    () => grouped.flatMap((g) => g.items),
    [grouped]
  );

  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (open) {
          setOpen(false);
        } else {
          setQuery("");
          setActive(0);
          setOpen(true);
        }
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  React.useEffect(() => {
    if (open) {
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  React.useEffect(() => {
    const el = listRef.current?.querySelector<HTMLElement>(
      `[data-index="${active}"]`
    );
    el?.scrollIntoView({ block: "nearest" });
  }, [active]);

  function select(href: string) {
    setOpen(false);
    if (typeof window !== "undefined") {
      window.location.assign(href.startsWith("#") ? href : `#${href}`);
    }
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, flat.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const hit = flat[active];
      if (hit) select(hit.href);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => { setQuery(""); setActive(0); setOpen(true); }}
        aria-label="Search documentation"
        className="hidden h-9 w-56 items-center gap-2 rounded-lg border border-border bg-muted/40 pl-3 pr-2 text-[13px] text-muted-foreground transition-colors hover:bg-muted md:flex"
      >
        <SearchIcon className="size-3.5 shrink-0" />
        <span className="flex-1 text-left">Search docs...</span>
        <Kbd>Cmd K</Kbd>
      </button>

      <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay
            className="fixed inset-0 z-50 bg-foreground/10 supports-backdrop-filter:backdrop-blur-sm data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0"
          />
          <DialogPrimitive.Content
            onKeyDown={onKeyDown}
            aria-label="Search documentation"
            className="fixed top-[15vh] left-1/2 z-50 w-full max-w-[600px] -translate-x-1/2 overflow-hidden rounded-2xl border border-border bg-background text-foreground shadow-2xl outline-none data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-open:slide-in-from-top-4 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95"
          >
            <DialogPrimitive.Title className="sr-only">
              Search documentation
            </DialogPrimitive.Title>
            <DialogPrimitive.Description className="sr-only">
              Type to filter documentation sections. Use arrow keys and Enter to navigate.
            </DialogPrimitive.Description>

            <div className="flex items-center gap-3 border-b border-border px-5">
              <SearchIcon className="size-[18px] shrink-0 text-muted-foreground" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => { setQuery(e.target.value); setActive(0); }}
                placeholder="Search docs..."
                className="h-14 flex-1 bg-transparent text-[17px] tracking-tight outline-none placeholder:text-muted-foreground/70"
                aria-autocomplete="list"
                aria-controls="docs-search-list"
                aria-activedescendant={`docs-search-hit-${active}`}
              />
              <Kbd className="hidden sm:inline-flex">esc</Kbd>
            </div>

            <div
              ref={listRef}
              id="docs-search-list"
              role="listbox"
              className="max-h-[60vh] overflow-y-auto overscroll-contain p-2"
            >
              {flat.length === 0 ? (
                <div className="px-3 py-10 text-center">
                  <div className="text-[15px] font-medium text-foreground">
                    No results
                  </div>
                  <div className="mt-1 text-[13px] text-muted-foreground">
                    Try a different keyword.
                  </div>
                </div>
              ) : (
                grouped.map((group) => {
                  return (
                    <div key={group.title} className="mb-2 last:mb-0">
                      <div className="px-3 pt-2 pb-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/80">
                        {group.title}
                      </div>
                      <ul className="space-y-0.5">
                        {group.items.map((hit) => {
                          const idx = flat.indexOf(hit);
                          const isActive = idx === active;
                          return (
                            <li
                              key={hit.href}
                              id={`docs-search-hit-${idx}`}
                              role="option"
                              aria-selected={isActive}
                              data-index={idx}
                            >
                              <button
                                type="button"
                                onMouseMove={() => setActive(idx)}
                                onMouseDown={(e) => {
                                  e.preventDefault();
                                  select(hit.href);
                                }}
                                className={cn(
                                  "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors",
                                  isActive
                                    ? "bg-muted text-foreground"
                                    : "text-foreground/90 hover:bg-muted/60"
                                )}
                              >
                                <HashIcon
                                  className={cn(
                                    "size-3.5 shrink-0",
                                    isActive
                                      ? "text-primary"
                                      : "text-muted-foreground/60"
                                  )}
                                />
                                <span className="flex-1 text-[14px] font-medium tracking-tight">
                                  {hit.label}
                                </span>
                                {isActive && (
                                  <ReturnIcon className="size-3.5 text-muted-foreground" />
                                )}
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })
              )}
            </div>

            <div className="flex items-center justify-between gap-4 border-t border-border bg-muted/40 px-4 py-2.5 text-[11px] text-muted-foreground">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5">
                  <Kbd>↑</Kbd>
                  <Kbd>↓</Kbd>
                  Navigate
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Kbd>↵</Kbd>
                  Open
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5">
                <Kbd>esc</Kbd>
                Close
              </span>
            </div>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </>
  );
}

function SearchIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M11.5 11.5 14 14M1.5 7.5a6 6 0 1 0 12 0 6 6 0 0 0-12 0Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HashIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M6 2 4 14M12 2l-2 12M2 6h12M2 11h11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ReturnIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M14 4v3.5A2.5 2.5 0 0 1 11.5 10H3m0 0 3-3m-3 3 3 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
