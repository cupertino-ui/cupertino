import { Showcase } from "@/app/_components/showcase";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function LabelDoc() {
  return (
    <Showcase
      id="label"
      name="Label"
      description="15pt medium weight, tracking-tight. Built on Radix Label, so it forwards htmlFor and supports peer-disabled."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/label.json"
      code={`import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

<div className="flex items-center gap-3">
  <Switch id="dark-mode" />
  <Label htmlFor="dark-mode">Dark mode</Label>
</div>`}
      preview={
        <div className="flex items-center gap-3">
          <Switch id="docs-dark-mode" />
          <Label htmlFor="docs-dark-mode">Dark mode</Label>
        </div>
      }
    />
  );
}
