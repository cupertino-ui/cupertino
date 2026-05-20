"use client"

import * as React from "react"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  CommandDialog,
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboardIcon,
  SearchIcon,
  SettingsIcon,
  UserIcon,
  FileTextIcon,
  MessageSquareIcon,
} from "lucide-react"

export function CommandDemo() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((v) => !v)
      }
    }
    document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [])

  return (
    <div className="flex flex-col items-center gap-4">
      <Button variant="outline" onClick={() => setOpen(true)} className="gap-2">
        <SearchIcon className="size-4" />
        Search…
        <span className="ml-2 flex items-center gap-0.5 text-[11px] text-muted-foreground">
          <kbd className="rounded bg-muted px-1 font-mono">⌘</kbd>
          <kbd className="rounded bg-muted px-1 font-mono">K</kbd>
        </span>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Search…" />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <LayoutDashboardIcon />
                Dashboard
              </CommandItem>
              <CommandItem>
                <FileTextIcon />
                Documents
              </CommandItem>
              <CommandItem>
                <MessageSquareIcon />
                Messages
                <CommandShortcut>⌘M</CommandShortcut>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <UserIcon />
                Profile
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <SettingsIcon />
                Settings
                <CommandShortcut>⌘,</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  )
}
