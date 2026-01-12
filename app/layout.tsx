import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Rubik } from "next/font/google"
import CookieConsent from "@/components/cookie/CookieConsent"

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Reduced from 4 weights to 3
  variable: '--font-rubik',
  display: 'swap', // Add font display swap for better performance
})


export const metadata: Metadata = {
  title: "LoveAi - Ai Powered Dating App",
  description: "Where romance meets artificial intelligence",
  generator: 'v1.dev',
  icons: {
    icon: '/loveai-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
              <CookieConsent />
      <body className={`${rubik.className} bg-gray-50 scroll-smooth`}>{children}</body>
    </html>
  )
}
