import type { Metadata } from 'next'
import Link from 'next/link'
import { CTASection } from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Case Studies — Real Results from STACKED OS Implementations',
  description:
    'See how STACKED OS has helped growing service businesses build operational infrastructure, reduce owner dependence, and scale with systems instead of people.',
  openGraph: {
    title: 'Case Studies — STACKED OS',
    description:
      'Real operational transformations for service businesses.',
  },
}

const caseStudies = [
  {
    industry: 'Professional Services',
    title: 'Owner reclaimed 20+ hours/week after full operational buildout',
    challenge:
      'A growing professional services firm with 15 employees was bottlenecked by the founder. Every escalation, follow-up, and client decision routed through one person. Reporting was manual, onboarding took weeks, and the team lacked clear accountability.',
    results: [
      'Owner reclaimed 20+ hours per week',
      'Client onboarding reduced from 3 weeks to 3 days',
      'Pipeline visibility from lead to payment',
      'Automated follow-ups reduced dropped balls by 90%',
      'Full SOP library for core operations',
    ],
    layers: ['Structure', 'Track', 'Automate', 'Durability'],
  },
  {
    industry: 'Home Services',
    title: '2.5x revenue growth without adding operational headcount',
    challenge:
      'A home services company was growing fast but their operations were held together by a few key employees. When anyone was out, things fell apart. No SOPs, unreliable reporting, and manual scheduling created constant friction.',
    results: [
      'Revenue grew 2.5x without adding admin staff',
      'Automated scheduling and dispatch workflows',
      'Real-time dashboards for operations and revenue',
      'Knowledge base eliminated tribal knowledge dependency',
      'Manager enablement reduced escalations by 70%',
    ],
    layers: ['Structure', 'Automate', 'Knowledge', 'Execution'],
  },
  {
    industry: 'Marketing Agency',
    title: 'Operational rebuild reduced client churn and cut onboarding time by 60%',
    challenge:
      'A digital marketing agency had grown to 40 people but was still running on the same ad-hoc processes from when they were 10. Project handoffs were messy, reporting was inconsistent, and client retention was suffering due to operational gaps.',
    results: [
      'Standardized client lifecycle from sale to delivery',
      'Cross-department handoff automation',
      'Client health dashboards and retention tracking',
      'Onboarding time cut by 60% with documented SOPs',
      'Clear accountability by role across all departments',
    ],
    layers: ['Structure', 'Clarity', 'Track', 'Knowledge'],
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-28 bg-gradient-to-br from-dark-50 via-white to-brand-50/30">
        <div className="container-wide section-padding">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-brand-700 uppercase tracking-widest mb-6">
              Case Studies
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-dark-950 text-balance">
              Real operations. Real results. Real businesses.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-dark-500 max-w-2xl leading-relaxed">
              See how service businesses have used STACKED OS to build
              operational infrastructure that scales.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 md:py-32">
        <div className="container-wide section-padding">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div
                key={study.title}
                className="card !p-8 md:!p-12"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-brand-700 uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full">
                    {study.industry}
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-dark-950 text-balance">
                  {study.title}
                </h2>

                <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  <div>
                    <h3 className="text-sm font-semibold text-dark-900 uppercase tracking-wider mb-3">
                      The Challenge
                    </h3>
                    <p className="text-dark-500 leading-relaxed">
                      {study.challenge}
                    </p>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold text-dark-900 uppercase tracking-wider mb-3">
                        STACKED Layers Applied
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {study.layers.map((layer) => (
                          <span
                            key={layer}
                            className="text-xs font-semibold text-brand-700 bg-brand-50 border border-brand-100 px-3 py-1 rounded-full"
                          >
                            {layer}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-dark-50 rounded-xl p-6">
                    <h3 className="text-sm font-semibold text-dark-900 uppercase tracking-wider mb-4">
                      Results
                    </h3>
                    <ul className="space-y-3">
                      {study.results.map((result) => (
                        <li
                          key={result}
                          className="flex items-start gap-3"
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
                          <span className="text-dark-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-12 text-xs text-dark-400 italic text-center">
            Results are representative of typical STACKED OS engagements. Details generalized for confidentiality.
          </p>
        </div>
      </section>

      <CTASection
        headline="Ready to build your operating system?"
        subheadline="Book a strategy call to see what STACKED OS could look like for your business."
      />
    </>
  )
}
