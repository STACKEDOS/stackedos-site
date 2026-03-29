import type { Metadata } from 'next'
import Link from 'next/link'
import { CTASection } from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'The STACKED Method — A 7-Layer Business Operating System Framework',
  description:
    'Structure, Tracking, Automation, Clarity, Knowledge, Execution, and Durability. The STACKED method covers every operational layer a growing business needs to scale.',
  openGraph: {
    title: 'The STACKED Method — 7-Layer Operating System Framework',
    description:
      'The complete operational framework for growing businesses. Seven layers that cover everything from structure to durability.',
  },
}

const layers = [
  {
    letter: 'S',
    name: 'Structure',
    tagline: 'Define how the business actually operates.',
    description:
      'Most businesses grow without ever formalizing how work actually moves through the company. Structure is the foundation — clarifying pipelines, workflows, roles, and stages so the operation has a backbone.',
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
    name: 'Tracking',
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
    name: 'Automation',
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

const sectionBgs: Record<number, { bg: string; dark: boolean }> = {
  0: { bg: 'bg-white', dark: false },
  1: { bg: 'bg-[#F5F5F7]', dark: false },
  2: { bg: 'bg-white', dark: false },
  3: { bg: 'bg-[#0A0A0F]', dark: true },
  4: { bg: 'bg-white', dark: false },
  5: { bg: 'bg-[#F5F5F7]', dark: false },
  6: { bg: 'bg-[#0A0A0F]', dark: true },
}

export default function MethodPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 bg-[#FAFAFA]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(67,97,238,0.06),transparent_60%)]" />
        <div className="container-wide section-padding relative">
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
              operational infrastructure for businesses that have outgrown their informal management. Each
              layer addresses a critical part of how your business runs.
            </p>
          </div>
        </div>
      </section>

      {/* Layers */}
      <div className="relative">
        {/* Connecting vertical line behind badges */}
        <div className="absolute left-[calc(50%-36rem+1.5rem)] top-0 bottom-0 w-0.5 bg-brand-700/15 hidden lg:block" style={{ left: 'max(2rem, calc(50% - 36rem + 1.5rem))' }} />

        {layers.map((layer, index) => {
          const { bg, dark } = sectionBgs[index]
          return (
            <section
              key={layer.letter}
              id={layer.name.toLowerCase()}
              className={`scroll-mt-28 py-24 md:py-32 ${bg}`}
            >
              <div className="container-wide section-padding">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
                  {/* Left: Content */}
                  <div className="lg:col-span-3">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="relative z-10 flex items-center justify-center w-12 h-12 rounded-[10px] bg-brand-700 text-white font-bold text-xl">
                        {layer.letter}
                      </span>
                      <div>
                        <h2 className={`text-3xl md:text-4xl font-bold ${dark ? 'text-[#FAFAFA]' : 'text-dark-950'}`}>
                          {layer.name}
                        </h2>
                        <p className={`text-base mt-2 ${dark ? 'text-dark-400' : 'text-dark-400'}`}>{layer.tagline}</p>
                      </div>
                    </div>

                    <p className={`text-lg leading-relaxed ${dark ? 'text-dark-400' : 'text-dark-600'}`}>
                      {layer.description}
                    </p>
                  </div>

                  {/* Right: Details */}
                  <div className="lg:col-span-2">
                    <div className={`rounded-xl p-8 border ${dark ? 'bg-[#12121A] border-[rgba(255,255,255,0.06)]' : 'bg-[#FAFAFA] border-[rgba(0,0,0,0.06)]'}`}>
                      <h3 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${dark ? 'text-[#F5F5F7]' : 'text-dark-900'}`}>
                        What We Build
                      </h3>
                      <ul className="space-y-3">
                        {layer.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex items-start gap-3 text-[0.9375rem]"
                          >
                            <svg
                              className={`w-4 h-4 shrink-0 mt-0.5 ${dark ? 'text-brand-400' : 'text-brand-700'}`}
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
                            <span className={dark ? 'text-dark-400' : 'text-dark-600'}>{detail}</span>
                          </li>
                        ))}
                      </ul>

                      <div className={`mt-4 pt-4 border-t ${dark ? 'border-[rgba(255,255,255,0.06)]' : 'border-[rgba(0,0,0,0.06)]'}`}>
                        <p className="text-[0.9375rem] font-semibold text-brand-700 italic">
                          Outcome: {layer.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        })}
      </div>

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
