"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

export function BlockTabs({
  categories,
  active,
}: {
  categories: { slug: string; label: string }[];
  active: string;
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border">
      <div className="flex items-center gap-1">
        {categories.map((c) => {
          const isActive = c.slug === active;
          return (
            <Link
              key={c.slug}
              href={`/blocks?category=${c.slug}`}
              scroll={false}
              className={cn(
                "relative px-3 py-3 text-[14px] font-medium tracking-tight transition-colors",
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {c.label}
              {isActive ? (
                <span className="absolute inset-x-3 -bottom-px h-px bg-foreground" />
              ) : null}
            </Link>
          );
        })}
      </div>
      <Link
        href="/blocks/all"
        className="rounded-lg border border-border px-3 py-1.5 text-[12.5px] font-medium text-foreground transition-colors hover:bg-muted"
      >
        Browse all blocks
      </Link>
    </div>
  );
}
