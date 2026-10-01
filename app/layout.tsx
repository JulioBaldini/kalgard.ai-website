import type { Metadata } from 'next'
import './globals.css'

const siteUrl = 'https://kalgardsystems.com'
const siteTitle = 'Kalgard'
const siteDescription =
  'Resilient onboard UAV navigation and georeferencing technologies for GPS-denied and GNSS-degraded environments, built by KALGARD Systems.'

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  keywords: 'MerlinSight, MerlinSight Astrel, MerlinSight Arrow, MerlinSight Sillage, KALGARD, KALGARD Systems, INRIA, UAV navigation, GPS-denied navigation, GNSS-degraded navigation, resilient navigation',
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
      { url: '/icon-light.png', type: 'image/png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark.png', type: 'image/png', media: '(prefers-color-scheme: dark)' },
    ],
    shortcut: '/icon-light.png',
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
        alt: 'MerlinSight Astrel navigation module by KALGARD Systems',
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
        logo: `${siteUrl}/icon-light.png`,
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
          href="https://fonts.googleapis.com/css2?family=Marcellus&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,500;0,700;1,700&family=Ubuntu+Mono:wght@400;700&display=swap"
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
