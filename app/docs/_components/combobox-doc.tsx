import { Showcase } from "@/app/_components/showcase";
import { ComboboxDemo } from "@/app/_components/combobox-demo";

export function ComboboxDoc() {
  return (
    <Showcase
      id="combobox"
      name="Combobox"
      description="Apple HIG combobox — autocomplete input dengan list saran. Built on base-ui combobox + Input Group shell."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/combobox.json"
      code={`import { Combobox, ComboboxInput, ComboboxContent, ComboboxList, ComboboxItem, ComboboxEmpty } from "@/components/ui/combobox"

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"] as const

<Combobox items={frameworks}>
  <ComboboxInput placeholder="Select a framework..." />
  <ComboboxContent>
    <ComboboxEmpty>No framework found.</ComboboxEmpty>
    <ComboboxList>
      {(item) => (
        <ComboboxItem key={item} value={item}>
          {item}
        </ComboboxItem>
      )}
    </ComboboxList>
  </ComboboxContent>
</Combobox>`}
      preview={<ComboboxDemo />}
    />
  );
}
