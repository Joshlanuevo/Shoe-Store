import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Shoe Store | Men's Collection",
    description: 'Discover and shop a wide range of products on our E-Commerce platform.',
}

export default function MensCollectionsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <main className="container">
                {children}
            </main>
        </div>
        
    )
}