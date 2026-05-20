import { Showcase } from "@/app/_components/showcase";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDoc() {
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
