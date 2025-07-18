"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const GOOGLE_CALENDAR_URL =
  "https://calendar.google.com/calendar/u/0/appointments/AcZssZ0vfPFospMogOJuYcXc7z-99U7EP_jaZCQDbPU="

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-primary/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/site-logo.png"
              alt="Taylored Solution Focused Hypnotherapy Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="font-serif font-bold text-xl text-gray-800 hidden sm:inline">
              Taylored Solution Focused Hypnotherapy
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-2">
            <nav className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-gray-600 hover:bg-primary/5 hover:text-primary",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <Button asChild size="sm">
              <Link href={GOOGLE_CALENDAR_URL} target="_blank" rel="noopener noreferrer">
                Book Free Consultation
              </Link>
            </Button>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 hover:bg-primary/5 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-background/95 backdrop-blur-sm border-t border-primary/10"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium",
                    pathname === link.href ? "bg-primary/10 text-primary" : "text-gray-600 hover:bg-primary/5",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="border-t border-primary/10 px-4 py-4">
              <Button asChild className="w-full">
                <Link href={GOOGLE_CALENDAR_URL} target="_blank" rel="noopener noreferrer">
                  Book Free Consultation
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
