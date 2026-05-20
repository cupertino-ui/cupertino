import { Showcase } from "@/app/_components/showcase";
import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonDoc() {
  return (
    <Showcase
      id="skeleton"
      name="Skeleton"
      description="rounded-xl muted pulse — composable loading placeholder that matches your content shape."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/skeleton.json"
      code={`import { Skeleton } from "@/components/ui/skeleton"

<Skeleton className="h-10 w-40" />
<Skeleton className="h-4 w-full" />`}
      preview={
        <div className="flex w-full max-w-xs flex-col gap-3">
          <div className="flex items-center gap-3">
            <Skeleton className="size-10 rounded-full" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-3 w-1/2" />
            </div>
          </div>
          <Skeleton className="h-32 w-full rounded-2xl" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      }
    />
  );
}
