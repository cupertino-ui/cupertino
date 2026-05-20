import Link from "next/link";
import { DocsSearch } from "@/app/_components/docs-search";
import { GitHubLink } from "@/app/_components/github-link";
import { MobileNav } from "@/app/_components/mobile-nav";
import { ThemeToggle } from "@/app/_components/theme-toggle";

const NAV_ITEMS = [
  { label: "Docs", href: "/docs" },
  { label: "Components", href: "/docs#components" },
  { label: "Blocks", href: "/blocks" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[1400px] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <MobileNav />

        <Link
          href="/"
          className="shrink-0 text-[15px] font-semibold tracking-tight text-foreground"
        >
          Cupertino UI
        </Link>

        <nav className="hidden items-center gap-1 text-[13.5px] md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-2.5 py-1.5 font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <DocsSearch />
          <GitHubLink />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

