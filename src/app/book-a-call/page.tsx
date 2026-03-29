import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Book a Diagnosis Call — See If STACKED OS Fits Your Business',
  description:
    'Schedule a diagnosis call with STACKED OS. We\'ll diagnose your operational bottlenecks and determine if our systems-first approach is the right fit for your business.',
  openGraph: {
    title: 'Book a Diagnosis Call — STACKED OS',
    description:
      'Schedule a diagnosis call. We\'ll diagnose your operational bottlenecks and show you what a systems-first approach looks like.',
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
                Diagnosis Call
              </p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-dark-950 text-balance">
                If this resonates, the next step is a diagnosis conversation.
              </h1>
              <p className="mt-6 text-lg text-dark-500 leading-relaxed">
                This isn&apos;t a sales pitch. It&apos;s a structured
                conversation where we dig into your current operations,
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
                  <li>• Businesses with existing revenue, a team, and operations that can&apos;t keep up</li>
                  <li>• Companies experiencing operational growing pains</li>
                  <li>• Owners/operators who want systems, not more people</li>
                  <li>• Businesses ready to invest in operational infrastructure</li>
                </ul>
              </div>
            </div>

            {/* Right: Calendar Embed */}
            <div>
              <div className="bg-dark-50 rounded-2xl p-4 md:p-6 border border-dark-100">
                <h2 className="text-2xl font-bold text-dark-950 mb-2">
                  Schedule Your Diagnosis Call
                </h2>
                <p className="text-dark-500 mb-6">
                  Choose a time that works for you. Calls typically run 30
                  minutes.
                </p>

                <div className="bg-white rounded-xl overflow-hidden">
                  <iframe
                    src="https://hub.stackedos.io/widget/booking/stackedos-diagnosis"
                    style={{ width: '100%', minHeight: '600px', border: 'none', overflow: 'hidden' }}
                    scrolling="no"
                    id="stackedos-diagnosis-iframe"
                    title="Schedule a STACKED OS Diagnosis Call"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Script src="https://hub.stackedos.io/js/form_embed.js" strategy="lazyOnload" />
    </>
  )
}
