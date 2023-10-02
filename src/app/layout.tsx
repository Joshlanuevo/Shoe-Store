import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Header from './shared/components/Navigation/Header'
import AnnouncementBar from './shared/components/Navigation/AnnouncementBar'
import { generatePageTitle } from './shared/util/title'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: generatePageTitle(),
  description: 'Discover and shop a wide range of products on our E-Commerce platform.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnnouncementBar />
        <Header />
        <main className="container relative">
          {children}
        </main>
      </body>
    </html>
  )
}