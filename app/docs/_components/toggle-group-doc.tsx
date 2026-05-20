import { Showcase } from "@/app/_components/showcase";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function ToggleGroupDoc() {
  return (
    <Showcase
      id="toggle-group"
      name="Toggle Group"
      description="Composed toggle buttons — spacing=0 creates an iOS segmented-control attachment with shared borders. Supports single and multiple selection."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/toggle-group.json"
      code={`import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

<ToggleGroup type="single" defaultValue="center">
  <ToggleGroupItem value="left">Left</ToggleGroupItem>
  <ToggleGroupItem value="center">Center</ToggleGroupItem>
  <ToggleGroupItem value="right">Right</ToggleGroupItem>
</ToggleGroup>`}
      preview={
        <div className="flex flex-col items-center gap-4">
          <ToggleGroup type="single" defaultValue="center">
            <ToggleGroupItem value="left">Left</ToggleGroupItem>
            <ToggleGroupItem value="center">Center</ToggleGroupItem>
            <ToggleGroupItem value="right">Right</ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup type="multiple" variant="outline" spacing={0}>
            <ToggleGroupItem value="bold">B</ToggleGroupItem>
            <ToggleGroupItem value="italic">I</ToggleGroupItem>
            <ToggleGroupItem value="underline">U</ToggleGroupItem>
          </ToggleGroup>
        </div>
      }
    />
  );
}
