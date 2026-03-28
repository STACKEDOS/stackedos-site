import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://stackedos.com'),
  title: {
    default: 'STACKED OS — Business Operating Systems for Service Companies',
    template: '%s | STACKED OS',
  },
  description:
    'We install operating systems for growing service businesses. Structure, tracking, automation, clarity, knowledge, execution, and durability — built to scale.',
  keywords: [
    'business operating system',
    'service business operations',
    'operational consulting',
    'business systems',
    'process improvement',
    'workflow automation',
    'pipeline automation',
    'AI-powered automation',
    'AI business systems',
    'scaling service businesses',
    'standard operating procedures',
    'business infrastructure',
    'operational efficiency',
    'revenue operations',
  ],
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://stackedos.com',
    siteName: 'STACKED OS',
    title: 'STACKED OS — Business Operating Systems for Service Companies',
    description:
      'We install operating systems for growing service businesses. Run on systems instead of people.',
    images: [
      {
        url: '/og-logo.png',
        width: 1200,
        height: 630,
        alt: 'STACKED OS — Business Operating Systems for Service Companies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'STACKED OS — Business Operating Systems for Service Companies',
    description:
      'We install operating systems for growing service businesses. Run on systems instead of people.',
    images: ['/og-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://stackedos.com',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'STACKED OS',
  url: 'https://stackedos.com',
  description:
    'We install operating systems for growing service businesses. Structure, tracking, automation, clarity, knowledge, execution, and durability — built to scale.',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'brandon@bowersgroupinc.com',
    contactType: 'sales',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
