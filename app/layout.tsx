import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const _spaceMono = Space_Mono({ subsets: ["latin"], weight: "400", variable: "--font-space-mono" })

export const metadata: Metadata = {
  title: "YoVibe - Discover the Vibe",
  description: "Find venues, navigate with precision, and experience the vibe that matters to you.",
  generator: "Reinol",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "YoVibe - Discover the Vibe",
    description: "Find venues, navigate with precision, and experience the vibe that matters to you.",
    type: "website",
  },
}

export const viewport = {
  themeColor: "#0f172a",
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_inter.variable} ${_spaceMono.variable}`}>
      <body className={`font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
