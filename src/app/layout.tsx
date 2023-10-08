import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'

import Header from './shared/components/Navigation/Header'
import AnnouncementBar from './shared/components/Navigation/AnnouncementBar'
import Footer from './shared/components/Navigation/Footer'
import LoadingSpinner from './shared/components/UIElements/LoadingSpinner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Shoe Store",
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
        <Suspense fallback={<LoadingSpinner />}>
          <main className="container">
            {children}
          </main>
        </Suspense>
        <Footer />
      </body>
    </html>
  )
}