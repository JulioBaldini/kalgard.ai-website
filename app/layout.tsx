import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KALGARD Systems - Advanced Aerial Navigation System',
  description: 'Enterprise-grade autonomous navigation system enabling UAVs to operate with 5-10m error in GPS-denied environments through visual-satellite positioning and multi-sensor fusion.',
  keywords: 'GPS-denied navigation, aerial navigation system, UAV navigation, visual-satellite positioning, multi-sensor fusion, autonomous drones, KALGARD',
  authors: [{ name: 'KALGARD Systems' }],
  creator: 'KALGARD Systems',
  publisher: 'KALGARD Systems',
  robots: 'index, follow',
  metadataBase: new URL('https://kalgardsystems.com'),
  icons: {
    icon: '/logos/small/Small_logo.png',
    shortcut: '/logos/small/Small_logo.png',
    apple: '/logos/small/Small_logo.png',
  },
  openGraph: {
    title: 'KALGARD Systems - Advanced Aerial Navigation System',
    description: 'Enterprise-grade autonomous navigation system enabling UAVs to operate with 5-10m error in GPS-denied environments through visual-satellite positioning and multi-sensor fusion.',
    url: 'https://kalgardsystems.com',
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
    title: 'KALGARD Systems - Advanced Aerial Navigation System',
    description: 'Enterprise-grade autonomous navigation system enabling UAVs to operate with 5-10m error in GPS-denied environments through visual-satellite positioning and multi-sensor fusion.',
    images: ['/media/renders/nav_module_MerlinSight.png'],
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
        <link rel="icon" href="/logos/small/Small_logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/logos/small/Small_logo.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
} 