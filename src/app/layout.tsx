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
    'We install operating systems for growing service businesses. Structure, tracking, automation, communication, knowledge, execution, and delegation — built to scale.',
  keywords: [
    'business operating system',
    'service business operations',
    'operational consulting',
    'business systems',
    'process improvement',
    'workflow automation',
    'CRM automation',
    'scaling service businesses',
    'standard operating procedures',
    'business infrastructure',
    'operational efficiency',
    'revenue operations',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://stackedos.com',
    siteName: 'STACKED OS',
    title: 'STACKED OS — Business Operating Systems for Service Companies',
    description:
      'We install operating systems for growing service businesses. Run on systems instead of people.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'STACKED OS — Business Operating Systems for Service Companies',
    description:
      'We install operating systems for growing service businesses. Run on systems instead of people.',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
