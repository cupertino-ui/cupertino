import { Showcase } from "@/app/_components/showcase";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";

export function AlertDoc() {
  return (
    <Showcase
      id="alert"
      name="Alert"
      description="rounded-2xl, muted fill. Destructive variant uses Apple system red. Supports leading icon, title, description, and action slot."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/alert.json"
      code={`import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"

<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>You can add components to your app using the CLI.</AlertDescription>
</Alert>`}
      preview={
        <div className="flex w-full max-w-md flex-col gap-3">
          <Alert>
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components to your app using the CLI.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Your session has expired. Please sign in again.
            </AlertDescription>
          </Alert>
        </div>
      }
    />
  );
}
