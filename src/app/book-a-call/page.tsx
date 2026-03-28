import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Book a Strategy Call — See If STACKED OS Fits Your Business',
  description:
    'Schedule a strategy call with STACKED OS. We\'ll diagnose your operational bottlenecks and determine if our systems-first approach is the right fit for your business.',
  openGraph: {
    title: 'Book a Strategy Call — STACKED OS',
    description:
      'Schedule a strategy call. We\'ll diagnose your operational bottlenecks and show you what a systems-first approach looks like.',
  },
}

export default function BookACallPage() {
  return (
    <>
      <section className="pt-32 pb-20 md:pt-44 md:pb-32">
        <div className="container-wide section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Info */}
            <div>
              <p className="text-sm font-semibold text-brand-700 uppercase tracking-widest mb-6">
                Book a Strategy Call
              </p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-dark-950 text-balance">
                Let&apos;s see if STACKED OS is the right fit.
              </h1>
              <p className="mt-6 text-lg text-dark-500 leading-relaxed">
                This isn&apos;t a sales pitch. It&apos;s a strategy
                conversation. We&apos;ll dig into your current operations,
                identify the biggest bottlenecks, and determine whether our
                approach makes sense for your business.
              </p>

              <div className="mt-12 space-y-8">
                <h2 className="text-xl font-bold text-dark-900">
                  What to expect:
                </h2>
                {[
                  {
                    title: 'Operational snapshot',
                    description:
                      'We\'ll quickly understand your business model, team structure, and current operational pain points.',
                  },
                  {
                    title: 'Bottleneck diagnosis',
                    description:
                      'We\'ll identify the 2-3 biggest operational gaps holding your business back right now.',
                  },
                  {
                    title: 'Fit assessment',
                    description:
                      'We\'ll be honest about whether STACKED OS is the right solution — and if so, what an engagement would look like.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-100 shrink-0 mt-1">
                      <svg
                        className="w-4 h-4 text-brand-700"
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
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark-900">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-dark-500">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 rounded-xl bg-dark-50">
                <p className="text-sm font-semibold text-dark-900 mb-2">
                  Best fit for this call:
                </p>
                <ul className="space-y-2 text-sm text-dark-600">
                  <li>• Businesses with existing revenue, a team, and operations that can't keep up</li>
                  <li>• Companies experiencing operational growing pains</li>
                  <li>• Owners/operators who want systems, not more people</li>
                  <li>• Businesses ready to invest in operational infrastructure</li>
                </ul>
              </div>
            </div>

            {/* Right: Form/Embed Placeholder */}
            <div>
              <div className="bg-dark-50 rounded-2xl p-8 md:p-12 border border-dark-100">
                <h2 className="text-2xl font-bold text-dark-950 mb-2">
                  Schedule Your Call
                </h2>
                <p className="text-dark-500 mb-8">
                  Choose a time that works for you. Calls typically run 30
                  minutes.
                </p>

                <div className="text-center space-y-8">
                  <div className="bg-white rounded-xl border border-dark-200 p-10">
                    <svg
                      className="w-14 h-14 text-brand-700 mx-auto mb-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <h3 className="text-xl font-bold text-dark-900 mb-2">
                      Reach out directly
                    </h3>
                    <p className="text-dark-500 mb-6">
                      Send us a message and we&apos;ll get back to you within one
                      business day to schedule your strategy call.
                    </p>
                    <a
                      href="mailto:brandon@bowersgroupinc.com"
                      className="btn-primary text-lg !py-4 !px-10 w-full sm:w-auto"
                    >
                      Email Us to Book a Call
                    </a>
                    <p className="mt-4 text-sm text-dark-400">
                      brandon@bowersgroupinc.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
