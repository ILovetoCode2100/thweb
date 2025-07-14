"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ThistleDivider } from "@/components/thistle-divider"
import { AnxietyIcon, ConfidenceIcon, SmokingIcon, WeightIcon, SleepIcon, PhobiaIcon } from "@/components/service-icons"

const services = [
  {
    title: "Anxiety & Stress Relief",
    slug: "anxiety-stress-relief",
    icon: AnxietyIcon,
    description:
      "Learn to manage anxiety, calm a busy mind, and build resilience to life's pressures in a safe, supportive environment.",
    features: ["Generalised Anxiety", "Social Anxiety", "Panic Attacks", "Work-related Stress"],
  },
  {
    title: "Confidence Building",
    slug: "confidence-building",
    icon: ConfidenceIcon,
    description:
      "Overcome self-doubt, quiet your inner critic, and develop a core of authentic self-confidence to achieve your goals.",
    features: ["Public Speaking", "Interview Confidence", "Social Confidence", "Self-Esteem"],
  },
  {
    title: "Stop Smoking",
    slug: "stop-smoking",
    icon: SmokingIcon,
    description: "A single, powerful session designed to help you break the habit and become a non-smoker for life.",
    features: ["Single Session Treatment", "Craving Management", "Habit Replacement", "Long-term Support"],
  },
  {
    title: "Weight Management",
    slug: "weight-management",
    icon: WeightIcon,
    description:
      "Change your relationship with food, overcome emotional eating, and build healthy, sustainable habits without restrictive dieting.",
    features: ["Mindful Eating", "Emotional Eating", "Portion Control", "Healthy Habits"],
  },
  {
    title: "Sleep Issues",
    slug: "sleep-issues",
    icon: SleepIcon,
    description:
      "Retrain your brain for restful, natural sleep. Overcome insomnia and wake up feeling refreshed and restored.",
    features: ["Insomnia Relief", "Sleep Anxiety", "Racing Mind", "Sleep Hygiene"],
  },
  {
    title: "Fears & Phobias",
    slug: "fears-phobias",
    icon: PhobiaIcon,
    description:
      "Gently and effectively dismantle irrational fears and phobias that hold you back from living life to the fullest.",
    features: ["Flying Phobia", "Animal Phobias", "Medical Phobias", "Claustrophobia"],
  },
]

export default function ServicesPage() {
  return (
    <>
      <section>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="mb-6 text-primary">Hypnotherapy Services</h1>
            <p className="lead">
              A range of solution-focused services, each taylored to your unique needs and desired outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      <ThistleDivider />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex"
              >
                <Card className="h-full hover:shadow-softer transition-all group flex flex-col w-full">
                  <div className="p-8 flex-grow">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h4 className="mb-3">{service.title}</h4>
                    <p className="text-gray-600 mb-4 text-base">{service.description}</p>

                    <div className="mb-6">
                      <p className="text-sm font-semibold text-gray-500 mb-2">Can help with:</p>
                      <ul className="space-y-1">
                        {service.features.map((feature) => (
                          <li key={feature} className="text-sm text-gray-600 flex items-start">
                            <svg
                              className="w-4 h-4 text-primary mt-0.5 mr-2 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-8 pt-0 mt-auto">
                    <Link href={`/services/${service.slug}`}>
                      <Button className="w-full">Learn More</Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
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
            <h2 className="mb-6">Not Sure Which Service You Need?</h2>
            <p className="lead mb-8">
              That's perfectly normal. During your free consultation, we'll discuss your specific situation and I can
              recommend the most effective approach for you.
            </p>
            <Link
              href="https://calendar.google.com/calendar/u/0/appointments/AcZssZ0vfPFospMogOJuYcXc7z-99U7EP_jaZCQDbPU="
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                Book Free Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
