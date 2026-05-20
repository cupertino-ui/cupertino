import { Showcase } from "@/app/_components/showcase";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";

export function NativeSelectDoc() {
  return (
    <Showcase
      id="native-select"
      name="Native Select"
      description="Apple HIG native select — uses the platform's native dropdown for accessibility, styled to match Input. Best for mobile and form-heavy contexts."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/native-select.json"
      code={`import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"

<NativeSelect>
  <NativeSelectOption value="apple">Apple</NativeSelectOption>
  <NativeSelectOption value="banana">Banana</NativeSelectOption>
  <NativeSelectOption value="cherry">Cherry</NativeSelectOption>
</NativeSelect>`}
      preview={
        <div className="mx-auto w-full max-w-sm">
          <NativeSelect defaultValue="banana" className="w-full">
            <NativeSelectOption value="apple">Apple</NativeSelectOption>
            <NativeSelectOption value="banana">Banana</NativeSelectOption>
            <NativeSelectOption value="cherry">Cherry</NativeSelectOption>
            <NativeSelectOption value="durian">Durian</NativeSelectOption>
          </NativeSelect>
        </div>
      }
    />
  );
}
