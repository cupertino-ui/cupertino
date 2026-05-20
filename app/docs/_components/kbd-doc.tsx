import { Showcase } from "@/app/_components/showcase";
import { Kbd } from "@/components/ui/kbd";

export function KbdDoc() {
  return (
    <Showcase
      id="kbd"
      name="Kbd"
      description="Keyboard shortcut indicator. Mono badge with subtle border and inset shadow — inline-flex by default so it sits naturally beside text."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/kbd.json"
      code={`import { Kbd } from "@/components/ui/kbd"

<span className="text-sm">
  Press <Kbd>⌘</Kbd> <Kbd>K</Kbd> to search.
</span>`}
      preview={
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 text-[15px]">
          <span className="flex items-center gap-1.5">
            Search <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </span>
          <span className="ml-6 flex items-center gap-1.5">
            Save <Kbd>⌘</Kbd>
            <Kbd>S</Kbd>
          </span>
          <span className="ml-6 flex items-center gap-1.5">
            Quit <Kbd>⌘</Kbd>
            <Kbd>Q</Kbd>
          </span>
        </div>
      }
    />
  );
}
