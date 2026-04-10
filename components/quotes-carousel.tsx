"use client"

import { useState, useEffect, useSyncExternalStore } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useCarousel } from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

/** Tailwind `md` — two-up pair layout; below this, pair carousels show one slide at a time. */
function useMdUp() {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia("(min-width: 768px)")
      mq.addEventListener("change", onChange)
      return () => mq.removeEventListener("change", onChange)
    },
    () => window.matchMedia("(min-width: 768px)").matches,
    () => true
  )
}

function QuotesCarouselControls({
  count,
  showDots,
  pair,
}: {
  count: number
  showDots: boolean
  pair: boolean
}) {
  const { api, scrollPrev, scrollNext, canScrollPrev, canScrollNext } = useCarousel()
  const [selectedIndex, setSelectedIndex] = useState(0)
  useEffect(() => {
    if (!showDots || !api) return
    const onSelect = () => setSelectedIndex(api.selectedScrollSnap())
    onSelect()
    api.on("select", onSelect)
    return () => {
      api.off("select", onSelect)
    }
  }, [api, showDots])
  const viewportCenterArrows = pair && !showDots
  return (
    <div
      className={cn(
        "flex items-center justify-center mt-6",
        showDots ? "gap-4" : "gap-8",
        pair && "px-4 md:px-6",
        viewportCenterArrows &&
          "w-screen max-w-[100vw] relative left-1/2 -translate-x-1/2"
      )}
    >
      <CarouselPrevious
        className="!static !left-0 !top-0 !-translate-x-0 !-translate-y-0 border-white/20 bg-white/5 hover:bg-white/10 text-white hover:text-white disabled:opacity-40"
        variant="outline"
        size="icon"
      />
      {showDots ? (
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
      ) : null}
      <CarouselNext
        className="!static !right-0 !top-0 !translate-x-0 !-translate-y-0 border-white/20 bg-white/5 hover:bg-white/10 text-white hover:text-white disabled:opacity-40"
        variant="outline"
        size="icon"
      />
    </div>
  )
}

export type QuotesCarouselProps = {
  quotes: string[]
  /** 1 = one quote per view (case studies). 2 = two quotes side-by-side; arrows advance by pair. */
  slidesPerView?: 1 | 2
  /** Default true; set false for prev/next only. */
  showDots?: boolean
  /** With `slidesPerView={2}`: extra left inset at scroll start only (padding scrolls off when advancing). */
  pairInitialLeadInset?: boolean
  /** With `slidesPerView={2}`: extra margin after the last quote (scroll track end). */
  pairTrailingMargin?: boolean
  /** Infinite wrap; set false for linear prev/next only. Default true. */
  loop?: boolean
}

/** Same carousel UI as multi-quote sections on case studies (e.g. case study 1). */
export function QuotesCarousel({
  quotes,
  slidesPerView = 1,
  showDots = true,
  pairInitialLeadInset = false,
  pairTrailingMargin = false,
  loop = true,
}: QuotesCarouselProps) {
  if (!quotes.length) return null
  const pair = slidesPerView === 2
  const mdUp = useMdUp()
  const pairDesktop = pair && mdUp
  const lastIndex = quotes.length - 1
  return (
    <div className="relative w-full">
      <Carousel
        key={pair ? (mdUp ? "pair-md" : "pair-sm") : "single"}
        opts={
          pair
            ? pairDesktop
              ? {
                  align: "start",
                  loop,
                  slidesToScroll: 2,
                  containScroll: loop ? false : "trimSnaps",
                }
              : {
                  align: "start",
                  loop: false,
                  slidesToScroll: 1,
                  // Like desktop pair: allow a sliver of the next slide; trimSnaps hides that peek.
                  containScroll: false,
                }
            : { align: "start", loop }
        }
        className="w-full"
      >
        <CarouselContent
          className={cn(pairDesktop ? "-ml-5 md:-ml-6" : "-ml-0 gap-4")}
        >
          {quotes.map((quote, j) => (
            <CarouselItem
              key={j}
              className={cn(
                "min-w-0 shrink-0",
                !pair && "pl-4 pr-4 basis-[88%] md:basis-[90%]",
                pair && !pairDesktop && "pl-4 pr-4 basis-[80%]",
                pairDesktop && "pl-5 md:pl-6 basis-[43%]",
                pair && pairInitialLeadInset && j === 0 && "ml-8 md:ml-20 lg:ml-32",
                pair && pairTrailingMargin && j === lastIndex && "mr-8 md:mr-16 lg:mr-20"
              )}
            >
              <div
                className={cn(
                  "bg-white/5 border border-white/10 rounded-xl h-full",
                  pairDesktop && "px-4 py-6 md:px-6 md:py-8",
                  pair && !pairDesktop && "px-6 py-8",
                  !pair && "px-6 py-8 md:px-10 md:py-10"
                )}
              >
                <p
                  className={cn(
                    "font-serif text-white/90 italic leading-relaxed",
                    pairDesktop && "text-base md:text-lg lg:text-xl",
                    pair && !pairDesktop && "text-lg",
                    !pair && "text-lg md:text-xl lg:text-2xl"
                  )}
                >
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
        <QuotesCarouselControls count={quotes.length} showDots={showDots} pair={pair} />
      </Carousel>
    </div>
  )
}
