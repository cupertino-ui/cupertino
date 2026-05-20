import { Showcase } from "@/app/_components/showcase";
import { CommandDemo } from "@/app/_components/command-demo";

export function CommandDoc() {
  return (
    <Showcase
      id="command"
      name="Command"
      description="Apple HIG command palette — rounded-2xl modal, prominent search input, grouped sections with uppercase 11px labels, ⌘K shortcut hint."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/command.json"
      code={`import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandSeparator, CommandShortcut, CommandDialog } from "@/components/ui/command"

<CommandDialog open={open} onOpenChange={setOpen}>
  <Command>
    <CommandInput placeholder="Search…" />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Suggestions">
        <CommandItem>Dashboard</CommandItem>
        <CommandItem>Documents</CommandItem>
      </CommandGroup>
      <CommandSeparator />
      <CommandGroup heading="Settings">
        <CommandItem>Profile<CommandShortcut>⌘P</CommandShortcut></CommandItem>
        <CommandItem>Settings<CommandShortcut>⌘,</CommandShortcut></CommandItem>
      </CommandGroup>
    </CommandList>
  </Command>
</CommandDialog>`}
      preview={<CommandDemo />}
    />
  );
}
