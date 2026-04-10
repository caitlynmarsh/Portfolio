"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { SiteNav } from "@/components/site-nav"
import { QuotesCarousel } from "@/components/quotes-carousel"
import { MessageSquare, Lightbulb, Award, Users, Heart } from "lucide-react"

const TEAM_EXPECTATION_TESTIMONIALS = [
  "Caitlyn is one of the best managers I've ever had. I felt she really cared about me and my growth and gave me specific action items to work on.",
  "She encourages the team to think more critically and asks thoughtful, pointed questions in a way that challenges each designer to think deeper, not defensively.",
  "Caitlyn is a collaborative powerhouse who somehow manages to keep every team in sync, but also gives space for designers to work autonomously.",
  "She's the kind of leader you want in your corner and in your Figma file.",
]

function Section({
  children,
  className = "",
  number,
}: {
  children: React.ReactNode
  className?: string
  number?: string
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {number && (
        <span className="text-[#5eead4] text-sm font-medium tracking-wider mb-4 block">
          {number}
        </span>
      )}
      {children}
    </motion.section>
  )
}

function Aside({ children }: { children: React.ReactNode }) {
  return (
    <aside className="mt-8 pl-6 border-l-4 border-[#5eead4] bg-white/[0.04] py-5 pr-6 rounded-r-lg">
      <p className="text-white/70 leading-relaxed italic text-base md:text-lg">
        {children}
      </p>
    </aside>
  )
}

export default function HowILeadPage() {
  return (
    <div className="bg-[#0d1117] min-h-screen text-white">
      <SiteNav active="how-i-lead" className="border-b border-white/10" />

      <main className="px-8 md:px-16 lg:px-24 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          {/* Hero */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="pb-12 border-b border-white/10"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#5eead4] mb-6 leading-tight">
              How I Lead
            </h1>
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              I care deeply about the work — and just as deeply about the people doing it.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              Over time, I've learned that strong outcomes don't come from clever ideas alone. They come from clarity, trust, and teams who feel supported enough to do ambitious work. The principles below shape how I design, how I give feedback, and how I show up for the people around me.
            </p>
          </motion.header>

          {/* Raise the bar */}
          <Section number="01" className="pt-12 mb-20">
            <h2 className="font-serif text-2xl md:text-3xl text-white mb-6 leading-tight">
              Raise the bar, then help people reach it.
            </h2>
            <div className="space-y-5 text-lg text-white/70 leading-relaxed">
              <p>
                I care deeply about craft and quality, and I'm not shy about setting high standards. But standards without support aren't leadership.
              </p>
              <p>
                I invest time in clear feedback, thoughtful critique, and helping designers see what "great" looks like — and how to get there. Sometimes that means pushing a little harder. Sometimes it means protecting space so someone can do their best work without unnecessary noise.
              </p>
              <p>
                Strong teams don't happen by accident. They're built through consistency, clarity, and care.
              </p>
            </div>
          </Section>

          {/* Invest in people */}
          <Section number="02" className="mb-20">
            <h2 className="font-serif text-2xl md:text-3xl text-white mb-6 leading-tight">
              Invest in people, not just projects.
            </h2>
            <div className="space-y-5 text-lg text-white/70 leading-relaxed">
              <p>
                Projects ship. People grow.
              </p>
              <p>
                I think about development intentionally — what someone wants to get better at, where they feel stuck, where they need stretch. I try to create an environment where it's safe to ask questions, challenge ideas, and admit uncertainty.
              </p>
              <p>
                Psychological safety isn't softness. It's what allows teams to take risks, have honest conversations, and improve faster.
              </p>
              <p>
                When people feel trusted and supported, the work improves naturally.
              </p>
            </div>
          </Section>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="w-screen max-w-none bg-white/[0.04] py-12 md:py-16 mb-20 px-8 md:px-16 lg:px-24 -ml-8 md:-ml-16 lg:-ml-24"
        >
          <QuotesCarousel quotes={TEAM_EXPECTATION_TESTIMONIALS} />
        </motion.section>

        <div className="max-w-3xl mx-auto">
          {/* Build bridges */}
          <Section number="03" className="mb-20">
            <h2 className="font-serif text-2xl md:text-3xl text-white mb-6 leading-tight">
              Build bridges before you need them.
            </h2>
            <div className="space-y-5 text-lg text-white/70 leading-relaxed">
              <p>
                Alignment is part of the design work.
              </p>
              <p>
                Some of the most impactful projects I've led required navigating tension across teams, systems, and priorities. I've learned that relationships built early make hard conversations easier later.
              </p>
              <p>
                Good ideas don't move forward on merit alone — they move when people trust each other enough to build them together.
              </p>
            </div>
            <Aside>
              Field and Portal had long-standing tension. I mapped the end-to-end journey and brought both teams into the conversation around shared outcomes. That artifact shifted the dialogue from ownership to impact and led to principles like "an expert should never enter the same information twice."
            </Aside>
          </Section>

          {/* It isn't done until it's simple */}
          <Section number="04" className="mb-20">
            <h2 className="font-serif text-2xl md:text-3xl text-white mb-6 leading-tight">
              It isn't done until it's simple.
            </h2>
            <div className="space-y-5 text-lg text-white/70 leading-relaxed">
              <p>
                Shipping something that "works" isn't the same as shipping something clear.
              </p>
              <p>
                As a leader, I push for simplicity — not minimalism for its own sake, but clarity that reduces cognitive load and makes the right thing easier to do. That often means asking one more question, refining one more flow, or stepping back to see if we're solving the right problem at all.
              </p>
              <p>
                Simplicity is rarely accidental. It's the result of restraint.
              </p>
            </div>
            <Aside>
              In a Field app redesign we were asked to add more to the start-of-day experience. It would have slowed experts at their most time-sensitive moment. We simplified instead — fewer elements, clearer hierarchy. The result was calmer, more intuitive, and required no retraining.
            </Aside>
          </Section>

          {/* Design for real conditions */}
          <Section number="05" className="mb-20">
            <h2 className="font-serif text-2xl md:text-3xl text-white mb-6 leading-tight">
              Design for real conditions, not ideal ones.
            </h2>
            <div className="space-y-5 text-lg text-white/70 leading-relaxed">
              <p>
                I design for how things actually work in the world — when technology lags, when incentives are misaligned, when users are under pressure, and when systems aren't perfect.
              </p>
              <p>
                That mindset influences how I guide teams. I encourage designers to pressure-test their work:
              </p>
              <p className="pl-4 border-l-2 border-white/20 space-y-2">
                What happens when the app is slow?
                <br />
                What happens when behavior doesn't match our expectations?
              </p>
              <p>
                The goal isn't perfection. It's resilience.
              </p>
            </div>
            <Aside>
              To improve on-time arrival, one proposal was to block experts from arriving early with a timer. We A/B tested that against a flow that guided behavior instead of forcing it. The blocking approach made the metric worse; the flow redesign improved it by clarifying intent and sequencing.
            </Aside>
          </Section>
        </div>

        {/* What my team can expect - full viewport width background */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="w-screen max-w-none bg-white/[0.04] py-16 md:py-20 mb-20 px-8 md:px-16 lg:px-24 -ml-8 md:-ml-16 lg:-ml-24"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-white mb-8 leading-tight">
              What my team can expect from me
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              If you're on my team, you can expect:
            </p>
            <div className="space-y-4 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    text: "Clear expectations and direct, thoughtful feedback",
                    Icon: MessageSquare,
                  },
                  {
                    text: "Context for why decisions are being made",
                    Icon: Lightbulb,
                  },
                  {
                    text: "High standards applied consistently",
                    Icon: Award,
                  },
                ].map(({ text, Icon }, i) => (
                  <div
                    key={i}
                    className="bg-white/5 rounded-lg border border-white/10 p-5 md:p-6 flex flex-col items-start text-left"
                  >
                    <Icon className="w-6 h-6 text-[#5eead4] mb-4 shrink-0" strokeWidth={1.5} />
                    <p className="text-white/80 text-base leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    text: "Space to disagree and be heard",
                    Icon: Users,
                  },
                  {
                    text: "Support when the work gets hard",
                    Icon: Heart,
                  },
                ].map(({ text, Icon }, i) => (
                  <div
                    key={i}
                    className="bg-white/5 rounded-lg border border-white/10 p-5 md:p-6 flex flex-col items-start text-left"
                  >
                    <Icon className="w-6 h-6 text-[#5eead4] mb-4 shrink-0" strokeWidth={1.5} />
                    <p className="text-white/80 text-base leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-lg text-white/70 leading-relaxed">
              I'll push for quality. I'll protect the team when needed. And I'll always be open to learning alongside you.
            </p>
          </div>
        </motion.section>

        <div className="max-w-3xl mx-auto">
          {/* I'm still learning */}
          <Section className="mb-8">
            <h2 className="font-serif text-2xl md:text-3xl text-white mb-6 leading-tight">
              I'm still learning.
            </h2>
            <div className="space-y-5 text-lg text-white/70 leading-relaxed">
              <p>
                Leadership isn't static.
              </p>
              <p>
                I'm continually refining how I balance speed with craft, when to step in versus step back, and how to best create space for others to grow without over-directing. The tools we use are evolving, the problems are getting more complex, and I believe the best leaders adapt with them.
              </p>
              <p>
                I don't pretend to have everything figured out. But I care deeply about getting better — for the team, for the work, and for the people our products serve.
              </p>
            </div>
          </Section>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="pt-12"
          >
            <Link
              href="/"
              className="text-[#5eead4] hover:text-[#5eead4]/80 text-sm uppercase tracking-wider transition-colors"
            >
              ← Back to home
            </Link>
          </motion.div>
        </div>
      </main>

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
