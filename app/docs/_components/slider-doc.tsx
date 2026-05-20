import { Showcase } from "@/app/_components/showcase";
import { Slider } from "@/components/ui/slider";

export function SliderDoc() {
  return (
    <Showcase
      id="slider"
      name="Slider"
      description="6pt track, white shadow thumb with scale-on-hover. Primary fill for the active range. Supports range (dual thumb) and vertical."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/slider.json"
      code={`import { Slider } from "@/components/ui/slider"

<Slider defaultValue={[50]} max={100} step={1} />`}
      preview={
        <div className="flex w-full max-w-sm flex-col gap-6">
          <Slider defaultValue={[40]} max={100} step={1} />
          <Slider defaultValue={[25, 75]} max={100} step={1} />
        </div>
      }
    />
  );
}
