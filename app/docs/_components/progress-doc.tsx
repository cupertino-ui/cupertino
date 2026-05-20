import { Showcase } from "@/app/_components/showcase";
import { Progress } from "@/components/ui/progress";

export function ProgressDoc() {
  return (
    <Showcase
      id="progress"
      name="Progress"
      description="8pt rounded-full track with primary fill. Smooth 300ms ease-out animation as value changes."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/progress.json"
      code={`import { Progress } from "@/components/ui/progress"

<Progress value={60} />`}
      preview={
        <div className="flex w-full max-w-sm flex-col gap-4">
          <Progress value={20} />
          <Progress value={50} />
          <Progress value={80} />
          <Progress value={100} />
        </div>
      }
    />
  );
}
