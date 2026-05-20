import { Showcase } from "@/app/_components/showcase";
import { Toggle } from "@/components/ui/toggle";

export function ToggleDoc() {
  return (
    <Showcase
      id="toggle"
      name="Toggle"
      description="44pt, rounded-xl. Primary fill when pressed-on; transparent when off. Default and outline variants, scale-press feedback."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/toggle.json"
      code={`import { Toggle } from "@/components/ui/toggle"

<Toggle>Bold</Toggle>
<Toggle variant="outline" defaultPressed>Italic</Toggle>`}
      preview={
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Toggle>Default</Toggle>
          <Toggle defaultPressed>Pressed</Toggle>
          <Toggle variant="outline">Outline</Toggle>
          <Toggle variant="outline" defaultPressed>
            On
          </Toggle>
          <Toggle size="sm">Small</Toggle>
          <Toggle disabled>Disabled</Toggle>
        </div>
      }
    />
  );
}
