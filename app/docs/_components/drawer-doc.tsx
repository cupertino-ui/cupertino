import { Showcase } from "@/app/_components/showcase";
import { DrawerDemo } from "@/app/_components/drawer-demo";

export function DrawerDoc() {
  return (
    <Showcase
      id="drawer"
      name="Drawer"
      description="Apple HIG bottom sheet — Vaul-based, rounded-t-3xl with iOS grabber, blur overlay, same surface as sheet."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/drawer.json"
      code={`import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"

<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">Open Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Share with Friends</DrawerTitle>
      <DrawerDescription>Choose how you'd like to share.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <DrawerClose asChild>
        <Button variant="secondary">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`}
      preview={<DrawerDemo />}
    />
  );
}
