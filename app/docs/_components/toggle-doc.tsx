import { Showcase } from "@/app/_components/showcase";
import { Toggle } from "@/components/ui/toggle";
import { Bookmark } from "lucide-react";

export function ToggleDoc() {
  return (
    <Showcase
      id="toggle"
      name="Toggle"
      description="44pt, rounded-xl. Primary fill when pressed-on; transparent when off. Default and outline variants, scale-press feedback."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/toggle.json"
      code={`import { Bookmark } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"

<Toggle variant="outline">
  <Bookmark />
  Bookmark
</Toggle>`}
      preview={
        <div className="flex items-center justify-center rounded-2xl bg-black/95 p-8">
          <Toggle variant="outline">
            <Bookmark />
            Bookmark
          </Toggle>
        </div>
      }
    />
  );
}
