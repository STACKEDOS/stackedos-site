import type { Metadata } from 'next'
import Link from 'next/link'
import { CTASection } from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'How It Works — Our Process for Installing Business Operating Systems',
  description:
    'Learn how STACKED OS diagnoses operational bottlenecks, designs custom systems, and deploys the infrastructure growing service businesses need to scale.',
  openGraph: {
    title: 'How It Works — STACKED OS Process',
    description:
      'From operational audit to full system deployment. See how we install operating systems for service businesses.',
  },
}

const phases = [
  {
    phase: 'Phase 1',
    title: 'Operational Diagnosis',
    duration: 'Week 1–2',
    description:
      'We start by understanding reality — not assumptions. We audit your current operations, tools, workflows, team structure, bottlenecks, and gaps across all seven STACKED layers.',
    deliverables: [
      'Operational audit across all departments',
      'Workflow and pipeline mapping',
      'Tool and system inventory',
      'Bottleneck and gap identification',
      'Stakeholder interviews and process documentation',
    ],
    outcome:
      'A clear, honest picture of where your operations stand — and exactly where they need to go.',
  },
  {
    phase: 'Phase 2',
    title: 'System Design',
    duration: 'Week 2–4',
    description:
      'Based on the diagnosis, we design your operational infrastructure. Every recommendation is specific to your business model, team size, growth stage, and existing toolset.',
    deliverables: [
      'Custom STACKED OS blueprint for your business',
      'Workflow and automation architecture',
      'Dashboard and reporting framework',
      'SOP and knowledge base structure',
      'Accountability and delegation model',
    ],
    outcome:
      'A detailed, actionable blueprint for the operating system your business needs.',
  },
  {
    phase: 'Phase 3',
    title: 'System Deployment',
    duration: 'Week 4–12',
    description:
      'We build and install. This isn\'t a handoff of recommendations — we do the implementation. Systems, automations, dashboards, SOPs, integrations, and accountability structures are deployed into your business.',
    deliverables: [
      'CRM and pipeline buildout or optimization',
      'Automation deployment across workflows',
      'Dashboard and reporting setup',
      'SOP documentation and knowledge base',
      'Team training and adoption support',
      'Integration between tools and departments',
    ],
    outcome:
      'A fully operational system running inside your business — not a slide deck.',
  },
  {
    phase: 'Phase 4',
    title: 'Optimization & Support',
    duration: 'Ongoing',
    description:
      'Systems need refinement as the business evolves. We monitor performance, tune automations, update processes, and ensure adoption sticks across the team.',
    deliverables: [
      'Performance monitoring and KPI tracking',
      'Automation and workflow tuning',
      'Process iteration based on real usage',
      'Team adoption support',
      'Ongoing operational consulting',
    ],
    outcome:
      'An operating system that improves over time — not one that gathers dust.',
  },
]

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-28 bg-gradient-to-br from-dark-50 via-white to-brand-50/30">
        <div className="container-wide section-padding">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-brand-700 uppercase tracking-widest mb-6">
              How It Works
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-dark-950 text-balance">
              A structured process for building operational infrastructure.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-dark-500 max-w-2xl leading-relaxed">
              We don&apos;t hand you a playbook and wish you luck. STACKED OS
              diagnoses, designs, deploys, and optimizes the systems your
              business needs to scale.
            </p>
          </div>
        </div>
      </section>

      {/* Process Phases */}
      <section className="py-24 md:py-32">
        <div className="container-wide section-padding">
          <div className="space-y-20">
            {phases.map((phase, index) => (
              <div
                key={phase.phase}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-bold text-brand-700 uppercase tracking-widest">
                      {phase.phase}
                    </span>
                    <span className="text-sm text-dark-400">
                      {phase.duration}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-dark-950">
                    {phase.title}
                  </h2>
                  <p className="mt-6 text-lg text-dark-500 leading-relaxed">
                    {phase.description}
                  </p>
                  <div className="mt-8 p-4 rounded-xl bg-brand-50 border border-brand-100">
                    <p className="text-sm font-semibold text-brand-800">
                      Outcome
                    </p>
                    <p className="mt-1 text-brand-700">{phase.outcome}</p>
                  </div>
                </div>

                <div className="bg-dark-50 rounded-2xl p-8">
                  <h3 className="text-sm font-semibold text-dark-900 uppercase tracking-wider mb-6">
                    Key Deliverables
                  </h3>
                  <ul className="space-y-4">
                    {phase.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-3">
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
                        <span className="text-dark-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiator */}
      <section className="py-24 md:py-32 bg-dark-50">
        <div className="container-wide section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-dark-950">
              This isn&apos;t consulting theater.
            </h2>
            <p className="mt-6 text-lg text-dark-500 leading-relaxed">
              Most operational consultants hand you a report and walk away.
              STACKED OS builds and installs the actual systems your business
              needs. We work inside your tools, with your team, until the
              infrastructure is live and adopted.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card !p-8">
              <h3 className="text-lg font-bold text-dark-400 line-through mb-4">
                Traditional Consulting
              </h3>
              <ul className="space-y-3 text-dark-400">
                {[
                  'Expensive discovery with little output',
                  'Slide decks and recommendations',
                  'You\'re left to implement alone',
                  'No systems actually deployed',
                  'Months of assessment, little change',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-dark-300 shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card !p-8 !border-brand-200 !bg-brand-50/50">
              <h3 className="text-lg font-bold text-brand-800 mb-4">
                STACKED OS
              </h3>
              <ul className="space-y-3 text-dark-700">
                {[
                  'Focused diagnosis that leads to action',
                  'Custom-designed operational blueprint',
                  'Full implementation — we build it',
                  'Live systems running in your business',
                  'Ongoing optimization and support',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
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
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
