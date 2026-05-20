import { Showcase } from "@/app/_components/showcase";
import { CalendarDemo } from "@/app/_components/calendar-demo";

export function CalendarDoc() {
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
