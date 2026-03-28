import type { Metadata } from 'next'
import Link from 'next/link'
import { CTASection } from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'About STACKED OS — Operational Infrastructure for Growing Companies',
  description:
    'STACKED OS helps growing businesses run on systems instead of people. We install the operational infrastructure companies need to scale with structure, not chaos.',
  openGraph: {
    title: 'About STACKED OS',
    description:
      'We install operating systems for growing businesses. Structure, visibility, automation, and accountability — built to scale.',
  },
}

const values = [
  {
    title: 'Systems Over People',
    description:
      'Great people are essential. But a business that depends entirely on specific individuals is fragile. We build the systems that let good people do their best work — and let the business survive without any single one of them.',
  },
  {
    title: 'Implementation Over Theory',
    description:
      'We don\'t deliver slide decks. We build and install actual systems inside your business. Every engagement produces tangible operational infrastructure — not recommendations you\'ll never act on.',
  },
  {
    title: 'Clarity Over Complexity',
    description:
      'The best operational systems are clear, not clever. We cut through complexity to build straightforward infrastructure your team can actually use, adopt, and maintain.',
  },
  {
    title: 'Outcomes Over Activity',
    description:
      'We measure success by what changes — not how many hours we log. Better visibility. Faster execution. Fewer bottlenecks. Reduced owner dependence. Real, measurable operational improvement.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-28 bg-gradient-to-br from-dark-50 via-white to-brand-50/30">
        <div className="container-wide section-padding">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-brand-700 uppercase tracking-widest mb-6">
              About STACKED OS
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-dark-950 text-balance">
              We build the operational infrastructure growing businesses run on.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-dark-500 max-w-2xl leading-relaxed">
              STACKED OS exists because too many growing businesses are
              held together by heroic individual effort instead of real
              operational infrastructure. We fix that.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 md:py-32">
        <div className="container-wide section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-dark-950">
                The problem we solve.
              </h2>
              <div className="mt-8 space-y-6 text-lg text-dark-600 leading-relaxed">
                <p>
                  Most growing businesses hit a ceiling. They have revenue,
                  clients, a team, and demand — but the operation underneath it
                  all is held together with duct tape.
                </p>
                <p>
                  Work lives in people&apos;s heads. Follow-ups fall through
                  cracks. Reporting is unreliable. Onboarding takes forever.
                  Everything still routes through the founder.
                </p>
                <p>
                  This isn&apos;t a people problem. It&apos;s an infrastructure
                  problem. These businesses need an operating system — and
                  that&apos;s exactly what we build.
                </p>
              </div>
            </div>

            <div className="bg-dark-950 rounded-2xl p-10 md:p-12 text-white">
              <h3 className="text-2xl font-bold mb-6">Our positioning</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-brand-400 uppercase tracking-wider mb-2">
                    What We Do
                  </p>
                  <p className="text-dark-200 text-lg">
                    We install operational infrastructure for businesses where growth has outpaced operations.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-400 uppercase tracking-wider mb-2">
                    Who It&apos;s For
                  </p>
                  <p className="text-dark-200 text-lg">
                    Companies with revenue, a team, and demand — but operations that haven&apos;t scaled with their growth.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-400 uppercase tracking-wider mb-2">
                    How We&apos;re Different
                  </p>
                  <p className="text-dark-200 text-lg">
                    We don&apos;t consult — we build. We don&apos;t deliver
                    decks — we deploy systems. Implementation, not theory.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-dark-50">
        <div className="container-wide section-padding">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-dark-950">
              What we believe.
            </h2>
            <p className="mt-4 text-lg text-dark-500">
              These aren&apos;t decorative values. They shape every decision we
              make and every system we build.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div key={value.title} className="card">
                <h3 className="text-xl font-bold text-dark-950">
                  {value.title}
                </h3>
                <p className="mt-4 text-dark-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-24 md:py-32">
        <div className="container-wide section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-brand-700 uppercase tracking-widest mb-4">
                The Founder
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-dark-950">
                Brandon Bowers
              </h2>
              <div className="mt-8 space-y-6 text-lg text-dark-600 leading-relaxed">
                <p>
                  Brandon built STACKED OS after spending years inside
                  growing companies watching the same pattern repeat:
                  strong revenue and great teams hitting a
                  ceiling because their operations couldn&apos;t keep up with
                  their growth.
                </p>
                <p>
                  The problem was never the people — it was the
                  infrastructure. These businesses were running on tribal
                  knowledge, manual processes, and founder dependency instead
                  of real operational systems. They didn&apos;t need more
                  consultants handing them slide decks. They needed someone
                  to build and install the actual systems.
                </p>
                <p>
                  That&apos;s what STACKED OS does. Brandon and the team
                  work directly inside growing businesses to diagnose
                  operational gaps, design the infrastructure, and deploy the
                  systems that let companies scale without chaos — and
                  without everything routing through the owner.
                </p>
              </div>
            </div>

            <div className="bg-dark-50 rounded-2xl p-10 md:p-12 flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-dark-200 mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-dark-400">BB</span>
                </div>
                <p className="text-dark-900 font-bold text-xl">Brandon Bowers</p>
                <p className="text-dark-500 mt-1">Founder, STACKED OS</p>
                <p className="text-dark-400 text-sm mt-1">Bowers Group Inc.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why STACKED */}
      <section className="py-24 md:py-32">
        <div className="container-wide section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-dark-950 text-balance">
              We named it STACKED because that&apos;s how real operations work.
            </h2>
            <p className="mt-6 text-lg text-dark-500 leading-relaxed">
              Structure supports tracking. Tracking enables automation.
              Automation creates clarity. Clarity preserves
              knowledge. Knowledge drives execution. Execution builds durability.
              Each layer builds on the last — creating an operational stack that
              compounds over time.
            </p>
            <Link href="/method" className="btn-dark mt-10">
              See the Full STACKED Method
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
