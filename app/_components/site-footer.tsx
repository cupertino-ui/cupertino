import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  return (
    <footer className="mt-16">
      <Separator />
      <div className="mx-auto flex max-w-3xl flex-col items-start justify-between gap-3 px-6 py-8 text-[13px] text-muted-foreground sm:flex-row sm:items-center">
        <span>
          Built on{" "}
          <a
            className="underline-offset-4 hover:underline hover:text-foreground"
            href="https://ui.shadcn.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            shadcn/ui
          </a>
          . Designed after{" "}
          <a
            className="underline-offset-4 hover:underline hover:text-foreground"
            href="https://developer.apple.com/design/human-interface-guidelines"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apple HIG
          </a>
          .
        </span>
        <span>MIT License · v0.1.0</span>
      </div>
    </footer>
  );
}
