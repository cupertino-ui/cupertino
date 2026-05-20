import { Showcase } from "@/app/_components/showcase";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectDoc() {
  return (
    <Showcase
      id="select"
      name="Select"
      description="44pt rounded-xl trigger with muted fill. rounded-2xl dropdown, 15pt items, primary checkmark on selected."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/select.json"
      code={`import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
  </SelectContent>
</Select>`}
      preview={
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Select>
            <SelectTrigger className="w-44">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="dark">
            <SelectTrigger className="w-44">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      }
    />
  );
}
