import { Showcase } from "@/app/_components/showcase";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function CollapsibleDoc() {
  return (
    <Showcase
      id="collapsible"
      name="Collapsible"
      description="Headless expand/collapse primitive. Wire any trigger and content — pair with Button and the accordion pattern for a HIG feel."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/collapsible.json"
      code={`import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { ChevronDownIcon } from "lucide-react"

<Collapsible>
  <CollapsibleTrigger className="group flex w-full items-center justify-between">
    <span>Repositories</span>
    <ChevronDownIcon className="size-4 transition-transform group-data-[state=open]:rotate-180" />
  </CollapsibleTrigger>
  <CollapsibleContent>
    Hidden content
  </CollapsibleContent>
</Collapsible>`}
      preview={
        <Collapsible className="w-full max-w-xs space-y-2">
          <CollapsibleTrigger className="group/collapsible flex w-full items-center justify-between py-1.5 text-[15px] font-medium tracking-tight text-foreground outline-none transition-colors hover:text-foreground/80 focus-visible:rounded-md focus-visible:ring-3 focus-visible:ring-ring/50">
            <span>Repositories</span>
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4 text-muted-foreground transition-transform duration-200 ease-out group-data-[state=open]/collapsible:rotate-180"
            >
              <path d="M4 6l4 4 4-4" />
            </svg>
            <span className="sr-only">Toggle</span>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="space-y-2 pt-1">
              <div className="rounded-xl border border-border px-4 py-3 text-[13px] text-muted-foreground">
                @radix-ui/react-collapsible
              </div>
              <div className="rounded-xl border border-border px-4 py-3 text-[13px] text-muted-foreground">
                @radix-ui/react-dialog
              </div>
              <div className="rounded-xl border border-border px-4 py-3 text-[13px] text-muted-foreground">
                @radix-ui/react-dropdown-menu
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      }
    />
  );
}
