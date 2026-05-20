import { Showcase } from "@/app/_components/showcase";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function AspectRatioDoc() {
  return (
    <Showcase
      id="aspect-ratio"
      name="Aspect Ratio"
      description="Pure utility wrapper that maintains a fixed ratio. No visible styling — wraps any child in a ratio-locked container."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/aspect-ratio.json"
      code={`import { AspectRatio } from "@/components/ui/aspect-ratio"

<div className="w-64">
  <AspectRatio ratio={16 / 9}>
    <img src="..." className="rounded-2xl object-cover w-full h-full" />
  </AspectRatio>
</div>`}
      preview={
        <div className="w-64">
          <AspectRatio ratio={16 / 9}>
            <div className="flex h-full w-full items-center justify-center rounded-2xl bg-muted text-[13px] text-muted-foreground">
              16 / 9
            </div>
          </AspectRatio>
        </div>
      }
    />
  );
}
