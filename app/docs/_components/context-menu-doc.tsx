import { Showcase } from "@/app/_components/showcase";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export function ContextMenuDoc() {
  return (
    <Showcase
      id="context-menu"
      name="Context Menu"
      description="Right-click context menu mirroring dropdown-menu — rounded-2xl, 15pt items, uppercase 11px section labels, destructive variant."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/context-menu.json"
      code={`import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuSeparator, ContextMenuShortcut } from "@/components/ui/context-menu"

<ContextMenu>
  <ContextMenuTrigger>Right-click here</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuLabel>Actions</ContextMenuLabel>
    <ContextMenuItem>Open<ContextMenuShortcut>⌘O</ContextMenuShortcut></ContextMenuItem>
    <ContextMenuItem>Copy<ContextMenuShortcut>⌘C</ContextMenuShortcut></ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`}
      preview={
        <ContextMenu>
          <ContextMenuTrigger className="flex h-20 w-64 items-center justify-center rounded-2xl border border-dashed border-border text-[13px] text-muted-foreground select-none">
            Right-click here
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuLabel>Actions</ContextMenuLabel>
            <ContextMenuItem>
              Open
              <ContextMenuShortcut>⌘O</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              Copy
              <ContextMenuShortcut>⌘C</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              Rename
              <ContextMenuShortcut>↩</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      }
    />
  );
}
