import { Showcase } from "@/app/_components/showcase";
import { ResizableDemo } from "@/app/_components/resizable-demo";

export function ResizableDoc() {
  return (
    <Showcase
      id="resizable"
      name="Resizable"
      description="Split panes with Apple HIG handles — 1px divider that widens to 4px on hover, ring-ring/50 highlight on drag."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/resizable.json"
      code={`import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable"

<ResizablePanelGroup orientation="horizontal" className="rounded-2xl border">
  <ResizablePanel defaultSize={50}>Left</ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={50}>Right</ResizablePanel>
</ResizablePanelGroup>`}
      preview={<ResizableDemo />}
    />
  );
}
