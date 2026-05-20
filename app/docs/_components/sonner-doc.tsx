import { Showcase } from "@/app/_components/showcase";
import { SonnerDemo } from "@/app/_components/sonner-demo";

export function SonnerDoc() {
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
