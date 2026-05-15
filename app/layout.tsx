import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://velplev.lv'),
  title: 'VELPLEV — Flexible Packaging Manufacturer',
  description:
    'VELPLEV manufactures polypropylene and polyethylene packaging bags for food, bakery, retail, industrial, and custom printed applications. B2B packaging supplier based in Latvia.',
  keywords:
    'flexible packaging, polypropylene bags, polyethylene bags, printed bags, bakery packaging, food packaging, custom packaging, B2B packaging Latvia',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://velplev.lv',
    siteName: 'VELPLEV',
    title: 'VELPLEV — Flexible Packaging Manufacturer',
    description:
      'Polypropylene & polyethylene bags for food, bakery, retail, and industrial use. Custom sizes and print. B2B orders. Riga, Latvia.',
    images: [
      {
        url: 'https://velplev.vercel.app/og-image-hero-lv.png',
        width: 1200,
        height: 630,
        alt: 'VELPLEV — Flexible Packaging Manufacturer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VELPLEV — Flexible Packaging Manufacturer',
    description:
      'Polypropylene & polyethylene bags for food, bakery, retail, and industrial use. Custom sizes and print. B2B orders. Riga, Latvia.',
    images: ['https://velplev.vercel.app/og-image-hero-lv.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://velplev-v3.vercel.app/#organization',
  name: 'SIA VELPLEV',
  url: 'https://velplev-v3.vercel.app/',
  logo: 'https://velplev-v3.vercel.app/images/velplev-logo.svg',
  image: 'https://velplev.vercel.app/og-image-hero-lv.png',
  description:
    'Pārtikas un nepārtikas iepakojuma ražošana no BOPP, CPP, LDPE, HDPE, PA/PE, PET/PE, Mono PP, papīra un folijas.',
  foundingDate: '1995',
  telephone: ['+37167614566', '+37126953255', '+37129574883'],
  email: 'velplev@inbox.lv',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'K. Ulmaņa gatve 2',
    addressLocality: 'Rīga',
    postalCode: 'LV-1004',
    addressCountry: 'LV',
  },
  areaServed: 'Latvia',
  priceRange: '$$',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.className} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  )
}
