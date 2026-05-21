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
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
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
import { SonnerDemo } from "@/app/_components/sonner-demo";
import { CommandDemo } from "@/app/_components/command-demo";
import { DrawerDemo } from "@/app/_components/drawer-demo";
import { CalendarDemo } from "@/app/_components/calendar-demo";
import { CarouselDemo } from "@/app/_components/carousel-demo";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";
import { SearchIcon, AtSignIcon, UserIcon, BellIcon, StarIcon, ChevronRightIcon, Bookmark } from "lucide-react";
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyInlineCode,
  TypographyLarge,
  TypographyLead,
  TypographyList,
  TypographyMuted,
  TypographyP,
  TypographySmall,
} from "@/components/ui/typography";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ResizableDemo } from "@/app/_components/resizable-demo";
import { ChartDemo } from "@/app/_components/chart-demo";
import { DatePickerDemo } from "@/app/_components/date-picker-demo";
import {
  DirectionProvider,
} from "@/components/ui/direction";
import { SidebarDemo } from "@/app/_components/sidebar-demo";
import { ComboboxDemo } from "@/app/_components/combobox-demo";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Spinner } from "@/components/ui/spinner";
import {
  Empty,
  EmptyAction,
  EmptyDescription,
  EmptyIcon,
  EmptyTitle,
} from "@/components/ui/empty";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function DocsPage() {
  const componentDocs = [
    AccordionDoc,
    AlertDoc,
    AlertDialogDoc,
    AvatarDoc,
    BreadcrumbDoc,
    CheckboxDoc,
    CollapsibleDoc,
    DialogDoc,
    DropdownMenuDoc,
    HoverCardDoc,
    PaginationDoc,
    PopoverDoc,
    ProgressDoc,
    RadioGroupDoc,
    ScrollAreaDoc,
    SelectDoc,
    SkeletonDoc,
    SliderDoc,
    TextareaDoc,
    ToggleDoc,
    ToggleGroupDoc,
    BadgeDoc,
    ButtonDoc,
    CardDoc,
    InputDoc,
    InputGroupDoc,
    KbdDoc,
    LabelDoc,
    SeparatorDoc,
    SheetDoc,
    SwitchDoc,
    TabsDoc,
    TooltipDoc,
    CarouselDoc,
    EmptyDoc,
    SpinnerDoc,
    TableDoc,
    ResizableDoc,
    AspectRatioDoc,
    InputOTPDoc,
    CalendarDoc,
    DrawerDoc,
    NavigationMenuDoc,
    MenubarDoc,
    ContextMenuDoc,
    CommandDoc,
    SonnerDoc,
    ButtonGroupDoc,
    FieldDoc,
    ItemDoc,
    NativeSelectDoc,
    TypographyDoc,
    ComboboxDoc,
    SidebarDoc,
    ChartDoc,
    DirectionDoc,
    DatePickerDoc,
    DataTableDoc,
    ToastDoc,
  ].sort((a, b) => a.name.localeCompare(b.name));

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
        {componentDocs.map((ComponentDoc) => (
          <ComponentDoc key={ComponentDoc.name} />
        ))}
      </div>

      {/* <OnThisPage /> */}
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

function AlertDialogDoc() {
  return (
    <Showcase
      id="alert-dialog"
      name="Alert Dialog"
      description="iOS-native alert dialog — 270px max-width, rounded-3xl, centered header, full-width separator-divided footer buttons."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/alert-dialog.json"
      code={`import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">Delete Account</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Delete Account?</AlertDialogTitle>
      <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction variant="destructive">Delete</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}
      preview={
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">Delete Account</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete Account?</AlertDialogTitle>
              <AlertDialogDescription>
                This will permanently delete your account and all associated
                data. This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction variant="destructive">Delete</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      }
    />
  );
}

function AvatarDoc() {
  return (
    <Showcase
      id="avatar"
      name="Avatar"
      description="Circular, 40pt default. Medium-weight initials fallback. Supports sm/lg sizes, badge overlay, and stacked group."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/avatar.json"
      code={`import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}
      preview={
        <div className="flex flex-wrap items-center justify-center gap-6">
          <Avatar size="sm">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <AvatarGroup>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>MK</AvatarFallback>
            </Avatar>
          </AvatarGroup>
        </div>
      }
    />
  );
}

function BreadcrumbDoc() {
  return (
    <Showcase
      id="breadcrumb"
      name="Breadcrumb"
      description="13pt navigation trail — chevron separator, pill hover on links, current page in medium weight."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/breadcrumb.json"
      code={`import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbPage>Settings</BreadcrumbPage></BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
      preview={
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbEllipsis />
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      }
    />
  );
}

function CheckboxDoc() {
  return (
    <Showcase
      id="checkbox"
      name="Checkbox"
      description="22pt touch-friendly, 6px radius, bold checkmark. Scale-press feedback with 200ms transition. Primary fill when checked."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/checkbox.json"
      code={`import { Checkbox } from "@/components/ui/checkbox"

<Checkbox />
<Checkbox defaultChecked />`}
      preview={
        <div className="flex flex-wrap items-center justify-center gap-8">
          <label className="flex items-center gap-2.5 text-[15px]">
            <Checkbox />
            <span>Unchecked</span>
          </label>
          <label className="flex items-center gap-2.5 text-[15px]">
            <Checkbox defaultChecked />
            <span>Checked</span>
          </label>
          <label className="flex items-center gap-2.5 text-[15px] opacity-50">
            <Checkbox disabled />
            <span>Disabled</span>
          </label>
        </div>
      }
    />
  );
}

function CollapsibleDoc() {
  return (
    <Showcase
      id="collapsible"
      name="Collapsible"
      description="Headless expand/collapse primitive. Wire any trigger and content — pair with Button and the accordion pattern for a HIG feel."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/collapsible.json"
      code={`import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { ChevronDownIcon } from "lucide-react"

<Collapsible>
  <CollapsibleTrigger className="group flex w-full items-center justify-between">
    <span>Repositories</span>
    <ChevronDownIcon className="size-4 transition-transform group-data-[state=open]:rotate-180" />
  </CollapsibleTrigger>
  <CollapsibleContent>
    Hidden content
  </CollapsibleContent>
</Collapsible>`}
      preview={
        <Collapsible className="w-full max-w-xs space-y-2">
          <CollapsibleTrigger className="group/collapsible flex w-full items-center justify-between py-1.5 text-[15px] font-medium tracking-tight text-foreground outline-none transition-colors hover:text-foreground/80 focus-visible:rounded-md focus-visible:ring-3 focus-visible:ring-ring/50">
            <span>Repositories</span>
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4 text-muted-foreground transition-transform duration-200 ease-out group-data-[state=open]/collapsible:rotate-180"
            >
              <path d="M4 6l4 4 4-4" />
            </svg>
            <span className="sr-only">Toggle</span>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="space-y-2 pt-1">
              <div className="rounded-xl border border-border px-4 py-3 text-[13px] text-muted-foreground">
                @radix-ui/react-collapsible
              </div>
              <div className="rounded-xl border border-border px-4 py-3 text-[13px] text-muted-foreground">
                @radix-ui/react-dialog
              </div>
              <div className="rounded-xl border border-border px-4 py-3 text-[13px] text-muted-foreground">
                @radix-ui/react-dropdown-menu
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      }
    />
  );
}

function DialogDoc() {
  return (
    <Showcase
      id="dialog"
      name="Dialog"
      description="rounded-3xl surface, blur backdrop, 17pt semibold title. X close button top-right. Optional footer row."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/dialog.json"
      code={`import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

<Dialog>
  <DialogTrigger asChild><Button>Open</Button></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>Make changes to your profile here.</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button>Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
      preview={
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-3 py-2">
              <Input placeholder="Display name" />
              <Input placeholder="Email address" />
            </div>
            <DialogFooter>
              <Button>Save Changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      }
    />
  );
}

function DropdownMenuDoc() {
  return (
    <Showcase
      id="dropdown-menu"
      name="Dropdown Menu"
      description="rounded-2xl surface, 15pt items, uppercase section labels, ⌘ keyboard shortcuts. Full submenu and radio/checkbox support."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/dropdown-menu.json"
      code={`import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

<DropdownMenu>
  <DropdownMenuTrigger asChild><Button variant="outline">Open</Button></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile <DropdownMenuShortcut>⌘P</DropdownMenuShortcut></DropdownMenuItem>
    <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
      preview={
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Open Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                Profile
                <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Settings
                <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              Log out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      }
    />
  );
}

function HoverCardDoc() {
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

function PaginationDoc() {
  return (
    <Showcase
      id="pagination"
      name="Pagination"
      description="Active page uses primary pill, ghosts for others. 44pt touch targets. Previous/Next show text on larger screens."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/pagination.json"
      code={`import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext, PaginationEllipsis } from "@/components/ui/pagination"

<Pagination>
  <PaginationContent>
    <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
    <PaginationItem><PaginationLink href="#" isActive>1</PaginationLink></PaginationItem>
    <PaginationItem><PaginationNext href="#" /></PaginationItem>
  </PaginationContent>
</Pagination>`}
      preview={
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      }
    />
  );
}

function PopoverDoc() {
  return (
    <Showcase
      id="popover"
      name="Popover"
      description="rounded-2xl surface, shadow-xl. Optional title/description slots. Smooth zoom-in on open."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/popover.json"
      code={`import { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverTitle } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

<Popover>
  <PopoverTrigger asChild><Button variant="outline">Open</Button></PopoverTrigger>
  <PopoverContent>
    <PopoverHeader>
      <PopoverTitle>Dimensions</PopoverTitle>
    </PopoverHeader>
    <p>Set the dimensions for the layer.</p>
  </PopoverContent>
</Popover>`}
      preview={
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Open Popover</Button>
          </PopoverTrigger>
          <PopoverContent className="w-72">
            <PopoverHeader>
              <PopoverTitle>Dimensions</PopoverTitle>
              <PopoverDescription>
                Set the dimensions for the layer.
              </PopoverDescription>
            </PopoverHeader>
            <div className="flex flex-col gap-2">
              <Input placeholder="Width" />
              <Input placeholder="Height" />
            </div>
          </PopoverContent>
        </Popover>
      }
    />
  );
}

function ProgressDoc() {
  return (
    <Showcase
      id="progress"
      name="Progress"
      description="8pt rounded-full track with primary fill. Smooth 300ms ease-out animation as value changes."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/progress.json"
      code={`import { Progress } from "@/components/ui/progress"

<Progress value={60} />`}
      preview={
        <div className="flex w-full max-w-sm flex-col gap-4">
          <Progress value={20} />
          <Progress value={50} />
          <Progress value={80} />
          <Progress value={100} />
        </div>
      }
    />
  );
}

function RadioGroupDoc() {
  return (
    <Showcase
      id="radio-group"
      name="Radio Group"
      description="22pt circle, border-2, primary fill with white inner dot when selected. Scale-press feedback and 200ms transition."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/radio-group.json"
      code={`import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

<RadioGroup defaultValue="option-1">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option-1" id="r1" />
    <Label htmlFor="r1">Option One</Label>
  </div>
</RadioGroup>`}
      preview={
        <RadioGroup defaultValue="option-1" className="gap-3">
          {["Option One", "Option Two", "Option Three"].map((opt, i) => (
            <div key={opt} className="flex items-center gap-2.5">
              <RadioGroupItem
                value={`option-${i + 1}`}
                id={`radio-${i + 1}`}
              />
              <Label htmlFor={`radio-${i + 1}`} className="cursor-pointer">
                {opt}
              </Label>
            </div>
          ))}
        </RadioGroup>
      }
    />
  );
}

function ScrollAreaDoc() {
  const tags = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);
  return (
    <Showcase
      id="scroll-area"
      name="Scroll Area"
      description="Thin 8pt scrollbar with rounded-full thumb. Hides until hover on desktop, matches native iOS scroll behavior."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/scroll-area.json"
      code={`import { ScrollArea } from "@/components/ui/scroll-area"

<ScrollArea className="h-48 rounded-2xl border">
  <div className="space-y-0.5 p-2">
    {items.map(item => (
      <div
        key={item}
        className="rounded-lg px-3 py-1.5 text-[13px] hover:bg-muted/60"
      >
        {item}
      </div>
    ))}
  </div>
</ScrollArea>`}
      preview={
        <ScrollArea className="h-48 w-full max-w-xs rounded-2xl border border-border">
          <div className="space-y-0.5 p-2">
            {tags.map((tag) => (
              <div
                key={tag}
                className="rounded-lg px-3 py-1.5 text-[13px] text-foreground hover:bg-muted/60"
              >
                {tag}
              </div>
            ))}
          </div>
        </ScrollArea>
      }
    />
  );
}

function SelectDoc() {
  return (
    <Showcase
      id="select"
      name="Select"
      description="44pt rounded-xl trigger with muted fill. rounded-2xl dropdown, 15pt items, primary checkmark on selected."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/select.json"
      code={`import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
  </SelectContent>
</Select>`}
      preview={
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Select>
            <SelectTrigger className="w-44">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="dark">
            <SelectTrigger className="w-44">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      }
    />
  );
}

function SkeletonDoc() {
  return (
    <Showcase
      id="skeleton"
      name="Skeleton"
      description="rounded-xl muted pulse — composable loading placeholder that matches your content shape."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/skeleton.json"
      code={`import { Skeleton } from "@/components/ui/skeleton"

<Skeleton className="h-10 w-40" />
<Skeleton className="h-4 w-full" />`}
      preview={
        <div className="flex w-full max-w-xs flex-col gap-3">
          <div className="flex items-center gap-3">
            <Skeleton className="size-10 rounded-full" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-3 w-1/2" />
            </div>
          </div>
          <Skeleton className="h-32 w-full rounded-2xl" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      }
    />
  );
}

function SliderDoc() {
  return (
    <Showcase
      id="slider"
      name="Slider"
      description="6pt track, white shadow thumb with scale-on-hover. Primary fill for the active range. Supports range (dual thumb) and vertical."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/slider.json"
      code={`import { Slider } from "@/components/ui/slider"

<Slider defaultValue={[50]} max={100} step={1} />`}
      preview={
        <div className="flex w-full max-w-sm flex-col gap-6">
          <Slider defaultValue={[40]} max={100} step={1} />
          <Slider defaultValue={[25, 75]} max={100} step={1} />
        </div>
      }
    />
  );
}

function TextareaDoc() {
  return (
    <Showcase
      id="textarea"
      name="Textarea"
      description="rounded-xl, muted fill, 15pt with relaxed line-height. Focus clears background fill for readability."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/textarea.json"
      code={`import { Textarea } from "@/components/ui/textarea"

<Textarea placeholder="Write a message…" />`}
      preview={
        <div className="flex w-full max-w-sm flex-col gap-3">
          <Textarea placeholder="Write a message…" />
          <Textarea placeholder="Disabled" disabled />
        </div>
      }
    />
  );
}

function ToggleDoc() {
  return (
    <Showcase
      id="toggle"
      name="Toggle"
      description="44pt, rounded-xl. Primary fill when pressed-on; transparent when off. Default and outline variants, scale-press feedback."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/toggle.json"
      code={`import { Bookmark } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"

<Toggle variant="outline">
  <Bookmark className="group-data-[state=on]/toggle:fill-current" />
  Bookmark
</Toggle>

<Toggle
  variant="outline"
  defaultPressed
  className="data-[state=on]:border-white/20 data-[state=on]:bg-white/15 data-[state=on]:text-white"
>
  <Bookmark className="group-data-[state=on]/toggle:fill-current" />
  Bookmark
</Toggle>`}
      preview={
        <div className="flex flex-wrap items-center justify-center gap-3 rounded-2xl bg-black/95 p-8">
          <Toggle
            variant="outline"
            defaultPressed
            className="data-[state=on]:border-white/20 data-[state=on]:bg-white/15 data-[state=on]:text-white"
          >
            <Bookmark className="group-data-[state=on]/toggle:fill-current" />
            Bookmark
          </Toggle>
        </div>
      }
    />
  );
}

function ToggleGroupDoc() {
  return (
    <Showcase
      id="toggle-group"
      name="Toggle Group"
      description="Composed toggle buttons — spacing=0 creates an iOS segmented-control attachment with shared borders. Supports single and multiple selection."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/toggle-group.json"
      code={`import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

<ToggleGroup type="single" defaultValue="center">
  <ToggleGroupItem value="left">Left</ToggleGroupItem>
  <ToggleGroupItem value="center">Center</ToggleGroupItem>
  <ToggleGroupItem value="right">Right</ToggleGroupItem>
</ToggleGroup>`}
      preview={
        <div className="flex flex-col items-center gap-4">
          <ToggleGroup type="single" defaultValue="center">
            <ToggleGroupItem value="left">Left</ToggleGroupItem>
            <ToggleGroupItem value="center">Center</ToggleGroupItem>
            <ToggleGroupItem value="right">Right</ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup type="multiple" variant="outline" spacing={0}>
            <ToggleGroupItem value="bold">B</ToggleGroupItem>
            <ToggleGroupItem value="italic">I</ToggleGroupItem>
            <ToggleGroupItem value="underline">U</ToggleGroupItem>
          </ToggleGroup>
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

function InputGroupDoc() {
  return (
    <Showcase
      id="input-group"
      name="Input Group"
      description="Apple HIG input group — composes input with leading/trailing addons (icons, text, buttons, kbd). Shared rounded-xl shell, single focus ring across the group."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/input-group.json"
      code={`import { InputGroup, InputGroupInput, InputGroupAddon, InputGroupText, InputGroupButton } from "@/components/ui/input-group"
import { SearchIcon } from "lucide-react"

<InputGroup>
  <InputGroupAddon>
    <SearchIcon />
  </InputGroupAddon>
  <InputGroupInput placeholder="Search..." />
  <InputGroupAddon align="inline-end">
    <Kbd>K</Kbd>
  </InputGroupAddon>
</InputGroup>`}
      preview={
        <div className="mx-auto flex w-full max-w-sm flex-col gap-3">
          <InputGroup>
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
            <InputGroupInput placeholder="Search components" />
            <InputGroupAddon align="inline-end">
              <Kbd>⌘K</Kbd>
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupAddon>
              <AtSignIcon />
            </InputGroupAddon>
            <InputGroupInput placeholder="username" />
            <InputGroupAddon align="inline-end">
              <InputGroupText>@cupertino.dev</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupInput placeholder="Enter URL" />
            <InputGroupAddon align="inline-end">
              <InputGroupButton size="sm" variant="default">
                Apply
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
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

function CarouselDoc() {
  return (
    <Showcase
      id="carousel"
      name="Carousel"
      description="Apple HIG horizontal scroll — rounded-2xl slides, pill dots indicator, smooth Embla snap scroll, secondary ghost nav buttons."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/carousel.json"
      code={`import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, CarouselDots } from "@/components/ui/carousel"

<Carousel opts={{ loop: true }}>
  <CarouselContent>
    <CarouselItem>
      <div className="rounded-2xl bg-muted p-8">Slide 1</div>
    </CarouselItem>
    <CarouselItem>
      <div className="rounded-2xl bg-muted p-8">Slide 2</div>
    </CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
  <CarouselDots />
</Carousel>`}
      preview={<CarouselDemo />}
    />
  );
}

function EmptyDoc() {
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

function SpinnerDoc() {
  return (
    <Showcase
      id="spinner"
      name="Spinner"
      description="Apple HIG activity indicator — ring arc animation matching iOS. sm / default / lg sizes. Use text color to tint."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/spinner.json"
      code={`import { Spinner } from "@/components/ui/spinner"

<Spinner />
<Spinner size="sm" />
<Spinner size="lg" className="text-primary" />`}
      preview={
        <div className="flex items-center gap-6">
          <Spinner size="sm" className="text-muted-foreground" />
          <Spinner className="text-muted-foreground" />
          <Spinner size="lg" className="text-muted-foreground" />
          <Spinner className="text-primary" />
          <Spinner className="text-destructive" />
        </div>
      }
    />
  );
}

function TableDoc() {
  const rows = [
    { name: "MacBook Pro", category: "Mac", price: "$1,999", status: "In Stock" },
    { name: "iPhone 16 Pro", category: "iPhone", price: "$999", status: "In Stock" },
    { name: "iPad Pro", category: "iPad", price: "$1,099", status: "Low Stock" },
    { name: "Apple Watch Ultra", category: "Watch", price: "$799", status: "In Stock" },
  ];
  return (
    <Showcase
      id="table"
      name="Table"
      description="Apple HIG data table — 13px cells, hairline borders, uppercase 11px column headers, hover row bg-muted/40."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/table.json"
      code={`import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table"

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Price</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>MacBook Pro</TableCell>
      <TableCell>$1,999</TableCell>
      <TableCell>In Stock</TableCell>
    </TableRow>
  </TableBody>
</Table>`}
      preview={
        <div className="w-full max-w-lg overflow-hidden rounded-2xl border border-border/60">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell className="font-medium">{row.name}</TableCell>
                  <TableCell className="text-muted-foreground">{row.category}</TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>
                    <span className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${row.status === "Low Stock" ? "bg-amber-500/10 text-amber-600" : "bg-green-500/10 text-green-600"}`}>
                      {row.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      }
    />
  );
}

function ResizableDoc() {
  return (
    <Showcase
      id="resizable"
      name="Resizable"
      description="Split panes with Apple HIG handles — 1px divider that widens to 4px on hover, ring-ring/50 highlight on drag."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/resizable.json"
      code={`import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable"

<ResizablePanelGroup orientation="horizontal" className="rounded-2xl border">
  <ResizablePanel defaultSize={50}>Left</ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={50}>Right</ResizablePanel>
</ResizablePanelGroup>`}
      preview={<ResizableDemo />}
    />
  );
}

function AspectRatioDoc() {
  return (
    <Showcase
      id="aspect-ratio"
      name="Aspect Ratio"
      description="Pure utility wrapper that maintains a fixed ratio. No visible styling — wraps any child in a ratio-locked container."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/aspect-ratio.json"
      code={`import { AspectRatio } from "@/components/ui/aspect-ratio"

<div className="w-64">
  <AspectRatio ratio={16 / 9}>
    <img src="..." className="rounded-2xl object-cover w-full h-full" />
  </AspectRatio>
</div>`}
      preview={
        <div className="w-64">
          <AspectRatio ratio={16 / 9}>
            <div className="flex h-full w-full items-center justify-center rounded-2xl bg-muted text-[13px] text-muted-foreground">
              16 / 9
            </div>
          </AspectRatio>
        </div>
      }
    />
  );
}

function InputOTPDoc() {
  return (
    <Showcase
      id="input-otp"
      name="Input OTP"
      description="Apple HIG segmented code input — rounded-xl cells, 44pt height, focus ring per active cell, pulsing caret."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/input-otp.json"
      code={`import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "@/components/ui/input-otp"

<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`}
      preview={
        <div className="flex flex-col items-center gap-6">
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <InputOTP maxLength={4}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
          </InputOTP>
        </div>
      }
    />
  );
}

function CalendarDoc() {
  return (
    <Showcase
      id="calendar"
      name="Calendar"
      description="Apple HIG date grid — rounded-2xl container, circular day cells, today highlighted with primary fill, muted weekday labels."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/calendar.json"
      code={`import { Calendar } from "@/components/ui/calendar"

const [date, setDate] = React.useState<Date | undefined>(new Date())

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
/>`}
      preview={<CalendarDemo />}
    />
  );
}

function DrawerDoc() {
  return (
    <Showcase
      id="drawer"
      name="Drawer"
      description="Apple HIG bottom sheet — Vaul-based, rounded-t-3xl with iOS grabber, blur overlay, same surface as sheet."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/drawer.json"
      code={`import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"

<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">Open Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Share with Friends</DrawerTitle>
      <DrawerDescription>Choose how you'd like to share.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <DrawerClose asChild>
        <Button variant="secondary">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`}
      preview={<DrawerDemo />}
    />
  );
}

function NavigationMenuDoc() {
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

function MenubarDoc() {
  return (
    <Showcase
      id="menubar"
      name="Menubar"
      description="macOS-style top-level menus — rounded-xl bar, rounded-2xl dropdowns, 13pt tight-tracking trigger labels, reuses dropdown-menu tokens."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/menubar.json"
      code={`import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator, MenubarShortcut } from "@/components/ui/menubar"

<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New<MenubarShortcut>⌘N</MenubarShortcut></MenubarItem>
      <MenubarItem>Open<MenubarShortcut>⌘O</MenubarShortcut></MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Close<MenubarShortcut>⌘W</MenubarShortcut></MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`}
      preview={
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                New Tab
                <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                New Window
                <MenubarShortcut>⌘N</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                Close
                <MenubarShortcut>⌘W</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Edit</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                Undo
                <MenubarShortcut>⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Redo
                <MenubarShortcut>⇧⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                Copy
                <MenubarShortcut>⌘C</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Paste
                <MenubarShortcut>⌘V</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>View</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Zoom In</MenubarItem>
              <MenubarItem>Zoom Out</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Full Screen</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      }
    />
  );
}

function ContextMenuDoc() {
  return (
    <Showcase
      id="context-menu"
      name="Context Menu"
      description="Right-click context menu mirroring dropdown-menu — rounded-2xl, 15pt items, uppercase 11px section labels, destructive variant."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/context-menu.json"
      code={`import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuSeparator, ContextMenuShortcut } from "@/components/ui/context-menu"

<ContextMenu>
  <ContextMenuTrigger>Right-click here</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuLabel>Actions</ContextMenuLabel>
    <ContextMenuItem>Open<ContextMenuShortcut>⌘O</ContextMenuShortcut></ContextMenuItem>
    <ContextMenuItem>Copy<ContextMenuShortcut>⌘C</ContextMenuShortcut></ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`}
      preview={
        <ContextMenu>
          <ContextMenuTrigger className="flex h-20 w-64 items-center justify-center rounded-2xl border border-dashed border-border text-[13px] text-muted-foreground select-none">
            Right-click here
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuLabel>Actions</ContextMenuLabel>
            <ContextMenuItem>
              Open
              <ContextMenuShortcut>⌘O</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              Copy
              <ContextMenuShortcut>⌘C</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              Rename
              <ContextMenuShortcut>↩</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      }
    />
  );
}

function CommandDoc() {
  return (
    <Showcase
      id="command"
      name="Command"
      description="Apple HIG command palette — rounded-2xl modal, prominent search input, grouped sections with uppercase 11px labels, ⌘K shortcut hint."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/command.json"
      code={`import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandSeparator, CommandShortcut, CommandDialog } from "@/components/ui/command"

<CommandDialog open={open} onOpenChange={setOpen}>
  <Command>
    <CommandInput placeholder="Search…" />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Suggestions">
        <CommandItem>Dashboard</CommandItem>
        <CommandItem>Documents</CommandItem>
      </CommandGroup>
      <CommandSeparator />
      <CommandGroup heading="Settings">
        <CommandItem>Profile<CommandShortcut>⌘P</CommandShortcut></CommandItem>
        <CommandItem>Settings<CommandShortcut>⌘,</CommandShortcut></CommandItem>
      </CommandGroup>
    </CommandList>
  </Command>
</CommandDialog>`}
      preview={<CommandDemo />}
    />
  );
}

function SonnerDoc() {
  return (
    <Showcase
      id="sonner"
      name="Sonner"
      description="Apple HIG toast notifications — rounded-2xl blur surface, subtle shadow, icon-coded severity. Place &lt;Toaster /&gt; once in your layout."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/sonner.json"
      code={`import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"

// In your layout:
<Toaster position="bottom-center" />

// Trigger a toast:
toast.success("Changes saved.", { description: "Your profile has been updated." })
toast.error("Something went wrong.")
toast.info("Update available.")`}
      preview={<SonnerDemo />}
    />
  );
}

function ButtonGroupDoc() {
  return (
    <Showcase
      id="button-group"
      name="Button Group"
      description="Apple HIG segmented button cluster — shared rounded-xl shell, dividers between members, supports separators and label addons."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/button-group.json"
      code={`import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from "@/components/ui/button-group"
import { Button } from "@/components/ui/button"

<ButtonGroup>
  <Button variant="outline">Day</Button>
  <Button variant="outline">Week</Button>
  <Button variant="outline">Month</Button>
</ButtonGroup>`}
      preview={
        <div className="flex flex-col items-center gap-5">
          <ButtonGroup>
            <Button variant="outline">Day</Button>
            <Button variant="outline">Week</Button>
            <Button variant="outline">Month</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button variant="outline">Copy</Button>
            <ButtonGroupSeparator />
            <Button variant="outline">Paste</Button>
            <ButtonGroupSeparator />
            <Button variant="outline">Cut</Button>
          </ButtonGroup>
          <ButtonGroup>
            <ButtonGroupText>https://</ButtonGroupText>
            <Input className="rounded-l-none" placeholder="cupertino-ui.vercel.app" />
            <Button>Go</Button>
          </ButtonGroup>
        </div>
      }
    />
  );
}

function FieldDoc() {
  return (
    <Showcase
      id="field"
      name="Field"
      description="Apple HIG form field wrapper — composes label, control, description, and error in a single semantic group with consistent spacing."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/field.json"
      code={`import { Field, FieldLabel, FieldDescription, FieldError, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

<FieldGroup>
  <Field>
    <FieldLabel htmlFor="email">Email</FieldLabel>
    <Input id="email" type="email" placeholder="name@example.com" />
    <FieldDescription>We&#39;ll never share your email.</FieldDescription>
  </Field>
  <Field data-invalid>
    <FieldLabel htmlFor="pw">Password</FieldLabel>
    <Input id="pw" type="password" aria-invalid />
    <FieldError>Must be at least 8 characters.</FieldError>
  </Field>
</FieldGroup>`}
      preview={
        <FieldGroup className="mx-auto w-full max-w-sm">
          <Field>
            <FieldLabel htmlFor="field-email">Email</FieldLabel>
            <Input
              id="field-email"
              type="email"
              placeholder="name@example.com"
            />
            <FieldDescription>
              We&apos;ll never share your email.
            </FieldDescription>
          </Field>
          <Field data-invalid>
            <FieldLabel htmlFor="field-pw">Password</FieldLabel>
            <Input id="field-pw" type="password" aria-invalid />
            <FieldError>Must be at least 8 characters.</FieldError>
          </Field>
        </FieldGroup>
      }
    />
  );
}

function ItemDoc() {
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

function NativeSelectDoc() {
  return (
    <Showcase
      id="native-select"
      name="Native Select"
      description="Apple HIG native select — uses the platform's native dropdown for accessibility, styled to match Input. Best for mobile and form-heavy contexts."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/native-select.json"
      code={`import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"

<NativeSelect>
  <NativeSelectOption value="apple">Apple</NativeSelectOption>
  <NativeSelectOption value="banana">Banana</NativeSelectOption>
  <NativeSelectOption value="cherry">Cherry</NativeSelectOption>
</NativeSelect>`}
      preview={
        <div className="mx-auto w-full max-w-sm">
          <NativeSelect defaultValue="banana" className="w-full">
            <NativeSelectOption value="apple">Apple</NativeSelectOption>
            <NativeSelectOption value="banana">Banana</NativeSelectOption>
            <NativeSelectOption value="cherry">Cherry</NativeSelectOption>
            <NativeSelectOption value="durian">Durian</NativeSelectOption>
          </NativeSelect>
        </div>
      }
    />
  );
}

function TypographyDoc() {
  return (
    <Showcase
      id="typography"
      name="Typography"
      description="Apple HIG type scale — SF Pro-style sizing (40/28/22/17/15/13pt), tight tracking on display sizes, semibold for headings."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/typography.json"
      code={`import { TypographyH1, TypographyH2, TypographyP, TypographyLead, TypographyMuted, TypographyInlineCode } from "@/components/ui/typography"

<TypographyH1>The quick brown fox</TypographyH1>
<TypographyLead>Jumps over the lazy dog.</TypographyLead>
<TypographyP>Paragraph at 15pt with relaxed leading.</TypographyP>
<TypographyMuted>Secondary 13pt muted text.</TypographyMuted>`}
      preview={
        <div className="mx-auto w-full max-w-xl space-y-5">
          <TypographyH1>The quick brown fox</TypographyH1>
          <TypographyH2>Jumps over the lazy dog</TypographyH2>
          <TypographyH3>Section heading</TypographyH3>
          <TypographyH4>Subsection</TypographyH4>
          <TypographyLead>
            A lead paragraph introduces a section with lighter weight and
            tighter tracking.
          </TypographyLead>
          <TypographyP>
            Body copy renders at 15pt with relaxed line height for readable
            paragraphs. Inline code looks like{" "}
            <TypographyInlineCode>npm install</TypographyInlineCode>.
          </TypographyP>
          <TypographyLarge>Large accent text</TypographyLarge>
          <TypographySmall>Small caption text</TypographySmall>
          <TypographyMuted>
            Muted secondary text for hints and descriptions.
          </TypographyMuted>
          <TypographyBlockquote>
            &ldquo;Design is not just what it looks like and feels like. Design
            is how it works.&rdquo; — Steve Jobs
          </TypographyBlockquote>
          <TypographyList>
            <li>First list item with proper marker</li>
            <li>Second list item with relaxed leading</li>
            <li>Third list item</li>
          </TypographyList>
        </div>
      }
    />
  );
}

function ComboboxDoc() {
  return (
    <Showcase
      id="combobox"
      name="Combobox"
      description="Apple HIG combobox — autocomplete input dengan list saran. Built on base-ui combobox + Input Group shell."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/combobox.json"
      code={`import { Combobox, ComboboxInput, ComboboxContent, ComboboxList, ComboboxItem, ComboboxEmpty } from "@/components/ui/combobox"

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"] as const

<Combobox items={frameworks}>
  <ComboboxInput placeholder="Select a framework..." />
  <ComboboxContent>
    <ComboboxEmpty>No framework found.</ComboboxEmpty>
    <ComboboxList>
      {(item) => (
        <ComboboxItem key={item} value={item}>
          {item}
        </ComboboxItem>
      )}
    </ComboboxList>
  </ComboboxContent>
</Combobox>`}
      preview={<ComboboxDemo />}
    />
  );
}

function SidebarDoc() {
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

function ChartDoc() {
  return (
    <Showcase
      id="chart"
      name="Chart"
      description="Apple HIG charts — Recharts wrapper with rounded-2xl blur tooltip, hairline grid, rounded-full legend dots. Bar and area variants shown."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/chart.json"
      code={`import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

const data = [
  { month: "Jan", revenue: 4200 },
  { month: "Feb", revenue: 5800 },
  { month: "Mar", revenue: 7200 },
]

const config = {
  revenue: { label: "Revenue", color: "var(--color-primary)" },
} satisfies ChartConfig

<ChartContainer config={config} className="h-48">
  <BarChart data={data}>
    <CartesianGrid vertical={false} />
    <XAxis dataKey="month" tickLine={false} axisLine={false} />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Bar dataKey="revenue" fill="var(--color-primary)" radius={[6, 6, 0, 0]} />
  </BarChart>
</ChartContainer>`}
      preview={<ChartDemo />}
    />
  );
}

function DirectionDoc() {
  return (
    <Showcase
      id="direction"
      name="Direction"
      description="RTL/LTR direction provider — wraps Radix DirectionProvider to set text direction for an entire subtree. Useful for Arabic, Hebrew, and other RTL languages."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/direction.json"
      code={`import { DirectionProvider } from "@/components/ui/direction"

// Wrap any subtree to set RTL direction
<DirectionProvider dir="rtl">
  <p>مرحبا بالعالم</p>
  <Input placeholder="اكتب هنا..." />
</DirectionProvider>

// Or use the hook to read direction from context
import { useDirection } from "@/components/ui/direction"

function MyComponent() {
  const dir = useDirection()
  return <div dir={dir}>…</div>
}`}
      preview={
        <div className="flex flex-col gap-4 w-full max-w-sm">
          <div className="rounded-2xl border border-border p-4">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">LTR (default)</p>
            <DirectionProvider dir="ltr">
              <p className="text-[15px]">Hello, world! Left to right.</p>
            </DirectionProvider>
          </div>
          <div className="rounded-2xl border border-border p-4">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">RTL</p>
            <DirectionProvider dir="rtl">
              <p className="text-[15px] text-right" dir="rtl">مرحبا بالعالم! من اليمين إلى اليسار.</p>
            </DirectionProvider>
          </div>
        </div>
      }
    />
  );
}

function DatePickerDoc() {
  return (
    <Showcase
      id="date-picker"
      name="Date Picker"
      description="Composed from Calendar + Popover — no separate component. Apple HIG date picker with rounded-2xl popover, calendar grid, and formatted trigger button."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/calendar.json https://cupertino-ui.vercel.app/r/popover.json"
      code={`"use client"
import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

export function DatePicker() {
  const [date, setDate] = React.useState<Date | undefined>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className={cn("w-56 justify-start gap-2 font-normal", !date && "text-muted-foreground")}>
          <CalendarIcon className="size-4" />
          {date ? format(date, "PPP") : "Pick a date"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar mode="single" selected={date} onSelect={setDate} />
      </PopoverContent>
    </Popover>
  )
}`}
      preview={<DatePickerDemo />}
    />
  );
}

function DataTableDoc() {
  const payments = [
    { id: "INV-001", status: "Paid", method: "Apple Pay", amount: "$250.00" },
    { id: "INV-002", status: "Pending", method: "Card", amount: "$150.00" },
    { id: "INV-003", status: "Paid", method: "Apple Pay", amount: "$320.00" },
    { id: "INV-004", status: "Failed", method: "Card", amount: "$90.00" },
  ];
  return (
    <Showcase
      id="data-table"
      name="Data Table"
      description="Built on TanStack Table + Cupertino Table primitives — column sorting, pagination, and row actions. Install @tanstack/react-table to enable full features."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/table.json"
      code={`import { useReactTable, getCoreRowModel, getSortedRowModel, flexRender } from "@tanstack/react-table"
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table"

const columns = [
  { accessorKey: "id", header: "Invoice" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "method", header: "Method" },
  { accessorKey: "amount", header: "Amount" },
]

export function DataTable({ data }) {
  const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() })

  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map(hg => (
          <TableRow key={hg.id}>
            {hg.headers.map(h => <TableHead key={h.id}>{flexRender(h.column.columnDef.header, h.getContext())}</TableHead>)}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.map(row => (
          <TableRow key={row.id}>
            {row.getVisibleCells().map(cell => <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>)}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}`}
      preview={
        <div className="w-full max-w-lg overflow-hidden rounded-2xl border border-border/60">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="font-medium text-[13px]">{row.id}</TableCell>
                  <TableCell>
                    <span className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${
                      row.status === "Paid" ? "bg-green-500/10 text-green-600"
                      : row.status === "Pending" ? "bg-amber-500/10 text-amber-600"
                      : "bg-destructive/10 text-destructive"
                    }`}>{row.status}</span>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{row.method}</TableCell>
                  <TableCell className="text-right">{row.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      }
    />
  );
}

function ToastDoc() {
  return (
    <Showcase
      id="toast"
      name="Toast"
      description="shadcn deprecated the Radix-based Toast in favor of Sonner. Use the Sonner component — same install, same API, better UX. See Sonner above."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/sonner.json"
      code={`// shadcn replaced toast with sonner.
// Import from sonner component:
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"

// In layout.tsx:
<Toaster position="bottom-center" />

// Trigger anywhere:
toast.success("File saved.")
toast.error("Something went wrong.")
toast.info("Update available.")`}
      preview={<SonnerDemo />}
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
    { label: "Alert Dialog", href: "#alert-dialog" },
    { label: "Avatar", href: "#avatar" },
    { label: "Breadcrumb", href: "#breadcrumb" },
    { label: "Checkbox", href: "#checkbox" },
    { label: "Collapsible", href: "#collapsible" },
    { label: "Dialog", href: "#dialog" },
    { label: "Dropdown Menu", href: "#dropdown-menu" },
    { label: "Hover Card", href: "#hover-card" },
    { label: "Pagination", href: "#pagination" },
    { label: "Popover", href: "#popover" },
    { label: "Progress", href: "#progress" },
    { label: "Radio Group", href: "#radio-group" },
    { label: "Scroll Area", href: "#scroll-area" },
    { label: "Select", href: "#select" },
    { label: "Skeleton", href: "#skeleton" },
    { label: "Slider", href: "#slider" },
    { label: "Textarea", href: "#textarea" },
    { label: "Toggle", href: "#toggle" },
    { label: "Toggle Group", href: "#toggle-group" },
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
    { label: "Carousel", href: "#carousel" },
    { label: "Empty", href: "#empty" },
    { label: "Spinner", href: "#spinner" },
    { label: "Table", href: "#table" },
    { label: "Resizable", href: "#resizable" },
    { label: "Aspect Ratio", href: "#aspect-ratio" },
    { label: "Input OTP", href: "#input-otp" },
    { label: "Calendar", href: "#calendar" },
    { label: "Drawer", href: "#drawer" },
    { label: "Navigation Menu", href: "#navigation-menu" },
    { label: "Menubar", href: "#menubar" },
    { label: "Context Menu", href: "#context-menu" },
    { label: "Command", href: "#command" },
    { label: "Sonner", href: "#sonner" },
    { label: "Input Group", href: "#input-group" },
    { label: "Button Group", href: "#button-group" },
    { label: "Field", href: "#field" },
    { label: "Item", href: "#item" },
    { label: "Native Select", href: "#native-select" },
    { label: "Typography", href: "#typography" },
    { label: "Combobox", href: "#combobox" },
    { label: "Sidebar", href: "#sidebar" },
    { label: "Chart", href: "#chart" },
    { label: "Direction", href: "#direction" },
    { label: "Date Picker", href: "#date-picker" },
    { label: "Data Table", href: "#data-table" },
    { label: "Toast", href: "#toast" },
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
