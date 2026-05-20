"use client"

import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const slides = [
  { label: "Mac", bg: "bg-blue-500/10 text-blue-600" },
  { label: "iPhone", bg: "bg-purple-500/10 text-purple-600" },
  { label: "iPad", bg: "bg-green-500/10 text-green-600" },
  { label: "Apple Watch", bg: "bg-rose-500/10 text-rose-600" },
]

export function CarouselDemo() {
  return (
    <div className="w-full max-w-xs px-10">
      <Carousel opts={{ loop: true }}>
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.label}>
              <div
                className={`flex h-32 items-center justify-center rounded-2xl ${slide.bg} text-[15px] font-semibold`}
              >
                {slide.label}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        <CarouselDots />
      </Carousel>
    </div>
  )
}
