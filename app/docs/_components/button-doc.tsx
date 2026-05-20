import { Showcase } from "@/app/_components/showcase";
import { Button } from "@/components/ui/button";

export function ButtonDoc() {
  return (
    <Showcase
      id="button"
      name="Button"
      description="Capsule shape, 44pt touch target, scale-press feedback. Six variants — default, outline, secondary, ghost, destructive, link — matching shadcn one-for-one."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/button.json"
      code={`import { Button } from "@/components/ui/button"

<Button>Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="destructive">Delete</Button>`}
      preview={
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button>Default</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
      }
    />
  );
}
