import { Showcase } from "@/app/_components/showcase";
import { ScrollArea } from "@/components/ui/scroll-area";

export function ScrollAreaDoc() {
  const tags = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);
  return (
    <Showcase
      id="scroll-area"
      name="Scroll Area"
      description="Thin 8pt scrollbar with rounded-full thumb. Hides until hover on desktop, matches native iOS scroll behavior."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/scroll-area.json"
      code={`import { ScrollArea } from "@/components/ui/scroll-area"

<ScrollArea className="h-48 rounded-2xl border">
  <div className="space-y-0.5 p-2">
    {items.map(item => (
      <div
        key={item}
        className="rounded-lg px-3 py-1.5 text-[13px] hover:bg-muted/60"
      >
        {item}
      </div>
    ))}
  </div>
</ScrollArea>`}
      preview={
        <ScrollArea className="h-48 w-full max-w-xs rounded-2xl border border-border">
          <div className="space-y-0.5 p-2">
            {tags.map((tag) => (
              <div
                key={tag}
                className="rounded-lg px-3 py-1.5 text-[13px] text-foreground hover:bg-muted/60"
              >
                {tag}
              </div>
            ))}
          </div>
        </ScrollArea>
      }
    />
  );
}
