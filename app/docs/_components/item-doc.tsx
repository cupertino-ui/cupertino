import { Showcase } from "@/app/_components/showcase";
import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { BellIcon, ChevronRightIcon, StarIcon, UserIcon } from "lucide-react";

export function ItemDoc() {
  return (
    <Showcase
      id="item"
      name="Item"
      description="Apple HIG list row — leading media slot (icon or image), title + description content, trailing actions, three sizes."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/item.json"
      code={`import { Item, ItemMedia, ItemContent, ItemTitle, ItemDescription, ItemActions, ItemGroup } from "@/components/ui/item"
import { Button } from "@/components/ui/button"
import { BellIcon } from "lucide-react"

<ItemGroup>
  <Item variant="outline">
    <ItemMedia variant="icon"><BellIcon /></ItemMedia>
    <ItemContent>
      <ItemTitle>Notifications</ItemTitle>
      <ItemDescription>Get notified when something happens.</ItemDescription>
    </ItemContent>
    <ItemActions>
      <Button size="sm" variant="outline">Manage</Button>
    </ItemActions>
  </Item>
</ItemGroup>`}
      preview={
        <ItemGroup className="mx-auto w-full max-w-md">
          <Item variant="outline">
            <ItemMedia variant="icon">
              <BellIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Notifications</ItemTitle>
              <ItemDescription>
                Get notified when something happens.
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button size="sm" variant="outline">
                Manage
              </Button>
            </ItemActions>
          </Item>
          <Item variant="outline">
            <ItemMedia variant="icon">
              <StarIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Favorites</ItemTitle>
              <ItemDescription>
                Quick access to items you&apos;ve starred.
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <ChevronRightIcon className="size-4 text-muted-foreground" />
            </ItemActions>
          </Item>
          <Item variant="muted" size="sm">
            <ItemMedia variant="icon">
              <UserIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Profile</ItemTitle>
            </ItemContent>
            <ItemActions>
              <ChevronRightIcon className="size-4 text-muted-foreground" />
            </ItemActions>
          </Item>
        </ItemGroup>
      }
    />
  );
}
