import { Showcase } from "@/app/_components/showcase";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function RadioGroupDoc() {
  return (
    <Showcase
      id="radio-group"
      name="Radio Group"
      description="22pt circle, border-2, primary fill with white inner dot when selected. Scale-press feedback and 200ms transition."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/radio-group.json"
      code={`import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

<RadioGroup defaultValue="option-1">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option-1" id="r1" />
    <Label htmlFor="r1">Option One</Label>
  </div>
</RadioGroup>`}
      preview={
        <RadioGroup defaultValue="option-1" className="gap-3">
          {["Option One", "Option Two", "Option Three"].map((opt, i) => (
            <div key={opt} className="flex items-center gap-2.5">
              <RadioGroupItem
                value={`option-${i + 1}`}
                id={`radio-${i + 1}`}
              />
              <Label htmlFor={`radio-${i + 1}`} className="cursor-pointer">
                {opt}
              </Label>
            </div>
          ))}
        </RadioGroup>
      }
    />
  );
}
