import type { Metadata } from 'next'
import Link from 'next/link'
import { CTASection } from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Solutions — Operational Systems for Growing Service Businesses',
  description:
    'From CRM and pipeline optimization to workflow automation, SOPs, dashboards, and team accountability — STACKED OS builds the operational infrastructure service businesses need to scale.',
  openGraph: {
    title: 'Solutions — STACKED OS',
    description:
      'Operational systems for growing service businesses. CRM optimization, automation, SOPs, dashboards, and more.',
  },
}

const solutions = [
  {
    title: 'CRM & Pipeline Optimization',
    description:
      'Your CRM should be the operational backbone of your business — not a glorified address book. We build and optimize your pipeline to track every lead, deal, and client from first touch to payment.',
    capabilities: [
      'Pipeline architecture and stage design',
      'Lead tracking and source attribution',
      'Deal flow automation and task triggers',
      'Revenue and conversion reporting',
      'Cross-department visibility into client status',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Workflow Automation & Integrations',
    description:
      'We eliminate the manual work that slows your team down and creates inconsistency. Automated follow-ups, cross-tool integrations, conditional triggers, and process enforcement — built around your actual workflows.',
    capabilities: [
      'Follow-up and sequence automation',
      'Cross-system integrations (CRM, project management, invoicing, etc.)',
      'Conditional workflow logic and routing',
      'Notification and escalation triggers',
      'Process enforcement through automation',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: 'Dashboards & Reporting',
    description:
      'Real-time visibility into the metrics that matter. We build dashboards your leadership team can trust — pipeline health, revenue tracking, team performance, and operational KPIs in one place.',
    capabilities: [
      'Executive and leadership dashboards',
      'Pipeline and revenue reporting',
      'Team and individual performance tracking',
      'Lead source and marketing ROI reporting',
      'Operational KPI monitoring',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'SOPs & Knowledge Management',
    description:
      'If your business knowledge lives in one person\'s head, you have a liability — not a company. We build the documentation, SOPs, and knowledge infrastructure that make your business trainable and scalable.',
    capabilities: [
      'Standard operating procedure development',
      'Process documentation for key workflows',
      'Centralized knowledge base setup',
      'Onboarding documentation and training materials',
      'Role-based process guides',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Team Accountability & Durability Systems',
    description:
      'We build the structures that allow owners to offload, managers to own outcomes, and teams to execute with clarity. Clear decision rights, accountability frameworks, and performance visibility by role — creating operational durability that outlasts any single individual.',
    capabilities: [
      'Accountability and task management systems',
      'Manager enablement frameworks',
      'Owner offloading and operational durability',
      'Performance visibility by role and department',
      'Escalation and exception handling structures',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Operational Strategy & Consulting',
    description:
      'Beyond the build, we provide strategic guidance on how to structure, scale, and optimize your operations. Think of it as a fractional COO perspective backed by implementation.',
    capabilities: [
      'Operational audit and diagnosis',
      'Growth-stage operational planning',
      'Process improvement consulting',
      'Organizational structure recommendations',
      'Ongoing operational advisory',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
]

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-28 bg-gradient-to-br from-dark-50 via-white to-brand-50/30">
        <div className="container-wide section-padding">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-brand-700 uppercase tracking-widest mb-6">
              Solutions
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-dark-950 text-balance">
              Operational systems built for service businesses that are ready to
              scale.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-dark-500 max-w-2xl leading-relaxed">
              Every solution is designed around the STACKED framework — giving
              your business the structure, visibility, automation, and
              accountability it needs to grow without chaos.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 md:py-32">
        <div className="container-wide section-padding">
          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <div
                key={solution.title}
                className="card !p-8 md:!p-12 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12"
              >
                <div className="lg:col-span-3">
                  <div className="text-brand-700 mb-4">{solution.icon}</div>
                  <h2 className="text-2xl md:text-3xl font-bold text-dark-950">
                    {solution.title}
                  </h2>
                  <p className="mt-4 text-dark-500 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <h3 className="text-sm font-semibold text-dark-900 uppercase tracking-wider mb-4">
                    Capabilities
                  </h3>
                  <ul className="space-y-3">
                    {solution.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-3 text-sm">
                        <svg
                          className="w-4 h-4 text-brand-700 shrink-0 mt-0.5"
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
                        <span className="text-dark-600">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not a Fit */}
      <section className="py-24 md:py-32 bg-dark-50">
        <div className="container-wide section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-dark-950">
              Not sure which solution you need?
            </h2>
            <p className="mt-6 text-lg text-dark-500">
              That&apos;s what the strategy call is for. We&apos;ll diagnose
              your operational gaps and recommend exactly where to start based on
              your business model, team size, and growth stage.
            </p>
            <Link href="/book-a-call" className="btn-dark mt-10">
              Book a Strategy Call
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
