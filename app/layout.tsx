import React from "react"
import type { Metadata } from 'next'
import Script from "next/script"
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ScrollToTop } from '@/components/scroll-to-top'
import './globals.css'

const _playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-serif' });
const _inter = Inter({ subsets: ["latin"], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Caitlyn Marsh | Product Design Leader',
  description: 'Caitlyn is a product design leader with 10+ years of experience crafting digital experiences that are both functional and delightful.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_playfair.variable} ${_inter.variable} font-sans antialiased`}>
        {/* Run before hydration so the page opens at top and browser doesn't restore scroll */}
        <Script
          id="scroll-to-top"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `if (typeof history !== 'undefined' && history.scrollRestoration) history.scrollRestoration = 'manual'; if (typeof window !== 'undefined') window.scrollTo({ top: 0, left: 0, behavior: 'instant' });`,
          }}
        />
        <ScrollToTop />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
