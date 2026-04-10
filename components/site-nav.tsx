"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export type SiteNavActive = "work" | "how-i-lead" | "about" | null

const linkDefault =
  "text-white/70 hover:text-white text-sm uppercase tracking-wider transition-colors"
const linkActive =
  "text-white hover:text-[#5eead4] text-sm uppercase tracking-wider transition-colors"

export function SiteNav({
  active = null,
  className = "",
}: {
  active?: SiteNavActive
  /** e.g. border-b border-white/10 */
  className?: string
}) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onResize = () => {
      if (window.matchMedia("(min-width: 768px)").matches) setOpen(false)
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [open])

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  const linkClass = (key: NonNullable<SiteNavActive>) =>
    active === key ? linkActive : linkDefault

  const close = () => setOpen(false)

  return (
    <div className="relative z-50">
      <nav
        className={`relative z-50 flex items-center justify-between px-8 md:px-16 py-8 ${className}`}
      >
        <Link
          href="/"
          className="text-white/90 text-sm uppercase tracking-widest hover:text-[#5eead4] transition-colors"
        >
          Caitlyn Marsh
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#work" className={linkClass("work")}>
            Work
          </Link>
          <Link href="/how-i-lead" className={linkClass("how-i-lead")}>
            How I lead
          </Link>
          <Link href="/about" className={linkClass("about")}>
            About
          </Link>
        </div>

        {/* Mobile menu control */}
        <div className="flex items-center md:hidden">
          <button
            type="button"
            className="p-2 -mr-2 rounded-md text-white/90 hover:text-[#5eead4] hover:bg-white/5 transition-colors"
            aria-expanded={open}
            aria-controls="site-mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="w-6 h-6" strokeWidth={1.5} /> : <Menu className="w-6 h-6" strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay + panel (siblings of nav row, not flex items) */}
      {open ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-[#0d1117]/80 backdrop-blur-sm md:hidden"
            aria-hidden
            tabIndex={-1}
            onClick={close}
          />
          <div
            id="site-mobile-nav"
            className="absolute left-0 right-0 top-full z-[60] border-b border-white/10 bg-[#0d1117]/98 shadow-lg md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
          >
            <div className="flex flex-col gap-1 px-8 py-6">
              <Link
                href="/#work"
                className={`${linkClass("work")} py-3 border-b border-white/5`}
                onClick={close}
              >
                Work
              </Link>
              <Link
                href="/how-i-lead"
                className={`${linkClass("how-i-lead")} py-3 border-b border-white/5`}
                onClick={close}
              >
                How I lead
              </Link>
              <Link href="/about" className={`${linkClass("about")} py-3`} onClick={close}>
                About
              </Link>
            </div>
          </div>
        </>
      ) : null}
    </div>
  )
}
