"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LayoutGrid, MessageCircle, Sparkles, type LucideIcon } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useCarousel } from "@/components/ui/carousel"

const calloutCardIcons: Record<string, LucideIcon> = {
  LayoutGrid,
  MessageCircle,
  Sparkles,
}

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

const caseStudyData = {
  "1": {
    id: 1,
    company: "Asurion",
    year: "2025",
    title: "Redesigning Field app to reduce friction and unlock scale",
    subtitle: "Creating a clearer, more scalable foundation for Asurion Experts' daily work",
    role: "Sr Manager, Product Design",
    team: "2 designers",
    platform: "Mobile app",
    heroGradient: { from: "#43035B", to: "#AE03A8" },
    heroImage: "/Portfolio/field-app-hero.png",
    problem: {
      content: "The Asurion Field app had outgrown its 2019 MVP foundation. Its architecture buried features and blocked the business from quickly scaling new capabilities. 1,500 experts relied on it daily to complete ~1.2M same-day delivery jobs per year — yet adoption of new features was low and tech debt made iteration increasingly costly and slow.",
    },
    solution: {
      content: "I led a structural redesign of the app's information architecture, introducing a homepage and bottom navigation system, and reorganizing the experience around expert workflows rather than system logic.",
    },
    impact: {
      content: "",
      subsections: [
        {
          subheading: "",
          points: [
            "Improved operational efficiency at national scale",
            "Training time reduced from 3 days to <1 day",
            "Reduced reliance on coaches and help desk for manual support",
            "Increased feature velocity and positioned for long-term tech debt reduction",
          ],
        },
      ],
    },
    sections: [
      {
        eyebrow: "THE CHALLENGE",
        heading: "The app worked — until it didn't",
        content: "By 2025, the Asurion Field app was doing what it had been built to do in 2019: power same-day delivery and setup appointments for customers filing phone insurance claims. On paper, it worked. Experts could complete their jobs. The business continued to operate. But underneath that surface stability, the cracks were widening.",
        asides: [
          "Challenge 01 - Accumulated tech debt created constraints that negatively impacted not only what we could build, but how fast we could deliver it",
          "Challenge 02 - The app's IA wasn't intuitive and required a lot of upfront training to teach Experts where to find things",
          "Challenge 03 - The business was hesitant to invest the time into fixing something that they didn't see as obviously broken",
        ],
        additionalContent: "The app had grown far beyond its original MVP structure. Nearly 1,500 experts relied on it daily to complete ~1.2 million jobs per year nationwide. Yet structurally, it still revolved around a single organizing principle: the job feed. Everything else — performance metrics, sales tools, shift management — either lived inside that feed or was buried behind a hamburger menu. \n\n As we scaled operations and introduced new features, we began seeing a troubling pattern. Adoption was low. Experts weren't using tools they had explicitly requested. In interviews, many didn't even know those features existed. \n\n Training for Field app alone took multiple days of onboarding for new hires. Every new release required additional retraining. Coaches were fielding constant \"how do I…?\" questions. Meanwhile, engineering complexity ballooned because the backend required everything displayed on the main screen to be modeled as a \"job.\" Workarounds compounded. Tech debt slowed velocity. \n\n We could continue operating. But we could not continue scaling like this. \n\n I had been advocating for a structural redesign for over two years. It repeatedly lost prioritization because it didn't promise direct revenue. But the longer we delayed, the more friction accumulated — for experts and for the business.",
        additionalContentImage: "Original app landing page & menu",
        additionalContentImageSrc: "/Portfolio/field-app-old-screens.png",
        additionalContentImageAfterParagraph: 2,
        hasImage: false,
      },
      {
        heading: "Why this work mattered",
        content: "For experts, the result was high cognitive load during already stressful, time-sensitive days; new features were easy to miss; and learning the app required heavy training. For the business, there was no clear place to add new global features, discoverability made it hard to measure feature impact, and scaling the service meant rethinking the app's core structure.",
        subsections: [
          {
            subheading: "For experts",
            points: [
              "High cognitive load during already stressful, time-sensitive days",
              "New features were easy to miss",
              "Learning the app required heavy training",
            ],
          },
          {
            subheading: "For the business",
            points: [
              "No clear place to add new global features",
              "Discoverability issues made it hard to measure feature impact",
              "Scaling the service meant rethinking the app's core structure",
            ],
          },
        ],
        hasImage: false,
      },
      {
        heading: "Securing buy-in for work that didn't have immediate ROI",
        content: "The hardest part of this project wasn't design. It was convincing the organization that foundational work mattered. \n\n Because the redesign wasn't tied to a near-term financial lift, it kept getting pushed down the roadmap. Rather than wait, I began building the future state anyway. Outside of formal prioritization, I created a high-fidelity vision prototype that reimagined the Field app with clear system anchors, intentional navigation, and space to scale.",
        hasImage: true,
        image: "/Portfolio/field-app-early-prototype.png",
        imageCaption: "Early UI exploration",
        additionalContent: "I socialized that vision repeatedly — in product reviews, engineering conversations, leadership check-ins. Instead of arguing abstractly for \"better IA,\" I showed what it could feel like. I framed the redesign around expert quality of life and long-term velocity: faster shipping, lighter training, fewer workarounds. \n\n Over time, that narrative gained traction. Trust I had built with product and engineering partners made it easier to push. When the initiative was finally prioritized, it wasn't because it suddenly had financial ROI — it was because the organization understood the cost of doing nothing.",
      },
      {
        eyebrow: "THE APPROACH",
        heading: "In-field research revealed the hidden cognitive load",
        content: "Once formally greenlit, we grounded the redesign in real-world observation. \n\n We conducted ride-alongs, expert feedback sessions, stakeholder interviews across Ops and Sales Enablement, and analyzed years of SUS data. We also examined business metrics — jobs completed per expert per day, sales performance, and NPS. \n\n What surprised me most wasn't what was inside the app — it was what was happening outside of it. \n\n Experts were creating manual workarounds to compensate for structural gaps. Coaches required them to manually copy their daily job list into Microsoft Teams each morning. Finding a Zoom link for a start-of-day huddle meant digging through chat threads. Performance metrics required either navigating buried menus or asking a manager for a screenshot of PowerBI. \n\n These weren't isolated inconveniences. They were signals that our system architecture didn't reflect the reality of how experts worked.",
        hasImage: false,
      },
      {
        eyebrow: "MY ROLE",
        heading: "Driving alignment cross-functionally",
        content: "I drove the core IA decisions while player-coaching two senior designers — one focused on the Homepage and feed evolution, the other on sales and dashboard integration. Early in the process, I facilitated a cross-functional workshop to align on shared experience principles across design, product, and engineering. That alignment prevented us from solving for features in isolation.",
        subsections: [
          {
            subheading: "1. One place for everything",
            points: ["Experts should manage jobs, track progress, and complete tasks in a single, seamless app. Integrate rather than complicate."],
          },
          {
            subheading: "2. Simplicity is the standard",
            points: ["A feature isn't done until it's intuitive. Remove unnecessary steps, words, and training barriers."],
          },
          {
            subheading: "3. Create a seamless, cohesive experience",
            points: ["Navigation, job management, and updates should feel effortless and consistent across all platforms."],
          },
          {
            subheading: "4. Guide users, don't just inform",
            points: ["Reduce cognitive load with guided workflows, automation, and clear next steps. Prioritize speed, accuracy, and usability."],
          },
          {
            subheading: "5. Assume happy path, but provide a way out",
            points: ["Design for the ideal flow but ensure flexibility when things go wrong. Experts should always have a fix."],
          },
          {
            subheading: "6. Build consumer-grade tools",
            points: ["Experts need intuitive, high-quality tools to deliver top-tier service. Our tools should be as polished, reliable, and easy to use as the best consumer apps."],
          },
        ],
        hasImage: false,
      },
      {
        eyebrow: "THE SOLUTION",
        heading: "From a single feed to a scalable system architecture",
        content: "The original app opened directly to the job feed. It had no true top-level navigation. Everything else lived in a hamburger menu or within a job itself. Structurally, it was flat — and brittle. \n\n I led the definition of a new IA model using what we had learned from our research, as well as leveraging common patterns out in the wild. We introduced a bottom navigation with three primary destinations: a Homepage, the Job Feed, and a dedicated Performance Dashboard.",
        hasImage: true,
        image: "/Portfolio/field-app-ia-diagram.png",
        additionalContent: "The Homepage became a flexible surface for global features — shift management, expense reporting, non-time-bound tasks, and contextual highlights. It gave us a scalable container for capabilities that previously had nowhere logical to live. \n\n We validated the direction through user testing, launched a pilot market, and then rolled out nationwide in a big-bang release approximately two months after formal prioritization.",
      },
      {
        heading: "Dark mode wasn't a trend — it was a safety and usability need",
        content: "Experts often work at night, in cars, or on customers' porches. A bright interface wasn't just uncomfortable — it could be unsafe. We partnered with Asurion's design system team to define color tokens and usage patterns that supported readability, consistency, and scale.",
        additionalContent: "Those standards were later added to the company-wide system, making dark mode reusable beyond Field.",
        hasImage: true,
        image: "/Portfolio/field-app-dark-mode.gif",
        imageAutoplayLoop: true,
      },
      {
        eyebrow: "THE RESULT",
        heading: "Less training, higher adoption, and a system built to scale",
        content: "Upfront training time for Experts dropped from three full days to less than one. Ongoing feature releases no longer required heavy retraining modules; in many cases, lighter communication sufficed because the system made sense. \n\n Performance dashboard utilization increased significantly once it was no longer buried. Experts started viewing their sales metrics on average 3x more often than before, leading to a 12.5% increase in sales. Navigation confusion decreased, and qualitative feedback consistently reflected lower cognitive load and easier task completion.",
        stats: [
          { value: "$1.1M", label: "in annual savings" },
          { value: "12.5%", label: "increase in sales" },
          { value: "50%", label: "decrease in time to launch new features" },
        ],
        statsLarge: true,
        imageBeforeAdditionalContent: "Performance dashboard",
        imageBeforeAdditionalContentSrc: "/Portfolio/field-app-performance-dashboard.png",
        additionalContent: "At our scale, even marginal efficiency gains matter. Saving one minute per job per expert represents roughly $1.1M in annual value. While we did not eliminate all technical debt in a single phase, we fundamentally repositioned the platform to support faster iteration and sustainable growth. \n\n The following year, the business formalized an OKR around evolving systems and reducing tech debt. We were already moving in that direction and well-positioned to continue the momentum.",
        hasImage: false,
      },
      {
        heading: "…And Experts loved it",
        content: "Despite a user base known for skepticism toward change, feedback was overwhelmingly positive. Experts intuitively understood where to find things, even though the app had fundamentally changed.",
        quotes: [
          "I definitely like it. Looks a lot better and I can find things a lot better. It's been great so far! — Expert in Charlotte, NC",
          "I like the new changes. Everything's in one place you don't have to go look for anything. Nice work! — Expert in Nashville, TN",
          "I really like the new design. It definitely is an upgrade, and I love the leaderboard because it shows us where we are at. — Expert in Denver, CO",
          "I absolutely love the new Field app. Looks up to date! Like the colors and bold heading. Feels more modern and interactive. — Expert in Charlotte, NC",
          "It's easy to use and a sleeker look. It is aesthetically pleasing while still being functional. I also think it has a better flow. — Expert in Dallas, TX",
        ],
        hasImage: false,
      },
      {
        eyebrow: "REFLECTION",
        heading: "What this project strengthened in me as a leader",
        content: "This work reinforced the importance of long-horizon advocacy. Foundational redesigns rarely have immediate financial metrics attached to them. Selling them requires vision, trust, and persistence. \n\n It also sharpened my ability to operate as a player-coach — defining strategic direction while staying close enough to the work to guide structural decisions in Figma alongside my team. \n\n If I were to do one thing differently, I would socialize the long-term vision more broadly and earlier. The conviction was there, but earlier visibility may have accelerated alignment. \n\n More than anything, this project reminded me that scalable systems don't happen accidentally. They require someone willing to look beneath what \"works\" and ask whether it will still work at 2x or 5x the scale.",
        hasImage: true,
        image: "/Portfolio/field-app-dark-mode-screens.png",
      },
    ],
  },
  "2": {
    id: 2,
    company: "Asurion",
    year: "2025",
    title: "Designing a system that guides behavior instead of policing it",
    subtitle: "Improving on-time arrival with a carrot, not a stick",
    role: "Principal Designer",
    platform: "Mobile app",
    heroGradient: { from: "#0d3d56", to: "#1a5f7a" },
    heroImage: "/Portfolio/ota-hero.png",
    problem: { content: "On-time arrival was a trust and SLA issue; the app's flow and sequencing contributed to experts arriving outside the customer's window." },
    solution: { content: "We redesigned the flow to make state changes unmistakable and harder to perform accidentally, and A/B tested a flow-based approach against a blocking timer." },
    impact: { content: "On-time arrival improved from roughly 60% to 75%. The work gave the team confidence to investigate system-level constraints with evidence rather than intuition." },
    sections: [
      {
        eyebrow: "THE CHALLENGE",
        heading: "On-time arrival is an important metric for both the business and customers",
        content: "In Asurion Field, \"on-time arrival\" means an expert arriving within the customer's selected two-hour window to deliver and set up a new phone for them. Arriving outside that window — early or late — breaks SLAs with client partners and erodes customer trust.\n\nAt the time of this work, we were contractually expected to stay above 80% on-time. We were hovering around 60%.\n\nThis wasn't a scheduling or routing problem alone. It was a behavior problem — shaped by how the Field app sequenced information, intent, and action at critical moments.",
        asides: [
          "Challenge 01: Experts didn't understand that the job window was chosen by customers, so didn't think it was important to stick to",
          "Challenge 02: The existing app flow made it easy to perform actions incorrectly",
          "Challenge 03: Experts often felt that the routes given to them were impossible to complete on time, so they were looking for other ways to make up time in the day",
          "Challenge 04: Data discrepancies meant we didn't have good visibility into what was really happening in the field in order to know what to improve",
        ],
        asidesGridCols: 2,
        hasImage: false,
      },
      {
        heading: "A tale of two nearly identical screens",
        content: "The biggest breakdown occurred around two adjacent moments in the flow: \"En route\" and \"I've arrived.\"\n\nThe two screens looked visually similar, used nearly identical interactions, and appeared back-to-back. Under time pressure, experts would sometimes swipe through both without realizing it.",
        hasImage: true,
        image: "/Portfolio/ota-old-screens.png",
        imageCaption: `Let's play "Spot the difference"`,
        imageAfterSubsections: true,
        additionalContent: "Additionally, Experts had to leave the app to use their navigation, creating a clunky experience. Even for experts who meant well and really wanted to do the right thing, the Field app made it difficult and cumbersome to do. The old flow required them to go from Field app, to Google Maps, back to Field app, BACK to Google Maps, just to complete 1 step \"correctly\".",
        hasImage2: true,
        image2: "/Portfolio/ota-old-flow.gif",
        visualNote2: "Old flow diagram",
        contentAfterImage2: "App performance issues amplified this. When the app lagged, experts would attempt to swipe \"En route\" again — only for the \"I've arrived\" screen to load in that moment. One extra swipe, and both states were triggered back to back.",
        quote: "Even experts trying to do the right thing were set up to fail.",
        contentAfterQuote: "Before these changes, over 80% of \"en route\" and \"arrived\" events were logged within 2 minutes of each other, despite expected average drive times of around 30 minutes.",
      },
      {
        eyebrow: "THE APPROACH",
        heading: "Fixing this meant changing behavior, not just screens",
        content: "Experts often arrived outside the window the customer chose for understandable reasons. They were trying to work efficiently, get ahead of schedule, or recover time elsewhere in their day. But from a customer's perspective, arriving early could be just as frustrating as arriving late.\n\nCustomers choose appointment windows based on when they'll be home. Showing up outside that window — especially without notice — directly impacted NPS and trust.\n\nThe challenge wasn't convincing experts that on-time arrival mattered. It was designing an experience that made the right behavior the easiest one to perform.",
        hasImage: false,
      },
      {
        heading: "The constraints were non-negotiable",
        content: "We couldn't change the routing system, the two-hour appointment windows, or the client SLAs defining success. Backend logic and scheduling were off the table (for now).\n\nWhat we could change was how the Field app guided behavior: how clearly it communicated state, when it revealed information, and how it sequenced actions under real-world conditions.\n\nThis became a small-surface, high-impact design problem.",
        hasImage: true,
        image: "/Portfolio/en-route.gif",
      },
      {
        heading: "When control feels like the obvious answer — but isn't",
        content: "Early in the project, our some stakeholders came to us with a specific proposal: introduce a screen that would block experts from continuing a job if they arrived too early, outside the appointment window.\n\nOn the surface, this made sense. If early arrival was the problem, prevent it entirely.\n\nFrom an experience perspective, this raised concerns. Blocking progress often just shifts consequences elsewhere in the system. If experts couldn't arrive early, many would inevitably arrive later in the day, compounding delays and frustration.\n\nRather than debate hypotheticals, we A/B tested two versions.",
        hasImage: true,
        imagesSideBySide: ["/Portfolio/ota-ab-test-a.png", "/Portfolio/ota-ab-test-b.png"],
        imagesSideBySideCaptions: [
          "Test A: The hard-blocking timer experience our stakeholders proposed",
          "Test B: A flow-based solution to guide behavior without forcing it",
        ],
        imageAfterSubsections: true,
        additionalContent: "The results were clear: the blocking experience actually made the metric worse compared to the control by about 4%. Preventing early arrivals pushed experts further behind schedule, increasing late arrivals later in the day and leading to more jobs that had to be canceled entirely.\n\nEvidence replaced assumption — and allowed us to move forward with confidence.",
      },
     
      {
        eyebrow: "THE SOLUTION",
        heading: "Designing clarity into moments where ambiguity caused real damage",
        content: "Rather than adding warnings or confirmations, we focused on making state changes unmistakable — and harder to perform accidentally.\n\nWe redesigned the flow so experts had to explicitly mark themselves \"en route\" before accessing navigation. The customer address was intentionally withheld until that moment, while a map-based view with drive time and ETA still gave experts what they needed to communicate with customers.",
        hasImage: true,
        image: "/Portfolio/ota-new-screens.png",
        imageAfterSubsections: true,
        additionalContent: "We also changed the primary action so launching navigation happened after marking \"en route,\" keeping experts in Field long enough to trigger live tracking and customer notifications.\n\nThe goal wasn't to slow experts down. It was to remove ambiguity exactly where ambiguity caused the most harm.",
      },
      {
        eyebrow: "THE RESULT",
        heading: "A few small changes unlocked a measurable shift",
        content: "After launch, on-time arrival improved from roughly 60% to 75%. While still short of our SLA target, this was a significant directional improvement — and a clear signal that behavior and flow design were critical levers.",
        stats: [
          { value: "25%", label: "increase in on-time arrival" },
          { value: "30%", label: "increase in data accuracy" },
        ],
        statsLarge: true,
        statsBeforeAdditionalContent: true,
        additionalContent: "We also saw our data accuracy significantly improve as a result of the changes we made, giving us better insight into the experts' days and how the routing was actually holding up under real-life conditions, like traffic. We saw a huge jump in average drive times reported (from 17 minutes under expected to 23 minutes over), which gave the team confidence to investigate deeper system-level constraints with evidence rather than intuition.",
        hasImage: false,
      },
      {
        eyebrow: "REFLECTION",
        heading: "Pushing for better ideas — and proving them — changed how we worked",
        content: "Alongside the blocking A/B test, I also explored a more holistic redesign of the flow. While initially considered too complex, sharing that work broadly helped leadership see a better long-term path.\n\nWith support from Product leadership, and through creative use of AI-assisted development and a Figma Make–powered handoff, engineering delivered the more ambitious solution two weeks ahead of the original MVP timeline.\n\nThis shifted how the team thought about design's role — not just executing requests, but driving strategy and shaping better outcomes.\n\nThis project reinforced that:",
        subsections: [
          {
            subheading: "",
            points: [
              "Blocking behavior rarely creates trust",
              "Testing is a powerful way to resolve cross-functional tension",
              "Designing for imperfect systems requires empathy and rigor",
            ],
          },
        ],
        additionalContent: "It's an approach I carry forward: push back thoughtfully, test honestly, and let evidence lead.",
        hasImage: false,
      },
    ],
  },
  "3": {
    id: 3,
    company: "Asurion",
    year: "2025",
    title: "Using GenAI to increase sales without losing trust",
    subtitle: "Designing AI as guidance, not a script",
    role: "Senior Manager, Product Design",
    team: "1 designer",
    platform: "Mobile app",
    heroGradient: { from: "#3d2c0d", to: "#7a5c1a" },
    heroImage: "/Portfolio/smartpitch-hero.png",
    problem: { content: "Experts needed strong sales skills; SmartPitch aimed to support them in the moment with tailored guidance without replacing training or crossing into creepy territory." },
    solution: { content: "We designed AI as high-level context and tone guidance rather than scripts, made the AI visible and transparent, and designed within legal and guardrail constraints." },
    impact: { content: "SP100 increased meaningfully in pilots; the work reframed how teams think about AI as thoughtful augmentation. It shaped how we guide teams exploring emerging technology." },
    sections: [
      {
        heading: "Sales success depended on skills many experts didn't sign up for",
        content: "Asurion Field experts are deeply knowledgeable about technology and motivated by helping customers. But to be successful in this role, they also need strong sales skills — something many had to develop through extensive and recurring training.",
        additionalContent: "For experts who weren't natural salespeople, this was taxing. Even with training and best practices, translating what they learned into confident, natural conversations in front of a customer was hard — especially under time pressure. The opportunity wasn't to replace training. It was to support experts in the moment, when it mattered most.",
        asides2: [
          "Challenge 01: Experts were attracted to this job because they love technology and helping people, but don't always have prior experience selling",
          "Challenge 02: Customer data was fragmented across systems and difficult to pull meaning out of",
          "Challenge 03: Because this was a new technology, our Legal team had concerns about how we specifically implemented it",
        ],
        hasImage: false,
      },
      {
        eyebrow: "THE APPROACH",
        heading: "Why AI could help here, and where it couldn't",
        content: "We have rich customer data available before a field visit, gathered through call center interactions and device context. That made it possible to tailor sales guidance to individual customers in a way static scripts never could.\n\nHowever, that data was fragmented across different systems and databases, which made putting it together into something meaningful a challenge in and of itself. Throughout this project, we partnered closely with the data analytics team to improve how and where our customer data is stored and accessed, so that we could show useful insights within Field app.",
        subsections: [
          {
            subheading: "GenAI offered a way to",
            points: [
              "Surface relevant insights quickly",
              "Help experts tailor their pitch to the customer in front of them",
              "Reduce reliance on memorized scripts"
            ]
          },
          {
            subheading: "But this only worked if the content stayed",
            points: [
              "Short and memorable",
              "Broad enough to feel natural",
              "Carefully designed to avoid crossing into \"creepy\" territory"
            ]
          }
        ],
        additionalContent: "The goal was never for experts to read directly from the app. It was to help them internalize guidance and bring it into conversation authentically. We would know if we've done our job well if experts actually spend less time viewing Field app while with customers.",
        hasImage: false,
      },
      {
        heading: "The line between \"helpful\" and \"creepy\" was thin",
        content: "Early explorations made one thing clear very quickly: this could go wrong.",
        additionalContent: "Some early model outputs referenced deeply personal details about customers — how many kids they had, their ages, or specific devices throughout the home. Even if accurate, surfacing that information risked making conversations uncomfortable or unsettling. \n\n A feature designed to help experts could just as easily damage trust with customers. \n\n This became the central design challenge of the project.",
        hasImage: false,
      },
      {
        heading: "Shaping how AI fit into a human conversation",
        content: "I worked as Senior Manager, Product Design, overseeing one senior designer. My focus was on product strategy, placement within the Field app, and the detailed UI decisions that shaped how SmartPitch appeared and behaved.",
        additionalContent: "I partnered closely with Product, Data Science, Legal, and Engineering to define what insights were appropriate to surface, shape guardrails around tone and specificity, and ensure the experience felt supportive, not prescriptive. Design's role here wasn't just execution — it was judgment.",
        hasImage: false,
      },
      {
        eyebrow: "THE APPROACH",
        heading: "Designing AI as guidance, not a script",
        content: "We were intentional about what SmartPitch did not do. Instead of full scripts or overly specific recommendations, we focused on:",
        calloutCards: [
          { icon: "LayoutGrid", text: "High-level customer context that could apply across products" },
          { icon: "MessageCircle", text: "Tone guidance rather than exact phrasing" },
          { icon: "Sparkles", text: "Suggested pitches for a single product, with room to expand later" },
        ],
        additionalContent: "We iterated through pilots, refining prompts so outputs felt distinct enough to be useful without becoming repetitive — and broad enough to stay comfortable in conversation. \n\n We also made the AI visible but transparent. Experts were told the content was GenAI-generated and given guidance on how to use it, helping them trust the information without over-relying on it.",
        hasImage: true,
        image: "/Portfolio/smartpitch-personas.png",
      },
      {
        heading: "Constraints shaped the experience as much as the technology",
        content: "Legal review played a significant role in shaping SmartPitch. There were strict requirements around what experts could say, how products could be positioned, and what claims were allowed. These constraints influenced the language used in prompts and outputs, how insights were framed, and where SmartPitch appeared in the flow. \n\n Rather than fighting those constraints, we designed within them — using structure and clarity to keep the experience safe, compliant, and useful.",
        hasImage: false,
      },
      {
        eyebrow: "THE SOLUTION",
        heading: "How SmartPitch shows up during a job",
        content: "SmartPitch lives directly within the Field app, embedded in the customer's job page.",
        subsections: [
          {
            subheading: "Experts see",
            points: [
              "A highlighted section with high-level customer insight",
              "Tone guidance to shape how they approach the conversation",
              "Suggested pitches for one product, with plans to expand over time"
            ]
          }
        ],
        additionalContent: "The feature is optional, easy to scan, and designed to support — not interrupt — the flow of the job.",
        hasImage: true,
        image: "/Portfolio/smartpitch-screens.png",
      },
      {
        eyebrow: "THE RESULTS",
        heading: "Measurable results in a hard-to-move metric",
        content: "Sales impact was significant.",
        additionalContent: "Sales per 100 jobs (SP100) — historically a difficult metric to move — increased meaningfully across roles and markets. In pilots where SmartPitch was used, SP100 jumped dramatically compared to jobs without it. \n\n Even more telling: only about 9% of eligible jobs had a SmartPitch viewed, suggesting significant upside as usage grows.",
        stats: [
          { value: "33%", label: "increase in sales for full-time experts" },
          { value: "80%", label: "increase in sales for part-time experts" },
        ],
        statsLarge: true,
        statsCentered: true,
        hasImage: false,
      },
      {
        heading: "What success unlocked next",
        content: "The success of SmartPitch shifted internal confidence in AI-assisted tools. What started as an experiment is now planned for expansion to additional platforms across the company, supporting other expert roles beyond Field, and is a key driver for achieving the company's revenue goals for 2026.",
        additionalContent: "Perhaps more importantly, it reframed how teams think about AI: Not as automation, not as replacement, and not as a chatbot slapped on top of the product, but as thoughtful augmentation when designed with care.",
        hasImage: false,
      },
      {
        eyebrow: "REFLECTION",
        heading: "Key takeaways from designing with AI",
        content: "This project reinforced that designing with AI is less about capability and more about restraint.",
        additionalContent: "Concise content, clear guardrails, and transparency mattered more than sophistication. Designing for trust — with both experts and customers — was the real challenge. \n\n It was a strong first step in bringing GenAI into Field in a prominent way, and it shaped how I now guide teams exploring emerging technology: start with the human moment, then decide what technology earns a place there.",
        hasImage: false,
      }
    ],
  },
  "4": {
    id: 4,
    company: "Asurion & uBreakiFix",
    year: "2026",
    title: "Fixing a fragmented experience across systems",
    subtitle: "Bridging teams and systems to create a seamless end-to-end experience",
    role: "Senior Manager, Product Design",
    team: "4 designers",
    platform: "Mobile app + Desktop app",
    heroGradient: { from: "#1e2d4d", to: "#3d5a80" },
    heroImage: "/Portfolio/case-study-4-hero.png",
    problem: { content: "A single repair job spanned multiple tools; systems were fragmented, and work was duplicated and sometimes contradictory." },
    solution: { content: "We aligned teams and designed a seamless experience that bridged Field app and Portal, requiring cross-team trust and design as neutral ground." },
    impact: { content: "Teams shifted how they talked about the experience; alignment and cross-functional relationships improved." },
    sections: [
      {
        heading: "Nothing about this experience was end to end, even though the work was",
        content: "Remote technicians supported customers through complex on-site repairs, but the systems meant to support that work were deeply fragmented. A single job spanned multiple tools: the Field app, the NextGen Portal, Honeycomb, a third-party routing system, and the underlying routing engine.",
        additionalContent: "Each system had been built with good intentions, but not with each other in mind. For technicians, this meant constantly switching contexts while trying to stay efficient, accurate, and on schedule.",
        visualNote: "High-level system map showing all tools involved in one job",
        hasImage: true,
      },
      {
        heading: "The work wasn't just duplicated, it was contradictory",
        content: "Throughout a single repair, technicians were required to enter the same information multiple times. A pre-inspection completed with the customer in Field app had to be re-entered later in Portal just to advance the job.",
        additionalContent: "Swiveling between systems wasn't optional. It was required. Worse, the systems didn't always agree. Sync issues meant data could be inconsistent, leaving technicians unsure which source of truth to trust. When something couldn't be done in Field app by design, technicians would move to Portal to continue the job anyway, even when the business explicitly didn't want that behavior. This wasn't malicious. It was rational behavior in a broken system.",
        quote: "If a technician's pay depends on completing more jobs, they'll do whatever the system allows them to do.",
        visualNote: "Before-state journey showing multiple system switches and duplicated steps",
        hasImage: true,
      },
      {
        heading: "Trust eroded even when the problem wasn't Field's fault",
        content: "One of the most damaging side effects came from routing.",
        additionalContent: "A third-party system generated inefficient routes that were visualized in Field app. Even though Field wasn't responsible for routing logic, it was the interface technicians interacted with — so it absorbed the blame. Over time, this chipped away at trust in Field app itself. The result was a vicious cycle: more workarounds, more system switching, and less confidence that any single tool could be relied on end to end.",
        hasImage: false,
      },
      {
        heading: "A simple question revealed how broken things were",
        content: "During ride-alongs, one moment stood out again and again.",
        additionalContent: "Technicians would complete a required phone pre-inspection with the customer in Field app, then walk back to their van and do the exact same inspection again in Portal just to move the job forward. The reaction was consistent. That question became the emotional core of the project.",
        quote: "If we're a technology company, why can't our systems talk to each other?",
        hasImage: false,
      },
      {
        heading: "I was in a unique position to bridge teams that didn't always trust each other",
        content: "I worked in a hybrid role as Senior Manager, Product Design and IC at different points in the project. I drove stakeholder alignment and high-level direction while also designing across both Field app and Portal.",
        additionalContent: "This work required navigating long-standing tension between teams. Historically, the Field and Portal teams had operated in silos, with a degree of distrust on both sides. I was able to bridge that gap because I had spent over six years deeply embedded on the Field app team and had recently moved to the Portal team, where I was actively building relationships. That context allowed me to reframe conversations around the shared customer and technician experience, rather than technical ownership or constraints. Design became the neutral ground.",
        visualNote: "Service blueprint spanning both systems, used as an alignment artifact",
        hasImage: true,
      },
      {
        heading: "Mapping the journey made the problem impossible to ignore",
        content: "To ground the work, I created a service blueprint informed by technician interviews, ride-alongs, and stakeholder conversations. This wasn't just a documentation exercise — it was a tool for alignment.",
        subsections: [
          {
            subheading: "Once the entire journey was mapped, two things became clear",
            points: [
              "The number of steps and clicks required to complete a job was staggering",
              "Technicians were using the systems in ways we hadn't anticipated when the program originally launched in 2020"
            ]
          }
        ],
        additionalContent: "Seeing the full journey laid out made it impossible to treat these as isolated UI problems.",
        visualNote: "Condensed service blueprint highlighting swivel points",
        hasImage: true,
      },
      {
        heading: "We couldn't fix everything, so we chose the moments that mattered most",
        content: "Given the scope, we made a deliberate decision to focus on the core job flow from start to finish. Beginning-of-day and end-of-day tasks like inventory management were intentionally left out of scope for this iteration.",
        subsections: [
          {
            subheading: "The most critical moments to make seamless were",
            points: [
              "Being with the customer",
              "Moving back to the van to complete the repair",
              "Returning the device to the customer"
            ]
          }
        ],
        additionalContent: "We knew we couldn't eliminate every system transition, but we could make them less painful — and more coherent.",
        hasImage: false,
      },
      {
        heading: "One principle unlocked real change",
        content: "Early on, the teams aligned on a deceptively simple principle:",
        quote: "An expert should never have to enter the same information twice.",
        additionalContent: "That principle became a powerful guardrail. It forced meaningful changes across systems and shifted conversations from \"what's easiest to build\" to \"what actually helps technicians do their jobs.\"",
        hasImage: false,
      },
      {
        heading: "Small fixes with outsized impact",
        content: "One change in particular had a huge effect.",
        additionalContent: "Previously, if the issue a customer reported during scheduling didn't perfectly match what the technician discovered on arrival, Field app would block the job. The technician couldn't proceed, and the customer had to book a new appointment. In reality, technicians often fixed the device anyway using unofficial workarounds — creating downstream issues with inventory tracking and store payments. We redesigned the flow to allow technicians to continue the job legitimately when issues differed. This removed a major source of friction, improved the customer experience, and eliminated the need for risky workarounds that had been quietly harming the business.",
        quote: "What felt like a small fix to technicians required significant internal coordination — and was worth it.",
        visualNote: "Before/after flow showing the removed hard stop",
        hasImage: true,
      },
      {
        heading: "Measuring success meant waiting, but confidence was already higher",
        content: "This work hasn't launched yet, so metrics are still to come. Even without numbers, the impact was clear in how teams talked about the experience.",
        additionalContent: "There was stronger shared ownership across systems, fewer arguments about \"whose problem this was,\" and more confidence that the product ecosystem could actually support technicians end to end.",
        hasImage: false,
      },
      {
        heading: "This project reinforced that nothing moves without trust",
        content: "This work reinforced a simple truth: nothing exists in a vacuum.",
        additionalContent: "Great design doesn't move forward without strong relationships. Fancy UI means very little if teams aren't aligned enough to build it. Politics, history, and incentives matter just as much as flows and screens. Going forward, I invest earlier in relationships — within and beyond my immediate product team — before pushing hard on strategy or design direction. Alignment isn't a nice-to-have. It's the work.",
        hasImage: false,
      }
    ],
  },
  "5": {
    id: 5,
    company: "EvenStride app",
    year: "2026",
    title: "Designing confidence into equine recovery, one ride at a time",
    subtitle: "Building an iOS app to support consistent equine rehabilitation",
    role: "Designer & Developer",
    platform: "iOS app",
    heroGradient: { from: "#0d3d2a", to: "#1a5c45" },
    heroImage: "/Portfolio/placeholder.svg",
    problem: { content: "Rehab plans were simple on paper but hard to follow in practice; cognitive overhead and consistency mattered for equine recovery." },
    solution: { content: "I built an iOS MVP—rehab plan builder and guided execution—using vibe coding (Cursor, Xcode), with sound/haptics for in-motion use." },
    impact: { content: "A usable app for consistent rehab rides; expanded how I think about exploration, iteration, and the barrier between idea and artifact." },
    sections: [
      {
        heading: "Rehab plans were simple on paper and hard in real life",
        content: "Horse rehabilitation plans often look straightforward. Walk for a certain number of minutes. Add a small amount of trot each week. Progress slowly over months.",
        additionalContent: "In practice, they're surprisingly hard to follow. When you're in the middle of a long rehab cycle, it's easy to forget details like whether this week calls for ten minutes of walk and two minutes of trot, or fifteen minutes and one. The cognitive overhead adds up — especially when you're trying to do right by an animal whose recovery depends on consistency. This wasn't an abstract problem. It was one I was living through, alongside other members of my barn community.",
        visualNote: "Early sketches or a simple text-based rehab plan screenshot, to ground the problem",
        hasImage: true,
      },
      {
        heading: "The goal wasn't speed, it was confidence",
        content: "The intent of this app wasn't to push riders to progress faster. It was the opposite.",
        additionalContent: "I wanted to reduce the mental burden of remembering a plan and make it easier to execute exactly as prescribed. When progress is slow and incremental, confidence matters. Knowing you're doing the right thing — even when it feels boring or frustrating — makes it easier to stick with the plan and avoid re-injury. This app is about trust in small steps adding up over time.",
        hasImage: false,
      },
      {
        heading: "An app made sense because this had to work while riding",
        content: "I chose to build this as an iOS app for two reasons.",
        additionalContent: "First, I wanted to push myself to learn how to build a functioning app through vibe coding, rather than stopping at a prototype. Second, this experience needed to work in motion. When you're riding, you can't stop to check a screen every few minutes. That meant the experience had to rely on sound, haptics, or simple cues to guide gait changes — similar to human interval training apps, but adapted for equine rehab. There weren't existing tools in the market that did this well, and none built specifically for horses.",
        visualNote: "Early app screens showing the rehab plan builder or execution mode",
        hasImage: true,
      },
      {
        heading: "Choosing constraints on purpose",
        content: "To keep the project grounded, I set clear constraints up front.",
        additionalContent: "This is an iOS-only MVP with no backend, no authentication, and a deliberately narrow scope. The focus is a simple rehab plan builder and a guided way to execute that plan consistently. I intentionally avoided building full ride tracking or performance analytics. Those problems are already well-served by other apps, and competing there wasn't the goal. This project is about execution, not measurement.",
        hasImage: false,
      },
      {
        heading: "Designing by building helped me get past the blank page",
        content: "I chose to vibe code this project using Cursor and Xcode, with Figma as a supporting tool rather than the primary output.",
        additionalContent: "Most of my professional work involves iterating on existing systems. Starting from zero can be intimidating. Using AI to help generate a rough first version made it easier to get unstuck. Even when the first attempt failed completely — which it did — having something tangible made it easier to regroup and try again. Once a basic version existed, I could fall back into familiar territory: refining interactions, improving hierarchy, and polishing the experience.",
        quote: "The first version didn't need to be good. It just needed to exist.",
        visualNote: "Rough early build screenshots next to more refined iterations",
        hasImage: true,
      },
      {
        heading: "What's working so far, and what's still unresolved",
        content: "The current version supports building a rehab plan and guiding its execution, with push notifications used as a workaround for gait changes. Those notifications can surface on Apple Watch if enabled, which helps, but isn't as integrated as I'd like.",
        additionalContent: "The biggest unresolved piece is a proper Apple Watch companion app. That was the original vision — using haptics and simple visuals to guide riders without requiring a phone. My first attempt at this failed due to complexity, so for now I've focused on stabilizing the core iOS experience. This is still very much a work in progress.",
        visualNote: "Annotated screenshot noting \"current workaround\" vs \"future direction\"",
        hasImage: true,
      },
      {
        heading: "Success, for now, is personal",
        content: "At this stage, success is simple: something I can use consistently during rehab rides, without second-guessing the plan or doing mental math.",
        additionalContent: "Longer-term, I'd love to share this with my barn community and potentially release it more broadly. There's space in the market for something like this, and if it proves useful beyond my own use, I'd be excited to keep iterating and see where it goes.",
        hasImage: false,
      },
      {
        heading: "What this project has already changed for me",
        content: "Vibe coding has made it possible to turn ideas into real, usable things in a way that wasn't accessible before. In the past, the best outcome might have been a Figma prototype. Now, I can build something functional and learn from using it in the real world.",
        additionalContent: "As a design leader, this has shifted how I think about exploration and iteration. The barrier between idea and artifact is lower than it's ever been, and that opens up new ways of learning, experimenting, and guiding teams toward better outcomes. This project is still evolving, but it's already expanded how I think about what's possible.",
        hasImage: false,
      }
    ],
  },
  "6": {
    id: 6,
    company: "Case Study 6",
    year: "2026",
    title: "Case Study 6 Title",
    subtitle: "Case Study 6 Subtitle",
    role: "Design Role",
    team: "Team size",
    platform: "Placeholder Platform",
    heroImage: "/Portfolio/field-app-case-study-6-header.png",
    problem: { content: "Placeholder problem summary for case study 6." },
    solution: { content: "Placeholder solution summary for case study 6." },
    impact: { content: "Placeholder impact summary for case study 6." },
    sections: [
      {
        heading: "Project Overview",
        content: "This is a placeholder case study. Content will be added here when ready.",
        hasImage: false,
      },
      {
        heading: "The Challenge",
        content: "Placeholder content describing the challenge or problem that was addressed in this project.",
        hasImage: true,
        visualNote: "Placeholder image or visual",
      },
      {
        heading: "The Solution",
        content: "Placeholder content describing the approach and solution that was developed.",
        hasImage: false,
      },
      {
        heading: "Results and Impact",
        content: "Placeholder content describing the outcomes and impact of the project.",
        hasImage: true,
        visualNote: "Placeholder results visualization",
      },
    ],
  },
}

export default function CaseStudyContent({ studyId }: { studyId: string }) {
  // Add safety check
  if (!studyId) {
    return (
      <div className="min-h-screen bg-[#0d1117] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-white mb-4">Loading...</h1>
        </div>
      </div>
    )
  }

  const study = caseStudyData[studyId as keyof typeof caseStudyData]

  if (!study) {
    // Add debug info (remove in production)
    console.log('Study ID received:', studyId)
    console.log('Available keys:', Object.keys(caseStudyData))
    
    return (
      <div className="min-h-screen bg-[#0d1117] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-white mb-4">Case Study Not Found</h1>
          <p className="text-white/60 mb-4">ID: {studyId}</p>
          <Link href="/" className="text-[#5eead4] hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  // Calculate next and previous case study IDs
  const currentId = parseInt(studyId)
  if (isNaN(currentId)) {
    return (
      <div className="min-h-screen bg-[#0d1117] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-white mb-4">Invalid Case Study ID</h1>
          <Link href="/" className="text-[#5eead4] hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    )
  }
  
  const allIds = Object.keys(caseStudyData).map(Number).sort((a, b) => a - b)
  const currentIndex = allIds.indexOf(currentId)
  const prevId = currentIndex > 0 ? allIds[currentIndex - 1] : allIds[allIds.length - 1]
  const nextId = currentIndex < allIds.length - 1 ? allIds[currentIndex + 1] : allIds[0]

  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 bg-[#0d1117]/80 backdrop-blur-md border-b border-white/10 z-40">
        <div className="flex items-center justify-between px-8 md:px-16 py-6">
          {/* Close button */}
          <Link href="/" className="text-white/90 hover:text-[#5eead4] transition-colors group">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </Link>

          {/* Navigation buttons */}
          <div className="flex items-center gap-6">
            <Link 
              href={`/case-study/${prevId}`}
              className="text-white/60 text-xs uppercase tracking-wider hover:text-[#5eead4] transition-colors"
            >
              ← Previous
            </Link>
            <Link 
              href={`/case-study/${nextId}`}
              className="text-white/60 text-xs uppercase tracking-wider hover:text-[#5eead4] transition-colors"
            >
              Next →
            </Link>
          </div>
        </div>
      </div>

      {/* Content - initial opacity 1 so content is visible before Framer Motion runs (e.g. static export / slow JS) */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroFadeLayout study={study} nextId={nextId} nextStudy={caseStudyData[nextId.toString() as keyof typeof caseStudyData]} />
      </motion.div>
    </div>
  )
}

// Hero Fade Layout - Full bleed hero image with gradient fade into content
function HeroFadeLayout({ 
  study, 
  nextId, 
  nextStudy 
}: { 
  study: typeof caseStudyData[keyof typeof caseStudyData]
  nextId: number
  nextStudy: typeof caseStudyData[keyof typeof caseStudyData] | undefined
}) {
  const useHeroImage = "heroImage" in study && study.heroImage

  return (
    <div className="relative">
      {useHeroImage ? (
        /* Case study 6: header image below fixed nav */
        <div className="w-full flex justify-center bg-[#0d1117] pt-16">
          <div className="w-full max-w-[1920px] h-[280px] sm:h-[360px] md:h-[524px] overflow-hidden">
            <img
              src={study.heroImage}
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      ) : (
        /* Hero gradient section — shorter height, per-study colors */
        <div className="relative h-[28vh] md:h-[32vh] overflow-hidden">
          {/* Per-case-study gradient background */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "heroGradient" in study && study.heroGradient
                  ? `linear-gradient(to bottom, ${study.heroGradient.from}, ${study.heroGradient.to})`
                  : "linear-gradient(to bottom, #43035B, #AE03A8)",
            }}
          />

          {/* Gradual fade from top into page background (starts near top, full height) */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, transparent 0%, rgba(13,17,23,0.3) 35%, rgba(13,17,23,0.85) 70%, #0d1117 100%)",
            }}
          />
        </div>
      )}

      {/* Content overlapping the fade (closer to top); when hero image, content sits below with no overlap */}
      <div className={`relative px-8 md:px-16 lg:px-24 ${useHeroImage ? "pt-8 md:pt-12" : "-mt-24"}`}>
        <div className="max-w-6xl">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="text-[#5eead4] text-sm uppercase tracking-widest">{study.company} — {study.year}</div>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight text-balance">
              {study.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/60 max-w-3xl">{study.subtitle}</p>
            <div className="flex gap-6 md:gap-8 pt-4 pb-8">
              <div>
                <span className="text-sm text-gray-400 uppercase tracking-wider block mb-1">Role</span>
                <span className="text-base text-white/80">{study.role}</span>
              </div>
              {"team" in study && study.team && (
              <div>
                <span className="text-sm text-gray-400 uppercase tracking-wider block mb-1">Team</span>
                <span className="text-base text-white/80">{study.team}</span>
              </div>
              )}
              {study.platform && (
                <div>
                  <span className="text-sm text-gray-400 uppercase tracking-wider block mb-1">Platform</span>
                  <span className="text-base text-white/80">{study.platform}</span>
              </div>
            )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content sections: Problem, Solution, Impact in two-column layout, then sections */}
      <div className="px-8 md:px-16 lg:px-24 pt-6 pb-24">
        {"problem" in study && study.problem && "solution" in study && study.solution && "impact" in study && study.impact && (
          <div className="w-full mt-6 mb-32 px-8 py-10 rounded-xl bg-white/[0.04]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12">
            {/* Column 1: Problem */}
            <div className="space-y-4">
              <p className="text-[#5eead4] text-sm uppercase tracking-wider mb-2">Problem</p>
              <p className="text-base text-white/70 leading-relaxed">
                {(study.problem as { content: string }).content}
              </p>
            </div>
            {/* Column 2: Solution */}
            <div className="space-y-4">
              <p className="text-[#5eead4] text-sm uppercase tracking-wider mb-2">Solution</p>
              <p className="text-base text-white/70 leading-relaxed">
                {(study.solution as { content: string }).content}
              </p>
            </div>
            {/* Column 3: Impact */}
            <div className="space-y-4">
              <p className="text-[#5eead4] text-sm uppercase tracking-wider mb-2">Impact</p>
              {(study.impact as { content?: string; subsections?: Array<{ subheading: string; points: string[] }> }).subsections?.length ? (
                (study.impact as { subsections: Array<{ points: string[] }> }).subsections.map((sub, j) => (
                  <ul key={j} className="space-y-3">
                    {(sub.points ?? []).map((point, k) => (
                      <li key={k} className="text-base text-white/60 leading-relaxed flex gap-3">
                        <span className="text-[#5eead4]">→</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ))
              ) : (
                <p className="text-base text-white/70 leading-relaxed">
                  {(study.impact as { content: string }).content}
                </p>
              )}
            </div>
            </div>
          </div>
        )}

        {/* Remaining sections */}
        {(study.sections as Array<{
          heading: string
          content: string
          eyebrow?: string
          additionalContent?: string
          quote?: string
          subsections?: Array<{ subheading: string; points: string[] }>
          stats?: Array<{ label: string; value: string }>
          statsLarge?: boolean
          statsCentered?: boolean
          quotes?: string[]
          asides?: string[]
          asidesGridCols?: 2 | 3
          strikethroughContent?: string
          hasImage?: boolean
          image?: string
          visualNote?: string
          imageCaption?: string
          imagesSideBySide?: string[]
          imagesSideBySideCaptions?: string[]
          imageAutoplayLoop?: boolean
          imageAfterSubsections?: boolean
          hasImage2?: boolean
          image2?: string
          visualNote2?: string
          imageCaption2?: string
          contentAfterImage2?: string
          contentAfterQuote?: string
          asides2?: string[]
          statsBeforeAdditionalContent?: boolean
          additionalContentImage?: string
          additionalContentImageSrc?: string
          additionalContentImageAfterParagraph?: number
          imageBeforeAdditionalContent?: string
          imageBeforeAdditionalContentSrc?: string
          calloutCards?: Array<{ icon: string; text: string }>
        }>).map((section, i) => (
          <div
            key={i}
            className={`max-w-4xl mx-auto space-y-8 ${i === 0 ? "" : "mt-32"}`}
          >
            {section.eyebrow && (
              <p className="text-[#5eead4] text-sm uppercase tracking-wider mb-2">{section.eyebrow}</p>
            )}
            {section.heading && (
              <h2 className="text-3xl md:text-4xl font-serif text-white leading-tight text-balance">{section.heading}</h2>
            )}
            {section.content && (
              <div className="space-y-4">
                {section.content.split(/\n\n+/).map((para, idx) => (
                  <p key={idx} className="text-lg text-white/70 leading-relaxed">{para.trim()}</p>
                ))}
              </div>
            )}

            {section.asides && section.asides.length > 0 && (
              <div className={`grid gap-4 py-4 ${section.asidesGridCols === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 md:grid-cols-3"}`}>
                {section.asides.map((aside, j) => {
                  const challengeMatch = aside.match(/^(Challenge \d+\s*[:\-]\s*)(.*)$/i)
                  return (
                    <div key={j} className="bg-white/5 border border-white/10 rounded-lg px-5 py-4">
                      {challengeMatch ? (
                        <>
                          <div className="text-sm font-semibold text-white/90 mb-1.5">{challengeMatch[1].replace(/\s*[:\-]\s*$/, "").trim()}</div>
                          <p className="text-sm text-white/70 leading-relaxed">{challengeMatch[2]}</p>
                        </>
                      ) : (
                        <p className="text-sm text-white/70 leading-relaxed">{aside}</p>
                      )}
                    </div>
                  )
                })}
              </div>
            )}

            {section.strikethroughContent && (
              <p className="text-lg text-white/50 leading-relaxed line-through">{section.strikethroughContent}</p>
            )}

            {section.calloutCards && section.calloutCards.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
                {section.calloutCards.map((card, j) => {
                  const IconComponent = calloutCardIcons[card.icon]
                  return (
                    <div key={j} className="bg-white/5 border border-white/10 rounded-lg px-5 py-4 flex flex-col gap-3 items-start">
                      {IconComponent && (
                        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#5eead4]">
                          <IconComponent className="w-5 h-5" strokeWidth={1.5} />
                        </div>
                      )}
                      <p className="text-sm text-white/70 leading-relaxed">{card.text}</p>
                    </div>
                  )
                })}
              </div>
            )}

            {section.subsections && (
              <div className="grid md:grid-cols-2 gap-8">
                {section.subsections.map((sub, j) => (
                  <div key={j} className="space-y-4">
                    {sub.subheading && (
                      <h3 className="text-xl font-serif text-white">{sub.subheading}</h3>
                    )}
                    <ul className="space-y-3">
                      {sub.points.map((point, k) => (
                        <li key={k} className="text-white/60 leading-relaxed flex gap-3">
                          <span className="text-[#5eead4]">→</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {section.imageAfterSubsections && section.hasImage && (
              <div className="space-y-2">
                {section.imagesSideBySide && section.imagesSideBySide.length >= 2 ? (
                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    {section.imagesSideBySide.map((src, imgIdx) => {
                      const sideCaption = section.imagesSideBySideCaptions?.[imgIdx]
                      return (
                        <div key={imgIdx} className="space-y-2 min-w-0">
                          <div className="rounded-lg overflow-hidden border border-white/10 bg-white/5 w-full min-w-0">
                            <img
                              src={src}
                              alt=""
                              className="w-full h-auto block max-w-full"
                              loading="lazy"
                            />
                          </div>
                          {sideCaption ? (
                            <p className="text-sm text-white/50 text-center px-0.5 leading-snug">{sideCaption}</p>
                          ) : null}
                        </div>
                      )
                    })}
                  </div>
                ) : (
                  <div className={`rounded-lg overflow-hidden border border-white/10 bg-white/5 ${section.image ? "w-full" : "aspect-[16/10]"}`}>
                    {section.image ? (
                      <img
                        src={section.image}
                        alt=""
                        className="w-full h-auto block max-w-full"
                        loading={section.imageAutoplayLoop ? "eager" : "lazy"}
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center">
                        <span className="font-serif text-9xl text-white/10 mb-4">0{study.id}</span>
                        <p className="text-xs text-white/30 uppercase tracking-wider px-6 text-center">{section.visualNote ?? ""}</p>
                      </div>
                    )}
                  </div>
                )}
                {section.imageCaption && (
                  <p className="text-sm text-white/50 text-center">{section.imageCaption}</p>
                )}
              </div>
            )}
            
            {section.stats && section.statsBeforeAdditionalContent && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 py-10 max-w-2xl mx-auto">
                {section.stats.map((stat, j) => (
                  <div key={j} className="text-center">
                    <div className={`font-serif text-[#5eead4] mb-3 ${section.statsLarge ? "text-6xl md:text-7xl" : "text-5xl"}`}>{stat.value}</div>
                    <div className="text-sm text-white/40 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}

            {section.imageBeforeAdditionalContent && (
              <div className="space-y-2">
                <div className="rounded-lg overflow-hidden border border-white/10 bg-white/5 aspect-[16/10]">
                  {section.imageBeforeAdditionalContentSrc ? (
                    <img src={section.imageBeforeAdditionalContentSrc} alt="" className="w-full h-full object-cover block" />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center">
                      <span className="font-serif text-9xl text-white/10 mb-4">0{study.id}</span>
                      <p className="text-xs text-white/30 uppercase tracking-wider px-6 text-center">{section.imageBeforeAdditionalContent}</p>
                    </div>
                  )}
                </div>
                {section.imageBeforeAdditionalContentSrc && section.imageBeforeAdditionalContent && (
                  <p className="text-sm text-white/50 text-center">{section.imageBeforeAdditionalContent}</p>
                )}
              </div>
            )}

            {section.additionalContent && (
              <div className="space-y-4">
                {section.additionalContentImage != null && section.additionalContentImageAfterParagraph != null ? (
                  (() => {
                    const paras = section.additionalContent.split(/\n\n+/).map((p) => p.trim()).filter(Boolean)
                    const afterIdx = Math.min(section.additionalContentImageAfterParagraph, paras.length)
                    return (
                      <>
                        {paras.slice(0, afterIdx).map((para, idx) => (
                          <p key={idx} className="text-lg text-white/70 leading-relaxed">{para}</p>
                        ))}
                        <div className="space-y-2">
                          <div className="rounded-lg overflow-hidden border border-white/10 bg-white/5 aspect-[16/10]">
                            {section.additionalContentImageSrc ? (
                              <img src={section.additionalContentImageSrc} alt="" className="w-full h-full object-cover block" />
                            ) : (
                              <div className="w-full h-full flex flex-col items-center justify-center">
                                <span className="font-serif text-9xl text-white/10 mb-4">0{study.id}</span>
                                <p className="text-xs text-white/30 uppercase tracking-wider px-6 text-center">{section.additionalContentImage}</p>
                              </div>
                            )}
                          </div>
                          {section.additionalContentImageSrc && section.additionalContentImage && (
                            <p className="text-sm text-white/50 text-center">{section.additionalContentImage}</p>
                          )}
                        </div>
                        {paras.slice(afterIdx).map((para, idx) => (
                          <p key={`p-${afterIdx + idx}`} className="text-lg text-white/70 leading-relaxed">{para}</p>
                        ))}
                      </>
                    )
                  })()
                ) : (
                  section.additionalContent.split(/\n\n+/).map((para, idx) => (
                    <p key={idx} className="text-lg text-white/70 leading-relaxed">{para.trim()}</p>
                  ))
                )}
              </div>
            )}

            {section.asides2 && section.asides2.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
                {section.asides2.map((aside, j) => {
                  const challengeMatch = aside.match(/^(Challenge \d+\s*[:\-]\s*)(.*)$/i)
                  return (
                    <div key={j} className="bg-white/5 border border-white/10 rounded-lg px-5 py-4">
                      {challengeMatch ? (
                        <>
                          <div className="text-sm font-semibold text-white/90 mb-1.5">{challengeMatch[1].replace(/\s*[:\-]\s*$/, "").trim()}</div>
                          <p className="text-sm text-white/70 leading-relaxed">{challengeMatch[2]}</p>
                        </>
                      ) : (
                        <p className="text-sm text-white/70 leading-relaxed">{aside}</p>
                      )}
                    </div>
                  )
                })}
              </div>
            )}

            {section.hasImage2 && (
              <div className="space-y-2">
                <div className={`rounded-lg overflow-hidden border border-white/10 bg-white/5 ${section.image2 ? "w-full" : "aspect-[16/10]"}`}>
                  {section.image2 ? (
                    <img
                      src={section.image2}
                      alt=""
                      className="w-full h-auto block max-w-full"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center">
                      <span className="font-serif text-9xl text-white/10 mb-4">0{study.id}</span>
                      <p className="text-xs text-white/30 uppercase tracking-wider px-6 text-center">{section.visualNote2 ?? ""}</p>
                    </div>
                  )}
                </div>
                {section.imageCaption2 && (
                  <p className="text-sm text-white/50 text-center">{section.imageCaption2}</p>
                )}
              </div>
            )}

            {section.contentAfterImage2 && (
              <div className="space-y-4">
                {section.contentAfterImage2.split(/\n\n+/).map((para, idx) => (
                  <p key={idx} className="text-lg text-white/70 leading-relaxed">{para.trim()}</p>
                ))}
              </div>
            )}
            
            {section.quote && (
              <blockquote className="bg-white/5 border-l-4 border-[#5eead4] p-8 rounded-r-lg">
                <p className="text-2xl font-serif text-white italic">{section.quote}</p>
              </blockquote>
            )}

            {section.contentAfterQuote && (
              <div className="space-y-4">
                {section.contentAfterQuote.split(/\n\n+/).map((para, idx) => (
                  <p key={idx} className="text-lg text-white/70 leading-relaxed">{para.trim()}</p>
                ))}
              </div>
            )}
            
            {section.stats && !section.statsBeforeAdditionalContent && (
              <div className={`grid gap-10 py-10 ${section.statsCentered ? "grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto" : "grid-cols-1 sm:grid-cols-3"}`}>
                {section.stats.map((stat, j) => (
                  <div key={j} className="text-center">
                    <div className={`font-serif text-[#5eead4] mb-3 ${section.statsLarge ? "text-6xl md:text-7xl" : "text-5xl"}`}>{stat.value}</div>
                    <div className="text-sm text-white/40 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
            
            {section.quotes && (
              <div className="relative w-full">
                <Carousel opts={{ align: "start", loop: true }} className="w-full">
                  <CarouselContent className="-ml-0 gap-4">
                    {section.quotes.map((quote, j) => (
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
                  <QuotesCarouselControls count={section.quotes.length} />
                </Carousel>
              </div>
            )}
            
            {section.hasImage && !section.imageAfterSubsections && (
              <div className="space-y-2">
                <div className={`rounded-lg overflow-hidden border border-white/10 bg-white/5 ${section.image ? "w-full" : "aspect-[16/10]"}`}>
                  {section.image ? (
                    <img
                      src={section.image}
                      alt=""
                      className="w-full h-auto block max-w-full"
                      loading={section.imageAutoplayLoop ? "eager" : "lazy"}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center">
                      <span className="font-serif text-9xl text-white/10 mb-4">0{study.id}</span>
                      <p className="text-xs text-white/30 uppercase tracking-wider px-6 text-center">{section.visualNote ?? ""}</p>
                    </div>
                  )}
                </div>
                {section.imageCaption && (
                  <p className="text-sm text-white/50 text-center">{section.imageCaption}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Next Case Study Section */}
      {nextStudy && (
        <div className="px-8 md:px-16 lg:px-24 py-24 border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="text-[#5eead4] text-sm uppercase tracking-widest">Next Case Study</div>
            <h2 className="font-serif text-3xl md:text-4xl text-white leading-tight">
              {nextStudy.title}
            </h2>
            <p className="text-lg text-white/60">{nextStudy.company} — {nextStudy.year}</p>
            <Link
              href={`/case-study/${nextId}`}
              className="inline-flex items-center gap-3 px-8 py-4 border border-[#5eead4] text-[#5eead4] hover:bg-[#5eead4] hover:text-[#0d1117] transition-colors duration-300 rounded-md font-medium"
            >
              <span>View Next Case Study</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      )}

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
