"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { siteBasePath, withBaseAsset } from "@/lib/site-base"

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })
  
  const gradientOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <div className="bg-[#0d1117] relative overflow-x-clip min-h-screen">
      {/* Mesh Gradient Blobs - matching homepage */}
      <motion.div 
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
        style={{ opacity: gradientOpacity }}
      >
        {/* Top-left blob - cyan/teal */}
        <div className="absolute -top-[10%] -left-[5%] w-[52%] aspect-square">
          <div
            className="w-full h-full rounded-full animate-[meshPulse1_25s_ease-in-out_infinite]"
            style={{
              background: "radial-gradient(circle, rgba(45,212,191,0.6) 0%, rgba(34,139,140,0.4) 40%, transparent 65%)",
              filter: "blur(60px)",
            }}
          />
        </div>

        {/* Top-left secondary blob - blue accent */}
        <div className="absolute top-[10%] left-[15%] w-[38%] aspect-square">
          <div
            className="w-full h-full rounded-full animate-[meshPulse2_30s_ease-in-out_infinite]"
            style={{
              background: "radial-gradient(circle, rgba(59,130,246,0.5) 0%, rgba(37,99,235,0.3) 50%, transparent 65%)",
              filter: "blur(50px)",
            }}
          />
        </div>

        {/* Bottom-right blob - multicolor warm */}
        <div className="absolute -bottom-[10%] -right-[5%] w-[58%] aspect-square">
          <div
            className="w-full h-full rounded-full animate-[meshPulse3_22s_ease-in-out_infinite]"
            style={{
              background: "radial-gradient(circle, rgba(251,146,60,0.5) 0%, rgba(234,88,12,0.35) 30%, rgba(22,163,74,0.25) 50%, transparent 70%)",
              filter: "blur(70px)",
            }}
          />
        </div>

        {/* Bottom-right secondary - yellow/green accent */}
        <div className="absolute bottom-[15%] right-[20%] w-[35%] aspect-square">
          <div
            className="w-full h-full rounded-full animate-[meshPulse4_28s_ease-in-out_infinite]"
            style={{
              background: "radial-gradient(circle, rgba(250,204,21,0.4) 0%, rgba(34,197,94,0.3) 40%, transparent 65%)",
              filter: "blur(55px)",
            }}
          />
        </div>
      </motion.div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 md:px-16 py-8">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white/90 text-sm uppercase tracking-widest"
        >
          <Link href="/" className="hover:text-[#5eead4] transition-colors">
            Caitlyn Marsh
          </Link>
        </motion.span>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex gap-8"
        >
          <Link href="/#work" className="text-white/70 hover:text-white text-sm uppercase tracking-wider transition-colors">
            Work
          </Link>
          <Link href="/how-i-lead" className="text-white/70 hover:text-white text-sm uppercase tracking-wider transition-colors">
            How I lead
          </Link>
          <Link href="/about" className="text-white hover:text-[#5eead4] text-sm uppercase tracking-wider transition-colors">
            About
          </Link>
        </motion.div>
      </nav>

      {/* Content */}
      <div ref={heroRef} className="relative z-10 px-8 md:px-16 lg:px-24 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 md:mb-16"
          >
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#5eead4] mb-8">
              Design leader, morning person, and to-do list enthusiast.
            </h1>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={withBaseAsset("/resume.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#5eead4] text-[#0d1117] font-medium rounded-lg hover:bg-[#5eead4]/90 transition-colors"
              >
                View my resume
              </a>
              <a
                href="https://www.linkedin.com/in/caitlynmarsh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-white font-medium rounded-lg hover:border-[#5eead4] hover:text-[#5eead4] transition-colors"
              >
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Image and Opening */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 md:mb-16"
          >
            <div className="relative aspect-[4/3] md:aspect-[16/10] rounded-lg overflow-hidden border border-white/10 mb-8">
              <img
                src={`${siteBasePath}/about-image.jpg`}
                alt="Child painting on a wall"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed">
              Taylor Swift got me into design. <em>Really.</em>
            </p>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed mt-4">
              Back in 2006, her official website was a skeuomorphic mess (kinda nostalgic now in hindsight). I loved her music, but I couldn't stop thinking there had to be a better way to organize and visualize all that information. So I taught myself to code and built one of the first Taylor Swift fansites on the 'net.
            </p>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8 mb-12 md:mb-16"
          >
            <p className="text-lg md:text-xl text-white/70 leading-relaxed">
              Today, I'm a <strong className="text-white font-semibold">Senior Manager, Product Design at Asurion</strong>, where I lead teams designing enterprise tools that support millions of expert-led experiences every year. The majority of my work focuses on the systems behind the scenes — the ones that help experts show up prepared, confident, and able to do their best work for customers.
            </p>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed">
              I care deeply about clarity, craft, and good judgment. I'm especially interested in designing for real conditions: when people are under pressure, when technology isn't perfect, and when trust really matters. I love balancing thoughtful systems with human nuance, and leading teams through complex problems where there isn't a single right answer.
            </p>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed">
              Whether it's a complex end-to-end platform, or a small personal project, I believe design at its best should feel a little like magic.
            </p>
          </motion.div>

          {/* Inspiration Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12 md:mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
              I'm inspired by:
            </h2>
            <ul className="space-y-4 text-lg md:text-xl text-white/70">
              <li className="flex gap-3">
                <span className="text-[#5eead4]">→</span>
                <span>the stillness before sunrise</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#5eead4]">→</span>
                <span>really well-executed gradients</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#5eead4]">→</span>
                <span>things that just <em>work</em></span>
              </li>
            </ul>
          </motion.div>

          {/* Personal Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-12 md:mb-16"
          >
            <p className="text-lg md:text-xl text-white/70 leading-relaxed">
              Outside of work, I'm a lifelong equestrian (my Instagram is mostly dedicated to my horses, Charlie and Dex) and an eternal band geek — I play flute in a local community band. Both remind me what it means to be part of something bigger than yourself: showing up, listening closely, and doing your part well so the whole thing works. If you want to get me talking, bring up horses, music, or designing for imperfect, very human moments.
            </p>
          </motion.div>

          {/* Client Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mb-12 md:mb-16 pt-8 border-t border-white/10"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-8">
              Client Experience
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {/* Asurion */}
              <div className="flex items-center justify-center h-16">
                <img
                  src={`${siteBasePath}/logos/asurion.svg`}
                  alt="Asurion"
                  className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity filter brightness-0 invert"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.parentElement?.querySelector('.logo-fallback');
                    if (fallback) {
                      (fallback as HTMLElement).style.display = 'block';
                    }
                  }}
                />
                <span className="logo-fallback text-white/60 text-sm font-medium hidden">Asurion</span>
              </div>
              
              {/* Slack */}
              <div className="flex items-center justify-center h-16">
                <img
                  src={`${siteBasePath}/logos/slack.svg`}
                  alt="Slack"
                  className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity filter brightness-0 invert"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.parentElement?.querySelector('.logo-fallback');
                    if (fallback) {
                      (fallback as HTMLElement).style.display = 'block';
                    }
                  }}
                />
                <span className="logo-fallback text-white/60 text-sm font-medium hidden">Slack</span>
              </div>
              
              {/* Verizon */}
              <div className="flex items-center justify-center h-16">
                <img
                  src={`${siteBasePath}/logos/verizon.svg`}
                  alt="Verizon"
                  className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity filter brightness-0 invert"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.parentElement?.querySelector('.logo-fallback');
                    if (fallback) {
                      (fallback as HTMLElement).style.display = 'block';
                    }
                  }}
                />
                <span className="logo-fallback text-white/60 text-sm font-medium hidden">Verizon</span>
              </div>
              
              {/* AT&T */}
              <div className="flex items-center justify-center h-16">
                <img
                  src={`${siteBasePath}/logos/att.svg`}
                  alt="AT&T"
                  className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity filter brightness-0 invert"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.parentElement?.querySelector('.logo-fallback');
                    if (fallback) {
                      (fallback as HTMLElement).style.display = 'block';
                    }
                  }}
                />
                <span className="logo-fallback text-white/60 text-sm font-medium hidden">AT&T</span>
              </div>
              
              {/* Deloitte */}
              <div className="flex items-center justify-center h-16">
                <img
                  src={`${siteBasePath}/logos/deloitte.svg`}
                  alt="Deloitte"
                  className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity filter brightness-0 invert"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.parentElement?.querySelector('.logo-fallback');
                    if (fallback) {
                      (fallback as HTMLElement).style.display = 'block';
                    }
                  }}
                />
                <span className="logo-fallback text-white/60 text-sm font-medium hidden">Deloitte</span>
              </div>
              
              {/* Vaco */}
              <div className="flex items-center justify-center h-16">
                <img
                  src={`${siteBasePath}/logos/vaco.svg`}
                  alt="Vaco"
                  className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity filter brightness-0 invert"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.parentElement?.querySelector('.logo-fallback');
                    if (fallback) {
                      (fallback as HTMLElement).style.display = 'block';
                    }
                  }}
                />
                <span className="logo-fallback text-white/60 text-sm font-medium hidden">Vaco</span>
              </div>
              
              {/* TVA */}
              <div className="flex items-center justify-center h-16">
                <img
                  src={`${siteBasePath}/logos/tva.svg`}
                  alt="TVA"
                  className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity filter brightness-0 invert"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.parentElement?.querySelector('.logo-fallback');
                    if (fallback) {
                      (fallback as HTMLElement).style.display = 'block';
                    }
                  }}
                />
                <span className="logo-fallback text-white/60 text-sm font-medium hidden">TVA</span>
              </div>
              
              {/* Rand McNally */}
              <div className="flex items-center justify-center h-16">
                <img
                  src={`${siteBasePath}/logos/rand-mcnally.svg`}
                  alt="Rand McNally"
                  className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity filter brightness-0 invert"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.parentElement?.querySelector('.logo-fallback');
                    if (fallback) {
                      (fallback as HTMLElement).style.display = 'block';
                    }
                  }}
                />
                <span className="logo-fallback text-white/60 text-sm font-medium hidden">Rand McNally</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-8 md:px-16 lg:px-24 py-16 border-t border-white/10 bg-[#0a0d12] relative z-10">
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
