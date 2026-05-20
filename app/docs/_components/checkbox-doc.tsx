import { Showcase } from "@/app/_components/showcase";
import { Checkbox } from "@/components/ui/checkbox";

export function CheckboxDoc() {
  return (
    <Showcase
      id="checkbox"
      name="Checkbox"
      description="22pt touch-friendly, 6px radius, bold checkmark. Scale-press feedback with 200ms transition. Primary fill when checked."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/checkbox.json"
      code={`import { Checkbox } from "@/components/ui/checkbox"

<Checkbox />
<Checkbox defaultChecked />`}
      preview={
        <div className="flex flex-wrap items-center justify-center gap-8">
          <label className="flex items-center gap-2.5 text-[15px]">
            <Checkbox />
            <span>Unchecked</span>
          </label>
          <label className="flex items-center gap-2.5 text-[15px]">
            <Checkbox defaultChecked />
            <span>Checked</span>
          </label>
          <label className="flex items-center gap-2.5 text-[15px] opacity-50">
            <Checkbox disabled />
            <span>Disabled</span>
          </label>
        </div>
      }
    />
  );
}
