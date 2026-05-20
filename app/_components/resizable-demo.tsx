"use client"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export function ResizableDemo() {
  return (
    <div className="w-full max-w-md">
      <ResizablePanelGroup
        orientation="horizontal"
        className="min-h-[120px] rounded-2xl border border-border/60"
      >
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-4 text-[13px] text-muted-foreground">
            Left panel
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-4 text-[13px] text-muted-foreground">
            Right panel
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
