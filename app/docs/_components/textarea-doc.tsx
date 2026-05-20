import { Showcase } from "@/app/_components/showcase";
import { Textarea } from "@/components/ui/textarea";

export function TextareaDoc() {
  return (
    <Showcase
      id="textarea"
      name="Textarea"
      description="rounded-xl, muted fill, 15pt with relaxed line-height. Focus clears background fill for readability."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/textarea.json"
      code={`import { Textarea } from "@/components/ui/textarea"

<Textarea placeholder="Write a message…" />`}
      preview={
        <div className="flex w-full max-w-sm flex-col gap-3">
          <Textarea placeholder="Write a message…" />
          <Textarea placeholder="Disabled" disabled />
        </div>
      }
    />
  );
}
