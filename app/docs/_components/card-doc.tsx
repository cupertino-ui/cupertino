import { Showcase } from "@/app/_components/showcase";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

export function CardDoc() {
  return (
    <Showcase
      id="card"
      name="Card"
      description="rounded-2xl, soft shadow, subtle ring. All shadcn composition slots (Header, Title, Description, Content, Action, Footer) are preserved."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/card.json"
      code={`import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Notifications</CardTitle>
  </CardHeader>
  <CardContent>…</CardContent>
</Card>`}
      preview={
        <Card className="mx-auto w-full max-w-md">
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>Choose how you receive updates.</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <span className="text-[15px]">Push notifications</span>
            <Switch defaultChecked />
          </CardContent>
          <CardFooter className="justify-end">
            <Button size="sm">Save</Button>
          </CardFooter>
        </Card>
      }
    />
  );
}
