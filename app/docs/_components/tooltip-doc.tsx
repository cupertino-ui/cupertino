import { Showcase } from "@/app/_components/showcase";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function TooltipDoc() {
  return (
    <Showcase
      id="tooltip"
      name="Tooltip"
      description="Dark rounded-lg pill with 12pt medium label and soft slide-in (200ms). Wrap any trigger and provide content."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/tooltip.json"
      code={`import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">Hover me</Button>
  </TooltipTrigger>
  <TooltipContent>Add to library</TooltipContent>
</Tooltip>`}
      preview={
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Top</Button>
            </TooltipTrigger>
            <TooltipContent>Tooltip above</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Bottom</Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">Tooltip below</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Right</Button>
            </TooltipTrigger>
            <TooltipContent side="right">Tooltip right</TooltipContent>
          </Tooltip>
        </div>
      }
    />
  );
}
