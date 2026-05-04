import type { Metadata } from 'next'
import './globals.css'

const siteUrl = 'https://kalgardsystems.com'
const siteTitle = 'MerlinSight by KALGARD'
const siteDescription =
  'Resilient onboard UAV navigation for GPS-denied and GNSS-degraded environments, built by KALGARD Systems.'

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  keywords: 'MerlinSight, KALGARD, KALGARD Systems, INRIA, UAV navigation, GPS-denied navigation, GNSS-degraded navigation, resilient navigation',
  authors: [{ name: 'KALGARD Systems' }],
  creator: 'KALGARD Systems',
  publisher: 'KALGARD Systems',
  robots: 'index, follow',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
      { url: '/logos/small/Small_logo.png', type: 'image/png' },
    ],
    shortcut: '/icon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: 'KALGARD Systems',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/media/renders/nav_module_MerlinSight.png',
        width: 1200,
        height: 630,
        alt: 'KALGARD MerlinSight Navigation System',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/media/renders/nav_module_MerlinSight.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'KALGARD Systems',
        url: siteUrl,
        logo: `${siteUrl}/icon.png`,
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'KALGARD Systems',
        description: siteDescription,
        publisher: {
          '@id': `${siteUrl}/#organization`,
        },
      },
    ],
  }

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Marcellus&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  )
}
