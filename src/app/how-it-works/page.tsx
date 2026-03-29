import type { Metadata } from 'next'
import Link from 'next/link'
import { CTASection } from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'How It Works — Our Process for Installing Business Operating Systems',
  description:
    'Learn how STACKED OS diagnoses operational bottlenecks, designs custom systems, and deploys the infrastructure growing businesses need to scale.',
  openGraph: {
    title: 'How It Works — STACKED OS Process',
    description:
      'From operational audit to full system deployment. See how we install operating systems for growing businesses.',
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
      'Operational tool assessment',
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
      'Accountability and durability model',
    ],
    outcome:
      'A detailed, actionable blueprint for the operating system your business needs.',
  },
  {
    phase: 'Phase 3',
    title: 'Build & Deploy',
    duration: 'Week 4–12',
    description:
      'We build and install. This isn\'t a handoff of recommendations — we do the implementation. Systems, automations, dashboards, SOPs, integrations, and accountability structures are deployed into your business.',
    deliverables: [
      'Pipeline and workflow infrastructure deployment',
      'Automation deployment across workflows',
      'Dashboard and reporting setup',
      'SOP documentation and knowledge base',
      'Team training and adoption support',
      'Cross-department operational connectivity',
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
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 bg-dark-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(67,97,238,0.08)_0%,_transparent_60%)]" />
        <div className="container-wide section-padding relative">
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

      {/* Phase 1 — Operational Diagnosis */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-wide section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-brand-700 uppercase tracking-widest">
                  {phases[0].phase}
                </span>
                <span className="bg-brand-100 text-brand-700 rounded-md px-3 py-1 text-[0.8125rem] font-medium">
                  {phases[0].duration}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-950">
                {phases[0].title}
              </h2>
              <p className="mt-6 text-lg text-dark-500 leading-relaxed">
                {phases[0].description}
              </p>
              <div className="mt-8 border-l-[3px] border-l-brand-700 bg-brand-50 rounded-r-lg p-5">
                <p className="text-sm font-semibold text-brand-800">
                  Outcome
                </p>
                <p className="mt-1 text-brand-700">{phases[0].outcome}</p>
              </div>
            </div>

            <div className="bg-dark-100 rounded-xl p-8">
              <h3 className="text-[0.6875rem] font-semibold text-dark-400 uppercase tracking-wider mb-6">
                Key Deliverables
              </h3>
              <ul className="space-y-4">
                {phases[0].deliverables.map((item) => (
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
        </div>
      </section>

      {/* Phase 2 — System Design */}
      <section className="py-24 md:py-32 bg-dark-100">
        <div className="container-wide section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-brand-700 uppercase tracking-widest">
                  {phases[1].phase}
                </span>
                <span className="bg-brand-100 text-brand-700 rounded-md px-3 py-1 text-[0.8125rem] font-medium">
                  {phases[1].duration}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-950">
                {phases[1].title}
              </h2>
              <p className="mt-6 text-lg text-dark-500 leading-relaxed">
                {phases[1].description}
              </p>
              <div className="mt-8 border-l-[3px] border-l-brand-700 bg-brand-50 rounded-r-lg p-5">
                <p className="text-sm font-semibold text-brand-800">
                  Outcome
                </p>
                <p className="mt-1 text-brand-700">{phases[1].outcome}</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8">
              <h3 className="text-[0.6875rem] font-semibold text-dark-400 uppercase tracking-wider mb-6">
                Key Deliverables
              </h3>
              <ul className="space-y-4">
                {phases[1].deliverables.map((item) => (
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
        </div>
      </section>

      {/* Phase 3 — Build & Deploy (DARK climax) */}
      <section className="py-24 md:py-32 bg-dark-950">
        <div className="container-wide section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-brand-700 uppercase tracking-widest">
                  {phases[2].phase}
                </span>
                <span className="bg-brand-100 text-brand-700 rounded-md px-3 py-1 text-[0.8125rem] font-medium">
                  {phases[2].duration}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-50">
                {phases[2].title}
              </h2>
              <p className="mt-6 text-lg text-dark-400 leading-relaxed">
                {phases[2].description}
              </p>
              <div className="mt-8 border-l-[3px] border-l-brand-700 bg-brand-700/10 rounded-r-lg p-5">
                <p className="text-sm font-semibold text-brand-400">
                  Outcome
                </p>
                <p className="mt-1 text-brand-300">{phases[2].outcome}</p>
              </div>
            </div>

            <div className="bg-dark-900 rounded-xl p-8">
              <h3 className="text-[0.6875rem] font-semibold text-dark-400 uppercase tracking-wider mb-6">
                Key Deliverables
              </h3>
              <ul className="space-y-4">
                {phases[2].deliverables.map((item) => (
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
                    <span className="text-dark-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 4 — Optimization & Support */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-wide section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-brand-700 uppercase tracking-widest">
                  {phases[3].phase}
                </span>
                <span className="bg-brand-100 text-brand-700 rounded-md px-3 py-1 text-[0.8125rem] font-medium">
                  {phases[3].duration}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-950">
                {phases[3].title}
              </h2>
              <p className="mt-6 text-lg text-dark-500 leading-relaxed">
                {phases[3].description}
              </p>
              <div className="mt-8 border-l-[3px] border-l-brand-700 bg-brand-50 rounded-r-lg p-5">
                <p className="text-sm font-semibold text-brand-800">
                  Outcome
                </p>
                <p className="mt-1 text-brand-700">{phases[3].outcome}</p>
              </div>
            </div>

            <div className="bg-dark-100 rounded-xl p-8">
              <h3 className="text-[0.6875rem] font-semibold text-dark-400 uppercase tracking-wider mb-6">
                Key Deliverables
              </h3>
              <ul className="space-y-4">
                {phases[3].deliverables.map((item) => (
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
        </div>
      </section>

      {/* Differentiator */}
      <section className="py-24 md:py-32 bg-dark-100">
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
            <div className="bg-white rounded-xl border border-[rgba(0,0,0,0.06)] shadow-card p-8">
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

            <div className="bg-white rounded-xl border border-brand-200 border-t-[3px] border-t-brand-700 shadow-card p-8">
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
