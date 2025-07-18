"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThistleDivider } from "@/components/thistle-divider"

export default function AboutPage() {
  const GOOGLE_CALENDAR_URL =
    "https://calendar.google.com/calendar/u/0/appointments/AcZssZ0vfPFospMogOJuYcXc7z-99U7EP_jaZCQDbPU="

  return (
    <>
      <section className="pt-32 pb-0">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="mb-6 text-primary font-serif">Meet Morven Taylor-Slater</h1>
            <p className="lead">
              Your dedicated partner in achieving lasting positive change through professional, solution-focused
              hypnotherapy.
            </p>
          </motion.div>
        </div>
      </section>

      <ThistleDivider />

      <section className="pt-0 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-softer">
                <Image
                  src="/morven-taylor-slater.jpg"
                  alt="Morven Taylor-Slater, Professional Hypnotherapist"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 font-serif">My Journey to Hypnotherapy</h2>

              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Hello, I'm Morven. Welcome to{" "}
                  <strong className="font-semibold text-gray-700">Taylored Solution Focused Hypnotherapy</strong>. If
                  you are looking for change, you are in the right place.
                </p>
                <p>
                  Life is meant to be lived and enjoyed, but challenges can sometimes hold us back. My own experiences
                  led me to Solution Focused Hypnotherapy, a proven approach grounded in neuroscience. My goal is to
                  help you find the solutions that exist within you, empowering you to move forward confidently.
                </p>
                <p>
                  My approach is not about dwelling on the past, but about focusing on your preferred future and the
                  small, manageable steps you can take to get there. Each session is 'taylored' to your unique needs,
                  ensuring a comfortable, confidential, and empowering experience.
                </p>
              </div>

              <div className="mt-8 bg-primary/5 p-6 rounded-lg">
                <h3 className="mb-4 font-serif">Professional Qualifications & Memberships</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    <span>Registered Member of the National Council for Hypnotherapy (NCH)</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    <span>Fully Insured for Professional Practice</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ThistleDivider />

      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="mb-6 font-serif">Ready to Begin Your Journey?</h2>
            <p className="lead mb-8">
              Take the first step towards positive change. Book your free, no-obligation consultation today and discover
              how hypnotherapy can be taylored to help you.
            </p>
            <Link href={GOOGLE_CALENDAR_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                Book Your Free Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
