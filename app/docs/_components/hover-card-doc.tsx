import { Showcase } from "@/app/_components/showcase";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export function HoverCardDoc() {
  return (
    <Showcase
      id="hover-card"
      name="Hover Card"
      description="rounded-2xl popover surface, 13pt text, shadow-xl. Appears on hover after a short delay — ideal for user profiles and rich previews."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/hover-card.json"
      code={`import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card"

<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="link">@shadcn</Button>
  </HoverCardTrigger>
  <HoverCardContent>
    <p>Creator of shadcn/ui.</p>
  </HoverCardContent>
</HoverCard>`}
      preview={
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link">@shadcn</Button>
          </HoverCardTrigger>
          <HoverCardContent>
            <div className="flex gap-3">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="text-[14px] font-semibold tracking-tight">
                  @shadcn
                </p>
                <p className="text-[12px] text-muted-foreground leading-relaxed">
                  Creator of shadcn/ui. Building in public.
                </p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      }
    />
  );
}
