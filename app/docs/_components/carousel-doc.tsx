import { Showcase } from "@/app/_components/showcase";
import { CarouselDemo } from "@/app/_components/carousel-demo";

export function CarouselDoc() {
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
