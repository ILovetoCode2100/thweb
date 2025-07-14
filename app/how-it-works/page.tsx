"use client"

import { motion } from "framer-motion"
import { ThistleDivider } from "@/components/thistle-divider"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const processSteps = [
  {
    step: 1,
    title: "Free Initial Consultation",
    description:
      "We begin with a complimentary, no-obligation 30-minute chat. This is a chance for you to ask questions, discuss your goals, and for us to see if we're a good fit to work together. It's a relaxed conversation, not a sales pitch.",
    icon: "💬",
  },
  {
    step: 2,
    title: "The First Session: Understanding & Trance",
    description:
      "Our first full session involves a detailed discussion about your preferred future. We'll explore your strengths and resources. Then, I'll gently guide you into a relaxed state of trance, where we begin the positive suggestion work.",
    icon: "🧠",
  },
  {
    step: 3,
    title: "Subsequent Sessions: Building Momentum",
    description:
      "Each following session builds on the last. We'll start by focusing on the positive changes you've noticed, no matter how small. We then use this momentum in our trance work to reinforce progress and build lasting change.",
    icon: "🚀",
  },
  {
    step: 4,
    title: "Empowerment & Moving Forward",
    description:
      "My goal is to empower you with the tools and mindset to continue your progress independently. Solution-focused hypnotherapy is typically a brief therapy; you'll be equipped for long-term success in a relatively short time.",
    icon: "🌟",
  },
]

export default function HowItWorksPage() {
  return (
    <>
      <section className="relative pt-32 pb-12 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">A Clear Path to Positive Change</h1>
            <p className="text-xl text-gray-600">
              My process is simple, transparent, and designed to be a collaborative partnership from start to finish.
            </p>
          </motion.div>
        </div>
      </section>

      <ThistleDivider />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-20 h-20 rounded-full bg-white border-4 border-primary flex items-center justify-center text-4xl">
                      {step.icon}
                    </div>
                  </div>
                  <Card className="p-8 shadow-lg w-full">
                    <h3 className="text-2xl font-bold text-center mb-4">
                      Step {step.step}: {step.title}
                    </h3>
                    <p className="text-gray-600 text-lg text-center">{step.description}</p>
                  </Card>
                </div>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Take the First Step?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Your journey begins with a simple conversation. Book your free, no-obligation consultation today.
            </p>
            <Link href="/book">
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
