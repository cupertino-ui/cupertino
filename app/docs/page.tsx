import { Showcase } from "@/app/_components/showcase";
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
import { Input } from "@/components/ui/input";
import { Kbd } from "@/components/ui/kbd";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InstallCommand } from "@/app/_components/install-command";

export default function DocsPage() {
  return (
    <>
      <Introduction />
      <Installation />
      <Philosophy />

      <h2
        id="components"
        className="mt-20 scroll-mt-20 text-[13px] font-semibold uppercase tracking-wider text-muted-foreground"
      >
        Components
      </h2>
      <div className="mt-6 space-y-16">
        <AccordionDoc />
        <AlertDoc />
        <BadgeDoc />
        <ButtonDoc />
        <CardDoc />
        <InputDoc />
        <KbdDoc />
        <LabelDoc />
        <SeparatorDoc />
        <SheetDoc />
        <SwitchDoc />
        <TabsDoc />
        <TooltipDoc />
      </div>

      <OnThisPage />
    </>
  );
}

function Introduction() {
  return (
    <section id="introduction" className="scroll-mt-20">
      <p className="text-[13px] font-medium uppercase tracking-wider text-muted-foreground">
        Introduction
      </p>
      <h1 className="mt-2 text-[36px] font-semibold leading-[1.1] tracking-[-0.02em]">
        Cupertino UI
      </h1>
      <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-muted-foreground">
        A shadcn-compatible component registry, designed after Apple Human
        Interface Guidelines. Each component is a drop-in replacement for its
        shadcn counterpart — same name, same props, same{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13.5px]">
          data-slot
        </code>{" "}
        attributes. Read on for installation, philosophy, and the component
        catalog.
      </p>
    </section>
  );
}

function Installation() {
  return (
    <section id="installation" className="mt-16 scroll-mt-20">
      <h2 className="text-[22px] font-semibold tracking-tight">Installation</h2>
      <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
        Install any Cupertino component into an existing shadcn project. The
        component is written to{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[12.5px]">
          components/ui/&lt;name&gt;.tsx
        </code>
        , replacing the shadcn version (same API, different style).
      </p>
      <div className="mt-5">
        <InstallCommand />
      </div>
      <p className="mt-4 text-[13.5px] text-muted-foreground">
        Don&rsquo;t have shadcn set up yet? Follow the{" "}
        <a
          href="https://ui.shadcn.com/docs/installation"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground underline underline-offset-4 hover:no-underline"
        >
          shadcn installation guide
        </a>{" "}
        first.
      </p>
    </section>
  );
}

function Philosophy() {
  const pillars = [
    {
      title: "Clarity",
      body: "Generous spacing, deliberate type, confident colour.",
    },
    {
      title: "Deference",
      body: "Subtle chrome. Content leads, UI recedes.",
    },
    {
      title: "Depth",
      body: "Layered surfaces. Motion telegraphs hierarchy.",
    },
    {
      title: "Consistency",
      body: "Same shadcn API. Same data-slot. Drop-in.",
    },
  ];
  return (
    <section id="philosophy" className="mt-16 scroll-mt-20">
      <h2 className="text-[22px] font-semibold tracking-tight">Philosophy</h2>
      <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
        Apple&rsquo;s four design principles, applied to a shadcn registry.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {pillars.map((p) => (
          <Card key={p.title} className="gap-1 py-4">
            <CardHeader className="px-4">
              <CardTitle className="text-[14px] font-semibold">
                {p.title}
              </CardTitle>
              <CardDescription className="mt-1 text-[13.5px] leading-relaxed">
                {p.body}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────── Components ─────────────────────── */

function AccordionDoc() {
  return (
    <Showcase
      id="accordion"
      name="Accordion"
      description="iOS grouped-list style — 44pt touch targets, smooth chevron rotation, subtle separator. Drop-in replacement for shadcn Accordion."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/accordion.json"
      code={`import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
  </AccordionItem>
</Accordion>`}
      preview={
        <Accordion type="single" collapsible className="w-full max-w-md">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It follows Apple Human Interface Guidelines — 44pt touch
              targets and smooth chevron animation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It uses CSS animations with a 200ms ease-out timing.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      }
    />
  );
}

function AlertDoc() {
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

function BadgeDoc() {
  return (
    <Showcase
      id="badge"
      name="Badge"
      description="Full pill, semibold, tracking-tight. The destructive variant uses Apple system red — designed for notification counts."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/badge.json"
      code={`import { Badge } from "@/components/ui/badge"

<Badge>New</Badge>
<Badge variant="destructive">3</Badge>`}
      preview={
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">3</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="ghost">Ghost</Badge>
        </div>
      }
    />
  );
}

function ButtonDoc() {
  return (
    <Showcase
      id="button"
      name="Button"
      description="Capsule shape, 44pt touch target, scale-press feedback. Six variants — default, outline, secondary, ghost, destructive, link — matching shadcn one-for-one."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/button.json"
      code={`import { Button } from "@/components/ui/button"

<Button>Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="destructive">Delete</Button>`}
      preview={
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button>Default</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
      }
    />
  );
}

function CardDoc() {
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

function InputDoc() {
  return (
    <Showcase
      id="input"
      name="Input"
      description="44pt height, rounded-xl, filled background that turns crisp white on focus. Pairs naturally with Label."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/input.json"
      code={`import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

<Label htmlFor="email">Email</Label>
<Input id="email" type="email" placeholder="name@example.com" />`}
      preview={
        <div className="mx-auto flex w-full max-w-sm flex-col gap-2.5">
          <Label htmlFor="docs-email">Email</Label>
          <Input
            id="docs-email"
            type="email"
            placeholder="name@example.com"
          />
        </div>
      }
    />
  );
}

function KbdDoc() {
  return (
    <Showcase
      id="kbd"
      name="Kbd"
      description="Keyboard shortcut indicator. Mono badge with subtle border and inset shadow — inline-flex by default so it sits naturally beside text."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/kbd.json"
      code={`import { Kbd } from "@/components/ui/kbd"

<span className="text-sm">
  Press <Kbd>⌘</Kbd> <Kbd>K</Kbd> to search.
</span>`}
      preview={
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 text-[15px]">
          <span className="flex items-center gap-1.5">
            Search <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </span>
          <span className="ml-6 flex items-center gap-1.5">
            Save <Kbd>⌘</Kbd>
            <Kbd>S</Kbd>
          </span>
          <span className="ml-6 flex items-center gap-1.5">
            Quit <Kbd>⌘</Kbd>
            <Kbd>Q</Kbd>
          </span>
        </div>
      }
    />
  );
}

function LabelDoc() {
  return (
    <Showcase
      id="label"
      name="Label"
      description="15pt medium weight, tracking-tight. Built on Radix Label, so it forwards htmlFor and supports peer-disabled."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/label.json"
      code={`import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

<div className="flex items-center gap-3">
  <Switch id="dark-mode" />
  <Label htmlFor="dark-mode">Dark mode</Label>
</div>`}
      preview={
        <div className="flex items-center gap-3">
          <Switch id="docs-dark-mode" />
          <Label htmlFor="docs-dark-mode">Dark mode</Label>
        </div>
      }
    />
  );
}

function SeparatorDoc() {
  return (
    <Showcase
      id="separator"
      name="Separator"
      description="Subtle horizontal or vertical rule at 70% border opacity. Use it to divide list items, sections, and inline metadata."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/separator.json"
      code={`import { Separator } from "@/components/ui/separator"

<div>
  <h4>Account</h4>
  <p>Manage your settings.</p>
  <Separator className="my-4" />
  <p>Sign out</p>
</div>`}
      preview={
        <div className="mx-auto w-full max-w-sm">
          <div className="flex flex-col">
            <div className="text-[15px] font-semibold">Account</div>
            <div className="text-[13.5px] text-muted-foreground">
              Manage your settings.
            </div>
          </div>
          <Separator className="my-4" />
          <div className="flex h-5 items-center gap-3 text-[13.5px]">
            <span>Profile</span>
            <Separator orientation="vertical" />
            <span>Billing</span>
            <Separator orientation="vertical" />
            <span>Sign out</span>
          </div>
        </div>
      }
    />
  );
}

function SheetDoc() {
  return (
    <Showcase
      id="sheet"
      name="Sheet"
      description="Slide-over surface — right by default; use side='bottom' for iOS-style modal with a grabber indicator. Rounded-3xl on top/bottom variants."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/sheet.json"
      code={`import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

<Sheet>
  <SheetTrigger asChild>
    <Button>Open sheet</Button>
  </SheetTrigger>
  <SheetContent side="bottom">
    <SheetHeader>
      <SheetTitle>Edit profile</SheetTitle>
      <SheetDescription>Update your details.</SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`}
      preview={
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open bottom sheet</Button>
            </SheetTrigger>
            <SheetContent side="bottom">
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Update your name and email. Changes save automatically.
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-3 px-5">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="sheet-name">Name</Label>
                  <Input id="sheet-name" defaultValue="Amar" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="sheet-email">Email</Label>
                  <Input
                    id="sheet-email"
                    type="email"
                    defaultValue="amar@example.com"
                  />
                </div>
              </div>
              <SheetFooter>
                <Button>Save changes</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost">Open right drawer</Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>Side navigation example.</SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      }
    />
  );
}

function SwitchDoc() {
  return (
    <Showcase
      id="switch"
      name="Switch"
      description="iOS exact dimensions — 51×31pt — with a thumb shadow and 200ms transition. Use size='sm' for compact contexts (40×24pt)."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/switch.json"
      code={`import { Switch } from "@/components/ui/switch"

<Switch defaultChecked />
<Switch size="sm" />`}
      preview={
        <div className="flex flex-wrap items-center justify-center gap-8">
          <LabeledSwitch label="On" defaultChecked />
          <LabeledSwitch label="Off" />
          <LabeledSwitch label="Small" size="sm" defaultChecked />
          <LabeledSwitch label="Disabled" disabled defaultChecked />
        </div>
      }
    />
  );
}

function TabsDoc() {
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

function TooltipDoc() {
  return (
    <Showcase
      id="tooltip"
      name="Tooltip"
      description="Dark rounded-lg pill with 12pt medium label and soft slide-in (200ms). Wrap any trigger and provide content."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/tooltip.json"
      code={`import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">Hover me</Button>
  </TooltipTrigger>
  <TooltipContent>Add to library</TooltipContent>
</Tooltip>`}
      preview={
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Top</Button>
            </TooltipTrigger>
            <TooltipContent>Tooltip above</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Bottom</Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">Tooltip below</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Right</Button>
            </TooltipTrigger>
            <TooltipContent side="right">Tooltip right</TooltipContent>
          </Tooltip>
        </div>
      }
    />
  );
}

function LabeledSwitch({
  label,
  ...props
}: React.ComponentProps<typeof Switch> & { label: string }) {
  return (
    <label className="flex items-center gap-3 text-[13px] text-muted-foreground">
      <Switch {...props} />
      <span>{label}</span>
    </label>
  );
}

function OnThisPage() {
  const items = [
    { label: "Introduction", href: "#introduction" },
    { label: "Installation", href: "#installation" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Accordion", href: "#accordion" },
    { label: "Alert", href: "#alert" },
    { label: "Badge", href: "#badge" },
    { label: "Button", href: "#button" },
    { label: "Card", href: "#card" },
    { label: "Input", href: "#input" },
    { label: "Kbd", href: "#kbd" },
    { label: "Label", href: "#label" },
    { label: "Separator", href: "#separator" },
    { label: "Sheet", href: "#sheet" },
    { label: "Switch", href: "#switch" },
    { label: "Tabs", href: "#tabs" },
    { label: "Tooltip", href: "#tooltip" },
  ];
  return (
    <aside className="fixed top-24 right-8 hidden w-52 xl:block">
      <div className="text-[12px] font-semibold text-foreground">
        On this page
      </div>
      <ul className="mt-3 space-y-1.5 border-l border-border pl-3 text-[12.5px]">
        {items.map((i) => (
          <li key={i.href}>
            <a
              href={i.href}
              className="block text-muted-foreground transition-colors hover:text-foreground"
            >
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
