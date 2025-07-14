import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GoogleAnalytics } from "@/components/analytics"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Taylored Hypnotherapy | Morven Taylor-Slater | Clinical Hypnotherapy Scotland",
    template: "%s | Taylored Hypnotherapy",
  },
  description:
    "Unlock your potential with Morven Taylor-Slater, a registered clinical hypnotherapist in Scotland. Specialising in anxiety, confidence, and creating positive, lasting change. Book a free, no-obligation consultation today.",
  authors: [{ name: "Morven Taylor-Slater" }],
  creator: "Taylored Hypnotherapy",
  publisher: "TAYLORED SOLUTION FOCUSED HYPNOTHERAPY LTD",
  metadataBase: new URL("https://www.tayloredhypnotherapy.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.tayloredhypnotherapy.com",
    title: "Taylored Hypnotherapy | Professional Hypnotherapy in Scotland",
    description:
      "Unlock your potential with Morven Taylor-Slater, a registered clinical hypnotherapist. Specialising in anxiety, confidence, and positive change.",
    siteName: "Taylored Hypnotherapy",
    images: [
      {
        url: "/morven-taylor-slater.jpg",
        width: 1200,
        height: 630,
        alt: "Morven Taylor-Slater of Taylored Hypnotherapy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taylored Hypnotherapy | Morven Taylor-Slater",
    description:
      "Unlock your potential with registered clinical hypnotherapist Morven Taylor-Slater. Book a free consultation.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-GB">
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        <Suspense fallback={<div>Loading...</div>}>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
          >
            Skip to main content
          </a>
          <Navigation />
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
          <Footer />
          <GoogleAnalytics />
        </Suspense>
      </body>
    </html>
  )
}
