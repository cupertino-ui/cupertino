import { Showcase } from "@/app/_components/showcase";
import { Badge } from "@/components/ui/badge";

export function BadgeDoc() {
  return (
    <Showcase
      id="badge"
      name="Badge"
      description="Full pill, semibold, tracking-tight. The destructive variant uses Apple system red — designed for notification counts."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/badge.json"
      code={`import { Badge } from "@/components/ui/badge"

<Badge>New</Badge>
<Badge variant="destructive">3</Badge>`}
      preview={
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">3</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="ghost">Ghost</Badge>
        </div>
      }
    />
  );
}
