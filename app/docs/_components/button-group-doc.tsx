import { Showcase } from "@/app/_components/showcase";
import { Button } from "@/components/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";

export function ButtonGroupDoc() {
  return (
    <Showcase
      id="button-group"
      name="Button Group"
      description="Apple HIG segmented button cluster — shared rounded-xl shell, dividers between members, supports separators and label addons."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/button-group.json"
      code={`import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from "@/components/ui/button-group"
import { Button } from "@/components/ui/button"

<ButtonGroup>
  <Button variant="outline">Day</Button>
  <Button variant="outline">Week</Button>
  <Button variant="outline">Month</Button>
</ButtonGroup>`}
      preview={
        <div className="flex flex-col items-center gap-5">
          <ButtonGroup>
            <Button variant="outline">Day</Button>
            <Button variant="outline">Week</Button>
            <Button variant="outline">Month</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button variant="outline">Copy</Button>
            <ButtonGroupSeparator />
            <Button variant="outline">Paste</Button>
            <ButtonGroupSeparator />
            <Button variant="outline">Cut</Button>
          </ButtonGroup>
          <ButtonGroup>
            <ButtonGroupText>https://</ButtonGroupText>
            <Input className="rounded-l-none" placeholder="cupertino-ui.vercel.app" />
            <Button>Go</Button>
          </ButtonGroup>
        </div>
      }
    />
  );
}
