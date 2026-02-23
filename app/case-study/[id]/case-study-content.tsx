"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const caseStudyData = {
  "1": {
    id: 1,
    company: "Asurion",
    year: "2025",
    title: "Redesigning Field app to reduce friction and unlock scale",
    subtitle: "Creating a clearer, more scalable foundation for Asurion Experts' daily work",
    role: "Hybrid (Sr Manager, Product Design + IC)",
    team: "2 designers",
    heroGradient: { from: "#43035B", to: "#AE03A8" },
    sections: [
      {
        heading: "Field app outgrew its MVP and experts felt it every day",
        content: "Field supports Asurion's in-person expert experience—from viewing daily routes to delivering and setting up replacement phones the same day. As the service scaled, the app's structure didn't. What began as an MVP was now limiting discoverability, onboarding, and future growth.",
        visualNote: "Large contextual app image or abstract background",
        hasImage: true,
      },
      {
        heading: "Why this mattered",
        content: "As features accumulated, they were placed wherever space allowed — often buried behind menus or hidden behind unfamiliar navigation. For experts, this meant higher cognitive load and longer onboarding. For the business, it meant shipping features without confidence they'd ever be found.",
        subsections: [
          {
            subheading: "For experts",
            points: [
              "High cognitive load during already stressful, time-sensitive days",
              "New features were easy to miss",
              "Learning the app required heavy training"
            ]
          },
          {
            subheading: "For the business",
            points: [
              "No clear place to add new global features",
              "Discoverability issues made it hard to measure feature impact",
              "Scaling the service meant rethinking the app's core structure"
            ]
          }
        ],
        visualNote: "Old app entry state + homepage junk drawer with light annotation",
        hasImage: true,
      },
      {
        heading: "Scaling the product meant rethinking the structure, not just adding more screens",
        content: "Experts already juggle inventory, routes, customers, and timing. Every extra decision slows them down. At the same time, the business needed space to grow — a way to introduce global features without hiding them or overwhelming the experience.",
        hasImage: false,
      },
      {
        heading: "I owned the architecture and led the team building within it",
        content: "I worked as a hybrid IC and design manager, overseeing two designers while directly owning the information architecture, bottom navigation, and homepage definition. In parallel, I ensured multiple designers building within the new system stayed visually aligned and structurally consistent.",
        hasImage: false,
      },
      {
        heading: "A focused homepage beats a busy one, especially at the start of the day",
        content: "Early in the project, we were asked to make the beginning-of-day experience more content-heavy. Based on how experts actually work, I pushed back.",
        additionalContent: "Experts don't have time to parse non-urgent information first thing in the morning. Adding more content would have slowed them down, not helped them. Instead, we designed a homepage that prioritized orientation and focus — while leaving room to scale over time.",
        quote: "Reduce cognitive load when pressure is highest.",
        visualNote: "Early concept vs final homepage highlighting what was intentionally not shown",
        hasImage: true,
      },
      {
        heading: "Designing an IA that could scale",
        content: "We audited the existing app, mapped upcoming roadmap features, and paired usage data with expert and stakeholder input. The goal wasn't just to fix discoverability — it was to create a structure that could grow without constantly relearning the app.",
        additionalContent: "The resulting IA balanced immediate needs with future flexibility, while leaning on patterns experts already understood from everyday apps.",
        visualNote: "Simplified IA diagram and before/after navigation comparison",
        hasImage: true,
      },
      {
        heading: "When most users are new, clarity isn't optional",
        stats: [
          { label: "Annual turnover", value: "~70%" },
          { label: "Average tenure", value: "~60 days" },
        ],
        content: "With such high turnover, learnability mattered as much as efficiency. We designed the system to feel immediately understandable, reducing training time from days to under one — and increasing confidence for both new and tenured experts.",
        visualNote: "Bottom navigation pattern highlighting familiar interaction patterns",
        hasImage: true,
      },
      {
        heading: "Dark mode wasn't a trend — it was a safety and usability need",
        content: "Experts often work at night, in cars, or on customers' porches. A bright interface wasn't just uncomfortable — it could be unsafe. We partnered with Asurion's design system team to define color tokens and usage patterns that supported readability, consistency, and scale.",
        additionalContent: "Those standards were later added to the company-wide system, making dark mode reusable beyond Field.",
        visualNote: "Dark mode screens in situ with token or color usage callout",
        hasImage: true,
      },
      {
        heading: "The new structure earned trust — without requiring training",
        content: "Despite a user base known for skepticism toward change, feedback was overwhelmingly positive. Experts intuitively understood where to find things, even though the app had fundamentally changed. For the team, the new architecture unlocked future development and reduced friction in shipping new features.",
        quotes: [
          "This is actually way better than I expected.",
          "Finally feels like a modern app.",
          "I can actually find what I need now."
        ],
        hasImage: false,
      },
      {
        heading: "Designing systems means leading people and decisions in parallel",
        content: "This project reinforced the importance of designing systems — not screens — while managing people building within them. If revisiting it, I'd introduce lightweight metrics earlier to better quantify discoverability improvements alongside qualitative feedback.",
        hasImage: false,
      }
    ],
  },
  "2": {
    id: 2,
    company: "Asurion",
    year: "2025",
    title: "Designing a system that guides behavior instead of policing it",
    subtitle: "Improving on-time arrival through flow design, not constraints",
    role: "Principal Designer (IC)",
    platform: "Mobile app",
    heroGradient: { from: "#0d3d56", to: "#1a5f7a" },
    sections: [
      {
        heading: "On-time arrival wasn't just about time — it was about trust",
        content: "In Asurion Field, \"on-time arrival\" means an expert arriving within the customer's selected two-hour window to deliver and set up a new phone for them. Arriving outside that window — early or late — breaks SLAs with client partners and erodes customer trust.",
        additionalContent: "At the time of this work, we were contractually expected to stay above 80% on-time. We were hovering around 60%. This wasn't a scheduling problem alone. It was a behavior problem — shaped by how the Field app sequenced information, intent, and action at critical moments.",
        visualNote: "Large metric callout: 60% → 75% (80% target subtly indicated)",
        hasImage: true,
      },
      {
        heading: "Fixing this meant changing behavior, not just screens",
        content: "Experts often arrived outside the selected window for understandable reasons. They were trying to work efficiently, get ahead of schedule, or recover time elsewhere in their day. But from a customer's perspective, arriving early could be just as frustrating as arriving late.",
        additionalContent: "Customers choose appointment windows based on when they'll be home. Showing up outside that window — especially without notice — directly impacted NPS and trust. The challenge wasn't convincing experts that on-time arrival mattered. It was designing an experience that made the right behavior the easiest one to perform.",
        hasImage: false,
      },
      {
        heading: "The constraints were non-negotiable",
        content: "We couldn't change the routing system, the two-hour appointment windows, or the client SLAs defining success. Backend logic and scheduling were off the table.",
        additionalContent: "What we could change was how the Field app guided behavior: how clearly it communicated state, when it revealed information, and how it sequenced actions under real-world conditions. This became a small-surface, high-impact design problem.",
        hasImage: false,
      },
      {
        heading: "When control feels like the obvious answer — but isn't",
        content: "Early in the project, Operations came to us with a specific proposal: introduce a timer screen that would block experts from continuing a job if they arrived too early, outside the appointment window.",
        additionalContent: "On the surface, this made sense. If early arrival was the problem, prevent it entirely. From a design perspective, this raised concerns. Blocking progress doesn't change intent — it often just shifts consequences elsewhere in the system. If experts couldn't arrive early, many would inevitably arrive later in the day, compounding delays and frustration. We raised these concerns, but were asked to proceed. Rather than debate hypotheticals, we tested.",
        visualNote: "A/B tested screens",
        hasImage: true,
      },
      {
        heading: "Evidence replaced assumption — and allowed us to move forward with confidence",
        content: "We A/B tested the hard-blocking timer experience Operations proposed against a flow-based solution that guided behavior without forcing it.",
        additionalContent: "The results were clear: the blocking experience actually made the metric worse. Preventing early arrivals pushed experts further behind schedule, increasing late arrivals later in the day.",
        hasImage: false,
      },
      {
        heading: "The real problem lived between two nearly identical screens",
        content: "The biggest breakdown occurred around two adjacent moments in the flow: \"En route\" and \"I've arrived.\"",
        additionalContent: "On paper, the distinction was clear. In practice, it wasn't. The two screens looked visually similar, used nearly identical interactions, and appeared back-to-back. Under time pressure, experts would sometimes swipe through both without realizing it. Performance issues amplified this. When the app lagged, experts would attempt to swipe \"En route\" again — only for the \"I've arrived\" screen to load in that moment. One extra swipe, and both states were triggered back to back. Before these changes, over 80% of \"en route\" and \"arrived\" events were logged within two minutes of each other, despite average drive times of around 30 minutes.",
        quote: "Even experts trying to do the right thing were set up to fail.",
        visualNote: "Before/after screen comparison with subtle annotations showing accidental double-swipe risk",
        hasImage: true,
      },
      {
        heading: "Designing clarity into moments where ambiguity caused real damage",
        content: "Rather than adding warnings or confirmations, we focused on making state changes unmistakable — and harder to perform accidentally.",
        additionalContent: "We redesigned the flow so experts had to explicitly mark themselves \"en route\" before accessing navigation. The customer address was intentionally withheld until that moment, while a map-based view with drive time and ETA still gave experts what they needed to communicate with customers. We also changed the primary action so launching navigation happened after marking \"en route,\" keeping experts in Field long enough to trigger live tracking and customer notifications. The goal wasn't to slow experts down. It was to remove ambiguity exactly where ambiguity caused the most harm.",
        visualNote: "Flow diagram highlighting the new \"commitment moment\"",
        hasImage: true,
      },
      {
        heading: "Two small changes unlocked a measurable shift",
        content: "After launch, on-time arrival improved from roughly 60% to 75%. While still short of our SLA target, this was a significant directional improvement — and a clear signal that behavior and flow design were critical levers.",
        additionalContent: "Just as importantly, the work gave the team confidence to investigate deeper system-level constraints with evidence rather than intuition.",
        stats: [
          { label: "On-time arrival before", value: "~60%" },
          { label: "On-time arrival after", value: "~75%" },
        ],
        visualNote: "Single large metric, minimal copy",
        hasImage: true,
      },
      {
        heading: "Pushing for better ideas — and proving them — changed how we worked",
        content: "Alongside the blocking A/B test, I also explored a more holistic redesign of the flow. While initially considered too complex, sharing that work broadly helped leadership see a better long-term path.",
        additionalContent: "With support from Product leadership, and through creative use of AI-assisted development and a Figma Make–powered handoff, engineering delivered the more ambitious solution two weeks ahead of the original MVP timeline. This shifted how the team thought about design's role — not just executing requests, but shaping better outcomes.",
        hasImage: false,
      },
      {
        heading: "What this reinforced for me",
        content: "This project reinforced that:",
        subsections: [
          {
            subheading: "Key learnings",
            points: [
              "Blocking behavior rarely creates trust",
              "Clear sequencing often outperforms hard constraints",
              "Testing is a powerful way to resolve cross-functional tension",
              "Designing for imperfect systems requires empathy and rigor"
            ]
          }
        ],
        additionalContent: "It's an approach I carry forward: push back thoughtfully, test honestly, and let evidence lead.",
        hasImage: false,
      }
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
    sections: [
      {
        heading: "Sales success depended on skills many experts didn't sign up for",
        content: "Asurion Field experts are deeply knowledgeable about technology and motivated by helping customers. But to be successful in this role, they also need strong sales skills — something many had to develop through extensive and recurring training.",
        additionalContent: "For experts who weren't natural salespeople, this was taxing. Even with training and best practices, translating what they learned into confident, natural conversations in front of a customer was hard — especially under time pressure. The opportunity wasn't to replace training. It was to support experts in the moment, when it mattered most.",
        visualNote: "Context-setting image or subtle UI crop from the job page, not metrics yet",
        hasImage: true,
      },
      {
        heading: "Why AI could help here, and where it couldn't",
        content: "We have rich customer data available before a field visit, gathered through call center interactions and device context. That made it possible to tailor sales guidance to individual customers in a way static scripts never could.",
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
        additionalContent: "The goal was never for experts to read from the app. It was to help them internalize guidance and bring it into conversation authentically.",
        hasImage: false,
      },
      {
        heading: "The line between \"helpful\" and \"creepy\" was thin",
        content: "Early explorations made one thing clear very quickly: this could go wrong.",
        additionalContent: "Some early model outputs referenced deeply personal details about customers — how many kids they had, their ages, or specific devices throughout the home. Even if accurate, surfacing that information risked making conversations uncomfortable or unsettling. A feature designed to help experts could just as easily damage trust with customers. This became the central design challenge of the project.",
        hasImage: false,
      },
      {
        heading: "Shaping how AI fit into a human conversation",
        content: "I worked as Senior Manager, Product Design, overseeing one IC designer. My focus was on product strategy, placement within the Field app, and the detailed UI decisions that shaped how SmartPitch appeared and behaved.",
        additionalContent: "I partnered closely with Product, Data Science, Legal, and Engineering to define what insights were appropriate to surface, shape guardrails around tone and specificity, and ensure the experience felt supportive, not prescriptive. Design's role here wasn't just execution — it was judgment.",
        hasImage: false,
      },
      {
        heading: "Designing AI as guidance, not a script",
        content: "We were intentional about what SmartPitch did not do.",
        subsections: [
          {
            subheading: "Instead of full scripts or overly specific recommendations, we focused on",
            points: [
              "High-level customer context that could apply across products",
              "Tone guidance rather than exact phrasing",
              "Suggested pitches for a single product, with room to expand later"
            ]
          }
        ],
        additionalContent: "We iterated through pilots, refining prompts so outputs felt distinct enough to be useful without becoming repetitive — and broad enough to stay comfortable in conversation. We also made the AI visible but transparent. Experts were explicitly told the content was GenAI-generated and given guidance on how to use it, helping them trust the information without over-relying on it.",
        hasImage: false,
      },
      {
        heading: "Constraints shaped the experience as much as the technology",
        content: "Legal review played a significant role in shaping SmartPitch. There were strict requirements around what experts could say, how products could be positioned, and what claims were allowed.",
        additionalContent: "These constraints influenced the language used in prompts and outputs, how insights were framed, and where SmartPitch appeared in the flow. Rather than fighting those constraints, we designed within them — using structure and clarity to keep the experience safe, compliant, and useful.",
        hasImage: false,
      },
      {
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
        visualNote: "This is where your attached image or a cropped version of the SmartPitch UI works best. Avoid over-annotating; let the design speak.",
        hasImage: true,
      },
      {
        heading: "Measurable results in a hard-to-move metric",
        content: "Sales impact was significant.",
        additionalContent: "Sales per 100 jobs (SP100) — historically a difficult metric to move — increased meaningfully across roles and markets. In pilots where SmartPitch was used, SP100 jumped dramatically compared to jobs without it. Even more telling: only about 9% of eligible jobs had a SmartPitch viewed, suggesting significant upside as usage grows.",
        visualNote: "Use the chart from your slide here. Let the data carry weight. Minimal surrounding copy.",
        hasImage: true,
      },
      {
        heading: "What success unlocked next",
        content: "The success of SmartPitch shifted internal confidence in AI-assisted tools. What started as an experiment is now planned for expansion to additional platforms across the company, supporting other expert roles beyond Field.",
        additionalContent: "More importantly, it reframed how teams think about AI: not as automation, not as replacement, but as thoughtful augmentation when designed with care.",
        hasImage: false,
      },
      {
        heading: "Key takeaways from designing with AI",
        content: "This project reinforced that designing with AI is less about capability and more about restraint.",
        additionalContent: "Concise content, clear guardrails, and transparency mattered more than sophistication. Designing for trust — with both experts and customers — was the real challenge. It was a strong first step in bringing GenAI into Field in a prominent way, and it shaped how I now guide teams exploring emerging technology: start with the human moment, then decide what technology earns a place there.",
        hasImage: false,
      }
    ],
  },
  "4": {
    id: 4,
    company: "Asurion & Ubreakifix",
    year: "2026",
    title: "Fixing a fragmented experience across systems",
    subtitle: "Bridging teams and systems to create a seamless end-to-end experience",
    role: "Senior Manager, Product Design + Lead Designer",
    platform: "Mobile app + Desktop app",
    heroGradient: { from: "#1e2d4d", to: "#3d5a80" },
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
  return (
    <div className="relative">
      {/* Hero gradient section — shorter height, per-study colors */}
      <div className="relative h-[28vh] md:h-[32vh] overflow-hidden">
        {/* Per-case-study gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background: study.heroGradient
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

      {/* Content overlapping the fade (closer to top) */}
      <div className="relative -mt-24 px-8 md:px-16 lg:px-24">
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
            <div className="flex gap-8 text-lg pt-4 pb-16">
              <div>
                <span className="text-[#5eead4]/60 uppercase tracking-wider block mb-1">Role</span>
                <span className="text-white/80">{study.role}</span>
              </div>
              {study.team && (
              <div>
                <span className="text-[#5eead4]/60 uppercase tracking-wider block mb-1">Team</span>
                <span className="text-white/80">{study.team}</span>
              </div>
              )}
              {study.platform && (
                <div>
                  <span className="text-[#5eead4]/60 uppercase tracking-wider block mb-1">Platform</span>
                  <span className="text-white/80">{study.platform}</span>
              </div>
            )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content sections */}
      <div className="px-8 md:px-16 lg:px-24 py-24 space-y-32">
        {study.sections.map((section, i) => (
          <div key={i} className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif text-white leading-tight text-balance">{section.heading}</h2>
            <p className="text-lg text-white/70 leading-relaxed">{section.content}</p>
            
            {section.additionalContent && (
              <p className="text-lg text-white/70 leading-relaxed">{section.additionalContent}</p>
            )}
            
            {section.quote && (
              <blockquote className="bg-white/5 border-l-4 border-[#5eead4] p-8 rounded-r-lg">
                <p className="text-2xl font-serif text-white italic">{section.quote}</p>
              </blockquote>
            )}
            
            {section.subsections && (
              <div className="grid md:grid-cols-2 gap-8">
                {section.subsections.map((sub, j) => (
                  <div key={j} className="space-y-4">
                    <h3 className="text-xl font-serif text-white">{sub.subheading}</h3>
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
            
            {section.stats && (
              <div className="grid grid-cols-2 gap-8 py-8">
                {section.stats.map((stat, j) => (
                  <div key={j} className="text-center">
                    <div className="text-5xl font-serif text-[#5eead4] mb-3">{stat.value}</div>
                    <div className="text-sm text-white/40 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
            
            {section.quotes && (
              <div className="grid md:grid-cols-3 gap-6">
                {section.quotes.map((quote, j) => (
                  <div key={j} className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <p className="text-sm text-white/70 italic">"{quote}"</p>
                  </div>
                ))}
              </div>
            )}
            
            {section.hasImage && (
              <div className="aspect-[16/10] bg-white/5 rounded-lg flex flex-col items-center justify-center border border-white/10">
                <span className="font-serif text-9xl text-white/10 mb-4">0{study.id}</span>
                <p className="text-xs text-white/30 uppercase tracking-wider px-6 text-center">{section.visualNote}</p>
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
