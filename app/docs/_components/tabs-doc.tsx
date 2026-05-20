import { Showcase } from "@/app/_components/showcase";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TabsDoc() {
  return (
    <Showcase
      id="tabs"
      name="Tabs"
      description="iOS Segmented Control by default — pill container with a white selected pill that gains a soft shadow. Use variant='line' for the underline style."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/tabs.json"
      code={`import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="display">Display</TabsTrigger>
  </TabsList>
  <TabsContent value="account">…</TabsContent>
</Tabs>`}
      preview={
        <Tabs defaultValue="account" className="w-full max-w-md">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="display">Display</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="pt-2 text-muted-foreground">
            Manage your account preferences.
          </TabsContent>
          <TabsContent value="display" className="pt-2 text-muted-foreground">
            Choose appearance and accessibility settings.
          </TabsContent>
          <TabsContent
            value="notifications"
            className="pt-2 text-muted-foreground"
          >
            Configure push, email, and in-app alerts.
          </TabsContent>
        </Tabs>
      }
    />
  );
}
