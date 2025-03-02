import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/Footer/Footer'
import { GeistSans } from 'geist/font/sans'

export const metadata: Metadata = {
  title: 'Nam Giang. Frontend dev. Create, build, and grow.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className={`p-10 h-screen w-screen`}>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
