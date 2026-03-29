import Link from 'next/link'
import Image from 'next/image'

const footerLinks = {
  Company: [
    { name: 'About', href: '/about' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'FAQ', href: '/faq' },
  ],
  Solutions: [
    { name: 'The STACKED Method', href: '/method' },
    { name: 'Solutions Overview', href: '/solutions' },
    { name: 'Book a Diagnosis Call', href: '/book-a-call' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-[rgba(255,255,255,0.06)]">
      <div className="container-wide section-padding pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/logo-white.svg"
                alt="STACKED OS"
                width={180}
                height={43}
              />
            </Link>
            <p className="mt-4 text-sm text-dark-500 max-w-md leading-relaxed">
              We install operating systems for growing businesses.
              Structure, tracking, automation, clarity, knowledge,
              execution, and durability — built to scale.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-[0.75rem] font-semibold uppercase tracking-wider text-dark-500 mb-4">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-dark-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[rgba(255,255,255,0.06)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[0.8125rem] text-dark-500">
            &copy; {new Date().getFullYear()} STACKED OS. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/book-a-call"
              className="text-sm text-dark-400 hover:text-white transition-colors"
            >
              Book a Diagnosis Call
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
