'use client'

// import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/Footer/Footer'
import { GeistSans } from 'geist/font/sans'
import { useThemeToggle } from '@/hooks/useThemeToggle'

// export const metadata: Metadata = {
//   title: 'Nam Giang. Frontend dev. Create, build, and grow.',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { theme, toggleTheme } = useThemeToggle()

  return (
    <html lang="en" className={GeistSans.className} data-theme={theme}>
      <body className="p-5 h-screen w-screen">
        <main className="flex items-center justify-center">{children}</main>
        <Footer toggleTheme={toggleTheme} theme={theme} />
      </body>
    </html>
  )
}
