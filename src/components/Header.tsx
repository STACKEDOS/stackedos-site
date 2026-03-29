'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const navigation = [
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'The Method', href: '/method' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'About', href: '/about' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'FAQ', href: '/faq' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[rgba(250,250,250,0.85)] backdrop-blur-xl border-b border-[rgba(0,0,0,0.06)]">
      <div className="container-wide section-padding">
        <nav className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-black.svg"
              alt="STACKED OS"
              width={180}
              height={43}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-normal text-dark-600 hover:text-dark-950 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link href="/book-a-call" className="btn-primary text-xs !py-2.5 !px-5 !rounded-md">
              Book a Diagnosis Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-dark-600"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="lg:hidden pb-6 border-t border-[rgba(0,0,0,0.06)] pt-4">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-normal text-dark-600 hover:text-dark-950 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/book-a-call"
                onClick={() => setMobileOpen(false)}
                className="btn-primary text-xs !py-2.5 !px-5 !rounded-md mt-2 text-center"
              >
                Book a Diagnosis Call
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
