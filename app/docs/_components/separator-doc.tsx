import { Showcase } from "@/app/_components/showcase";
import { Separator } from "@/components/ui/separator";

export function SeparatorDoc() {
  return (
    <Showcase
      id="separator"
      name="Separator"
      description="Subtle horizontal or vertical rule at 70% border opacity. Use it to divide list items, sections, and inline metadata."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/separator.json"
      code={`import { Separator } from "@/components/ui/separator"

<div>
  <h4>Account</h4>
  <p>Manage your settings.</p>
  <Separator className="my-4" />
  <p>Sign out</p>
</div>`}
      preview={
        <div className="mx-auto w-full max-w-sm">
          <div className="flex flex-col">
            <div className="text-[15px] font-semibold">Account</div>
            <div className="text-[13.5px] text-muted-foreground">
              Manage your settings.
            </div>
          </div>
          <Separator className="my-4" />
          <div className="flex h-5 items-center gap-3 text-[13.5px]">
            <span>Profile</span>
            <Separator orientation="vertical" />
            <span>Billing</span>
            <Separator orientation="vertical" />
            <span>Sign out</span>
          </div>
        </div>
      }
    />
  );
}
