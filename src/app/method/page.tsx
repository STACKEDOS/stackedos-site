import type { Metadata } from 'next'
import Link from 'next/link'
import { CTASection } from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'The STACKED Method — A 7-Layer Business Operating System Framework',
  description:
    'Structure, Track, Automate, Clarity, Knowledge, Execution, and Durability. The STACKED method covers every operational layer a service business needs to scale.',
  openGraph: {
    title: 'The STACKED Method — 7-Layer Operating System Framework',
    description:
      'The complete operational framework for service businesses. Seven layers that cover everything from structure to durability.',
  },
}

const layers = [
  {
    letter: 'S',
    name: 'Structure',
    tagline: 'Define how the business actually operates.',
    description:
      'Most service businesses grow without ever formalizing how work actually moves through the company. Structure is the foundation — clarifying pipelines, workflows, roles, and stages so the operation has a backbone.',
    details: [
      'Clarify pipelines and workflows from lead to fulfillment to payment',
      'Define roles and responsibilities across departments',
      'Standardize stages and statuses for every major process',
      'Remove duplicated, redundant, and unnecessary processes',
      'Create a clear operational map of the business',
    ],
    outcome: 'Work stops living in people\'s heads.',
    color: 'from-blue-600 to-blue-800',
  },
  {
    letter: 'T',
    name: 'Track',
    tagline: 'Create visibility into reality.',
    description:
      'You can\'t manage what you can\'t see. Tracking gives leadership accurate, real-time visibility into pipeline health, revenue, team performance, and operational KPIs — replacing gut feelings with data.',
    details: [
      'Accurate reporting and leadership dashboards',
      'Lead source attribution and marketing ROI tracking',
      'Pipeline and revenue tracking across all stages',
      'Operational KPIs that leadership can trust',
      'Team performance and accountability metrics',
    ],
    outcome: 'Decisions based on data, not assumptions.',
    color: 'from-indigo-600 to-indigo-800',
  },
  {
    letter: 'A',
    name: 'Automate',
    tagline: 'Eliminate manual execution where systems should act.',
    description:
      'Automation isn\'t about replacing people — it\'s about removing the manual tasks that slow your team down and create inconsistency. We automate follow-ups, integrations, triggers, and workflow enforcement so your operation runs reliably.',
    details: [
      'Follow-up and task automation across the client lifecycle',
      'Cross-system integrations connecting your tools',
      'Notification and accountability triggers',
      'Workflow-based process enforcement',
      'Conditional logic and routing based on business rules',
    ],
    outcome: 'Consistency without micromanagement.',
    color: 'from-violet-600 to-violet-800',
  },
  {
    letter: 'C',
    name: 'Clarity',
    tagline: 'Improve internal clarity and handoffs.',
    description:
      'Operational breakdowns are usually clarity breakdowns. We fix handoffs between departments, clarify task ownership, and reduce the dropped balls that cost you clients and credibility.',
    details: [
      'Clear task ownership and assignment systems',
      'Fewer dropped balls across teams and departments',
      'Better handoffs between sales, ops, fulfillment, and billing',
      'Cleaner communication flows',
      'Escalation paths and notification rules',
    ],
    outcome: 'Smoother execution across the company.',
    color: 'from-purple-600 to-purple-800',
  },
  {
    letter: 'K',
    name: 'Knowledge',
    tagline: 'Document and operationalize how the business runs.',
    description:
      'If your business knowledge lives in one person\'s head, you have a single point of failure — not a company. Knowledge turns tribal expertise into documented, searchable, trainable institutional memory.',
    details: [
      'SOPs and process documentation for key workflows',
      'Centralized operating knowledge base',
      'Reduced dependence on specific people and memory',
      'Faster onboarding for new team members',
      'Consistent execution regardless of who does the work',
    ],
    outcome: 'The business becomes trainable and scalable.',
    color: 'from-fuchsia-600 to-fuchsia-800',
  },
  {
    letter: 'E',
    name: 'Execution',
    tagline: 'Turn strategy into operational follow-through.',
    description:
      'Strategy without execution is just talk. Execution ensures that what gets planned actually gets done — with accountability, visibility, and measured improvement built into every layer.',
    details: [
      'Implementation support to move from plan to action',
      'Accountability systems that track follow-through',
      'Leadership visibility into operational performance',
      'Measured improvement over time with clear benchmarks',
      'Regular operational reviews and iteration cycles',
    ],
    outcome: 'Better execution at every layer.',
    color: 'from-rose-600 to-rose-800',
  },
  {
    letter: 'D',
    name: 'Durability',
    tagline: 'Build a business that runs without dependency on any single person.',
    description:
      'The final layer. Durability is what allows the business to outlast and outgrow its founder. We build the structures that let owners offload, managers own outcomes, and the business scale without everything routing back through one person.',
    details: [
      'Owner offloading and time recovery',
      'Manager enablement and decision-making frameworks',
      'Clear decision rights by role and department',
      'Reduced key-person dependency across the business',
      'Scalable accountability that doesn\'t require oversight on everything',
    ],
    outcome: 'The business grows without everything routing through the owner.',
    color: 'from-red-600 to-red-800',
  },
]

export default function MethodPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-28 bg-gradient-to-br from-dark-50 via-white to-brand-50/30">
        <div className="container-wide section-padding">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-brand-700 uppercase tracking-widest mb-6">
              The STACKED Method
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-dark-950 text-balance">
              Seven operational layers.
              <br />
              One complete system.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-dark-500 max-w-2xl leading-relaxed">
              The STACKED framework is how we diagnose, design, and deploy
              operational infrastructure for growing service businesses. Each
              layer addresses a critical part of how your business runs.
            </p>
          </div>
        </div>
      </section>

      {/* Layers */}
      <section className="py-24 md:py-32">
        <div className="container-wide section-padding">
          <div className="space-y-24">
            {layers.map((layer, index) => (
              <div
                key={layer.letter}
                id={layer.name.toLowerCase()}
                className="scroll-mt-28"
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
                  {/* Left: Content */}
                  <div className="lg:col-span-3">
                    <div className="flex items-center gap-4 mb-6">
                      <span
                        className={`flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${layer.color} text-white font-bold text-xl`}
                      >
                        {layer.letter}
                      </span>
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-dark-950">
                          {layer.name}
                        </h2>
                        <p className="text-dark-500">{layer.tagline}</p>
                      </div>
                    </div>

                    <p className="text-lg text-dark-600 leading-relaxed">
                      {layer.description}
                    </p>
                  </div>

                  {/* Right: Details */}
                  <div className="lg:col-span-2">
                    <div className="bg-dark-50 rounded-2xl p-8">
                      <h3 className="text-sm font-semibold text-dark-900 uppercase tracking-wider mb-4">
                        What We Build
                      </h3>
                      <ul className="space-y-3">
                        {layer.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex items-start gap-3 text-sm"
                          >
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
                            <span className="text-dark-600">{detail}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 pt-6 border-t border-dark-200">
                        <p className="text-sm font-semibold text-brand-700">
                          Outcome: {layer.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {index < layers.length - 1 && (
                  <div className="mt-24 border-b border-dark-100" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="py-24 md:py-32 bg-dark-50">
        <div className="container-wide section-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-dark-950 text-balance">
            Together, these seven layers form a complete operating system.
          </h2>
          <p className="mt-6 text-lg text-dark-500 max-w-2xl mx-auto">
            Most businesses try to fix operations one tool at a time. STACKED OS
            addresses the full operational stack — because real change requires a
            system, not a band-aid.
          </p>
          <Link href="/book-a-call" className="btn-dark mt-10">
            See If STACKED OS Fits Your Business
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  )
}
