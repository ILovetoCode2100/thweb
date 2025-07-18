"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThistleDivider } from "@/components/thistle-divider"

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    location: "Edinburgh",
    service: "Anxiety & Stress Relief",
    rating: 5,
    text: "After struggling with anxiety for years, I finally found relief through hypnotherapy. The sessions were calming and transformative. I now have tools to manage my anxiety effectively and feel like myself again.",
    result: "Anxiety-free for 8 months",
    verified: true,
  },
  {
    id: 2,
    name: "James K.",
    location: "Glasgow",
    service: "Stop Smoking",
    rating: 5,
    text: "I was sceptical at first, but the stop smoking programme really worked! Haven't touched a cigarette in 6 months. The support and techniques provided were invaluable. Best decision I've made.",
    result: "Smoke-free for 6 months",
    verified: true,
  },
  {
    id: 3,
    name: "Emma T.",
    location: "Stirling",
    service: "Confidence Building",
    rating: 5,
    text: "My confidence has soared since working with this amazing hypnotherapist. I've achieved career goals I never thought possible and now speak confidently in meetings. Highly recommend!",
    result: "Promoted to senior manager",
    verified: true,
  },
  {
    id: 4,
    name: "David R.",
    location: "Perth",
    service: "Sleep Issues",
    rating: 5,
    text: "Sleep issues plagued me for years. After just a few sessions, I'm sleeping through the night. The personalised approach made all the difference. I wake up refreshed every morning now.",
    result: "Sleeping 8 hours nightly",
    verified: true,
  },
  {
    id: 5,
    name: "Lisa H.",
    location: "Dundee",
    service: "Weight Management",
    rating: 5,
    text: "The Virtual Gastric Band programme changed my relationship with food completely. I've lost 3 stone and kept it off for over a year. It's not a diet - it's a complete mindset shift.",
    result: "Lost 3 stone, maintained for 1 year",
    verified: true,
  },
  {
    id: 6,
    name: "Michael S.",
    location: "Aberdeen",
    service: "Fears & Phobias",
    rating: 5,
    text: "My fear of flying was ruining my life and career. After hypnotherapy, I took my first flight in 10 years! Now I travel regularly for work. The transformation was incredible.",
    result: "Flying regularly for work",
    verified: true,
  },
  {
    id: 7,
    name: "Rachel P.",
    location: "Inverness",
    service: "Anxiety & Stress Relief",
    rating: 5,
    text: "Work stress was overwhelming me. Through hypnotherapy, I learned to manage pressure and stay calm. My colleagues have noticed the positive change. I'm more productive and happier.",
    result: "Stress levels reduced by 80%",
    verified: true,
  },
  {
    id: 8,
    name: "Tom W.",
    location: "Edinburgh",
    service: "Confidence Building",
    rating: 5,
    text: "Public speaking terrified me. Now I give presentations confidently and even enjoy it! The techniques I learned have transformed my professional life. Thank you for believing in me.",
    result: "Regular public speaker",
    verified: true,
  },
  {
    id: 9,
    name: "Helen C.",
    location: "Falkirk",
    service: "Stop Smoking",
    rating: 5,
    text: "20 years of smoking ended after one session! I couldn't believe it. No cravings, no withdrawal symptoms. It's been 18 months now and I've never felt better. Life-changing experience.",
    result: "Smoke-free for 18 months",
    verified: true,
  },
]

const stats = [
  { number: "500+", label: "Success Stories" },
  { number: "4.9/5", label: "Average Rating" },
  { number: "95%", label: "Client Satisfaction" },
  { number: "10+", label: "Years Experience" },
]

export default function TestimonialsPage() {
  const GOOGLE_CALENDAR_URL =
    "https://calendar.google.com/calendar/u/0/appointments/AcZssZ0vfPFospMogOJuYcXc7z-99U7EP_jaZCQDbPU="

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">Client Success Stories</Badge>
            <h1 className="mb-6 text-primary">Real People, Real Results</h1>
            <p className="lead max-w-3xl mx-auto">
              Discover how hypnotherapy has transformed the lives of clients across Scotland. These are genuine
              testimonials from real people who've experienced lasting positive change.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background border-b border-primary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ThistleDivider />

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card className="p-6 h-full flex flex-col hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                        <p className="small">{testimonial.location}</p>
                      </div>
                    </div>
                    {testimonial.verified && (
                      <Badge
                        variant="outline"
                        className="px-2 py-1 text-xs bg-green-50 text-green-700 border-green-200"
                      >
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Verified
                      </Badge>
                    )}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Service */}
                  <Badge className="w-fit mb-4 bg-primary/10 text-primary border-primary/20 text-xs">
                    {testimonial.service}
                  </Badge>

                  {/* Testimonial Text */}
                  <blockquote className="text-gray-700 mb-4 flex-grow italic">"{testimonial.text}"</blockquote>

                  {/* Result */}
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm font-medium text-green-700">{testimonial.result}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ThistleDivider />

      {/* Video Testimonials Placeholder */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-6">Video Testimonials</h2>
            <p className="lead max-w-3xl mx-auto">
              Hear directly from clients about their hypnotherapy journey and transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[1, 2].map((video, index) => (
              <motion.div
                key={video}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-0 overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-br from-primary/5 to-secondary/10 flex items-center justify-center relative group cursor-pointer">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-background/90 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6 text-primary ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-600 font-medium">
                        {video === 1 ? "Sarah's Anxiety Recovery Story" : "James's Stop Smoking Success"}
                      </p>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  </div>
                  <div className="p-4">
                    <p className="small">
                      {video === 1
                        ? "Watch Sarah share how hypnotherapy helped her overcome 15 years of anxiety"
                        : "Discover how James quit smoking after 20 years in just one session"}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ThistleDivider />

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="mb-6">Ready to Write Your Success Story?</h2>
            <p className="lead mb-8">
              Join hundreds of satisfied clients who have transformed their lives through hypnotherapy. Your journey to
              positive change starts with a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={GOOGLE_CALENDAR_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg hover:shadow-xl transition-all group"
                >
                  <svg
                    className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Book Free Consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="group bg-transparent">
                  <svg
                    className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                  View Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
