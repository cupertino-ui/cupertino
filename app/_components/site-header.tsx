import Link from "next/link";
import { GitHubLink } from "@/app/_components/github-link";
import { MobileNav } from "@/app/_components/mobile-nav";
import { Input } from "@/components/ui/input";
import { Kbd } from "@/components/ui/kbd";

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
          <div className="relative hidden md:block">
            <SearchIcon className="pointer-events-none absolute top-1/2 left-3 size-3.5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search docs..."
              className="h-9 w-56 rounded-lg pl-9 pr-12 text-[13px]"
              aria-label="Search documentation"
            />
            <Kbd className="absolute top-1/2 right-2 -translate-y-1/2">
              Cmd K
            </Kbd>
          </div>

          <GitHubLink />
        </div>
      </div>
    </header>
  );
}

function SearchIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M11.5 11.5 14 14M1.5 7.5a6 6 0 1 0 12 0 6 6 0 0 0-12 0Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}
