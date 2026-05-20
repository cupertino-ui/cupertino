import { Badge } from "@/components/ui/badge";
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

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-12 px-6 py-20">
      <header className="flex flex-col gap-3">
        <h1 className="text-4xl font-semibold tracking-tight">Cupertino UI</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          shadcn-compatible components, styled after Apple Human Interface
          Guidelines.
        </p>
      </header>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-medium text-zinc-500">Install</h2>
        <pre className="overflow-x-auto rounded-xl bg-zinc-100 p-4 text-sm dark:bg-zinc-900">
          <code>
            npx shadcn@latest add https://cupertino-ui.vercel.app/r/button.json
          </code>
        </pre>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-sm font-medium text-zinc-500">Button</h2>
        <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
          <Button>Default</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-sm font-medium text-zinc-500">Badge</h2>
        <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">3</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="ghost">Ghost</Badge>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-sm font-medium text-zinc-500">Switch</h2>
        <div className="flex flex-wrap items-center gap-6 rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
          <Switch defaultChecked />
          <Switch />
          <Switch size="sm" defaultChecked />
          <Switch size="sm" />
          <Switch disabled defaultChecked />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-sm font-medium text-zinc-500">Card</h2>
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>
              Choose how you receive updates from the app.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <span>Push notifications</span>
            <Switch defaultChecked />
          </CardContent>
          <CardFooter className="justify-end">
            <Button size="sm">Save</Button>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}
