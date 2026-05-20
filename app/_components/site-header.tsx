import { Input } from "@/components/ui/input";
import { Kbd } from "@/components/ui/kbd";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[1400px] items-center gap-6 px-4 sm:px-6 lg:px-8">
        <a
          href="/"
          className="text-[15px] font-semibold tracking-tight"
        >
          Cupertino UI
        </a>

        <nav className="hidden items-center gap-5 text-sm text-muted-foreground md:flex">
          <a href="/" className="transition-colors hover:text-foreground">
            Home
          </a>
          <a href="/docs" className="transition-colors hover:text-foreground">
            Docs
          </a>
          <a
            href="/docs#components"
            className="transition-colors hover:text-foreground"
          >
            Components
          </a>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <div className="relative hidden md:block">
            <SearchIcon className="pointer-events-none absolute top-1/2 left-3 size-3.5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search docs…"
              className="h-9 w-56 rounded-lg pl-9 pr-12 text-[13px]"
              aria-label="Search documentation"
            />
            <Kbd className="absolute top-1/2 right-2 -translate-y-1/2">⌘K</Kbd>
          </div>

          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://github.com/dtdi-dev/cupertino"
                target="_blank"
                rel="noopener noreferrer"
                className="grid size-8 place-items-center rounded-md border border-border text-foreground transition-colors hover:bg-muted"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </a>
            </TooltipTrigger>
            <TooltipContent>Open repository on GitHub</TooltipContent>
          </Tooltip>
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

function GitHubIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}
