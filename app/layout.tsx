import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const siteUrl = 'https://kalgard.ai'
const siteTitle = 'Kalgard | GNSS-denied UAV navigation'
const siteDescription =
  'Resilient onboard UAV navigation and georeferencing technologies for GPS-denied and GNSS-degraded environments, built by Kalgard.'

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  keywords: 'MerlinSight, MerlinSight MS-1, MerlinSight MS-2, MerlinSight MS-3, Kalgard, INRIA, UAV navigation, GPS-denied navigation, GNSS-degraded navigation, resilient navigation',
  authors: [{ name: 'Kalgard' }],
  creator: 'Kalgard',
  publisher: 'Kalgard',
  robots: 'index, follow',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      // Plain icon with no media query, for search engines.
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-light.png', type: 'image/png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark.png', type: 'image/png', media: '(prefers-color-scheme: dark)' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: 'Kalgard',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kalgard logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/og-image.png'],
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
        name: 'Kalgard',
        legalName: 'Kalgard Systems',
        url: siteUrl,
        logo: `${siteUrl}/icon-light.png`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Paris',
          addressCountry: 'FR',
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Kalgard',
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
        {/* Arms the scroll-reveal CSS before first paint, and disarms it again if
            the app has not hydrated within 4s — so a blocked or stalled bundle
            leaves a readable page rather than a blank one. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){var d=document.documentElement;d.setAttribute('data-anim','on');" +
              "var t=setTimeout(function(){d.removeAttribute('data-anim')},4000);" +
              'window.__kalgardAnimReady=function(){clearTimeout(t)};})()',
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
