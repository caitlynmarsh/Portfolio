"use client"

import { useState, useEffect } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useCarousel } from "@/components/ui/carousel"

function QuotesCarouselControls({ count }: { count: number }) {
  const { api, scrollPrev, scrollNext, canScrollPrev, canScrollNext } = useCarousel()
  const [selectedIndex, setSelectedIndex] = useState(0)
  useEffect(() => {
    if (!api) return
    const onSelect = () => setSelectedIndex(api.selectedScrollSnap())
    onSelect()
    api.on("select", onSelect)
    return () => {
      api.off("select", onSelect)
    }
  }, [api])
  return (
    <div className="flex items-center justify-center gap-4 mt-6">
      <CarouselPrevious
        className="!static !left-0 !top-0 !-translate-x-0 !-translate-y-0 border-white/20 bg-white/5 hover:bg-white/10 text-white hover:text-white disabled:opacity-40"
        variant="outline"
        size="icon"
      />
      <div className="flex items-center gap-2">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => api?.scrollTo(i)}
            aria-label={`Go to quote ${i + 1}`}
            className={`rounded-full transition-all duration-200 ${
              i === selectedIndex
                ? "bg-[#5eead4] w-2.5 h-2.5"
                : "bg-white/30 hover:bg-white/50 w-2 h-2"
            }`}
          />
        ))}
      </div>
      <CarouselNext
        className="!static !right-0 !top-0 !translate-x-0 !-translate-y-0 border-white/20 bg-white/5 hover:bg-white/10 text-white hover:text-white disabled:opacity-40"
        variant="outline"
        size="icon"
      />
    </div>
  )
}

/** Same carousel UI as multi-quote sections on case studies (e.g. case study 1). */
export function QuotesCarousel({ quotes }: { quotes: string[] }) {
  if (!quotes.length) return null
  return (
    <div className="relative w-full">
      <Carousel opts={{ align: "start", loop: true }} className="w-full">
        <CarouselContent className="-ml-0 gap-4">
          {quotes.map((quote, j) => (
            <CarouselItem key={j} className="pl-4 pr-4 basis-[88%] min-w-0 shrink-0 md:basis-[90%]">
              <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-8 md:px-10 md:py-10">
                <p className="text-lg md:text-xl lg:text-2xl font-serif text-white/90 italic leading-relaxed">
                  {quote.includes(" — ") ? (
                    <>
                      "{quote.split(" — ")[0]}"
                      <br />
                      <span className="block mt-3 text-sm md:text-base font-sans not-italic text-white/60">
                        {quote.split(" — ")[1]}
                      </span>
                    </>
                  ) : (
                    `"${quote}"`
                  )}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <QuotesCarouselControls count={quotes.length} />
      </Carousel>
    </div>
  )
}
