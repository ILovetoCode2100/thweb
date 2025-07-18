"use client"

import { HeroSection } from "@/components/hero-section"
import { ThistleDivider } from "@/components/thistle-divider"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { AnxietyIcon, ConfidenceIcon, SmokingIcon, WeightIcon, SleepIcon, PhobiaIcon } from "@/components/service-icons"

const services = [
  {
    title: "Anxiety & Stress Relief",
    icon: AnxietyIcon,
    description:
      "Find calm and balance through proven techniques that help manage anxiety and reduce stress naturally.",
    link: "/services/anxiety-stress-relief",
  },
  {
    title: "Confidence Building",
    icon: ConfidenceIcon,
    description:
      "Unlock your inner confidence and overcome self-doubt to achieve your personal and professional goals.",
    link: "/services/confidence-building",
  },
  {
    title: "Stop Smoking",
    icon: SmokingIcon,
    description:
      "Break free from nicotine addiction with our effective stop smoking programme designed for lasting change.",
    link: "/services/stop-smoking",
  },
  {
    title: "Weight Management",
    icon: WeightIcon,
    description:
      "Develop a healthy relationship with food and achieve sustainable weight management through mindset change.",
    link: "/services/weight-management",
  },
  {
    title: "Sleep Issues",
    icon: SleepIcon,
    description: "Overcome insomnia and restore healthy sleep patterns for better rest and improved wellbeing.",
    link: "/services/sleep-issues",
  },
  {
    title: "Fears & Phobias",
    icon: PhobiaIcon,
    description: "Release limiting fears and phobias that hold you back from living life to the fullest.",
    link: "/services/fears-phobias",
  },
]

export default function Home() {
  return (
    <>
      <HeroSection />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-6">A Practice Built on Trust & Professionalism</h2>
            <p className="lead max-w-3xl mx-auto">
              Your wellbeing is my priority. I am committed to providing the highest standard of care, backed by a
              promise of quality and integrity.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 text-center shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h4 className="mb-2">Professional Standards</h4>
              <p className="text-gray-600">
                As a registered member of the NCH, I am committed to continuous professional development and the highest
                ethical standards.
              </p>
            </Card>
            <Card className="p-8 text-center shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h4 className="mb-2">Strict Confidentiality</h4>
              <p className="text-gray-600">
                Your privacy is paramount. All sessions and communications are held in the strictest confidence,
                adhering to professional ethical codes.
              </p>
            </Card>
            <Card className="p-8 text-center shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="mb-2">Solution-Focused</h4>
              <p className="text-gray-600">
                My approach is positive and forward-looking. We focus on your strengths and preferred future, not on
                dwelling on the past.
              </p>
            </Card>
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
            className="text-center mb-16"
          >
            <h2 className="mb-6">How Can Hypnotherapy Help You?</h2>
            <p className="lead max-w-3xl mx-auto">
              Discover the transformative power of clinical hypnotherapy for a wide range of concerns. Each service is
              taylored to your unique needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={service.link} className="block group h-full">
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 shadow-md flex flex-col">
                    <div className="p-8 flex-grow">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="mb-4 group-hover:text-primary transition-colors">{service.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                    <div className="p-8 pt-0 mt-auto">
                      <div className="flex items-center text-primary font-semibold group-hover:gap-3 transition-all text-sm">
                        <span>Learn more</span>
                        <svg
                          className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ThistleDivider />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/morven-taylor-slater.jpg"
                  alt="Morven Taylor-Slater, Professional Clinical Hypnotherapist"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Meet Your Hypnotherapist</Badge>
                <h2 className="mb-6">A Modern Approach to Hypnotherapy</h2>
              </div>

              <div className="space-y-6 text-lg text-gray-600 mb-8">
                <p>
                  Hello, I'm Morven. I'm passionate about the transformative power of hypnotherapy and dedicated to
                  providing a modern, evidence-based approach to help you achieve your goals.
                </p>
                <p>
                  As a registered member of the National Council for Hypnotherapy (NCH), I maintain the highest
                  professional standards.
                </p>
              </div>

              <Link href="/about">
                <Button size="lg" className="group">
                  Read My Full Story
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <ThistleDivider />

      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">My Approach</Badge>
            <h2 className="mb-6">A Partnership in Your Success</h2>
            <p className="lead max-w-3xl mx-auto">
              My practice is built on core principles that ensure a safe, effective, and empowering experience for every
              client.
            </p>
          </motion.div>

          <TestimonialsCarousel />
        </div>
      </section>

      <ThistleDivider />

      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="mb-6">Ready to Transform Your Life?</h2>
            <p className="lead mb-8 max-w-2xl mx-auto">
              Take the first step towards positive change with a free, no-obligation consultation. Discover how
              hypnotherapy can be taylored to help you achieve your goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg hover:shadow-xl transition-all group"
                >
                  Book Free Consultation
                </Button>
              </Link>
              <Link href="/faq">
                <Button size="lg" variant="outline" className="group bg-transparent">
                  Common Questions
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
