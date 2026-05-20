import { Showcase } from "@/app/_components/showcase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function SheetDoc() {
  return (
    <Showcase
      id="sheet"
      name="Sheet"
      description="Slide-over surface — right by default; use side='bottom' for iOS-style modal with a grabber indicator. Rounded-3xl on top/bottom variants."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/sheet.json"
      code={`import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

<Sheet>
  <SheetTrigger asChild>
    <Button>Open sheet</Button>
  </SheetTrigger>
  <SheetContent side="bottom">
    <SheetHeader>
      <SheetTitle>Edit profile</SheetTitle>
      <SheetDescription>Update your details.</SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`}
      preview={
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open bottom sheet</Button>
            </SheetTrigger>
            <SheetContent side="bottom">
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Update your name and email. Changes save automatically.
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-3 px-5">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="sheet-name">Name</Label>
                  <Input id="sheet-name" defaultValue="Amar" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="sheet-email">Email</Label>
                  <Input
                    id="sheet-email"
                    type="email"
                    defaultValue="amar@example.com"
                  />
                </div>
              </div>
              <SheetFooter>
                <Button>Save changes</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost">Open right drawer</Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>Side navigation example.</SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      }
    />
  );
}
