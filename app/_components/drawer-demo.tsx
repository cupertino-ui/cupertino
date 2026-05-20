"use client"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"

export function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Share with Friends</DrawerTitle>
          <DrawerDescription>
            Choose how you&apos;d like to share this item.
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-5 py-2 flex flex-col gap-2">
          {["AirDrop", "Messages", "Mail", "Copy Link"].map((item) => (
            <button
              key={item}
              className="flex h-11 items-center rounded-xl px-4 text-[15px] font-medium hover:bg-muted transition-colors text-left"
            >
              {item}
            </button>
          ))}
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="secondary" className="w-full">
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
