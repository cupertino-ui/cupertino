import { Showcase } from "@/app/_components/showcase";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function InputDoc() {
  return (
    <Showcase
      id="input"
      name="Input"
      description="44pt height, rounded-xl, filled background that turns crisp white on focus. Pairs naturally with Label."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/input.json"
      code={`import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

<Label htmlFor="email">Email</Label>
<Input id="email" type="email" placeholder="name@example.com" />`}
      preview={
        <div className="mx-auto flex w-full max-w-sm flex-col gap-2.5">
          <Label htmlFor="docs-email">Email</Label>
          <Input
            id="docs-email"
            type="email"
            placeholder="name@example.com"
          />
        </div>
      }
    />
  );
}
