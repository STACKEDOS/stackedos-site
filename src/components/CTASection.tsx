import Link from 'next/link'

interface CTASectionProps {
  headline?: string
  subheadline?: string
  dark?: boolean
}

export function CTASection({
  headline = 'Ready to build a business that runs on systems?',
  subheadline = "If this resonates, the next step is a diagnosis conversation.",
  dark = true,
}: CTASectionProps) {
  return (
    <section className={`relative ${dark ? 'bg-dark-950' : 'bg-dark-50'}`}>
      {dark && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(67,97,238,0.08),transparent_60%)]" />
      )}
      <div className="relative container-wide section-padding py-24 md:py-32 text-center">
        <h2
          className={`text-3xl md:text-5xl font-bold tracking-tight text-balance max-w-2xl mx-auto ${
            dark ? 'text-white' : 'text-dark-900'
          }`}
        >
          {headline}
        </h2>
        <p
          className={`mt-4 text-base max-w-2xl mx-auto ${
            dark ? 'text-dark-400' : 'text-dark-600'
          }`}
        >
          {subheadline}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/book-a-call" className={dark ? 'btn-primary' : 'btn-dark'}>
            Book a Diagnosis Call
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
          <Link
            href="/method"
            className={
              dark
                ? 'inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-transparent border border-[rgba(255,255,255,0.12)] rounded-lg hover:bg-white/5 hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0'
                : 'btn-secondary'
            }
          >
            See the Method
          </Link>
        </div>
      </div>
    </section>
  )
}
