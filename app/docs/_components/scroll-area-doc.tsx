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
  <div className="p-4">
    {items.map(item => <div key={item}>{item}</div>)}
  </div>
</ScrollArea>`}
      preview={
        <ScrollArea className="h-48 w-full max-w-xs rounded-2xl border border-border">
          <div className="space-y-2 p-4">
            {tags.map((tag) => (
              <div key={tag} className="text-[13px] text-muted-foreground">
                {tag}
              </div>
            ))}
          </div>
        </ScrollArea>
      }
    />
  );
}
