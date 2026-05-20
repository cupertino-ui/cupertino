import { Showcase } from "@/app/_components/showcase";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";
import { Kbd } from "@/components/ui/kbd";
import { AtSignIcon, SearchIcon } from "lucide-react";

export function InputGroupDoc() {
  return (
    <Showcase
      id="input-group"
      name="Input Group"
      description="Apple HIG input group — composes input with leading/trailing addons (icons, text, buttons, kbd). Shared rounded-xl shell, single focus ring across the group."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/input-group.json"
      code={`import { InputGroup, InputGroupInput, InputGroupAddon, InputGroupText, InputGroupButton } from "@/components/ui/input-group"
import { SearchIcon } from "lucide-react"

<InputGroup>
  <InputGroupAddon>
    <SearchIcon />
  </InputGroupAddon>
  <InputGroupInput placeholder="Search..." />
  <InputGroupAddon align="inline-end">
    <Kbd>K</Kbd>
  </InputGroupAddon>
</InputGroup>`}
      preview={
        <div className="mx-auto flex w-full max-w-sm flex-col gap-3">
          <InputGroup>
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
            <InputGroupInput placeholder="Search components" />
            <InputGroupAddon align="inline-end">
              <Kbd>⌘K</Kbd>
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupAddon>
              <AtSignIcon />
            </InputGroupAddon>
            <InputGroupInput placeholder="username" />
            <InputGroupAddon align="inline-end">
              <InputGroupText>@cupertino.dev</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupInput placeholder="Enter URL" />
            <InputGroupAddon align="inline-end">
              <InputGroupButton size="sm" variant="default">
                Apply
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </div>
      }
    />
  );
}
