import Link from 'next/link'
import Image from 'next/image'
import { CTASection } from '@/components/CTASection'

const painPoints = [
  {
    icon: '01',
    title: 'Owner Dependence',
    description:
      'Every decision, follow-up, and escalation still runs through you. The business can\'t move without its founder.',
  },
  {
    icon: '02',
    title: 'Operational Chaos',
    description:
      'Work lives in people\'s heads. Processes are inconsistent. Nothing is documented. New hires take months to ramp up.',
  },
  {
    icon: '03',
    title: 'Poor Visibility',
    description:
      'You can\'t see what\'s happening across the business. Reporting is manual, unreliable, or nonexistent.',
  },
  {
    icon: '04',
    title: 'Dropped Balls',
    description:
      'Follow-ups fall through the cracks. Handoffs between departments are messy. Clients notice before leadership does.',
  },
  {
    icon: '05',
    title: 'Manual Overload',
    description:
      'Your team spends hours on tasks that systems and automation should handle. Admin work eats into revenue-producing time.',
  },
  {
    icon: '06',
    title: 'Growth Bottlenecks',
    description:
      'Revenue is growing but the operation can\'t keep up. Hiring more people doesn\'t fix the real problem.',
  },
]

const stackedSteps = [
  {
    letter: 'S',
    name: 'Structure',
    description: 'Define how the business actually operates. Clarify pipelines, roles, and workflows.',
    outcome: 'Work stops living in people\'s heads.',
  },
  {
    letter: 'T',
    name: 'Tracking',
    description: 'Create visibility into reality. Dashboards, KPIs, and reporting leadership can trust.',
    outcome: 'Decisions based on data, not assumptions.',
  },
  {
    letter: 'A',
    name: 'Automation',
    description: 'Eliminate manual execution where systems should act. Automated follow-ups, integrations, and triggers.',
    outcome: 'Consistency without micromanagement.',
  },
  {
    letter: 'C',
    name: 'Clarity',
    description: 'Improve internal clarity and handoffs. Clear task ownership, fewer dropped balls, better handoffs, and cleaner flows.',
    outcome: 'Smoother execution across the company.',
  },
  {
    letter: 'K',
    name: 'Knowledge',
    description: 'Document and operationalize how the business runs. SOPs, onboarding, institutional memory.',
    outcome: 'The business becomes trainable and scalable.',
  },
  {
    letter: 'E',
    name: 'Execution',
    description: 'Turn strategy into operational follow-through. Accountability, visibility, and measured improvement.',
    outcome: 'Better execution at every layer.',
  },
  {
    letter: 'D',
    name: 'Durability',
    description: 'Build a business that runs without dependency on any single person. Owner offloading, manager enablement, clear decision rights, and scalable accountability.',
    outcome: 'The business grows without everything routing through the owner.',
  },
]

const trustSignals = [
  { metric: '7', label: 'Operational Layers', sublabel: 'Covered by the STACKED framework' },
  { metric: '100%', label: 'Systems-First', sublabel: 'Every engagement is implementation-driven' },
  { metric: '8–12', label: 'Weeks to Operational', sublabel: 'From diagnosis to live infrastructure' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-dark-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(67,97,238,0.06),transparent)]" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none hidden lg:block">
          <Image src="/symbol.png" alt="" width={600} height={600} />
        </div>
        <div className="relative container-wide section-padding">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold text-brand-700 uppercase tracking-widest mb-6 max-w-[500px]">
              Business Operating Systems for Companies That Have Outgrown Informal Management
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-dark-950 text-balance">
              Stop running your business{' '}
              <span className="gradient-text">on people.</span>
              <br />
              Start running it on{' '}
              <span className="gradient-text">systems.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-dark-500 max-w-2xl leading-relaxed">
              STACKED OS installs the operational infrastructure growing
              businesses need to scale — structure, tracking, automation, clarity,
              knowledge, execution, and durability. Built to run without you.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/book-a-call" className="btn-primary text-lg !py-5 !px-10">
                Book a Diagnosis Call
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link href="/method" className="btn-secondary text-lg !py-5 !px-10">
                See the Method
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="bg-dark-950 py-20">
        <div className="container-wide section-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
            {trustSignals.map((signal, index) => (
              <div
                key={signal.label}
                className={`text-center ${index > 0 ? 'md:border-l md:border-[rgba(255,255,255,0.08)] md:pl-12' : ''}`}
              >
                <p className="text-5xl md:text-6xl font-bold tracking-tight text-white">
                  {signal.metric}
                </p>
                <p className="mt-2 text-xs font-semibold text-dark-400 uppercase tracking-wider">
                  {signal.label}
                </p>
                <p className="mt-1 text-sm text-dark-500">{signal.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-24 md:py-32 bg-dark-950">
        <div className="container-wide section-padding">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-brand-700 uppercase tracking-widest mb-4">
              The Problem
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white text-balance">
              Your business is growing. Your operations aren&apos;t.
            </h2>
            <p className="mt-6 text-lg text-dark-400 max-w-2xl">
              You have revenue. You have a team. You have demand. But the
              business is still too dependent on tribal knowledge, manual
              processes, and individual effort.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((point) => (
              <div
                key={point.title}
                className="bg-dark-900 border border-[rgba(255,255,255,0.06)] border-t-[1px] border-t-[rgba(67,97,238,0.2)] rounded-xl p-8 transition-all duration-200 hover:border-[rgba(255,255,255,0.12)] hover:-translate-y-0.5 group"
              >
                <span className="text-xs font-bold text-brand-700 tracking-widest">
                  {point.icon}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-dark-50">
                  {point.title}
                </h3>
                <p className="mt-3 text-[0.9375rem] text-dark-400 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STACKED Method Preview */}
      <section className="py-24 md:py-32 bg-dark-100">
        <div className="container-wide section-padding">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-brand-700 uppercase tracking-widest mb-4">
              The STACKED Framework
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-dark-950 text-balance">
              Seven layers. One operating system.
            </h2>
            <p className="mt-6 text-lg text-dark-500">
              Every engagement follows the STACKED framework — a structured
              approach to building operational infrastructure that scales.
            </p>
          </div>

          <div className="mt-16 relative">
            {/* Connecting vertical line */}
            <div className="absolute left-[1.75rem] top-6 bottom-6 w-0.5 bg-brand-700/15 hidden md:block" />

            <div className="space-y-3">
              {stackedSteps.map((step, index) => (
                <div
                  key={step.letter}
                  className="relative z-10 bg-white border border-[rgba(0,0,0,0.06)] rounded-xl p-5 md:p-6 shadow-card transition-all duration-200 hover:border-[rgba(67,97,238,0.2)] hover:shadow-card-hover hover:-translate-y-0.5 flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
                >
                  <div className="flex items-center gap-4 md:min-w-[200px]">
                    <span className="flex items-center justify-center w-12 h-12 rounded-[10px] bg-brand-700 text-white font-bold text-xl shrink-0">
                      {step.letter}
                    </span>
                    <h3 className="text-xl font-semibold text-dark-950">
                      {step.name}
                    </h3>
                  </div>
                  <p className="text-[0.9375rem] text-dark-600 md:flex-1">{step.description}</p>
                  <p className="text-sm font-medium text-brand-700 italic md:min-w-[280px] md:text-right">
                    {step.outcome}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/method" className="btn-dark">
              Explore the Full Method
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 md:py-32 bg-dark-50">
        <div className="container-wide section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-brand-700 uppercase tracking-widest mb-4">
                Who This Is For
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-dark-950 text-balance">
                Built for businesses that have outgrown their
                operations.
              </h2>
              <p className="mt-6 text-lg text-dark-500 leading-relaxed">
                STACKED OS works with companies that already have revenue, a
                team, and real demand — but their operations haven&apos;t kept
                up with their growth. If your business is successful but
                operationally messy, we can help.
              </p>
              <Link href="/book-a-call" className="btn-primary mt-8">
                See If STACKED OS Fits
              </Link>
            </div>

            <div className="space-y-4">
              {[
                'You have revenue but your operations feel reactive, not proactive.',
                'Your team is growing but accountability and handoffs are breaking down.',
                'You\'re the bottleneck — the business can\'t move without you.',
                'Reporting is unreliable. You don\'t trust your own data.',
                'New hires take too long to onboard because nothing is documented.',
                'You\'ve tried tools before but nothing stuck because there was no system behind them.',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 p-4 rounded-lg bg-white border border-[rgba(0,0,0,0.06)] transition-colors duration-200 hover:bg-dark-100"
                >
                  <svg
                    className="w-5 h-5 text-brand-700 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p className="text-[0.9375rem] text-dark-950 font-normal">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="py-24 md:py-32 bg-dark-950 text-white">
        <div className="container-wide section-padding">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-brand-400 uppercase tracking-widest mb-4">
              How It Works
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">
              From operational chaos to a system that scales.
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Diagnose',
                description:
                  'We audit your current operations — workflows, tools, bottlenecks, handoffs, and gaps. No assumptions. Just reality.',
              },
              {
                step: '02',
                title: 'Design',
                description:
                  'We map the operational infrastructure your business needs across all seven STACKED layers — tailored to your model.',
              },
              {
                step: '03',
                title: 'Deploy',
                description:
                  'We build and install the systems, automations, dashboards, SOPs, and accountability frameworks your business needs to scale.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-dark-900 border border-[rgba(255,255,255,0.06)] rounded-xl p-8 md:p-10 transition-all duration-200 hover:border-[rgba(67,97,238,0.3)]"
              >
                <span className="text-xs font-semibold text-brand-700 tracking-widest">
                  Step {item.step}
                </span>
                <h3 className="mt-4 text-2xl font-semibold text-dark-50">{item.title}</h3>
                <p className="mt-4 text-[0.9375rem] text-dark-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/how-it-works" className="btn-primary">
              See the Full Process
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection />
    </>
  )
}
