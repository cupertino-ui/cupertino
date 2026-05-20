"use client"

import * as React from "react"
import * as ResizablePrimitive from "react-resizable-panels"

import { cn } from "@/lib/utils"

function ResizablePanelGroup({
  className,
  ...props
}: ResizablePrimitive.GroupProps) {
  return (
    <ResizablePrimitive.Group
      data-slot="resizable-panel-group"
      className={cn(
        "flex h-full w-full aria-[orientation=vertical]:flex-col",
        className
      )}
      {...props}
    />
  )
}

function ResizablePanel({ ...props }: ResizablePrimitive.PanelProps) {
  return <ResizablePrimitive.Panel data-slot="resizable-panel" {...props} />
}

function ResizableHandle({
  withHandle,
  className,
  ...props
}: ResizablePrimitive.SeparatorProps & {
  withHandle?: boolean
}) {
  return (
    <ResizablePrimitive.Separator
      data-slot="resizable-handle"
      className={cn(
        "group/resizable relative flex w-px items-center justify-center bg-border/60 transition-all duration-200 hover:w-1 hover:bg-border focus-visible:w-1 focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none data-[resize-handle-state=drag]:w-1 data-[resize-handle-state=drag]:bg-ring/50 aria-[orientation=horizontal]:h-px aria-[orientation=horizontal]:w-full aria-[orientation=horizontal]:hover:h-1 aria-[orientation=horizontal]:focus-visible:h-1 aria-[orientation=horizontal]:data-[resize-handle-state=drag]:h-1 [&[aria-orientation=horizontal]>div]:rotate-90",
        className
      )}
      {...props}
    >
      {withHandle && (
        <div className="z-10 flex h-6 w-1 shrink-0 rounded-full bg-border transition-colors duration-200 group-hover/resizable:bg-foreground/30 group-data-[resize-handle-state=drag]/resizable:bg-ring/50" />
      )}
    </ResizablePrimitive.Separator>
  )
}

export { ResizableHandle, ResizablePanel, ResizablePanelGroup }
