"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThistleDivider } from "@/components/thistle-divider"

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center px-4"
      >
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-primary/20 mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Lost Your Way?</h2>
          <p className="text-xl text-gray-600 mb-2">Let's get you back on track.</p>
          <p className="text-gray-600 max-w-md mx-auto">
            The page you're looking for doesn't exist. It might have been moved or removed. No worries though - finding
            your path is what we do best.
          </p>
        </div>

        <ThistleDivider className="my-8" />

        <div className="space-y-4">
          <Link href="/">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Return Home
            </Button>
          </Link>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <Link href="/services">
              <Button variant="outline">Explore Services</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline">Get in Touch</Button>
            </Link>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-sm text-gray-500"
        >
          <p>
            If you believe this is an error, please{" "}
            <Link href="/contact" className="text-primary hover:underline">
              contact us
            </Link>
            .
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
