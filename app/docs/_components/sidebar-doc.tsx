import { Showcase } from "@/app/_components/showcase";
import { SidebarDemo } from "@/app/_components/sidebar-demo";

export function SidebarDoc() {
  return (
    <Showcase
      id="sidebar"
      name="Sidebar"
      description="Apple HIG sidebar — collapsible app shell with grouped items, search slot, mobile sheet variant. Large API; install the component for the full surface."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/sidebar.json"
      code={`import { SidebarProvider, Sidebar, SidebarContent, SidebarGroup, SidebarMenu, SidebarMenuButton } from "@/components/ui/sidebar"
import { MailIcon, BellIcon } from "lucide-react"

<SidebarProvider>
  <Sidebar>
    <SidebarContent>
      <SidebarGroup>
        <SidebarMenu>
          <SidebarMenuButton><MailIcon /> Inbox</SidebarMenuButton>
          <SidebarMenuButton><BellIcon /> Notifications</SidebarMenuButton>
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
</SidebarProvider>`}
      preview={<SidebarDemo />}
    />
  );
}
