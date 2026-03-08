"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" })
}

/**
 * Scrolls the window to the top when the route changes (e.g. navigating to a new page).
 * Prevents the "scroll back up" effect when landing on a page for the first time.
 * Disables browser scroll restoration and runs scroll after paint so it wins over
 * Next.js and browser default behavior.
 */
export function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Prevent the browser from restoring scroll position on nav
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual"
    }

    scrollToTop()

    // Run again after paint so we override any scroll that happens during/after hydration
    const raf = requestAnimationFrame(() => {
      scrollToTop()
    })
    const t = setTimeout(scrollToTop, 0)
    const t2 = setTimeout(scrollToTop, 100)

    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(t)
      clearTimeout(t2)
    }
  }, [pathname])

  return null
}
