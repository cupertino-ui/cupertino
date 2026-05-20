import { Showcase } from "@/app/_components/showcase";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function NavigationMenuDoc() {
  return (
    <Showcase
      id="navigation-menu"
      name="Navigation Menu"
      description="Horizontal nav with mega-menu support — 13.5pt tight-tracking triggers, rounded-lg hover, rounded-2xl dropdown, no underline."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/navigation-menu.json"
      code={`import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Products</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-1 p-2 w-[280px]">
          <li><NavigationMenuLink href="#">Mac</NavigationMenuLink></li>
          <li><NavigationMenuLink href="#">iPhone</NavigationMenuLink></li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>Support</NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`}
      preview={
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-1 p-2 w-[240px]">
                  {["Mac", "iPhone", "iPad", "Apple Watch"].map((item) => (
                    <li key={item}>
                      <NavigationMenuLink
                        href="#"
                        className="block rounded-xl px-3 py-2 text-[13.5px] font-medium hover:bg-muted"
                      >
                        {item}
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Developers</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-1 p-2 w-[240px]">
                  {["Documentation", "Downloads", "Forums", "Videos"].map(
                    (item) => (
                      <li key={item}>
                        <NavigationMenuLink
                          href="#"
                          className="block rounded-xl px-3 py-2 text-[13.5px] font-medium hover:bg-muted"
                        >
                          {item}
                        </NavigationMenuLink>
                      </li>
                    )
                  )}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                className={navigationMenuTriggerStyle()}
              >
                Support
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      }
    />
  );
}
