import Link from 'next/link'

interface CTASectionProps {
  headline?: string
  subheadline?: string
  dark?: boolean
}

export function CTASection({
  headline = 'Ready to build a business that runs on systems?',
  subheadline = "Book a strategy call to see if STACKED OS is the right fit for your operation.",
  dark = true,
}: CTASectionProps) {
  return (
    <section className={dark ? 'bg-dark-950' : 'bg-dark-50'}>
      <div className="container-wide section-padding py-24 md:py-32 text-center">
        <h2
          className={`text-3xl md:text-5xl font-bold tracking-tight text-balance ${
            dark ? 'text-white' : 'text-dark-900'
          }`}
        >
          {headline}
        </h2>
        <p
          className={`mt-6 text-lg max-w-2xl mx-auto ${
            dark ? 'text-dark-300' : 'text-dark-500'
          }`}
        >
          {subheadline}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/book-a-call" className={dark ? 'btn-primary' : 'btn-dark'}>
            Book a Strategy Call
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
                ? 'btn-secondary !border-dark-600 !text-white hover:!border-dark-400'
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
