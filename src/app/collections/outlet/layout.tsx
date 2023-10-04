import type { Metadata } from 'next'

import Header from "@/app/shared/components/Navigation/Header"

export const metadata: Metadata = {
    title: "Shoe Store | Outlet",
    description: 'Discover and shop a wide range of products on our E-Commerce platform.',
}

export default function MensCollectionsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <Header />
            <main className="container">
                {children}
            </main>
        </div>
        
    )
}