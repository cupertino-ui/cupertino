import { Showcase } from "@/app/_components/showcase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

export function PopoverDoc() {
  return (
    <Showcase
      id="popover"
      name="Popover"
      description="rounded-2xl surface, shadow-xl. Optional title/description slots. Smooth zoom-in on open."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/popover.json"
      code={`import { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverTitle } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

<Popover>
  <PopoverTrigger asChild><Button variant="outline">Open</Button></PopoverTrigger>
  <PopoverContent>
    <PopoverHeader>
      <PopoverTitle>Dimensions</PopoverTitle>
    </PopoverHeader>
    <p>Set the dimensions for the layer.</p>
  </PopoverContent>
</Popover>`}
      preview={
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Open Popover</Button>
          </PopoverTrigger>
          <PopoverContent className="w-72">
            <PopoverHeader>
              <PopoverTitle>Dimensions</PopoverTitle>
              <PopoverDescription>
                Set the dimensions for the layer.
              </PopoverDescription>
            </PopoverHeader>
            <div className="flex flex-col gap-2">
              <Input placeholder="Width" />
              <Input placeholder="Height" />
            </div>
          </PopoverContent>
        </Popover>
      }
    />
  );
}
