import { Showcase } from "@/app/_components/showcase";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyAction,
  EmptyDescription,
  EmptyIcon,
  EmptyTitle,
} from "@/components/ui/empty";

export function EmptyDoc() {
  return (
    <Showcase
      id="empty"
      name="Empty"
      description="Apple HIG empty-state — large muted icon in rounded-full container, 15pt semibold title, 13pt muted description, action slot."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/empty.json"
      code={`import { Empty, EmptyIcon, EmptyTitle, EmptyDescription, EmptyAction } from "@/components/ui/empty"
import { Button } from "@/components/ui/button"
import { InboxIcon } from "lucide-react"

<Empty>
  <EmptyIcon><InboxIcon /></EmptyIcon>
  <EmptyTitle>No messages</EmptyTitle>
  <EmptyDescription>When you receive messages, they'll appear here.</EmptyDescription>
  <EmptyAction><Button>Compose</Button></EmptyAction>
</Empty>`}
      preview={
        <Empty className="py-8">
          <EmptyIcon>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
              <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
            </svg>
          </EmptyIcon>
          <EmptyTitle>No messages</EmptyTitle>
          <EmptyDescription>
            When you receive messages, they&apos;ll appear here.
          </EmptyDescription>
          <EmptyAction>
            <Button>Compose</Button>
          </EmptyAction>
        </Empty>
      }
    />
  );
}
