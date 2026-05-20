import * as React from "react"

import { cn } from "@/lib/utils"

function Kbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        "inline-flex h-5 min-w-5 select-none items-center justify-center rounded-md border border-border bg-muted/60 px-1.5 font-mono text-[10.5px] font-medium text-muted-foreground shadow-[0_1px_0_var(--color-border)]",
        className
      )}
      {...props}
    />
  )
}

export { Kbd }
