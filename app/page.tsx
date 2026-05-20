import { SiteFooter } from "@/app/_components/site-footer";
import { SiteHeader } from "@/app/_components/site-header";
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
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1">
        <Hero />
        <FeaturedCards />
        <ComponentPreviews />
        <Resources />
      </main>

      <SiteFooter />
    </div>
  );
}

/* ─────────────────────────── Hero ─────────────────────────── */

function Hero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:px-10">
        <p className="text-[13px] font-medium text-system-blue">Cupertino UI</p>
        <h1 className="mt-3 max-w-3xl text-[44px] font-semibold leading-[1.1] tracking-[-0.025em] sm:text-[64px]">
          Apple-style components,
          <br />
          ready for shadcn.
        </h1>
        <p className="mt-6 max-w-2xl text-[19px] leading-[1.5] text-muted-foreground">
          A drop-in registry that re-skins shadcn/ui with the geometry,
          typography, and motion of Apple&rsquo;s Human Interface Guidelines.
          Install with one command — your existing shadcn code keeps working.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button size="lg" asChild>
            <a href="/docs">Read the documentation</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="/docs#components">Browse components</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── Featured Cards ─────────────────────────── */

function FeaturedCards() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-20 sm:grid-cols-2 lg:grid-cols-3 lg:px-10">
        <FeatureCard
          eyebrow="Documentation"
          title="Human Interface Guidelines, applied."
          body="Read the philosophy, the conventions, and the workflow for adding new components."
          href="/docs"
          cta="Open the docs"
        />
        <FeatureCard
          eyebrow="Components"
          title="Four components, one registry."
          body="Button, Switch, Card, Badge — each a drop-in replacement for its shadcn counterpart."
          href="/docs#components"
          cta="See the catalog"
        />
        <FeatureCard
          eyebrow="Installation"
          title="One command. No theme switcher."
          body="Add components individually. No global override. Your existing shadcn blocks keep working."
          href="/docs#installation"
          cta="Install a component"
        />
      </div>
    </section>
  );
}

function FeatureCard({
  eyebrow,
  title,
  body,
  href,
  cta,
}: {
  eyebrow: string;
  title: string;
  body: string;
  href: string;
  cta: string;
}) {
  return (
    <a href={href} className="group block h-full">
      <Card className="h-full gap-3 py-7 transition-colors group-hover:ring-foreground/25">
        <CardHeader>
          <span className="text-[12px] font-semibold uppercase tracking-wider text-muted-foreground">
            {eyebrow}
          </span>
          <CardTitle className="mt-2 text-[22px] font-semibold leading-tight tracking-tight">
            {title}
          </CardTitle>
          <CardDescription className="mt-2 text-[14.5px] leading-relaxed">
            {body}
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-auto flex items-center gap-1 text-[14px] font-medium text-system-blue">
          {cta}
          <svg viewBox="0 0 16 16" className="size-3.5" fill="none">
            <path
              d="M6 3l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </CardContent>
      </Card>
    </a>
  );
}

/* ─────────────────────────── Component Previews ─────────────────────────── */

function ComponentPreviews() {
  return (
    <section className="border-b border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <div className="mb-12 max-w-2xl">
          <p className="text-[13px] font-medium text-system-purple">
            What&rsquo;s inside
          </p>
          <h2 className="mt-3 text-[36px] font-semibold tracking-tight">
            Components built on shadcn, tuned for iOS.
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-muted-foreground">
            Same names, same props, same{" "}
            <code className="rounded bg-background px-1.5 py-0.5 font-mono text-[14px]">
              data-slot
            </code>{" "}
            attributes. Different surface.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <PreviewTile name="Button" href="/docs#button">
            <div className="flex flex-wrap justify-center gap-2">
              <Button size="sm">Default</Button>
              <Button size="sm" variant="outline">
                Outline
              </Button>
              <Button size="sm" variant="destructive">
                Delete
              </Button>
            </div>
          </PreviewTile>

          <PreviewTile name="Switch" href="/docs#switch">
            <div className="flex items-center justify-center gap-6">
              <Switch defaultChecked />
              <Switch />
              <Switch size="sm" defaultChecked />
            </div>
          </PreviewTile>

          <PreviewTile name="Card" href="/docs#card">
            <Card className="w-full max-w-xs">
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>Push, email, sound.</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-between pt-0">
                <span className="text-[13px]">Push</span>
                <Switch size="sm" defaultChecked />
              </CardContent>
            </Card>
          </PreviewTile>

          <PreviewTile name="Badge" href="/docs#badge">
            <div className="flex flex-wrap justify-center gap-2">
              <Badge>New</Badge>
              <Badge variant="secondary">Beta</Badge>
              <Badge variant="destructive">3</Badge>
              <Badge variant="outline">Draft</Badge>
            </div>
          </PreviewTile>
        </div>
      </div>
    </section>
  );
}

function PreviewTile({
  name,
  href,
  children,
}: {
  name: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} className="group block h-full">
      <Card className="h-full gap-0 overflow-hidden bg-background py-0 transition-colors group-hover:ring-foreground/25">
        <CardContent className="flex min-h-[180px] flex-1 items-center justify-center px-6 py-10">
          {children}
        </CardContent>
        <CardFooter className="flex items-center justify-between border-t border-border bg-transparent px-5 py-3">
          <span className="text-[15px] font-medium">{name}</span>
          <span className="text-[12.5px] text-muted-foreground transition-colors group-hover:text-system-blue">
            Documentation →
          </span>
        </CardFooter>
      </Card>
    </a>
  );
}

/* ─────────────────────────── Resources ─────────────────────────── */

function Resources() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-[13px] font-medium text-system-orange">
              Resources
            </p>
            <h2 className="mt-3 text-[28px] font-semibold tracking-tight">
              Designed with reference.
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
              Cupertino UI follows the published guidance of Apple and the
              registry conventions of shadcn.
            </p>
          </div>

          <ul>
            <Separator />
            {[
              {
                title: "Apple Human Interface Guidelines",
                desc: "The source material — components, foundations, and patterns.",
                href: "https://developer.apple.com/design/human-interface-guidelines",
                external: true,
              },
              {
                title: "shadcn/ui",
                desc: "The underlying component primitives and registry format.",
                href: "https://ui.shadcn.com",
                external: true,
              },
              {
                title: "GitHub repository",
                desc: "Source code, issue tracker, and contribution guide.",
                href: "https://github.com/dtdi-dev/cupertino",
                external: true,
              },
              {
                title: "Project documentation",
                desc: "Internal docs — philosophy, workflow, conventions.",
                href: "/docs",
                external: false,
              },
            ].map((item, i, arr) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between gap-6 py-5 transition-colors hover:bg-muted/30"
                >
                  <div className="min-w-0">
                    <div className="text-[16px] font-medium text-foreground">
                      {item.title}
                      {item.external ? (
                        <span className="ml-1.5 text-muted-foreground">↗</span>
                      ) : null}
                    </div>
                    <div className="mt-0.5 text-[13.5px] text-muted-foreground">
                      {item.desc}
                    </div>
                  </div>
                  <svg
                    viewBox="0 0 16 16"
                    className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-system-blue"
                    fill="none"
                  >
                    <path
                      d="M6 3l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                {i < arr.length - 1 ? <Separator /> : null}
              </li>
            ))}
            <Separator />
          </ul>
        </div>
      </div>
    </section>
  );
}
