"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import Link from "next/link"

type LayoutVariant = "detailed"

const layoutOptions: { value: LayoutVariant; label: string }[] = [
  { value: "detailed", label: "Detailed" },
]

const caseStudies = [
  {
    id: 1,
    company: "Asurion",
    year: "2025",
    title: "Redesigning Field app to reduce friction and unlock scale",
    description:
      "Led a complete product redesign that increased user engagement by 340% and reduced churn by half. Built and scaled a design team from 3 to 12 designers.",
    quote: "The new experience fundamentally changed how our users think about their money.",
    imagePosition: "left" as const,
    role: "Sr Manager, Product Design",
    image: "/Portfolio/field-app-hero.png",
  },
  {
    id: 2,
    company: "Asurion",
    year: "2025",
    title: "Designing a system that guides behavior instead of policing it",
    description:
      "Improved on-time arrival rates from 60% to 75% by redesigning the Field app flow to guide expert behavior through clear sequencing rather than blocking actions.",
    quote: "Even experts trying to do the right thing were set up to fail.",
    imagePosition: "right" as const,
    role: "Principal Designer (IC)",
  },
  {
    id: 3,
    company: "Asurion",
    year: "2025",
    title: "Using GenAI to increase sales without losing trust",
    description:
      "Designed SmartPitch, an AI-powered sales guidance tool that increased sales per 100 jobs (SP100) while maintaining customer trust through careful design and transparency.",
    quote: "Designing with AI is less about capability and more about restraint.",
    imagePosition: "left" as const,
    role: "Senior Manager, Product Design",
  },
  {
    id: 4,
    company: "Asurion & Ubreakifix",
    year: "2026",
    title: "Fixing a fragmented experience across systems",
    description:
      "Bridged Field app and Portal teams to create a seamless end-to-end experience for remote technicians, eliminating duplicate data entry and system switching.",
    quote: "If we're a technology company, why can't our systems talk to each other?",
    imagePosition: "right" as const,
    role: "Senior Manager, Product Design + Lead Designer",
  },
  {
    id: 5,
    company: "EvenStride app",
    year: "2026",
    title: "Designing confidence into equine recovery, one ride at a time",
    description:
      "Built an iOS app to help riders follow equine rehabilitation plans consistently, reducing cognitive overhead and building confidence through guided execution.",
    quote: "The first version didn't need to be good. It just needed to exist.",
    imagePosition: "left" as const,
    role: "Designer & Developer",
  },
  {
    id: 6,
    company: "Case Study 6",
    year: "2026",
    title: "Case Study 6 Title",
    description:
      "Placeholder description for case study 6. Content will be updated with actual project details.",
    quote: "Placeholder quote for case study 6.",
    imagePosition: "right" as const,
    role: "Design Role",
  },
]

export function Page11DarkMesh() {
  const heroRef = useRef<HTMLElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 })
  const [activeLayout, setActiveLayout] = useState<LayoutVariant>("detailed")
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })
  
  const gradientOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  
  // Smooth spring animation for cursor following
  const springConfig = { damping: 25, stiffness: 150 }
  const mouseX = useSpring(0, springConfig)
  const mouseY = useSpring(0, springConfig)
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      setMousePosition({ x, y })
      mouseX.set(x)
      mouseY.set(y)
    }
    
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])
  
  // Transform mouse position to movement values for each blob
  const blob1X = useTransform(mouseX, [-1, 1], [-80, 80])
  const blob1Y = useTransform(mouseY, [-1, 1], [-80, 80])
  const blob2X = useTransform(mouseX, [-1, 1], [60, -60])
  const blob2Y = useTransform(mouseY, [-1, 1], [70, -70])
  const blob3X = useTransform(mouseX, [-1, 1], [-70, 70])
  const blob3Y = useTransform(mouseY, [-1, 1], [60, -60])
  const blob4X = useTransform(mouseX, [-1, 1], [50, -50])
  const blob4Y = useTransform(mouseY, [-1, 1], [-60, 60])

  return (
    <div className="bg-[#0d1117] relative overflow-x-clip">
      {/* Mesh Gradient Blobs - individual elements with spring mouse tracking */}
      <motion.div 
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
        style={{ opacity: gradientOpacity }}
      >
        {/* Top-left blob - cyan/teal */}
        <motion.div
          style={{ x: blob1X, y: blob1Y, willChange: "transform" }}
          className="absolute -top-[10%] -left-[5%] w-[52%] aspect-square"
        >
          <div
            className="w-full h-full rounded-full animate-[meshPulse1_25s_ease-in-out_infinite]"
            style={{
              background: "radial-gradient(circle, rgba(45,212,191,0.6) 0%, rgba(34,139,140,0.4) 40%, transparent 65%)",
              filter: "blur(60px)",
            }}
          />
        </motion.div>

        {/* Top-left secondary blob - blue accent */}
        <motion.div
          style={{ x: blob2X, y: blob2Y, willChange: "transform" }}
          className="absolute top-[10%] left-[15%] w-[38%] aspect-square"
        >
          <div
            className="w-full h-full rounded-full animate-[meshPulse2_30s_ease-in-out_infinite]"
            style={{
              background: "radial-gradient(circle, rgba(59,130,246,0.5) 0%, rgba(37,99,235,0.3) 50%, transparent 65%)",
              filter: "blur(50px)",
            }}
          />
        </motion.div>

        {/* Bottom-right blob - multicolor warm */}
        <motion.div
          style={{ x: blob3X, y: blob3Y, willChange: "transform" }}
          className="absolute -bottom-[10%] -right-[5%] w-[58%] aspect-square"
        >
          <div
            className="w-full h-full rounded-full animate-[meshPulse3_22s_ease-in-out_infinite]"
            style={{
              background: "radial-gradient(circle, rgba(251,146,60,0.5) 0%, rgba(234,88,12,0.35) 30%, rgba(22,163,74,0.25) 50%, transparent 70%)",
              filter: "blur(70px)",
            }}
          />
        </motion.div>

        {/* Bottom-right secondary - yellow/green accent */}
        <motion.div
          style={{ x: blob4X, y: blob4Y, willChange: "transform" }}
          className="absolute bottom-[15%] right-[20%] w-[35%] aspect-square"
        >
          <div
            className="w-full h-full rounded-full animate-[meshPulse4_28s_ease-in-out_infinite]"
            style={{
              background: "radial-gradient(circle, rgba(250,204,21,0.4) 0%, rgba(34,197,94,0.3) 40%, transparent 65%)",
              filter: "blur(55px)",
            }}
          />
        </motion.div>
      </motion.div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen z-10">
        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between px-8 md:px-16 py-8">
          <motion.span
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white/90 text-sm uppercase tracking-widest"
          >
            Caitlyn Marsh
          </motion.span>
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex gap-8"
          >
            <Link href="/#work" className="text-white/70 hover:text-white text-sm uppercase tracking-wider transition-colors">
              Work
            </Link>
            <Link href="/about" className="text-white/70 hover:text-white text-sm uppercase tracking-wider transition-colors">
              About
            </Link>
          </motion.div>
        </nav>

        {/* Hero Content */}
        <div className={`relative z-10 flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-4xl ${
          activeLayout === "detailed" ? "min-h-[calc(100vh-200px)]" : "min-h-[calc(100vh-120px)]"
        }`}>
          <motion.h1
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#5eead4] mb-6"
          >
            {"Hi! I'm Caitlyn"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/60 text-lg md:text-xl leading-relaxed max-w-xl"
          >
            I design thoughtful experiences and lead teams
            <br />
            to create work that feels a little like magic.
          </motion.p>

          {/* Scroll indicator - hidden when overlapping layouts are active */}
          {!["peek", "columns", "detailed"].includes(activeLayout) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-16"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-start"
              >
                <svg
                  className="w-4 h-24 text-[#5eead4]"
                  viewBox="0 0 16 96"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M8 0 L8 88 M8 88 L2 80 M8 88 L14 80" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>
            </motion.div>
          )}
        </div>

      </section>
      
      {/* Case Studies Section */}
      <CaseStudiesSection activeLayout={activeLayout} setActiveLayout={setActiveLayout} />

      {/* Philosophy Section - Dark version */}
      <PhilosophySection />

      {/* Mini About Section - initial visible so content shows without relying on whileInView */}
      <section id="about" className="py-32 px-8 md:px-16 lg:px-24 border-white/10 border-t-0">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-[2fr_3fr] gap-12 items-center"
          >
            {/* Image - Left Column */}
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-white/10 max-w-sm mx-auto md:mx-0">
              <img
                src="/headshot.jpeg"
                alt="Caitlyn Marsh"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text - Right Column */}
            <div className="space-y-6">
              <motion.h2
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-serif text-4xl md:text-5xl text-white"
              >
                Design leader, morning person, and to-do list enthusiast.
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-white/70 leading-relaxed"
              >
                As a <strong className="text-white font-semibold">Senior Manager, Product Design at Asurion</strong>, I lead teams creating enterprise tools that support millions of expert-led experiences every year. I focus on clarity, craft, and designing for real-world complexity, with the belief that great design should feel a little like magic.
              </motion.p>
              

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-[#0d1117] bg-[#5eead4] hover:bg-[#4ac7b3] transition-colors"
                >
                  View my resume
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-base font-medium rounded-md shadow-sm text-white hover:bg-white/10 transition-colors"
                >
                  Learn more
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 md:px-16 lg:px-24 py-16 border-t border-white/10 bg-[#0a0d12]">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-6">
            <p className="text-white/60 text-sm text-center">
              Caitlyn Marsh is a design leader based in Denver, CO
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/caitlynmarsh_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[#5eead4] hover:text-[#5eead4] transition-colors text-white"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/caitlynmarsh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[#5eead4] hover:text-[#5eead4] transition-colors text-white"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>


        </div>
      )
    }

function CaseStudiesSection({ 
  activeLayout, 
  setActiveLayout 
}: { 
  activeLayout: LayoutVariant
  setActiveLayout: (layout: LayoutVariant) => void 
}) {
  const isPeek = activeLayout === "peek"
  const isColumns = activeLayout === "columns"
  const isDetailed = activeLayout === "detailed"
  const hasOverlap = isPeek || isColumns || isDetailed

  return (
    <section id="work" className={`relative z-10 ${hasOverlap ? "pt-0 pb-24" : "py-24"}`}>
      {/* Header - hidden for layouts that overlap hero */}
      {!hasOverlap && (
        <div className="px-8 md:px-16 lg:px-24 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <span className="text-[#5eead4] text-sm uppercase tracking-widest mb-4 block">Selected Work</span>
            <h2 className="font-serif text-4xl md:text-5xl text-white">
              Stories of impact through thoughtful design.
            </h2>
          </motion.div>
        </div>
      )}

      {/* Peek layout shows bento grid below the fold */}
      {isPeek && <PeekFullSection />}
      
      {/* Columns layout - 2 staggered columns */}
      {isColumns && <ColumnsLayout />}
      
      {/* Detailed layout - columns with always-visible info */}
      {isDetailed && <DetailedColumnsLayout />}

      {/* Layout Variants */}
      {!hasOverlap && (
        <motion.div
          key={activeLayout}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeLayout === "editorial" && <EditorialLayout />}
          {activeLayout === "minimal" && <MinimalCardsLayout />}
          {activeLayout === "gallery" && <GalleryGridLayout />}
          {activeLayout === "stacked" && <StackedLayout />}
          {activeLayout === "list" && <CompactListLayout />}
          {activeLayout === "filmstrip" && <FilmstripLayout />}
        </motion.div>
      )}
    </section>
  )
}

function PeekCard({ study, index, aspectClass }: { study: (typeof caseStudies)[0]; index: number; aspectClass: string }) {
  return (
    <Link href={`/case-study/${study.id}`} className={`group relative bg-white/5 rounded-lg overflow-hidden border border-white/10 cursor-pointer ${aspectClass} block`}>
      {/* Background number */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <span className="font-serif text-[6rem] md:text-[8rem] lg:text-[10rem] text-white/5 group-hover:text-[#5eead4]/10 transition-colors duration-500">
          0{index + 1}
        </span>
      </div>

      {/* Hover overlay with title - matching minimal cards style */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <span className="text-[#5eead4] text-xs uppercase tracking-widest mb-2 block">{study.company}</span>
        <h3 className="font-serif text-lg md:text-xl lg:text-2xl text-white">{study.title}</h3>
      </div>

    </Link>
  )
}

function PeekFullSection() {
  return (
    <div className="-mt-[20vh] md:-mt-[25vh] px-8 md:px-16 lg:px-24">
      {/* Bento grid with consistent gaps */}
      <div className="flex flex-col gap-5">
        {/* Row 1: Cards 01 and 02 - offset vertically for peek effect */}
        <div className="flex gap-5 items-end">
          {/* Card 01 - left, sits lower */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="flex-1 mt-[8vh] md:mt-[10vh]"
          >
            <PeekCard study={caseStudies[0]} index={0} aspectClass="aspect-[4/5]" />
          </motion.div>

          {/* Card 02 - right, sits higher (more overlap) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="flex-1"
          >
            <PeekCard study={caseStudies[1]} index={1} aspectClass="aspect-[4/5]" />
          </motion.div>
        </div>

        {/* Row 2: Cards 03 and 04 - equal height row */}
        <div className="flex gap-5">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-[1.4]"
          >
            <PeekCard study={caseStudies[2]} index={2} aspectClass="aspect-[4/3]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex-1"
          >
            <PeekCard study={caseStudies[3]} index={3} aspectClass="aspect-[4/3]" />
          </motion.div>
        </div>

        {/* Row 3: Card 05 - full width */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <PeekCard study={caseStudies[4]} index={4} aspectClass="aspect-[21/9]" />
        </motion.div>

        {/* Row 4: Card 06 - full width */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <PeekCard study={caseStudies[5]} index={5} aspectClass="aspect-[21/9]" />
        </motion.div>
      </div>
    </div>
  )
}

function ColumnsLayout() {
  // Left column: case studies 2, 4, 6 (indices 1, 3, 5)
  // Right column: case studies 1, 3, 5 (indices 0, 2, 4)
  const leftColumn = [caseStudies[1], caseStudies[3], caseStudies[5]]
  const rightColumn = [caseStudies[0], caseStudies[2], caseStudies[4]]

  // For mobile, combine all cards into single column
  const allCards = [...leftColumn, ...rightColumn]

  return (
    <div className="-mt-[calc(15vh+20px)] md:-mt-[calc(20vh+20px)] px-8 md:px-16 lg:px-24">
      {/* Mobile: single column */}
      <div className="flex justify-end md:hidden">
        <div className="w-full flex flex-col gap-5">
          {allCards.map((study, index) => (
            <motion.div
              key={`mobile-${index}`}
              initial={{ opacity: 0, y: 40 }}
              animate={index === 0 ? { opacity: 1, y: 0 } : undefined}
              whileInView={index > 0 ? { opacity: 1, y: 0 } : undefined}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1, ease: "easeOut" }}
            >
              <ColumnsCard study={study} index={study.id - 1} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop: 2 columns, right-aligned, filling ~73% of screen */}
      <div className="hidden md:flex justify-end">
        <div className="w-[73%] flex gap-5">
          {/* Left column - starts lower (less overlap) */}
          <div className="flex-1 flex flex-col gap-5 mt-[15vh]">
            {leftColumn.map((study, index) => (
              <motion.div
                key={`left-${index}`}
                initial={{ opacity: 0, y: 40 }}
                animate={index === 0 ? { opacity: 1, y: 0 } : undefined}
                whileInView={index > 0 ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1, ease: "easeOut" }}
              >
                <ColumnsCard study={study} index={study.id - 1} />
              </motion.div>
            ))}
          </div>

          {/* Right column - starts higher (more overlap into hero) */}
          <div className="flex-1 flex flex-col gap-5">
            {rightColumn.map((study, index) => (
              <motion.div
                key={`right-${index}`}
                initial={{ opacity: 0, y: 40 }}
                animate={index === 0 ? { opacity: 1, y: 0 } : undefined}
                whileInView={index > 0 ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1, ease: "easeOut" }}
              >
                <ColumnsCard study={study} index={study.id - 1} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ColumnsCard({ study, index }: { study: (typeof caseStudies)[0]; index: number }) {
  return (
    <Link href={`/case-study/${study.id}`} className="group relative aspect-[3/4] bg-white/5 rounded-lg overflow-hidden border border-white/10 cursor-pointer block">
      {/* Background number */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-serif text-[10rem] md:text-[14rem] text-white/5 md:group-hover:text-[#5eead4]/10 transition-colors duration-500">
          0{index + 1}
        </span>
      </div>

      {/* Hover overlay with title - always visible on mobile, hover on desktop */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500">
        <span className="text-[#5eead4] text-xs uppercase tracking-widest mb-2 block">{study.company}</span>
        <h3 className="font-serif text-xl md:text-2xl lg:text-3xl text-white">{study.title}</h3>
      </div>

    </Link>
  )
}

function DetailedColumnsLayout() {
  // Left column: case studies 2, 4, 6 (indices 1, 3, 5)
  // Right column: case studies 1, 3, 5 (indices 0, 2, 4)
  const leftColumn = [caseStudies[1], caseStudies[3], caseStudies[5]]
  const rightColumn = [caseStudies[0], caseStudies[2], caseStudies[4]]
  const allCards = [...leftColumn, ...rightColumn]

  return (
    <div className="-mt-[calc(15vh+100px)] md:-mt-[calc(20vh+100px)] px-8 md:px-16 lg:px-24">
      {/* Mobile: single column - initial visible so cards show without relying on whileInView */}
      <div className="flex justify-end md:hidden">
        <div className="w-full flex flex-col gap-5">
          {allCards.map((study, index) => (
            <motion.div
              key={`mobile-detail-${index}`}
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1, ease: "easeOut" }}
            >
              <DetailedCard study={study} index={study.id - 1} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop: 2 columns, right-aligned */}
      <div className="hidden md:flex justify-end">
        <div className="w-[70%] flex gap-5">
          {/* Left column - starts lower (less overlap) */}
          <div className="flex-1 flex flex-col gap-5 mt-[15vh]">
            {leftColumn.map((study, index) => (
              <motion.div
                key={`left-detail-${index}`}
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1, ease: "easeOut" }}
              >
                <DetailedCard study={study} index={study.id - 1} />
              </motion.div>
            ))}
          </div>

          {/* Right column - starts higher (more overlap into hero) */}
          <div className="flex-1 flex flex-col gap-5">
            {rightColumn.map((study, index) => (
              <motion.div
                key={`right-detail-${index}`}
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1, ease: "easeOut" }}
              >
                <DetailedCard study={study} index={study.id - 1} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function DetailedCard({ study, index }: { study: (typeof caseStudies)[0]; index: number }) {
  return (
    <Link href={`/case-study/${study.id}`} className="group relative rounded-lg overflow-hidden border border-white/10 cursor-pointer flex flex-col bg-white/5 block">
      {/* Image area at top - separate from text */}
      <div className="relative aspect-[4/3] bg-white/5 flex-shrink-0 overflow-hidden">
        {"image" in study && study.image ? (
          <img
            src={study.image}
            alt=""
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-serif text-[8rem] md:text-[10rem] text-white/5 group-hover:text-[#5eead4]/10 transition-colors duration-500">
              0{index + 1}
            </span>
          </div>
        )}

      </div>

      {/* Text section - below image on card background */}
      <div className="p-5 md:p-6 flex flex-col flex-1">
        <span className="text-[#5eead4] text-xs uppercase tracking-widest mb-3 block">{study.company}</span>
        
        <h3 className="font-serif text-lg md:text-xl lg:text-2xl text-white mb-2 leading-snug group-hover:text-[#5eead4] transition-colors duration-300">
          {study.title}
        </h3>
        
        <p className="text-white/40 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">{study.description}</p>
        
        {/* Arrow that appears on hover */}
        <div className="flex items-center gap-2 text-white/40 group-hover:text-[#5eead4] transition-colors duration-300">
          <span className="text-xs uppercase tracking-wider">View Project</span>
          <svg 
            className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  )
}

function EditorialLayout() {
  return (
    <div className="mt-8">
      {caseStudies.map((study, index) => (
        <EditorialCase key={study.id} study={study} index={index} />
      ))}
    </div>
  )
}

function EditorialCase({ study, index }: { study: (typeof caseStudies)[0]; index: number }) {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100])
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50])
  const quoteY = useTransform(scrollYProgress, [0, 1], [80, -40])

  const isLeft = study.imagePosition === "left"

  return (
    <div ref={sectionRef} className={`min-h-screen flex flex-col md:flex-row ${isLeft ? "" : "md:flex-row-reverse"} mb-32`}>
      {/* Image Column */}
      <div className="w-full md:w-1/2 relative">
        <motion.div style={{ y: imageY }} className="sticky top-24 mx-8 md:mx-16">
          <div className="aspect-[3/4] max-h-[70vh] bg-white/5 rounded-lg overflow-hidden border border-white/10">
            {"image" in study && study.image ? (
              <img
                src={study.image}
                alt=""
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#5eead4]/10 to-[#0d1117] flex items-center justify-center">
                <span className="font-serif text-9xl text-white/10">0{index + 1}</span>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Content Column */}
      <div className="w-full md:w-1/2 px-8 md:px-16 py-24 md:py-48">
        <motion.div style={{ y: textY }}>
          <div className="flex items-center gap-4 mb-6 text-white/40">
            <span className="text-sm uppercase tracking-widest">{study.company}</span>
            <span className="w-8 h-px bg-current" />
            <span className="text-sm">{study.year}</span>
          </div>

          <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-8 leading-tight">{study.title}</h3>

          <p className="text-white/60 text-lg leading-relaxed mb-12">{study.description}</p>

          <div className="flex items-center gap-4">
            <span className="text-[#5eead4] text-sm uppercase tracking-widest">View Case Study</span>
            <svg className="w-4 h-4 text-[#5eead4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </motion.div>

        {/* Pull Quote */}
        <motion.blockquote style={{ y: quoteY }} className="mt-24 pl-8 border-l-2 border-[#5eead4]/30">
          <p className="font-serif text-2xl text-white/50 italic">&ldquo;{study.quote}&rdquo;</p>
        </motion.blockquote>
      </div>
    </div>
  )
}

function MinimalCardsLayout() {
  return (
    <div className="px-8 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {caseStudies.map((study, index) => (
        <motion.div
          key={study.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group relative aspect-[4/5] bg-white/5 rounded-lg overflow-hidden border border-white/10 cursor-pointer"
        >
          {/* Background number */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-serif text-[12rem] text-white/5 group-hover:text-[#5eead4]/10 transition-colors duration-500">
              0{index + 1}
            </span>
          </div>

          {/* Hover overlay with title */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <span className="text-[#5eead4] text-xs uppercase tracking-widest mb-2 block">{study.company}</span>
            <h3 className="font-serif text-2xl lg:text-3xl text-white">{study.title}</h3>
          </div>

        </motion.div>
      ))}
    </div>
  )
}

function GalleryGridLayout() {
  const gridSizes = ["lg:col-span-2 lg:row-span-2", "lg:col-span-1 lg:row-span-1", "lg:col-span-1 lg:row-span-1"]
  
  return (
    <div className="px-8 md:px-16 lg:px-24 grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-4 auto-rows-[300px] lg:auto-rows-[250px]">
      {caseStudies.map((study, index) => (
        <motion.div
          key={study.id}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className={`group relative bg-white/5 rounded-lg overflow-hidden border border-white/10 cursor-pointer ${gridSizes[index]}`}
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#5eead4]/20 via-transparent to-[#0d1117]" />
          
          {/* Large number */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-serif text-[8rem] lg:text-[12rem] text-white/5 group-hover:scale-110 transition-transform duration-700">
              0{index + 1}
            </span>
          </div>

          {/* Minimal text on hover */}
          <div className="absolute inset-0 bg-[#0d1117]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-center p-6">
              <span className="text-[#5eead4] text-sm uppercase tracking-widest mb-3 block opacity-60 group-hover:opacity-100 transition-opacity">
                {study.company} — {study.year}
              </span>
              <h3 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white max-w-4xl group-hover:translate-x-4 transition-transform duration-500">
                {study.title}
              </h3>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

function StackedLayout() {
  return (
    <div className="space-y-8">
      {caseStudies.map((study, index) => (
        <motion.div
          key={study.id}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="group relative h-[70vh] min-h-[500px] overflow-hidden cursor-pointer"
        >
          {/* Full-width background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#5eead4]/10 via-[#0d1117] to-[#0d1117]">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif text-[20rem] md:text-[30rem] text-white/[0.02] select-none">
                0{index + 1}
              </span>
            </div>
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-[#0d1117]/50" />

          {/* Minimal text overlay */}
          <div className="absolute inset-0 flex items-end">
            <div className="w-full px-8 md:px-16 lg:px-24 pb-16">
              <div className="flex items-center gap-8 mb-2">
                <span className="text-[#5eead4] text-xs uppercase tracking-widest">{study.company}</span>
                <span className="text-white/30 text-xs">{study.year}</span>
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-white group-hover:text-[#5eead4] transition-colors duration-300">
                {study.title}
              </h3>
            </div>
          </div>

          {/* Arrow indicator */}
          <div className="absolute bottom-16 right-8 md:right-16 lg:right-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg className="w-12 h-12 text-[#5eead4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

function CompactListLayout() {
  return (
    <div className="px-8 md:px-16 lg:px-24">
      <div className="border-t border-white/10">
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group border-b border-white/10 py-8 cursor-pointer"
          >
            <div className="flex items-center gap-8">
              {/* Small thumbnail */}
              <div className="hidden md:flex w-20 h-20 bg-white/5 rounded-lg overflow-hidden flex-shrink-0 border border-white/10">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#5eead4]/10 to-transparent">
                  <span className="font-serif text-2xl text-white/20">0{index + 1}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-[#5eead4] text-xs uppercase tracking-widest">{study.company}</span>
                    <span className="text-white/30 text-xs">{study.year}</span>
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl text-white group-hover:text-[#5eead4] transition-colors duration-300">
                    {study.title}
                  </h3>
                </div>

                {/* Arrow */}
                <div className="flex items-center gap-2 text-white/40 group-hover:text-[#5eead4] transition-colors duration-300">
                  <span className="text-xs uppercase tracking-widest">View</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function FilmstripLayout() {
  const scrollRef = useRef<HTMLDivElement>(null)
  
  return (
    <div className="relative">
      {/* Scroll hint */}
      <div className="px-8 md:px-16 lg:px-24 mb-6 flex items-center gap-2 text-white/40">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
        <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
      </div>

      {/* Horizontal scroll container */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-8 px-8 md:px-16 lg:px-24 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="group relative flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] aspect-[16/10] bg-white/5 rounded-lg overflow-hidden border border-white/10 cursor-pointer snap-center"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#5eead4]/15 via-transparent to-[#0d1117]" />
            
            {/* Large background number */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              <span className="font-serif text-[15rem] md:text-[20rem] text-white/[0.03] select-none group-hover:scale-110 transition-transform duration-700">
                0{index + 1}
              </span>
            </div>

            {/* Bottom gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent" />

            {/* Content overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-end justify-between">
                <div>
                  <span className="text-[#5eead4]/70 text-xs uppercase tracking-widest mb-2 block">
                    {study.company}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl text-white max-w-md">
                    {study.title}
                  </h3>
                </div>
                <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-4">
                  <div className="w-12 h-12 rounded-full border border-[#5eead4]/50 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#5eead4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* End spacer */}
        <div className="flex-shrink-0 w-8 md:w-16 lg:w-24" />
      </div>
    </div>
  )
}

function PhilosophySection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const x1 = useTransform(scrollYProgress, [0, 1], [-100, 100])
  const x2 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const x3 = useTransform(scrollYProgress, [0, 1], [-50, 50])

  return (
    <section ref={sectionRef} className="py-32 bg-[#0a0f14] overflow-hidden">
      <div className="space-y-4">
        <motion.div style={{ x: x1 }} className="flex gap-4 whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={`line1-${i}`} className="font-serif text-6xl md:text-8xl text-white/5">
              User-Centered • Research-Driven • Impact-Focused •
            </span>
          ))}
        </motion.div>

        <motion.div style={{ x: x2 }} className="flex gap-4 whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={`line2-${i}`} className="font-serif text-6xl md:text-8xl text-[#5eead4]/10">
              Systems Thinking • Inclusive Design • Craft Obsessed •
            </span>
          ))}
        </motion.div>

        <motion.div style={{ x: x3 }} className="flex gap-4 whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={`line3-${i}`} className="font-serif text-6xl md:text-8xl text-white/5">
              Team Builder • Mentor • Strategic Partner •
            </span>
          ))}
        </motion.div>
      </div>

      <div className="mt-24 px-8 md:px-16 lg:px-24 text-center">
        <motion.p
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-2xl md:text-3xl text-white/70 max-w-2xl mx-auto"
        >
          Design is not just about making things look good—it{"'"}s about making things work for people.
        </motion.p>
      </div>
    </section>
  )
}
