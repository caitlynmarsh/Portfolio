"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { MessageSquare, Lightbulb, Award, Users, Heart } from "lucide-react"

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
      <nav className="relative z-10 flex items-center justify-between px-8 md:px-16 py-8 border-b border-white/10">
        <Link
          href="/"
          className="text-white/90 text-sm uppercase tracking-widest hover:text-[#5eead4] transition-colors"
        >
          Caitlyn Marsh
        </Link>
        <div className="flex gap-8">
          <Link href="/#work" className="text-white/70 hover:text-white text-sm uppercase tracking-wider transition-colors">
            Work
          </Link>
          <Link href="/about" className="text-white/70 hover:text-white text-sm uppercase tracking-wider transition-colors">
            About
          </Link>
        </div>
      </nav>

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
    </div>
  )
}
