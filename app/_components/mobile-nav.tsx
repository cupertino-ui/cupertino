"use client";

import { DocsNavList } from "@/app/_components/site-sidebar";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon-sm"
          className="md:hidden"
          aria-label="Open docs menu"
        >
          <MenuIcon className="size-4" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        showGrabber={false}
        className="w-[85vw] max-w-xs px-0"
      >
        <SheetHeader className="border-b border-border pb-3">
          <SheetTitle>Documentation</SheetTitle>
          <SheetDescription>Navigate sections quickly.</SheetDescription>
        </SheetHeader>
        <div className="h-[calc(100vh-7.5rem)] overflow-y-auto px-4 py-4">
          <DocsNavList closeOnSelect />
        </div>
      </SheetContent>
    </Sheet>
  );
}
