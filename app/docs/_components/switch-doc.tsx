import { Showcase } from "@/app/_components/showcase";
import { Switch } from "@/components/ui/switch";
import React from "react";

function LabeledSwitch({
  label,
  ...props
}: React.ComponentProps<typeof Switch> & { label: string }) {
  return (
    <label className="flex items-center gap-3 text-[13px] text-muted-foreground">
      <Switch {...props} />
      <span>{label}</span>
    </label>
  );
}

export function SwitchDoc() {
  return (
    <Showcase
      id="switch"
      name="Switch"
      description="iOS exact dimensions — 51×31pt — with a thumb shadow and 200ms transition. Use size='sm' for compact contexts (40×24pt)."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/switch.json"
      code={`import { Switch } from "@/components/ui/switch"

<Switch defaultChecked />
<Switch size="sm" />`}
      preview={
        <div className="flex flex-wrap items-center justify-center gap-8">
          <LabeledSwitch label="On" defaultChecked />
          <LabeledSwitch label="Off" />
          <LabeledSwitch label="Small" size="sm" defaultChecked />
          <LabeledSwitch label="Disabled" disabled defaultChecked />
        </div>
      }
    />
  );
}
