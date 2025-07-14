"use client"

import { motion } from "framer-motion"
import { ThistleDivider } from "@/components/thistle-divider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "What is Solution-Focused Hypnotherapy?",
    answer:
      "It's a modern, positive type of therapy that combines psychotherapy techniques with hypnosis. We focus on your strengths and your desired future, rather than analyzing problems or past traumas. It's a collaborative process designed to help you find your own solutions quickly and effectively.",
  },
  {
    question: "What does hypnosis feel like? Will I be in control?",
    answer:
      "Hypnosis, or trance, is a very natural state of focused attention, similar to daydreaming or being absorbed in a good book. It's very relaxing. You are always in complete control, can hear everything that is said, and can bring yourself out of the state at any time. You cannot be made to do anything against your will.",
  },
  {
    question: "How do I know you are a qualified and professional therapist?",
    answer:
      "I hold a Diploma in Clinical Hypnotherapy (DipCH) and am a registered member of both the National Council for Hypnotherapy (NCH) and the General Hypnotherapy Register (GHR). These bodies require adherence to a strict code of ethics, continuous professional development, and full professional insurance, all of which I maintain.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "The number of sessions varies as each person is unique. However, solution-focused hypnotherapy is a brief therapy. For general issues like anxiety or confidence, 6-12 sessions are typical. For phobias, it's often just 4 sessions, and for stopping smoking, it's a single, longer session.",
  },
  {
    question: "What happens in the free initial consultation?",
    answer:
      "The free 30-minute consultation is a relaxed, informal chat. It's a chance for you to tell me what you'd like to achieve, ask any questions, and for me to explain how hypnotherapy can help. There is absolutely no obligation to book any sessions afterwards.",
  },
  {
    question: "Are sessions confidential?",
    answer:
      "Absolutely. Confidentiality is paramount and is a cornerstone of my ethical commitment to you. Everything we discuss is held in the strictest confidence, in line with the codes of conduct of my registering bodies.",
  },
  {
    question: "Do you offer online sessions?",
    answer:
      "Yes, I offer sessions both online via video call and in-person in Edinburgh. Online sessions are just as effective as in-person ones and offer the convenience of being in your own comfortable space.",
  },
]

export default function FAQPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600">
              Find answers to common questions about hypnotherapy and my practice.
            </p>
          </motion.div>
        </div>
      </section>

      <ThistleDivider />

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12 bg-primary/5 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-4">Have More Questions?</h3>
            <p className="text-gray-600 mb-6">
              I'm happy to answer any other questions you may have during a free consultation.
            </p>
            <Link href="/book">
              <Button variant="outline">Book a Free Chat</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
