import type { Metadata } from 'next'
import Link from 'next/link'
import { CTASection } from '@/components/CTASection'
import { FAQItem } from '@/components/FAQItem'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions — STACKED OS',
  description:
    'Common questions about STACKED OS — how we work, what we build, and whether our business operating system is the right fit for your company.',
  openGraph: {
    title: 'Frequently Asked Questions — STACKED OS',
    description:
      'Everything you need to know about how STACKED OS works for growing businesses.',
  },
}

const faqs = [
  {
    question: 'What kind of businesses does STACKED OS work with?',
    answer:
      'We work with growing businesses that have revenue, a team, and demand — but operations that haven\'t scaled with their growth. That includes agencies, professional services firms, home services companies, consulting firms, e-commerce operators, SaaS companies, and other businesses where growth is creating operational drag. The common thread is the operational problem, not the industry.',
  },
  {
    question: 'What does "installing an operating system" actually mean?',
    answer:
      'It means we build and deploy the actual operational infrastructure your business needs — pipeline architecture, workflow automations, dashboards and reporting, SOPs, accountability systems, and integrations between your tools. We don\'t hand you a strategy deck. We build real systems inside your business.',
  },
  {
    question: 'How is this different from hiring a consultant?',
    answer:
      'Most consultants diagnose problems and hand you recommendations. We diagnose problems and then build the solutions. Every STACKED OS engagement includes full implementation — systems deployed, automations live, dashboards running, documentation complete. You get infrastructure, not advice.',
  },
  {
    question: 'How long does a typical engagement take?',
    answer:
      'A full STACKED OS deployment typically runs 8–12 weeks, depending on the complexity of your operations and the scope of systems being built. We start with a 1–2 week diagnosis phase, then move into design and deployment. Ongoing optimization continues after the initial build.',
  },
  {
    question: 'What tools do you work with?',
    answer:
      'We\'re platform-agnostic. We work with whatever pipeline, project management, invoicing, and communication tools make sense for your business. We don\'t lead with any single platform — we lead with operational design and deploy on the tools that fit your business model, team, and growth stage. If you don\'t have the right tools yet, we\'ll recommend them.',
  },
  {
    question: 'Do we need to change our tools or platforms?',
    answer:
      'Not necessarily. We audit what you have and optimize it first. If your current tools can support what your business needs, we\'ll build on them. If there\'s a clear case for switching, we\'ll explain why and handle the migration.',
  },
  {
    question: 'What does the diagnosis call involve?',
    answer:
      'It\'s a 30-minute conversation where we learn about your business, understand your operational pain points, and determine whether STACKED OS is a good fit. No sales pressure. If we\'re not the right solution, we\'ll tell you.',
  },
  {
    question: 'How much does STACKED OS cost?',
    answer:
      'Pricing depends on the scope and complexity of your operational needs. We don\'t publish fixed pricing because every engagement is custom-designed for the business. The diagnosis call is the best way to understand what an engagement would look like and what the investment would be.',
  },
  {
    question: 'Can you work with remote and distributed teams?',
    answer:
      'Absolutely. Most of our work is done remotely. The systems we build are designed to work for distributed teams — in fact, remote and hybrid companies often need operational infrastructure even more than co-located teams.',
  },
  {
    question: 'What if we\'ve tried systems and automations before and they didn\'t stick?',
    answer:
      'That\'s extremely common — and usually the problem wasn\'t the tools, it was the approach. Tools deployed without operational design behind them almost always fail. STACKED OS starts with structure and process before touching any technology. That\'s why our systems get adopted.',
  },
]

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-28 bg-dark-50" style={{ background: 'radial-gradient(ellipse at 30% 0%, rgba(67,97,238,0.06) 0%, #FAFAFA 70%)' }}>
        <div className="container-wide section-padding">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-brand-700 uppercase tracking-widest mb-6">
              FAQ
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-dark-950 text-balance">
              Common questions about STACKED OS.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-dark-500 max-w-2xl leading-relaxed">
              Everything you need to know about how we work, what we build, and
              whether STACKED OS is the right fit for your business.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-24 md:py-32 bg-dark-50">
        <div className="container-narrow section-padding">
          <div>
            {faqs.map((faq) => (
              <FAQItem key={faq.question} {...faq} />
            ))}
          </div>

          {/* CTA Card */}
          <div className="bg-dark-950 rounded-2xl p-8 md:p-12 text-center mt-12">
            <p className="text-dark-50 font-medium">
              Have a question that isn&apos;t answered here?
            </p>
            <Link href="/book-a-call" className="btn-primary mt-6 inline-block">
              Ask Us on a Diagnosis Call
            </Link>
          </div>
        </div>
      </section>

      <CTASection dark={false} />
    </>
  )
}
