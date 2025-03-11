import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/Footer/Footer'
import { GeistSans } from 'geist/font/sans'
import { MotionConfig } from 'motion/react'
import Script from 'next/script'

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
      <body className="p-5 h-screen w-screen bg-white text-neutral-950 dark:bg-black dark:text-neutral-50">
        <Script id="theme" strategy="beforeInteractive">
          {`
          document.documentElement.classList.toggle("dark",
            localStorage.theme === "dark" ||
              (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
          );
        `}
        </Script>
        <MotionConfig reducedMotion="user">
          <main className="flex items-center justify-center">{children}</main>
          <Footer />
        </MotionConfig>
      </body>
    </html>
  )
}
