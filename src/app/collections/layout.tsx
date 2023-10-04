import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Collections - Shoe Store",
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