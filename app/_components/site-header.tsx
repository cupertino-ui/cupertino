import Link from "next/link";
import { DocsSearch } from "@/app/_components/docs-search";
import { GitHubLink } from "@/app/_components/github-link";
import { MobileNav } from "@/app/_components/mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[1400px] items-center gap-3 px-4 sm:px-6 lg:gap-6 lg:px-8">
        <MobileNav />

        <Link href="/" className="text-[15px] font-semibold tracking-tight">
          Cupertino UI
        </Link>

        <nav className="hidden items-center gap-5 text-sm text-muted-foreground md:flex">
          <Link href="/" className="transition-colors hover:text-foreground">
            Home
          </Link>
          <Link href="/docs" className="transition-colors hover:text-foreground">
            Docs
          </Link>
          <Link
            href="/docs#components"
            className="transition-colors hover:text-foreground"
          >
            Components
          </Link>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <DocsSearch />
          <GitHubLink />
        </div>
      </div>
    </header>
  );
}
