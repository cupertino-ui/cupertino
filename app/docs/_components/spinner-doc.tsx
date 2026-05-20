import { Showcase } from "@/app/_components/showcase";
import { Spinner } from "@/components/ui/spinner";

export function SpinnerDoc() {
  return (
    <Showcase
      id="spinner"
      name="Spinner"
      description="Apple HIG activity indicator — ring arc animation matching iOS. sm / default / lg sizes. Use text color to tint."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/spinner.json"
      code={`import { Spinner } from "@/components/ui/spinner"

<Spinner />
<Spinner size="sm" />
<Spinner size="lg" className="text-primary" />`}
      preview={
        <div className="flex items-center gap-6">
          <Spinner size="sm" className="text-muted-foreground" />
          <Spinner className="text-muted-foreground" />
          <Spinner size="lg" className="text-muted-foreground" />
          <Spinner className="text-primary" />
          <Spinner className="text-destructive" />
        </div>
      }
    />
  );
}
