import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import type { Metadata } from "next"
import MouseMoveEffect from "@/components/mouse-move-effect"
import AnimatedGridBackground from "@/components/animated-grid-background"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "structa.studio - Innovative Software Solutions",
  description: "structa.studio delivers cutting-edge software solutions for businesses of the future.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <AnimatedGridBackground />
        <MouseMoveEffect />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  )
}

