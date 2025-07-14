"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "./ui/card"

const principles = [
  {
    id: 1,
    title: "A Focus on Solutions",
    text: "We concentrate on your desired future, not on dissecting the past. Our sessions are positive, forward-looking, and designed to build momentum towards your goals.",
    icon: "🚀",
  },
  {
    id: 2,
    title: "A Collaborative Partnership",
    text: "This is a journey we take together. You are the expert on your life; I am the expert in the process. We work as a team to unlock your potential.",
    icon: "🤝",
  },
  {
    id: 3,
    title: "A Confidential & Safe Space",
    text: "Your privacy and comfort are paramount. I provide a non-judgmental, secure environment where you can feel completely at ease to explore and grow.",
    icon: "🔒",
  },
  {
    id: 4,
    title: "An Evidence-Based Approach",
    text: "My methods are grounded in modern neuroscience and solution-focused brief therapy (SFBT) principles, ensuring a practical and effective experience.",
    icon: "🧠",
  },
]

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % principles.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isPaused, principles.length])

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % principles.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + principles.length) % principles.length)
  }

  return (
    <div
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-8 shadow-soft bg-card">
            <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-6">
              <div className="text-6xl flex-shrink-0">{principles[currentIndex].icon}</div>
              <div>
                <h3 className="font-bold text-2xl mb-2">{principles[currentIndex].title}</h3>
                <p className="text-gray-600 text-lg">"{principles[currentIndex].text}"</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-2 rounded-full bg-card/80 backdrop-blur-sm shadow-soft hover:shadow-softer transition-shadow"
        aria-label="Previous principle"
      >
        <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-2 rounded-full bg-card/80 backdrop-blur-sm shadow-soft hover:shadow-softer transition-shadow"
        aria-label="Next principle"
      >
        <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="flex justify-center gap-2 mt-6">
        {principles.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === currentIndex ? "bg-primary" : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to principle ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
